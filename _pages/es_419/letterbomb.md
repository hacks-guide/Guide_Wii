---
title: "LetterBomb"
---

{% include toc title="Table of Contents" %}

LetterBomb is an exploit for the Wii that is triggered using the Wii Message Board.

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.
{: .notice--info}

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!
{: .notice--warning}

### Requirements
* An SD card formatted as FAT32 that is 32GB or less
* A Wii on System Menu version 4.3
* A Windows/MacOS/Linux computer with an Internet connection

### Instrucciones

1. Power on your console.
1. On your Wii, go to `Wii Settings` -> `Internet` -> `Console Information` and make note of your MAC address.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
    + Also, ensure that you are on System Menu version 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).
1. Visit [please.hackmii.com](https://please.hackmii.com), input your Wii MAC and region, complete the CAPTCHA, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. HackMii Screen
1. Cut either wire.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insert your SD card into your computer.
1. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.
1. Extract the contents of the downloaded ZIP to the root of your SD card.
    + The SD card must be inserted in the SD card slot located in the front of the Wii. Using a USB adapter plugged into the Wii's USB port will not work.
1. Take out your SD card and insert it in your Wii.
1. On your Wii, return to the Wii Menu and then open the Wii Message Board.
1. Load the red letter with a bomb icon.
    + Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    + In various scenarios, you may need to look at the previous or next day to find it.
    + If you don't see the red letter, you may be using an unsupported SD card that's greater than 32GB in size. If any do, there may be an issue with the SD card format or the Wii’s SD card reader.
    + If your Wii freezes after clicking on the letter, you probably chose the wrong region when downloading the exploit. Redo Step 2 and select the correct region.
    + If all is correct and there is freezing, keep on trying until it works.
1. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}
