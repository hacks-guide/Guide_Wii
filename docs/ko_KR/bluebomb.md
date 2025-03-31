---
outline: false
---

# BlueBomb

::::: tabs

:::: tabs BlueBomb 클래식

## BlueBomb Classic

:::details 기술 세부사항 (선택 사항)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Although it is the only exploit that works for the Wii mini, BlueBomb can run on the original Wii as well.

이 익스플로잇은 배너 벽돌 및 (일부) 테마 벽돌과 같은 특정 벽돌에서의 복구도 가능하게 합니다.

:::

::: warning

Wii 미니 콘솔을 해킹하는데 **어떤** 비디오 가이드도 사용하지 말 것을 **강력히** 권장합니다. **벽돌화** 될 확률이 매우 높기 때문입니다.

:::

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (추천)

:::

::: info

Wii의 원래 개정판을 사용하고 있다면 HackMii 설치 프로그램에 접근하는 훨씬 더 쉬운 방법이 있으므로 [사용할 수 있는 다른 익스플로잇](get-started)을 찾아야 할 것입니다. 그러나 벽돌 회수와 같은 상황에서는 예외도 있습니다.

:::

::: info

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements

- A Linux machine
    - A Virtual Machine may work, but it is not recommended due to its complexity in getting Bluetooth passthrough working. If possible, please use a LiveUSB as described below.
    - If you have a Raspberry Pi, you can use that instead as it most likely has Linux installed already.
    - 리눅스용 윈도우 하위 시스템이나 리눅스 모드를 실행하는 크롬북은 블루투스 어댑터나 USB 포트에 직접 접근할 수 없으므로 작동하지 않습니다.
    - 리눅스가 없다면 [우분투](https://ubuntu.com/download/desktop)가 가장 사용자 친화적인 옵션이며 윈도우나 맥을 실행하는 컴퓨터에서 실행할 수 있습니다.
        - 32비트 장치에는 [우분투 16.04](http://releases.ubuntu.com/16.04/)가 필요합니다.
        - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
    - 컴퓨터에 설치하는 대신 [USB 플래시 드라이브에 리눅스 라이브 환경을 플래싱](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) 할 수 있습니다.
- A Bluetooth adapter.
    - An internal Bluetooth adapter will work.
    - If you do not have one, make sure to get one compatible with Linux.
- A USB flash drive formatted as FAT32.
    - This cannot be the same flash drive used for your Linux Machine.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. hackmii_installer_v1.2 `.zip`에서 `boot.elf`를 플래시 드라이브의 루트에 복사합니다.

    - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    - (Wii 미니의 경우에도 bootmini.elf는 **작동하지 않습니다.** 그 목적은 전혀 다르고 관련이 없습니다. Use boot.elf in all cases).

    ![](/images/exploits/bluebomb/usb-exploit.png)

2. 플래시 드라이브를 콘솔에 다시 연결합니다.
    - For a Wii mini, the USB port is on the back.
    - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. `Wii 설정`으로 갑니다.

5. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고하세요.

    - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

    ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

7. 리눅스 배포판을 시작하고 인터넷에 연결되어 있는지 확인합니다.

8. 터미널을 열고 다음 명령을 실행합니다:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

    ![](/images/exploits/bluebomb/run-commands.png)

9. The helper will then download the required files, and ask for information about your console.

    ![](/images/exploits/bluebomb/console-type.png)

    - If you have selected a Wii mini you will be asked to provide your region. 이는 Wii 메뉴 버전의 마지막 문자로 확인할 수 있습니다. (`U`는 **USA** 모델, `E`는 **PAL** 모델)

    ![](/images/exploits/bluebomb/wii-mini-options.png)

    - Wii를 선택한 경우 Wii 메뉴 버전을 제공하라는 메시지가 표시됩니다. (4 단계에서 결정한 버전)

    ![](/images/exploits/bluebomb/wii-options.png)

10. Power on your console.
    - Wii 리모컨을 **연결하지 마세요.**

11. 아직 진행하지 않았다면 스크립트에 `yes`를 입력하여 계속 진행하고, `Waiting to accept`이 표시되는지 확인합니다.

12. 터미널에 \`got connection handle'라는 메시지가 표시될 때까지 동기화 버튼을 반복해서 누릅니다.

    - 이를 위해서는 여러 번의 시도가 필요할 수 있습니다.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. 익스플로잇이 성공적이면 아래와 비슷한 화면이 나타나고 그 후에 HackMii 설치 프로그램이 로드됩니다.

    - If you are not planning to use it later, you can now shut down your Linux distro.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::: tabs BlueBomb 마이크로

## BlueBomb Micro

:::details 기술 세부사항 (선택 사항)

이 익스플로잇은 배너 벽돌 및 (일부) 테마 벽돌과 같은 특정 벽돌에서의 복원도 가능하게 합니다.

:::

::: warning

Wii 미니 콘솔을 해킹하는데 **어떤** 비디오 가이드도 사용하지 말 것을 **강력히** 권장합니다. **벽돌화** 될 확률이 매우 높기 때문입니다.

:::

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (추천)

:::

::: info

Wii의 원래 개정판을 사용하고 있다면 HackMii 설치 프로그램에 접근하는 훨씬 더 쉬운 방법이 있으므로 [사용할 수 있는 다른 익스플로잇](get-started)을 찾아야 할 것입니다. 그러나 벽돌 회수와 같은 상황에서는 예외도 있습니다.

:::

::: info

익스플로잇을 실행하는 컴퓨터와 마이크로 컨트롤러가 가까이 있는지 확인하세요. 이상적으로는 약 60 cm 이내에 있어야 합니다.

:::

### Requirements

- BR/EDR (클래식)을 지원하는 라즈베리 파이 피코 W 1/2 또는 ESP32입니다.
- A USB flash drive formatted as FAT32.
- [HackMii 설치 프로그램](https://bootmii.org/download/)

::: info

일반적인 라즈베리 파이 피코는 작동하지 않습니다. 반드시 무선 모델이어야 합니다. 또한 BLE 컨트롤러만 있는 ESP32는 작동하지 않습니다.

:::

### Instructions

1. hackmii_installer_v1.2 `.zip`에서 `boot.elf`를 플래시 드라이브의 루트에 복사합니다.

    - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    - (Wii 미니의 경우에도 bootmini.elf는 **작동하지 않습니다.** 그 목적은 전혀 다르고 관련이 없습니다. Use boot.elf in all cases).

    ![](/images/exploits/bluebomb/usb-exploit.png)

2. 플래시 드라이브를 콘솔에 다시 연결합니다.
    - For a Wii mini, the USB port is on the back.
    - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. `Wii 설정`으로 갑니다.

5. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고합니다.

    - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

    ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

#### 라즈베리 파이 피코 W

1. 릴리스 페이지에서 최신 [사전 컴파일된 바이너리](https://github.com/GaryOderNichts/bluebomb_micro/releases)를 다운로드하여 PC에 압축을 풉니다.

    - 장치에 맞는 적절한 바이너리를 선택합니다. `bluebomb_micro_pico2_w_version`은 피코 2 W용이고, `bluebomb_micro_pico_w_version`은 피코 1 W용입니다.

    ![](/images/exploits/bluebomb/pico-download.png)

2. `BOOTSEL` 버튼을 누른 채로 피코 W를 PC에 연결하세요. 이제 피코가 PC의 드라이브로 표시될 것입니다.

    ![](/images/exploits/bluebomb/pico-button.jpg)
    ![](/images/exploits/bluebomb/pico-drive.png)

3. 버전 4.3을 구동하는 유럽식 Wii가 있다면 bluebomb_WII_SM4_3E.uf2를 복사하고, 유럽식 Wii 미니가 있다면 bluebomb_MINI_SM_PAL.uf2 등을 복사합니다.

    - 버전 4.3을 구동하는 유럽식 Wii가 있다면 bluebomb_WII_SM4_3E.uf2를 복사하고, 유럽식 Wii 미니가 있다면 bluebomb_MINI_SM_PAL.uf2 등을 복사합니다.

    ![](/images/exploits/bluebomb/pico-files.png)

4. 드라이브가 분리되고 녹색 LED가 깜박이기 시작합니다. 이는 피코 W가 준비되었다는 의미입니다. 이제 PC에서 장치를 분리해도 됩니다.

    ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. 최신 [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)를 설정합니다.
2. [소스에서](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source)바이너리를 빌드합니다.
3. ESP32에 [바이너리 플래시](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing)합니다.
4. 이제 장치가 준비되었습니다. PC에서 장치를 분리할 수 있습니다.

### 익스플로잇 수행

1. 플래시된 장치를 다시 PC에 연결합니다.
2. Power on your console.
    - Wii 리모컨을 **연결하지 마세요.**
3. 피코 W LED가 빠르게 깜빡일 때까지 동기화 버튼을 반복해서 누르면 익스플로잇 업로드가 시작됩니다.
    - 이를 위해서는 여러 번의 시도가 필요할 수 있습니다.
4. 익스플로잇이 성공적이면 아래와 비슷한 화면이 나타나고 그 후에 HackMii 설치 프로그램이 로드됩니다.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

`Exception 0700 occurred!` 또는 이와 유사한 오류가 발생하면 익스플로잇을 다시 시도하세요. 이런 문제가 지속되면 지원을 위해 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요.

:::

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::::
