# Wii 게임 바로가기 만들기

Wii 백업 로더를 사용하고 Wii ​​메뉴에서 게임을 실행하기 위한 바로가기를 만들고 싶습니까? 그렇다면 기존에 Crap이라고 알려진 WiiGSC (Wii 게임 바로가기 생성기) 를 시도하세요.

::: warning

벽돌의 경우, [Priiloader 설치는 필수](/priiloader)입니다. 또한, BootMii를 설치합니다 (초기 Wii를 사용하는 경우 Boot2). 벽돌 보호 장치를 설치하고 가이드를 올바르게 따르면 벽돌로부터 안전하게 보호할 수 있습니다. BOOTMII와 PRIILOADER를 설치하지 않고 계속하지 마십시오!!

:::

::: warning

"마리오 파티 9" 또는 "A Boy and His Blob" 게임에 대한 바로 가기를 만들지 마세요. Wii가 벽돌이 됩니다.

:::

::: info

Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- Wii
- SD 또는 USB 드라이브
- [YAWM ModMii Edition](yawmme)
- 윈도우 컴퓨터
- [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

## 지침

1. WiiGSC를 설치한 다음 마우스 오른쪽 버튼을 클릭하고 **관리자 권한으로 실행**을 선택합니다. 이 작업을 하지 않으면 WiiGSC를 열 때 오류가 발생합니다.

   ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. SD 또는 USB 드라이브에 있는 ISO 또는 WBFS 파일의 경로를 선택하고, 사용하는 로더를 선택합니다. 다른 옵션은 지금 그대로면 괜찮을 겁니다.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

   ::: info

   vWii를 사용하고 있다면 [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) 도구를 사용하여 WAD를 vWii에서 사용할 수 있도록 변환합니다.

   :::

3. 생성된 WAD를 [WAD manager](yawmme)로 설치하세요.

::: info

"The system files are corrupted"라는 오류가 표시되더라도 Priiloader를 설치했다면 당황하지 않습니다. Wii를 끄고, 콘솔에 사용 가능한 방법 중 하나를 사용하여 [Priiloader로 부팅](priiloader#section-iii---entering-priiloader)하세요. 홈브류 채널에 들어가서 WAD manager를 실행하여 WAD를 제거합니다. priiloader가 설치되지 않았다면 [BlueBomb](bluebomb)로 진행하세요.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
