# BootMii Recovery (RestoreMii)

Este guia fornecerá instruções sobre como restaurar um backup da sua NAND com o BootMii.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Se você tiver o BootMii como IOS instalado, o RestoreMii irá pedir-lhe o Konami Code através de um Controle de GameCube. This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## Restaurando dados individuais de um backup da NAND

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

Por exemplo, se você quiser restaurar seus dados do Wii Message Board, use o Dolphin para importar seu backup da NAND. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Requirements

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## Instructions

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Pressione o botão HOME, depois selecione "Launch BootMii".

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Selecione o botão Options (o ícone com as engrenagens).

   ![](/images/bootmii/BootMii_Gears.png)

4. Selecione o botão RestoreMii.

   ![](/images/bootmii/BootMii_Restore.png)

5. O BootMii informará que ele será executado no modo SIMULATION, você pode pressionar A ou Reset para continuar.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Se o BootMii estiver instalado como IOS, entre com o Konami Code no seu controle de GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. O BootMii será executado através do processo de restauração como uma simulação, detalhando o que será apagado e reescrito. Assim que isso for feito, você tem uma última chance de se afastar do processo de restauração. Caso contrário, pressione o botão INICIAR ou Eject para começar.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Aperte qualquer botão no seu console Wii ou no controle de GCN.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Pressione o botão Voltar (o botão com uma seta), então pressione o botão de Menu do Wii ou o botão do Homebrew Channel para sair do BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Clique aqui para voltar para o índice do site.](site-navigation)

:::
