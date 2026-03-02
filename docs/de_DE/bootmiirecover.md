# BootMii Recovery (RestoreMii)

Diese Anleitung gibt Anweisungen, wie man ein Backup deines NAND mit BootMii wiederherstellen kann.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Wenn du BootMii als boot2 installiert hast, musst du die Konsole neu starten, um BootMii zu starten. Überspringe Schritt 1 und 2 in diesem Fall.

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller. This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## Want to restore individual data from your NAND backup?

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Requirements

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## Instructions

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Press the HOME Button, then select "Launch BootMii".

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Klicke hier, um zum Seitenindex zurückzugelangen.](site-navigation)

:::
