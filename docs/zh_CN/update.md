# 更新 Wii 菜单至 v4.3

如果您已经破解了 Wii，本教程将解释如何将 Wii 菜单更新至 4.3 版本。

::: warning

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.

:::

## 需要

- a Wii with The Homebrew Channel 1.0.8 or later
    - If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
- 一张SD卡或移动硬盘/U 盘
- 一台装有 Windows 的电脑
- [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## 步骤

### 第一部分 - 下载

1. 解压 NUS Downloader Wii 的 .zip 文件，并打开应用程序。
2. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
3. Make sure `Pack WAD` is checked.
4. Press `Start NUS Download!`.
5. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
6. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
7. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| 区域 | Wii 菜单版本                                       |
| -- | ---------------------------------------------- |
| 日本 | v512 (4.3J) |
| 美国 | v513 (4.3U) |
| 欧洲 | v514 (4.3E) |
| 韩国 | v518 (4.3K) |

### 第二部分 - 安装

1. 关闭 Wii。 按住 RESET，然后再打开。
2. In the Priiloader menu, select `Homebrew Channel`.
    - If the Priiloader menu does not appear, please [install it immediately](priiloader). 本指南需要 Priiloader。
3. 启动 YAWM ModMii Edition。
4. 选择 SD 卡或 U 盘。
5. Press + on the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
6. 移动至 Wii 菜单 WAD，然后按两次 A 进行安装。
7. 提示保留 Priiloader 时，按 A 确认。
8. 安装成功后，按 HOME 按钮回到 Homebrew Channel。

::: tip

[点击此处返回站点索引。](site-navigation)

:::
