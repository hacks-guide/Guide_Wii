---
title: "Loader di backup Wii"
---

{% include toc title="Table of Contents" %}

Questa guida introduce i loader di backup Wii. Il loro utilizzo principale è quello di caricare i backup di giochi da SD o USB che sono stati dumpati da un disco di gioco. A seconda del loader, potrebbero anche esserci estensioni che consente al suo utilizzo come frontend per giochi diversi da Wii. I due loader più comunamente utilizzati sono USB Loader GX e WiiFlow Lite (una mod di WiiFlow aggiornata regolarmente) - un loader potrebbe funzionare meglio dell'altro per te, quindi vale la pena di provarli entrambi.

Per far in modo che il loader Wii funzioni correttamente, è necessario aver installato l'ultimo cIOS. Si prega di dare un'occhiata a [questa](cios) guida per istruzioni se sei su Wii e [questa](cios-mini) guida se sei su Wii mini.
{: .notice--warning}

Per giocare ai giochi, si consiglia di utilizzare una scheda SD di grandi dimensioni o un hard drive esterno, poiché le unità flash non sono consigliate e sono molto sporadiche in funzionalità. Vedi il [FAQ storage](faq).
{: .notice--info}

Il forwarder ufficiale per Menu Wii di WiiFlow Lite può essere trovato sull'[Open Shop Channel](https://oscwii.org/library/app/wiiflow_channel_installer). Avvia l'app dal canale Homebrew per installare il forwarder. Il forwarder ufficiale di USB Loader GX può essere trovato nella sua pagina [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad). Puoi installarlo con [YAWM ModMii Edition](yawmme).
{: .notice--info}

### Differenze tra WiiFlow Lite e USB Loader GX

+ WiiFlow Lite ha un'interfaccia utente più avanzata per quanto riguarda le animazioni e gli effetti e supporta i temi.
    + Le schede SD sono interamente compatibili per il caricamento dei giochi Wii su WiiFlow Lite.
    + WiiFlow Lite ha un sistema di plugin.
    + While the original WiiFlow was last updated in 2014, the WiiFlow Lite fork is still recieving regular updates.

    ![](/images/usb-loaders//wiiflow-ui.png)

+ USB Loader GX is primarily modeled after the Wii Menu, and supports themes.
    + Anche se in passato le schede SD non erano supportate per i giochi Wii su USB Loader GX, recenti aggiornamenti hanno introdotto il loro supporto per questo loader.
    + USB Loader GX has no plugin system.
    + USB Loader GX still recieves regular updates.

    ![](/images/usb-loaders/usbloadergx-ui.png)

### Game Directory Structure

Below is a single WBFS example, and a split WBFS example.

```
💾SD card or USB:
 ┗ 📂wbfs
    ┣ 📂GameName [GameID]
    ┃  ┗ 📜gameid.wbfs (for non-split titles)
    ┗ 📂GameName [GameID]
       ┣ 📜gameid.wbfs
       ┗ 📜gameid.wbf1
```

### WiiFlow Lite

#### Requisiti
+ Una Wii modificata
+ The latest version of [cIOS](cios)
+ [WiiFlow](https://oscwii.org/library/app/wiiflow)

#### Installazione

1. Download WiiFlow and install it on your SD Card or USB device.

#### Guida rapida

##### General

+ WiiFlow by default is set to only find games on the SD card. This can be changed by going to `Settings > Startup Settings` to then turn off `Mount SD Only`.
+ You can toggle the current view in Wiiflow between plugins, games, homebrew, and Wii channels by clicking the button to the left of `Home`, on the bottom right.
+ You can download game covers by going to `Settings` > `Download Covers and Banners`.

##### Interfaccia utente

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

#### Requisiti
+ Una Wii modificata
+ The latest version of [cIOS](cios)
+ [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

#### Installazione

1. Ensure that your Wii already has cIOS 248-251 installed - this can be checked with applications like [SysChecker](syscheck) or d2x cIOS installer.
1. Download USB Loader GX and install it on your SD Card or USB device.

#### Guida rapida

##### General

+ If USB Loader GX says "Waiting for HDD..." with a 20 second countdown, it is very likely that it cannot detect your USB device. Try to exit out of the app, ensure your USB device is plugged into the bottom port if Wii is placed horizontally, or the port closest to the edge when the Wii is placed vertically. It may also be formatted incorrectly. Ensure that your USB drive is formatted to FAT32, with the MBR partition table, and 32kb (32768 bytes) allocation unit size/cluster size.
+ You can press the 1 Button on your Wii Remote to open up a dialog to download game covers and artwork from [GameTDB](https://gametdb.com/). It might take a while to download the game covers and artwork, depending the amount of games you have.
+ GameCube or "custom" Wii games may or may not have a custom banner that USB Loader GX uses. To enable this, find or write `CustomBannersURL = http://banner.rc24.xyz/` in `config/GXGlobal.cfg` on the drive you installed the app on. Then, you can use the `Custom Banner` download by pressing the 1 Button on your Wii Remote.

##### Interfaccia utente

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

Some games require using a specific cIOS to function, or to utilize certain features within the game. Examples include:

+ Using a keyboard in Animal Crossing: City Folk.
+ Running SpongeBob's Boating Bash.
+ Using a USB dongle in Rock Band.

A more comprehensive (although still incomplete) list can be found [here](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Both USB Loader GX and Wiiflow Lite are programmed to automatically find the best cIOS to use and load the game with it using the default settings.  However, if for whatever reason these loaders pick the wrong cios to use, you have the option to change it yourself.

To change the cIOS used for a specific game, follow the instructions specific to your USB loader:

#### USB Loader GX
1. Select the game that isn't working.
1. Click Settings.
1. Select `Game Load`.
1. Scroll down to `Game IOS`.
1. Enter the IOS slot to use.
    + Try using 248, 249, 250 or 251.
1. Press OK and try to load the game.

#### WiiFlow Lite
1. Select the game that isn't working.
1. Click the gear icon.
1. Go to cIOS and use the arrows to select the IOS slot to use.
    + Try using 248, 249, 250 or 251.
1. Press Save and try to load the game.

[Continue to Nintendont](nintendont) Now that you have installed a USB loader of some type for Wii games, you can install a similar type of application for effectively native playback of GameCube games.
{: .notice--info}
