---
title: "Wii/게임큐브 게임 덤프하기"
---

{% include toc title="목차" %}

This guide covers dumping GameCube or Wii game discs to a local SD card or USB drive on your Wii.

### Dumping a Disc to SD/USB (CleanRip)

#### 필요한 것

+ 최소 4.7GB의 여유 공간 (듀얼 레이어 디스크를 덤프하는 경우 8.5GB) 이 있는 SD 카드 또는 USB 드라이브
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Preparation

1. 콘솔의 전원을 꺼 주세요.
1. 파일 탐색기에서 폴더를 엽니다.
1. CleanRip을 압축 해제하고 SD 카드 및 USB 드라이브의 `apps` 폴더에 붙여넣으세요.
1. 게임디스크삽입
1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. Launch CleanRip from the list of homebrew.
1. When prompted, select `Yes` to calculate disc checksums.

    ![](/images/homebrew/CleanRip/checksum.png)

1. 게임을 덤프할 장치 (USB 드라이브 또는 SD 카드) 를 선택합니다.

    ![](/images/homebrew/CleanRip/device.png)

1. Select the filesystem type of the device - in most cases it will be FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Ensure that your device is connected to the system and press A to proceed.

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, restart your Wii and try again - but if you continue to get exception errors, dump the disc and verify the checksum in Dolphin instead if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Insert the game disc you would like to dump, and press A to continue.

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Dumping a Wii Disc

As of v2.1.2 of CleanRip, there is an option to auto-detect whether or not the disc you have is dual layer. If you are on an earlier version, or just want to verify that the correct option is being selected, you can check [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your game is a dual layer disc.
{: .notice--info}

If you get an unrecovered read error, ensure that the disc you are attempting to dump is clean and can be properly read by the console. Even though you may be able to play the game disc normally, you may still get this error. If the error persists, try to dump another disc and see if the same error happens.
{: .notice--warning}

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Press A to start dumping the disc.
    + This process can take quite some time, since it will dump all 4.7 GB of the DVD (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.
{: .notice--info}

### Dumping a GameCube Disc

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.
{: .notice--info}

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Press A to start dumping the disc.
    + This process can take some time, since it will dump all 1.3 GB of the Mini DVD.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.
{: .notice--info}
