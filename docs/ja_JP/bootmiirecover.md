---
title: "BootMii Recovery (RestoreMii)"
---

{% include toc title="Table of Contents" %}

このページでは、BootMiiでNANDのバックアップをリストアする方法について説明します。 ブリックしている場合でも、NANDのリストアは最終手段であることに注意してください。ブリックを修復できない場合は助けを求めてください。 それでもBootMiiを起動できる場合は、Homebrew Channelを起動し、他の方法で[ブリックの原因の特定と修復](bricks)を試してみてください。

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. この場合、Homebrew Channalからの起動は不要です。
{: .notice--info}

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. [BootMiiのファイル](https://static.hackmii.com/bootmii_sd_files.zip)をダウンロードしてSDカードのルートにコピーし、もう一度試してください。
{: .notice--warning}

Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 何か不明な点があれば、ご相談ください。
{: .notice--danger}

検証されていないNANDバックアップや、Wii以外からのNANDバックアップを復元しないでください。 ブリックする恐れがあります。 The same also goes for faulty SD cards.
{: .notice--danger}

### 必要なもの

* An earlier NAND Backup made by [BootMii](https://wii.guide/bootmii)

### Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

ゲームのセーブデータを復元したい場合は、DolphinでNANDバックアップを読み込み、ツール→全てのWiiセーブデータをエクスポートで書き出し、SDカードにコピーします。 WiiにSDカードに差し込み、データ管理からWii本体へセーブデータを移動します。

例えば、Wii伝言板のデータを復元する場合、DolphinでNANDバックアップを読み込んでください。 Dolphinを開き、ファイル→Open User Folderと選択し、Wii/title/00000001/00000002/data/cdb.vffをSDカードにコピーします。 [WiiXplorer](https://oscwii.org/library/app/wiixplorer)を使用して対応する場所に復元します。

### Important notes

+ ブリックが起きた際に通常操作のみを行っている(もしくは久しぶりにWiiを起動した場合)は、[Wi-Fi Brick](bricks#wi-fi-brick)が発生している可能性があります。

+ If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. GCコントローラーでカーソルを移動させる場合は、十字ボタンで移動させます。 選択するには、Aを押します

### 実行方法

1. Homebrew Channelを起動します。
1. Press the HOME Button, then select "Launch BootMii".
    + If you are even able to enter BootMii, enter the Homebrew Channel instead, and try your best to [identify what caused the brick](bricks) and reverse it.

    ![](/images/bootmii/BootMii_HBC.png)

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. リストアが成功すると、「I HAZ SUCCESS!」、失敗した場合は、「I HAZ FAIL」と表示されます。 Wii本体もしくはGCコントローラーのいずれかのボタンを押してください。

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

ブリックを解決するためにNANDをリストアし、それでも解決しない場合は、[ブリックの種類と解決法](bricks)を参照してください。
{: .notice--info}

[サイトマップに移動する](site-navigation)
{: .notice--info}
