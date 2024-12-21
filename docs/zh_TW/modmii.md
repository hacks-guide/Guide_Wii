# ModMii

::: warning

This Program does NOT come with a warranty, so you are responsible for any potential damage done to your Wii.

:::

::: warning

This program is NOT intended to be used for the vWii or the Wii mini. Some tools may or may not work for these platforms. Any usage on vWii or Wii mini is untested. Any usage on vWii or Wii mini is untested.

:::

ModMii is an all-in-one Wii hacking tool for Windows created by XFlak that has various helpful tools for modding. It can accomplish the following: It can accomplish the following:

- Hacking the console for the first time, or re-hacking it
- Check for and update outdated softmods
- Fix upside-down Homebrew Channel problems
- Run homebrew without making any changes to your Wii's NAND
- Download homebrew
- And more!

## ModMii Overview

There are two different ways to use ModMii. There is ModMii Classic, which uses a command line interface, but has all of the features available to the program. ModMii Skin has a graphical user interface, on the other hand, but has less options available to the user. There are two different ways to use ModMii. There is ModMii Classic, which uses a command line interface, but has all of the features available to the program. ModMii Skin has a graphical user interface, on the other hand, but has less options available to the user. If you're looking to simply mod your Wii for the first time, ModMii Skin should suffice. Otherwise, we reccomend using ModMii Classic where possible. <br> The chart below will help you determine what can be done in either interface. Otherwise, we reccomend using ModMii Classic where possible.

The chart below will help you determine what can be done in either interface.

| Tools                                          | ModMii Classic | ModMii Skin |
| ---------------------------------------------- | -------------- | ----------- |
| ModMii Wizard                                  | ✅              | ✅           |
| SysCheck Updater Wizard                        | ✅              | ⛔           |
| USB Loader Setup Wizard                        | ✅              | ✅           |
| HackMii Solutions Wizard                       | ✅              | ✅           |
| Abstinence Wizard                              | ✅              | ✅           |
| Region Change Wizard                           | ✅              | ✅           |
| SNEEK/EmuNAND Installation                     | ✅              | ✅           |
| Open File Function                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ✅           |
| Download Page 1/2/3/4                          | ✅              | ⛔           |
| Advanced Downloads                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ⛔           |
| Build Config Files                             | ✅              | ⛔           |
| File Cleanup & App Updater | ✅              | ⛔           |

:::details Click here for a detailed explanation of each tool.

| Tool                                                                                                           | Description                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                                     | This option can be used to hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                                                                                     |
| SU = SysCheck Updater Wizard (update only your outdated softmods)                           | This option checks for and updates old modifications installed to their wii such as DarkCorp/CIOSSPAGHETTI that can potentially cause problems for the latest homebrew custom firmware.                                                                                                           |
| U = USB-Loader Setup Wizard                                                                                    | This option will properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive. This option is not necessary if using the ModMii Wizard.                                                                                                      |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)                        | This option is useful for people who are having trouble getting the HackMii Installer to work or have an upside down homebrew channel.                                                                                                                                                            |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                                            | This option allows you to run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                                                                                 |
| RC = Region Change Wizard                                                                                      | This option can be used to change the region of your Wii without bricking it, and is arguably the best region changing wizard on the internet.                                                                                                                                                    |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor                                          | This option will help you properly set up an EmuNAND (aka neek2o) onto your SD or USB. Benefits for EmuNAND include extra storage space for save games or channels, as well as running homebrew without making any permanent modifications to the system NAND. |
| F = open a File or Folder with ModMii for many more functions!                                                 | This option is an advanced tool especially helpful for developers.                                                                                                                                                                                                                                |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | This option opens the first download page that includes most of the key parts of the Wii System Menu (downloaded from NUS).                                                                                                                                                    |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | This option opens the second download page that includes exploits and useful apps for your Wii including some PC programs.                                                                                                                                                                        |
| 3 = Download Page 3 (System Menu Themes)                                                    | This option opens the third download page that includes some system menu themes and items required to install system menu themes (base apps are downloaded from NUS).                                                                                                          |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                                      | This option opens the fourth download page that includes cIOSes and cMIOSes for use in USB loaders.                                                                                                                                                                                               |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                                                           | This option allows you to download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users only.                                                                                                                                                        |
| L = Load Download Queue                                                                                        | This option loads bundled or previously saved download queues.                                                                                                                                                                                                                                    |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager                                           | This option allows you to build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                                                                          |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | This option removes unnessecary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                                                                                                                                       |

:::

When using ModMii, it is important to note that it will generate a custom guide for you depending on the options that you select. For this reason, this guide will not be focused on how to mod your Wii, as ModMii handles that function. Instead, it will be a quick start guide show you how to effectively use it with the most common options.

## Installing ModMii

### Requirements

- 一台 Wii
- A USB drive or SD Card
- A Windows PC (a Virtual Machine will work)
- [ModMii](https://modmii.github.io/)

### Installation

::: warning

Your browser or antivirus software may flag ModMii as malware - this is a false positive. ModMii does NOT contain any malware.

:::

1. Go to the [ModMii website](https://modmii.github.io) and scroll down to the Download section. Here, select the `Installer` option. Your browser may flag the installer as malware, but it is a **false positive**.

   ![](/images/modmii/modmii-download.png)

2. Open the `ModMiiInstaller.exe` file and go through the setup process.

   ![](/images/modmii/modmii-install.png)

## Using the ModMii Wizard

The ModMii Wizard is tool that can softmod your Wii from start to finish, downloading all necessary files and then generating a guide that you can use to implement the softmod. This tool can also be used to overwrite existing softmods on a previously softmodded Wii.

1. Open ModMii Skin or ModMii Classic and select the ModMii Wizard option at the top of the list.

   ![](/images/modmii/modmii-wizard-1.png)

2. Answer `Yes` to the first question, unless you have a very specific idea of what you would like to do or update to your Wii.

   ![](/images/modmii/modmii-wizard-2.png)

3. Select your current System Menu version, followed by the System Menu Region, following the instructions in the program. If you are still confused, check the bottom option on each screen for an instructional video.

   ![](/images/modmii/modmii-wizard-3.png)

4. Select the exploit you would like to use to mod your Wii. The exploits below are outlined throughout this website, but in most cases we would reccommend using Wilbrand if you have an SD card on hand.

   ![](/images/modmii/modmii-wizard-4.png)

5. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. If you don't know how to check your Wii's MAC address, enter `Help` in the text box for an instructional video.

   ![](/images/modmii/modmii-wizard-5.png)

6. Select your desired System Menu version from the list.

   ![](/images/modmii/modmii-wizard-6.png)

7. Select whether or not you would like to install any of the listed channels - this is an optional step.

   ![](/images/modmii/modmii-wizard-7.png)

8. Select whether or not you would like to install a custom Wii theme, with the choice of three theme effects. Each effect deals with how much the outline when hovering over a Wii Channel spins.

   ![](/images/modmii/modmii-wizard-8.png)

9. Select whether or not you would like to set up a USB Loader for use with your Wii.

   ![](/images/modmii/modmii-wizard-9.png)

10. If you selected `Yes` in the USB Loader menu, select which USB Loader you would like to use. If you choose an individual one, we reccomend either USB Loader GX or WiiFlow as both are covered on this website, or you may optionally download each option.

    ![](/images/modmii/modmii-wizard-10.png)

11. If you selected `Yes` in the USB Loader menu, select where you would like to save your USB Loader files at.

    ![](/images/modmii/modmii-wizard-11.png)

12. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-12.png)

13. Confirm your settings are correct, and then press `Finish`. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/modmii-wizard-13.png)

## SysCheck Updater Wizard

The SysCheck Updater Wizard is a tool that utilizes the homebrew app [SysCheck](syscheck) to analyze any modifications on your Wii, especially IOS and cIOS. It accepts a `syscheck.csv` file generated by the app, and then provides any nessecary updates as needed.

1. Open ModMii Classic and enter in `SU` to open the SysCheck Updater Wizard.

   ![](/images/modmii/syscheck-wizard-1.png)

2. Follow the instructions in the window if you don't already have a SysCheck log, and then drag and drop the `syscheck.csv` file from Windows Explorer into the window. This will paste the location of the file, from which you can press Enter.

   ![](/images/modmii/syscheck-wizard-2.png)

3. The program will analyze your SysCheck file, and will provide options for you depending on what it sees. In this example instance, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. If you want to make these changes to your Wii, simply enter in `Y` and press Enter. From here, you should follow the guide generated by ModMii.

   ![](/images/modmii/syscheck-wizard-3.png)

## HackMii Solutions Wizard

The HackMii Solutions Wizard is a tool that fixes problems that may arise from things like Darkcorp/CIOSSPAGHETTI by installing clean IOSes. Examples of problems that may arise because of this are listed below:

- HackMii Installer not prompting "Press (1) to continue"
- HackMii Installer saying "no vulnerable IOS found!"
- Homebrew Channel displaying upside-down

1. Open ModMii Skin or ModMii Classic and select the HackMii Solutions option.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Select your current System Menu version, followed by the System Menu Region, following the instructions in the program. If you are still confused, check the bottom option on each screen for an instructional video.

   ![](/images/modmii/hackmii-wizard-2.png)

3. Select the exploit you would like to use to mod your Wii. The exploits below are outlined throughout this website, but in most cases we would reccommend using Wilbrand if you have an SD card on hand.

   ![](/images/modmii/hackmii-wizard-3.png)

4. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. If you don't know how to check your Wii's MAC address, enter `Help` in the text box for an instructional video.

   ![](/images/modmii/hackmii-wizard-4.png)

5. Verify where you would like to save files for your SD Card and/or USB Drive.

   ![](/images/modmii/modmii-wizard-12.png)

6. Confirm your settings are correct, and then press `Finish`. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii. After finishing this guide, it is recommended that you use the [SysCheck Updater Wizard](#syscheck-updater-wizard) to undo any other problematic modifications on your Wii.

   ![](/images/modmii/hackmii-wizard-5.png)

::: tip

[Click here to go back to the site index.](site-navigation)

:::
