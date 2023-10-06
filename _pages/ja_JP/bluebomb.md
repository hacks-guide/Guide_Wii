---
title: "BlueBomb"
---

{% include toc title="Table of Contents" %}

Wii Miniをブリックさせる可能性が高いため、YouTubeなどにある動画を使用して改造しないことを推奨します。
{: .notice--warning}

チュートリアル中に質問があったら、[ディスコード](https://discord.gg/6ryxnkS)でお問い合わせください。
{: .notice--info}

BlueBombはWiiやWii MiniのBluetooth機能のセキュリティホールを利用した改造方法です。 Wii Miniで唯一使用可能な改造方法ですが、Wiiでも問題無く使えます。 これを使ってKorean KiiやError 003などのブリックを直すこともできます。

Wiiを改造する場合はもっと簡単な方法があるため、[別の方法](get-started)を使用することを推奨します。 ブリックを修復する場合などの例外はあります。
{: .notice--info}

Bluetoothを接続するため、Wii本体とパソコンを近づけるようにしてください。1m未満の距離が望ましいです。
{: .notice--info}

### 必要なもの

* Linuxがインストールされているパソコン
    * 仮想環境でも可能ですが、仮想環境でBluetoothを使うことは複雑であるため、推奨されません。 後述のLiveUSBを利用することを推奨します。
    * Raspberry Piがある場合、Linuxがインストールされているパソコンの代わりに利用できます。
    * Windows Subsystem for LinuxやChromebookのLinuxモードではBluetoothが使用できないため、BlueBombを実行することはできません。
    * Linuxがインストールされているパソコンが無い場合、WindowsやMacで利用可能な[Ubuntu](https://ubuntu.com/download/desktop)を推奨します。
        * 32ビットのPCでは[Ubuntu 16.04](http://releases.ubuntu.com/16.04/)が必要です。
        * 64ビットのPCでは不具合が起きづらいLTS(長期サポート)版のUbuntuを推奨しますが、最新版のUbuntuでも使えます。
    * Linux LiveをPCにインストールする代わりに、[USBドライブにLinuxをインストール](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview)することができます。
* Bluetoothアダプター
    * 内臓Bluetoothアダプターも使用できます。
    * 外付けBuletoothアタブターを使用する場合、Linuxと互換性のあるもの使用してください。
* FAT32でフォーマットされたUSBドライブ
    * LinuxをダウンロードしたUSDドライブとは別の物を使用してください。
* [HackMii Installer v1.2](https://bootmii.org/download/)

### 実行方法

1. Hackmii_installer_v1.2`.zip`から`boot.elf`をUSBドライブのルートにコピーします。
    + (ブリックを修正する場合、使用するHomeberwアプリをappsフォルダにコピーする必要があります)
    + (Wii miniの場合でも、bootmini.elfは機能しません。そのファイルの目的は完全に異なり、無関係のものです。 boot.elfを使用してください。)
1. USBドライブをWii本体に接続します。
    + Wiiの場合、縦向きの場合は右のUSBポート、横向きの場合は下のUSBポートに接続してください。
    + Wii miniの場合、背面にあるUSBポートに接続してください。
1. Wiiの電源を入れます。
1. `Wii設定`に進みます。
1. バージョンを確認してください。1ページ目の右上に表示されています。
    + これはシステムメニュー領域に対応しており、後ほど実行する手順に必要となります。

    ![](/images/wii/SystemMenuVersion.png)

1. Wiiの電源を切ります。
1. Linuxを起動し、インターネットに接続されていることを確認します。
1. ターミナルを開きます。
1. 以下のコードを実行します。

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. コードを実行すると、必要なファイルをダウンロードし、Wiiの情報を求めます。
    + Wiiを選択した場合、Wiiメニューのバージョンの入力を求められます。 これは、STEP4で確認した番号と同じです。
    + Wii miniを選択した場合、リージョンを入力するように求められます。これは、STEP4で確認したWiiメニューの最後の文字(U,E,Kのいずれか)です。
1. Wiiの電源を入れます。
    + Wiiリモコンの電源は入れないでください。
1. PCに`got connection handle`が表示されるまで、Wii本体のSyncボタンを押してください。
    + 何度も押す必要がある場合があります。
1. 成功すると、WiiはHackMiiインストーラーをロードします。
    + 後でLinuxを使用しない場合、Linuxをシャットダウンすることができます。

Wiiを使用している場合、[Homebrew ChannelとBootMiiのインストール](hbc)を参照してください。<br>
{: .notice--info}

Wii miniを使用している場合、[Homebrew Channelのインストール(Wii mini)](hbc-mini)を参照してください。
{: .notice--info}