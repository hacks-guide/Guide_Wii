# HackMii 설치 프로그램 다시 시작하기

이 가이드는 홈브류 채널 또는 BootMii를 업데이트/재설치하기 위해 HackMii 설치 프로그램을 다시 실행해야 하는 상황을 위한 것입니다.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## 홈브류 채널을 통해 다시 시작하기

### 메뉴

- 홈브류 채널
- FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
- [HackMii Installer v1.2](https://bootmii.org/download/)

### 진행 방법

1. SD/USB를 PC에 연결합니다.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - 이 폴더가 없는 경우 생성합니다.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - 앱에 아이콘이 표시되지 않습니다.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## Priiloader를 통한 재실행

### 메뉴

- Priiloader (또는 Priiloader) 가 설치된 Wii
- FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Wii에 Priiloader가 있는지 확인하려면 전원을 켠 상태에서 RESET 버튼을 길게 누릅니다.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### 진행 방법

1. SD/USB를 PC에 연결합니다.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Wii에 SD/USB를 연결합니다.
4. Wii를 켜는 동안 RESET 버튼을 길게 눌러 Priiloader로 들어갑니다.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
