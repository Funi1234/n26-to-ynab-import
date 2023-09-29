import { spawn } from 'child_process';

export function runPowerShellScript(psScriptPath, args) {
  return new Promise((resolve, reject) => {

    const ps = spawn('powershell.exe', [psScriptPath, args]);

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
        console.log(output);
        resolve();
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