# Wii 미니를 위한 d2xl cIOS (실험 단계)

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (추천)

:::

:::details 기술 세부사항 (선택 사항)

이 d2x cIOS 설치 프로그램은 원래 DaveBaol이 Wii U의 vWii용으로 개발했으며, 커스텀 cIOS는 Leseratte가 Wii 미니용으로 만들었습니다. 원본 다운로드 페이지는 [여기](https://wii.leseratte10.de/d2xl-cIOS/)에서 찾을 수 있습니다. Leseratte의 깃허브 페이지는 [여기](https://github.com/Leseratte10/d2xl-cios)에서 찾을 수 있습니다. 이 cIOS는 아직 실험 단계이지만 기능에 대한 문제는 보고되지 않았습니다.

:::

::: warning

이 가이드는 Wii 미니사용자를 대상으로 합니다.

Wii가 있다면 대신 [이 가이드](cios)를 따릅니다.

Wii U (vWii)가 있는 경우 대신 [이 가이드](cios-vwii)를 따릅니다.

:::

::: warning

Wii 미니에 Wii/vWii IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## 요구 사항

- 홈브류 채널이 설치된 Wii 미니
- USB 드라이브
- Leseratte의 [d2xl cIOS 설치 프로그램](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## 지침

### 섹션 I - 다운로드

1. 콘솔의 전원을 끕니다.
2. USB 드라이브를 컴퓨터에 연결하세요.
3. USB 드라이브의 루트에 `apps`라는 이름의 폴더가 없다면 새로 만듭니다.
4. d2xl cIOS Installer `.zip`에서 `d2x-cios-installer` 폴더를 USB 드라이브의 `apps` 폴더로 복사합니다.
5. USB 드라이브를 콘솔에 다시 연결합니다.
6. 콘솔의 전원을 켭니다.
7. Launch the Homebrew Channel, and launch the Load Priiloader app.
8. 홈브류 목록에서 d2xl cIOS Installer를 실행합니다.

### 섹션 II - 설치하기

1. `계속하기`을 선택합니다.
2. 계속을 누르고, 다음 옵션을 다음과 같이 설정합니다:
   ```
   cIOS 선택 <d2xl-v1-beta2>
   cIOS 기반 선택 <57>
   cIOS 슬롯 선택 <249>
   ```
   - 메모 아래에 있는 버전 번호를 기록해 둡니다 (`IOS57-64-`는 `v31776` 또는 `v31775`로 끝납니다)
3. 설정이 완료되면 A 버튼을 눌러 설치합니다.
   - 설치가 `TMD 버전 불일치` 오류로 실패할 경우, `cIOS 기반 선택` 옵션 위에서 +제어판의 왼쪽 또는 오른쪽을 눌러 버전 번호가 이전에 시도한 것과 다를 때까지 기다립니다. 숫자 57은 변경되지 않습니다.
4. 성공적으로 완료되면 설치 프로그램을 종료합니다.

::: tip

[Real Wand를 이용한 낸드 백업 제작 계속하기](and-mini)

:::

### 이더넷 활성화

Wii 미니에서 이더넷을 통해 Wiimmfi를 사용하려면 Fullmetal5가 만든 [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) 앱을 실행해야 합니다. 실행하려면 USB 드라이브의 `apps` 폴더에 압축을 풀고 홈브류 채널에서 실행하면 됩니다.

::: info

Wii 및 Wii 미니 콘솔은 AX88772 칩을 사용하는 이더넷 어댑터에서만 작동하는 것으로 알려져 있습니다. 구매하기 전에 제품이 호환되는지 확인하세요. UGREEN의 이 제품은 호환되는 것으로 알려져 있습니다: [아마존 유럽](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
