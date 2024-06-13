---
title: "Priiloader"
---

{% include toc title="Tabla de contenido" %}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

### Requisitos

* Una tarjeta SD o unidad USB
* Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
* https://oscwii.org/library/app/loadpriiloader

#### Optional Requirements for vWii (highly recommended)

* Allows you to copy normally disallowed save files to your SD card from Data Management
* Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
    * Your Wii should now automatically boot to whichever homebrew app you installed.

### Instrucciones

{% capture notice-vwii-priiloader %}

Priiloader on vWii does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ notice-vwii-priiloader }}</div>

#### Section I - Prep Work

1. Apaga la consola.
1. Extract both apps to the root of your SD card or USB drive.
1. Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
1. Copy `uneoboot.dol` to the root of your SD card.
1. Sends Wii Menu logs to a debugging device in memory card slot B, if the Wii Menu is launched by Gecko OS.
1. Reinsert your SD card or USB drive into your console.

#### Sección II - Instalación

1. Enciende la consola.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Lanza el instalador de Priiloader.
1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Press A to return to the Homebrew Channel.

#### Section III - Entering Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
1. Your device will have loaded the Priiloader menu.

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ Holding RESET on a Wii while turning it on.
    + Wii Only
+ Holding the ESC key on a USB keyboard while turning on the console.
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ Inicia el Canal Homebrew en tu Wii.
    + vWii Only

#### Configuring Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

    ![](/images/priiloader/menu_hacks.png)

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> This causes Priiloader to fail to find the `hacks_hash.ini` file.
    {: .notice--warning}

1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu (arreglo de gráficos en 480p en el Menú del Sistema)
        + Block Disc Updates (Bloquear Actualizaciones de Disco)
        + Block Online Updates (Bloquear Actualizaciones En Línea)
        + If you are NOT using a CRT display: `Remove Deflicker`
    + vWii:
        + Block Online Updates (Bloquear Actualizaciones En Línea)
        + Wii System Settings via Options Button
        + If you are NOT using a CRT display: `Remove Deflicker`
    + Wii mini:
        + Block Disc Autoboot
        + If you are NOT using a CRT display: `Remove Deflicker`
1. Scroll down to `save settings` and press A.
1. Press `B` to return to the main menu.

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.
{: .notice--info}

Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.
{: .notice--info}

### Wii: Next Steps

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

### vWii: Next Steps

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.
{: .notice--info}

### Wii mini: Next Steps

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.
{: .notice--info}
