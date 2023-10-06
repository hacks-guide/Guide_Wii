---
title: "NANDのリストア(BootMii)"
---

{% include toc title="Table of Contents" %}

This guide will provide instructions on how to restore a backup of your NAND with BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

BootMiiをboot2にインストールしている場合、Wii本体を再起動してBootMiiを起動させます。 この場合、Homebrew Channalからの起動は不要です。
{: .notice--info}

BootMiiを起動させたときに、画面が暗くなったままで、ディスクドライブが青色点滅している場合、SDカードにBootMiiのファイルが入っていません。 [BootMiiのファイル](https://static.hackmii.com/bootmii_sd_files.zip)をダウンロードしてSDカードのルートにコピーし、もう一度試してください。
{: .notice--warning}


Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same goes for using faulty SD cards.
{: .notice--danger}

### 必要なもの

* An earlier NAND Backup made by [BootMii](bootmii)

### Restoring individual data from a NAND backup

There is likely a much safer and faster way to bring individual data back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

### Important preliminary notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### 実行方法

1. Homebrew Channelを起動します。
1. HOMEボタンを押し、「Launch BootMii」を選択します。
1. オプション(歯車のアイコン)を選択します。

    ![](/images/BootMii/BootMii_Gears_Icon.png)

1. Select the RestoreMii button.

    ![](/images/BootMii/BootMii_Red_Arrow.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START
1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[サイトマップに移動する](site-navigation)
{: .notice--info}
