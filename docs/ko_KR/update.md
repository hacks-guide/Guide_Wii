---
title: "Wii 메뉴 v4.3으로 업데이트하기"
---

{% include toc title="목차" %}

이 자습서는 이미 Wii를 홈브류 한 경우 Wii 메뉴를 버전 4.3으로 업데이트하는 방법을 설명합니다.

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.
{: .notice--warning}

### 필요한 것

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* SD 카드 및 USB 드라이브
* 윈도우즈가 설치된 컴퓨
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### 진행 방법

#### 섹션 I - 다운로드

1. NUS Downloader Wii용 .zip 파일을 압축 해제하고 응용 프로그램을 엽니다.
1. `데이터베이스...` > `시스템` > `0000000100000002 - 시스템 메뉴`로 이동하여 아래 표와 같이 해당 지역에 해당하는 버전을 선택합니다.
1. `Pack WAD`가 선택되어 있는지 확인합니다
1. `NUS 다운로드 시작!`을 누릅니다.
1. `titles` -> `0000000100000002` -> (Wii 메뉴 버전)을 열고 .wad 파일을 SD 카드 또는 USB 드라이브의 `wad` 폴더에 복사합니다.
1. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
1. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| 지역 | Wii 메뉴 버전   |
| -- | ----------- |
| 일본 | v512 (4.3J) |
| 북미 | v513 (4.3U) |
| 유럽 | v514 (4.3E) |
| 한국 | v518 (4.3K) |

#### 섹션 II - 설치하기

1. Power off your Wii. Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
1. Launch YAWM ModMii Edition.
1. Select your SD card or USB drive.
1. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
1. Navigate to the Wii Menu WAD and press A twice to install it.
1. When prompted to retain Priiloader, press A to confirm.
1. 설치가 완료되면, 홈 버튼을 눌러 홈브류 채널로 돌아갑니다.

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
