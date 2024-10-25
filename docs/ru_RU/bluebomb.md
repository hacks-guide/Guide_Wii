---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Технические детали (опционально)

BlueBomb - это эксплойт, который использует уязвимости в библиотеках Bluetooth Wii и Wii mini. Although it is the only exploit that works for the Wii mini, BlueBomb can run on the original Wii as well.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

**Настоятельно** рекомендуется не следовать **любым** видео-руководствам по моддингу вашей консоли Wii mini, так как есть очень большой шанс ее **окирпичить**.

:::

::: info

Если вам нужна помощь, пожалуйста, присоединяйтесь к Discord-серверу [Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)

:::

::: info

Если вы используете оригинальную ревизию Wii, вы, вероятно, можете использовать [другой эксплойт](get-started), так как существуют более простые способы запустить установщик HackMii. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements

- A Linux machine
  - A Virtual Machine may work, but it is not recommended due to its complexity in getting Bluetooth passthrough working. If possible, please use a LiveUSB as described below.
  - If you have a Raspberry Pi, you can use that instead as it most likely has Linux installed already.
  - Windows Subsystem for Linux или Chromebook запущенный в режиме Linux **не будут** работать, так как они не имеют прямого доступа к адаптеру Bluetooth или портам USB.
  - Если у вас нет Linux, [Ubuntu](https://ubuntu.com/download/desktop) является самым простым вариантом, и он может быть запущен на компьютерах с Windows или Mac.
    - На 32-битных устройствах требуется использовать [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
  - Вы можете [записать Live-пространство Ubuntu на USB накопитель](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) вместо установки на ваш компьютер.
- A Bluetooth adapter.
  - An internal Bluetooth adapter will work.
  - If you do not have one, make sure to get one compatible with Linux.
- A USB flash drive formatted as FAT32.
  - This cannot be the same flash drive used for your Linux Machine.
- [Установщик HackMii v1.2](https://bootmii.org/download/)

### Instructions

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.
   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (bootmini.elf **не** будет работать даже на Wii mini, его назначение совершенно другое и не связано с этим руководством.  Use boot.elf in all cases).

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. Перейдите в `Wii Settings` (Параметры Wii).

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal

9. Run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. The helper will then download the required files, and ask for information about your console.
    - If you have selected a Wii mini you will be asked to provide your region. Это можно определить по последней букве версии Wii Menu (`U` для **США** и `E` для **европейских** (PAL) моделей).
    - If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)

11. Power on your console.
    - **Не** подключайте любые контроллеры Wii (Wii Remote).

12. Нажимайте кнопку синхронизации (Sync), пока терминал не отобразит строку `got connection handle`.
    - This could take numerous attempts.

13. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If you are not planning to use it later, you can now shut down your Linux distro.

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

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

**Настоятельно** рекомендуется не следовать **любым** видео-руководствам по моддингу вашей консоли Wii mini, так как есть очень большой шанс ее **окирпичить**.

:::

::: info

Если вам нужна помощь, пожалуйста, присоединяйтесь к Discord-серверу [Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)

:::

::: info

Если вы используете оригинальную ревизию Wii, вы, вероятно, можете использовать [другой эксплойт](get-started), так как существуют более простые способы запустить установщик HackMii. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements

- Raspberry Pi Pico W или ESP32 с поддержкой BR/EDR (Classic).
- A USB flash drive formatted as FAT32.
- [Установщик HackMii](https://bootmii.org/download/)

::: info

Обычная Raspberry Pi Pico не будет работать. Вам нужна беспроводная модель. Кроме того, ESP32 с контроллером только BLE тоже не будет работать.

:::

### Instructions

1. Скопируйте `boot.elf` из backmii_installer_v1.2 `.zip` в корень вашего USB-накопителя.
   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (bootmini.elf **не** будет работать даже на Wii mini, его назначение совершенно другое и не связано с этим руководством.  Use boot.elf in all cases).

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. Перейдите в `Wii Settings` (Параметры Wii).

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

#### Rasperry Pi Pico W

1. Скачайте [последние скомпилированные библиотеки](https://github.com/GaryOderNichts/bluebomb_micro/releases) со страницы "Releases", и распакуйте их на ваш ПК.
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
2. Power on your console.
   - **Не** подключайте любые контроллеры Wii (Wii Remote).
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - This could take numerous attempts.
4. If the exploit was successful, your device will have loaded the HackMii Installer.

::: tip

Если используется Wii: [Перейти к установке Homebrew Channel и BootMii](hbc)

:::

::: tip

Если используется Wii mini: [Перейти к установке Homebrew Channel](hbc-mini)

:::

::::

:::::
