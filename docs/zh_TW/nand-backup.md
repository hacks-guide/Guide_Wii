---
outline: false
---

# Creating a NAND Backup (Wii)

In order to protect your Wii from permanant bricks, this guide will instruct you on how to create a NAND backup. Most users will want to select **nanddumper@ios**, with **BootMii** as a backup option for users that can use an SD card.

:::details Importing NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

Note that you will need to rename your NAND dump to the files above if you used **nanddumper@ios**, as described in the below section.

:::

::::: tabs

::::tab nanddumper@ios (dump to USB drive or SD card)

On Wii consoles with a usable USB port or SD card slot, nanddumper@ios allows for backing up your Wii's NAND storage. nanddumper@ios is recommended over BootMii due to its quicker speed in creating a NAND backup. This section will guide you through the process to back up your Wii's NAND, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, four files will have been created in the directory `/wii/backups` on your USB drive. `DATE_SERIAL_nand_XX.bin` is your NAND backup, and `SERIAL_keys.bin` is the file containing your console keys. `DATE_SERIAL_nand_XX.bin.sha1` and `sha1sums.txt` respectively are files containing checksums to verify the integrity of your backups, and will not be used in an actual NAND restoration.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives. You can ONLY use BootMii to restore a NAND backup if you have a usable SD card slot, as described below.

- If you are a Wii mini user or DO NOT have a usable SD card slot, you will be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires an SD card slot to read the NAND from.

- If you DO NOT have a usable GameCube controller port, you will also be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires a GameCube controller port to enter the Konami code with for consoles that do not have BootMii as boot2.

:::

## 操作說明

- A USB drive or SD card formatted as FAT32, with a minimum 512MB of free space (1GB or more recommended)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive.

3. Insert the SD card or USB drive into your Wii, and start the Homebrew Channel. Press `1` and ensure that the device you are using is selected, and then open nanddumper@ios.

   - If you get an **Exception IOS occurred!** error, simply restart your Wii and try again.

   ![](/images/nanddumper@ios/select-hbc.png)

4. nanddumper@ios will start and dump your console keys upon opening, if they are not already on your drive. Press any button that is NOT the `HOME`, `START`, or `EJECT` buttons to begin dumping your console's NAND storage.
   - If you get a **No storage devices are attached** error, ensure that your SD card or USB drive is directly connected to your Wii. If using a USB drive, it should NOT be connected to a USB hub.
   ![](/images/nanddumper@ios/dump-startup.png)

5. Your console's NAND will now begin dumping. Please wait for the NAND dump to finish before proceeding.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Once the NAND backup has concluded, press any button to exit nanddumper@ios. Your NAND backup and console keys will be output to your USB drive in directory `/wii/backups/`.

   ![](/images/nanddumper@ios/dump-complete.png)

7. On your computer, ensure that you rename `DATE_SERIAL_nand_XX.bin` to `nand.bin`, and `SERIAL_keys.bin` to `keys.bin`. This ensures that BootMii can properly parse your NAND backup in the event that it needs to be restored.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.

If you are on Wii mini, this is your primary means of brick protection.

:::

::::

::::tab BootMii (backup method)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- 如果您的 BootMii 安裝於 boot2 當中，則需要通過重新啟動主機來啟動 BootMii。 如果是這種情況，請跳過步驟1和2。

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis CANNOT restore NAND backups without hardware modification. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support.

:::

::: danger

**Important Warnings**

- This is intended to be a backup option, as BootMii is slower than nanddumper@ios. You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the nanddumper@ios guide instead.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- 如果螢幕保持黑屏且光碟機的指示燈閃爍，那代表您的 SD 卡中缺少 BootMii 所需的檔案。 Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- BootMii cannot be used on the Wii mini without hardware modification. Use **nanddumper@ios** if you are a Wii mini user.

:::

## 操作說明

- 至少有 512MB 可用空間的 SD 卡
- [BootMii](hbc)

## Instructions

1. Power on your console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. 按下Home按鈕，選擇『Launch BootMii』。

   ![](/images/bootmii/BootMii_HBC.png)

4. You should see an image similar to the below now on your screen:

   ![](/images/bootmii/BootMii_Main.png)

5. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

6. Select the first button to the left.

   ![](/images/bootmii/BootMii_Backup.png)

7. NAND 備份將開始。 您將在螢幕上看到進度。

   - "Bad Blocks" are normal, and mostly originate from the factory due to NAND binning. Don't worry when you see some on a NAND backup. Don't worry when you see some on a NAND backup.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. 在此步驟之後，BootMii 將驗證此備份。 Ideally, all the blocks should be green after the verification process.

   - If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine. As long as all non-bad blocks are successfully verified, this should be fine.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. 若要退出 BootMii，請按返回按鈕（帶箭頭的那個），然後您可以按 Wii 選單按鈕或 Homebrew 頻道按鈕退出您想要的地方。

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.

:::

::::

:::::
