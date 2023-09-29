// Import necessary modules
import YNAB from 'ynab';

export const getYNABClient  = () => {
  if (!getYNABClient.client) {
    const ynabAPI = new YNAB.API(process.env.YNAB_API_TOKEN);
    getYNABClient.client = ynabAPI;
  }
  return getYNABClient.client;
};

export async function findBudgetByName(name) {
  try {
    const ynabAPI = getYNABClient()
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const budgets = budgetsResponse.data.budgets;
    
    const foundBudget = budgets.find((budget) => budget.name === name);
    
    if (foundBudget) {
      return foundBudget;
    } else {
      console.error(`Budget not found: ${name}`);
      return null;
    }
  } catch (error) {
    console.error('Error finding budget:', error);
    return null;
  }
}

export async function findAccountByName(budgetId, accountName) {
    try {
      const ynabAPI = getYNABClient()
      // Get accounts for the specified budget
      const accountsResponse = await ynabAPI.accounts.getAccounts(budgetId);
      const accounts = accountsResponse.data.accounts;
  
      // Find the account by name
      const matchingAccount = accounts.find((account) => account.name === accountName);
  
      if (matchingAccount) {
        return matchingAccount;
      } else {
        console.error('Account not found:', accountName);
        return null;
      }
    } catch (error) {
      console.error('Error finding account:', error);
      return null;
    }
  }

  async function getAllTransactions(budgetId, accountId) {
    try {
      const ynabAPI = getYNABClient()
      const response = await ynabAPI.transactions.getTransactionsByAccount(budgetId, accountId);
      
      if (response.data.transactions) {
        return response.data.transactions;
      } else {
        console.error('No transactions found for the account.');
        return [];
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  }
// Function to get the latest transaction from the specified budget
export async function getLatestTransaction(budgetId, accountId) {
  try {
    const ynabAPI = getYNABClient()
    const transactions = await getAllTransactions(budgetId, accountId)
    
    if (transactions.length > 0) {
      const latestTransaction = transactions[transactions.length - 1];
    } else {
      console.log('No transactions found in the budget.');
    }
  } catch (error) {
    console.error('Error getting transactions:', error);
  }
}

// Function to add a new transaction to the specified budget
export async function addTransactions(budgetId, transactionData) {
  try {
    const ynabAPI = getYNABClient()
    const createTransactionResponse = await ynabAPI.transactions.createTransaction(budgetId, transactionData);
    console.log('Transaction added successfully:');
    console.log(createTransactionResponse.data.transactions);
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
}