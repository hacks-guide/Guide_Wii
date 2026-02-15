---
outline: false
---

# BlueBomb

::::: tabs

:::: tabs BlueBomb 클래식

## BlueBomb 클래식

:::details 기술 세부사항 (선택 사항)

BlueBomb은 Wii 및 Wii 미니의 블루투스 라이브러리에 있는 결함을 악용하는 익스플로잇입니다. 블루밤은 Wii 미니에서 작동하는 유일한 익스플로잇이지만, 오리지널 Wii에서도 실행할 수 있습니다.

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

콘솔이 익스플로잇을 실행하는 컴퓨터 가까이에 있는지 확인하세요. 이상적으로는 약 90cm 이내에 있어야 합니다.

:::

### 요구 사항

- 리눅스 머신
  - 가상 머신을 사용할 수도 있지만, 블루투스 패스스루를 구현하는 과정이 복잡하기 때문에 권장하지 않습니다. 가능하면 아래 설명된 대로 LiveUSB를 사용해 주세요.
  - 라즈베리 파이가 있다면, 리눅스가 이미 설치되어 있을 가능성이 높으므로 그것을 대신 사용할 수 있습니다.
    - ARM64 라즈베리 파이는 armhf(32비트) 아키텍처를 추가하여 멀티아키텍처 기능을 활성화해야 합니다. 다음은 모든 데비안 기반 운영체제에서 작동해야 합니다:
    ```bash
    sudo sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # ELF 32-bit라고 표시되어야 함
    screen
    ```
  - 리눅스용 윈도우 하위 시스템이나 리눅스 모드를 실행하는 크롬북은 블루투스 어댑터나 USB 포트에 직접 접근할 수 없으므로 작동하지 않습니다.
  - 리눅스가 없다면, [우분투](https://ubuntu.com/download/desktop)가 가장 사용하기 쉬운 옵션이며, 윈도우 또는 인텔 기반 맥에서 ​​실행할 수 있습니다.
    - 애플 실리콘 맥은 하드웨어에 ARM32 명령어 세트가 없기 때문에 작동하지 않습니다.
    - 32비트 장치에는 [우분투 16.04](http://releases.ubuntu.com/16.04/)가 필요합니다.
    - 64비트 장치의 경우 안정성 때문에 LTS 버전을 사용하는 것이 좋지만, 최신 버전도 문제없이 작동합니다.
  - 컴퓨터에 설치하는 대신 [USB 플래시 드라이브에 리눅스 라이브 환경을 플래싱](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) 할 수 있습니다.
- 블루투스 어댑터
  - 내장 블루투스 어댑터가 작동합니다.
  - 만약 없다면, 리눅스와 호환되는 제품을 구입하세요.
- [FAT32/MS-DOS 형식으로 포맷된](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) USB 플래시 드라이브
  - 이 플래시 드라이브는 리눅스 컴퓨터에 사용하는 것과 동일한 드라이브가 아닙니다.
- [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

### 지침

1. hackmii_installer_v1.2 `.zip`에서 `boot.elf`를 플래시 드라이브의 루트에 복사합니다.

   - (벽돌 현상을 해결하려는 경우, 사용하려는 홈브류 앱을 /apps/ 폴더에 복사해야 함)
   - (Wii 미니의 경우에도 bootmini.elf는 **작동하지 않습니다.** 그 목적은 전혀 다르고 관련이 없습니다. 모든 경우에 boot.elf를 사용하세요.)

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. 플래시 드라이브를 콘솔에 다시 연결합니다.
   - Wii 미니의 USB 포트는 뒷면에 있습니다.
   - 일반 Wii의 경우, 아래쪽 포트 (또는 Wii가 세워져 있는 경우 오른쪽 포트)를 사용하세요.

3. 콘솔 전원을 켜세요.

4. `Wii 설정`으로 갑니다.

5. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고하세요.

   - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

   ![](/images/wii/SystemMenuVersion.png)

6. 콘솔 전원을 끄세요.

7. 리눅스 배포판을 시작하고 인터넷에 연결되어 있는지 확인합니다.

8. 터미널을 열고 다음 명령을 실행합니다:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

9. 그러면 도우미가 필요한 파일을 다운로드하고 콘솔에 대한 정보를 요청합니다.

   ![](/images/exploits/bluebomb/console-type.png)

   - Wii 미니를 선택했다면 지역을 입력하라는 메시지가 표시됩니다. 이는 Wii 메뉴 버전의 마지막 문자로 확인할 수 있습니다. (`U`는 **USA** 모델, `E`는 **PAL** 모델)

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - Wii를 선택한 경우 Wii 메뉴 버전을 제공하라는 메시지가 표시됩니다. (4 단계에서 결정한 버전)

   ![](/images/exploits/bluebomb/wii-options.png)

10. 콘솔 전원을 켜세요.
    - Wii 리모컨을 **연결하지 마세요.**

11. 아직 진행하지 않았다면 스크립트에 `yes`를 입력하여 계속 진행하고, `Waiting to accept`이 표시되는지 확인합니다.

12. 터미널에 \`got connection handle'라는 메시지가 표시될 때까지 동기화 버튼을 반복해서 누릅니다.

    - 이를 위해서는 여러 번의 시도가 필요할 수 있습니다.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. 익스플로잇이 성공적이면 아래와 비슷한 화면이 나타나고 그 후에 HackMii 설치 프로그램이 로드됩니다.

    - 나중에 다시 사용할 계획이 없다면 지금 리눅스 배포판을 종료해도 됩니다.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

[Hackmii 설치 프로그램으로 계속 진행](hbc)

:::

::::

:::: tabs BlueBomb 마이크로

## BlueBomb 마이크로

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

### 요구 사항

- BR/EDR (클래식)을 지원하는 라즈베리 파이 피코 W 1/2 또는 ESP32입니다.
- [FAT32/MS-DOS 형식으로 포맷된](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) USB 플래시 드라이브
- [HackMii 설치 프로그램](https://bootmii.org/download/)

::: info

일반적인 라즈베리 파이 피코는 작동하지 않습니다. 반드시 무선 모델이어야 합니다. 또한 BLE 컨트롤러만 있는 ESP32는 작동하지 않습니다.

:::

### 지침

1. hackmii_installer_v1.2 `.zip`에서 `boot.elf`를 플래시 드라이브의 루트에 복사합니다.

   - (벽돌 현상을 해결하려는 경우, 사용하려는 홈브류 앱을 /apps/ 폴더에 복사해야 함)
   - (Wii 미니의 경우에도 bootmini.elf는 **작동하지 않습니다.** 그 목적은 전혀 다르고 관련이 없습니다. 모든 경우에 boot.elf를 사용하세요.)

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. 플래시 드라이브를 콘솔에 다시 연결합니다.
   - Wii 미니의 USB 포트는 뒷면에 있습니다.
   - 일반 Wii의 경우, 아래쪽 포트 (또는 Wii가 세워져 있는 경우 오른쪽 포트)를 사용하세요.

3. 콘솔 전원을 켜세요.

4. `Wii 설정`으로 갑니다.

5. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고합니다.

   - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

   ![](/images/wii/SystemMenuVersion.png)

6. 콘솔 전원을 끄세요.

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
2. 콘솔 전원을 켜세요.
   - Wii 리모컨을 **연결하지 마세요.**
3. 피코 W LED가 빠르게 깜빡일 때까지 동기화 버튼을 반복해서 누르면 익스플로잇 업로드가 시작됩니다.
   - 이를 위해서는 여러 번의 시도가 필요할 수 있습니다.
4. 익스플로잇이 성공적이면 아래와 비슷한 화면이 나타나고 그 후에 HackMii 설치 프로그램이 로드됩니다.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

`Exception 0700 occurred!` 또는 이와 유사한 오류가 발생하면 익스플로잇을 다시 시도하세요. 이런 문제가 지속되면 지원을 위해 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요.

:::

::: tip

[Hackmii 설치 프로그램으로 계속 진행](hbc)

:::

::::

:::::
