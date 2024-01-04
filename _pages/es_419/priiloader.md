---
title: "Priiloader"
---

{% include toc title="Tabla de contenido" %}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also enable hacks for your Wii Menu, and be used to quickly launch the Homebrew Channel, BootMii, or whatever homebrew you want!

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.


For more information about Priiloader and its options, you can see the [Priiloader Usage](priiloader-usage) page.
{: .notice--info}

### Requirements

* An SD card or USB drive
* Priiloader installer
* Disables region locking for any Wii application, including downloaded ones.

#### Optional Requirements for vWii (highly recommended)

* An SD card
* Sends Wii Menu logs to a debugging device in memory card slot B, if the Wii Menu is launched by Gecko OS.
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

### Instrucciones

{% capture vwii-notes %}

If you are using a vWii:

+ Do NOT install a theme after installing Priiloader, or you will BRICK your vWii!
+ Priiloader does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ vwii-notes | markdownify }}</div>

#### Section I - Prep Work

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. Allows you to copy normally disallowed save files to your SD card from Data Management
1. Download the Priiloader installer and extract it to the root of your SD card or USB drive.
1. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
1. Reinsert your SD card or USB drive into your console.

#### Section II - Installing Priiloader

1. Power on your console.
1. Launch the Homebrew Channel on your Wii.
1. Launch the Priiloader installer.
1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Automatically presses the A Button to get past the initial "Health and Safety" screen.

#### Section III - Entering/Configuring Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
1. You should see the Priiloader menu.

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ Hold the RESET button while turning on your Wii.
    + Wii Only
+ Hold the ESC key on a connected USB keyboard while turning on the console
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ Removes a check in the Wii to see if an inserted game matches the title ID of the "Wii Startup Disc".
    + vWii Only

#### Section I - Downloading/Installing

1. Go to `System Menu Hacks`.

    ![](/images/priiloader/menu_hacks.png)

    If you are using a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time. This will cause Priiloader to be unable to find the hacks_hash.ini file.
    {: .notice--warning}

1. Scroll down to each of the following options and press `A`:
    + `Block Online Updates`
    + If you are NOT using a CRT display: `Remove Deflicker`
1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu
        + Block Disc Updates
    + Wii mini:
        + Block Disc Updates
1. Scroll to `Homebrew Channel` and press A to launch it.
1. Scroll down to `save settings` and press A, then press B to go back to the main menu of Priiloader.

### Wii mini: Next Steps

[Continue to the Dos and Don'ts of Wii Modding](dosanddonts)<br> These are some guidelines to ensure you don't brick your Wii.
{: .notice--info}

### Wii: Next Steps

If you have made it to this point, congrats! You are finished with the required section of the main guide! You can continue if you want to learn more, but anything past this point is optional.
{: .notice--success}

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

Removes the "Wii System Update" screen included with some games that forces you to update the system before playing the game.
{: .notice--info}
