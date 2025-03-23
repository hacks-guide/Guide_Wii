# vWii Modding Guide

This page will guide you through the process of modding your vWii without modding the Wii U side. Wii U custom firmware will be used for this guide, however, nothing will actually be installed onto the Wii U side itself. You can also visit the [legacy exploits](legacy-exploits) page for more exploits that work on the vWii.

::: info

If your Wii U side is already modded, proceed to [Installing the Homebrew Channel](vwii-homebrew-channel)

:::

::: info

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, follow [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

## Requirements

- The latest files from [Aroma for your café](https://aroma.foryour.cafe/).
  - Review the preliminal steps, then check all 4 boxes.
  - Double check that nanddumper is selected.
  - Click on `Download Payloads`.
  - Click on `Download Base Aroma`.
- The latest release of the [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller).

## Instructions

### Section I - SD Preparations

1. Insert your Wii U's SD Card into your PC.
2. Copy the contents of the downloaded Aroma _`.zip`_ files to the root of your SD Card.
3. Copy the contents of the `CompatTitleInstaller.zip` file to the root of your SD Card.

SD Card Layout

::: details Click here to show the final SD Card layout.

```
💾sd:
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

### Section II - Launching the Exploit

::: info

Make sure your Wii U has internet access for this step.

:::

1. Take the SD Card out of your computer and plug it into your Wii U console.
2. Launch the Internet Browser and navigate to the website `wiiuexploit.xyz`.
3. Click on `Run Exploit!` and hold the B button until you see a screen that says `Please choose your payload:`, this will be necessary for the next steps.
   - If your Wii U gets stuck on a white or otherwise frozen screen, wait a few seconds. If nothing happens, reboot the console, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again.
   - If you see the EnvironmentLoader, you did not hold down B long enough. Try again.

### Section III - NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

1. Use the Wii U GamePad's D-Pad to enter the following configuration:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
2. Press the A button to start the dumping process.
3. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
4. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
5. Delete the files from your SD Card to free up space.
6. Take the SD Card out of your computer and plug it into your Wii U console.

::: tip

[Continue to installing the Homebrew Channel](vwii-homebrew-channel-no-wiiu-mods)

:::
