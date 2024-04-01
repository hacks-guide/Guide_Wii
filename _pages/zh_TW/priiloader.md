---
title: "安裝 Priiloader"
---

{% include toc title="條目內容" %}

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. Immediately loads the Wii menu into Data Management. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features. Immediately loads the Wii menu into Data Management. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.


For more information about Priiloader and its options, you can see the [Priiloader Usage](priiloader-usage) page.
{: .notice--info}

### 必備項目

* 一張 SD 卡或 USB 隨身碟
* https://oscwii.org/library/app/priiloader
* https://oscwii.org/library/app/loadpriiloader

#### Optional Requirements for vWii (highly recommended)

* Allows you to copy normally disallowed save files to your SD card from Data Management
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) to load Priiloader straight from the Wii U Menu. **This only works on Aroma.**
    * [evWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases) to enhance some extra features for vWii. The features are listed [here](https://github.com/GaryOderNichts/evwii#features).

### Instructions

{% capture notice-vwii-priiloader %}

If you are using a vWii:

+ Installing a theme after installing Priiloader **will brick your vWii.**
+ Priiloader does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ notice-vwii-priiloader }}</div>

#### Section I - Prep Work

1. Power off your console.
1. Extract both apps to the root of your SD card or USB drive.
1. Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
1. If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> This causes Priiloader to fail to find the `hacks_hash.ini` file.
1. Copy `uneoboot.dol` to the root of your SD card.
1. Reinsert your SD card or USB drive into your console.

#### 第二節 — 安裝 Priiloader

1. Power on your console.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Launch the Priiloader installer.
1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Press A to return to the Homebrew Channel.

#### Section III - Entering Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
1. Your device will have loaded the Priiloader menu.

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ Holding RESET on a Wii while turning it on.
    + Wii Only
+ Holding the ESC key on a USB keyboard while turning on the console.
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ Launch the Homebrew Channel on your Wii.
    + vWii Only

#### Section IV - Configuring Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

    ![](/images/priiloader/menu_hacks.png)

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file. If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> This causes Priiloader to fail to find the `hacks_hash.ini` file.
    {: .notice--warning}

1. Scroll down to `Settings` and press A.
    + `Block Online Updates`
    + If you are NOT using a CRT display: `Remove Deflicker`
1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu
        + Block Disc Updates
    + Wii mini:
        + Block Disc Updates
1. Scroll down to `save settings` and press A.
1. Press `B` to return to the main menu.

### Wii mini: Next Steps

[Continue to the Dos and Don'ts of Wii Modding](dosanddonts)<br> These are some guidelines to ensure you don't brick your Wii.
{: .notice--info}

### Wii: Next Steps

If you have made it to this point, congrats! You are finished with the required section of the main guide! If you have made it to this point, congrats! You are finished with the required section of the main guide! You can continue if you want to learn more, but anything past this point is optional.
{: .notice--success}

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also enable hacks for your Wii Menu, and be used to quickly launch the Homebrew Channel, BootMii, or whatever homebrew you want!
{: .notice--info}
