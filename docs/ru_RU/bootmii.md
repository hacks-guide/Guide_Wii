# Резервная копия через BootMii

BootMii позволяет создавать и восстанавливать резервные копии памяти NAND.
Эта страница поможет вам создать резервную копию NAND вашей Wii и переместить её на SD-карту, которую вы можете использовать в дальнейшем.

::: warning

Вам нужна **SD-карта** для использования BootMii, но особенно для создания резервной копии NAND. Если у вас сейчас нет SD-карты, вы можете пропустить эту страницу, но НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ вернуться к этой странице позже для создания резервной копии.

:::

## Требования

- SD-карта с минимум 512 МБ свободного места (рекомендуется 1ГБ или более)

## Инструкции

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. В таком случае пропустите шаги 1 и 2.

:::

1. Включите вашу консоль.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Нажмите кнопку HOME, затем выберите "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

   ::: warning

   Если кнопка `Launch BootMii` не появляется в Homebrew Channel, [перезапустите установщик HackMii](hackmii) и установите BootMii.

   :::

   ::: warning

   If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Скачайте [этот zip архив](/assets/files/bootmii_sd_files.zip) и распакуйте его в корень SD карты, а затем повторите попытку.

   :::

4. Вы должны увидеть изображение, похожее на приведенное ниже на вашем экране:

   ![](/images/bootmii/BootMii_Main.png)

   ::: info

   Управление BootMii не возможно через Wii Remote.
   Вы должны использовать кнопки POWER и RESET на вашей консоли, или контроллер GameCube подключенный к порту 1.
   Чтобы перемещаться между параметрами, нажмите POWER. Чтобы выбрать опцию, нажмите RESET.

   :::

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

::: info

Примечание: **восстановление резервной копии NAND, как правило, является крайней мерой**. Обычно существуют способы лучше для восстановления вашей консоли после окирпичивания.

Постарайтесь [определить степень окирпичивания](bricks) и отменить действие, которое его вызвало.

Чтобы восстановить резервную копию NAND с SD-карты, следуйте инструкциям для [RestoreMii](bootmiirecover).
**Версии Wii Family Edition (Wii без портов GameCube) НЕ МОГУТ восстанавливать резервные копии NAND без аппаратных модификаций.**

:::

::: info

Два файла будет созданы в корне вашей SD-карты: `nand.bin` и `keys.bin`. `nand.bin` — это резервная копия внутренней памяти консоли, а `keys.bin` — ключи вашей консоли.

:::

## Автозагрузка

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. Должно получиться так, что вы даже не заметите что BootMii установлен в boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Сохраните изменения и выйдите.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Ваша резервная копия NAND может быть использована в эмуляторе Dolphin.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Он особенно важен для пользователей BootMii в IOS.

:::
