# GameCube 存档

这是如何管理 GameCube 存档的完整指南。

::: info

在 Family Edition Wii 或 Wii Mini 上使用任何 GameCube 外设都需要焊接 GameCube 端口和/或记忆卡插槽。

:::

## 上传单个存档（.gci 文件）到物理记忆卡

### 需要

- 拥有 GameCube 端口的 Wii
- SD 卡或 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### 步骤

#### 下载

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### 恢复

1. 将物理记忆卡插入插槽 A 或插槽 B。

2. 选择您希望从中恢复的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. 在 GCMM 中，按 GameCube 手柄的 X 或 Wii 遥控器的 +。

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. 选择您想要恢复的存档。 如果您有多个要恢复的存档，可以按 GameCube 手柄的 R 或 Wii 遥控器的 1 以恢复所有存档。

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. 当恢复完成后，按任意按钮继续。

## 将物理记忆卡的存档（.gci 文件）备份到 SD 或 USB

### 需要

- 拥有 GameCube 端口的 Wii
- SD 卡或 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 步骤

#### 下载

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### 备份

1. 将物理记忆卡插入插槽 A 或插槽 B。

2. 选择要备份到的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. 在 GCMM 中，按 GameCube 手柄的 Y 或 Wii 遥控器的 -。

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. 选择您想要备份的存档。 如果您有多个要备份的存档，可以按 GameCube 手柄的 R 或 Wii 遥控器的 1 以备份所有存档。

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. 当备份完成后，按任意按钮继续。

## 将物理记忆卡备份到模拟记忆卡（.raw 文件）中

### 需要

- 拥有 GameCube 端口的 Wii
- SD 卡或 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 步骤

#### 下载

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### Dumping the .raw

1. 将记忆卡插入插槽 A 或插槽 B。

2. 选择要转储到的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. 同时按下 GameCube 手柄的 L 和 Y 或 Wii 遥控器的 B 和 - 以备份到 .raw 文件，并选择您记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. 当转储完成后，按任意按钮继续。 It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## 将模拟存档恢复到物理记忆卡

### 需要

- 拥有 GameCube 端口的 Wii
- SD 卡或 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 步骤

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. 将记忆卡插入插槽 A 或插槽 B。

4. 选择您希望从中恢复的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. 同时按 GameCube 手柄的 L 和 X 或 Wii 遥控器的 B 和 +。

6. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. 它应该将 .raw 文件恢复到您的记忆卡中。 当恢复完成后，按任意按钮继续。

## 在 2 张物理记忆卡中传输存档

### 需要

- 拥有 GameCube 端口的 Wii
- 至少 2 张物理记忆卡

### 步骤

1. 将 2 张记忆卡插入 Wii。

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg)

    ![](/images/homebrew/gcsaves/settings.jpg)

    ![](/images/homebrew/gcsaves/data-management.jpg)

    ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[点击此处返回站点索引。](site-navigation)

:::
