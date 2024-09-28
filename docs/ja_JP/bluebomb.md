# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBombはWiiやWii MiniのBluetooth機能のセキュリティホールを利用した改造方法です。 {% capture technical_info %}<summary line-breaks-before="1" mark="crwd-mark"><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. ブリックを修復する場合などの例外はあります。

:::

::: info

Bluetoothを接続するため、Wii本体とパソコンを近づけるようにしてください。1m未満の距離が望ましいです。

:::

### 必要なもの

- Linuxがインストールされているパソコン
  - 仮想環境でも可能ですが、仮想環境でBluetoothを使うことは複雑であるため、推奨されません。 後述のLiveUSBを利用することを推奨します。
  - Raspberry Piがある場合、Linuxがインストールされているパソコンの代わりに利用できます。
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - 64ビットのPCでは不具合が起きづらいLTS(長期サポート)版のUbuntuを推奨しますが、最新版のUbuntuでも使えます。
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Bluetoothアダプター
  - 内臓Bluetoothアダプターも使用できます。
  - 外付けBuletoothアタブターを使用する場合、Linuxと互換性のあるもの使用してください。
- FAT32でフォーマットされたUSBドライブ
  - LinuxをダウンロードしたUSDドライブとは別の物を使用してください。
- [HackMii Installer v1.2](https://bootmii.org/download/)

### 実行方法

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (ブリックを修正する場合、使用するHomeberwアプリをappsフォルダにコピーする必要があります)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. boot.elfを使用してください。 )

2. USBドライブをWii本体に接続します。
   - Wiiの場合、縦向きの場合は右のUSBポート、横向きの場合は下のUSBポートに接続してください。
   - For a normal Wii, use the bottom port. (or the right port if it's upright).

3. Wiiの電源を入れます。

4. Go to `Wii Settings`.

5. バージョンを確認してください。1ページ目の右上に表示されています。

   - これはシステムメニュー領域に対応しており、後ほど実行する手順に必要となります。

   ![](/images/wii/SystemMenuVersion.png)

6. Wiiの電源を切ります。

7. Linuxを起動し、インターネットに接続されていることを確認します。

8. ターミナルを開きます。

9. 以下のコードを実行します。

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. コードを実行すると、必要なファイルをダウンロードし、Wiiの情報を求めます。
    - Wii miniを選択した場合、リージョンを入力するように求められます。 This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Wiiを選択した場合、Wiiメニューのバージョンの入力を求められます。

11. Wiiの電源を入れます。
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - 何度も押す必要がある場合があります。

13. It'll then proceed to download and load the HackMii Installer.
    - You can now shut down your Linux computer if you are not planning to use it later.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. ブリックを修復する場合などの例外はあります。

:::

::: info

Bluetoothを接続するため、Wii本体とパソコンを近づけるようにしてください。1m未満の距離が望ましいです。

:::

### 必要なもの

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- FAT32でフォーマットされたUSBドライブ
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### 実行方法

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (ブリックを修正する場合、使用するHomeberwアプリをappsフォルダにコピーする必要があります)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. boot.elfを使用してください。 )

2. USBドライブをWii本体に接続します。
   - Wiiの場合、縦向きの場合は右のUSBポート、横向きの場合は下のUSBポートに接続してください。
   - For a normal Wii, use the bottom port. (or the right port if it's upright).

3. Wiiの電源を入れます。

4. Go to `Wii Settings`.

5. バージョンを確認してください。1ページ目の右上に表示されています。

   - これはシステムメニュー領域に対応しており、後ほど実行する手順に必要となります。

   ![](/images/wii/SystemMenuVersion.png)

6. Wiiの電源を切ります。

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Wiiの電源を入れます。
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - 何度も押す必要がある場合があります。
4. It'll then proceed to download and load the HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
