---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Хоть это и единственный эксплоит который работает с Wii mini, BlueBomb может работать и с обычной Wii.

Так же, этот эксплоит может помочь восстановить консоль после бриков, таких, как баннер брики и (некоторые) брики тем.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.

:::

::: info

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.

:::

### Требования

- Компьютер с Linux
  - Виртуальная машина может сработать, но её использование не рекомендуется из-за сложности с пробросом Bluetooth. По возможности, используйте LiveUSB, как описано ниже.
  - Если у вас есть Raspberry Pi, вы можете использовать её вместо вашего устройства, так как на ней, скорее всего уже установлен Linux.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Для 64-битных устройств рекомендуется использование LTS версии из-за её стабильности, но последний выпуск так же работает.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Bluetooth-адаптер.
  - Внутренний Bluetooth-адаптер будет работать.
  - Если у вас его нет, убедитесь, что тот который вы будете использовать совместим с Linux.
- USB flash диск отформатированный в FAT32.
  - Это не может быть один и тот же USB-накопитель, который используется для загрузки Linux.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Инструкции

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Используйте boot.elf во всех случаях).

2. Вставьте накопитель обратно в вашу консоль.
   - Для Wii mini USB-порт находится на задней стороне.
   - Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).

3. Включите вашу консоль.

4. Go to `Wii Settings`.

5. Обратите внимание на букву рядом с системной версией в правом верхнем углу.

   - Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения последующих инструкций.

   ![](/images/wii/SystemMenuVersion.png)

6. Выключите вашу консоль.

7. Запустите ваш Linux дистрибутив и убедитесь, что вы подключены к Интернету.

8. Откройте Терминал

9. Выполните следующие команды:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. После этого помощник загрузит необходимые файлы и запросит информацию о вашей консоли.
    - Если вы выбрали Wii mini, вам попросят предоставить ваш регион (системного меню). This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Если вы выбрали обычную Wii, вас попросят предоставить вашу версию меню Wii (То, что вы определили в шаге 4)

11. Включите вашу консоль.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Вам может понадобиться несколько попыток.

13. Если эксплоит выполнился успешно, ваше устройство загрузит установщик HackMii.
    - Вы можете выключить ваш компьютер с загруженным Linux, если вы не планируете дальше его использовать.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

Так же, этот эксплоит может помочь восстановить консоль после бриков, таких, как баннер брики и (некоторые) брики тем.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.

:::

::: info

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.

:::

### Требования

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- USB flash диск отформатированный в FAT32.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Инструкции

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Используйте boot.elf во всех случаях).

2. Вставьте накопитель обратно в вашу консоль.
   - Для Wii mini USB-порт находится на задней стороне.
   - Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).

3. Включите вашу консоль.

4. Go to `Wii Settings`.

5. Обратите внимание на букву рядом с системной версией в правом верхнем углу.

   - Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения последующих инструкций.

   ![](/images/wii/SystemMenuVersion.png)

6. Выключите вашу консоль.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Включите вашу консоль.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Вам может понадобиться несколько попыток.
4. Если эксплоит выполнился успешно, ваше устройство загрузит установщик HackMii.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
