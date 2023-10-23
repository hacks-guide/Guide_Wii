---
title: "Relançando o Instalador HackMii"
---

{% include toc title="Sumário" %}

Este guia destina-se a situações onde você precisa reiniciar o HackMii Installer para atualizar/reinstalar o Homebrew Channel ou BootMii.

Também é seguro para [refazer qualquer exploit](get-started) para voltar ao HackMii Installer.
{: .notice--info}

### Reiniciando através do Homebrew Channel

#### Requisitos

* O Homebrew Channel
* Um cartão SD ou armazenamento USB formatado para FAT32/MS-DOS
* [Instalador HackMii v1.2](https://bootmii.org/download/)

#### Instruções

1. Insira o seu SD/USB no seu PC.
1. Extraia o HackMii Installer v1.2 para a pasta `apps` no seu SD/USB.
    + Se esta pasta não existir, crie-a.
1. Insira o SD/USB no seu Wii, e execute o app `hackmii_installer_v1.2` do Homebrew Channel.
    + O aplicativo não terá um ícone.

[Continue para a instalação do Homebrew Channel e BootMii](hbc)
{: .notice--info}

### Reiniciando via Priiloader

#### Requisitos
* um Wii com Priiloader (ou Preloader) instalado
* Um cartão SD ou armazenamento USB formatado para FAT32/MS-DOS
* [Instalador HackMii v1.2](https://bootmii.org/download/)

Para verificar se o seu Wii tem Priiloader, segure o botão RESET ao ligá-lo.
{: .notice--info}

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.
{: .notice--warning}

#### Instruções

1. Insira o seu SD/USB no seu PC.
1. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
1. Insira o seu SD/USB no seu Wii.
1. Entre no Priiloader segurando o botão RESET enquanto liga o seu Wii.
1. Vá para `Load/Install File`.
1. Navigate to `boot.elf` and press `1` to load it.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[Continue para a instalação do Homebrew Channel e BootMii](hbc)
{: .notice--info}
