# Join all the args to make one string
$custom_command = $args -join " "

Write-Host $custom_command

Import-Module dotenv
Set-DotEnv

$DEVICE_TOKEN_UUID = $env:DEVICE_TOKEN_UUID
$N26U = $env:N26U
$N26P = $env:N26P

$custom_command = "/n26 "+$custom_command

# Check if a custom command argument was provided
if ($custom_command) {
    
    $docker_command = "docker run -e N26_USERNAME=`"$N26U`" -e N26_PASSWORD=`"$N26P`" -e N26_DEVICE_TOKEN=`"$DEVICE_TOKEN_UUID`" guitmz/n26 $custom_command"
    # Run the docker command with the custom command
    $docker_output = Invoke-Expression $docker_command
    $docker_output | Out-File -FilePath $PSScriptRoot"\transactions.json"
} else {
    Write-Host "Usage: .\script.ps1 <custom_command>"
}

Remove-DotEnv