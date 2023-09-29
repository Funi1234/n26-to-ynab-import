import { spawn } from 'child_process';
import { format } from 'date-fns';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

export function runDocker(dateOfLastReconciledTrans) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    dotenv.config({ path: path.resolve(__dirname, '.env') });

    const DEVICE_TOKEN_UUID = process.env.DEVICE_TOKEN_UUID
    const N26U = process.env.N26U
    const N26P = process.env.N26P

    return new Promise((resolve, reject) => {
        var ps;

        var opsys = process.platform;
        if (opsys == "darwin") {
            console.log("TODO: Implement")
        } else if (opsys == "win32" || opsys == "win64") {
            ps = spawn("powershell.exe", [`docker run -e N26_USERNAME="${N26U}" -e N26_PASSWORD="${N26P}" -e N26_DEVICE_TOKEN="${DEVICE_TOKEN_UUID}" guitmz/n26 /n26 transactions --limit 100 --from ${dateOfLastReconciledTrans} --to ${format(new Date(), 'yyyy-MM-dd')} json`]);
        } else if (opsys == "linux") {
            console.log("TODO: Implement")
        }
  
        let output = '';
        let error = '';
    
        ps.stdout.on('data', (data) => {
            output += data.toString();
        });
    
        ps.stderr.on('data', (data) => {
            error += data.toString();
        });
    
        ps.on('close', (code) => {
            if (code === 0) {
            resolve(output);
            } else {
            reject(new Error(`PowerShell script exited with code ${code}\nError: ${error}`));
            }
        });
    
        ps.on('error', (err) => {
            console.log(output);
            reject(err);
        });
    });
}