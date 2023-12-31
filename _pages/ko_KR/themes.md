---
title: "Wii 메뉴 테마 설치하기"
---

{% include toc title="목차" %}

Priiloader 메뉴로 부팅하면 Wii 메뉴를 수정할 수 있는 몇 가지 옵션이 있습니다. 옵션 중 하나는 홈브류 채널을 실행하는 것인데, 여기서 MyMenuify Mod를 실행하고 버튼을 눌러 오리지널 Wii 메뉴 테마를 다운로드하고 설치할 수 있습니다. Additionally, forwarders are covered.

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) AND [PRIILOADER](priiloader)!
{: .notice--danger}

안전을 위해 여기에 링크된 MyMenuify Mod가 테마를 설치하는 가장 안전한 방법이므로 여기에 링크된 MyMenuify 버전 이외의 다른 버전을 사용하지 않습니다.
{: .notice--warning}

4.X라고 표시된 다운로드 링크를 선택하면 해당 테마가 Wii 메뉴의 4.1, 4.2, 4.3 버전에서 작동한다는 의미입니다.
{: .notice--warning}

### `옵션` > `표준 시스템 메뉴` > Wii 메뉴의 버전 > Wii 메뉴의 지역으로 이동합니다.

Wii와 현재 지역에 맞게 특별히 포맷된 테마만 설치하세요. Wii에 잘못된 지역 또는 버전의 테마를 설치하면 벽돌이 발생할 수 있습니다. 이 자습서는 설치하기에 안전한 .csm 파일을 만드는 방법에 대해 설명합니다.
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### 테마 링크

+ https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
+ https://gbatemp.net/download/categories/other-files.166/
+ [Wii Themer](http://www.wiithemer.org/) (online theme builder for specific versions and regions, ready to install .csm themes)

#### 이 자습서와 관련하여 도움이 필요하면 [RiiConnect24 디스코드 서버](https://discord.gg/rc24) (추천)에 가입하시거나, [support@riiconnect24.net](mailto:support@riiconnect24.net)로 이메일을 보내주세요.

* Wii
* MyMenuifyMod.zip을 SD 카드 또는 USB 드라이브에 압축 해제합니다.
* A Windows/macOS/Linux PC with an Internet connection
* [MyMenuify Mod](https://oscwii.org/library/app/mymenuifymod)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### 섹션 II - 테마 빌드하기

vWii (Wii U) 에 테마를 설치하려면 [이 페이지](themes-vwii)를 참조하세요.

1. 원하는 테마를 다운로드하고 올바른 테마를 선택했는지 다시 한 번 확인했으면 ThemeMii Mod용 .zip 파일을 압축을 해제하고 응용 프로그램을 엽니다.
1. `도구` > `기본 앱 다운로드` > Wii 메뉴의 버전 > Wii 메뉴의 지역으로 이동합니다.
1. 키를 생성하기 위해 값을 입력하라는 대화 상자가 나타납니다. 여기에 적힌 내용을 입력하면 닌텐도 서버에서 Wii 메뉴 콘텐츠를 해독하는 데 사용되는 키가 생성됩니다.
1. 파일 선택 상자에 .app 파일 (다운로드한 Wii 메뉴 콘텐츠 파일) 을 어디에 저장할지 묻는 메시지가 표시됩니다. ThemeMii가 있는 디렉토리에 저장합니다.
1. `파일` > `열기`로 이동한 다음 .mym 파일이 있는 위치를 찾습니다.
1. `Create csm`을 누른 다음 테마를 저장할 디렉터리를 찾습니다. 테마를 빌드 할 때 까지 기다려 주세요.
1. A dialog box will pop up asking you if you want to save the .mym. `아니오`를 누르세요.

#### 섹션 III - 테마 설치하기

1. 홈브류 채널에서 MyMenuify Mod를 실행합니다.
1. 저장된 .csm 파일을 SD 카드 또는 USB 드라이브의 `modthemes` 폴더에 붙여넣습니다.
1. Copy the theme file to the storage medium under the `modthemes` directory.
1. 일부 테마는 지역마다 링크가 다르므로 Wii의 지역에 맞는 테마를 선택합니다.
1. Go into MyMenuifyMod, and acknowledge the disclaimer. It will ask what IOS you want to use in the app. Select `IOS58`.

    전자가 `예외 DSI가 발생했습니다!` 오류가 발생하면 Wii 콘솔의 RESET  버튼을 누르고, 다시 실행한 다음 `IOS250`을 시도합니다.
    {: .notice--info}

1. Select your storage medium, and you should now see a selection of your themes.

    ![](/images/themes/mym-theme-selection.png)

1. 설치하려는 테마를 찾습니다. If it is signed, MyMenuifyMod will indicate it to you, otherwise it will warn you. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Install the theme.
1. 잠시 기다렸다가 테마를 설치한 다음, 아무 버튼이나 눌러 Wii 메뉴로 이동합니다. 테마가 올바르게 설치되었기를 바랍니다. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### 섹션 I - 테마 찾기

ThemeMii Mod를 사용하면 Wii 메뉴 버전 4.3용 테마를 만들 수 있지만, 다른 버전은 그렇지 않을 수 있기 때문입니다. The instructions for installing that theme are below.

#### 방법

* Wii Theme Team Creations v2
* Google Drive Repository
* [RiiConnect24 테마 페이지](wii-loaders#wiiflow-lite)
* A Linux/macOS/Windows PC with an Internet connection
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### 진행 방법

1. 계속하기 전에 [cIOS](cios)를 설치하는 것이 좋습니다.
1. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
1. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
1. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i

* GBAtemp Download
* SD 카드 및 USB 드라이브
* [USB Loader GX](wii-loaders#usb-loader-gx)
* A Linux/macOS/Windows PC with an Internet connection
* 아래는 테마에 대한 몇 가지 링크입니다.

#### 진행 방법

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
1. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
1. Wii에 SD 카드나 USB 드라이브를 연결합니다.
1. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
1. Open the theme and install it.

### Homebrew Channel Theming

#### 필요한 것

* Wii Themer
* 윈도우즈가 설치된 컴퓨터 (또는 맥/리눅스에서 Mono 또는 Wine 사용)
* A Linux/macOS/Windows PC with an internet connection
* https://rc24.xyz/goodies/themes/

#### 진행 방법

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

1. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

1. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

1. Reinsert the storage device into your Wii and enter the Homebrew Channel.
1. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

1. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
