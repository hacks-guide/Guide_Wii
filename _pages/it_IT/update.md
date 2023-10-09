---
title: "Aggiornamento del Menu Wii alla versione 4.3"
---

{% include toc title="Table of Contents" %}

Questa guida spiegherà come aggiornare il tuo Menu Wii alla versione 4.3, se hai una Wii già softmoddata.

È molto più sicuro usare [ModMii](modmii) (solo su Windows) per aggiornare la tua console Wii alla versione 4.3.
{: .notice--warning}

### Requisiti

* Una scheda SD o dispositivo USB
* Un computer Windows
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Istruzioni

#### Sezione I - Download

La tua console Wii deve essere modificata per poter continuare. If it isn't, then it's best to follow [the guide](get-started) first.
{: .notice--info}

1. Extract the .zip file for NUS Downloader Wii and open the application.
1. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
1. Make sure `Pack WAD` is checked.
1. Press `Start NUS Download!`.
1. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
1. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
1. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| Region | Wii Menu version |
| ------ | ---------------- |
| Japan  | v512 (4.3J)      |
| USA    | v513 (4.3U)      |
| Europe | v514 (4.3E)      |
| Korea  | v518 (4.3K)      |

#### Section II - Installing

1. Power off your console. Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
1. Launch YAWM ModMii Edition.
1. Select your SD card or USB drive.
1. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
1. Navigate to the Wii Menu WAD and press A twice to install it.
1. When prompted to retain Priiloader, press A to confirm.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
