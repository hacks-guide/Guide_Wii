---
title: "BootMii 还原 (RestoreMii)"
---

{% include toc title="Table of Contents" %}

This guide will provide instructions on how to restore a backup of your NAND with BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

如果您已将 BootMii 安装为 boot2，则需要重启主机来启动 BootMii。 如果是这种情况，请跳过步骤1和2。
{: .notice--info}

如果一直黑屏且光驱的蓝灯闪烁，说明您的 SD 卡上缺少 BootMii 文件。 Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

Family edition Wii（不带 GameCube 接口的 Wii）不能还原 NAND 备份。 This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support. For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. 有问题的 SD 卡也是如此。 有问题的 SD 卡也是如此。
{: .notice--danger}

### Requirements

* 由 [BootMii](https://wii.guide/bootmii) 制作的早期 NAND 备份

### 想从 NAND 备份中还原单个数据？

很可能有一种更安全且更快的方法将其重新放回 Wii，可能涉及使用 Dolphin Emulator。

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

如果您想还原游戏的存档，使用 Dolphin 导入 NAND 备份，使用 `工具 > 导出所有 Wii 存档` 将所有存档导出到 SD 卡，然后使用数据管理将其移动到 Wii 上。

### 重要说明

+ 如果您没有做任何导致变砖的操作（或者很长时间后才启动 Wii），那很可能是 [Wi-Fi Brick（Wi-Fi 砖）](bricks#wi-fi-brick)。

+ 如果您不能将 BootMii 安装为 boot2，RestoreMii 会提示您通过 GameCube 手柄输入科乐美秘技。

+ 您必须使用主机上的 POWER (right) 和 RESET (select) 按钮或第 1 个口的 GameCube 手柄。 要使用 GameCube 手柄移动，按 GameCube 手柄上的左/右方向键。 要选择，按 A。

### Instructions

1. 启动 Homebrew Channel。
1. 按 HOME 按钮，然后选择 "Launch BootMii"。
    + 如果您甚至能够进入 BootMii，那么进入 Homebrew Channel，并尽力[找出变砖的原因](bricks)，并试图进行修复。

    ![](/images/bootmii/BootMii_HBC.png)

1. 选择选项按钮（带齿轮图标的按钮）。

    ![](/images/bootmii/BootMii_Gears.png)

1. 选择 RestoreMii 按钮。

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. 在 GameCube 手柄上输入科乐美秘技：↑、↑、↓、↓、←、→、←、→、B、A、START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. 还原结束后，您应该会看到一个文本，上面写着 `I HAZ SUCCESS!`，否则写着 `I HAZ FAIL`。 按 Wii 主机或 GCN 手柄上的任意按钮。

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. 要退出 BootMii，按返回按钮（带箭头的那个)，然后您可以按 Wii 菜单按钮或 Homebrew Channel 按钮来退出到您想要的地方。

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
