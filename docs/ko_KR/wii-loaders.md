# Wii 백업 로더

이 가이드에서는 Wii 백업 로더를 소개합니다. 이는 주로 판매용 게임 디스크에서 덤프한 SD나 USB에 게임 백업을 로드하는 데 사용될 수 있습니다. 로더에 따라서는 Wii가 아닌 게임의 프런트엔드로 작동할 수 있는 확장 기능이 있을 수도 있습니다. 가장 일반적으로 사용되는 두 가지 로더는 USB Loader GX와 WiiFlow Lite (원래 WiiFlow의 정기적 업데이트 모드) - 두 가지 로더 중 하나가 다른 하나보다 더 효과적일 수 있으므로 두 가지 모두 사용해 보는 것이 좋습니다.

::: warning

Wii 로더가 제대로 작동하려면 최신 cIOS가 설치되어 있어야 합니다. Wii를 사용하는 경우 [이](cios) 가이드에서 지침을 확인하고, Wii 미니를 사용하는 경우 [이](cios-mini) 가이드에서 지침을 확인합니다.

:::

::: info

게임을 하려면 대용량 SD 카드나 외장 하드 드라이브를 사용하는 것이 좋습니다. 플래시 드라이브는 권장하지 않으며 기능도 매우 드뭅니다. [스토리지 FAQ](faq)를 참조합니다.

:::

::: info

WiiFlow Lite용 공식 Wii 메뉴 포워더 설치 프로그램은 [오픈 샵 채널](https://oscwii.org/library/app/wiiflow_channel_installer)에서 찾을 수 있습니다. The official Wii Menu forwarder installer for WiiFlow Lite can be found on the <a href="https://oscwii.org/library/app/wiiflow_channel_installer">Open Shop Channel</a>. USB Loader GX 공식 포워더는 [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad) 페이지에서 찾을 수 있습니다. [YAWM ModMii Edition](yawmme)으로 설치할 수 있습니다.

:::

## WiiFlow Lite와 USB Loader GX의 차이점

- WiiFlow Lite는 애니메이션과 효과 측면에서 더욱 진보된 사용자 인터페이스를 제공하며 테마도 지원합니다.

  - WiiFlow Lite에서 Wii 게임을 로딩하려면 SD 카드가 완벽히 지원됩니다.
  - WiiFlow Lite에는 플러그인 시스템이 있습니다.
  - 원래 WiiFlow는 2014년에 마지막으로 업데이트되었지만, WiiFlow Lite 포크는 여전히 정기적인 업데이트를 받고 있습니다.

  ![](/images/usb-loaders/wiiflow-ui.png)

- USB Loader GX는 주로 Wii 메뉴를 모델로 하여 만들어졌으며 테마를 지원합니다.

  - 이전에는 USB Loader GX에서 Wii 게임을 로딩할 때 SD 카드가 지원되지 않았지만, 최근 업데이트를 통해 로더에서 해당 지원이 추가되었습니다.
  - USB Loader GX에는 플러그인 시스템이 없습니다.
  - USB Loader GX는 정기적으로 업데이트를 받습니다.

  ![](/images/usb-loaders/usbloadergx-ui.png)

## 게임 디렉토리 구조

아래는 단일 WBFS의 예와 분할된 WBFS의 예입니다. WBFS가 4GB를 넘고 저장 장치가 FAT32로 포맷된 경우 WBFS를 분할해야 합니다. [Wii 백업 매니저](wii-backups#using-wii-backup-manager) 또는 [Wii 백업 퓨전](wii-backups#using-wii-backup-fusion)과 같은 소프트웨어를 사용하면 이 작업을 대신 수행할 수 있으며, 게임 디렉토리 구조를 자동으로 올바르게 설정합니다.

```
💾SD 카드 또는 USB:
 ┗ 📂wbfs
    ┣ 📂게임이름 [게임ID]
    ┃  ┗ 📜gameid.wbfs (분할되지 않은 타이틀의 경우)
    ┗ 📂게임이름 [게임ID]
       ┣ 📜gameid.wbfs
       ┗ 📜gameid.wbf1
```

## RiiConnect24 테마 페이지

### 요구 사항

- 개조된 Wii
- [cIOS](cios)의 최신 버전
- [WiiFlow](https://oscwii.org/library/app/wiiflow)

### 설치

1. WiiFlow를 다운로드하여 SD 카드나 USB 장치에 설치합니다.

### 빠른 시작 가이드

#### 일반 사항

- WiiFlow는 기본적으로 SD 카드에 있는 게임만 찾도록 설정되어 있습니다. `설정 > 시작 설정`으로 가서 `SD만 마운트`를 끄면 이를 변경할 수 있습니다.
- WiiFlow의 현재 보기를 플러그인, 게임, 홈브류, Wii 채널 간에 전환하려면 오른쪽 하단의 `홈` 왼쪽에 있는 버튼을 클릭합니다.
- `설정` > `커버 및 배너 다운로드`로 가면 게임 커버를 다운로드할 수 있습니다.

#### 사용자 인터페이스

WiiFlow가 게임을 감지하면 플로우 뷰에 표시됩니다.

게임을 클릭하면 다음과 같은 옵션이 제공됩니다:

- 별 - 게임을 즐겨찾기에 추가합니다.
- 책꽂이 - 게임을 선택한 6가지 카테고리 중 하나에 추가합니다.
- 기어 - 해당 게임의 설정 메뉴를 엽니다. 이러한 설정은 해당 게임에만 고유합니다.
- X - USB 드라이브나 SD 카드에서 게임을 삭제합니다.

플로우 보기에서 커서를 화면 하단으로 가져가면 6개의 아이콘이 있습니다.

- 책꽂이 - 선택한 카테고리에 따라 정렬된 게임을 확인합니다.
- 별 - 즐겨찾는 게임을 확인합니다.
- 기어 - WiiFlow 설정을 엽니다.
- 게임 유형 - 다양한 유형의 앱/게임을 전환합니다. The logo changes depending on what game type you have selected.
- Disc - Loads a game that is in the disc drive.
- House - Opens the menu below. The menu can also be launched by pressing the home button.

![](/images/usb-loaders/wiiflow-menu.png)

- Help Guide - Shows all the controls you can use in WiiFlow.
- Reload Cache - Press this to allow WiiFlow to rescan for games on the USB device or SD card.
- File Explorer - Allows you to explore the directory listing on your USB device or SD card and select an individual game or executable.
- Select Plugins - Allows you to select plugins.
- Credits - Shows the people who worked on WiiFlow.
- Shutdown - Allows you to go into full shutdown or standby mode.
- Exit To - Lets you exit to Wii Menu, Homebrew Channel, neek2o, Priiloader, or Bootmii.
- Settings - Opens the global WiiFlow settings menu.

## USB Loader GX

### Requirements

- Wii
- [cIOS](cios)의 최신 버전
- [USB Loader GX](https://github.com/wiidev/usbloadergx/releases)

### Installation

1. Ensure that your Wii already has cIOS 248-251 installed - this can be checked with applications like [SysChecker](syscheck) or d2x cIOS installer.
2. Download USB Loader GX and install it on your SD Card or USB device.

### 빠른 시작 가이드

#### 일반 사항

- If USB Loader GX says "Waiting for HDD..." with a 20 second countdown, it is very likely that it cannot detect your USB device. Try to exit out of the app, ensure your USB device is plugged into the bottom port if Wii is placed horizontally, or the port closest to the edge when the Wii is placed vertically. It may also be formatted incorrectly. Ensure that your USB drive is formatted to FAT32, with the MBR partition table, and 32kb (32768 bytes) allocation unit size/cluster size.
- You can press the 1 Button on your Wii Remote to open up a dialog to download game covers and artwork from [GameTDB](https://gametdb.com/). It might take a while to download the game covers and artwork, depending the amount of games you have.
- GameCube or "custom" Wii games may or may not have a custom banner that USB Loader GX uses. To enable this, find or write `CustomBannersURL = http://banner.rc24.xyz/` in `config/GXGlobal.cfg` on the drive you installed the app on. Then, you can use the `Custom Banner` download by pressing the 1 Button on your Wii Remote.

#### 사용자 인터페이스

On the middle of the bottom of the screen, you can see how much space is free on your USB drive and how many games you have.

These are the functions of the buttons found on the bar at the top of the screen, from left to right:

- Star - Shows games that you have marked as "favorites".
- Search - Lets you search for games by name.
- Sort - Cycles through sorting methods for games.
- Platform - Sorts games by platform.
- Category - Sorts games by category.
- List - Shows games in a list view.
- Multi-Cover View - Shows games in a multi-cover view.
- Cover Carousel View - Shows games in a carousel view.
- Wii Menu View - Shows games in a Wii Menu view.
- Parental Control - Locks USB Loader GX.
- Disc - Loads a game that is in the disc drive.

There are also other buttons at the bottom of the screen:

- (+) Icon - "Install" a game, i.e. loading it from disc and dumping it to your preset storage device.
- Gears - Global settings for USB Loader GX.
- SD card - Remount the SD card.
- Homebrew - Load homebrew apps.
- Wii - Open the HOME Menu.
- Power Button - Turn off your Wii.

## Troubleshooting

Some games require using a specific cIOS to function, or to utilize certain features within the game.
예를 들면 다음과 같습니다:

- 타운으로 놀러가요 동물의 숲에서 키보드를 사용합니다.
- 스펀지 밥의 보팅 배쉬를 실행합니다.
- 락 밴드에서 USB 동글 사용합니다.

A more comprehensive (although still incomplete) list can be found [here](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Both USB Loader GX and WiiFlow Lite are programmed to automatically find the best cIOS to use and load the game with it using the default settings.  However, if for whatever reason these loaders pick the wrong cios to use, you have the option to change it yourself.

To change the cIOS used for a specific game, follow the instructions specific to your USB loader:

### USB Loader GX

1. Select the game that isn't working.
2. Click Settings.
3. Select `Game Load`.
4. Scroll down to `Game IOS`.
5. Enter the IOS slot to use.
   - Try using 248, 249, 250 or 251.
6. Press OK and try to load the game.

### RiiConnect24 테마 페이지

1. Select the game that isn't working.
2. Click the gear icon.
3. Go to cIOS and use the arrows to select the IOS slot to use.
   - Try using 248, 249, 250 or 251.
4. Press Save and try to load the game.

::: tip

[여기를 눌러 사이트 탐색으로 돌아갑니다](site-navigation)

:::
