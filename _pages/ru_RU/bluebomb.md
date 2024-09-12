---
title: "BlueBomb"
---

{% include toc title="Оглавление" %}

{% capture bluebomb-classic %}

## BlueBomb Classic

{% capture technical_info %}
<summary><em>Технические детали (опционально)</em></summary>
BlueBomb - это эксплоит, который использует уязвимость в библиотеках Bluetooth Wii и Wii mini. Хоть это и единственный эксплоит который работает с Wii mini, BlueBomb может работать и с обычной Wii.

Так же, этот эксплоит может помочь восстановить консоль после бриков, таких, как баннер брики и (некоторые) брики тем.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

**Настоятельно** рекомендуется не использовать **любые** видео руководства для взлома вашей консоли Wii mini, так как имеется огромный шанс её **окирпичить**.
{: .notice--warning}

Если вам нужна помощь, пожалуйста, перейдите на [сервер Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)
{: .notice--info}

Если вы используете оригинальную ревизию Wii, вам, вероятно, следует использовать [другой эксплоит](get-started), так как имеются более легкие пути для входа в установщик HackMii. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.
{: .notice--info}

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.
{: .notice--info}

### Требования

* Компьютер с Linux
    * Виртуальная машина может сработать, но её использование не рекомендуется из-за сложности с пробросом Bluetooth. По возможности, используйте LiveUSB, как описано ниже.
    * Если у вас есть Raspberry Pi, вы можете использовать её вместо вашего устройства, так как на ней, скорее всего уже установлен Linux.
    * Подсистема Linux для Windows или Chromebook запущенный в режиме Linux *не будут работать*, так как они не имеют прямого доступа к Bluetooth адаптеру или USB портам.
    * Если у вас нет Linux, [Ubuntu](https://ubuntu.com/download/desktop) является самой простой и удобной опцией, а так же может быть запущен на компьютере с установленным Windows или Mac.
        * Для 32-битных устройств требуется версия [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Для 64-битных устройств рекомендуется использование LTS версии из-за её стабильности, но последний выпуск так же работает.
    * Вы можете [записать live-пространство Linux на USB flash диск](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) вместо установки его на свой компьютер.
* Bluetooth-адаптер.
    * Внутренний Bluetooth-адаптер будет работать.
    * Если у вас его нет, убедитесь, что тот который вы будете использовать совместим с Linux.
* USB flash диск отформатированный в FAT32.
    * Это не может быть один и тот же USB-накопитель, который используется для загрузки Linux.
* [Установщик HackMii версии 1.2](https://bootmii.org/download/)

### Инструкции

1. Скопируйте `boot.elf` из hackmii_installer_v.1.2`.zip` в корень вашего накопителя.
    + (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
    + - (Даже для Wii mini, bootmini.elf **не будет** работать, его цель совершенно другая и не связанная. Используйте boot.elf во всех случаях).
1. Вставьте накопитель обратно в вашу консоль.
    + Для Wii mini USB-порт находится на задней стороне.
    + Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).
1. Включите вашу консоль.
1. Перейдите в `Wii Settings`.
1. Обратите внимание на букву рядом с системной версией в правом верхнем углу.
    + Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения последующих инструкций.

    ![](/images/wii/SystemMenuVersion.png)

1. Выключите вашу консоль.
1. Запустите ваш Linux дистрибутив и убедитесь, что вы подключены к Интернету.
1. Откройте Терминал
1. Выполните следующие команды:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. После этого помощник загрузит необходимые файлы и запросит информацию о вашей консоли.
    + Если вы выбрали Wii mini, вам попросят предоставить ваш регион (системного меню). Это может быть определено последней буквой версии меню Wii (`U` для **USA** и `E` для моделей **PAL**).
    + Если вы выбрали обычную Wii, вас попросят предоставить вашу версию меню Wii (То, что вы определили в шаге 4)
1. Включите вашу консоль.
    + **Не** подключайте ваш(и) Wii Remote(ы).
1. Нажимайте кнопку синхронизации (Sync), пока терминал не отобразит строку `got connection handle`.
    + Вам может понадобиться несколько попыток.
1. Если эксплоит выполнился успешно, ваше устройство загрузит установщик HackMii.
    + Вы можете выключить ваш компьютер с загруженным Linux, если вы не планируете дальше его использовать.

Если вы используете Wii, [перейдите к установке канала Homebrew (Homebrew Channel) и BootMii](hbc)<br>
{: .notice--info}

Если вы используете Wii mini, [перейдите к установке канала Homebrew (Homebrew Channel)](hbc-mini)
{: .notice--info}

{% endcapture %}

{% capture bluebomb-micro %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

Так же, этот эксплоит может помочь восстановить консоль после бриков, таких, как баннер брики и (некоторые) брики тем.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

**Настоятельно** рекомендуется не использовать **любые** видео руководства для взлома вашей консоли Wii mini, так как имеется огромный шанс её **окирпичить**.
{: .notice--warning}

Если вам нужна помощь, пожалуйста, перейдите на [сервер Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)
{: .notice--info}

Если вы используете оригинальную ревизию Wii, вам, вероятно, следует использовать [другой эксплоит](get-started), так как имеются более легкие пути для входа в установщик HackMii. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.
{: .notice--info}

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.
{: .notice--info}

### Требования
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* USB flash диск отформатированный в FAT32.
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Инструкции

1. Скопируйте `boot.elf` из hackmii_installer_v.1.2`.zip` в корень вашего накопителя.
    + (Если вы пытаетесь восстановить консоль из окирпиченного состояния, вы также должны скопировать homebrew-приложения которые вы хотите использовать в /apps/)
    + - (Даже для Wii mini, bootmini.elf **не будет** работать, его цель совершенно другая и не связанная. Используйте boot.elf во всех случаях).
1. Вставьте накопитель обратно в вашу консоль.
    + Для Wii mini USB-порт находится на задней стороне.
    + Для обычной Wii, используйте нижний порт (или правый порт, если она стоит в вертикальном состоянии).
1. Включите вашу консоль.
1. Перейдите в `Wii Settings`.
1. Обратите внимание на букву рядом с системной версией в правом верхнем углу.
    + Этот символ соответствует региону вашего системного меню, который вам нужно знать для выполнения последующих инструкций.

    ![](/images/wii/SystemMenuVersion.png)

1. Выключите вашу консоль.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
1. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Включите вашу консоль.
    + **Не** подключайте ваш(и) Wii Remote(ы).
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Вам может понадобиться несколько попыток.
1. Если эксплоит выполнился успешно, ваше устройство загрузит установщик HackMii.

Если вы используете Wii, [перейдите к установке канала Homebrew (Homebrew Channel) и BootMii](hbc)<br>
{: .notice--info}

Если вы используете Wii mini, [перейдите к установке канала Homebrew (Homebrew Channel)](hbc-mini)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'bluebomb-classic')"> BlueBomb Classic </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'bluebomb-micro')"> BlueBomb Micro </button>

<div class="tabContent tabDefualt" id="bluebomb-classic" markdown="1">

{{ bluebomb-classic }}
</div>
<div class="tabContent" id="bluebomb-micro" markdown="1">
{{ bluebomb-micro }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
