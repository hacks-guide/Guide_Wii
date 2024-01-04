---
title: "Reiniciando o HackMii Installer"
---

{% include toc title="Sumário" %}

Este guia é direcionado as situações onde você precisa reiniciar o HackMii Installar para fazer um update/reinstalar o Homebrew Channel ou BootMii.

Também é seguro [refazer qualquer exploit](get-started) para voltar no HackMii Installer.
{: .notice--info}

### Reiniciando através do Homebrew Channel

#### Requisitos

* O Homebrew Channel
* Um cartão SD formatado para FAT32/MS-DOS
* [Instalador HackMii v1.2](https://bootmii.org/download/)

#### Instruções

1. Insira o cartão SD ou armazenamento USB no seu PC.
1. Extraia o HackMii Installer v1.2 para a pasta `apps` no seu SD/USB.
    + Se a pasta não existir, crie-a.
1. Insira o SD/USB no seu Wii, e então inicie o app `hackmii_installer_v1.2` através do Homebrew Channel.
    + O app não vai ter um ícone.

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}

### Reiniciando através do Priiloader

#### Requisitos
* um Wii com Priiloader (ou Preloader) instalado
* um cartão SD formatado para FAT32/MS-DOS
* [Instalador HackMii v1.2](https://bootmii.org/download/)

Para checar se seu Wii tem o Priiloader, segure o botão RESET enquanto o liga.
{: .notice--info}

Preloader e versões antigas do Priiloader não suportam cartões SDHC (>2GB).
{: .notice--warning}

#### Instruções

1. Insira o cartão SD ou armazenamento USB no seu PC.
1. Extraia o HackMii Installer v1.2 para a pasta `apps` no seu SD/USB.
1. Insira o cartão SD ou armazenamento USB no seu Wii.
1. Entre no Priiloader segurando o botão RESET enquanto liga o seu Wii.
1. Vá para `Load/Install File`.
1. Navegue até `hackmii_installer_v1.2` e pressione `1` para carregá-lo.

Se `Press (1) to continue` não aparecer depois de cerca de 30 segundos, baixar o [HackMii Installer v1.0](https://bootmii.org/download/) pode ajudar.
{: .notice--info}

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}
