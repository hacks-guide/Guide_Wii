---
title: "Nintendo Wi-Fi Connection"
---

{% include toc title="Tabla de contenido" %}

[Wiimmfi](https://wiimmfi.de) es un servicio que reemplaza a la Conexión Wi-Fi de Nintendo. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. Existen diversas formas de conectarse a Wiimmfi. Elige el método que mejor se adapte a tus necesidades.

Si al tratar de acceder a Wiimmfi recibes el código de error 20100 o 20110, significa que tu juego es muy reciente para ser usado con este método.<br>
{: .notice--warning}

### Parche automático para el Canal Disco usando Priiloader

Si el nombre del hack es `Wiimmfi Patch v2` o `Wiimmfi Patch v3`, significa que no tienes la última versión del archivo hacks_hash.ini, por lo que deberás seguir [esta guía](priiloader) para volver a instalar Priiloader. Sigue los pasos anteriores nuevamente una vez que hayas reinstalado Priiloader.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

#### Requisitos
+ Lista de hacks para el menú de Wii
+ [Priiloader](priiloader) 0.9 or later

#### Instrucciones

1. Hold the RESET button while turning on your Wii. Si estás usando una Wii mini, conecta un teclado USB y mantén oprimida la tecla Escape cuando la enciendas.
1. Deberías ver el menú de Priiloader.

    ![](/images/priiloader/mainmenu.jpg)

1. Ve a `System Menu Hacks`. Si has usado una unidad USB para instalar Priiloader, asegúrate de que no tienes una tarjeta SD insertada al mismo tiempo. Esto causará que Priiloader no pueda encontrar el archivo `hacks_hash.ini`.
    {: .notice--info}
1. Activa el hack llamado `Wiimmfi Patch v4`.

    ![](/images/priiloader/hacks.jpg)

1. Scroll to `Save Settings` and save your changes.
1. Pulsa abajo hasta llegar a `System Menu` y pulsa A para salir al menú de Wii.
1. Launch your game through the Disc Channel - it should now be patched with Wiimmfi.

### Parche automático usando USB Loader GX

A method for Wiimmfi patching which automatically patches game backups in the latest versions of USB Loader GX or WiiFlow Lite.

#### Requisitos

+ Una copia digital de tu juego, en formato WBFS, ISO, cISO, o cualquier otro soportado por la Wii.
+ [Una Wii con Priiloader v0.9 o posterior instalado](wii-loaders)

#### Instrucciones

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
1. Elige `Configuración de Wii`. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Este método permite aplicar el parche de Wiimmfi a algunos juegos antiguos, como Mario Kart Wii y Super Smash Bros. Brawl, sin importar si tu consola cuenta con acceso a homebrew.

If you get error 20100 or 20110, the game you are trying to play is not supported by this method.
{: .notice--warning}

Si recibes el código de error 23400, significa que tu proveedor de servicios de internet (ISP) o entorno de red no permiten el uso de servidores DNS externos. <br> Para solucionar esto, Wiimmfi cuenta con un servidor DNS local que puedes ejecutar en una PC. [Más información.](https://wiimmfi.de/patcher/dnspatch#customdns)
{: .notice--warning}

#### Requisitos

+ Una Wii con conexión a internet

#### Instrucciones (para Wii)

1. Ve a `Opciones de Wii` > `Configuración de Wii` > `Internet` > `Ajustes de conexión` > Elige tu conexión > `Modificar`. Después, en la opción `Obtener DNS automáticamete` elige `No`. Ingresa `95.217.77.181` en `DNS primario`.
1. Si estás usando una Wii U, deberás ejecutar Mario Kart Wii Competition Patcher cada vez que quieras verificar si ha empezado un nuevo torneo, ya que WiiConnect24 no está habilitado en vWii.
1. Inicia tu juego desde el Canal Disco. Ahora deberías poder acceder a Wiimmfi.

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Requisitos

+ Una tarjeta SD o unidad USB
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Instrucciones

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
1. Inserta la tarjeta SD o unidad USB en tu Wii, y lanza Auto Wiimmfi Patcher desde el Canal Homebrew.
1. Insert the game disc (if it is not already inserted), wait for the patch to complete, and the game should start.

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### Requisitos

+ Wii U (vWii)

#### Instrucciones

1. Inserta tu disco de juego.
1. Ve a `Opciones de Wii` > `Configuración de Wii` > `Internet` > `Ajustes de conexión` > Elige tu conexión > `Modificar`. Después elige `No` en `Obtener DNS automáticamente`, y selecciona `Configuración avanzada`. Finalmente, ingresa `95.217.77.151` en `DNS primario`, y guarda los cambios.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. Si la prueba de conexión ha sido exitosa, elige `No` para saltar la actualización de la consola Wii.
1. Pasa a la segunda página y después ve a `Internet`. Confirma que quieres usar los servicios del Canal Tienda Wii y WiiConnect24, y después elige `Aceptar`.
1. Deberías ver la página del parche de Wiimmfi. Si en lugar de eso se muestra el Contrato de Uso de los Servicios de Red de Wii, es probable que tu ISP no sea compatible con este método.
1. El juego debería cargarse con el parche de Wiimmfi incluido.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Requisitos

+ A Wii with an internet connection, running in 60Hz mode
+ Canal Internet

#### Instrucciones

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. Enciende tu Wii a la vez que mantienes pulsado RESET.
1. Open the Internet Channel again and access the favorite you just made.
1. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### Parche para WiiWare

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Requisitos

* Una tarjeta SD
* Una copia de tu juego en formato WAD
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases) (multiplataforma)
* [Instalar WADs con YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Instrucciones:

1. Descarga la versión más reciente de WiiWare Patcher, luego extrae el archivo `.zip`, y coloca el archivo WAD en la carpeta recién creada.
1. Ejecuta el script que corresponda a tu sistema operativo. Elige el archivo con extensión `.bat` si usas Windows, o el que termina en `.sh` en el caso de macOS y Linux. Si has elegido usar RiiConnect24 Patcher, selecciona tu consola (Wii, vWii, o Dolphin), y después elige WiiWare Patcher.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Otras cosas

+ Una computadora con Windows (o usando Mono o Wine en Mac/Linux)
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [Parche para archivos ISO](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Instrucciones

1. Download the patcher and extract the `.zip` file.
1. Inserta la tarjeta SD o unidad SD en tu Wii.
    + If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    + If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    + If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
1. If the above was successful, you should see a window pop-up that displays the patching process. Una vez que el proceso haya terminado, abre la carpeta `wiimmfi-images`, y copia el archivo del juego parcheado a tu unidad USB.

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.
{: .notice--success}

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
