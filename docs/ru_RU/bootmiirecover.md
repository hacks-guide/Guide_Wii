# Восстановление резервной копии BootMii (RestoreMii)

Это руководство даст инструкцию, как восстановить NAND c помощью резервной копии и BootMii.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. Это происходит из-за отсутствия портов GameCube, которые требуется для Wii без модифицированного boo2 для ввода кода подтверждения восстановления. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Если у вас установлен BootMii на boot2, вам нужно запустить BootMii, перезапустив консоль. В таком случае пропустите шаги 1 и 2.

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller. This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Скачайте [этот zip архив](https://static.hackmii.com/bootmii_sd_files.zip) и распакуйте его в корень вашей SD карты, а затем повторите попытку.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## Восстановление индивидуальных данных из NAND-бэкапа

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

Например, если вам нужно восстановить данные из доски сообщений Wii, используйте Dolphin для импорта вашего NAND-бэкапа. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Требования

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## Инструкции

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Нажмите кнопку HOME, затем выберите "Launch BootMii".

   - Если к Homebrew Channel нет доступа, но у вас установлен Priiloader, вы можете перейти в Priiloader при старте вашей консоли и выбрать `BootMii IOS` для загрузки BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

   ![](/images/bootmii/BootMii_Restore.png)

5. `BootMii` проинформирует вас о том, что он работает в режиме симулятора (SIMULATION mode), вы можете нажать A или Reset чтобы продолжить.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii начнет процесс восстановления в режиме симулятора, подробно выводя что будет стерто и перезаписано. Как только процесс закончится, у вас есть последний шанс выйти из режима восстановления. Для начала процесса нажмите START или кнопку открытия дисковода (Eject).

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. После того как процесс восстановления окончится, вы должны увидеть текст `I HAZ SUCCESS!` в случае успешного восстановления, или `I HAZ FAIL` в случае неудачи. Нажмите на любую кнопку на консоли Wii или контролере GameCube.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Нажмите здесь, что бы вернуться к домашней странице.](site-navigation)

:::
