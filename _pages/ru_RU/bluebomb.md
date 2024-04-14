---
title: "BlueBomb"
---

{% include toc title="Оглавление" %}

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
1. Reinsert your flash drive into your console.
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
    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    + If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)
1. Включите вашу консоль.
    + Turn on your console and **do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + You can now shut down your Linux computer if you are not planning to use it later.

If using a Wii, proceed to installing the Homebrew Channel and BootMii<br>
{: .notice--info}

If using a Wii mini, proceed to installing the Homebrew Channel
{: .notice--info}
