---
title: "Donaciones"
---

{% include toc title="Tabla de contenido" %}

LetterBomb es un exploit para la Wii que se activa mediante el tablón de Wii.

Para obtener instrucciones sobre cómo formatear correctamente tu tarjeta SD, por favor ve [esta guía](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.
{: .notice--info}

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!
{: .notice--warning}

### Requisitos
* An SD card formatted as FAT32 that is 32GB or less
* Una Wii con la versión del sistema 4.3
* A Windows/MacOS/Linux computer with an Internet connection

### Instrucciones

1. Enciende la consola.
1. En tu consola, ve a `Opciones de Wii` > `Configuración de Wii` > `Internet` > `Datos de la consola Wii`, y apunta la dirección MAC Wi-Fi.
1. Anota la letra que aparece en la esquina superior derecha, junto a la versión del sistema.
    + Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.
    + Also, ensure that you are on System Menu version 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).
1. Expulsa la tarjeta SD e insértala en tu Wii.
1. Visita [esta página](https://please.hackmii.com/) e ingresa la dirección MAC y región de tu consola, luego asegúrate de que la opción `Bundle the HackMii Installer for me!` esté marcada.
1. Cut either wire.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Inserta tu tarjeta SD en tu ordenador.
1. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.
1. Expulsa la tarjeta SD e insértala en tu Wii.
    + La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.
1. En tu consola, ingresa al tablón de Wii.
1. Launch the Wii Message Board.
1. Open the red letter with a bomb.
    + Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    + En algunos casos, es posible que la carta se ubique en el día anterior o posterior al actual.
    + Si no consigues ver la carta roja, verifica que no haya errores al acceder a la tarjeta SD desde la opción `Gestión de datos` en `Opciones de Wii`. En caso de recibir un error, es posible que haya un problema con el formato de la tarjeta SD o el lector de tarjetas SD de la consola.
    + Si el sistema se congela después de seleccionar la carta, es probable que hayas elegido la región incorrecta al momento de descargar los archivos del exploit. Repite el paso 2 al comienzo de la guía y selecciona la región correcta, luego continúa con el resto de pasos.
    + If all is correct and there is freezing, keep on trying until it works.
1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}
