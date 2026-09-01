# ModMii

::: warning

This program does not come with a warranty. You are responsible for any potential damage done to your console.

:::

::: warning

Some features may be limited for the Wii mini on ModMii.

:::

ModMii is an all-in-one Wii and Wii U hacking tool for Windows created by XFlak. It has many use-cases, including:

- Modding your console for the first time, or re-modding it
- Checking for and updating outdated softmods
- Fixing upside-down Homebrew Channel problems
- Running homebrew without making any changes to your Wii's NAND
- Downloading homebrew

## ModMii 개요

There are two different ways to use ModMii: ModMii Classic, a fully-featured command line interface, and ModMii Skin, a GUI with fewer features. 콘솔을 처음으로 간단하게 개조해보고 싶다면 ModMii Skin이면 충분할 겁니다. Otherwise, ModMii Classic is recommended.

| 도구                                 | ModMii 클래식 | ModMii 스킨 |
| ---------------------------------- | ---------- | --------- |
| ModMii 마법사                         | ✅          | ✅         |
| SysCheck 업데이터 마법사                  | ✅          | ⛔         |
| USB 로더 설치 마법사                      | ✅          | ✅         |
| HackMii 해결 마법사                     | ✅          | ✅         |
| 절제 마법사                             | ✅          | ✅         |
| 지역 변경 마법사                          | ✅          | ✅         |
| SNEEK/에뮤낸드 설치                      | ✅          | ✅         |
| 파일 열기 기능                           | ✅          | ⛔         |
| 다운로드 대기열 로드                        | ✅          | ✅         |
| 다운로드 페이지 1/2/3/4/5                 | ✅          | ⛔         |
| 고급 다운로드                            | ✅          | ⛔         |
| 다운로드 대기열 로드                        | ✅          | ⛔         |
| 구성 파일 빌드                           | ✅          | ⛔         |
| 파일 정리 & 앱 업데이터 | ✅          | ⛔         |

:::details 각 도구에 대한 자세한 설명을 보려면 여기를 클릭합니다.

| 도구                                               | 설명                                                                                                                                                                                                                            |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard                                | Hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                            |
| SU = SysCheck Updater Wizard                     | Checks for and updates old modifications installed to your console. On the Wii it can fix things such as DarkCorp/CIOSSPAGHETTI that can cause issues for modern homebrew.                    |
| U = USB 로더 설정 마법사                                | Set up a USB loader to load disc backups from an SD or USB hard drive. ModMii 마법사를 사용하는 경우에는 이 옵션이 필요하지 않습니다.                                                                                 |
| H = HackMii Solutions Wizard                     | Fix issues with the HackMii Installer or an upside-down Homebrew Channel.                                                                                                                                     |
| AW = Abstinence Wizard                           | Run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                       |
| RC = 지역 변경 마법사                                   | Change the region of your Wii.                                                                                                                                                                                |
| S = SNEEK 설치, EmuNAND 빌더/수정 도구, 게임 대량 추출기        | Set up an EmuNAND (aka neek2o) on your SD or USB. Used for extra storage space for saves/channels and running homebrew without permanent modifications to the system NAND. |
| F = Open a File or Folder                        | Various tools for developers and advanced users.                                                                                                                                                              |
| # = Download Pages                               | Various download pages for homebrew apps, PC apps, IOSes, cIOSes, Wii Menu themes and more.                                                                                                                   |
| A = 고급 다운로드 및 포워더 빌더                             | Download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users.                                                                                                   |
| L = 다운로드 대기열 로드                                  | Load bundled or previously saved download queues.                                                                                                                                                             |
| C = Bootmii, Wad 관리자 또는 Multi-Mod 관리자용 커스텀 구성 파일 | Build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                |
| FC = File Cleanup                                | Update apps and remove unnecessary files from your SD card or hard drive after softmodding your Wii.                                                                                                          |

:::

## ModMii 설치

### 요구 사항

- Wii 또는 Wii U
- USB 드라이브 또는 SD 카드
  - The drive should be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - See the [Storage Device FAQ](faq#storage-device-faq) for more info
- 윈도우 PC (가상 머신이 작동함)
- [ModMii](https://modmii.github.io/)

### 설치

::: warning

브라우저나 바이러스 백신 소프트웨어가 ModMii를 맬웨어로 표시할 수 있습니다. 이는 긍정 오류입니다. ModMii does not contain any malware.

:::

1. [ModMii 웹사이트](https://modmii.github.io)로 가서 다운로드 섹션까지 아래로 스크롤합니다. 여기에서 `설치 프로그램` 옵션을 선택합니다. 브라우저가 설치 프로그램을 맬웨어로 표시할 수 있지만 이는 **긍정 오류**입니다.

   ![](/images/modmii/modmii-download.png)

2. `ModMiiInstaller.exe` 파일을 열고 설치 과정을 진행합니다.

   ![](/images/modmii/modmii-install.png)

## ModMii 마법사 사용

The ModMii Wizard is a tool that helps you softmod your console from start to finish. It will download all necessary files and generate a guide for you to follow. It can also be used to overwrite and update existing softmods.

1. ModMii 스킨 또는 ModMii 클래식을 열고 목록 맨 위에 있는 ModMii 마법사 옵션을 선택합니다.

   ![](/images/modmii/modmii-wizard-1.png)

2. 개조할 플랫폼을 선택하세요. Wii U를 가지고 있다면 Wii U와 vWii 모두를 개조하는 것을 권장합니다. Wii U와 vWii 모두를 개조할 계획이라면 9단계로 건너뛰세요. vWii만 개조할 계획이라면 5단계로 건너뛰세요. Wii U만 개조할 계획이라면 13단계로 건너뛰세요.

   ![](/images/modmii/modmii-wizard-2.png)

3. Answer `Yes` to the first question.

   ![](/images/modmii/modmii-wizard-3.png)

4. Select your current System Menu version and region, following the instructions in the program. (If you don't know how to get this information, select the bottom option and press `Next` for a video guide)

   ![](/images/modmii/modmii-wizard-4.png)

5. 콘솔을 개조하는 데 사용할 익스플로잇을 선택하세요. If you are on a Wii, Wilbrand is recommended if you have an SD card. For modding the vWii, using the browser is recommended.

   ![](/images/modmii/modmii-wizard-5.png)

6. 이전 단계에서 Wilbrand 옵션을 선택한 경우 Wii의 MAC 주소를 입력합니다. (If you don't know how to check your Wii's MAC address, enter `Help` in the text box for a video guide)

   ![](/images/modmii/modmii-wizard-6.png)

7. 목록에서 원하는 시스템 메뉴 버전을 선택합니다. You will typically want to select 4.3.

   ![](/images/modmii/modmii-wizard-7.png)

8. Select whether or not you would like to install any of the listed channels. 이는 선택 사항입니다.

   ![](/images/modmii/modmii-wizard-8.png)

9. Select whether or not you would like to install a custom Wii Menu theme, with the choice of three theme effects. 각 효과는 Wii 채널 위에 마우스를 올렸을 때 윤곽선이 얼마나 회전하는지에 대한 내용을 다룹니다.

   ![](/images/modmii/modmii-wizard-9.png)

10. Select whether or not you would like to set up a USB loader.

    ![](/images/modmii/modmii-wizard-10.png)

11. If you selected `Yes` in the USB Loader menu, select which USB loader you would like to use. USB Loader GX and/or WiiFlow are recommended.

    ![](/images/modmii/modmii-wizard-11.png)

12. If you selected `Yes` in the USB Loader menu, select where you would like to save your USB loader files.

    ![](/images/modmii/modmii-wizard-12.png)

13. Verify where you would like to save files for your SD card and/or USB drive.

    ![](/images/modmii/modmii-wizard-13.png)

14. 설정이 올바른지 확인한 후 `마침`을 누릅니다. 버튼을 누르면 ModMii가 백그라운드에서 파일을 처리하고 다운로드하기 시작하고, 자동으로 가이드를 생성하여 열어줍니다.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow the below sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

## SysCheck 업데이터 마법사

SysCheck 업데이터 마법사는 홈브류 앱 [SysCheck](syscheck)를 활용해 Wii, 특히 IOS 및 cIOS의 모든 수정 사항을 분석하는 도구입니다. It accepts a `syscheck.csv` file generated by SysCheck and provides any necessary updates.

1. If you have not already, follow the [SysCheck](syscheck) guide to generate a `syscheck.csv` file on your SD card or USB drive.

2. ModMii 클래식을 열고 `SU`를 입력하여 SysCheck 업데이타 마법사를 엽니다.

   ![](/images/modmii/syscheck-wizard-1.png)

3. Drag and drop the `syscheck.csv` file from Windows Explorer into the window. 이렇게 하면 Enter 키를 누를 수 있는 파일 위치가 붙여넣어집니다.

   ![](/images/modmii/syscheck-wizard-2.png)

4. If Priiloader is detected, it will ask you if you want to update it. Type `Y` and press Enter.

   ![](/images/modmii/syscheck-wizard-3.png)

5. The program will analyze your SysCheck file and will provide options for you depending on what it sees. In this example, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. Type `Y` and press Enter.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow other sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

## HackMii 해결 마법사

The HackMii Solutions Wizard fixes issues caused by things like Darkcorp/CIOSSPAGHETTI by installing clean IOSes. It can fix issues such as:

- HackMii 설치 프로그램이 "계속하려면 (1) 버튼을 누르세요"라는 메시지를 표시하지 않습니다.
- HackMii 설치 프로그램에서 "취약한 IOS를 찾을 수 없습니다!"라는 메시지가 표시됩니다.
- 홈브류 채널이 거꾸로 표시됨

1. Open ModMii Skin or ModMii Classic and select the HackMii Solutions Wizard.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Select your current System Menu version and region, following the instructions in the program. (If you don't know how to get this information, select the bottom option and press `Next` for a video guide)

   ![](/images/modmii/hackmii-wizard-2.png)

3. 콘솔을 개조하는 데 사용할 익스플로잇을 선택하세요. If you are on a Wii, Wilbrand is recommended if you have an SD card. For modding the vWii, using the browser is recommended.

   ![](/images/modmii/hackmii-wizard-3.png)

4. 이전 단계에서 Wilbrand 옵션을 선택한 경우 Wii의 MAC 주소를 입력합니다. (If you don't know how to check your Wii's MAC address, enter `Help` in the text box for a video guide)

   ![](/images/modmii/hackmii-wizard-4.png)

5. Verify where you would like to save files for your SD card and/or USB drive.

   ![](/images/modmii/modmii-wizard-12.png)

6. 설정이 올바른지 확인한 후 `마침`을 누릅니다. 버튼을 누르면 ModMii가 백그라운드에서 파일을 처리하고 다운로드하기 시작하고, 자동으로 가이드를 생성하여 열어줍니다. After following the generated guide, it is recommended that you use the [SysCheck Updater Wizard](#syscheck-updater-wizard) to undo any other problematic modifications on your Wii.

   ![](/images/modmii/hackmii-wizard-5.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow other sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

---

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
