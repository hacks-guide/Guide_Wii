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

BootMiiを起動させたときに、画面が暗くなったままで、ディスクドライブが青色点滅している場合、SDカードにBootMiiのファイルが入っていません。 Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

### 必要なもの

* SDカード(最低512MB、推奨1GB以上、SDHC、MicroSD(アタブター必要)可)

### 実行方法

BootMiiをboot2にインストールしている場合、Wii本体を再起動してBootMiiを起動させます。 この場合は、Step4から始めてください。
{: .notice--info}

1. Wiiの電源を入れます。
1. Homebrew Channelを起動します。
1. HOMEボタンを押し、「Launch BootMii」を選択します。

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. オプション(歯車のアイコン)を選択します。

    ![](/images/bootmii/BootMii_Gears.png)

1. 一番左のアイコンを選択します。

    ![](/images/bootmii/BootMii_Backup.png)

1. NANDバックアップが開始します。 進行状況は画面に表示されます。
    + 発生した「Bad Blocks」は正常な動作で発生したものであり、NANDビニングの過程で発生したものです。 NANDバックアップでいくつか表示されても問題はありません。

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. 確認が終わった後に全てのブロックが緑色になっていることが望ましいです。
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. BootMiiを終了するには、矢印のアイコンを選択し、WiiメニューアイコンもしくはHomebrew Channelアイコンのいずれかを選択してください。

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
注意:NANDバックアップのリストアは基本的に最終手段です。 ブリックを解決するためにはほかにも方法があることが多いです。
[ブリックの原因を特定](bricks)し、その問題を解決することに注力してください。
SDカードのNANDバックアップをリストアするときは、[NANDのリストア(BootMii)](bootmiirecover)に従ってください。ただし、前述のとおりWii Family EditionではNANDのリストアは出来ません。
</div>

As stated earlier, if you have BootMii installed as boot2, it will launch every time you start your console. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

`nand.bin`と`keys.bin`という2つのファイルがSDカードのルート上に作成されます。 `nand.bin` はWiiの内部メモリで、`keys.bin`はコンソールキーです。
{: .notice--info}

[Priiloaderをインストール](priiloader)<br> Priiloaderはさらにブリックを予防するためのもので、便利な機能も追加できます。 IOSでしかBootMiiを導入できなかった場合は、必ず導入してください。
{: .notice--info}
