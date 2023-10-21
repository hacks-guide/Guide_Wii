---
title: "Priiloader"
---

{% include toc title="Sumário" %}

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. It loads before the Wii System Menu does. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

For more information about Priiloader and its options, you can see the [Priiloader Usage](priiloader-usage) page.

### Requisitos

* Um cartão SD ou um armazenamento USB
* [Priiloader Installer](https://oscwii.org/library/app/priiloader) (arquivo `.zip` file)
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (arquivo `.zip` file)

#### Optional Requirements for vWii (highly recommended)

* An SD card
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

### Instruções

{% capture vwii-notes %}

If you are using a vWii:

+ Do NOT install a theme after installing Priiloader, or you will BRICK your vWii!
+ Priiloader does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ vwii-notes | markdownify }}</div>

#### Seção I - Preparação

1. Desligue seu console.
1. Insira seu cartão SD ou armazenamento USB no seu computador.
1. Copie a pasta `apps` do LoadPriiloader `.zip` para a raiz do seu cartão SD ou armazenamento USB.
1. Copie a pasta `apps` do priiloader `.zip` para a raiz do seu cartão SD ou armazenamento USB.
1. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.

#### Seção II - Instalando o Priiloader

1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Inicie o instalador do Priiloader da lista de homebrew.
1. Pressione o botão + no Wii Remote ou o botão A em um controle do GameCube.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Pressione A para retornar ao canal do Homebrew.

#### Seção III - Entrando no Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
1. Your device will have loaded the Priiloader menu.

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ Hold the RESET on a Wii while turning it on
    + Wii Only
+ Hold the ESC key on a connected USB keyboard while turning on the console
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ Run the "Priiloader Wii U Forwarder" tool
    + vWii Only

#### Section IV - Configuring Priiloader

1. Role para baixo até `System Menu Hacks` e pressione `A`.

    ![](/images/priiloader/menu_hacks.png)

    Se você colocou o instalador do Priiloader na unidade USB, certifique-se de que não possui um cartão SD inserido ao mesmo tempo. <br> Fazer isso fará com que o Priiloader não encontre o arquivo `hacks_hash.ini`.
    {: .notice--warning}

1. Scroll down to each of the following options and press `A`:
    + `Block Online Updates`
    + If you are NOT using a CRT display: `Remove Deflicker`
1. For the following options, enable the options according to your console:
    + Wii:
        + If you are using 480p mode: `480p graphics fix in the system menu`
        + Bloquear Atualizações de Disco
    + Wii mini:
        + Block Disc UPdates
1. Role até `save settings` e pressione A.
1. Pressione `B` para retornar ao menu principal.

### Wii mini: Next Steps

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides installation instructions for cIOS on Wii minis.
{: .notice--info}

### Wii: Próximos Passos

Se você chegou a esse ponto, parabéns! Você terminou com a seção necessária do guia principal! Você pode continuar se quiser aprender mais, mas qualquer coisa depois desse ponto é opcional.
{: .notice--success}

Continue para [cIOS](cios)<br> Este guia fornece etapas sobre como obter um conjunto básico de cIOS instalado no seu Wii, Habilitando funcionalidade em apps como Loaders USB.
{: .notice--info}

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that to avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}
