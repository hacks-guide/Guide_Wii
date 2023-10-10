---
title: "NANDのリストア(BootMii)"
---

{% include toc title="Table of Contents" %}

このページでは、BootMiiでNANDのバックアップをリストアする方法について説明します。 ブリックしている場合でも、NANDのリストアは最終手段であることに注意してください。ブリックを修復できない場合は助けを求めてください。 それでもBootMiiを起動できる場合は、Homebrew Channelを起動し、他の方法で[ブリックの原因の特定と修復](bricks)を試してみてください。

BootMiiをboot2にインストールしている場合、Wii本体を再起動してBootMiiを起動させます。 この場合、Homebrew Channalからの起動は不要です。
{: .notice--info}

BootMiiを起動させたときに、画面が暗くなったままで、ディスクドライブが青色点滅している場合、SDカードにBootMiiのファイルが入っていません。 [BootMiiのファイル](https://static.hackmii.com/bootmii_sd_files.zip)をダウンロードしてSDカードのルートにコピーし、もう一度試してください。
{: .notice--warning}


Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 何か不明な点があれば、ご相談ください。
{: .notice--danger}

検証されていないNANDバックアップや、Wii以外からのNANDバックアップを復元しないでください。ブリックする恐れがあります。 問題のあるSDカードを使用することもブリックを起こす要因になります。
{: .notice--danger}

### 必要なもの

* [BootMii](bootmii)による以前のNANDバックアップ

### NANDバックアップから一部のデータを復元する

一部のデータを復元したい場合、Dolphin Emulatorを使用する必要がある可能性があります。

例えば、Wii伝言板のデータを復元する場合、DolphinでNANDバックアップを読み込んでください。 Dolphinを開き、ファイル→Open User Folderと選択し、Wii/title/00000001/00000002/data/cdb.vffをSDカードにコピーします。[WiiXplorer](https://oscwii.org/library/app/wiixplorer)を使用して対応する場所に復元します。

ゲームのセーブデータを復元したい場合は、DolphinでNANDバックアップを読み込み、ツール→全てのWiiセーブデータをエクスポートで書き出し、SDカードにコピーします。WiiにSDカードに差し込み、データ管理からWii本体へセーブデータを移動します。

### 重要な注意事項

+ ブリックが起きた際に通常操作のみを行っている(もしくは久しぶりにWiiを起動した場合)は、[Wi-Fi Brick](bricks#wi-fi-brick)が発生している可能性があります。

+ IOSとしてBootMiiをインストールし、Homebrew Channnelから起動している場合、NANDバックアップをリストアする場合、GCコントローラーでコナミコマンドを入力する必要があります。

+ Wii本体のPOWER(電源)ボタンとRESET(リセット)ボタンか、ポート1に接続しているGCコントローラーで操作できます。 GCコントローラーでカーソルを移動させる場合は、十字ボタンで移動させます。 選択するには、Aを押します

### 実行方法

1. Homebrew Channelを起動します。
1. HOMEボタンを押し、「Launch BootMii」を選択します。
1. オプション(歯車のアイコン)を選択します。

    ![](/images/BootMii/BootMii_Gears_Icon.png)

1. RestoreMii(左から2番目のアイコン)を選択します。

    ![](/images/BootMii/BootMii_Red_Arrow.png)

1. IOSとしてBootMiiをインストールし、Homebrew Channnelから起動している場合、GCコントローラーでコナミコマンド(上上下下左右左右BA)を入力します。
1. リストアが成功すると、「I HAZ SUCCESS!」、失敗した場合は、「I HAZ FAIL」と表示されます。 Wii本体もしくはGCコントローラーのいずれかのボタンを押してください。

ブリックを解決するためにNANDをリストアし、それでも解決しない場合は、[ブリックの種類と解決法](bricks)を参照してください。
{: .notice--info}

[サイトマップに移動する](site-navigation)
{: .notice--info}
