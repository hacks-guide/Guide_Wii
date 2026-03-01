# Резервная копия через BootMii

BootMii позволяет создавать и восстанавливать резервные копии памяти NAND. Эта страница поможет вам создать резервную копию NAND вашей Wii и переместить её на SD-карту, которую вы можете использовать в дальнейшем.

Please read the below information before proceeding further.

:::details Important Information

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` — это резервная копия внутренней памяти консоли, а `keys.bin` — ключи вашей консоли.

- If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. В таком случае пропустите шаги 1 и 2.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis and Wii minis CANNOT restore NAND backups. Это происходит из-за отсутствия портов GameCube, которые требуется для Wii без модифицированного boo2 для ввода кода подтверждения восстановления.

:::

::: danger

**Important Warnings**

- Вам нужна **SD-карта** для использования BootMii, но особенно для создания резервной копии NAND. Если у вас сейчас нет SD-карты, вы можете пропустить эту страницу, но НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ вернуться к этой странице позже для создания резервной копии.

- Если кнопка `Launch BootMii` не появляется в Homebrew Channel, [перезапустите установщик HackMii](hackmii) и установите BootMii.

- If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Скачайте [этот zip архив](/assets/files/bootmii_sd_files.zip) и распакуйте его в корень SD карты, а затем повторите попытку.

:::

## Требования

- SD-карта с минимум 512 МБ свободного места (рекомендуется 1ГБ или более)

## Инструкции

1. Включите вашу консоль.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Нажмите кнопку HOME, затем выберите "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Вы должны увидеть изображение, похожее на приведенное ниже на вашем экране:

   ![](/images/bootmii/BootMii_Main.png)

5. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

6. Нажмите первую кнопку слева.

   ![](/images/bootmii/BootMii_Backup.png)

7. Процесс резервного копирования NAND будет запущен. Вы можете увидеть прогресс на экране.

   - "Bad Blocks (плохие блоки)" являются нормальными, и в основном происходят с фабрики из-за биннинга NAND. Не волнуйтесь, если вы их увидите на резервной копии NAND.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. После этого шага, BootMii проверит резервную копию на ошибки. В идеале, все блоки должны стать зелеными после процесса проверки.

   - Если у вас есть заводские плохие блоки с "некорректными страницами (Uncorrectable page)", эти блоки могут не пройти проверку. До тех пор, пока все исправные блоки успешно проверены, все должно быть в порядке.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

## Автозагрузка

Если вы смогли установить BootMii в качестве boot2, но не хотите загружать BootMii при каждом включении Wii, у вас есть возможность настроить автозагрузку в системное меню. Должно получиться так, что вы даже не заметите что BootMii установлен в boot2.

1. Откройте `SD:/bootmii/bootmii.init` через текстовый редактор, например, блокнот.
2. Замените `#AUTOBOOT=SYSMENU` на `AUTOBOOT=SYSMENU` путем удаления символа `#`.
3. Затем замените `#BOOTDELAY=5` на `BOOTDELAY=1` путем удаления символа `#` и заменой цифры `5` на `1`.
4. Сохраните изменения и выйдите.

::: info

Вы также можете использовать [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) на Wii для изменения этих настроек.

:::

## Загрузка резервной копии NAND в эмулятор Dolphin

Ваша резервная копия NAND может быть использована в эмуляторе Dolphin. This is completely optional.

1. Скачайте последний бета или dev-релиз эмулятора Dolphin с [веб-сайта Dolphin](https://dolphin-emu.org/) и установите его на ваше устройство.
2. Откройте эмулятор Dolphin.
3. Нажмите на вкладку `Tools`, прокрутите вниз до `Manage NAND`, затем выберите `Import BootMii NAND backup...`.
4. Найдите `nand.bin` в корне вашей SD-карты и нажмите Open.
5. Если эмулятор требует файл `keys.bin`, найдите его в корне вашей SD-карты и нажмите Open.

---

::: tip

[Перейти к установке Priiloader](priiloader)

Priiloader добавляет второй уровень защиты от окирпичивания. Priiloader настоятельно рекомендуется к установке даже если BootMii установлен в boot2. Он особенно важен для пользователей BootMii в IOS.

:::
