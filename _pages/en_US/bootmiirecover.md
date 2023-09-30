---
title: "BootMii Recovery"
---

#### Requirements
* An earlier NAND Backup made by [BootMii](https://wii.guide/bootmii)
* **A GameCube Controller**

#### Important notes

**Restoring a NAND backup is usually a last resort.**

If you are even able to enter BootMii, enter the Homebrew Channel instead, and try your best to [identify what caused the brick](bricks) and reverse it.

If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).
{: .notice--info}

**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups.**

Family edition Wiis released very well after [boot1 was patched](https://wiibrew.org/wiki/Wii_Family_Edition#Changes_carried_over_from_previous_revisions), which means you will not have BootMii as boot2.

If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

Family edition Wiis do not have ports for GameCube controllers.

**Restoring an unverified NAND backup may lead to a WORSE BRICK.**

The same also goes for faulty SD cards.

**Want to restore individual data from your NAND backup?**

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup, find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card as `cdbackup.vff`, and use [cdbackup](https://oscwii.org/library/app/cdbackup) to restore it.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

#### Instructions

If you have BootMii installed as boot2, you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice}

1. Launch the Homebrew Channel.
1. Press the HOME Button, then select "Launch BootMii".

    You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. To navigate with a GameCube controller, click left/right on the +Control Pad 
    on a GameCube controller. To select, press A.
    {: .notice--info}

1. Select the Options button (the icon with the gears).
    ![BootMii_Gears_Icon](/images/BootMii/BootMii_Gears_Icon.png)
1. Select the RestoreMii button.
    ![BootMii_Red_Arrow](/images/BootMii/BootMii_Red_Arrow.png)
1. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START
1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.
