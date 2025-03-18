# NANDのロード(BootMii)

このページでは、BootMiiでNANDのバックアップをリストアする方法について説明します。 Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. この場合、Homebrew Channalからの起動は不要です。

:::

::: warning

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

Wii Family EditionではNANDをリストアすることはできません。 Wii Family EditionではIOS版のBootMiiでNANDをリストアするときに必要となるGCコントローラー挿入口が削除されているからです。 何か不明な点があれば、ご相談ください。

:::

::: danger

検証されていないNANDバックアップや、Wii以外からのNANDバックアップを復元しないでください。 ブリックする恐れがあります。 The same also goes for faulty SD cards.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

ゲームのセーブデータを復元したい場合は、DolphinでNANDバックアップを読み込み、ツール→全てのWiiセーブデータをエクスポートで書き出し、SDカードにコピーします。 In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Important notes

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. GCコントローラーでカーソルを移動させる場合は、十字ボタンで移動させます。 選択するには、Aを押します

## Instructions

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Press the HOME Button, then select "Launch BootMii".

    - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

3. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Wii本体もしくはGCコントローラーのいずれかのボタンを押してください。

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
