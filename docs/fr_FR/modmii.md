# ModMii

::: warning

This Program does NOT come with a warranty, so you are responsible for any potential damage done to your console.

:::

::: warning

Some Features may be limited for the Wii mini on ModMii.

:::

ModMii is an all-in-one Wii and Wii U hacking tool for Windows created by XFlak that has various helpful tools for modding. It can accomplish the following:

- Hacking the console for the first time, or re-hacking it
- Check for and update outdated softmods
- Fix upside-down Homebrew Channel problems
- Run homebrew without making any changes to your Wii's NAND
- Download homebrew
- And more!

## ModMii Overview

There are two different ways to use ModMii. There is ModMii Classic, which uses a command line interface, but has all of the features available to the program. ModMii Skin has a graphical user interface, on the other hand, but has less options available to the user. If you're looking to simply mod your console for the first time, ModMii Skin should suffice. Otherwise, we recommend using ModMii Classic where possible.

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
| Download Page 1/2/3/4/5                        | ✅              | ⛔           |
| Advanced Downloads                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ⛔           |
| Build Config Files                             | ✅              | ⛔           |
| File Cleanup & App Updater | ✅              | ⛔           |

:::details Click here for a detailed explanation of each tool.

| Tool                                                                                                           | Description                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii, vWii or WiiU!                       | This option can be used to hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                                                                                     |
| SU = SysCheck Updater Wizard (update only your outdated Wii\vWii softmods)                  | This option checks for and updates old modifications installed to your console. On the Wii it can fix things such as DarkCorp/CIOSSPAGHETTI that can potentially cause problems for the latest up to date homebrew.                                                               |
| U = USB-Loader Setup Wizard (Wii \ vWii \ Wii Mini)                                         | This option will properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive. This option is not necessary if using the ModMii Wizard.                                                                                                      |
| H = HackMii Solutions Wizard (Wii) Upside-Down HBC/No Vulnerable IOS Fix                    | This option is useful for people who are having trouble getting the HackMii Installer to work or have an upside down homebrew channel.                                                                                                                                                            |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                                            | This option allows you to run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                                                                                 |
| RC = Region Change Wizard (Wii)                                                             | This option can be used to change the region of your Wii without bricking it, and is arguably the best region changing wizard on the internet.                                                                                                                                                    |
| S = SNEEK Installation, EmuNAND Builder/Modifier, Game Bulk Extractor                                          | This option will help you properly set up an EmuNAND (aka neek2o) onto your SD or USB. Benefits for EmuNAND include extra storage space for save games or channels, as well as running homebrew without making any permanent modifications to the system NAND. |
| F = open a File or Folder with ModMii for many more functions!                                                 | This option is an advanced tool especially helpful for developers.                                                                                                                                                                                                                                |
| # = Download Pages: 1=NUS, 2=Wii Homebrew, 3=Themes, 4=cIOSs, 5=WiiU+PC Apps                   | This will take you to the various download pages available for things like homebrew apps, PC apps, IOSes, cIOSes, Wii Menu themes, and more.                                                                                                                                                      |
| A = Advanced Downloads and Forwarder Builder                                                                   | This option allows you to download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users only.                                                                                                                                                        |
| L = Load Download Queue                                                                                        | This option loads bundled or previously saved download queues.                                                                                                                                                                                                                                    |
| C = Customize Config Files for Bootmii, Wad Manager or Multi-Mod Manager                                       | This option allows you to build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                                                                          |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | This option removes unnessecary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                                                                                                                                       |

:::

When using ModMii, it is important to note that it will generate a custom guide for you depending on the options that you select. For this reason, this guide will not be focused on how to mod your console, as ModMii handles that function. Instead, it will be a quick start guide show you how to effectively use it with the most common options.

## Installing ModMii

### Requirements

- A Wii or Wii U
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

The ModMii Wizard is tool that can softmod your console from start to finish, downloading all necessary files and then generating a guide that you can use to implement the softmod. This tool can also be used to overwrite existing softmods on a previously softmodded console.

1. Open ModMii Skin or ModMii Classic and select the ModMii Wizard option at the top of the list.

    ![](/images/modmii/modmii-wizard-1.png)

2. Choose the platform you are going to mod. If you have a Wii U, it is recommended to mod both the Wii U and vWii. If you are planning on modding both the Wii U and vWii, skip to step 9. If you are planning on modding just the vWii, skip to step 5. If you are planning on modding Just the Wii U, skip to step 13.

    ![](/images/modmii/modmii-wizard-2.png)

3. Answer `Yes` to the first question, unless you have a very specific idea of what you would like to do or update to your console.

    ![](/images/modmii/modmii-wizard-3.png)

4. Select your current System Menu version, followed by the System Menu Region, following the instructions in the program. If you are still confused, check the bottom option on each screen for an instructional video.

    ![](/images/modmii/modmii-wizard-4.png)

5. Select the exploit you would like to use to mod your console. If you are on a Wii, we would reccommend using Wilbrand if you have an SD card on hand. For modding just the vWii, we would reccommend using the browser.

    ![](/images/modmii/modmii-wizard-5.png)

6. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. If you don't know how to check your Wii's MAC address, enter `Help` in the text box for an instructional video.

    ![](/images/modmii/modmii-wizard-6.png)

7. Select your desired System Menu version from the list.

    ![](/images/modmii/modmii-wizard-7.png)

8. Select whether or not you would like to install any of the listed channels - this is an optional step.

    ![](/images/modmii/modmii-wizard-8.png)

9. Select whether or not you would like to install a custom Wii menu theme, with the choice of three theme effects. Each effect deals with how much the outline when hovering over a Wii Channel spins.

    ![](/images/modmii/modmii-wizard-9.png)

10. Select whether or not you would like to set up a USB Loader for use with your console.

    ![](/images/modmii/modmii-wizard-10.png)

11. If you selected `Yes` in the USB Loader menu, select which USB Loader you would like to use. If you choose an individual one, we reccomend either USB Loader GX or WiiFlow as both are covered on this website, or you may optionally download each option.

    ![](/images/modmii/modmii-wizard-11.png)

12. If you selected `Yes` in the USB Loader menu, select where you would like to save your USB Loader files at.

    ![](/images/modmii/modmii-wizard-12.png)

13. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-13.png)

14. Confirm your settings are correct, and then press `Finish`. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/modmii-wizard-14.png)

## SysCheck Updater Wizard

The SysCheck Updater Wizard is a tool that utilizes the homebrew app [SysCheck](syscheck) to analyze any modifications on your Wii, especially IOS and cIOS. It accepts a `syscheck.csv` file generated by the app, and then provides any nessecary updates as needed.

1. Open ModMii Classic and enter in `SU` to open the SysCheck Updater Wizard.

    ![](/images/modmii/syscheck-wizard-1.png)

2. Follow the instructions in the window if you don't already have a SysCheck log, and then drag and drop the `syscheck.csv` file from Windows Explorer into the window. This will paste the location of the file, from which you can press Enter.

    ![](/images/modmii/syscheck-wizard-2.png)

3. If priiloader was detected in the syscheck, it will ask you if you want to update it. Type `Y` and press Enter to update to the latest priiloader version.

    ![](/images/modmii/syscheck-wizard-3.png)

4. The program will analyze your SysCheck file, and will provide options for you depending on what it sees. In this example instance, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. If you want to make these changes to your Wii, simply enter in `Y` and press Enter. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/syscheck-wizard-4.png)

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
{: .notice--info}

:::
