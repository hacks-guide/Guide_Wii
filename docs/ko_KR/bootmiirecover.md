# BootMii Recovery

This guide will provide instructions on how to restore a backup of your NAND with BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

BootMii를 boot2로 설치한 경우 콘솔을 재시작하여 BootMii를 시작해야 합니다. 이 경우 1단계와 2단계를 건너뜁니다.

:::

::: warning

화면이 검은색으로 유지되고 파란색 디스크 드라이브 표시등이 깜박이면 SD 카드에 BootMii 파일이 누락된 것입니다. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. For additional help, please seek support.

:::

::: danger

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same goes for using faulty SD cards.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Restoring individual data from a NAND backup

There is likely a much safer and faster way to bring individual data back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Important preliminary notes

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

## Instructions

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Press the HOME Button, then select "Launch BootMii".

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. 옵션 버튼 (톱니바퀴가 있는 아이콘) 을 선택합니다.

   ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. BootMii를 종료하려면 뒤로 버튼 (화살표가 있는 버튼) 을 누른 다음 Wii 메뉴 버튼 또는 홈브류 채널 버튼을 눌러 원하는 위치에서 종료할 수 있습니다.

   ![](/images/bootmii/BootMii_Return.png)

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[여기를 눌러 사이트 탐색으로 돌아갑니다](site-navigation)

:::
