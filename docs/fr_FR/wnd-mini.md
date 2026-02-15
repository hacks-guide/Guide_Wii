# Wii Mod Lite

This tutorial will show you how to dump your Wii mini's NAND without having to solder an SD card slot. This was made possible by [nitr8](https://gbatemp.net/members/nitr8.72581/).

::: info

For support (in English) with Wii mini hacking, join [Wii mini Hacking](https://discord.gg/6ryxnkS) on Discord.

:::

::: info

If you have a Wii or a Wii mini with an SD card slot soldered, follow [this tutorial](bootmii) to dump your NAND.

:::

::: info

There is no way to restore your NAND backup this way without a hardmod.

:::

## Requirements

- Une Wii
- Une clé USB
- [Simple IOS Patcher for Wii mini](http://www.mediafire.com/file/7k141mu1whqzwdp/SimpleIOSPatcher_Mini.zip/file)
- [RealWnD for Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

## Instructions

### Section I - Dumping and Patching IOS 36

1. Download both the Simple IOS Patcher for Wii mini and RealWnD for Wii mini, and extract both zip files to the root of your USB drive.

2. Insert the USB drive into your Wii mini, and launch the Simple IOS Patcher for Wii mini from the Homebrew Channel.

3. It should start to automatically detect your IOS 36 version and proceed to patch it into slot 236. It will also give you the IOS 236 wad file on your USB.

### Section II - Dumping the NAND

1. Launch RealWnD for Wii mini from the Homebrew Channel.
2. It should automatically detect IOS 236 on your Wii mini and apply some runtime patches to begin dumping your NAND.
3. When it is done, you will have 3 new files on your USB:

```
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

The `WiiFlash_n_ECC.img` is your NAND image. The other two files are "error" data, and are useless.

### Section III - Dumping the Wii mini's Keys

1. Launch xyzzy mod from the Homebrew Channel.
2. Select `USB device`
    - It should start retriving your console information.
3. When it is done, press any button to exit.

    - You will have 5 new files on your USB:

    ```
    bootmii_keys.bin
    device.cert
    keys.txt
    otp.bin
    seeprom.bin
    ```

For now, only the `bootmii_keys.bin` file is required.

### Section IV - Optional: Upload your NAND to Dolphin Emulator

1. Connect the USB to your PC.
2. Find the `bootmii_keys.bin` on your USB and rename it to `keys.bin`
3. Open Dolphin Emulator on your PC.
4. Select the tools tab, and in the dropdown menu, go to "manage NAND", and then select "Import BootMii NAND Backup".
5. Select the dropdown to the right next to the file name bar and then choose the "All Files" option.
6. Locate your `WiiFlash_n_ECC.img` file and select "open".
7. Another window will pop up asking for the keys. Locate `keys.bin` and select "open".

::: info

If you would like to play Wii games online inside of dolphin with your Wii mini NAND, follow [this tutorial](https://dolphin-emu.org/docs/guides/wii-network-guide/) to retrive the files needed for online, even if you are already using the latest beta or development version of dolphin emulator.

:::

::: tip

[Continue to Priiloader Installation](priiloader)

:::

::: tip

[Click here to go back to the site index.](site-navigation)
{: .notice--info}

:::
