---
title: "cIOS"
---

{% include toc title="Tabla de contenido" %}

While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Ahora puedes usar aplicaciones homebrew como [USB Loader GX](usbloadergx) y [WiiFlow](wiiflow). You can skip this process if you want, but generally it extends your Wii with little to no downsides.

Si tienes una Wii mini, por favor instala [este cIOS](cios-mini). Intentar instalar cualquier otro cIOS en la Wii mini no funcionará.
{: .notice--warning}

### Requisitos

* Una consola Wii original
* Una tarjeta SD o unidad USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Si vas a usar una tarjeta SD, asegúrate de que no esté protegida contra escritura, pues de lo contrario no podrás elegir las opciones correctas en el instalador.
{: .notice--warning}

### Instrucciones

#### Sección I - Descarga

If your Wii has an Internet connection, you may skip this section.<br> However, If you encounter any errors like `net_init failed`, `net_gethostbyname failed:`, or any other issues during the downloading stage this will allow the Wii to skip the downloading step.
{: .notice--warning}

Si tu PC no ejecuta Windows, puedes utilizar [este script](/assets/files/d2x_offline_ios.sh), el cual descargará los archivos WAD necesarios de forma automática.
{: .notice--info}

1. Apaga la consola.
1. Insert your SD card or USB drive into your computer.
1. Descarga, extrae y ejecuta [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
1. Elige `Game Load`.
1. Selecciona `Database` > `IOS` > `IOS38` > `v4123`.
    + Asegúrate de que la opción `Pack WAD` esté marcada.
    + *No* selecciones `Patch IOS`. El instalador del cIOS se encargará de aplicar los parches necesarios.
1. Haz clic en `Start NUS Download!`.
1. Repite los pasos 2 y 3 para `IOS56 v5661`, `IOS57 v5918`, e `IOS58 v6175`.
1. Una vez que hayas descargado los cuatro IOS, habrá una carpeta llamada `titles` en el mismo directorio que el programa NUS Downloader.
1. <br/> Entra a la carpeta hasta encontrar los cuatro archivos WAD que acabas de descargar.
1. Archivos WAD para instalar cIOS sin conexión
    + Este deber ser el mismo dispositivo donde vayas a copiar la aplicación d2x cIOS Installer.

Tras haber copiado los archivos WAD a la tarjeta SD o unidad USB, la raíz debería verse de la siguiente manera:![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Sección II - Instalación


1. Descarga la aplicación d2x cIOS Installer, y extrae el archivo ZIP a la raíz de tu tarjeta SD o unidad USB.
1. Reinsert your SD card or USB drive into your console.
1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Inserta la tarjeta SD o unidad USB en tu Wii, e inicia d2x cIOS Installer desde el Canal Homebrew.
1. Set everything to match the following:

    ```
    Select cIOS: d2x-v11-beta1
Select cIOS base: 38
Select cIOS slot: 248
Select cIOS version: 65535
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Dirígete a `Settings`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + Instalando cIOS 249

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 56
Select cIOS slot: 249
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Instalando cIOS 250

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 57
Select cIOS slot: 250
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Instalando cIOS 251

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 58
Select cIOS slot: 251
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br> Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
