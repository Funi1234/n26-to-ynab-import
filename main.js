import * as ynab from './ynabWrap.js';
import { subDays, subMonths, format, parseISO, parse } from 'date-fns';

// import * as ps from './runPowershell.js';
import path from 'path';
import { fileURLToPath } from 'url';
import * as rd from './runDocker.js'
import dotenv from 'dotenv';

(async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    dotenv.config({ path: path.resolve(__dirname, '.env') });
    const BUDGET_NAME = process.env.BUDGET_NAME;
    const ACCOUNT_NAME = process.env.ACCOUNT_NAME;

    // Setup YNAB API
    const budget = await ynab.findBudgetByName(BUDGET_NAME);
    if (!budget.id) {
        process.exit(1);
    }
    const account = await ynab.findAccountByName(budget.id, ACCOUNT_NAME);
    if (!account.id) {
        process.exit(2);
    }
    
    let api = ynab.getYNABClient()

    // Calculate the date one month ago
    const twoMonthAgo = subMonths(new Date(), 2);
    const formattedDate = format(twoMonthAgo, 'yyyy-MM-dd');

    // We need to get the date of the last reconciled transaction
    const allTrans = await api.transactions.getTransactionsByAccount(budget.id, account.id, formattedDate);
    const reconciledTrans = allTrans.data.transactions.filter(transaction => transaction.cleared === 'reconciled');
    
    const dateOfLastReconciledTrans = reconciledTrans[reconciledTrans.length -1].date
    const bufferDate = format(subDays(parse(dateOfLastReconciledTrans, 'yyyy-MM-dd', new Date()), 2), 'yyyy-MM-dd');

    var transactions = []
    try {
        transactions = JSON.parse(await rd.runDocker(bufferDate))
    } catch (error) {
        console.log(error)
        process.exit(3);
    }

    try {
        const sendToYNAB = []
        const importIDs = {}
        for (const trans of transactions) {
            const transDate = format(parseISO(trans.createdTS), 'yyyy-MM-dd')
            const importID = `YNAB:${trans.amount * 1000}:${transDate}`
            if (importIDs.hasOwnProperty(importID)) {
                importIDs[importID]++;
              } else {
                importIDs[importID] = 0;
              }

            const t = {
                account_id: account.id,
                date: transDate,
                payee_name: trans.merchantName || trans.partnerName,
                amount: trans.amount * 1000,
                cleared: 'uncleared',
                import_id: `${importID}:${importIDs[importID]}`,
                memo: trans.referenceText
              }

              sendToYNAB.push(t)
        }


        if (sendToYNAB.length == 0) {
            process.exit(4);
        }
        await ynab.addTransactions(budget.id, {"transactions": sendToYNAB})

    } catch (error) {
        console.log(error)
        process.exit(5);
    }
})();
