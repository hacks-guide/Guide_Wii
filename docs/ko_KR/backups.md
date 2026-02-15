---
outline: false
---

# Managing Wii and GameCube Backups

This guide provides instructions on how to manage your Wii and GameCube backups with TinyWiiBackupManager, in addition to joining PART files when dumping Wii games from a FAT32 device. Important notes about game management on the Wii are listed below.

::: tip

여러 게임을 저장하려면 Wii용 외장 하드 드라이브를 권장합니다. 시중에 판매되는 대부분의 제품은 잘 작동할 것입니다.

:::

::: warning

A flash drive is NOT recommended for usage on the Wii. Reasoning behind this is explained in the [storage FAQ](faq#storage-device-faq).

As an alternative, you may use an SD card, however limitations of the Wii's SD card slot will result in slow read/write speeds. It is generally recommended that you use a USB hard drive or SSD instead.

:::

::: danger

Make sure your device is formatted using FAT32. Do not format it using other file systems such as exFAT, extFS, or WBFS.

You may format it as NTFS, but it will NOT work with the majority of apps (e.g. The Homebrew Channel or Nintendont).

:::

## Joining PART files from a Wii disc on a FAT32 device

If you dumped a Wii disc onto a FAT32 formatted device, you should have gotten at least two files that end with `.partX.iso`, due to filesystem limitations. 파일을 올바르게 읽을 수 있도록 하려면 지원되는 파일 시스템에 결합해야 합니다. (예: NTFS)

:::details 지침

### 윈도우

1. `.partX.iso`로 끝나는 같은 이름을 공유하는 파일을 컴퓨터의 빈 폴더에 복사합니다.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. 이 폴더에서 윈도우 탐색기의 주소창을 클릭하고 `cmd`를 입력하면 명령 프롬프트 창이 열립니다.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. `copy /b *.part?.iso game.iso`를 입력하고 Enter를 누릅니다. 명령이 완료될 때까지 기다립니다. 터미널 출력은 아래와 비슷해야 합니다.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. 복사 과정이 올바르게 실행되면 게임 덤프 정보 파일 (디스크를 덤프한 위치에 있음)의 체크섬이 결합된 결과 파일과 일치해야 합니다.

   ![](/images/desktop-apps/WBM/filemd5.png)

### 맥OS/리눅스

1. `.partX.iso`로 끝나는 같은 이름을 공유하는 파일을 컴퓨터의 빈 폴더에 복사합니다.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Open a terminal in the folder where your files are located, or `cd [PATH]` to it.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. 다음 명령어를 그대로 사용하십시오: \`\`\`\`cat `ls *.part?.iso | sort` > game.iso\`\`\`. 그런 다음 병합 프로세스가 완료될 때까지 기다립니다. 윈도우에서와 마찬가지로 결과 체크섬은 덤프와 일치해야 합니다.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

:::

## Using TinyWiiBackupManager

TinyWiiBackupManager is a new, lightweight game backup manager programmed in Rust that replaces the previously recommended apps in this guide, WiiBackupManager and WiiBackupFusion. Instructions to use this app are sorted by tab for each platform that TWBM can be installed on.

::::: tabs

:::: tab Windows

### Using TWBM on Windows

#### 요구 사항

- A PC running Windows 7 or later
- USB 드라이브 또는 SD 카드
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManagerInstaller](https://github.com/mq1/TinyWiiBackupManagerInstaller/releases/latest/)

#### 지침

##### 섹션 I - 설치

1. Download `TinyWiiBackupManagerInstaller.exe` and run the installer. If you get a Windows SmartScreen message, simply run anyway as this is a false positive.

   ![](/images/desktop-apps/TWBM/twbmi-download.png)

2. Let the installer run, and then launch TinyWiiBackupManager once the process is finished.

   ![](/images/desktop-apps/TWBM/twbmi-install.png)

##### 섹션 II - 게임 복사

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. USB 드라이브 또는 SD 카드를 컴퓨터에 연결하세요.

2. Click the hard drive icon on the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:\`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-win-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::: tab macOS

### Using TWBM on macOS

#### 요구 사항

- A PC running macOS 10.13 or later
- USB 드라이브 또는 SD 카드
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### 지침

##### 섹션 I - 설치

1. Download the universal .DMG binary for macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-download.png)

2. Drag TinyWiiBackupManager to the applications folder.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Run the following command in the Terminal app after installation: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`. This will allow the app to run, as it will otherwise be blocked by macOS security settings.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Launch TinyWiiBackupManager.

##### 섹션 II - 게임 복사

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. USB 드라이브 또는 SD 카드를 컴퓨터에 연결하세요.

2. Click the hard drive icon on the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:\`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-mac-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::: tab Linux

### Using TWBM on Linux

#### 요구 사항

- A PC running Linux that supports AppImage or Flatpak
- USB 드라이브 또는 SD 카드
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### 지침

##### 섹션 I - 설치

TinyWiiBackupManager can be installed from the Flathub repository as a Flatpak, or ran directly from an AppImage file. Instructions for both options are outlined below.

###### Flatpak

1. Ensure that FlatPak is [installed on your system](https://flathub.org/en/setup).

2. Navigate to the [Flathub repository for TWBM](https://flathub.org/en/apps/it.mq1.TinyWiiBackupManager) and press the Install button. If nothing happens, download the `.flatpakref` file and open it to find the program in your distro's app store. If nothing happens again, run `flatpak install flathub it.mq1.TinyWiiBackupManager` in your terminal.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Ensure that TinyWiiBackupManager is installed on your system, and then launch the app.

###### AppImage

1. Download the AppImage binary for your system and architecture. Most users should download `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Ensure that the AppImage binary is executable by running `chmod +x [binary location]`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Launch TinyWiiBackupManager.

##### 섹션 II - 게임 복사

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. USB 드라이브 또는 SD 카드를 컴퓨터에 연결하세요.

2. Click on the Drive icon in the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them. Please note that this feature is not currently available on Wayland.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::::

::: tip

[cIOS로 계속](cios)

In order to play dumped Wii games from your external device, you must have cIOS configured. Once cIOS is configured, you can use [USB Loader GX or WiiFlow](wii-loaders) to play Wii games from your USB drive or SD card.

You can also use [Nintendont](nintendont) to play GameCube games from your USB drive or SD card.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
