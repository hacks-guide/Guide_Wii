---
title: "Wii Backup Manager"
---

{% include toc title="Table of Contents" %}

Wii Backup Manager 是一个将 Wii 游戏从电脑复制到 U 盘的程序，以便在 Wii 上玩这些游戏。 它还可以从 [GameTDB](https://gametdb.com/) 下载封面，并列出您拥有的游戏。 本教程将告诉您如何将游戏从电脑复制到 U 盘上。 其它功能可以在易于使用的界面中使用。

### Requirements

* 运行 Windows 的电脑
* 移动硬盘/U 盘或 SD 卡
* [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)


如果您使用 macOS，我们推荐您使用 [Witgui](https://desairem.com/wordpress/category/witgui-download/)，如果您使用 Windows、macOS 和 Linux，我们推荐您使用 [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion) 。 Wii Backup Manager 只能在 Windows 上使用。
{: .notice--info}

为存储多个游戏，推荐为 Wii 使用移动硬盘。 在本指南中，我们将称其为”USB 硬盘“。 市面上的大多数移动硬盘应该都能正常工作。
{: .notice--info}

不建议使用 U 盘，因为它们很小，即使同一款产品之间行为也可能有所不同。 <br> 作为替代方案，您可以直接使用 SD 卡，但 Wii 的 SD 卡插槽速度很慢。
{: .notice--info}

确保已将 USB 硬盘格式化为 FAT32 格式。 不要将它格式化为其它类型，如 exFAT、extFS。 <br>您可以将其格式化为 NTFS，但它不能与大多数应用程序（如 Homebrew Channel 和 Nintendont）配合使用。
{: .notice--info}

### Instructions

#### 第一部分 - 下载

1. 解压 Wii Backup Manager 并启动程序。
1. 将 USB 硬盘或 SD 卡插入电脑。

#### 第二部分 - 将游戏复制到 USB 硬盘

1. 进入 `磁盘 1` 选项卡，然后选择您要放置 Wii 游戏的磁盘。

    ![](/images/desktop-apps/WBM/select_drive.png)

1. 进入 `文件` 选项卡，然后选择 `添加`。
    + <br> 选择 `文件` 以添加多个游戏到程序，或选择 `文件夹` 以添加整个游戏文件夹。

    ![](/images/desktop-apps/WBM/select_games.png)

1. 点击 `选择`，然后点击 `磁盘 1 中没有的项`。

    ![](/images/desktop-apps/WBM/select_games2.png)

1. 选择 `传输`，然后选择 `磁盘 1` 将游戏传输到磁盘上。 复制游戏可能需要一些时间，请耐心等待。

    ![](/images/desktop-apps/WBM/transfer_todrive.png)

### 完成后的选项

您现在可以使用 [USB Loader GX](usbloadergx) 或 [WiiFlow](wiiflow) 从 USB 硬盘中玩游戏。
{: .notice--info}

[继续安装 cIOS](cios)<br> 您的 Wii 需要 cIOS 来使用 USB 加载器。
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
