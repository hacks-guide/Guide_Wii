# Восстановление резервной копии BootMii (RestoreMii)

Это руководство даст инструкцию, как восстановить NAND c помощью резервной копии и BootMii. Пожалуйста, имейте в виду, что данное действие, как правило, <strong>крайная мера</strong> в попытках ремонта окирпиченной консоли, и если это не решит проблему, вам, возможно, придется обратиться за поддержкой. Если вы все ещё можете войти в BootMii, сделайте попытку войти в Homebrew Channel для того, чтобы попытаться [идентифицировать тип брика и отремонтировать консоль](bricks) другими способами.

::: info

Если у вас установлен BootMii на boot2, вам нужно запустить BootMii, перезапустив консоль. В таком случае пропустите шаги 1 и 2.

:::

::: warning

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Скачайте [этот zip архив](https://static.hackmii.com/bootmii_sd_files.zip) и распакуйте его в корень вашей SD карты, а затем повторите попытку.

:::

::: danger

Версии Wii Family Edition (Wii без портов GameCube) НЕ МОГУТ восстанавливать резервные копии NAND. Это происходит из-за отсутствия портов GameCube, которые требуется для Wii без модифицированного boo2 для ввода кода подтверждения восстановления. За дополнительной помощью обращайтесь за поддержкой.

:::

::: danger

НЕ восстанавливайте непроверенную резервную копию NAND, или копию не из вашей Wii: это может привести к ЕЩЁ БОЛЕЕ ПЛОХОМУ БРИКУ. То же самое относится к использованию неисправных SD-карт.

:::

## Требования

- Предыдущая резервная копия NAND созданная через [BootMii](bootmii)

## Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Important notes

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

## Инструкции

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Нажмите кнопку HOME, затем выберите "Launch BootMii".

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

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Нажмите на любую кнопку на консоли Wii или контролере GameCube.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Нажмите здесь, что бы вернуться к домашней странице.](site-navigation)

:::
