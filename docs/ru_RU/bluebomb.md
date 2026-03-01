---
outline: false
---

# BlueBomb

BlueBomb - это эксплойт, который использует уязвимости в библиотеках Bluetooth Wii и Wii mini. Хоть это и единственный эксплойт который работает на Wii mini, BlueBomb так же может быть использован и для оригинальной Wii.

This exploit also enables recovery from certain bricks in the event of no other brick protection, such as banner bricks and (some) theme bricks.

Please read the listed important information before proceeding.

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Important Information

- If you are utilizing this guide to hack a Wii mini and need assistance, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS).
- If you are using the original revision of the Wii, you should consider finding [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.
- Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.

:::

::: danger

It is **strongly** advised against using **any** video guide in general, but especially if you are hacking a Wii mini console. Incorrect instructions have a much larger chance of **bricking** your console compared to normal.

:::

### Требования

- Компьютер с Linux
  - Виртуальная машина может сработать, но её использование не рекомендуется из-за сложности с пробросом Bluetooth. По возможности, используйте LiveUSB, как описано ниже.

  - Если у вас есть Raspberry Pi, вы можете использовать её вместо вашего устройства, так как на ней, скорее всего уже установлен Linux.

    - ARM64 Raspberry Pi's need multiarch enabled with the armhf (32bit) architecture added. Данные команды должны работать с любым дистрибутивом основанном на Debian:

    ```shell
    sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # должен вывести "ELF 32-bit"
    screen
    ```

  - Windows Subsystem for Linux или Chromebook запущенный в режиме Linux **не будут** работать, так как они не имеют прямого доступа к адаптеру Bluetooth или портам USB.

  - Если у вас нет Linux, [Ubuntu](https://ubuntu.com/download/desktop) является самым удобным вариантом и может быть запущен на компьютерах с Windows или на Mac с процессором Intel.
    - Apple Mac'и с процессором Silicon не будут работать из-за отсутствующих инструкций ARM32 в процессоре.
    - Используйте [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) если у вас 32-битное устройство.
    - Для 64-битных устройств рекомендуется использование LTS версии из-за её стабильности, но последний выпуск так же работает.

  - Вы можете [записать Live-пространство Ubuntu на USB накопитель](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) вместо установки на ваш компьютер.
- Bluetooth-адаптер.
  - Внутренний Bluetooth-адаптер будет работать.
  - Если у вас его нет, убедитесь, что тот который вы будете использовать совместим с Linux.
- USB флэш-накопитель [отформатированный в FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (англ.)
  - Это не может быть один и тот же USB-накопитель, который используется для загрузки Linux.
- [Установщик HackMii v1.2](https://bootmii.org/download/)

### Инструкции

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.

   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
   - (bootmini.elf **не** будет работать даже на Wii Mini, данный файл предназначен для совершенно других целей и не связан с тем, что вы делаете. Используйте boot.elf во всех случаях).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Вставьте флэш-накопитель обратно в вашу консоль.
   - У Wii mini USB-порт находится на задней стороне.
   - Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).

3. Включите вашу консоль.

4. Перейдите в `Wii Settings` (Параметры Wii).

5. Обратите внимание на букву рядом с системной версией в правом верхнем углу.

   - Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения соответствующих инструкций.

   ![](/images/wii/SystemMenuVersion.png)

6. Выключите вашу консоль.

7. Запустите ваш дистрибутив Linux и убедитесь, что вы подключены к Интернету.

8. Откройте терминал и выполните следующие команды:

   ```shell
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

9. После этого помощник загрузит необходимые файлы и запросит информацию о вашей консоли.

   ![](/images/exploits/bluebomb/console-type.png)

   - Если вы выбрали Wii mini, вас попросят предоставить регион системного меню вашей консоли. Это можно определить по последней букве версии системного меню (`U` для **США** и `E` для **PAL**).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - Если вы выбрали обычную Wii, вас попросят предоставить версию системного меню (ту что вы определили в шаге 4).

   ![](/images/exploits/bluebomb/wii-options.png)

10. Включите вашу консоль.
    - **Не подключайте** контроллеры Wii (Wii Remote).

11. Введите `yes` в скрипт, чтобы продолжить, если вы ещё этого не сделали, и убедитесь, что скрипт выводит `Waiting to accept`.

12. Нажимайте кнопку синхронизации (Sync), пока терминал не отобразит строку `got connection handle`.

    - Вам может понадобиться несколько попыток.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. Если эксплойт выполнился успешно, то вы должны увидеть подобный экран, после чего загрузится установщик HackMii.

    - Вы можете выключить ваш компьютер с загруженным Linux, если вы не планируете дальше его использовать.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Перейти к установщику HackMii](hbc)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Important Information

- If you are utilizing this guide to hack a Wii mini and need assistance, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS).
- If you are using the original revision of the Wii, you should consider finding [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.
- Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.
- Если вы получили ошибку `Exception 0700 occurred!` или что-то подобное, попробуйте запустить эксплойт снова. Если это продолжается, присоединитесь к Discord серверу [Wii mini Hacking](https://discord.gg/6ryxnkS) за помощью.

:::

::: danger

It is **strongly** advised against using **any** video guide in general, but especially if you are hacking a Wii mini console. Incorrect instructions have a much larger chance of **bricking** your console compared to normal.

:::

### Требования

- Raspberry Pi Pico W 1/2 или ESP32 с поддержкой BR/EDR (Classic).
- Флэш-накопитель [отформатированный в FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (англ.)
- [Установщик HackMii](https://bootmii.org/download/)

::: info

Обычная Raspberry Pi Pico не будет работать. Вам нужна беспроводная модель. Кроме того, ESP32 с контроллером, который поддерживает только BLE (Bluetooth Low Energy) не будет работать.

:::

### Инструкции

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.

   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew приложения которые вы хотите использовать в /apps/)
   - (bootmini.elf **не будет** работать даже на Wii mini, его назначение совершенно другое и не связано с этим руководством. Используйте boot.elf во всех случаях).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Вставьте флэш-накопитель обратно в вашу консоль.
   - У Wii mini USB-порт находится на задней стороне.
   - Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).

3. Включите вашу консоль.

4. Перейдите в `Wii Settings` (Параметры Wii).

5. Обратите внимание на букву рядом с системной версией в правом верхнем углу.

   - Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения соответствующих инструкций.

   ![](/images/wii/SystemMenuVersion.png)

6. Выключите вашу консоль.

#### Raspberry Pi Pico W

1. Скачайте последние [скомпилированные библиотеки](https://github.com/GaryOderNichts/bluebomb_micro/releases) со страницы "Releases", и распакуйте их на ваш ПК.

   - Выберите подходящие файлы для вашего устройства. `bluebomb_micro_pico2_w_версия` предназначен для Pico 2 W, а `bluebomb_micro_pico_w_версия` для Pico 1 W.

   ![](/images/exploits/bluebomb/pico-download.png)

2. Подключите вашу Pico W к ПК, удерживая кнопку `BOOTSEL`. Теперь ваш Pico должен отображаться в качестве диска на вашем компьютере.

   ![](/images/exploits/bluebomb/pico-button.jpg)
   ![](/images/exploits/bluebomb/pico-drive.png)

3. Разархивируйте скачанный архив и скопируйте на диск файл, который соответствует вашей Wii или Wii mini.

   - Если у вас европейская Wii с версией 4.3, вы должны скопировать `bluebomb_WII_SM4_3E.uf2`, или если у вас европейская Wii mini, вы должны скопировать `bluebomb_MINI_SM_PAL.uf2`, и так далее...

   ![](/images/exploits/bluebomb/pico-files.png)

4. Диск должен отключиться и начать мигать зеленым светодиодом. Это значит что ваша Pico W готова - вы можете отсоединить устройство от компьютера.

   ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. Установите последнюю [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Соберите бинарник [из исходника](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Запишите бинарник](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) на ваш ESP32.
4. Ваше устройство готово. Вы можете извлечь устройство из вашего компьютера.

### Выполнение эксплоита

1. Подключите устройство обратно к вашему ПК.
2. Включите вашу консоль.
   - **Не подключайте** контроллеры Wii (Wii Remote).
3. Нажимайте кнопку синхронизации (Sync) до тех пор, пока светодиод Pico W не начнет быстро мигать, в этот момент начнется загрузка экплойта.
   - Вам может понадобиться несколько попыток.
4. Если эксплойт выполнился успешно, то вы должны увидеть подобный экран, после чего загрузится установщик HackMii.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Перейти к установщику HackMii](hbc)

:::

::::

:::::
