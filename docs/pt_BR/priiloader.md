---
title: "Priiloader"
---

{% include toc title="Sumário" %}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

### Requisitos

* Um cartão SD ou armazenamento USB
* Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
* https://oscwii.org/library/app/loadpriiloader

#### Optional Requirements for vWii (highly recommended)

* Permite que você copie arquivos normalmente não permitidos no seu cartão SD pelo Gerenciamento de Dados
* Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
    * Your Wii should now automatically boot to whichever homebrew app you installed.

### Instruções

#### Seção I - Preparação

1. Desligue seu console.
1. Extract both apps to the root of your SD card or USB drive.
1. Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
1. Copy `uneoboot.dol` to the root of your SD card.
1. Envia logs do Menu do Wii para um dispositivo de depuração no slot B do cartão de memória.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.

#### Seção II - Instalando o Priiloader

1. Ligue o seu console.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Launch Priiloader Installer from the list of homebrew.

    ![](/images/hbc/priiloader-and-loadpriiloader.png)

1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Pressione A para retornar ao canal do Homebrew.

#### Seção III - Entrando no Priiloader

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
+ Inicie o Homebrew Channel no Wii.
    + vWii Only

#### Configurando o Priiloader

1. Role para baixo até `System Menu Hacks` e pressione `A`.

    ![](/images/priiloader/menu_hacks.png)

    Se você colocou o instalador do Priiloader na unidade USB, certifique-se de que não possui um cartão SD inserido ao mesmo tempo. <br> This causes Priiloader to fail to find the `hacks_hash.ini` file.
    {: .notice--warning}

1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu
        + Bloquear Atualizações de Disco
        + Block Online Updates
        + If you are NOT using a CRT display: `Remove Deflicker`
    + vWii:
        + Block Online Updates
        + Wii System Settings via Options Button
        + If you are NOT using a CRT display: `Remove Deflicker`
    + Wii mini:
        + Bloquear Atualizações de Disco
        + If you are NOT using a CRT display: `Remove Deflicker`
1. Role até `save settings` e pressione A.
1. Pressione `B` para retornar ao menu principal.

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.
{: .notice--info}

Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.
{: .notice--info}

### Wii: Próximos Passos

Continue para [cIOS](cios)<br> Este guia fornece etapas sobre como obter um conjunto básico de cIOS instalado no seu Wii, Habilitando funcionalidade em apps como Loaders USB.
{: .notice--info}

### vWii: Next Steps

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.
{: .notice--info}

### Wii mini: Next Steps

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.
{: .notice--info}
