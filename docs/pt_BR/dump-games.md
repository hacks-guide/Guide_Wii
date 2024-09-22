---
title: "Extrair jogos do Wii/GameCube"
---

{% include toc title="Table of Contents" %}

This guide covers dumping GameCube or Wii game discs to a local SD card or USB drive on your Wii.

### Fazendo o backup do disco para SD/USB (CleanRip)

#### Requisitos

+ Um cartão SD ou armazenamento USB com pelo menos 4.7 GB de espaço livre.
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Preparation

1. Desligue seu console.
1. Insira o Disco
1. Extraia o CleanRip e coloque dentro da pasta `apps` do seu cartão SD ou armazenamento USB.
1. Agora insira o jogo que você deseja extrair.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra CleanRip na lista de homebrews.
1. When prompted, select `Yes` to calculate disc checksums.

    ![](/images/homebrew/CleanRip/checksum.png)

1. Selecione o dispositivo que você irá colocar o jogo - seu armazenamento USB ou cartão SD.

    ![](/images/homebrew/CleanRip/device.png)

1. Select the filesystem type of the device - in most cases it will be FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Ensure that your device is connected to the system and press A to proceed.

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. Fica a seu critério escolher `Yes` ou `No` para baixar esse arquivo.
    + Isto é necessário para garantir que os resultados do backup sejam limpos e precisos.

    Você pode receber um "exception error" se você fizer isso. If so, restart your Wii and try again - but if you continue to get exception errors, dump the disc and verify the checksum in Dolphin instead if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Insert the game disc you would like to dump, and press A to continue.

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Dumping a Wii Disc

As of v2.1.2 of CleanRip, there is an option to auto-detect whether or not the disc you have is dual layer. If you are on an earlier version, or just want to verify that the correct option is being selected, you can check [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your game is a dual layer disc.
{: .notice--info}

If you get an unrecovered read error, ensure that the disc you are attempting to dump is clean and can be properly read by the console. Even though you may be able to play the game disc normally, you may still get this error. If the error persists, try to dump another disc and see if the same error happens.
{: .notice--warning}

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Defina as configurações como mostradas na tela abaixo, enquanto verifica se seu disco é dupla camada ou não.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Pressione A para começar o backup do disco.
    + This process can take quite some time, since it will dump all 4.7 GB of the DVD (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.
{: .notice--info}

### Dumping a GameCube Disc

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.
{: .notice--info}

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Pressione A para começar o backup do disco.
    + This process can take some time, since it will dump all 1.3 GB of the Mini DVD.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.
{: .notice--info}
