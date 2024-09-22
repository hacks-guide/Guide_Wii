---
title: "Managing GameCube Backups"
---

{% include toc title="Table of Contents" %}

This guide provides instructions on how to manage your GameCube backups, using GameCube Backup Manager. It functions similar to [Wii Backup Manager](wii-backups#using-wii-backup-manager). It functions similar to [Wii Backup Manager](wii-backups#using-wii-backup-manager).

### Requirements

* 一张SD卡或移动硬盘/U 盘
* [GameCube Backup Manager](https://github.com/AxionDrak/GameCube-Backup-Manager/releases)

为了玩多个游戏，推荐为 Wii 使用移动硬盘。 大多数市场中找到的移动硬盘都应该与您的 Wii 兼容。
{: .notice--info}

确保已将 移动硬盘/U 盘格式化为 FAT32 格式。 不要将其格式化为其它格式，例如 NTFS、exFAT、extFS 或 WBFS，后者是用于存储 Wii 游戏的过时文件系统。
{: .notice--info}

### 说明

#### 第一部分 - 下载

1. 解压 GameCube Backup Manager 并启动程序。
1. 将移动硬盘/U 盘插入电脑。

#### 第二部分 - 复制游戏

1. 打开应用程序，找到右下角的文件夹按钮。 点击它以打开文件资源管理器。

    ![](/images/desktop-apps/GCBM/folderbutton.png)

1. Navigate to the location of the folder that contains the game file you want to transfer. 位置可以是您电脑的硬盘或移动硬盘。 Once you find the folder, select it.

    ![](/images/desktop-apps/GCBM/selectfolder.png)

1. 点击 `Files (Destination)` 选项卡，然后从下拉菜单中选择 `Inactive` 选项。 这将允许您选择选择要传输游戏的驱动器。 从列表中选择相应的驱动器字母。

    ![](/images/desktop-apps/GCBM/selectdrive.png)

1. 接下来，回到 `Files (Source)` 选项卡，选择要传输的游戏，然后点击 `Install Game (1:1)` 或 `Install Game (Scrub)`。

    ![](/images/desktop-apps/GCBM/installgame.png)

选择 `Install Game (Scrub)` 将删除游戏中不必要的数据，从而减小游戏文件的大小。 For some games this can be a major reduction, for example with Animal Crossing - going from 1.3GB to around 26MB.
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
