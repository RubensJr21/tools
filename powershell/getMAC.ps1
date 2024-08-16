# Obter o endereço MAC do adaptador Wi-Fi
$wifiAdapter = Get-WmiObject -Query "SELECT * FROM Win32_NetworkAdapter WHERE NetConnectionID = 'Wi-Fi'"

$macAddress = $wifiAdapter | ForEach-Object { $_.MACAddress }

if ($macAddress) {
    # Copiar o endereço MAC para a área de transferência
    $macAddress | Set-Clipboard
    # Mostrar mensagem de confirmação
    [System.Windows.Forms.MessageBox]::Show("O endereço MAC do adaptador Wi-Fi foi copiado para a área de transferência: $macAddress", "Informação")
} else {
    [System.Windows.Forms.MessageBox]::Show("Nenhum adaptador Wi-Fi foi encontrado.", "Erro")
}
