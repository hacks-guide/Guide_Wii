---
title: "ModMii"
---

{% include toc title="Table of Contents" %}

Questo programma NON viene fornito con una garanzia, sei responsabile per ogni potenziale danno al tuo Wii.
{: .notice--warning}

Questo programma NON è destinato all'uso per il vWii o per il Wii mini. Qualsiasi utilizzo sul vWii o sul Wi mini non è stato testato.
{: .notice--warning}

ModMii is an all-in-one Wii hacking tool for Windows created by XFlak that has various helpful tools for modding. It can accomplish the following:

+ Hacking the console for the first time, or re-hacking it
+ Check for and update outdated softmods
+ Fix upside-down Homebrew Channel problems
+ Run homebrew without making any changes to your Wii's NAND
+ Download homebrew
+ And more!

### ModMii Overview

There are two different ways to use ModMii. There is ModMii Classic, which uses a command line interface, but has all of the features available to the program. ModMii Skin has a graphical user interface, on the other hand, but has less options available to the user. If you're looking to simply mod your Wii for the first time, ModMii Skin should suffice. Otherwise, we reccomend using ModMii Classic where possible. <br> The chart below will help you determine what can be done in either interface.

| Tools                       | ModMii Classic | ModMii Skin |
| --------------------------- | -------------- | ----------- |
| Wizard di ModMii            | ✅              | ✅           |
| Wizard di SysCheck Updater  | ✅              | ⛔           |
| USB Loader Setup Wizard     | ✅              | ✅           |
| Wizard di HackMii Solutions | ✅              | ✅           |
| Wizard di Astinenza         | ✅              | ✅           |
| Region Change Wizard        | ✅              | ✅           |
| SNEEK/EmuNAND Installation  | ✅              | ✅           |
| Open File Function          | ✅              | ⛔           |
| Load Download Queue         | ✅              | ✅           |
| Download Page 1/2/3/4       | ✅              | ⛔           |
| Advanced Downloads          | ✅              | ⛔           |
| Load Download Queue         | ✅              | ⛔           |
| Build Config Files          | ✅              | ⛔           |
| File Cleanup & App Updater  | ✅              | ⛔           |

<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Click here for a detailed explanation of each tool.</a></summary>

| Strumento                                                                                    | Descrizione                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = Wizard di ModMii <-- Inizia qui per modificare il tuo Wii!                               | This option can be used to hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                                                                           |
| SU = Wizard di SysCheck Updater (aggiorna solo le modifiche obsolete)                        | This option checks for and updates old modifications installed to their wii such as DarkCorp/CIOSSPAGHETTI that can potentially cause problems for the latest homebrew custom firmware.                                                                                                 |
| U = Wizard di Configuratione di USB-Loader                                                   | This option will properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive. This option is not necessary if using the ModMii Wizard.                                                                                                            |
| H = Wizard di HackMii Solutions (HBC a testa in giù\Soluzione No Vulnerable IOS)            | This option is useful for people who are having trouble getting the HackMii Installer to work or have an upside down homebrew channel.                                                                                                                                                  |
| AW = Wizard di Astinenza (Modifiche Wii non permanenti)                                      | This option allows you to run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                                                                       |
| RC = Wizard del Cambio di Regione                                                            | This option can be used to change the region of your Wii without bricking it, and is arguably the best region changing wizard on the internet.                                                                                                                                          |
| S = Installazione di SNEEK, Creatore\Modificatore di EmuNAND, Estrattore di Massa di Giochi | Questa opzione ti aiuterà a configurare correttamente un EmuNAND (cioè neek2o) sulla tua scheda SD o unità USB. Benefits for EmuNAND include extra storage space for save games or channels, as well as running homebrew without making any permanent modifications to the system NAND. |
| F = apri un File o Cartella con ModMii per molte altre funzioni!                             | Questa opzione è uno strumento avanzato specialmente utile per gli sviluppatori.                                                                                                                                                                                                        |
| 1 = Scarica Pagina 1 (Menu di Sistema, IOS, MIOS, Canali etc.)                               | This option opens the first download page that includes most of the key parts of the Wii System Menu (downloaded from NUS).                                                                                                                                                             |
| 2 = Scarica Pagina 2 (Applicazioni, File USB-Loader, CheatCodes etc.)                        | Questa opzione apre la seconda pagina di download che include exploit utili e applicazioni per il tuo Wii che includono anche applicazioni per il PC.                                                                                                                                   |
| 3 = Scarica Pagina 3 (Temi del Menu di Sistema)                                              | Questa opzione apre la terza pagina di download che include alcuni temi del menu di sistema ed elementi richiesti per installare un tema del menu sistema (le applicazioni di base sono scaricate dal NUS).                                                                             |
| 4 = Scarica Pagina 4 (cIOS e cMIOS)                                                          | Questa opzione apre la quarta pagina di download che include cIOS e cMIOS per l'uso di USB loaders.                                                                                                                                                                                     |
| A = Download Avanazati e Creatore di Forwarder DOL\ISO                                      | This option allows you to download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users only.                                                                                                                                                              |
| L = Carica Coda di Download                                                                  | This option loads bundled or previously saved download queues.                                                                                                                                                                                                                          |
| C = Crea File di Configurazione per BootMii, Wad Manager o Multi-Mod Manager                 | This option allows you to build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                                                                |
| FC = File Cleanup & App Updater: aggiorna applcazioni e/o rimuovi file non necessari         | This option removes unnessecary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                                                                                                                             |

</details><br>

When using ModMii, it is important to note that it will generate a custom guide for you depending on the options that you select. For this reason, this guide will not be focused on how to mod your Wii, as ModMii handles that function. Instead, it will be a quick start guide show you how to effectively use it with the most common options.

### Installing ModMii

#### Requisiti

* Un Wii
* Un'unità USB o una scheda SD
* Un PC Windows (una macchina virtuale funzionerà)
* [ModMii](https://modmii.github.io/)

#### Installazione

1. Go to the [ModMii website](https://modmii.github.io) and scroll down to the Download section. Here, select the `Installer` option. Your browser may flag the installer as malware, but it is a **false positive**.

    ![](/images/modmii/modmii-download.png)

2. Open the `ModMiiInstaller.exe` file and go through the setup process.

    ![](/images/modmii/modmii-install.png)

### Using the ModMii Wizard

The ModMii Wizard is tool that can softmod your Wii from start to finish, downloading all necessary files and then generating a guide that you can use to implement the softmod. This tool can also be used to overwrite existing softmods on a previously softmodded Wii.

1. Open ModMii Skin or ModMii Classic and select the ModMii Wizard option at the top of the list.

    ![](/images/modmii/modmii-wizard-1.png)

1. Answer `Yes` to the first question, unless you have a very specific idea of what you would like to do or update to your Wii.

    ![](/images/modmii/modmii-wizard-2.png)

1. Select your current System Menu version, followed by the System Menu Region, following the instructions in the program. If you are still confused, check the bottom option on each screen for an instructional video.

    ![](/images/modmii/modmii-wizard-3.png)

1. Select the exploit you would like to use to mod your Wii. The exploits below are outlined throughout this website, but in most cases we would reccommend using Wilbrand if you have an SD card on hand.

    ![](/images/modmii/modmii-wizard-4.png)

1. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. If you don't know how to check your Wii's MAC address, enter `Help` in the text box for an instructional video.

    ![](/images/modmii/modmii-wizard-5.png)

1. Select your desired System Menu version from the list.

    ![](/images/modmii/modmii-wizard-6.png)

1. Select whether or not you would like to install any of the listed channels - this is an optional step.

    ![](/images/modmii/modmii-wizard-7.png)

1. Select whether or not you would like to install a custom Wii theme, with the choice of three theme effects. Each effect deals with how much the outline when hovering over a Wii Channel spins.

    ![](/images/modmii/modmii-wizard-8.png)

1. Select whether or not you would like to set up a USB Loader for use with your Wii.

    ![](/images/modmii/modmii-wizard-9.png)

1. If you selected `Yes` in the USB Loader menu, select which USB Loader you would like to use. If you choose an individual one, we reccomend either USB Loader GX or WiiFlow as both are covered on this website, or you may optionally download each option.

    ![](/images/modmii/modmii-wizard-10.png)

1. If you selected `Yes` in the USB Loader menu, select where you would like to save your USB Loader files at.

    ![](/images/modmii/modmii-wizard-11.png)

1. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-12.png)

1. Confirm your settings are correct, and then press `Finish`. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/modmii-wizard-13.png)

### Wizard di SysCheck Updater

The SysCheck Updater Wizard is a tool that utilizes the homebrew app [SysCheck](syscheck) to analyze any modifications on your Wii, especially IOS and cIOS. It accepts a `syscheck.csv` file generated by the app, and then provides any nessecary updates as needed.

1. Open ModMii Classic and enter in `SU` to open the SysCheck Updater Wizard.

    ![](/images/modmii/syscheck-wizard-1.png)

1. Follow the instructions in the window if you don't already have a SysCheck log, and then drag and drop the `syscheck.csv` file from Windows Explorer into the window. This will paste the location of the file, from which you can press Enter.

    ![](/images/modmii/syscheck-wizard-2.png)

1. The program will analyze your SysCheck file, and will provide options for you depending on what it sees. In this example instance, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. If you want to make these changes to your Wii, simply enter in `Y` and press Enter. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/syscheck-wizard-3.png)

### Wizard di HackMii Solutions

The HackMii Solutions Wizard is a tool that fixes problems that may arise from things like Darkcorp/CIOSSPAGHETTI by installing clean IOSes. Examples of problems that may arise because of this are listed below:

+ HackMii Installer non chiede "Press (1) to continue"
+ HackMii Installer saying "no vulnerable IOS found!"
+ Homebrew Channel displaying upside-down

1. Open ModMii Skin or ModMii Classic and select the HackMii Solutions option.

    ![](/images/modmii/hackmii-wizard-1.png)

1. Select your current System Menu version, followed by the System Menu Region, following the instructions in the program. If you are still confused, check the bottom option on each screen for an instructional video.

    ![](/images/modmii/hackmii-wizard-2.png)

1. Select the exploit you would like to use to mod your Wii. The exploits below are outlined throughout this website, but in most cases we would reccommend using Wilbrand if you have an SD card on hand.

    ![](/images/modmii/hackmii-wizard-3.png)

1. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. If you don't know how to check your Wii's MAC address, enter `Help` in the text box for an instructional video.

    ![](/images/modmii/hackmii-wizard-4.png)

1. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-12.png)

1. Confirm your settings are correct, and then press `Finish`. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii. After finishing this guide, it is recommended that you use the [SysCheck Updater Wizard](#syscheck-updater-wizard) to undo any other problematic modifications on your Wii.

    ![](/images/modmii/hackmii-wizard-5.png)

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
