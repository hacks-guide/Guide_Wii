---
title: "Instalar temas para el menú de Wii"
---

{% include toc title="Tabla de contenido" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### Haz clic en `Options` > `Standard System Menu` > Versión de sistema de tu Wii > Región de tu Wii

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

This tutorial does not work on the Wii mini. Do not attempt this tutorial on the Wii mini or it will cause a [brick](bricks#theme-brick).
{: .notice--warning}

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
+ [Wii Themer](http://www.wiithemer.org/) (Wii only, online theme builder for specific versions and regions, ready to install .csm themes)

#### RiiConnect24 Themes Page

##### Wii

* Una consola Wii
* Extract MyMenuifyMod.zip to your SD card or USB drive.
* Below are some links to themes.
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

##### vWii

* A modded vWii
* Google Drive Repository
* Below are some links to themes.
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)
* [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)

#### Building a Theme

##### Wii

If you don't want to go through the hassle of using an external program to build a theme, you can also download a prebuilt theme from Wii Themer and skip to [Theme Installation](themes#theme-installation).
{: .notice--info}

1. Once you downloaded the theme you want and double-checked you got the right one, extract the .zip file for ThemeMii Mod and open the application.
2. Haz clic en `Tools` > `Download Base App` > Versión de sistema de tu Wii > Región de tu Wii
3. Aparecerá un diálogo que te pedirá que ingreses un valor para crear una clave. Ingresa lo que te pide; esto creará una clave que será usada para descargar y desencriptar un archivo del menú de Wii desde los servidores de Nintendo.
4. Se abrirá una ventana de selección de archivo que te preguntará dónde quieres guardar el archivo .app (este es el archivo del menú de Wii que descargó el programa). Guarda el archivo en la carpeta donde se encuentra ThemeMii Mod.
5. Haz clic `File` > `Open`, y después ve hacia la carpeta donde se encuentra el archivo mym.
6. Haz clic en `Create csm`, y después elige la carpeta donde quieres guardar el tema. Espera un momento para que se construya el tema.
7. A dialog box will pop up asking you if you want to save the .mym. Selecciona `No`.

##### vWii

Themes from [Wii Themer](http://www.wiithemer.org/) cannot be built automatically for you on the vWii, since it does not use the correct base app. However, you may still download the .mym files from their [theme database](http://wiithemer.org/mym/) to build manually.

Some themes are compatible with the Wii system menu, but aren't compatible with the vWii System Menu, and may result in graphical glitches or even a full [theme brick](bricks#theme-brick).
{: .notice--warning}

1. Extract the .zip file for NUS Downloader vWii and open the application
2. Click on `Database...`
3. Go to `System` > `System Menu` and select the version corresponding to your region as shown in the table below.

| Región | vWii Menu version |
| ------ | ----------------- |
| Japón  | v608              |
| USA    | v609              |
| Europa | v610              |

4. After selecting the correct version to download, check the box for `Create Decrypted Contents (*.app)`. Then, press the `Start NUS Download` Button on the top of the window.

![The database menu in NUS Downloader.](/images/themes/NUSD-vWii_preview-database.png)

![The main menu of NUS downloader without the database menu open.](/images/themes/NUSD-vWii_sysmenu-versions.png)

5. When the download has finished, search for the .app file corresponding to your region in the folder where NUS Downloader is.

| Región | .app file for your region |
| ------ | ------------------------- |
| Japón  | 0000001c.app              |
| USA    | 0000001f.app              |
| Europa | 00000022.app              |

6. Once you have found the .app file, copy it to the main directory of the folder containing ThemeMii. Then, copy a version of it to the theme folder in your SD card.

If you can't find the .app file, it's possible you have downloaded the wrong version of the Wii Menu and you'll need to try again.
{: .notice--info}

#### Theme Installation

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Create a new directory on your SD card or USB device called `themes` if it does not already exist.
3. Copy your `.csm` file to the `themes` directory.
4. Insert your SD card or USB drive into your Wii/Wii U, and launch the Homebrew Channel.
5. Launch csm-installer, and wait for it to load.
6. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
7. Press `+` to install the theme.
8. Espera un momento para que se instale el tema, después oprime cualquier botón para volver al menú de Wii. Esperamos que el tema se haya instalado correctamente. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### Sección I - Encontrando un tema

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requisitos

* Una consola Wii
* https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i
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

* Wii Theme Team Creations v2
* Una tarjeta SD o unidad USB
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

* Wii Themer
* Extract MyMenuifyMod.zip to your SD card or USB drive.
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
