---
title: "BootMii 백업"
---

{% include toc title="목차" %}

BootMii를 사용하여 NAND 백업을 생성하려면 **SD 카드**가 필요합니다. 백업이 없는 경우 이 페이지를 건너뛰어도 되지만, 가능하면 NAND 백업을 만드는 것이 좋습니다.

Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. Regardless, it is still recommended to make one on these consoles.
{: .notice--danger}

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND.
{: .notice--warning}

Wii 리모컨으로는 BootMii를 탐색할 수 없습니다. 콘솔의 전원 및 재설정 버튼 또는 포트 1에 연결된 게임큐브 컨트롤러를 사용해야 합니다. 옵션 사이를 탐색하려면 Wii에서 전원 버튼을 누릅니다 (또는 게임큐브 컨트롤러의 +컨트롤 패드 의 왼쪽/오른쪽 버튼을 누릅니다.) 옵션을 선택하려면 Wii에서 RESET을 누르거나 게임큐브 컨트롤러에서 A 버튼을 누릅니다. BootMii의 가장 중요한 기능 중 하나는 Wii의 NAND 스토리지를 백업하고 복원하는 기능입니다. NAND 백업을 수행하는 방법을 살펴보겠습니다.
{: .notice--info}

`BootMii 실행` 버튼이 나타나지 않으면, [HackMii 설치 프로그램을 재실행](hackmii)하고 BootMii를 설치하세요.
{: .notice--warning}

화면이 검은색으로 유지되고 파란색 디스크 드라이브 표시등이 깜박이면 SD 카드에 BootMii 파일이 누락된 것입니다. [이 zip 파일](https://static.hackmii.com/bootmii_sd_files.zip)을 다운로드하여 SD 카드의 루트에 압축을 푼 다음 다시 시도하세요.
{: .notice--warning}

### 필요한 것

* 적어도 512MB 이상의 SD 카드

### 진행 방법

BootMii를 boot2로 설치한 경우 콘솔을 재시작하여 BootMii를 시작해야 합니다. 이 경우 1단계와 2단계를 건너뜁니다.
{: .notice--info}

1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. 옵션 버튼 (톱니바퀴가 있는 아이콘) 을 선택합니다.

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

1. NAND 백업이 시작됩니다. 화면에서 진행 상황을 확인할 수 있습니다.
    + "배드 블록"은 정상적입니다. NAND 백업 중 일부가 보이더라도 걱정하지 마세요.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. 이 단계가 끝나면, 백업을 확인합니다. Ideally, all the blocks should be green after the verification process.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. BootMii를 종료하려면 뒤로 버튼 (화살표가 있는 버튼) 을 누른 다음 Wii 메뉴 버튼 또는 홈브류 채널 버튼을 눌러 원하는 위치에서 종료할 수 있습니다.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. There often better ways to unbrick your console.
Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
</div>

BootMii를 boot2로 설치하는 것이 좋지만 초기 Wii 콘솔에만 설치할 수 있습니다. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` is your Wii's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. It is especially important for users of BootMii on IOS.
{: .notice--info}
