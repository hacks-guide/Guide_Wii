# Wii 게임 바로가기 만들기

이 가이드는 WiiGSC (Wii 게임 바로가기 생성기)라는 소프트웨어를 사용하여 외장 저장 장치에 있는 게임 백업에 대한 Wii 게임 바로가기를 만드는 방법을 안내합니다. 게임 바로가기를 만들면 마치 일반 디스크처럼 게임을 넣은 것처럼 Wii 메뉴에서 바로 게임 백업을 실행할 수 있습니다.

::: warning

이 가이드에서는 벽돌 현상 발생 위험을 줄이기 위해 [Priiloader](priiloader)와 [BootMii](bootmii) 설치를 권장합니다. 가이드를 정확하게 따르면 안전하게 게임을 진행할 수 있습니다. Priiloader 또는 BootMii를 설치하지 않은 경우 이 가이드를 계속 진행하지 마십시오!

:::

::: warning

"마리오 파티 9" 또는 "A Boy and His Blob" 게임에 대한 바로 가기를 만들지 마세요. Wii가 벽돌이 됩니다.

:::

::: warning

사용하시는 브라우저나 백신 소프트웨어가 WiiGSC를 악성 소프트웨어로 감지할 수 있습니다 - 이는 오탐입니다. WiiGSC는 악성 소프트웨어가 포함되어 있지 않습니다.

:::

::: info

Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

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

::: info

"The system files are corrupted"라는 오류가 표시되더라도 Priiloader를 설치했다면 당황하지 않습니다. Wii를 끄고, 콘솔에 사용 가능한 방법 중 하나를 사용하여 [Priiloader로 부팅](priiloader#section-iii---entering-priiloader)하세요. 홈브류 채널에 들어가서 WAD manager를 실행하여 WAD를 제거합니다. priiloader가 설치되지 않았다면 [BlueBomb](bluebomb)로 진행하세요.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
