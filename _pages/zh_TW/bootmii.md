---
title: "進行 BootMii 備份"
---

{% include toc title="條目內容" %}

您需要一張 **SD 卡** 才能使用 BootMii 建立 NAND 備份。 如果您沒有任何可用的 SD 卡，您可以跳過此頁面，但強烈建議您盡快進行 NAND 備份。

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND. If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND.
{: .notice--warning}

### 前置需求

* 至少有 512MB 可用空間的 SD 卡

### Instructions

如果您的 BootMii 安裝於 boot2 當中，則需要通過重新啟動主機來啟動 BootMii。 如果是這種情況，請跳過步驟1和2。
{: .notice--info}

1. Power on your console.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. 按下Home按鈕，選擇『Launch BootMii』。

    ![](/images/bootmii/BootMii_HBC.png)

    如果 `Launch BootMii` 按鈕沒有出現的話，請 [重新啟動 HackMii Installer](hackmii) 並安裝 BootMii。
    {: .notice--warning}

    如果螢幕保持黑屏且光碟機的指示燈閃爍，那代表您的 SD 卡中缺少 BootMii 所需的檔案。 下載[此壓縮檔](https://static.hackmii.com/bootmii_sd_files.zip)並將其解壓縮到 SD 卡的根目錄，然後重試。
    {: .notice--warning}

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    您將無法使用 Wii 控制器來控制 BootMii。 您必須使用主機上的 POWER 和 RESET 按鈕，或者將 GameCube 控制器插入端口 1 來控制 BootMii。 To navigate between options, press POWER. To select an option, press RESET. To select an option, press RESET.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

1. NAND 備份將開始。 您將在螢幕上看到進度。
    + "Bad Blocks" are normal, and mostly originate from the factory due to NAND binning. Don't worry when you see some on a NAND backup. Don't worry when you see some on a NAND backup.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. 在此步驟之後，BootMii 將驗證此備份。 Ideally, all the blocks should be green after the verification process.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. 若要退出 BootMii，請按返回按鈕（帶箭頭的那個），然後您可以按 Wii 選單按鈕或 Homebrew 頻道按鈕退出您想要的地方。

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
請注意，<strong>還原 NAND 備份通常是不得已的最後手段</strong>，通常有更好的方法來修復您的磚機。 There are often better ways to unbrick your console. 盡可能的[確定您的變磚的問題所在](bricks)，並試著還原您先前的操作。
盡可能的[確定您的變磚的問題所在](bricks)，並試著還原您先前的操作。
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups.** **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

為確保您不會不小心遺失這些檔案，建議您將 `nand.bin` 和 `keys.bin` 從 SD 卡的根目錄複製到您的電腦中。 `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
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

1. Get the latest beta or developement release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open dolphin emulator
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select open.

[繼續至安裝 Priiloader](priiloader)<br> Priiloader 提供防磚保護，強烈建議安裝，尤其是當您只能將 BootMii 安裝為 IOS 時。 It is especially important for users of BootMii on IOS.
{: .notice--info}
