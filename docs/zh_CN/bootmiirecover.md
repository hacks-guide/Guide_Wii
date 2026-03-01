# BootMii 还原

This guide will provide instructions on how to restore a backup of your NAND with BootMii. Please bear in mind that this is usually the <strong mark="crwd-mark">last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to <a href="bricks">identify and repair the brick</a> using other methods.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- 如果您已将 BootMii 安装为 boot2，则需要重启主机来启动 BootMii。 如果是这种情况，请跳过步骤1和2。

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- 如果您不能将 BootMii 安装为 boot2，RestoreMii 会提示您通过 GameCube 手柄输入科乐美秘技。 This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- 如果一直黑屏且光驱的蓝灯闪烁，说明您的 SD 卡上缺少 BootMii 文件。 Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## 想从 NAND 备份中还原单个数据？

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## 需要

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## 步骤

1. 启动 Wii 上的 Homebrew Channel。

2. 按 HOME 按钮，然后选择 "Launch BootMii"。

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. 选择选项按钮（带齿轮图标的按钮）。

   ![](/images/bootmii/BootMii_Gears.png)

4. 选择 RestoreMii 按钮。

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. 在 GameCube 手柄上输入科乐美秘技：↑、↑、↓、↓、←、→、←、→、B、A、START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. 按 Wii 主机或 GCN 手柄上的任意按钮。

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. 要退出 BootMii，按返回按钮（带箭头的那个)，然后您可以按 Wii 菜单按钮或 Homebrew Channel 按钮来退出到您想要的地方。

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[点击此处返回站点索引。](site-navigation)

:::
