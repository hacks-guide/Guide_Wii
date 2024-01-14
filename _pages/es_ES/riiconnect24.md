---
title: "Install RiiConnect24"
---

{% include toc title="Tabla de contenido" %}

If you need help with anything regarding this tutorial, please join [the RiiConnect24 Discord server](https://discord.gg/rc24) (recommended) or [e-mail us at support@riiconnect24.net](mailto:support@riiconnect24.net).
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) te permite utilizar nuevamente el servicio WiiConnect24, que incluye el Canal Noticias, Tiempo, Opiniones, Miirame y Nintendo, además del intercambio de mensajes y otros contenidos entre amigos Wii (mejor conocido como correo Wii).

It's recommended to set your Wii to the current time before proceeding. Follow [this tutorial](rtc) in order to set it.
{: .notice--warning}

DO NOT INSTALL RIICONNECT24 ON A WII MINI! It will not work and it will brick the system.
{: .notice--danger}

### Requisitos

Follow [this tutorial](riiconnect24-vwii) if you'd like to install RiiConnect24 on vWii (Wii Mode on Wii U).
{: .notice--primary}

+ Una tarjeta SD o unidad USB
+ Una consola Wii con conexión a internet
+ Una computadora
+ [RiiConnect24 Patcher (Windows, Mac and Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [Instalar WADs con YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instrucciones

#### Section I - Using RiiConnect24 Patcher

1. Click the link above to go to the GitHub page where the patcher is.
1. Descarga `RiiConnect24Patcher.bat` si usas Windows, o `RiiConnect24Patcher.sh` en el caso de macOS y Linux.
1. RiiConnect24 Patcher Main Screen
    + On Windows run `RiiConnect24Patcher.bat`.
    + On Unix systems, open Terminal and type `bash`, then drag `RiiConnect24Patcher.sh` into the terminal then press enter. It should look like this: `bash RiiConnect24Patcher.sh`.
1. Press 1 to choose "`Start`" and confirm your selection by pressing `ENTER`.

    ![](/images/riiconnect24/patcher/1.JPG)

1. Select the device you're patching for.

    ![](/images/riiconnect24/patcher/2.JPG)

1. For this guide, choose "`Install RiiConnect24 on your Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. Choose "`Express (Recommended)`". It will give you everything you need.

    ![](/images/riiconnect24/patcher/4.JPG)

1. Select your region.

    ![](/images/riiconnect24/patcher/5.JPG)

1. While you're at it, RiiConnect24 Patcher can additionally download some other optional channels that do not use RiiConnect24. `[X]` represents the options that selected. Just press 5 and `ENTER` if you're not interested.

    ![](/images/riiconnect24/patcher/6.JPG)

1. Connect your SD Card or USB Drive to your computer and select "`1`".

    ![](/images/riiconnect24/patcher/7.JPG)

1. If your device was detected successfully, select "`1`". If not, make sure there's a folder called `apps` on your SD Card or USB Drive and try again.

    ![](/images/riiconnect24/patcher/8.JPG)

1. The patcher will download apps now - please be patient.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Once you reach the screen that says `Patching done`, you can exit the patcher. All the files should already be on your SD Card.

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to `RiiConnect24Patcher.bat` to your SD Card or USB Device.

#### Section II - Installing WADs

If you are using Dolphin, you have finished the guide. Install the WADs by going to `Tools -> Install WAD` within Dolphin.
{: .notice--primary}

You will now install the patched IOS and Channel WADs that are required to use RiiConnect24.

1. Extract the YAWM ModMii Edition `.zip` file, and copy the `apps` folder to your SD card or USB drive.
1. Put your SD card or USB drive in your Wii.
1. Inicia el Canal Homebrew en tu Wii.
1. Launch YAWM ModMii Edition.
1. Select the device you have put the RiiConnect24 files on.
1. Highlight all the WADs in the `wad` folder by pressing the + Button to select them. When all of the WADs are selected, press A twice to install the WADs.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

#### Sección III - Parcheando el archivo nwc24msg.cfg

You will now patch your `nwc24msg.cfg` file which is required in order to use Wii Mail.

1. Lanza el RiiConnect24 Mail Patcher.
1. En unos segundos deberías tener parcheado tu archivo nwc24msg.cfg. When it's done, press the HOME Button to exit.

#### Sección IV - Conectándose

The old DNS server `164.132.44.106` has been deprecated as of `June 1st, 2023` and is no longer available to use.
{: .notice--warning}

If you're getting errors such as `WiiConnect24 and Wii Shop Channel currently not being offered in your country`, go to Wii Settings -> Last Page -> Country and change it to United Kingdom. You will get this error when using a country that we don't support. Contact us at [support@riiconnect24.net](mailto:support@riiconnect24.net) if you need more help.
{: .notice--warning}

If you get error 107245, then you have not installed the patched IOS.<br>
{: .notice--warning}

You will now set your DNS to our servers. This is optional but it's recommended, because it enhances the use of RiiConnect24 and Wiimmfi by making some other features available.

1. Selecciona `Opciones de Wii` en el menú de Wii.
1. Selecciona `Configuración de Wii`.
1. Pasa a la segunda página y después selecciona `Internet`.
1. Selecciona `Ajustes de conexión`.
1. Selecciona tu conexión actual.
1. Selecciona `Modificar`.
1. Pasa hasta la cuarta página, donde está la opción `Obtener DNS automáticamente` (no es en Obtener drección IP automáticamente), elige `No` y después selecciona `Configuración avanzada`.
1. Type in `167.86.108.126` as the primary DNS.
1. Type in `1.1.1.1` as the secondary DNS.
1. Select `Confirm`, then select `Save`.
1. Selecciona `Aceptar` para realizar una prueba de conexión.
1. Si la prueba de conexión ha sido exitosa, elige `No` para saltar la actualización de la consola Wii.
1. Ve hacia `WiiConnect24`, luego `WiiConnect24` de nuevo, y asegúrate de que esté activado.
1. Vuelve al menú de ajustes de WiiConnect24, selecciona `Conexión (modo de espera)`, y asegúrate de que también esté activado.
1. En `Indicador de disco`, recomendamos que ajustes la luz de la ranura de disco en `Normal` o `Intenso`, pero esto es opcional.
1. Finalmente, ve hacia la sección `Internet`, selecciona `Acuerdos de uso` o `Documentos legales/Contacto` y elige `Sí`. Por favor lee todo el contrato.

[Return to WiiConnect24](wiiconnect24)
{: .notice--info}

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
