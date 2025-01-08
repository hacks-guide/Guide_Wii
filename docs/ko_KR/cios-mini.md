# Wii 미니를 위한 d2xl cIOS (실험 단계)

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (권장)

:::

:::details 기술 세부사항 (선택 사항)

이 d2x cIOS 설치 프로그램은 원래 DaveBaol이 Wii U의 vWii용으로 개발했으며, 커스텀 cIOS는 Leseratte가 Wii 미니용으로 만들었습니다. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). 이 cIOS는 아직 실험 단계이지만 기능에 대한 문제는 보고되지 않았습니다.

:::

::: warning

This guide is only intended for Wii Mini users.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- 홈브류 채널이 설치된 Wii 미니
- USB 드라이브
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## Instructions

### 섹션 I - 다운로드

1. Power off your console.
2. USB 드라이브를 컴퓨터에 연결하세요.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reinsert your USB drive into your console.
6. Power on your console.
7. Launch the Homebrew Channel, and launch the Load Priiloader app.
8. d2x cIOS 설치 프로그램

### 섹션 II - 설치하기

1. Select `Continue`.
2. 계속을 누르고, 다음 옵션을 다음과 같이 설정합니다:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. 설정이 완료되면 A 버튼을 눌러 설치합니다.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. 숫자 57은 변경되지 않습니다.
4. 성공적으로 완료되면 설치 프로그램을 종료합니다.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### 이더넷 활성화

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Wii 및 Wii 미니 콘솔은 AX88772 칩을 사용하는 이더넷 어댑터에서만 작동하는 것으로 알려져 있습니다. 구매하기 전에 제품이 호환되는지 확인하세요. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[여기를 눌러 사이트 탐색으로 돌아갑니다](site-navigation)

:::
