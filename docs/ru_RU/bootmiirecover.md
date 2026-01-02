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

НЕ восстанавливайте непроверенную резервную копию NAND, или копию не из вашей Wii: это может привести к ЕЩЁ БОЛЕЕ ХУДШЕМУ ИСХОДУ. То же самое относится к использованию неисправных SD-карт.

:::

## Требования

- Предыдущая резервная копия NAND созданная через [BootMii](bootmii)

## Восстановление индивидуальных данных из NAND-бэкапа

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

Например, если вам нужно восстановить данные из доски сообщений Wii, используйте Dolphin для импорта вашего NAND-бэкапа. В Dolphin, перейдите по пути `Файл -> Открыть папку пользователя` (File -> Open User Folder), и найдите 'Wii/title/00000001/00000002/data/cdb.vff', скопируйте этот файл на вашу SD-карту, и используйте [WiiXplorer](https://oscwii.org/library/app/wiixplorer) чтобы восстановить его в вашу Wii.

Если вы хотите восстановить сохранения игры, используйте Dolphin для импорта вашего NAND-бэкапа, перейдите по пути `Инструменты - Экспортировать все сохранения Wii` (Tools -> Export All Wii Saves) для экспорта всех ваших сохранений на вашу SD-карту. Используйте Data Management для перемещения сохранений на вашу Wii.

## Important notes

- Если вы не сделали ничего, что могло бы окирпичить вашу консоль (или же вы просто включаете свою Wii после долгого простоя), тогда, вероятно, у вас [Wi-Fi брик](bricks#wi-fi-brick).

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. Для навигации с контроллером GameCube, нажимайте влево/вправо на крестовине контроллера GameCube. Для выбора опции нажмите A.

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

::: info

Если вы применяете NAND-бэкап для того, чтобы разкирпичить вашу консоль и проблема не была решена, обратитесь к [странице о бриках](bricks).

:::

::: tip

[Нажмите здесь, что бы вернуться к домашней странице.](site-navigation)

:::
