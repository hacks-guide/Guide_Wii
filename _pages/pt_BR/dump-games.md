---
title: "Fazendo backup de jogos de Wii/GameCube"
---

{% include toc title="Table of Contents" %}

Este guia cobre fazer backup de discos de jogos de GameCube ou Wii. Você pode fazer backup dos seus jogos diretamente para um cartão SD, dispositivo USB ou rede local.

### Fazendo o backup do disco para SD/USB (CleanRip)

#### Requisitos

+ Um cartão SD ou armazenamento USB com, no mínimo, 4.7GB de espaço livre (8.5GB se estiver fazendo backup de um disco de camada dupla).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instruções

Se você está fazendo backup de um dos 13 jogos [nesta lista](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), defina `Dual Layer` no Passo 6 para `Yes`.
{: .notice--info}

1. Desligue seu console.
1. Insira seu cartão SD ou armazenamento USB no seu computador.
1. Copie a pasta `apps` do CleanRip `.zip` para a raiz do seu cartão SD ou armazenamento USB.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra CleanRip na lista de homebrews.
1. Selecione o dispositivo para onde você estará fazendo o backup do jogo - dispositivo USB ou cartão SD.

    ![](/images/homebrew/CleanRip/2.png)

1. Quando solicitado, selecione `Sim` para baixar os arquivos DAT do redump.org.
    + Isto é necessário para garantir que os resultados do backup sejam limpos e precisos.

    Você pode receber um "exception error" se você fizer isso. Se sim, simplesmente pule e verifique seu backup no Emulador Dolphin se necessário.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Insira o disco do jogo que você gostaria de fazer backup.

    ![](/images/homebrew/CleanRip/4.png)

1. Defina as configurações como mostradas na tela abaixo, enquanto verifica se seu disco é dupla camada ou não.

    ![](/images/homebrew/CleanRip/6.png)

1. Pressione A para começar o backup do disco.
    + Esse processo pode levar bastante tempo, uma vez que fará um backup de todo o conteúdo de 4.7 GB de disco (8.5 GB para discos de camada dupla).

    ![](/images/homebrew/CleanRip/7.png)

1. Prossiga para [juntando os arquivos PART](dump-games#joining-part-files-on-a-fat32-device).

### Fazendo backup de um Disco por LAN (Wii DVD Dumper)

#### Requisitos

+ Um computador Windows/macOS/Linux com conexão à internet
+ [DVD Dump Tool](/assets/files/DVDDumpTool.zip)

#### Instruções

As velocidades de download serão lentas devido a limitações no hardware de rede do Wii, mas continua a ser uma solução válida se estiver disposto a ser paciente.
{: .notice--info}

Seu Wii e seu computador devem estar conectados à mesma rede local.
{: .notice--warning}

1. Copie a pasta `DVDDumpTool` do DVDDumpTool `.zip` para a raiz do seu cartão SD ou drive USB.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra DVD Dump Tool na lista de homebrews.
1. Pressione direita no D-Pad, então pressione A.
1. Escolha o disco que você deseja copiar (As opções são: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc`)

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Insira o disco do jogo no seu Wii.
    + Se já estiver inserido, ejeta e insira novamente o disco.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Selecione o tipo de disco adequado.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Pressione qualquer botão para iniciar o processo de backup.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Lembre-se ou anote a URL do seu Wii (endereço de IP).
1. No seu computador, abra o navegador, vá para sua barra de endereços e insira a URL do Wii.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Clique em `Click here to download XXXX.iso`.
1. Prossiga para [juntando os arquivos PART](dump-games#joining-part-files-on-a-fat32-device).

### Juntando arquivos PART em um dispositivo FAT32

Se você fez backup do disco (independente se fosse para um PC ou Wii) em um dispositivo formatado em FAT32, você deve ter obtido pelo menos dois arquivos que terminam com `.partX.iso`. Eles precisam ser juntados.
{: .notice--info}

#### Windows

1. Copie os arquivos que compartilham o mesmo nome e termine com `.partX.iso` em uma pasta vazia no seu computador.
1. Nesta pasta, clique na barra de endereços no Windows Explorer e copie seu PATH.
1. Abra uma janela do Windows Terminal ou PowerShell.
1. Execute `cd [PATH]`.
1. Digite `copy /b *.part?.iso game.iso` e pressione enter.
1. Aguarde até que o processo de fusão termine.
    + Ele deve terminar com o terminal colocando `1 arquivo(s) copiado(s)` ou `1 file(s) copied`.

#### macOS/Linux

1. Copie os arquivos que compartilham o mesmo nome e termine com `.partX.iso` em uma pasta vazia no seu computador.
1. Abra o Terminal.
1. Execute `cd [PATH]`, substituindo [PATH] pelo caminho da pasta com seus arquivos `.partX.iso`.
1. Use o seguinte comando: `cat \*.part?.iso > game.iso`.
1. Aguarde até que o processo de fusão termine.

Para organizar os jogos apropriadamente no seu armazenamento, você pode usar o [Wii Backup Manager](wiibackupmanager).
{: .notice--info}
