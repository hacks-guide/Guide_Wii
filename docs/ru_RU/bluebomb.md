---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Технические детали (опционально)

BlueBomb - это эксплойт, который использует уязвимости в библиотеках Bluetooth Wii и Wii mini. Хоть это и единственный эксплойт который работает на Wii mini, BlueBomb так же может быть использован и для оригинальной Wii.

Этот эксплоит также позволяет восстановить консоль после некоторых бриков, таких, как баннер брики и (некоторые) брики тем консоли.

:::

::: warning

**Настоятельно** рекомендуется не следовать **любым** видео-руководствам по моддингу вашей консоли Wii mini, так как есть очень большой шанс ее **окирпичить**.

:::

::: info

Если вам нужна помощь, пожалуйста, присоединяйтесь к Discord-серверу [Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)

:::

::: info

Если вы используете оригинальную ревизию Wii, вы, вероятно, можете использовать [другой эксплойт](get-started), так как существуют более простые способы запустить установщик HackMii. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.

:::

::: info

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.

:::

### Требования

- Компьютер с Linux
  - Виртуальная машина может сработать, но её использование не рекомендуется из-за сложности с пробросом Bluetooth. По возможности, используйте LiveUSB, как описано ниже.
  - Если у вас есть Raspberry Pi, вы можете использовать её вместо вашего устройства, так как на ней, скорее всего уже установлен Linux.
  - Windows Subsystem for Linux или Chromebook запущенный в режиме Linux **не будут** работать, так как они не имеют прямого доступа к адаптеру Bluetooth или портам USB.
  - Если у вас нет Linux, [Ubuntu](https://ubuntu.com/download/desktop) является самым простым вариантом, и он может быть запущен на компьютерах с Windows или Mac.
    - На 32-битных устройствах требуется использовать [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Для 64-битных устройств рекомендуется использование LTS версии из-за её стабильности, но последний выпуск так же работает.
  - Вы можете [записать Live-пространство Ubuntu на USB накопитель](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) вместо установки на ваш компьютер.
- Bluetooth-адаптер.
  - Внутренний Bluetooth-адаптер будет работать.
  - Если у вас его нет, убедитесь, что тот который вы будете использовать совместим с Linux.
- USB-накопитель отформатированный в FAT32.
  - Это не может быть один и тот же USB-накопитель, который используется для загрузки Linux.
- [Установщик HackMii v1.2](https://bootmii.org/download/)

### Инструкции

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.

   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
   - (bootmini.elf **не** будет работать даже на Wii mini, его назначение совершенно другое и не связано с этим руководством.  Используйте boot.elf во всех случаях).

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

8. Open the Terminal, and run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

9. После этого помощник загрузит необходимые файлы и запросит информацию о вашей консоли.

   ![](/images/exploits/bluebomb/console-type.png)

   - Если вы выбрали Wii mini, вас попросят предоставить регион системного меню вашей консоли. Это можно определить по последней букве версии системного меню (`U` для **США** и `E` для **PAL**).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - If you have selected a Wii you will be asked to provide your Wii Menu version (what you determined in step 4).

   ![](/images/exploits/bluebomb/wii-options.png)

10. Включите вашу консоль.
    - **Не** подключайте никакие контроллеры Wii (Wii Remote).

11. Type `yes` in the script to proceed if you have not already done so, and make sure that `Waiting to accept` is displaying.

12. Нажимайте кнопку синхронизации (Sync), пока терминал не отобразит строку `got connection handle`.

    - Вам может понадобиться несколько попыток.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

    - Вы можете выключить ваш компьютер с загруженным Linux, если вы не планируете дальше его использовать.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: info

Если используется Wii: [Перейти к установке Homebrew Channel и BootMii](hbc)

:::

::: info

Если используется Wii mini: [Перейти к установке Homebrew Channel](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Технические детали (опционально)

Этот эксплоит также позволяет восстановить консоль после некоторых бриков, таких, как баннер брики и (некоторые) брики тем консоли.

:::

::: warning

**Настоятельно** рекомендуется не следовать **любым** видео-руководствам по моддингу вашей консоли Wii mini, так как есть очень большой шанс ее **окирпичить**.

:::

::: info

Если вам нужна помощь, пожалуйста, присоединяйтесь к Discord-серверу [Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)

:::

::: info

Если вы используете оригинальную ревизию Wii, вы, вероятно, можете использовать [другой эксплойт](get-started), так как существуют более простые способы запустить установщик HackMii. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.

:::

::: info

Make sure that the microcontroller is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Требования

- A Raspberry Pi Pico W 1/2 or an ESP32 with BR/EDR (Classic) support.
- USB-накопитель отформатированный в FAT32.
- [Установщик HackMii](https://bootmii.org/download/)

::: info

A normal Raspberry Pi Pico will not work. Вам нужна беспроводная модель. Кроме того, ESP32 с контроллером только BLE тоже не будет работать.

:::

### Инструкции

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.

   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew приложения которые вы хотите использовать в /apps/)
   - (bootmini.elf **не** будет работать даже на Wii mini, его назначение совершенно другое и не связано с этим руководством.  Используйте boot.elf во всех случаях).

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

1. Download the latest [Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.

   - Select the appropriate binaries for your device. `bluebomb_micro_pico2_w_version` is for the Pico 2 W, while `bluebomb_micro_pico_w_version` is for the Pico 1 W.

   ![](/images/exploits/bluebomb/pico-download.png)

2. Подключите ваш Pico W к ПК, удерживая кнопку `BOOTSEL`. Теперь ваш Pico должен отображаться в качестве диска на вашем компьютере.

   ![](/images/exploits/bluebomb/pico-button.jpg)
   ![](/images/exploits/bluebomb/pico-drive.png)

3. Unzip the downloaded archive and copy the file which matches your Wii or Wii mini to the drive.

   - If you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...

   ![](/images/exploits/bluebomb/pico-files.png)

4. The drive should disconnect and begin to flash a green LED. This means your Pico W is ready - you may unplug the device from your PC.

   ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. Установите последнюю [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Соберите бинарник [из исходника](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Запишите бинарник](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) на ваш ESP32.
4. Ваше устройство готово. Вы можете отключить устройство от вашего компьютера.

### Выполнение эксплоита

1. Подключите устройство обратно к вашему ПК.
2. Включите вашу консоль.
   - **Не** подключайте никакие контроллеры Wii (Wii Remote).
3. Press the Sync button repeatedly until the Pico W LED begins to rapidly flash, at which point it will start uploading the exploit.
   - Вам может понадобиться несколько попыток.
4. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

If you get an error `Exception 0700 occurred!` or similar, try the exploit again. If this continues to happen, join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) for support.

:::

::: tip

Если используется Wii: [Перейти к установке Homebrew Channel и BootMii](hbc)

:::

::: tip

Если используется Wii mini: [Перейти к установке Homebrew Channel](hbc-mini)

:::

::::

:::::
