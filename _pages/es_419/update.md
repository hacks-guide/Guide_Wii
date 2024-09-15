---
title: "Updating Wii Menu to v4.3"
---

{% include toc title="Tabla de contenido" %}

This tutorial will explain how to update your Wii Menu to version 4.3, if you have already homebrewed your Wii.

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.
{: .notice--warning}

### Requirements

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* An SD card or USB drive
* A computer with Windows on it
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instrucciones

#### Sección I - Descarga

1. Extract the .zip file for NUS Downloader vWii and open the application.
1. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
1. Make sure `Pack WAD` is checked.
1. Press `Start NUS Download!`.
1. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
1. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version`.
1. Using the +Control Pad on your Wii Remote, navigate to `WAD Manager`, and then navigate to the `wad` folder.

| Region | Wii Menu version |
| ------ | ---------------- |
| Japan  | v512 (4.3J)      |
| USA    | v513 (4.3U)      |
| Europe | v514 (4.3E)      |
| Korea  | v518 (4.3K)      |

#### Sección II - Instalación

1. Power off your console. Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * Install [Priiloader](priiloader) first. Priiloader is required for this guide.
1. Launch Wii Mod Lite.
1. Select your SD card or USB drive.
1. Press A to install the IOS58 `.wad` file.
1. Press A to install the Wii Menu WAD.
1. When prompted to retain Priiloader, press A to confirm.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

[Toca aqui para regresar al index.](site-navigation)
{: .notice--info}
