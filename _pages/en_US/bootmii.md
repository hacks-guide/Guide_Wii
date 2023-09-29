---
title: "BootMii Backup"
---

{% include toc title="Table of Contents" %}

![BootMii Logo](/images/bootmii.png)

You need an **SD card** to create a NAND backup using BootMii.
If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.
{: .notice--warning}

BootMii installed as boot2 is only available on Wii's shipped before mid-late-2008. If you don't have one of these Wii's, you will need to install as an IOS.
{: .notice--info}

BootMii allows for backing up and restoring your Wii's NAND storage. This page will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

#### Requirements

- An SD card with at least 512MB of free space

#### Instructions

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice--info}

1. Launch the Homebrew Channel.
2. Press the HOME Button, then select "Launch BootMii".
   ![BootMii_Main](/images/BootMii/BootMii_Main.png)

If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii. 
{: .notice--info}

Navigating BootMii is not possible using a Wii Remote. You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1. To navigate between options, press POWER on your Wii (or left/right on the +Control Pad 
on a GameCube controller). To select an option, press RESET on your Wii or A on your GameCube controller. 
{: .notice--info}

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card.
Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

3. Select the Options button (the icon with the gears).
   ![BootMii_Gears_Icon](/images/BootMii/BootMii_Gears_Icon.png)
4. Select the first button to the left.
   ![BootMii_Green_Arrow](/images/BootMii/BootMii_Green_Arrow.png)
   - A NAND backup will start. You can watch the progress on the screen.
   - "Bad Blocks" are normal. Don't worry when you see some on a NAND backup.
   - After this step, it will verify the backup. Ideally, all the blocks should be green after the verification process.

5. When the backup is complete, exit the NAND backup screen by pressing any button.
   ![BootMii_NAND_Backup](/images/BootMii/BootMii_NAND_Backup.png)
6. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.
   ![BootMii_Return_Arrow](/images/BootMii/BootMii_Return_Arrow.png)

<div id="restore-notice" class="notice" markdown="1">
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).

Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
</div>

Two files will have been created on the root of your SD Card; `nand.bin` and `keys.bin`. `nand.bin` is your Wii's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br>
Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS.
{: .notice--info}
