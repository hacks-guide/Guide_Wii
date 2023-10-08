---
title: "USBローダー"
---

{% include toc title="Table of Contents" %}

ここではUSBローダーをWiiに入れる説明をします。 主にディスクのダンプを遊ぶために使えます。 ローダーにより、Wii以外のゲームを遊ぶメニューにも使えます。 一番使われるローダーはUSB Loader GXとWiiFlow Lite（WiiFlowの更新されたモッド版）で、使い方により使いやすいものが変わるため、両方使われることがお勧めします。

**Configurable USB Loaderについて**<br> Configurable USB Loaderは長い間サポートされてないため、ここではインストールの説明をしていません。 もし希望が多いそうな場合、追加します。
{: .notice--warning}

USBローダーが使えるようにするためには、正しいcIOSのインストールが必要となります。 Wiiで使うためには[この](cios)ガイド、Wii Miniで使う場合は[この](cios-mini)ガイドを使ってください。
{: .notice--warning}

ゲームを遊ぶときはSDカードやハードディスクを使うお勧めします。フラッシュメモリーは利用性が低いため推奨されません。 詳しくは[FAQ](faq)を確認してください。
{: .notice--info}

Wii Menuでローダーを開くフォーワーダーはそれぞれWii Flow Liteは[オープンショップチャンネル](https://oscwii.org/library/app/wiiflow_channel_installer)で、USB Loader GXは[SourceForge](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT.wad/download)からダウンロードできます。 どちらも[YAWM ModMiiエディション](yawmme)でインストールできます。
{: .notice--info}

### WiiFlow LiteとUSB Loader GXの違い

+ WiiFlow Liteはもっと設定が細かいUIやテーマが使えます。
    + WiiFlow LiteではSDカードが対応してます。
    + プラグインに対応してます。
    + WiiFlowは2014年に廃止されましたが、WiiFlow Liteは現在でもアップデートされてます。

    ![](/images/usb-loaders//wiiflow-ui.png)

+ USB Loader GXはWii Menuと同じデザインを使っており、テーマが使えます。
    + SDカード対応はもともとありませんでしたが、最近のアップデートで対応性が追加されました。
    + USb Loader GXはプラグインに対応してません。
    + USB Loader GXは現在もアップデートされてます。

    ![](/images/usb-loaders/usbloadergx-ui.png)

### ゲームディレクトリのテンプレート

```
💾SDカード・ハードディスク
| ╸📁wbfs
    | ╸📁 ゲーム名 [ゲームID]
    |   | ╸📄 ゲームID.wbfs (ファイルがスプリットされてない場合)
    | ╸📂ゲーム名 [ゲームID]
        | ╸📄ゲームID.wbfs
        | ╸📄ゲームID.wbf1
```

### WiiFlow Lite

#### 必要なもの
+ モッドされたWii
+ インストールされた[cIOS](cios)
+ [WiiFlow](https://oscwii.org/library/app/wiiflow)

#### インストールの手順

1. WiiにcIOS 248-251がインストールされてることを確認してください。[SysChecker](syscheck)などのアプリやd2x cIOSインストーラで見れます。
1. WiiFlowをダウンロードしSDカードまたはハードディスクにインストールしてください。

#### クイックスタートガイド

##### 基本

+ WiiFlowは自動的にSDカードに載っているゲームだけ読み取るようになってます。 This can be changed by going to `Settings > Startup Settings` to then turn off `Mount SD Only`.
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

#### 必要なもの
+ A modded Wii
+ インストールされた[cIOS](cios)
+ [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

#### Installation

1. WiiにcIOS 248-251がインストールされてることを確認してください。[SysChecker](syscheck)などのアプリやd2x cIOSインストーラで見れます。
1. Download USB Loader GX and install it on your SD Card or USB device.

#### Quick Start Guide

##### 基本

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
