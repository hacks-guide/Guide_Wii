# 重新启动 HackMii Installer

本指南适用于需要重新启动 HackMii Installer 以更新/重新安装 the Homebrew Channel 或 BootMii 的情况。

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## 通过 Homebrew Channel 重新启动

### 需要

- Homebrew Channel
- 格式化为 FAT32/MS-DOS 的 SD 卡或 U 盘
- [HackMii Installer v1.2](https://bootmii.org/download/)

### 步骤

1. 将 SD/USB 插入你的电脑。
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - 如果文件夹不存在，请创建它。
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - 该应用程序将没有图标。

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## 通过 Priiloader 重新启动

### 需要

- 安装了 Priiloader（或 Preloader）的 Wii
- 格式化为 FAT32/MS-DOS 的 SD 卡或 U 盘
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

要检查您的 Wii 是否安装了 Priiloader，请在开机时按住 RESET 按钮。

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### 步骤

1. 将 SD/USB 插入你的电脑。
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. 将 SD/USB 插入 Wii。
4. 通过在打开 Wii 时按住 RESET 按钮进入 Priiloader。
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
