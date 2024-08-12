---
title: "닌텐도 DS Wi-Fi 설정으로 이동합니 온라인에서 플레이하려는 게임 내에서 접속할 수 있습니다."
---

{% include toc title="목차" %}

[Wiimmfi](https://wiimmfi.de)는 현재 사용되지 않는 닌텐도 Wi-Fi 연결을 대체하는 서비스입니다. Wiimm과 Leseratte가 개발했습니다. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. Wiimmfi에 연결하는 방법에는 여러 가지가 있습니다. 사용 목적에 가장 적합한 것을 선택합니다.

Wiimmfi에 연결하는 동안 오류 23904가 발생하면 오래된 패치를 사용하고 있는 것입니다.<br> 아래 단계에 따라 사용 중인 Wiimmfi에 다시 연결하세요.<br> 자세한 내용은 [이 페이지](https://wiimmfi.de/update)를 참조하세요.<br>
{: .notice--warning}

### Priiloader를 사용하여 디스크 채널에서 자동 패치 적용

If you see the hack `Wiimmfi patch v2` or `Wiimmfi patch v3` instead, then you do not have the latest version of the hacks_hash.ini file, and you need to [re-install Priiloader](priiloader). You must reinstall Priiloader, the guide to which can be found in the requirements section.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

#### 필요한 것
+ A Wii with an internet connection, on System Menu version 4.3
+ [Priiloader](priiloader) 0.9 or later

#### 진행 방법

1. Hold the RESET button while turning on your Wii. Wii 미니를 사용하는 경우 USB 키보드를 연결하고 전원을 켠 상태에서 Escape 키를 길게 누릅니다.
1. Priiloader 메뉴가 보일 것입니다.

    ![](/images/priiloader/mainmenu.jpg)

1. `System Menu Hacks`으로 이동합니다. USB 드라이브를 사용하여 Priiloader를 설치하는 경우, SD 카드가 동시에 연결되어 있지 않은지 확인합니다. 이로 인해 Priiloader가 hacks_hash.ini 파일을 찾을 수 없게 됩니다.
    {: .notice--info}
1. `Wiimmfi 패치 v4` 해킹이 활성화되어 있는지 확인합니다.

    ![](/images/priiloader/hacks.jpg)

1. `설정 변경`으로 이동합니다.
1. Return to the main menu, and press `System Menu` to return to the Wii Menu.
1. MrBean35000vr (마리오 카트 Wii 콘텐츠 팩인 CTGP-R 제작자) 은 Wiimmfi 사용을 위해 디스크를 삽입하고 게임을 즉석에서 패치할 수 있는 Wiimmfi 디스크 패치 관리자를 만들었지만, 디스크를 시작할 때마다 이 패치 관리자를 실행해야 합니다.

### Automatic patching using a USB Loader

If you are already using USB Loader GX, try updating it to the most recent version. Then, there should be a "private server" setting (both in the global loader options and in the game options) which you can set to "Wiimmfi" to make the USB Loader automatically patch every game you start to work with Wiimmfi.

#### 필요한 것

+ Mario Kart Wii Competitions
+ [Wii에 SD 카드 또는 USB 드라이브를 연결합니다.](wii-loaders)

#### 진행 방법

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
1. `Wii 본체 설정`으로 이동합니다. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. It works on some older games, such as Mario Kart Wii and Super Smash Bros. Brawl, but not every game. Due to the nature of this process, it can be run on Wiis without homebrew.

If you get error 20100 or 20110, that means the game is too new for this method.
{: .notice--warning}

If you're using the Wii U, you will have to run the competitions patcher whenever you want to check for a competition, because WiiConnect24 is not enabled on the Wii U.
{: .notice--warning}

#### 메뉴

+ 인터넷에 연결된 Wii

#### 진행 방법

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Type in `95.217.77.181` as the primary DNS.
1. (Wiimfi 패치가 적용되지 않은) 오리지널 마리오 카트 Wii 게임을 실행합니다.
1. 이제 Wiimmfi 패치가 포함된 상태로 게임이 시작됩니다.

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### 필요한 것

+ SD 카드 및 USB 드라이브
+ [자동 Wiimmfi 패치 관리자](https://oscwii.org/library/app/wiimmfipatcher)

#### 진행 방법

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
1. Wii에 SD 카드를 연결하고 홈브류 채널에서 자동 Wiimmfi 패치 관리자를 실행합니다.
1. 게임 디스크를 삽입합니다 (실행 전이나 후에 삽입해도 상관없습니다).

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### 필요한 것

+ Wii U (vWii)

#### 진행 방법

1. 게임 디스크를 넣습니다.
1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. `DNS 자동 연결` (IP 주소가 아님) 으로 이동해서 `끄기`를 선택하고, `고급 설정`으로 들어갑니다. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. 연결 테스트가 성공했다면, Wii 업데이트를 `아니요`를 눌러 건너뜁니다.
1. `페이지 2`로 이동하고, `인터넷`을 클릭합니다. WC24 및 쇼핑 채널을 사용할 것인지 확인합니다.
1. Wiimmfi 패치 관리자 페이지가 표시되어야 합니다. 그렇지 않은데도 기본 사용권 계약이 계속 표시된다면 라우터가 이 방법과 호환되지 않는 것일 수 있습니다.
1. You can patch WiiWare games in order to play them on Wiimmfi.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### 필요한 것

+ A Wii with an internet connection, running in 60Hz mode
+ 인터넷 채널

#### 진행 방법

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. Wii를 켜는 동안 RESET 버튼을 길게 누릅니다.
1. Open the Internet Channel again and access the favorite you just made.
1. It should be patched with Wiimmfi. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### WiiWare Patching

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### 필요한 것

* SD 카드
* 게임 복사본 (WAD 형식)
* [WiiWare 패치 관리자](https://github.com/RiiConnect24/WiiWare-Patcher/releases) (크로스 플랫폼)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### 진행 방법

1. 최신 버전의 WiiWare 패치 관리자의 .zip 파일을 압축 해제하고 WAD를 그 안에 넣습니다.
1. 사용 중인 OS에 맞는 패치 스크립트를 실행합니다. 일반적으로 윈도우즈의 경우 `.bat`으로, 맥/리눅스의 경우 `.sh`으로 끝납니다. RiiConnect24 패치 관리자를 사용하는 경우, 장치 (Wii, vWii 또는 Dolphin) 를 선택하고 WiiWare 패치 관리자를 선택합니다.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### 필요한 것

+ A Linux/macOS/Windows PC with an internet connection
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [ISO Patching](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### 진행 방법

1. Download the patcher and extract the `.zip` file.
1. Open the extracted folder and copy your Wii game images into it.
    + If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    + If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    + If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
1. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.
{: .notice--success}

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
