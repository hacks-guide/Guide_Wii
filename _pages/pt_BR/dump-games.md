---
title: "Extrair jogos do Wii/GameCube"
---

{% include toc title="Table of Contents" %}

Insira o disco no Wii. Você pode fazer backup dos seus jogos diretamente para um cartão SD, dispositivo USB ou rede local.

### Fazendo o backup do disco para SD/USB (CleanRip)

#### Requisitos

+ Um cartão SD ou armazenamento USB com pelo menos 4.7 GB de espaço livre.
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instruções

Se você estiver fazendo backup de um dos 13 jogos na [lista](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), defina `Dual Layer` para `Yes`.
{: .notice--info}

1. Desligue seu console.
1. Insira o Disco
1. Extraia o CleanRip e coloque dentro da pasta `apps` do seu cartão SD ou armazenamento USB.
1. Agora insira o jogo que você deseja extrair.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra CleanRip na lista de homebrews.
1. Selecione o dispositivo que você irá colocar o jogo - seu armazenamento USB ou cartão SD.

    ![](/images/homebrew/CleanRip/2.png)

1. Fica a seu critério escolher `Yes` ou `No` para baixar esse arquivo.
    + Isto é necessário para garantir que os resultados do backup sejam limpos e precisos.

    Você pode receber um "exception error" se você fizer isso. Se sim, simplesmente pule e verifique seu backup no Emulador Dolphin se necessário.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Insira o disco do jogo que você gostaria de fazer backup.

    ![](/images/homebrew/CleanRip/4.png)

1. Defina as configurações como mostradas na tela abaixo, enquanto verifica se seu disco é dupla camada ou não.

    ![](/images/homebrew/CleanRip/6.png)

1. Pressione A para começar o backup do disco.
    + Pode demorar um pouco, pois extrairá todo o conteúdo do disco de 4.7GB (9.4 para discos dual layer).

    ![](/images/homebrew/CleanRip/7.png)

1. Prossiga para [juntando os arquivos PART](dump-games#joining-part-files-on-a-fat32-device).

### Fazendo backup de um Disco por LAN (Wii DVD Dumper)

#### Requisitos

+ Um computador Windows/macOS/Linux com conexão à internet
+ [DVD](/assets/files/DVDDumpTool.zip)

#### Instruções

As velocidades de download serão lentas devido a limitações no hardware de rede do Wii, mas continua a ser uma solução válida se estiver disposto a ser paciente.
{: .notice--info}

Extraindo um jogo via rede local
{: .notice--warning}

1. Extraia o DVD Dump Tool e coloque dentro da pasta `apps`do seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD no Wii e inicie o CleanRip através do Homebrew Channel.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra DVD Dump Tool na lista de homebrews.
1. Pressione o botão direito no D-Pad e aperte A.
1. Escolha o disco que deseja extrair (As opções são: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc`) e depois aperte "A"

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Insira seu cartão SD no Wii e inicie o DVD Dump Tool através do Homebrew Channel.
    + Se já estiver inserido, ejeta e insira novamente o disco.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Selecione o tipo de disco adequado.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Pressione qualquer botão para iniciar o processo de backup.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Lembre-se da sua URL do Wii (endereço IP)
1. No navegador da web do seu computador, vá para sua barra de endereços e insira a URL do Wii.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Clique em `Click here to download XXXX.iso`.
1. Prossiga para [juntando os arquivos PART](dump-games#joining-part-files-on-a-fat32-device).

### Juntando arquivos PART em um dispositivo FAT32

Se você descarregou o disco em um formato FAT32, o dispositivo deve ter pelo menos 2 arquivos que terminam com `.partX.iso`. É preciso juntá-los.
{: .notice--info}

#### Windows

1. Copie todos os arquivos no seu computador que compartilham o mesmo nome ou terminem em `.partX.iso` para uma pasta vazia no seu computador.
1. Nesta pasta, clique na barra de endereços no Windows Explorer e copie seu PATH.
1. Selecione "Abrir janela do PowerShell aqui".
1. Execute `cd [PATH]`.
1. Finalmente, digite `copy /b *.part?.iso game.iso` e aperte enter.
1. Aguarde até que o processo de fusão termine.
    + Ele deve terminar com o terminal colocando `1 arquivo(s) copiado(s)` ou `1 file(s) copied`.

#### macOS/Linux

1. Copie todos os arquivos que compartilham o mesmo nome e termine com `.partX.iso` em uma pasta em seu computador.
1. Abra um terminal.
1. Use o comando `cd <path>` e substitua `<path>` pelo caminho para os seus arquivos `.partX.iso`.
1. Use o seguinte comando como está: `cat \*.part?.iso > game.iso`.
1. Espere até que termine.

Para organizar os jogos no seu armazenamento corretamente, você precisará usar o [Wii Backup Manager](wiibackupmanager).
{: .notice--info}
