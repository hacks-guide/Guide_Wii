---
title: "NANDのバックアップ(BootMii)"
---

{% include toc title="Table of Contents" %}

BootMiiでは、WiiのNANDをバックアップしたり、リストアすることができます。 このページでは、WiiのNANDをSDカードにバックアップする方法を説明します。

Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 いずれにしても、NANDのバックアップを作成することをお勧めします。
{: .notice--danger}

BootMiiを使用し、NANDバックアップを作成するには、 **SDカード** が必要です。 If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND.
{: .notice--warning}

Navigating BootMii is not possible using a Wii Remote. You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1. To navigate between options, press POWER on your Wii (or left/right on the +Control Pad on a GameCube controller). To select an option, press RESET on your Wii or A on your GameCube controller. You will NEED to use a GameCube controller to restore a NAND backup in the future if BootMii is installed as IOS.
{: .notice--info}

If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.
{: .notice--warning}

If the screen stays black and the blue disc drive light is blinking upon launching BootMii, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

### 必要なもの

* An SD card with a minimum 512MB of free space (1GB or more recommended)

### 実行方法

If you have BootMii installed as boot2, you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice--info}

1. Wiiの電源を入れます。
1. Launch the Homebrew Channel.
1. Press the HOME Button, then select "Launch BootMii".

    ![BootMii_Main](/images/bootmii/BootMii_Main.png)

1. Select the Options button (the icon with the gears).

    ![BootMii_Gears_Icon](/images/bootmii/BootMii_Gears_Icon.png)

1. Select the first button to the left.
    + A NAND backup will start. You can watch the progress on the screen.
    + "Bad Blocks" are normal, and mostly originate from the factory due to NAND binning. Don't worry when you see some on a NAND backup.
    + After this step, it will verify the backup. Ideally, all the blocks should be green after the verification process.

    ![BootMii_Green_Arrow](/images/bootmii/BootMii_Green_Arrow.png)

1. When the process is complete, exit the NAND backup screen by pressing any button.

    ![BootMii_NAND_Backup](/images/bootmii/BootMii_NAND_Backup.png)

1. Press the Back button (the one with an arrow), then press either the Wii Menu button or the Homebrew Channel button to exit BootMii.

    ![BootMii_Return_Arrow](/images/bootmii/BootMii_Return_Arrow.png)

<div id="restore-notice" class="notice" markdown="1">
Note: **restoring a NAND backup is usually a last resort**. There often better ways to unbrick your console.
Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover) (Original Wii only).
</div>

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is your Wii's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.
{: .notice--info}