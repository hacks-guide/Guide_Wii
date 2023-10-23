---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. It loads before the Wii System Menu does. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

For more information about Priiloader and its options, you can see the [Priiloader Usage](priiloader-usage) page.

### Requirements

* An SD card or USB drive
* [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

#### Optional Requirements for vWii (highly recommended)

* An SD card
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

### Instructions

{% capture vwii-notes %}

If you are using a vWii:

+ Do NOT install a theme after installing Priiloader, or you will BRICK your vWii!
+ Priiloader does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ vwii-notes | markdownify }}</div>

#### Section I - Prep Work

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
1. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
1. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
1. Reinsert your SD card or USB drive into your console.

#### Section II - Installing Priiloader

1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch Priiloader installer from the list of homebrew.
1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Press A to return to the Homebrew Channel.

#### Section III - Entering Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
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

1. Scroll down to each of the following options and press `A`:
    + `Block Online Updates`
    + If you are NOT using a CRT display: `Remove Deflicker`
1. For the following options, enable the options according to your console:
    + Wii:
        + If you are using 480p mode: `480p graphics fix in the system menu`
        + Block Disc Updates
    + Wii mini:
        + Block Disc UPdates
1. Scroll down to `save settings` and press A.
1. Press `B` to return to the main menu.

### Wii mini: Next Steps

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides installation instructions for cIOS on Wii minis.
{: .notice--info}

### Wii: Next Steps

If you have made it to this point, congrats! You are finished with the required section of the main guide! You can continue if you want to learn more, but anything past this point is optional.
{: .notice--success}

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that to avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}
