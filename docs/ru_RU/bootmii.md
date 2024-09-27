# Резервная копия через BootMii

BootMii позволяет создавать и восстанавливать резервные копии памяти NAND.
Эта страница поможет вам создать резервную копию NAND вашей Wii и переместить её на SD-карту, которую вы можете использовать в дальнейшем.

::: warning

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Если у вас сейчас нет SD-карты, вы можете пропустить эту страницу, но НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ вернуться к этой странице позже для создания резервной копии.

:::

## Требования

- An SD card with at least 512MB of free space

## Инструкции

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. В таком случае пропустите шаги 1 и 2.

:::

1. Включите вашу консоль.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Нажмите кнопку HOME, затем выберите "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

   ::: warning

   If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

   :::

   ::: warning

   If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

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

   - Если у вас есть заводские плохие блоки с "некорректными страницами (Uncorrectable page)", эти блоки могут не пройти проверку. As long as all non-bad blocks are successfully verified, this should be fine.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

::: info

Note: **restoring a NAND backup is usually a last resort**. Существуют более хорошие способы для восстановления консоли после окирпичивания.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

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
