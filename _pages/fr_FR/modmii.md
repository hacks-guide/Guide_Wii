---
title: "ModMii"
---

{% include toc title="Table of Contents" %}

If you need help for anything regarding this tutorial, please join [the ModMii Discord server](https://discord.gg/cMnBRACQwQ).
{: .notice--info}

This Program does NOT come with a warranty, so you are responsible for any potential damage done to your Wii.
{: .notice--warning}

This program is NOT intended to be used for the vWii or the Wii mini. Any usage on vWii or Wii mini is untested.
{: .notice--warning}

ModMii is a PC program for Windows created by XFlak that has various helpful tools for modding, including some tutorials that may not be currently available on this website.<br> You can choose to launch in ModMii skin, which has a more user-friendly interface, or launch in ModMii Classic, which uses a command-line (Command Prompt/Terminal) interface.

Some advanced options may not be accessible in ModMii Skin. A list of the features available in ModMii Classic can be found at the bottom of the page.
{: .notice--info}

### Prérequis

* Une Wii
* A USB drive or SD Card
* A Windows PC (a Virtual Machine will work)
* [ModMii](https://modmii.github.io/)

This is a quick start guide on using ModMii on your Windows PC.

### ModMii Wizard

You can use the ModMii wizard to softmod any Wii. <br> Even if the Wii has been softmodded in the past, you can have ModMii overwrite existing softmods by telling ModMii that this is the first time you're modding your Wii (even if it isn't).

You can also use this wizard to set up a USB loader at the same time, instead of having to use the USB Loader setup wizard later on.

### SysCheck Updater Wizard

[SysCheck](syscheck) is a homebrew application that analyzes the modifications on a Wii. <br> You can give a SysCheck report to ModMii to help identify & update outdated mods.

You can have ModMii analyze a SysCheck by dragging the `syscheck.csv` file onto ModMii.exe. Alternatively, you can launch the SysCheck Updater Wizard (`SU`) from ModMii's main menu and manually browse for the file.

### HackMii Solutions Wizard

The HackMii Solutions wizard can help fix symptoms like these:

+ HackMii Installer not prompting "Press (1) to continue"
+ HackMii Installer says "no vulnerable IOS found!"
+ Homebrew Channel is displaying upside-down

It will install clean IOSs to allow for the HackMii Installer to operate properly.

### Abstinence Wizard

This wizard requires an SD card.
{: .notice--warning}

This wizard allows you to enjoy many of the benefits of a softmodded Wii without installing any permanent modifications to your Wii. It will allow you to launch an exploit to boot an from emulated NAND from external storage, rather than use your Wii's internal NAND.

You can also make a NAND backup without modifying your Wii at all by navigating to ModMii's "Support" folder and launching `Casper2BootMii.bat`. <br> It will save some files to a folder named `COPY_TO_SD`; copy the files inside it to your SD card and [launch an exploit](get-started).

When following one of the exploit guides above, avoid replacing the `boot.elf` file.
{: .notice--warning}


<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Click here for a full list of available tools.</a></summary>

| Tool                                                                        | Description                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                           | This option can be used to mod your Wii for the first time or re-mod a Wii that has been previously modded.                                                                                                                                |
| SU = SysCheck Updater Wizard (update only your outdated softmods)           | This option is useful for people who have old modifications installed to their wii such as DarkCorp/Ciosspaghetti that can potetially cause problems for the latest homebrew custom firmware.                                              |
| U = USB-Loader Setup Wizard                                                 | This option will help you properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive.                                                                                                               |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)       | This option is useful for people who are having trouble getting the HackMii Installer to work, or if they just simply have an upside down homebrew channel, or if DarkCorp/Ciosspaghetti was installed and there was no homebrew channel.  |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                            | This option is useful for people who dont want to make any permanent modifications to their Wii but still want to have some of the benefits that homebrew can offer.                                                                       |
| RC = Region Change Wizard                                                   | This option can be used to change the region of your Wii without bricking it (this is the best region changer tutorial available on the internet!).                                                                                        |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor      | This option will help you properly set up an EmuNAND (aka neek2o) onto your SD or USB. benefits for emunand include extra storage space for save games or channels. and the benefit of not making any permanent modifications to your Wii. |
| F = open a File or Folder with ModMii for many more functions!              | This option is an advanced tool especially helpful for developers.                                                                                                                                                                         |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | This option opens the first download page that includes most of the key parts for the system menu (downloaded from NUS).                                                                                                                   |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | This option opens the second download page that includes exploits and useful apps for your Wii including some PC programs.                                                                                                                 |
| 3 = Download Page 3 (System Menu Themes)                                    | This option opens the third download page that includes some system menu themes and items required to install system menu themes (base apps are downloaded from NUS).                                                                      |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                      | This option opens the fourth download page that includes cIOSes and cMIOSes for use in USB loaders. It is recommended to just install the recommended cioses unless you plan to do some testing.                                           |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                       | This option is an advanced tool used to better customize downloads or allow you to build a dol executable useful for fowarders (channels on the system menu to access Wii applications).                                                   |
| L = Load Download Queue                                                     | This option will download all of the required titles need for the Wii system menu (titles are downloaded from NUS)                                                                                                                         |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager        | This option will help you build configuration files required for certain applications.                                                                                                                                                     |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | This option is useful for people who want to clean out their SD or USB of apps deemed outdated, useless, or otherwise depreciated.                                                                                                         |
| M = ModMii Skin Mode: use your mouse instead of your keyboard!              | This option will launch ModMii skin mode. Some advanced options may not be available in this view.                                                                                                                                         |

</details>

<details id="Modmii-Options" class="notice--info" markdown="1">
<summary><a>Click here for a full list of available options.</a></summary>

| Option                                                           | Description                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| D = Change Drive letter:                                         | Changes where your SD files are saved to.                                                                     |
| DU = Change Drive letter for USB:                                | Changes where your USB files are saved to.                                                                    |
| d2x = change d2x cIOS version built:                             | Changes the cios version ModMii downloads.                                                                    |
| H = Hermes cIOSs (202 & 222-224) will also be recommended        | Enables Hermes IOS to be recommended and downloaded in the syscheck updater (will be stubbed if disabled).    |
| CM = cMIOS included in recommended cIOSs                         | Enables cMIOS to be recommended and downloaded in the syscheck updater (will install stock MIOS if disabled). |
| E = Extra Brick Protection in ModMii Wizard Guides               | Enables ModMiis Extra Brick Protection IOSes to be recommended and used in the syscheck updater tool.         |
| U = Update IOSs. Wizard/SysCheck-Updater to update Active IOSs   | Updates Existing IOSes to the latest version available on NUS.                                                |
| AU = Auto-Updating downloads will skip update check if cached    | Will skip downloading the files if already in the queue.                                                      |
| FWD = Install USB-Loader Forwarder in ModMii Wizard Guides       | Will include the USB loader forwarder wad file in the USB loader wizard guides.                               |
| PC = PC Programs Save Location                                   | Changes the save location for the downloadable PC programs.                                                   |
| RS = Root Save: Save IOSs\MIOSs to Root instead of WAD Folder   | Saves IOSs\MIOSs to Root instead of WAD Folder.                                                              |
| 1 = Do not Keep 00000001 or NUS Folders for IOSs\MIOSs\SMs etc | Deletes the folder used for compiling the wad file and just gives you the wad file.                           |
| n2o = neek2o - build mod of s\uneek instead of original         | Uses a better modified version of neek2o in the EmuNAND builder.                                              |
| SSD = SNEEK and SNEEK+DI SD Access                               | Allows for SNEEK and SNEEK+DI access on the SD card.                                                          |
| F = Font.bin Colour for SNEEK/UNEEK                              | Changes the font color for neek2o.                                                                            |
| SV = SNEEK Verbose Output                                        | Displays extra information regarding EmuNAND.                                                                 |
| V = Verbose for ModMii Skin & nandBinCheck                       | Displays another window with extra information regarding a nand check.                                        |
| SO = Play sound at Finish                                        | Plays a fun jingle after a successful download.                                                               |
| A = Auto-Update ModMii at program start                          | Will automatically check for updates when ModMii is launched.                                                 |
| N = Check for New versions of ModMii right now                   | Will check online for a ModMii update.                                                                        |

</details>

[Cliquez ici pour revenir à l'index du site.](site-navigation)
{: .notice--info}
