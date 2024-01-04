---
title: "Priiloader"
---

{% include toc title="Sumário" %}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also enable hacks for your Wii Menu, and be used to quickly launch the Homebrew Channel, BootMii, or whatever homebrew you want!

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.


For more information about Priiloader and its options, you can see the [Priiloader Usage](priiloader-usage) page.
{: .notice--info}

### Requisitos

* Um cartão SD ou armazenamento USB
* Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
* https://oscwii.org/library/app/loadpriiloader

#### Optional Requirements for vWii (highly recommended)

* Permite que você copie arquivos normalmente não permitidos no seu cartão SD pelo Gerenciamento de Dados
* Download the USB Loader GX forwarder WAD ([Wii](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT.wad), [vWii](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT_vWii%20%28Fix%29.wad)).
    * Your Wii should now automatically boot to whichever homebrew app you installed.

### Instruções

{% capture notice-vwii-priiloader %}

If you are using a vWii:

+ Installing a theme after installing Priiloader **will brick your vWii.**
+ Priiloader 0.10.0 introduces vWii support!

{% endcapture %}

<div class="notice--danger">{{ notice-vwii-priiloader }}</div>

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
1. Inicie o Priiloader installer.
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

1. Scroll down to `Settings` and press A.
    + `Block Online Updates`
    + If you are NOT using a CRT display: `Remove Deflicker`
1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu
        + Bloquear Atualizações de Disco
    + Wii mini:
        + Bloquear Atualizações de Disco
1. Role até `save settings` e pressione A.
1. Pressione `B` para retornar ao menu principal.

### Wii mini: Next Steps

[Continue to the Dos and Don'ts of Wii Modding](dosanddonts)<br> These are some guidelines to ensure you don't brick your Wii.
{: .notice--info}

### Wii: Próximos Passos

Se você chegou a esse ponto, parabéns! Você terminou com a seção necessária do guia principal! Você pode continuar se quiser aprender mais, mas qualquer coisa depois desse ponto é opcional.
{: .notice--success}

Continue para [cIOS](cios)<br> Este guia fornece etapas sobre como obter um conjunto básico de cIOS instalado no seu Wii, Habilitando funcionalidade em apps como Loaders USB.
{: .notice--info}

Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.
{: .notice--info}
