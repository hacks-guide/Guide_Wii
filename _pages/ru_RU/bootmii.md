---
title: "Резервная копия через BootMii"
---

{% include toc title="Оглавление" %}

BootMii позволяет создавать и восстанавливать резервные копии памяти NAND. Эта страница поможет вам создать резервную копию NAND вашей Wii и переместить её на SD-карту, которую вы можете использовать в дальнейшем.

Вам нужна **SD карта** для использования BootMii вообще, но особенно для создания резервной копии NAND. Если у вас сейчас нет SD-карты, вы можете пропустить эту страницу, но НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ вернуться к этой странице позже для создания резервной копии.
{: .notice--warning}

### Требования

* SD-карта с 512 МБ свободного места минимум (рекомендуется иметь 1 ГБ)

### Инструкции

Если у вас установлен BootMii на boot 2, вам нужно запустить BootMii, перезапустив консоль. В таком случае пропустите шаги 1 и 2.
{: .notice--info}

1. Включите вашу консоль.
1. Запустите канал Homebrew (Homebrew Channel).
1. Нажмите кнопку HOME, затем выберите "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.
    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
    {: .notice--warning}

1. Вы должны увидеть изображение, похожее на приведенное ниже на вашем экране:

    ![](/images/bootmii/BootMii_Main.png)

    Управление BootMii не возможно через Wii Remote. Вы должны использовать кнопки POWER и RESET на вашей консоли, или контроллер GameCube подключенный к порту 1. Чтобы перемещаться между параметрами, нажмите POWER. Чтобы выбрать опцию, нажмите RESET.
    {: .notice--info}

1. Выберите кнопку «Options» (значок с шестерёнками).

    ![](/images/bootmii/BootMii_Gears.png)

1. Нажмите первую кнопку слева.

    ![](/images/bootmii/BootMii_Backup.png)

1. Процесс резервного копирования NAND будет запущен. Вы можете увидеть прогресс на экране.
    + "Bad Blocks (плохие блоки)" являются нормальными, и в основном происходят с фабрики из-за биннинга NAND. Не волнуйтесь, если вы их увидите на резервной копии NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. После этого шага, BootMii проверит резервную копию на ошибки. В идеале, все блоки должны стать зелеными после процесса проверки.
    + Если у вас есть заводские плохие блоки с "некорректными страницами (Uncorrectable page)", эти блоки могут не пройти проверку. Если все исправные блоки успешно проверены, все должно быть в порядке.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Нажмите кнопку назад (та, что со стрелкой), затем нажмите кнопку меню Wii (Wii Menu) или канала Homebrew (Homebrew Channel) для выхода из BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Примечание: **восстановление резервной копии NAND, как правило, является крайней мерой**. Существуют более хорошие способы для восстановления консоли после окирпичивания.
Постарайтесь [определить степень брика](bricks) и отменить действие, которое его вызвало.
Чтобы восстановить резервную копию NAND с SD-карты, следуйте инструкциям для [RestoreMii](bootmiirecover). **Версии Wii Family Edition (Wii без портов GameCube) НЕ МОГУТ восстанавливать резервные копии NAND без аппаратных модификаций.**
</div>

Два файла будет созданы в корне вашей SD-карты: `nand.bin` и `keys.bin`. `nand.bin` — это резервная копия внутренней памяти консоли, а `keys.bin` — ключи вашей консоли.
{: .notice--info}

### Автозагрузка

Если вы смогли установить BootMii в качестве boot2, но не хотите загружать BootMii при каждом включении Wii, у вас есть возможность установить его на автозагрузку в системном меню. Должно получиться так, что вы даже не заметите что BootMii установлен в boot2.

1. Откройте `sd:/bootmii/bootmii.ini` через текстовый редактор, например, блокнот.
1. Измените `#AUTOBOOT=SYSMENU` на `AUTOBOOT=SYSMENU` путем удаления символа `#`.
1. Затем замените `#BOOTDELAY=5` на `BOOTDELAY=1` путем удаления символа `#` и заменой цифры `5` на `1`.
1. Сохраните изменения и выйдите.

Вы, также, можете использовать homebrew-приложение [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) на Wii для изменения этих настроек.
{: .notice--info}

### Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or developement release of Dolphin Emulator from the [Dolphin Webiste](https://dolphin-emu.org/) and install it to your device.
1. Open dolphin emulator
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select open.

[Продолжить к установке Priiloader](priiloader)<br> Priiloader добавляет второй уровень защиты от окирпичивания, и его установка настоятельно рекомендуется даже если BootMii установлен в качестве boot2. Он особенно важен для пользователей BootMii в IOS.
{: .notice--info}
