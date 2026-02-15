# Wilbrand

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

::: info

本页列出了两种用于创建正确的 Wilbrand 漏洞的方法。

推荐使用 Wilbrand Web，因为它易用。

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### 需要

- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- 版本至少为 3.0 的 Wii

::: warning

SD cards larger than 2GB will not work on Wii Menu versions before 4.0.

:::

### 步骤

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note of the letter next to the system version, in the top-right corner of the screen.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. 请访问 <a href="https://wilbrand.donut.eu.org/">wilbrand.donut.eu.org</a>，输入您的 Wii 的 MAC 、版本、区域，确保已勾选 <code>Bundle the HackMii Installer for me!</code> ，然后剪断其中一根电线。

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Cut either wire.

   ![](/images/exploits/wilbrand/web.png)

10. 点击 "Download your .zip"。

11. 将 SD 卡插入你的电脑。

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. 取出 SD 卡并将其插入 Wii 中。
    - 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。

14. 取出 SD 卡并将其插入 Wii 中。

15. Open the Wii Message Board.

16. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    - 请确保 Wii 的日期正确，否则您可能找不到信。
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。

17. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### 需要

- 运行 Windows、MacOS 或 Linux 的 PC
- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- 版本至少为 3.0 的 Wii
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

SD cards larger than 2GB will not work on Wii Menu versions before 4.0.

:::

### 步骤

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note of the letter next to the system version, in the top-right corner of the screen.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

   ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. 将 SD 卡插入你的电脑。

8. 在解压了 Wilbrand 的文件夹中打开终端。

9. 使用您 Wii 的版本和 MAC 地址运行以下命令：

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` is the drive letter of your SD card.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` is the folder your SD card is mounted in. 这可能会因您使用的 Linux 发行版而有所不同。

     ![](/images/exploits/wilbrand/linux.png)

10. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.

11. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.

12. 取出 SD 卡并将其插入 Wii 中。
    - 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。

13. 取出 SD 卡并将其插入 Wii 中。

14. Open the Wii Message Board.

15. Open the green letter with a bomb.

    - 请确保 Wii 的日期正确，否则您可能找不到信。
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
