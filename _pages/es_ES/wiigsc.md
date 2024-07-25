---
title: "Crear accesos directos para juegos de Wii"
---

{% include toc title="Tabla de contenido" %}

Do you use a Wii backup loader and want to create game shortcuts to launch them on your Wii Menu? Then try WiiGSC (Wii Game Shortcut Creator), previously known as Crap.

En caso de un brick, es fundamental tener instalado [Priiloader](/priiloader) para poder repararlo. También es recomendable instalar BootMii (si es posible, como boot2). Si cuentas con dichos requisitos y sigues los pasos de forma correcta, tu consola estará a salvo de un brick. ¡NO CONTINÚES SI NO TIENES PRIILOADER Y BOOTMII INSTALADOS!
{: .notice--warning}

NO intentes crear un atajo para los juegos Mario Party 9, o A Boy and His Blob. Si instalas alguno de estos atajos, tu consola sufrirá un brick.
{: .notice--warning}

The Wii Menu is limited to 48 channels, not including existing system channels.
{: .notice--info}

### Requisitos

* Una Wii
* An SD or USB drive
* [Instalar WADs con YAWM ModMii Edition](yawmme)
* Una PC con Windows
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Instrucciones

1. Descarga WiiGSC desde el enlace de arriba y extrae el archivo, luego ejecuta el instalador. Una vez que el programa se haya instalado, haz clic derecho sobre su icono en el escritorio y selecciona **Ejecutar como administrador**. Si no haces esto, WiiGSC dará un error cuando se inicie.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your SD or USB drive, and select the loader you use. The other options should be fine the way they are.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Install the generated WAD with your [WAD manager](yawmme).

<div class="notice--info">
Si tras instalar el WAD y volver al menú de Wii aparece el mensaje <code>Los archivos del sistema están dañados</code>, no tienes nada de que preocuparte, siempre y cuando hayas instalado Priiloader, o BootMii como boot2. Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).
</div>

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
