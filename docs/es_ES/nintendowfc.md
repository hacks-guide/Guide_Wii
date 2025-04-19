# Nintendo Wi-Fi Connection

<a href="https://wiimmfi.de">Wiimmfi</a> es un servicio que reemplaza a la Conexión Wi-Fi de Nintendo. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. Existen diversas formas de conectarse a Wiimmfi. Elige el método que mejor se adapte a tus necesidades.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Parche automático para el Canal Disco usando Priiloader

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. Sigue los pasos anteriores nuevamente una vez que hayas reinstalado Priiloader.

:::

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

### Requirements

- Lista de hacks para el menú de Wii
- [Priiloader](priiloader) 0.9 or later

### Instructions

1. Hold the RESET button while turning on your Wii. Si estás usando una Wii mini, conecta un teclado USB y mantén oprimida la tecla Escape cuando la enciendas.

2. Deberías ver el menú de Priiloader.

    ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

    ::: info

    Si has usado una unidad USB para instalar Priiloader, asegúrate de que no tienes una tarjeta SD insertada al mismo tiempo.
    Esto causará que Priiloader no pueda encontrar el archivo <code>hacks_hash.ini</code>.

    :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

    ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. Inicia tu juego desde el Canal Disco. Ahora deberías poder acceder a Wiimmfi.

## Parche automático usando USB Loader GX

A method for Wiimmfi patching which automatically patches game backups in the latest versions of USB Loader GX or WiiFlow Lite.

### Requirements

- Una copia digital de tu juego, en formato WBFS, ISO, cISO, o cualquier otro soportado por la Wii.
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

## Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Este método permite aplicar el parche de Wiimmfi a algunos juegos antiguos, como Mario Kart Wii y Super Smash Bros. Brawl, sin importar si tu consola cuenta con acceso a homebrew.

::: warning

If you get error 20100 or 20110, the game you are trying to play is not supported by this method.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Requirements

- Una copia digital de tu juego, en formato WBFS, ISO, cISO, o cualquier otro soportado por la Wii.

### Instructions

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. Si estás usando una Wii U, deberás ejecutar Mario Kart Wii Competition Patcher cada vez que quieras verificar si ha empezado un nuevo torneo, ya que WiiConnect24 no está habilitado en vWii.
3. Inicia tu juego desde el Canal Disco. Ahora deberías poder acceder a Wiimmfi.

## Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

### Requirements

- Una tarjeta SD o unidad USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Inserta la tarjeta SD o unidad USB en tu Wii, y lanza Auto Wiimmfi Patcher desde el Canal Homebrew.
3. Insert the game disc (if it is not already inserted), wait for the patch to complete, and the game should start.

## Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### Requirements

- Una copia digital de tu juego, en formato WBFS, ISO, cISO, o cualquier otro soportado por la Wii.

### Instructions

1. Inserta tu disco de juego.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Si estás usando una Wii U, deberás ejecutar Mario Kart Wii Competition Patcher cada vez que quieras verificar si ha empezado un nuevo torneo, ya que WiiConnect24 no está habilitado en vWii.

4. Go back twice to `Internet`, and press `User Agreements`. Confirma que quieres usar los servicios del Canal Tienda Wii y WiiConnect24, y después elige <code>Aceptar</code>.

5. Deberías ver la página del parche de Wiimmfi. Si en lugar de eso se muestra el Contrato de Uso de los Servicios de Red de Wii, es probable que tu ISP no sea compatible con este método.

6. El juego debería cargarse con el parche de Wiimmfi incluido.

## Manual Disc Patching via Internet Channel

::: warning

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### Requirements

- A Wii with an internet connection, running in 60Hz mode
- Canal Internet

### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Enciende tu Wii a la vez que mantienes pulsado RESET.
4. Open the Internet Channel again and access the favorite you just made.
5. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## Parche para WiiWare

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

### Requirements

- Una tarjeta SD
- Una copia de tu juego en formato WAD
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

1. Descarga la versión más reciente de WiiWare Patcher, luego extrae el archivo <code>.zip</code>, y coloca el archivo WAD en la carpeta recién creada.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. Si has elegido usar RiiConnect24 Patcher, selecciona tu consola (Wii, vWii, o Dolphin), y después elige WiiWare Patcher.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

### Requirements

- Una computadora con Windows (o usando Mono o Wine en Mac/Linux)
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### Instructions

1. Download the patcher and extract the `.zip` file.
2. Inserta la tarjeta SD o unidad SD en tu Wii.
    - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    - If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
