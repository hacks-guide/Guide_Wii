---
title: "Instalando Temas no Menu do Wii"
---

{% include toc title="Sumário" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### Vá para `Options` > `Standard System Menu` > Versão do seu Menu do Wii > Região do seu Menu do Wii

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

This tutorial does not work on the Wii mini. Do not attempt this tutorial on the Wii mini or it will cause a [brick](bricks#theme-brick).
{: .notice--warning}

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.
{: .notice--warning}

Abaixo estão alguns links para temas.
{: .notice--warning}

Só instale temas em seu Wii que foram formatados especificamente para ele, e de sua região. Instalar temas da região ou versão errada em seu Wii causará um brick. Este tutorial irá lhe mostrar como criar um arquivo .csm que é seguro para instalar.
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### Links de Temas

+ https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
+ https://gbatemp.net/download/categories/other-files.166/
+ [Wii Themer](http://www.wiithemer.org/) (Wii only, online theme builder for specific versions and regions, ready to install .csm themes)

#### Requisitos

##### Wii

* Um Wii
* Extraia MyMenuifyMod.zip para seu cartão SD ou armazenamento USB.
* RiiConnect24 Themes Page
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

##### vWii

* A modded vWii
* https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i
* RiiConnect24 Themes Page
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)
* [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)

#### Building a Theme

##### Wii

Não use nenhuma outra versão do ThemeMii além da versão vinculada, pois apesar do ThemeMii permitir que você faça um tema para o Menu Wii versão 4.3, pode ser que outras versões não o permita.
{: .notice--info}

1. Assim que baixar o tema desejado você vai querer verificar novamente para ter certeza que pegou o tema certo, extrair o arquivo .zip para o ThemeMii Mod e abrir o aplicativo.
2. Vá para `Tools` > `Download Base App` > Versão do seu Menu do Wii > Região do seu Menu do Wii
3. Uma caixa de diálogo irá aparecer pedindo que você insira um valor para criar uma chave. Digite o que disser, ele criará uma chave que será usada para descriptografar o conteúdo do Menu do Wii dos servidores da Nintendo.
4. Uma caixa de seleção de arquivos irá perguntar onde salvar o arquivo .app (que é o arquivo de conteúdo do Menu do Wii baixado). Salve-o no diretório em que o ThemeMii está.
5. Vá para `File` > `Open` e procure onde está seu arquivo .mym.
6. Pressione `Create csm`, em seguida, procure por um diretório no qual você deseja salvar o tema. Espere um pouco para que o aplicativo crie o tema.
7. A dialog box will pop up asking you if you want to save the .mym. Pressione `No`.

##### vWii

Themes from [Wii Themer](http://www.wiithemer.org/) cannot be built automatically for you on the vWii, since it does not use the correct base app. However, you may still download the .mym files from their [theme database](http://wiithemer.org/mym/) to build manually.

Some themes are compatible with the Wii system menu, but aren't compatible with the vWii System Menu, and may result in graphical glitches or even a full [theme brick](bricks#theme-brick).
{: .notice--warning}

1. Extract the .zip file for NUS Downloader vWii and open the application
2. Click on `Database...`
3. Go to `System` > `System Menu` and select the version corresponding to your region as shown in the table below.

| Região | vWii Menu version |
| ------ | ----------------- |
| Japão  | v608              |
| EUA    | v609              |
| Europa | v610              |

4. After selecting the correct version to download, check the box for `Create Decrypted Contents (*.app)`. Then, press the `Start NUS Download` Button on the top of the window.

![The database menu in NUS Downloader.](/images/themes/NUSD-vWii_preview-database.png)

![The main menu of NUS downloader without the database menu open.](/images/themes/NUSD-vWii_sysmenu-versions.png)

5. When the download has finished, search for the .app file corresponding to your region in the folder where NUS Downloader is.

| Região | .app file for your region |
| ------ | ------------------------- |
| Japão  | 0000001c.app              |
| EUA    | 0000001f.app              |
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
8. Desligue seu Wii, segure o botão RESET e ligue seu Wii. Você deve ser capaz de inicializar no menu do Priiloader, onde você tem algumas opções para corrigir seu Menu do Wii. Uma das opções é abrir o Homebrew Channel, onde você pode abrir o MyMenuify Mod e pressionar o botão para baixar e instalar o tema original do Menu do Wii. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### Seção I - Encontrando um Tema

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requisitos

* Alguns temas têm links diferentes para diferentes regiões, então escolha o que corresponde à sua região do Wii.
* Google Drive Repository
* [http://www.wiithemer.org/](wii-loaders#wiiflow-lite)
* Secção III - Instalando o Tema
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Seção II - Fazendo o Tema

1. Have the storage device that holds WiiFlow Lite connected to your PC.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### Requisitos

* Wii Themer
* Um cartão SD ou armazenamento USB
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Se você precisa de ajuda sobre qualquer coisa deste tutorial, por favor entre [no servidor do Discord RiiConnect24](https://discord.gg/rc24) (recomendado) ou [mande um e-mail para support@riiconnect24.net (em inglês)](mailto:support@riiconnect24.net).
* A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

#### Instruções

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Recomendamos que você [instale cIOS](cios) antes de continuar.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

### Homebrew Channel Theming

#### Requisitos

* Wii Theme Team Creations v2
* Extraia MyMenuifyMod.zip para seu cartão SD ou armazenamento USB.
* Um computador com Windows nele (ou usando Mono ou Wine no Mac/Linux)
* https://rc24.xyz/goodies/themes/

#### Você precisará de

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinsert the storage device into your Wii and enter the Homebrew Channel.
5. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
