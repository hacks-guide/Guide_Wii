# BootMii 备份

你需要一张<strong x-id="1">SD卡</strong>才能使用BootMii创建NAND备份。
如果没有，可以跳过此页，但强烈建议您创建NAND备份。

::: warning

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND.

:::

## 需要

- 一张至少有512MB空间的SD卡。

## 步骤

::: info

如果您已将 BootMii 安装为 boot2，则需要重启主机来启动 BootMii。 如果是这种情况，请跳过步骤1和2。

:::

1. Power on your console.

2. 启动 Wii 上的 Homebrew Channel。

3. 按 HOME 按钮，然后选择 "Launch BootMii"。

    ![](/images/bootmii/BootMii_HBC.png)

    ::: warning

    If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

    :::

    ::: warning

    如果一直黑屏且光驱的蓝灯闪烁，说明您的 SD 卡上缺少 BootMii 文件。 Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

    :::

4. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    ::: info

    无法使用 Wii 遥控器控制 BootMii。
    您必须使用主机上的 POWER 和 RESET 按钮，或第 1 个口的 GameCube 手柄。
    To navigate between options, press POWER. To select an option, press RESET. To select an option, press RESET.

    :::

5. 选择选项按钮（带齿轮图标的按钮）。

    ![](/images/bootmii/BootMii_Gears.png)

6. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

7. 将启动NAND备份。 您将在屏幕上看到进度。

    - "Bad Blocks(坏块)"是正常的。 当您看到时不用担心。

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. 在这一步后，它会验证这个备份。 理想情况下，验证过程结束后，所有区块都应为绿色。

    - If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine. As long as all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. 要退出 BootMii，按返回按钮（带箭头的那个)，然后您可以按 Wii 菜单按钮或 Homebrew Channel 按钮来退出到您想要的地方。

    ![](/images/bootmii/BootMii_Return.png)

::: info

Note: **restoring a NAND backup is usually a last resort**. There are often better ways to unbrick your console.
请尽力<a href="bricks">确定您的变砖情况</a>并撤销导致问题的操作。

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Save the file and exit.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.

:::
