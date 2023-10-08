---
title: "Loaders USB"
---

{% include toc title="Sumário" %}

Este guia introduz Loaders USB no Wii. Eles podem ser usados principalmente para carregar os backups de jogos que foram dumpados de um disco de jogo. Dependendo do Loader, pode haver também extensões que permitam que ele funcione como uma interface para jogos que não sejam do Wii. Os dois loaders mais comumente usados são o USB Loader GX e WiiFlow Lite (um mod atualizado regularmente do WiiFlow) - um loader pode funcionar melhor para você do que o outro, então vale a pena tentar ambas.

**Nota sobre o Configurable USB Loader:**<br> Devido à idade e falta de suporte para o Configurable USB Loader (a última atualização foi em 2011), este guia não fornece instruções de instalação dedicadas. Se houver demanda suficiente, ele poderá ser acrescentado no futuro.
{: .notice--warning}

Para que um Loader USB funcione corretamente, você deve ter as cIOS instalado corretamente. Por favor, consulte [este guia](cios) para obter instruções caso você esteja no Wii, e [este guia](cios-mini) caso você esteja no Wii mini.
{: .notice--warning}

Para jogar jogos, é aconselhável usar um cartão SD grande ou um HD externo, Pen Drives são muito esporádicos em funcionalidade. Consulte [FAQ de armazenamento](faq).
{: .notice--info}

Atalhos (Forwarders) para abrir esses Loaders no Menu Wii podem ser encontrados no Open Shop Channel para [WiiFlow Lite](https://oscwii.org/library/app/wiiflow_channel_installer) ou na página oficial do SourceForge para [USB Loader GX](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT.wad/download). Você pode instalar um com o [YAWM ModMii Edition](yawmme).
{: .notice--info}

### Diferenças entre WiiFlow Lite e USB Loader GX

+ WiiFlow Lite tem uma interface de usuário mais avançada em termos de animação e efeitos, e suporta temas.
    + Cartões SD são totalmente suportados para carregar jogos do Wii no WiiFlow Lite.
    + WiiFlow Lite tem um sistema de plugins.
    + O WiiFlow original foi atualizado pela última vez em 2014, o fork WiiFlow Lite ainda está recebendo atualizações regulares.

    ![](/images/usb-loaders//wiiflow-ui.png)

+ O USB Loader GX é principalmente modelado como o menu do Wii e suporta temas.
    + Enquanto os cartões SD anteriormente não eram suportados para carregar jogos Wii no USB Loader GX, as atualizações recentes introduziram suporte ao Loader.
    + O USB Loader GX não possui um sistema de plugins.
    + O USB Loader GX ainda recebe atualizações regulares.

    ![](/images/usb-loaders/usbloadergx-ui.png)

### Estrutura de diretório dos jogos

```
💾 Cartão SD ou Armazenamento USB
➲ 📁 wbfs
    ├📁 NomeDoJogo [IDdoJogo]
    ├📄 IDdoJogo.wbfs (para títulos não-divididos)
    ├📂 NomeDoJogo [IDdoJogo]
        ├📄IDdoJogo.wbfs
        ├📄IDdoJogo.wbf1
```

### WiiFlow Lite

#### Requisitos
+ Um Wii desbloqueado
+ [cIOS](cios) totalmente instaladas
+ [WiiFlow](https://oscwii.org/library/app/wiiflow)

#### Instalação

1. Ensure that your Wii already has cIOS 248-251 installed - this can be checked with applications like [SysChecker](syscheck) or d2x cIOS installer.
1. Download WiiFlow and install it on your SD Card or USB device.

#### Quick Start Guide

##### General

+ WiiFlow by default is set to only find games on the SD card. This can be changed by going to `Settings > Startup Settings` to then turn off `Mount SD Only`.
+ You can toggle the current view in Wiiflow between plugins, games, homebrew, and Wii channels by clicking the button to the left of `Home`, on the bottom right.
+ You can download game covers by going to `Settings` > `Download Covers and Banners`.

##### User Interface

When WiiFlow detects games, they are displayed in flow view.<br> When you click on a game, you are given these options:
+ Star - Adds game to favorites.
+ Bookshelf - Adds the game to 1 of 6 categories of your choosing.
+ Gears - Opens the settings menu for that game - these settings are unique to that game and that game only.
+ X - Deletes the game from the USB drive or SD card.

When you bring the cursor to the bottom of the screen while in flow view, there are 6 icons:
+ Bookshelf - View the games that are sorted in the categories you chose.
+ Star - View games you favorited.
+ Gears - Opens WiiFlow Settings.
+ Game Type - Toggles between different types of apps/games. The logo changes depending on what game type you have selected.
+ Disc - Loads a game that is in the disc drive.
+ House - Opens the menu below. The menu can also be launched by pressing the home button.

![](/images/usb-loaders/wiiflow-menu.png)

+ Help Guide - Shows all the controls you can use in WiiFlow.
+ Reload Cache - Press this to allow WiiFlow to rescan for games on the USB device or SD card.
+ File Explorer - Allows you to explore the directory listing on your USB device or SD card and select an individual game or executable.
+ Select Plugins - Allows you to select plugins.
+ Credits - Shows the people who worked on WiiFlow.
+ Shutdown - Allows you to go into full shutdown or standby mode.
+ Exit To - Lets you exit to Wii Menu, Homebrew Channel, neek2o, Priiloader, or Bootmii.
+ Settings - Opens the global WiiFlow settings menu.

### USB Loader GX

#### Requisitos
+ A modded Wii
+ [cIOS](cios) totalmente instaladas
+ [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

#### Installation

1. Ensure that your Wii already has cIOS 248-251 installed - this can be checked with applications like [SysChecker](syscheck) or d2x cIOS installer.
1. Download USB Loader GX and install it on your SD Card or USB device.

#### Quick Start Guide

##### General

+ If USB Loader GX says "Waiting for HDD..." with a 20 second countdown, it is very likely that it cannot detect your USB device. Try to exit out of the app, plug your USB device into the opposite port that it is currently in, and relaunch it.
+ You can press the 1 Button on your Wii Remote to open up a dialog to download game covers and artwork from [GameTDB](https://gametdb.com/). It might take a while to download the game covers and artwork, depending the amount of games you have.
+ GameCube or "custom" Wii games may or may not have a custom banner that USB Loader GX uses. To enable this, find or write `CustomBannersURL = http://banner.rc24.xyz/` in `config/GXGlobal.cfg` on the drive you installed the app on. Then, you can use the `Custom Banner` download by pressing the 1 Button on your Wii Remote.

##### User Interface

On the middle of the bottom of the screen, you can see how much space is free on your USB drive and how many games you have.

These are the functions of the buttons found on the bar at the top of the screen, from left to right:

+ Star - Shows games that you have marked as "favorites".
+ Search - Lets you search for games by name.
+ Sort - Cycles through sorting methods for games.
+ Platform - Sorts games by platform.
+ Category - Sorts games by category.
+ List - Shows games in a list view.
+ Multi-Cover View - Shows games in a multi-cover view.
+ Cover Carousel View - Shows games in a carousel view.
+ Wii Menu View - Shows games in a Wii Menu view.
+ Parental Control - Locks USB Loader GX.
+ Disc - Loads a game that is in the disc drive.

There are also other buttons at the bottom of the screen:

+ (+) Icon - "Install" a game, i.e. loading it from disc and dumping it to your preset storage device.
+ Gears - Global settings for USB Loader GX.
+ SD card - Remount the SD card.
+ Homebrew - Load homebrew apps.
+ Wii - Open the HOME Menu.
+ Power Button - Turn off your Wii.

### Troubleshooting

Although the majority of games should work as-is with default settings, some may require using a specific cIOS to function, or to utilize certain features within the game. Examples include:

+ Using a keyboard in Animal Crossing: City Folk.
+ Running SpongeBob's Boating Bash.

A more comprehensive (although still incomplete) list can be found [here](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

To change the cIOS used for a specific game, follow the instructions specific to your USB loader:

#### USB Loader GX
1. Select the game that isn't working.
1. Click Settings.
1. Select `Game Load`.
1. Scroll down to `Game IOS`.
1. Enter the IOS slot to use.
    + Try using 250 or 251, if 249 doesn't work.
1. Press OK and try to load the game.

#### WiiFlow Lite
1. Select the game that isn't working.
1. Click the gear icon.
1. Go to cIOS and use the arrows to select the IOS slot to use.
    + Try using 250 or 251, if 249 doesn't work.
1. Press Save and try to load the game.

[Continue to Nintendont](nintendont) Now that you have installed a USB loader of some type for Wii games, you can install a similar type of application for effectively native playback of GameCube games.
{: .notice--info}
