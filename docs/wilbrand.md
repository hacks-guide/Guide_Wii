# Wilbrand

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions. There are two methods listed on this page used to create the proper Wilbrand exploit, but Wilbrand Web is recommended for its ease of use.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.

SD cards larger than 2GB will not work on Wii Menu versions before 4.0.

:::

::: warning

DO NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requirements

* An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
* A Wii on version 3.0 or newer

### Instructions

1. Power on your console.
1. Go to `Wii Settings`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    * This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Input your Wii MAC, version and region.
1. Ensure `Bundle the HackMii Installer for me!` is checked.
1. Cut either wire.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Insert your SD card into your computer.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Reinsert your SD card into your console.
    * The SD card must be inserted in the SD card slot located in the front of the Wii. Using a USB to SD adapter plugged into the Wii's USB port will not work.
1. On your Wii, return to the Wii Menu.
1. Open the Wii Message Board.
1. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    * Ensure the date on your Wii is correct, or you might be unable to find the letter.
    * In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    * If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

1. If the exploit was successful, your device will have loaded the HackMii Installer.
    * If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    * If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requirements

* A computer running Windows, macOS or Linux
* An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
* A Wii on version 3.0 or newer
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Power on your console.
1. Go to `Wii Settings`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    * This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. Copy all files from the Wilbrand `.zip` to a folder on your computer
1. Insert your SD card into your computer.
1. Open a terminal inside the folder Wilbrand was extracted to.
1. Using your Wii's version and MAC address, run the following command:

    * Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        * `X:` is the drive letter of your SD card.

        ![](/images/exploits/wilbrand/windows.png)

    * Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        * If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
        * `/media/mount_dir` is the folder your SD card is mounted in. This may vary depending on your Linux distro.

        ![](/images/exploits/wilbrand/linux.png)

1. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.
1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.
1. Reinsert your SD card into your console.
    * The SD card must be inserted in the SD card slot located in the front of the Wii. Using a USB to SD adapter plugged into the Wii's USB port will not work.
1. On your Wii, return to the Wii Menu.
1. Open the Wii Message Board.
1. Open the green letter with a bomb.
    * Ensure the date on your Wii is correct, or you might be unable to find the letter.
    * In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    * If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. If the exploit was successful, your device will have loaded the HackMii Installer.
    * If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    * If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
