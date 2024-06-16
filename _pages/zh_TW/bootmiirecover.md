---
title: "透過 BootMii 進行還原 (RestoreMii)"
---

{% include toc title="條目內容" %}

This guide will provide instructions on how to restore a backup of your NAND with BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

如果您的 BootMii 安裝於 boot2 當中，則需要通過重新啟動主機來啟動 BootMii。 如果是這種情況，請跳過步驟1和2。
{: .notice--info}

如果螢幕保持黑屏且光碟機的指示燈閃爍，那代表您的 SD 卡中缺少 BootMii 所需的檔案。 Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

家庭版 Wii（沒有 GameCube 控制器端口的 Wii）無法還原 NAND 備份。 This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support. For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same goes for using faulty SD cards. The same goes for using faulty SD cards.
{: .notice--danger}

### 必備項目

* 早期透過 [BootMii](https://wii.guide/bootmii) 建立的 NAND 備份

### 想要從 NAND 備份中還原個別檔案？

通常可以用些更安全、更快速的方法把這些資料還原至您的 Wii 當中，通常會需要使用到 Dolphin Emulator。

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. 舉例來說，如果您想還原 Wii 留言板資料，請透過 Dolphin 匯入您的 NAND 備份，找到`Wii/title/00000001/00000002/data/cdb.vff`，將其複製到您的 SD 卡為 `cdbackup.vff`，並使用 [cdbackup](https://oscwii.org/library/app/cdbackup) 來還原該檔案。 舉例來說，如果您想還原 Wii 留言板資料，請透過 Dolphin 匯入您的 NAND 備份，找到`Wii/title/00000001/00000002/data/cdb.vff`，將其複製到您的 SD 卡為 `cdbackup.vff`，並使用 [cdbackup](https://oscwii.org/library/app/cdbackup) 來還原該檔案。

如果您想還原遊戲存檔，請透過 Dolphin 匯入您的 NAND 備份，使用 `Tools > Export All Wii Saves`將所有存檔匯出至 SD 卡中，並透過 『資料管理』（Data Management）功能將其移動到 Wii 中。

### Important preliminary notes

+ 如果您沒有特別做任何事情卻突然變磚（或者您在很長一段時間後啟動 Wii），那麼可能的主因是 [Wi-Fi 變磚](bricks#wi-fi-brick)。

+ 如果您的 BootMii 不是在 boot2 當中的話，RestoreMii 將提示您透過 GameCube 控制器輸入 Konami 代碼。

+ 您必須使用主機上的 POWER（右方向鍵） 和 RESET （Select）按鈕，或者將 GameCube 控制器插入端口 1 來控制 BootMii。 若要使用 GameCube 控制器進行操作，請使用 GameCube 控制器的左右方向鍵。 若要選取，請按 A 。

### Instructions

1. 啟動 Homebrew Channel。
1. 按下Home按鈕，選擇『Launch BootMii』。
    + 如果您能夠進入 BootMii，請進入 Homebrew Channel，並盡可能的[找出變磚的主因](bricks)並復原先前動作。

    ![](/images/bootmii/BootMii_HBC.png)

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. 選擇『RestoreMii』按鈕。

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. 透過您的 GameCube 控制器輸入 Konami 代碼：↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. 還原完畢後，您將會看到 `I HAZ SUCCESS!`，或是 `I HAZ FAIL` 的訊息。 按下 Wii 或 GameCube 控制器的任意按鈕繼續。

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. 若要退出 BootMii，請按返回按鈕（帶箭頭的那個），然後您可以按 Wii 選單按鈕或 Homebrew 頻道按鈕退出您想要的地方。

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
