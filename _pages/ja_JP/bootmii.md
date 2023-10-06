---
title: "NANDのバックアップ(BootMii)"
---

{% include toc title="Table of Contents" %}

BootMiiでは、WiiのNANDをバックアップしたり、リストアすることができます。 このページでは、WiiのNANDをSDカードにバックアップする方法を説明します。

Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 いずれにしても、NANDのバックアップを作成することをお勧めします。
{: .notice--danger}

BootMiiを使用し、NANDバックアップを作成するには、 **SDカード** が必要です。 SDカードが無い場合、このページをスキップできますが、後で実行することを推奨します。
{: .notice--warning}

Wiiリモコンを使用してBootMiiを操作することはできません。 Wii本体のPOWER(電源)ボタンとRESET(リセット)ボタンか、ポート1に接続しているGCコントローラーで操作できます。 カーソルを移動させるには、WiiのPOWER(電源)ボタンか、GCコントローラーの十字ボタンを押してください。 選択するには、WiiのRESETボタンかGCコントローラーのAボタンを押してください。 BootMiiがIOSとしてインストールされている場合は、NANDバックアップをリストアするためにはGCコントローラーが必要です。
{: .notice--info}

`BootMii` ボタンがHomebrew Channelに表示されない場合は、 [HackMii Installer](hackmii) を起動してBootMiiをインストールしてください。
{: .notice--warning}

BootMiiを起動させたときに、画面が暗くなったままで、ディスクドライブが青色点滅している場合、SDカードにBootMiiのファイルが入っていません。 [BootMiiのファイル](https://static.hackmii.com/bootmii_sd_files.zip)をダウンロードしてSDカードのルートにコピーし、もう一度試してください。
{: .notice--warning}

### 必要なもの

* SDカード(最低512MB、推奨1GB以上、SDHC、MicroSD(アタブター必要)可)

### 実行方法

BootMiiをboot2にインストールしている場合、Wii本体を再起動してBootMiiを起動させます。 この場合は、Step4から始めてください。
{: .notice--info}

1. Wiiの電源を入れます。
1. Homebrew Channelを起動します。
1. HOMEボタンを押し、「Launch BootMii」を選択します。

    ![BootMii_Main](/images/bootmii/BootMii_Main.png)

1. オプション(歯車のアイコン)を選択します。

    ![BootMii_Gears_Icon](/images/bootmii/BootMii_Gears_Icon.png)

1. 一番左のアイコンを選択します。
    + NANDバックアップが開始します。 進行状況は画面に表示されます。
    + 発生した「Bad Blocks」は正常な動作で発生したものであり、NANDビニングの過程で発生したものです。 NANDバックアップでいくつか表示されても問題はありません。
    + 書き出しが終わると、書き出しデータの確認を行います。 Ideally, all the blocks should be green after the verification process.

    ![BootMii_Green_Arrow](/images/bootmii/BootMii_Green_Arrow.png)

1. When the process is complete, exit the NAND backup screen by pressing any button.

    ![BootMii_NAND_Backup](/images/bootmii/BootMii_NAND_Backup.png)

1. Press the Back button (the one with an arrow), then press either the Wii Menu button or the Homebrew Channel button to exit BootMii.

    ![BootMii_Return_Arrow](/images/bootmii/BootMii_Return_Arrow.png)

<div id="restore-notice" class="notice" markdown="1">
Note: **restoring a NAND backup is usually a last resort**. There often better ways to unbrick your console.
Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover) (Original Wii only).
</div>

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is your Wii's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.
{: .notice--info}