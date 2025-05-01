---
outline: false
---

# cIOS

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## 요구 사항

- A Wii with the Homebrew Channel installed
- SD 카드 및 USB 드라이브
- The [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## 지침

### 섹션 I - 다운로드

::: info

맥OS 또는 리눅스를 사용 중이라면 [이 스크립트](/assets/files/d2x_offline_ios.zip)를 다운로드하여 실행하면 WAD 파일이 다운로드됩니다.

:::

::: info

Wii를 인터넷에 연결할 수 있다면 [섹션 II](cios#section-ii---installing)로 건너뛸 수 있습니다.

:::

1. 콘솔의 전원을 끕니다.
2. Extract both apps to the root of your SD card or USB drive.
3. 컴퓨터에서 [NUS 다운로더](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)를 다운로드합니다.
4. NUS 다운로더 `.zip`에 있는 모든 파일을 컴퓨터의 폴더로 복사합니다.
5. `NUS Downloader.exe`를 실행합니다.
6. `데이터베이스` > `IOS` > `IOS38`로 이동한 다음 `v4123`을 선택합니다.
    - "Pack WAD"가 선택되어 있는지 확인합니다.
    - "IOS 패치"를 _체크하지 마세요._ 이것이 바로 cIOS 설치 프로그램의 역할입니다.
7. `NUS 다운로드 시작!`을 클릭합니다.
8. `IOS56 v5661`, `IOS57 v5918`, `IOS58 v6175`에 대해 위의 단계를 반복합니다.
9. 프로세스가 완료되면 NUS 다운로더와 같은 폴더에 `titles`라는 폴더가 생성됩니다.
10. `titles` 폴더를 열고 다운로드한 4개의 WAD 파일을 찾을 때까지 탐색합니다.
11. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 d2x cIOS 설치 프로그램을 실행합니다.
    - 이 장치는 d2x cIOS 설치 프로그램이 포함된 동일한 장치여야 합니다.

::: info

WAD 파일은 다음과 같이 SD 카드에 있어야 합니다:

![](/images/cios/d2x_offline_ios.png)

:::

### 섹션 II - 설치하기

1. d2x-cios-installer `.zip` 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.

2. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

3. 콘솔의 전원을 켭니다.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. d2x cIOS 설치 프로그램

6. 다음 사항에 맞게 모든 것을 설정합니다:

    ```
    Select cIOS <d2x-v11-beta3>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    ::: info

    If you do not see `d2x-v11-beta3`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    ::: info

    "`(c)IOS detected in slot ### will be overwritten`"라는 경고는 안전하게 무시할 수 있습니다.

    :::

    ::: info

    "`Slot ### already used in batch settings`" 또는 "`cIOS already added in batch with revision ##### and slot ###`"이라는 메시지가 표시되면 `-` 버튼을 눌러 일괄 모드를 비활성화합니다.

    (설치 프로그램을 종료하려는 경우 버튼은 홈 버튼이 아니라 B 버튼입니다.)

    :::

7. `A` 버튼을 누릅니다. 이렇게 하면 슬롯 맵으로 이동합니다:

    ![](/images/cios/d2x_summary.png)

8. `A` 버튼을 다시 누릅니다.

    ![](/images/cios/d2x_installation.png)

9. 설치가 완료되면 슬롯 맵으로 돌아가게 됩니다. 방금 설치된 슬롯이 녹색으로 강조 표시되었는지 확인합니다.

    ![](/images/cios/d2x_log.png)

    ::: info

    If the slot is highlighted red, try to install the cIOS again.

    다운로드 단계 전/중에 오류가 발생하는 경우 (예: `tcp_connect timeout`, `net_gethostbyname failed: ...`), B 버튼을 눌러 종료하고 [섹션 I](#section-i---downloading)부터 계속합니다.

    :::

10. `A` 버튼을 누릅니다. 구성 화면으로 돌아갑니다.

11. 다음 구성으로 이전 5 단계를 반복합니다:

    - cIOS 249 설치

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    - cIOS 250 설치

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    - cIOS 251 설치

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

12. 4 개의 cIOS를 모두 완료한 후 B 버튼을 눌러 홈브류 채널로 돌아갑니다.

::: info

섹션 I에서 WAD 파일 4 개를 다운로드한 경우 이제 SD 카드/USB 드라이브에서 해당 파일을 삭제할 수 있습니다.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

이제 Wii가 적절한 벽돌 방지 기능을 갖추었으므로 Wii에서나 외부에서 모두 접속할 수 있는 홈브류의 신뢰할 수 있는 저장소인 오픈 샵 채널을 설치할 수 있습니다.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

::: warning

vWii에 Wii/Wii 미니 IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- vWii에 홈브류 채널이 설치된 Wii U
- SD 카드 및 USB 드라이브
- The [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## 지침

### 섹션 I - 설치

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

3. 콘솔의 전원을 켭니다.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. d2x cIOS 설치 프로그램

6. 다음 사항에 맞게 모든 것을 설정합니다:

    ```
    Select cIOS <d2x-v11-beta3-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta3-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

7. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

    - cIOS 249 설치

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    - cIOS 250 설치

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    - cIOS 251 설치

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

9. 4 개의 cIOS를 모두 완료한 후 B 버튼을 눌러 홈브류 채널로 돌아갑니다.

::: tip

[Continue to finalizing setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (추천)

:::

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

이 d2x cIOS 설치 프로그램은 원래 DaveBaol이 Wii U의 vWii용으로 개발했으며, 커스텀 cIOS는 Leseratte가 Wii 미니용으로 만들었습니다. 원본 다운로드 페이지는 [여기](https://wii.leseratte10.de/d2xl-cIOS/)에서 찾을 수 있습니다. Leseratte의 깃허브 페이지는 [여기](https://github.com/Leseratte10/d2xl-cios)에서 찾을 수 있습니다. 이 cIOS는 아직 실험 단계이지만 기능에 대한 문제는 보고되지 않았습니다.

:::

::: warning

Wii 미니에 Wii/vWii IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- 홈브류 채널이 설치된 Wii 미니
- USB 드라이브
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## 지침

### 섹션 I - 다운로드

1. 콘솔의 전원을 끕니다.
2. USB 드라이브를 컴퓨터에 연결하세요.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. USB 드라이브를 콘솔에 다시 연결합니다.
5. 콘솔의 전원을 켭니다.
6. Launch the Homebrew Channel, and launch the Load Priiloader app.
7. 홈브류 목록에서 d2xl cIOS Installer를 실행합니다.

### 섹션 II - 설치하기

1. `계속`을 선택합니다.
2. 계속을 누르고, 다음 옵션을 다음과 같이 설정합니다:

    ```
    cIOS 선택 <d2xl-v1-beta2>
    cIOS 기반 선택 <57>
    cIOS 슬롯 선택 <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. 설정이 완료되면 A 버튼을 눌러 설치합니다.
    - 설치가 `TMD 버전 불일치` 오류로 실패할 경우, `cIOS 기반 선택` 옵션 위에서 +제어판의 왼쪽 또는 오른쪽을 눌러 버전 번호가 이전에 시도한 것과 다를 때까지 기다립니다. 숫자 57은 변경되지 않습니다.
4. 성공적으로 완료되면 설치 프로그램을 종료합니다.

::: tip

[Continue to finalizing setup](mini-finalizing-setup)

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::

::::

:::::
