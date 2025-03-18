# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. 它在 Wii 菜单之前加载（因此得名）。 The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

## 需要

- 一张SD卡或移动硬盘/U 盘
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

### Optional Requirements for vWii (highly recommended)

- 一张SD卡
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
    - [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

## 步骤

### Section I - Prep Work

1. 关闭 Wii。
2. Insert your SD card or USB drive into your computer.
3. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
4. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
5. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
6. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 CleanRip。

### 第二部分 - 安装 Priiloader

1. Power on your console.

2. 启动 Wii 上的 Homebrew Channel。

3. Launch Priiloader Installer from the list of homebrew.

    ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. 按 Wii 遥控器的 + 按钮或 GameCube 手柄的 A 按钮。

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

5. 按 A 回到 Homebrew Channel。

### 第三部分 - 进入 Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
2. Priiloader 菜单

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

- 打开 Wii 的同时按住 RESET。
    - Wii Only
- 打开主机的同时按住 USB 键盘上的 ESC 键。
    - Wii, vWii and Mini
- Run the "Load Priiloader" tool from the HBC
    - Wii, vWii and Mini
- 立即将 Wii 菜单加载到数据管理中。
    - vWii Only

### 配置 Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

    ![](/images/priiloader/menu_hacks.png)

    ::: warning

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time.

    Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

    :::

2. For the following options, enable the options according to your console:
    - Wii:
        - If you are using 480p mode: `480p graphics fix in the system menu`
        - Block Disc Updates
        - Block Online Updates
        - If you are NOT using a CRT display: `Remove Deflicker`
    - vWii:
        - Block Online Updates
        - Wii System Settings via Options Button
        - If you are NOT using a CRT display: `Remove Deflicker`
    - Wii mini:
        - Block Disc Updates
        - If you are NOT using a CRT display: `Remove Deflicker`

3. Scroll down to `save settings` and press A.

4. Press `B` to return to the main menu.

::: info

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.

:::

::: info

[View the Brick Prevention Guidelines](bricks#brick-prevention)

These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.

:::

## Next Steps

::: tip

Continue to [cIOS](cios)

This guide provides steps on how to get a basic set of cIOS installed on your console, enabling functionality on apps like USB loaders.

:::