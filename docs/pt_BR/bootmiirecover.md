# BootMii Recovery (RestoreMii)

Este guia fornecerá instruções sobre como restaurar um backup da sua NAND com o BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.

:::

::: warning

Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

Wiis "Family Edition" (Wiis sem portas GameCube) NÃO PODEM restaurar backups da NAND. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração. Para ajuda adicional, por favor procure suporte.

:::

::: danger

NÃO restaure um backup da NAND não verificado, ou um que não seja do seu Wii: isso pode levar a um BRICK PIOR. O mesmo se aplica ao uso de cartões SD defeituosos.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Restaurando dados individuais de um backup da NAND

Existe provavelmente uma maneira muito mais segura e rápida de trazer os dados individuais de volta ao seu Wii, provavelmente envolvendo o uso do emulador Dolphin.

Por exemplo, se você quiser restaurar seus dados do Wii Message Board, use o Dolphin para importar seu backup da NAND. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Notas importantes

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- Se você tiver o BootMii como IOS instalado, o RestoreMii irá pedir-lhe o Konami Code através de um Controle de GameCube.

- Você deve usar os botões POWER (direita) e RESET (selecionar) no seu console, ou um controle de GameCube conectado na porta 1 para navegar no BootMii. Para navegar com um controle de GameCube, clique esquerda/direita no +Control Pad em um controle de GameCube. Para selecionar, pressione A.

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

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
