---
title: "导出 Wii/GameCube 游戏"
---

{% include toc title="Table of Contents" %}

This guide covers dumping GameCube or Wii game discs. You can either dump directly to an SD card or USB drive, or over the local network.

### Dumping a Disc to SD/USB (CleanRip)

#### Requirements

+ 至少有 4.7 GB 可用空间的 SD 卡或 U 盘（双层光盘需要 8.5 GB）。
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instructions

如果您想转储[此列表](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games)中的其中一款游戏，请将 `Dual Layer` 设置为 `Yes`。
{: .notice--info}

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. 解压 CleanRip 并将其放在 SD 卡或 U 盘的 `apps` 文件夹中。
1. 现在插入您想要转存的游戏。
1. Power on your console.
1. 启动 Homebrew Channel。
1. Launch CleanRip from the list of homebrew.
1. 选择您要将游戏转存到的设备 - U 盘或 SD 卡。

    ![](/images/homebrew/CleanRip/2.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, simply skip and verify your dump on Dolphin Emulator if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Insert the game disc you would like to dump.

    ![](/images/homebrew/CleanRip/4.png)

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/6.png)

1. Press A to start dumping the disc.
    + 这可能需要一段时间，因为它将转储完整的 4.7 GB 光盘内容（双层光盘需要 8.5 GB）。

    ![](/images/homebrew/CleanRip/7.png)

1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Dumping a Disc over LAN (Wii DVD Dumper)

#### Requirements

+ A Windows/macOS/Linux PC with an internet connection
+ [DVD](/assets/files/DVDDumpTool.zip)

#### Instructions

Download speeds will be slow due to limitations in the network hardware of the Wii, but it remains a valid solution if you are willing to be patient.
{: .notice--info}

通过局域网转储游戏
{: .notice--warning}

1. 解压 DVD Dump Tool 并将其放在 SD 卡或 U 盘的 `apps` 文件夹中。
1. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 CleanRip。
1. Power on your console.
1. 启动 Homebrew Channel。
1. Launch DVD Dump Tool from the list of homebrew.
1. 按右方向键，然后按 A。
1. 选择您想要复制的光盘（选项有：`GameCube Disc`、`Wii Single-Layer Disc`、`Wii Dual-Layer Disc`），然后按“A”

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. 将 SD 卡插入 Wii，并从 Homebrew Channel 启动 DVD Dump Tool。
    + If it is already inserted, eject and reinsert the disc.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Select the proper disc type.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Press any button to begin the dumping process.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. 记住您的 Wii URL（IP 地址）。
1. 在您计算机网页浏览器的地址栏处输入 Wii URL。

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. 点击 `Click here to download XXXX.iso`。
1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Joining PART files on a FAT32 device

如果您将光盘转储到 FAT32 格式的设备上，您应该至少获得 2 个以 `.partX.iso` 结尾的文件。 它们需要合并在一起。
{: .notice--info}

#### Windows

1. 将所有具有相同名称并以 `.partX.iso` 结尾的文件复制到电脑的一个文件夹中。
1. In this folder, click the address bar in Windows Explorer and copy its PATH.
1. 选择“在此处打开 PowerShell 窗口”。
1. Run `cd [PATH]`.
1. 最后，输入 `copy /b *.part?.iso game.iso` 并按回车。
1. Wait until the merging process finishes.
    + It should end with the terminal outputting `1 file(s) copied`.

#### macOS/Linux

1. 将所有同名且以 `.partX.iso` 结尾的文件复制到电脑上的一个空文件夹中。
1. 打开终端。
1. 使用 `cd <path>` 命令，并将 `<path>` 替换为 `.partX.iso` 文件的路径。
1. 使用以下命令： `cat \*.part?.iso > game.iso`。
1. Wait until the merging process finishes.

要正确分类驱动器的游戏，您需要使用 [Wii Backup Manager](wiibackupmanager)。
{: .notice--info}
