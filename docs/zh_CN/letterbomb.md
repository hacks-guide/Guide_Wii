# 捐赠

LetterBomb是Wii的一种漏洞，它是使用Wii留言板触发的。

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.

:::

::: warning

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own! Use your own!

:::

## 需要

- An SD card formatted as FAT32 that is 32GB or less
- 一台Wii，系统版本为4.3。
- A Windows/macOS/Linux computer with an Internet connection

## 步骤

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Also, ensure that you are on System Menu version 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. 请访问 <a href="https://please.hackmii.com/">please.hackmii.com</a>，输入您的 Wii 的 MAC 地址和区域，确保已勾选 <code>Bundle the HackMii Installer for me!</code> ，然后剪断其中一根电线。

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Cut either wire.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. 将 SD 卡插入你的电脑。

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. 取出 SD 卡并将其插入 Wii 中。
    - 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。

13. 取出 SD 卡并将其插入 Wii 中。

14. 在 Wii 上，回到 Wii 菜单，然后打开 Wii 留言板。

15. Open the red letter with a bomb.
    - 请确保 Wii 的日期正确，否则您可能找不到信。
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。
    - 如果 Wii 在点击信后卡住，可能是在下载时选择了错误的区域。 重新进行第 2 步，并选择正确的区域。
    - If all is correct and there is freezing, keep on trying until it works.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
