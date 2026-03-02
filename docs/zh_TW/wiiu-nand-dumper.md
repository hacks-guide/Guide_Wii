# Creating a NAND dump of the Wii U

This page will guide you through the process of creating a NAND dump for your Wii U. This will protect you in the event that something goes wrong and your Wii U becomes bricked, allowing you to restore a NAND backup.

::: tip

If you have already exploited your Wii U and created a NAND dump, proceed to [Installing the Homebrew Channel](vwii-homebrew-channel).

:::

::: warning

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, follow [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) to format it.

**DO NOT** label the SD Card as `wiiu` or it will cause issues with homebrew.

:::

## 操作說明

- A Wii U
- The latest files from [Aroma for your café](https://aroma.foryour.cafe/).
  - Review the preliminary steps, then check all 4 boxes.
  - Ensure that nanddumper is selected.
  - Click on `Download Payloads`.
  - Click on `Download Base Aroma`.
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)

## Instructions

### Section I - SD Preparations

1. Insert your Wii U's SD Card into your PC.
2. Copy the contents of the downloaded Aroma _`.zip`_ files to the root of your SD Card.
3. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.

:::details If you followed the steps correctly, your SD card should have the following layout:

```shell
💾 SD Card
 ┗ 📁 wiiu
   ┣ 📁 apps
   ┃ ┣ 📄 AromaUpdater.wuhb
   ┃ ┗ 📄 PayloadLoaderInstaller.wuhb
   ┣ 📁 environments
   ┃ ┗ 📁 aroma
   ┃   ┣ 📁 modules
   ┃   ┃ ┗ 📁 setup
   ┃   ┃   ┣ 📄 00_mocha.rpx
   ┃   ┃   ┣ 📄 10_wums_loader.rpx
   ┃   ┃   ┗ 📄 99_autoboot.rpx
   ┃   ┣ 📁 plugins
   ┃   ┃ ┣ 📄 AromaBasePlugin.wps
   ┃   ┃ ┣ 📄 drc_region_free.wps
   ┃   ┃ ┣ 📄 homebrew_on_menu.wps
   ┃   ┃ ┗ 📄 regionfree.wps
   ┃   ┗ 📄 root.rpx
   ┣ 📁 payloads
   ┃ ┣ 📁 default
   ┃ ┃ ┗ 📁 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

:::

### Section II - Launching Browser Exploit

::: tip

Ensure that your Wii U has Internet access for this step to ensure the exploit can function.

:::

1. Take the SD Card out of your computer and plug it into your Wii U console.

2. Launch the Internet Browser and navigate to the website `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

3. Click on `Run Exploit!` and hold the B button until you see a screen that says `Please choose your payload:`, this will be necessary for the next steps.

   - If your Wii U gets stuck on a white or otherwise frozen screen, wait a few seconds. If nothing happens, reboot the console, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again.
   - If your console is loaded into the Aroma environment, it may also result in the above result. You can remove your SD card from your Wii U before booting, which will force the Wii U to boot without Aroma, and then re-insert the SD card and try again.
   - If you see the EnvironmentLoader, you did not hold down B long enough. Try again.

   ![](/images/vwii/exploit/payload-loader.png)

   ![](/images/vwii/exploit/payload-loader.png)

### Section III - NAND Backup

1. Use the Wii U GamePad's D-Pad to enter the following configuration:

   - MLC is OPTIONAL, if you do not want to dump it, leave it on `no`. If you do want to dump it, make sure you have a SD Card big enough for it (the dump will be 8GB or 32GB depending on your console) and toggle it to `yes`.

   ![](/images/vwii/nand-backup/backup-selection.png)

2. Press the A button to start the dumping process.

3. When the process is completed, power off your Wii U, eject your SD Card from your Wii U, and plug it into your PC.

4. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, every `mlc.bin.part` file) to somewhere safe (Documents, Google Drive, OneDrive, etc.) on your computer.

   - They will appear on the root of the SD card.

   ![](/images/vwii/nand-backup/backup-result.png)

5. Delete the files from your SD card to free up space.

6. Take the SD card out of your computer and plug it into your Wii U console.

---

::: tip

[Continue to installing the Homebrew Channel](vwii-homebrew-channel)

Now that you have a NAND backup saved, you can begin installing the Homebrew Channel onto the vWii Menu.

:::
