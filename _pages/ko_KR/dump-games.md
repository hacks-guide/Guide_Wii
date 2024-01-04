---
title: "Wii/게임큐브 게임 덤프하기"
---

{% include toc title="목차" %}

This guide covers dumping GameCube or Wii game discs. You can either dump directly to an SD card or USB drive, or over the local network.

### Dumping a Disc to SD/USB (CleanRip)

#### 필요한 것

+ 최소 4.7GB의 여유 공간 (듀얼 레이어 디스크를 덤프하는 경우 8.5GB) 이 있는 SD 카드 또는 USB 드라이브
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### 진행 방법

If you are dumping one of the 13 games on [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), set `Dual Layer` in Step 6 to `Yes`.
{: .notice--info}

1. 콘솔의 전원을 꺼 주세요.
1. 파일 탐색기에서 폴더를 엽니다.
1. CleanRip을 압축 해제하고 SD 카드 및 USB 드라이브의 `apps` 폴더에 붙여넣으세요.
1. 게임디스크삽입
1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. Launch CleanRip from the list of homebrew.
1. 게임을 덤프할 장치 (USB 드라이브 또는 SD 카드) 를 선택합니다.

    ![](/images/homebrew/CleanRip/2.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, simply skip and verify your dump on Dolphin Emulator if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. 덤프할 게임을 넣습니다.

    ![](/images/homebrew/CleanRip/4.png)

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/6.png)

1. Press A to start dumping the disc.
    + 4.7GB 디스크 콘텐츠 전체 (듀얼 레이어 디스크의 경우 8.5GB) 를 덤프하기 때문에 시간이 걸릴 수 있습니다.

    ![](/images/homebrew/CleanRip/7.png)

1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Dumping a Disc over LAN (Wii DVD Dumper)

#### 필요한 것

+ A Windows/macOS/Linux PC with an internet connection
+ [DVD](/assets/files/DVDDumpTool.zip)

#### 진행 방법

Download speeds will be slow due to limitations in the network hardware of the Wii, but it remains a valid solution if you are willing to be patient.
{: .notice--info}

[DVD 덤프 도구](/assets/files/DVDDumpTool.zip) Wii와 컴퓨터는 하나의 로컬 네트워크에 연결되어 있어야 합니다.
{: .notice--warning}

1. DVD 덤프 도구를 압축 해제하고 SD 카드 또는 USB 드라이브의 `apps` 폴더에 넣습니다.
1. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.
1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. Launch DVD Dump Tool from the list of homebrew.
1. 십자패드의 오른쪽을 누르고 A 버튼을 누릅니다.
1. 복사할 디스크를 선택합니다 (옵션은 다음과 같습니다: `게임큐브 디스크`, `Wii 싱글 레이어 디스크`, `Wii 듀얼 레이어 디스크`)를 누르고 "A" 버튼을 누릅니다.

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Wii에 SD 카드를 연결하고 홈브류 채널에서 DVD 덤프 도구를 실행합니다.
    + If it is already inserted, eject and reinsert the disc.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Select the proper disc type.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Press any button to begin the dumping process.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Wii URL (IP 주소) 기억합니다.
1. 컴퓨터의 웹 브라우저에서 주소 표시줄로 이동하여 Wii URL을 입력합니다.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. `여기를 클릭하여 XXXX.iso 다운로드합니다`를 클릭하세요.
1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Joining PART files on a FAT32 device

FAT32 포맷의 장치에 디스크를 덤프한 경우, `.partX.iso`으로 끝나는 파일이 2개 이상 있어야 합니다. 가입해야 합니다.
{: .notice--info}

#### 윈도우즈

1. 이름이 같고 끝이 `.partX.iso`으로 끝나는 모든 파일을 컴퓨터의 빈 폴더에 복사합니다.
1. In this folder, click the address bar in Windows Explorer and copy its PATH.
1. "여기에서 PowerShell 창 열기"를 선택합니다.
1. Run `cd [PATH]`.
1. 마지막으로 `copy /b *.part?.iso game.iso`을 입력하고 Enter 키를 누릅니다.
1. Wait until the merging process finishes.
    + It should end with the terminal outputting `1 file(s) copied`.

#### 맥OS/리눅스

1. 컴퓨터의 폴더에 이름이 같고 끝이 `.partX.iso`으로 끝나는 모든 파일을 복사합니다.
1. 터미널을 엽니다.
1. `cd <path>` 명령을 사용하여 `<path>`을 `.partX.iso` 파일의 경로로 바꿉니다.
1. 다음 명령을 그대로 사용합니다: `cat \*.part?.iso > game.iso`.
1. 완료될 때까지 기다리세요.

드라이브에 있는 게임을 제대로 정리하려면 [Wii 백업 관리자](wiibackupmanager)를 사용해야 합니다.
{: .notice--info}
