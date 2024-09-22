---
title: "Atualizando o Menu do Wii para v4.3"
---

{% include toc title="Sumário" %}

Este tutorial vai lhe explicar como atualizar a versão do seu Menu do Wii para 4.3, se você já tem homebrew no seu Wii.

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.
{: .notice--warning}

### Requisitos

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* Um cartão SD ou armazenamento USB
* Um computador com Windows nele
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instruções

#### Seção I - Baixando

1. Extraia o .zip para o NUS Downloader Wii e abra o aplicativo.
1. Vá para `System` > `System` > `000000100000002 - System Menu` e selecione a versão correspondente a sua região como mostrada na tabela abaixo.
1. Tenha certeza que `Pack WAD` está marcado.
1. Pressione `Start NUS Download!`.
1. Abra `titles` -> `0000000100000002` -> (versão do Menu do Wii) e copie o arquivo .wad para uma pasta chamada `wad` no seu cartão SD ou armazenamento USB.
1. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
1. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| Região | Versão do Menu do Wii |
| ------ | --------------------- |
| Japão  | v512 (4.3J)           |
| EUA    | v513 (4.3U)           |
| Europa | v514 (4.3E)           |
| Coréia | v518 (4.3K)           |

#### Parte II - Instalando

1. Power off your Wii. Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
1. Execute o YAWM ModMii Edition.
1. Select your SD card or USB drive.
1. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
1. Navigate to the Wii Menu WAD and press A twice to install it.
1. When prompted to retain Priiloader, press A to confirm.
1. Depois que eles forem instalados com sucesso, pressione o botão HOME para sair para o Homebrew Channel.

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
