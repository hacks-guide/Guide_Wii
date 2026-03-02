# Wii 게임 바로가기 만들기

이 가이드는 WiiGSC (Wii 게임 바로가기 생성기)라는 소프트웨어를 사용하여 외장 저장 장치에 있는 게임 백업에 대한 Wii 게임 바로가기를 만드는 방법을 안내합니다. 게임 바로가기를 만들면 마치 일반 디스크처럼 게임을 넣은 것처럼 Wii 메뉴에서 바로 게임 백업을 실행할 수 있습니다.

:::details Important Information

- 사용하시는 브라우저나 백신 소프트웨어가 WiiGSC를 악성 소프트웨어로 감지할 수 있습니다 - 이는 오탐입니다. WiiGSC는 악성 소프트웨어가 포함되어 있지 않습니다.
- Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

:::

::: danger

**Important Warnings**

- DO NOT continue the guide unless you have installed [Priiloader](priiloader) or [BootMii](bootmii), as this guide carries the risk of causing a [banner brick](bricks#banner-brick) which will prevent the Wii Menu from booting.
- DO NOT create and install a shortcut for the games "Mario Party 9" or "A Boy and His Blob". It will cause a [banner brick](bricks#banner-brick) due to the complexity of the channels making the Wii Menu crash.
- If you get an error saying `The system files are corrupted`, you are likely dealing with a [banner brick](bricks#banner-brick). To fix it, turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager or [YAWM ModMii Edition](yawmme) to uninstall the WAD that caused the error. If Priiloader was not installed, proceed to [BlueBomb](bluebomb) for further resolution.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- Wii
- SD 또는 USB 드라이브
- 윈도우 컴퓨터
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## 지침

### 제1부 - 채널 만들기

1. WiiGSC `.zip` 파일의 압축을 풀고 `WiiGSC.exe` 파일을 찾아 실행하세요. 처음 실행하면 일반적인 키 생성에 대한 안내와 고지 사항이 표시됩니다. 해당 창을 클릭하여 진행하시면 됩니다.

   ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. WiiGSC를 실행한 후 'WBFS 드라이브 열기'를 선택하고 WBFS 파일이 있는 장치의 드라이브 문자를 선택합니다. 또는 개별 ISO/WBFS 파일을 선택할 수도 있습니다.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. 채널을 만들고 싶은 게임을 선택한 다음 '채널 생성에 사용'을 누르세요. 게임을 실행하는 데 사용할 USB 로더를 선택한 다음 왼쪽 하단에 있는 '채널 생성'을 누르세요.

   ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. 출력된 WAD 파일을 SD 카드 또는 홈브루를 로드하는 데 사용하는 다른 장치에 복사하세요.

### 제2부 - 채널 설치

1. WAD 관리자를 열고 출력 WAD 파일을 찾아서 설치하세요.

   ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. 성공적으로 연결되었다면 이제 Wii 메뉴에서 게임 바로가기 아이콘을 볼 수 있을 것입니다!

   ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

---

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
