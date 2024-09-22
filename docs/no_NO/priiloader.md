---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. It loads before the Wii System Menu does. The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

### Installing Priiloader

* An SD card or USB drive
* Installing a theme after installing Priiloader **will brick your vWii.**
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

#### What you need

* An SD card
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

### Instructions

#### What you need

1. Download the Priiloader installer and LoadPriiloader apps.
1. Extract both apps to the root of your SD card or USB drive.
1. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
1. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
1. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
1. Insert the SD card or USB drive into your Wii, and launch the d2x cIOS Installer from the Homebrew Channel

#### Section II - Installing Priiloader

1. Launch the Homebrew Channel on your Wii.
1. Launch the Priiloader installer.
1. Launch Priiloader Installer from the list of homebrew.

    ![](/images/hbc/priiloader-and-loadpriiloader.png)

1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Press A to return to the Homebrew Channel.

#### Section III - Entering Priiloader

1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Your device will have loaded the Priiloader menu.

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ Hold the RESET on a Wii while turning it on
    + Wii Only
+ Hold the ESC key on a connected USB keyboard while turning on the console
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ Run the "Priiloader Wii U Forwarder" tool
    + vWii Only

#### Section IV - Configuring Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

    ![](/images/priiloader/menu_hacks.png)

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.
    {: .notice--warning}

1. For the following options, enable the options according to your console:
    + Wii:
        + If you are using 480p mode: `480p graphics fix in the system menu`
        + Block Disc Updates
        + Block Online Updates
        + If you are NOT using a CRT display: `Remove Deflicker`
    + vWii:
        + Block Online Updates
        + Wii System Settings via Options Button
        + If you are NOT using a CRT display: `Remove Deflicker`
    + Wii mini:
        + Block Disc Updates
        + If you are NOT using a CRT display: `Remove Deflicker`
1. Scroll down to `save settings` and press A.
1. Press `B` to return to the main menu.

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.
{: .notice--info}

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}

### Wii: Next Steps

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

### vWii: Next Steps

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.
{: .notice--info}

### Additional options

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.
{: .notice--info}
