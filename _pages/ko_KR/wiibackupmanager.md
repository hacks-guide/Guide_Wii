---
title: "Wii Backup Manager"
---

{% include toc title="목차" %}

Wii Backup Manager는 컴퓨터에서 Wii 게임을 USB 드라이브에 복사하여 Wii에서 게임을 플레이할 수 있도록 하는 프로그램입니다. 또한 [GameTDB](https://gametdb.com/)에서 게임 커버를 다운로드할 수 있으며 보유한 게임을 목록화하는 데 사용할 수 있습니다. 이 자습서에서는 컴퓨터에서 USB 드라이브로 게임을 복사하는 방법을 설명합니다. 다른 기능들은 사용하기 쉬운 인터페이스에서 사용할 수 있습니다.

### 필요한 것

* 윈도우즈를 실행하는 PC
* USB 드라이브 또는 SD 카드
* [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)


맥OS를 사용하는 경우 [Witgui](https://desairem.com/wordpress/category/witgui-download/)로 게임을 복사하는 것이 좋으며, 윈도우즈, 맥OS 및 리눅스의 경우 [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion)을 사용하는 것이 좋습니다. Wii 백업 매니저는 윈도우즈와만 호환됩니다.
{: .notice--info}

여러 게임을 저장하려면 Wii용 외장 하드 드라이브를 권장합니다. 이 가이드에서는 이를 "USB 드라이브"라고 부릅니다 시중에 나와 있는 대부분의 제품은 정상적으로 작동합니다. Most of those found on the market should work fine.
{: .notice--info}

플래시 드라이브는 크기가 작고 같은 제품 간에도 동작이 다를 수 있으므로 권장하지 않습니다. <br> 대안으로 SD 카드를 사용할 수도 있지만, Wii의 SD 카드 슬롯은 속도가 느립니다.
{: .notice--info}

USB 드라이브의 포맷이 FAT32로 되어 있는지 확인합니다. exFAT, extFS와 같은 다른 유형으로 포맷하지 않습니다. <br> NTFS로 포맷할 수 있지만 대부분의 앱 (예: 홈브류 채널, Nintendont) 에서는 작동하지 않습니다.
{: .notice--info}

### 진행 방법

#### 섹션 I - 다운로드

1. Wii Backup Manager를 압축 해제하고 프로그램을 실행합니다.
1. USB 드라이브 또는 SD 카드를 컴퓨터에 연결합니다.

#### 섹션 II - 게임 복사하기

1. Go to the `Drive 1` tab, then select the drive that you're putting the Wii games on.

    ![](/images/desktop-apps/WBM/select_drive.png)

1. Go to the `Files` tab, then select `Add`.
    + <br> Select `Files` to add multiple games to the program, or select `Folder` to add a whole folder of games.

    ![](/images/desktop-apps/WBM/select_games.png)

1. Go to `Select`, then click `Games not on drive 1`.

    ![](/images/desktop-apps/WBM/select_games2.png)

1. Select `Transfer`, then select `Drive 1` to transfer the games over. It might take a while for the games to copy over.

    ![](/images/desktop-apps/WBM/transfer_todrive.png)

### 완료 후 옵션

[cIOS 계속하기](cios)<br> Wii가 USB 로더를 사용하려면 cIOS가 필요합니다.
{: .notice--info}

이제 [USB 로더 GX](usbloadergx) 또는 [WiiFlow](wiiflow)를 사용하여 USB 드라이브 또는 SD 카드에서 게임을 플레이할 수 있습니다.
{: .notice--info}

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
