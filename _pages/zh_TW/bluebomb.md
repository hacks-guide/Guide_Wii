---
title: "使用 BlueBomb 漏洞"
---

{% include toc title="條目內容" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. 雖然 Wii Mini 只能夠使用 BlueBomb 漏洞，本漏洞也能夠適用於一般 Wii 型號。 雖然 Wii Mini 只能夠使用 BlueBomb 漏洞，本漏洞也能夠適用於一般 Wii 型號。

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

由於 Wii Mini **變磚的風險較高**，**強烈建議**您**不要使用任何影片教學**進行與其主機相關的改機工作。
{: .notice--warning}

若您需要任何幫助，建議您移至 [Wii mini 改機 Discord 伺服器](https://discord.gg/6ryxnkS)
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.
{: .notice--info}

### Requirements

* 一台搭載 Linux 的電腦
    * 您也可以試試看使用虛擬機，但由於藍芽直通相關問題可能較於複雜，較不推薦。 如果可以，請使用下述的 LiveUSB 方式。
    * 如果您有樹梅派 (Raspberry Pi) 的話，您也可以直接用它，因為大部分情況下它早已搭載了 Linux。
    * Windows Subsystem for Linux 或 Chromebook 上的 Linux 模式將*無法使用*，因為它們無法直接存取藍芽模組或 USB 端口。
    * 如果您沒有任何可用的 Linux 系統，您可以使用較友善的 [Ubuntu](https://ubuntu.com/download/desktop) 系統，且可在 Windows 或 Mac 的電腦上執行。
        * 32 位元的裝置需使用[Ubuntu 16.04](http://releases.ubuntu.com/16.04/)。
        * 64 位元的裝置因穩定性的關係，建議使用 LTS 版本，但若您想要使用最新版本也是可以的。
    * 您可以將[ Linux Live 環境寫入至隨身碟](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview)中，不必將 Linux 整個安裝至您的電腦中。
* 藍牙轉接器
    * 也可以使用內建的藍芽轉接器。
    * If you do not have one, make sure to get one compatible with Linux.
* 一個格式化為 FAT32 的隨身碟。
    * 這不能與您的 Linux 機器使用的隨身碟相同。
* [若您的型號為一般版的 Wii，若您想要安裝 Homebrew Channel 以及 BootMii，因為有其他更好的漏洞能夠進行利用，我們不建議您使用 BlueBomb。](https://bootmii.org/download/)

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
    + （如果您正試圖修復變磚，您還應該將您希望使用的自製軟體複製到 /apps/ 中）
    + - (即使您的主機為 Wii Mini，您還是**不能**使用 bootmini.elf；它的用途與此完全無關。 請一律使用 boot.elf）。
1. Reinsert your flash drive into your console.
    + Wii mini 的 USB 端口在主機背面。
    + 一般的 Wii 請使用下方的 USB 端口。 (豎置時使用右邊的接口)。
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

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
    + 如果您選擇了 Wii mini，您將被要求提供您主機所屬的區碼。 這可以通過 Wii 選單版本的最後一個字母（`U` 代表 **USA** 和 `E` 代表 **PAL** 型號）。
    + 如果您選擇了 Wii，您將被要求提供您的 Wii 選單版本（您在第 4 步中確定的版本）
1. Power on your console.
    + 打開您的主機，但請**不要**連接任何 Wii 控制器。
1. 於您的主機上重複按下 Sync 按鈕，直到終端機顯示 `got connection handle`。
    + This could take numerous attempts.
1. 您的主機現在應該啟動到 HackMii 安裝程序中。
    + 如果您不打算繼續使用，您現在可以將您的 Linux 電腦關機。

如果您的主機為一般的 Wii，請繼續安裝 Homebrew Channel 和 BootMii<br>
{: .notice--info}

如果您的主機為 Wii mini，請繼續安裝 Homebrew Channel
{: .notice--info}
