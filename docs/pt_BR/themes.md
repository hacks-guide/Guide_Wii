---
title: "Instalando Temas no Menu do Wii"
---

{% include toc title="Sumário" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### Vá para `Options` > `Standard System Menu` > Versão do seu Menu do Wii > Região do seu Menu do Wii

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

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
+ [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

#### Requisitos

* Extraia MyMenuifyMod.zip para seu cartão SD ou armazenamento USB.
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

1. Baixe, extraia e execute o [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copie todos os arquivos de NUS Downloader `.zip` para uma pasta em seu computador.
1. Execute `NUS Downloader.exe`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii menu version.
1. Check the `Create decrypted contents (*.app)` box.
1. Clique em `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the **largest .app file** (usually 6~7MB) inside the folder.
1. Create a `themes` folder on the root of your SD card/USB device.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="nus-downloader-vwii" class="tabContent" markdown="1">

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
1. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
1. Execute `NUS Downloader.exe`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii U's region in the table below:

| Região | vWii Menu version |
| ------ | ----------------- |
| Japão  | v608              |
| EUA    | v609              |
| Europa | v610              |

1. Check the `Create decrypted contents (*.app)` box.
1. Clique em `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the .app file that corresponds to your Wii U's region in the table below:

| Região | .app file    |
| ------ | ------------ |
| Japão  | 0000001c.app |
| EUA    | 0000001f.app |
| Europa | 00000022.app |

1. Create a `themes` folder on the root of your SD card/USB device.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="thememii" class="tabContent" markdown="1">

1. Create a `themes` folder on the root of your SD card/USB device.
1. Extract the ThemeMii MOD `.zip` to a location on your PC.
1. Launch the ThemeMii applciation.
1. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
1. Uma caixa de diálogo irá aparecer pedindo que você insira um valor para criar uma chave. Digite o que disser, ele criará uma chave que será usada para descriptografar o conteúdo do Menu do Wii dos servidores da Nintendo.
1. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.
</div>

#### Building a Theme

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
1. Launch the ThemeMii applciation.
1. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
1. Press `Create csm`.
1. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
1. When asked to save the `.csm` file, save it in the `themes` folder.
1. After the theme finishes building, you will be prompted to save the .mym. Pressione `No`.

#### Theme Installation

1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
1. Launch csm-installer, and wait for it to load.
1. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Press `+` to install the theme.
1. Desligue seu Wii, segure o botão RESET e ligue seu Wii. Você deve ser capaz de inicializar no menu do Priiloader, onde você tem algumas opções para corrigir seu Menu do Wii. Uma das opções é abrir o Homebrew Channel, onde você pode abrir o MyMenuify Mod e pressionar o botão para baixar e instalar o tema original do Menu do Wii. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### Seção I - Encontrando um Tema

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requisitos

* Um Wii
* https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i
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

* Alguns temas têm links diferentes para diferentes regiões, então escolha o que corresponde à sua região do Wii.
* Google Drive Repository
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

* Wii Themer
* Um cartão SD ou armazenamento USB
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
