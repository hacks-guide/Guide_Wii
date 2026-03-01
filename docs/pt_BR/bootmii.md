# Backup com BootMii

Um dos recursos mais importantes do BootMii é a habilidade de backup e restaurar o armazenamento NAND do seu Wii. Esta página irá guiá-lo no backup da sua NAND de Wii para um cartão SD, que você pode usar como preferir.

Please read the below information before proceeding further.

:::details Important Information

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis and Wii minis CANNOT restore NAND backups. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração.

:::

::: danger

**Important Warnings**

- Você precisa de um **cartão SD** para usar o BootMii, mas especialmente para criar um backup da NAND. Se você não tiver um, você pode pular essa página, entretanto é muito recomendado fazer um backup de NAND se você puder.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

## Requisitos

- Um cartão SD com pelo menos 512MB de espaço livre

##

1. Power on your console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Pressione o botão HOME, depois selecione "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Você deve ver uma imagem semelhante ao abaixo agora na sua tela:

   ![](/images/bootmii/BootMii_Main.png)

5. Selecione o botão Options (o ícone com as engrenagens).

   ![](/images/bootmii/BootMii_Gears.png)

6. Selecione o primeiro botão à esquerda.

   ![](/images/bootmii/BootMii_Backup.png)

7. Um backup da NAND será iniciado. Você pode acompanhar o progresso na tela.

   - "Bad Blocks" são normais. Não se preocupe quando você ver um em uma backup da NAND.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Depois desta etapa, o backup irá ser verificado. Idealmente, todos os blocos devem ser verdes após o processo de verificação.

   - Se você tem bad blocks de fábrica com páginas incorretas, esses blocks podem não ser verificados. Desde que todos os blocos não-ruins sejam verificados com êxito, isso deverá ficar bem.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Pressione o botão Voltar (o botão com uma seta), então pressione o botão de Menu do Wii ou o botão do Homebrew Channel para sair do BootMii.

   ![](/images/bootmii/BootMii_Return.png)

## Autoinicialização

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. Isso deve fazer com que você não perceba que você tem o BootMii instalado como boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Salve o arquivo e saia.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator. This is completely optional.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Abra o emulador Dolphin.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. É especialmente importante para os usuários do BootMii na IOS.

:::
