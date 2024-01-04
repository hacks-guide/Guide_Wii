---
title: "Saves de GameCube"
---

{% include toc title="Sumário" %}

Este é um guia completo para gerenciar seus saves de GameCube.

Usar qualquer periférico de GameCube com um Family Edition Wii ou Wii Mini requer que sejam soldadas portas de GameCube e/ou slots de cartão de memória.
{: .notice--info}

## Fazendo Upload de um Save Individual (Arquivo .gci) para um Cartão de Memória Físico

### Requisitos

* Um Wii com portas de GameCube
* Um cartão SD ou USB
* [GCMM](https://oscwii.org/library/app/gcmm)

Se você está procurando por saves 100% completos, você pode encontrá-los [aqui](https://gamefaqs.gamespot.com/).
{: .notice--info}

Se você está procurando por exploits de saves de jogo para inicializar no [Swiss](https://github.com/emukidid/swiss-gc/releases), você pode encontrar uma lista deles [aqui](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).
{: .notice--info}

### Instruções

#### Baixando

1. Extraia GCMM e coloque-o na pasta `apps` no seu cartão SD ou armazenamento USB.
1. Coloque o arquivo `.gci` em uma pasta chamada `MCBACKUP` na raíz do seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Restaurando

1. Insira seu cartão de memória físico no Slot A ou Slot B.
1. Selecione o dispositivo no qual você deseja restaurar.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. No GCMM, aperte X em um controle de GameCube ou + em um Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Selecione o save no qual você deseja fazer o backup. Se você tem múltiplos saves a fazer backup, você pode apertar R em um controle de GameCube ou 1 em um Wii remote para fazer um backup de todos os seus saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Assim que a restauração for completa, aperte qualquer botão para continuar.

## Fazendo Backup de um Save (Arquivo .gci) para um SD ou USB de um Cartão de Memória Físico

### Requisitos

* Um Wii com portas de GameCube
* Um cartão SD ou USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instruções

#### Baixando

1. Extraia GCMM e coloque-o na pasta `apps` no seu cartão SD ou armazenamento USB.
1. Coloque o arquivo `.gci` em uma pasta chamada `MCBACKUP` na raíz do seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Fazendo Backup

1. Insira seu cartão de memória físico no Slot A ou Slot B.
1. Selecione o dispositivo no qual você deseja fazer o backup.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. No GCMM, aperte Y em um controle de GameCube ou - em um Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Selecione o save que quer restaurar. Se você tem múltiplos saves a restaurar, você pode apertar R em um controle de GameCube ou 1 em um Wii remote para restaurar todos os seus saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Assim que o backup for completo, aperte qualquer botão para continuar.

## Fazendo Backup do seu Cartão de Memória Físico em um Cartão de Memória Emulado (arquivo .raw)

### Requisitos

* Um Wii com portas de GameCube
* Um cartão SD ou USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instruções

#### Baixando

1. Extraia GCMM e coloque-o na pasta `apps` no seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Extraindo o .raw

1. Insira seu cartão de memória no Slot A ou Slot B.
1. Selecione o dispositivo no qual você deseja extrair.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Pressione L e Y ao mesmo tempo em um controle de GameCube ou B e - ao mesmo tempo em um Wii remote para fazer um backup do seu arquivo .raw e selecionar o slot no qual o seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Assim que a extração for completa, aperte qualquer botão para continuar. Deve estar salvo em uma pasta na raíz do seu SD ou USB chamada `MCBACKUP`.

## Restaurando um Save de Memória Emulada para um Cartão de Memória Físico

### Requisitos

* Um Wii com portas de GameCube
* Um cartão SD ou USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instruções

1. Se você está tentando restaurar um save do Dolphin, vá para a aba `File` no Dolphin, selecione open user folder, abra a pasta GC, e encontre o arquivo `.raw`.
1. Se você está restaurando um save de cartão de memória emulado do Nintendont, navegue para a pasta `saves` na raíz do seu cartão SD ou USB.
1. Insira seu cartão de memória no Slot A ou Slot B.
1. Selecione o dispositivo no qual você deseja restaurar.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Pressione L e X ao mesmo tempo em um controle de GameCube ou B e + ao mesmo tempo em um Wii remote.
1. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Deve restaurar seu arquivo .raw para seu cartão de memória. Assim que a restauração for completa, aperte qualquer botão para continuar.

## Transferindo Saves Entre 2 Cartões de Memória Físicos

### Requisitos

* Um Wii com portas de GameCube
* Pelo menos 2 cartões de memória físicos

### Instruções

1. Insira ambos cartões de memória no Wii.
1. A partir do Menu do Sistema, navegue para `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. Ache o save que você quer, selecione-o e selecione `Move or Copy`.

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
