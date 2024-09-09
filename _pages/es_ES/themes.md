---
title: "Instalar temas para el menú de Wii"
---

{% include toc title="Tabla de contenido" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### Haz clic en `Options` > `Standard System Menu` > Versión de sistema de tu Wii > Región de tu Wii

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.
{: .notice--warning}

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.
{: .notice--warning}

Only install themes on your Wii that have been formatted specifically for it, and its current region. Installing themes from the wrong region or version on your Wii will cause a brick. This tutorial will tell you how to create a .csm file that is safe to install.
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### Enlaces de temas

+ https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
+ https://gbatemp.net/download/categories/other-files.166/
+ [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

#### RiiConnect24 Themes Page

* Extract MyMenuifyMod.zip to your SD card or USB drive.
* A Windows PC with an Internet connection
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Downloading the Base Theme

<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "csm-installer")' >Via csm-installer</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-wii")' >(Wii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-vwii")' >(vWii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "thememii")' >(Wii) Via ThemeMii</button>

<div id="csm-installer" class="tabContent tabDefault" markdown="1">

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
1. Launch csm-installer, then select `Download original Wii theme (Base theme)`
1. Once the base theme has finished saving, press HOME to exit the app.
1. Insert your SD card/USB device back into your PC. The base app will be saved to a folder named `themes`.
</div>

<div id="nus-downloader-wii" class="tabContent" markdown="1">

1. Descarga, extrae y ejecuta [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
1. Elige `Game Load`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii menu version.
1. Check the `Create decrypted contents (*.app)` box.
1. Haz clic en `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the **largest .app file** (usually 6~7MB) inside the folder.
1. Create a `themes` folder on the root of your SD card/USB device.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="nus-downloader-vwii" class="tabContent" markdown="1">

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
1. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
1. Elige `Game Load`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii U's region in the table below:

| Región | vWii Menu version |
| ------ | ----------------- |
| Japón  | v608              |
| USA    | v609              |
| Europa | v610              |

1. Check the `Create decrypted contents (*.app)` box.
1. Haz clic en `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the .app file that corresponds to your Wii U's region in the table below:

| Región | .app file    |
| ------ | ------------ |
| Japón  | 0000001c.app |
| USA    | 0000001f.app |
| Europa | 00000022.app |

1. Create a `themes` folder on the root of your SD card/USB device.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="thememii" class="tabContent" markdown="1">

1. Create a `themes` folder on the root of your SD card/USB device.
1. Extract the ThemeMii MOD `.zip` to a location on your PC.
1. Launch the ThemeMii applciation.
1. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
1. Aparecerá un diálogo que te pedirá que ingreses un valor para crear una clave. Ingresa lo que te pide; esto creará una clave que será usada para descargar y desencriptar un archivo del menú de Wii desde los servidores de Nintendo.
1. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.
</div>

#### Building a Theme

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
1. Launch the ThemeMii applciation.
1. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
1. Press `Create csm`.
1. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
1. When asked to save the `.csm` file, save it in the `themes` folder.
1. After the theme finishes building, you will be prompted to save the .mym. Selecciona `No`.

#### Theme Installation

1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
1. Launch csm-installer, and wait for it to load.
1. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Press `+` to install the theme.
1. Espera un momento para que se instale el tema, después oprime cualquier botón para volver al menú de Wii. Esperamos que el tema se haya instalado correctamente. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### Sección I - Encontrando un tema

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requisitos

* Una consola Wii
* Google Drive Repository
* [http://www.wiithemer.org/](wii-loaders#wiiflow-lite)
* Si necesitas ayuda con cualquier cosa en este tutorial, por favor entras [el servidor Discord de RiiConnect24](https://discord.gg/rc24) (recomendado) o [envias un correo electronico a support@riiconnect24.net](mailto:support@riiconnect24.net).
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Sección II - Construyendo el tema

1. Algunos temas tienen enlaces para diferentes regiones, así que elige el que corresponda con la región de tu consola.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### Requisitos

* Una consola Wii
* https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i
* [USB Loader GX](wii-loaders#usb-loader-gx)
* En la mayoría de los casos, tendrás que elegir el enlace que dice 4.X, lo cual quiere decir que el tema funcionará en las versiones de sistema 4.1, 4.2 y 4.3.
* A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

#### ¡ASEGURATE DE QUE HAS LEIDO TODAS LAS ADVERTENCIAS ANTES DE CONTINUAR!

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. We recommend you [install cIOS](cios) before continuing.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

### Homebrew Channel Theming

#### Requisitos

* Wii Theme Team Creations v2
* Una tarjeta SD o unidad USB
* Una computadora con Windows (o usando Mono o Wine en Mac/Linux)
* https://rc24.xyz/goodies/themes/

#### Instrucciones

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Inicia MyMenuify Mod desde el Canal Homebrew.
5. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}

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
