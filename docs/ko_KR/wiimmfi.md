# 닌텐도 DS Wi-Fi 설정으로 이동합니 온라인에서 플레이하려는 게임 내에서 접속할 수 있습니다.

<a href="https://wiimmfi.de">Wiimmfi</a>는 현재 사용되지 않는 닌텐도 Wi-Fi 연결을 대체하는 서비스입니다. Wiimm과 Leseratte가 개발했습니다. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. Wiimmfi에 연결하는 방법에는 여러 가지가 있습니다. 사용 목적에 가장 적합한 것을 선택합니다.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Priiloader를 사용하여 디스크 채널에서 자동 패치 적용

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. You must reinstall Priiloader, the guide to which can be found in the requirements section.

:::

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

### 필요한 것

- A Wii with an internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 or later

### 진행 방법

1. Hold the RESET button while turning on your Wii. Wii 미니를 사용하는 경우 USB 키보드를 연결하고 전원을 켠 상태에서 Escape 키를 길게 누릅니다.

2. Priiloader 메뉴가 보일 것입니다.

   ![](/images/priiloader/mainmenu.jpg)

3. Go to `System Menu Hacks`.

   ::: info

   USB 드라이브를 사용하여 Priiloader를 설치하는 경우, SD 카드가 동시에 연결되어 있지 않은지 확인합니다.
   이로 인해 Priiloader가 hacks_hash.ini 파일을 찾을 수 없게 됩니다.

   :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

   ![](/images/priiloader/hacks.jpg)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. MrBean35000vr (마리오 카트 Wii 콘텐츠 팩인 CTGP-R 제작자) 은 Wiimmfi 사용을 위해 디스크를 삽입하고 게임을 즉석에서 패치할 수 있는 Wiimmfi 디스크 패치 관리자를 만들었지만, 디스크를 시작할 때마다 이 패치 관리자를 실행해야 합니다.

## Automatic patching using a USB Loader

If you are already using USB Loader GX, try updating it to the most recent version. Then, there should be a "private server" setting (both in the global loader options and in the game options) which you can set to "Wiimmfi" to make the USB Loader automatically patch every game you start to work with Wiimmfi.

### 필요한 것

- Mario Kart Wii Competitions
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### 진행 방법

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

## Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. It works on some older games, such as Mario Kart Wii and Super Smash Bros. Brawl, but not every game. Due to the nature of this process, it can be run on Wiis without homebrew.

::: warning

If you get error 20100 or 20110, that means the game is too new for this method.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### 필요한 것

- Mario Kart Wii Competitions

### 진행 방법

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. (Wiimfi 패치가 적용되지 않은) 오리지널 마리오 카트 Wii 게임을 실행합니다.
3. MrBean35000vr (마리오 카트 Wii 콘텐츠 팩인 CTGP-R 제작자) 은 Wiimmfi 사용을 위해 디스크를 삽입하고 게임을 즉석에서 패치할 수 있는 Wiimmfi 디스크 패치 관리자를 만들었지만, 디스크를 시작할 때마다 이 패치 관리자를 실행해야 합니다.

## Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

### 필요한 것

- SD 카드 및 USB 드라이브
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### 진행 방법

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Wii에 SD 카드를 연결하고 홈브류 채널에서 자동 Wiimmfi 패치 관리자를 실행합니다.
3. 게임 디스크를 삽입합니다 (실행 전이나 후에 삽입해도 상관없습니다).

## Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### 필요한 것

- Mario Kart Wii Competitions

### 진행 방법

1. 게임 디스크를 넣습니다.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. (Wiimfi 패치가 적용되지 않은) 오리지널 마리오 카트 Wii 게임을 실행합니다.

4. Go back twice to `Internet`, and press `User Agreements`. WC24 및 쇼핑 채널을 사용할 것인지 확인합니다.

5. Wiimmfi 패치 관리자 페이지가 표시되어야 합니다. 그렇지 않은데도 기본 사용권 계약이 계속 표시된다면 라우터가 이 방법과 호환되지 않는 것일 수 있습니다.

6. You can patch WiiWare games in order to play them on Wiimmfi.

## Manual Disc Patching via Internet Channel

::: warning

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### 필요한 것

- A Wii with an internet connection, running in 60Hz mode
- 인터넷 채널

### 진행 방법

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Wii를 켜는 동안 RESET 버튼을 길게 누릅니다.
4. Open the Internet Channel again and access the favorite you just made.
5. It should be patched with Wiimmfi. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## WiiWare Patching

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

### 필요한 것

- SD 카드
- 게임 복사본 (WAD 형식)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### 진행 방법

1. 최신 버전의 WiiWare 패치 관리자의 .zip 파일을 압축 해제하고 WAD를 그 안에 넣습니다.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. RiiConnect24 패치 관리자를 사용하는 경우, 장치 (Wii, vWii 또는 Dolphin) 를 선택하고 WiiWare 패치 관리자를 선택합니다.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

### 필요한 것

- A Linux/macOS/Windows PC with an internet connection
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### 진행 방법

1. Download the patcher and extract the `.zip` file.
2. Open the extracted folder and copy your Wii game images into it.
   - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
   - If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
