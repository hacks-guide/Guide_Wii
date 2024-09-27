# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb은 Wii 및 Wii 미니의 블루투스 라이브러리의 결함을 이용하는 취약점 공격입니다. 이 취약점 공격은 Wii 미니에서 작동하는 유일한 취약점 공격이지만, BlueBomb은 오리지널 Wii에서도 실행할 수 있습니다.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

콘솔이 취약점 공격을 실행하는 컴퓨터와 가까운지 확인하고, 이상적으로는 약 1미터 이내여야 합니다.

:::

### 필요한 것

- 리눅스 기기
  - 가상 머신을 사용할 수도 있지만 블루투스 패스스루를 작동시키는 데 복잡하므로 권장하지 않습니다. 가능하면 아래 설명된 대로 LiveUSB를 사용하세요.
  - 라즈베리 파이가 있다면 이미 리눅스가 설치되어 있을 가능성이 높으므로 이를 대신 사용할 수 있습니다.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - 64비트 장치의 경우 안정성을 위해 LTS 버전을 사용하는 것이 좋지만 최신 릴리스도 작동합니다.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- 블루투스 어댑터
  - 내장 블루투스 어댑터도 작동합니다.
  - 만약 없다면, 리눅스와 호환되는 것으로 구매하세요.
- FAT32로 포맷된 USB 플래시 드라이브
  - 리눅스 기기에 사용되는 플래시 드라이브와는 달라야 합니다.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### 진행 방법

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (벽돌을 고치려 한다면, /apps/에서 사용할 홈브루 앱도 복사해야 합니다)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 모든 경우에 boot.elf 사용).

2. Reinsert your flash drive into your console.
   - Wii 미니의 경우 USB 포트는 뒷면에 있습니다.
   - 일반 Wii의 경우 하단 포트를 사용합니다. (또는 똑바로 세워진 경우 오른쪽 포트).

3. 콘솔의 전원을 켜 주세요.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. 콘솔의 전원을 꺼 주세요.

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal

9. Run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. 그 다음 도우미는 필요한 파일을 받고 콘솔의 정보에 관해 물을겁니다.
    - Wii 미니를 선택했다면, 지역을 물어볼 겁니다. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Wii를 선택했다면 Wii 메뉴 버전을 선택하라고 물어볼 겁니다 (4단계에서 선택한 것)

11. 콘솔의 전원을 켜 주세요.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - This could take numerous attempts.

13. 그런 다음 HackMii 설치 프로그램을 다운로드하고 로드합니다.
    - 이제 나중에 사용할 계획이 없는 경우 리눅스 컴퓨터를 종료할 수 있습니다.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

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

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

콘솔이 취약점 공격을 실행하는 컴퓨터와 가까운지 확인하고, 이상적으로는 약 1미터 이내여야 합니다.

:::

### 필요한 것

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- FAT32로 포맷된 USB 플래시 드라이브
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### 진행 방법

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (벽돌을 고치려 한다면, /apps/에서 사용할 홈브루 앱도 복사해야 합니다)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 모든 경우에 boot.elf 사용).

2. Reinsert your flash drive into your console.
   - Wii 미니의 경우 USB 포트는 뒷면에 있습니다.
   - 일반 Wii의 경우 하단 포트를 사용합니다. (또는 똑바로 세워진 경우 오른쪽 포트).

3. 콘솔의 전원을 켜 주세요.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. 콘솔의 전원을 꺼 주세요.

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
2. 콘솔의 전원을 켜 주세요.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - This could take numerous attempts.
4. 그런 다음 HackMii 설치 프로그램을 다운로드하고 로드합니다.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
