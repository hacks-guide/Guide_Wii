# HackMii 설치 프로그램 다시 시작하기

이 가이드는 홈브류 채널이나 BootMii를 업데이트/재설치하기 위해 HackMii 설치 프로그램을 다시 시작해야 하는 상황을 위해 작성되었습니다.

::: info

HackMii 설치 프로그램을 다시 시작하려면 [모든 익스플로잇을 다시 실행](get-started)하는 것도 안전합니다.

:::

## 홈브류 채널을 통해 다시 시작하기

### 요구 사항

- 홈브류 채널
- FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
- [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

### 지침

1. SD/USB를 PC에 연결합니다.
2. HackMii 설치 프로그램 v1.2를 SD/USB의 `apps` 폴더에 압축 해제합니다.
    - 이 폴더가 없는 경우 생성합니다.
3. SD/USB를 Wii에 연결하고 홈브류 채널에서 `hackmii_installer_v1.2` 앱을 실행합니다.
    - 앱에 아이콘이 표시되지 않습니다.

::: tip

[홈브류 채널 및 BootMii 설치 계속하기](hbc)

:::

## Priiloader를 통한 재실행

### 요구 사항

- Priiloader (또는 Priiloader) 가 설치된 Wii
- FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
- [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

::: info

Wii에 Priiloader가 있는지 확인하려면 전원을 켠 상태에서 RESET 버튼을 길게 누릅니다.

:::

::: warning

Preloader 및 이전 버전의 Priiloader는 SDHC (>2GB) 카드를 지원하지 않는 것으로 보입니다.

:::

### 지침

1. SD/USB를 PC에 연결합니다.
2. HackMii 설치 프로그램 v1.2 `.zip` 내부의 `boot.elf` 파일을 SD 카드나 USB 드라이브의 루트에 복사합니다.
3. Wii에 SD/USB를 연결합니다.
4. Wii를 켜는 동안 RESET 버튼을 길게 눌러 Priiloader로 들어갑니다.
5. `파일 로드/설치`로 갑니다.
6. `boot.elf`로 이동한 후 `1` 버튼을 눌러 로드합니다.

::: info

약 30 초 후에도 `계속하려면 (1) 버튼을 누르세요`라는 메시지가 나타나지 않으면 [HackMii 설치 프로그램 v1.0](https://bootmii.org/download/)을 다운로드하면 도움이 될 수 있습니다.

:::

::: tip

[홈브류 채널 및 BootMii 설치 계속하기](hbc)

:::
