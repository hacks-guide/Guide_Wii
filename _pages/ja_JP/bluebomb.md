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
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![Wii Region](/images/wii/SystemMenuVersion.png)

1. Power off your console.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. The helper will then download the required files, and ask for information about your console.
    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    + If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)
1. Power on your console.
    + **Do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If you are not planning to use it later, you can now shut down your Linux distro.

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>
{: .notice--info}

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)
{: .notice--info}