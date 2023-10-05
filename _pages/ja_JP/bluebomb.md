---
title: "ブルーボム"
---

{% include toc title="Table of Contents" %}

Wii Miniをブリックさせる可能性が高いため、YouTubeなどにある動画を使ってハックすることはかなり推奨されません。
{: .notice--warning}

チュートリアル中に質問があったら、[ディスコード](https://discord.gg/6ryxnkS)でお問い合わせください。
{: .notice--info}

BlueBombはWiiやWii Miniのブルーツゥース機能を利用したハッキング方法です。 Wii Miniで使える唯一のハッキング方法ですが、通常のWiiでも問題無く使えます。 これを使ってKorean Kiiやエラー003などのブリックを直すこともできます。

通常のWiiを使う場合はもっと簡単な方法があるため、[別の方法](get-started)を使うことをおすすめします。 ブリックした場合など、例外はあります。
{: .notice--info}

ブルーツゥースを繋げる必要があるため、Wii本体とパソコンを近づけるようにしてください。
{: .notice--info}

### 必要条件

* Linuxが入っているパソコン
    * バーチャルマシンでも可能ですが、バーチャルマシンでブルーツゥースを使うことは複雑なため、推奨されません。 可能な場合、以下に書いてある通りLiveUSBを使うことをおすすめします。
    * Raspberry Piがある場合、それをLinux代わりに使えます。
    * WindowsサブシステムやクロームブックでLinuxモードではブルーツゥースが使えないため、利用できません。
    * Linuxがない場合、一番使いやすくWindowsやMacで使える[Ubuntu](https://ubuntu.com/download/desktop)を推奨します。
        * 32ビットの機種では[Ubuntu 16.04](http://releases.ubuntu.com/16.04/)が必要になります。
        * 64ビットの機種ではバグが少なめのLTS版を勧めますが、最新版でも使えます。
    * You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
* A Bluetooth adapter.
    * An internal Bluetooth adapter will work.
    * If you do not have one, make sure to get one compatible with Linux.
* A USB flash drive formatted as FAT32.
    * This cannot be the same flash drive used for your Linux Machine.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
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