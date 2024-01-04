---
title: "BootMii Recovery (RestoreMii)"
---

{% include toc title="Inhaltsverzeichnis" %}

Diese Anleitung gibt Anweisungen, wie man ein Backup deines NAND mit BootMii wiederherstellen kann. Bitte beachte, dass dies in der Regel die <strong>letzte</strong> Methode ist, um einen Brick zu reparieren, falls du einen hast und wenn es dein Problem nicht behebt, musst du eventuell nach Unterstützung suchen. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice--info}

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same also goes for faulty SD cards.
{: .notice--danger}

### Voraussetzungen

* An earlier NAND Backup made by [BootMii](https://wii.guide/bootmii)

### Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

### Important notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Anleitung

1. Starte den Homebrew-Kanal.
1. Press the HOME Button, then select "Launch BootMii".
    + If you are even able to enter BootMii, enter the Homebrew Channel instead, and try your best to [identify what caused the brick](bricks) and reverse it.

    ![](/images/bootmii/BootMii_HBC.png)

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Klicke hier, um zum Seitenindex zurückzukehren.](site-navigation)
{: .notice--info}
