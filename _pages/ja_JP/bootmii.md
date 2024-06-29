---
title: "NANDのバックアップ(BootMii)"
---

{% include toc title="Table of Contents" %}

BootMiiを使用し、NANDバックアップを作成するには、 **SDカード** が必要です。 SDカードが無い場合、このページをスキップできますが、後で実行することを推奨します。

You need an **SD card** to create a NAND backup using BootMii. If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.
{: .notice--warning}

### 必要なもの

* An SD card with at least 512MB of free space

### 実行方法

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. この場合は、Step4から始めてください。
{: .notice--info}

1. Wiiの電源を入れます。
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.
    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
    {: .notice--warning}

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    Wiiリモコンを使用してBootMiiを操作することはできません。 Wii本体のPOWER(電源)ボタンとRESET(リセット)ボタンか、ポート1に接続しているGCコントローラーで操作できます。 To navigate between options, press POWER. To select an option, press RESET.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. 一番左のアイコンを選択します。

    ![](/images/bootmii/BootMii_Backup.png)

1. NANDバックアップが開始します。 進行状況は画面に表示されます。
    + "Bad Blocks" are normal. NANDバックアップでいくつか表示されても問題はありません。

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After this step, it will verify the backup. 確認が終わった後に全てのブロックが緑色になっていることが望ましいです。
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. There are often better ways to unbrick your console.
[ブリックの原因を特定](bricks)し、その問題を解決することに注力してください。
[ブリックの原因を特定](bricks)し、その問題を解決することに注力してください。 To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

### Autobooting

If you were able to install BootMii as boot2, but dont want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.
{: .notice--info}

### Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open Dolphin Emulator.
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select Open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. IOSでしかBootMiiを導入できなかった場合は、必ず導入してください。
{: .notice--info}
