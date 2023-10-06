---
title: "Recuperação com BootMii"
---

{% include toc title="Sumário" %}

Este guia fornecerá instruções sobre como restaurar um backup da sua NAND com o BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

Se você tem o BootMii instalado como boot2, você precisará iniciar o BootMii reiniciando o console. Pule os passos 1 e 2 se for esse o caso.
{: .notice--info}

Se a tela permanecer preta e a luz azul do disco piscar ao iniciar o BootMii, você não possui os arquivos do BootMii no seu cartão SD. Baixe [esse arquivo zip](https://static.hackmii.com/bootmii_sd_files.zip) e extraia ele para a raiz do seu cartão SD, então, tente novamente.
{: .notice--warning}


Wiis "Family Edition" (Wiis sem portas GameCube) NÃO PODEM restaurar backups da NAND. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração. For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same goes for using faulty SD cards.
{: .notice--danger}

### Requisitos

* An earlier NAND Backup made by [BootMii](bootmii)

### Restoring individual data from a NAND backup

There is likely a much safer and faster way to bring individual data back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

### Important preliminary notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Instruções

1. Abra o Homebrew Channel.
1. Pressione o botão HOME, depois selecione "Launch BootMii".
1. Selecione o botão Opções (o ícone com as engrenagens).

    ![](/images/BootMii/BootMii_Gears_Icon.png)

1. Select the RestoreMii button.

    ![](/images/BootMii/BootMii_Red_Arrow.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START
1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
