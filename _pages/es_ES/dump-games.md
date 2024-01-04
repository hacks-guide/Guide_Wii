---
title: "Copiar juegos de Wii y GameCube"
---

{% include toc title="Tabla de contenido" %}

En esta guía aprenderás a copiar juegos físicos de Wii y GameCube en formato digital. You can either dump directly to an SD card or USB drive, or over the local network.

### Dumping a Disc to SD/USB (CleanRip)

#### Requisitos

+ Una tarjeta SD o unidad USB con al menos 4.7 GB de espacio libre (8.5 GB para discos de doble capa).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instrucciones

Si el juego que vas a copiar se encuentra en [esta lista](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), por favor ajusta la opción `Dual Layer` a `Yes`.
{: .notice--info}

1. Apaga la consola.
1. Insert your SD card or USB drive into your computer.
1. Descarga y extrae el archivo de CleanRip a la carpeta `apps` ubicada en la raíz de la tarjeta SD o unidad USB.
1. Copiar juegos a través de una red local
1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Launch CleanRip from the list of homebrew.
1. Seleccionar dispositivo de almacenamiento

    ![](/images/homebrew/CleanRip/2.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, simply skip and verify your dump on Dolphin Emulator if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Insert the game disc you would like to dump.

    ![](/images/homebrew/CleanRip/4.png)

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/6.png)

1. Press A to start dumping the disc.
    + This process can take quite some time, since it will dump the full 4.7 GB disc contents (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/7.png)

1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Dumping a Disc over LAN (Wii DVD Dumper)

#### Requisitos

+ A Windows/macOS/Linux PC with an internet connection
+ [Pantalla de inicio de DVD Dump Tool](/assets/files/DVDDumpTool.zip)

#### Instrucciones

Download speeds will be slow due to limitations in the network hardware of the Wii, but it remains a valid solution if you are willing to be patient.
{: .notice--info}

[DVD Dump Tool](/assets/files/DVDDumpTool.zip) Tu consola Wii y PC deben estar conectadas a la misma red Wi-Fi.
{: .notice--warning}

1. Descarga y extrae el archivo de DVD Dump Tool a la carpeta `apps` ubicada en la raíz de la tarjeta SD o unidad USB.
1. Elige el dispositivo de almacenamiento adonde deseas copiar el juego: unidad USB o tarjeta SD.
1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Inserta la tarjeta SD o unidad USB en tu Wii e inicia DVD Dump Tool desde el Canal Homebrew.
1. Pulsa derecha en la cruz de control y después el botón A.
1. Elige el tipo de disco que quieres copiar y después oprime A. Las opciones son: `GameCube Disc` (Disco de GameCube), `Wii Single-Layer Disc` (Disco de Wii normal), y `Wii Dual-Layer Disc` (Disco de Wii de doble capa).

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Inserta la tarjeta SD o unidad USB en tu Wii e inicia CleanRip desde el Canal Homebrew.
    + If it is already inserted, eject and reinsert the disc.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Seleccionar tipo de disco

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Press any button to begin the dumping process.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Dirección IP local de la Wii
1. On your computer, open the browser, go to your address bar and enter the Wii URL.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Haz clic en `Click here to download XXXX.iso` para comenzar a copiar el juego.
1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Joining PART files on a FAT32 device

Si has copiado un disco de Wii a una unidad con el sistema de archivos FAT32, deberías tener por lo menos dos archivos cuyo nombre termine en `.partX.iso`. Es necesario combinar estos archivos en uno solo.
{: .notice--info}

#### Windows

1. Mueve todos los archivos que tengan el mismo nombre y terminen en `.partX.iso` a una carpeta vacía.
1. In this folder, click the address bar in Windows Explorer and copy its PATH.
1. Open a PowerShell or Windows Terminal window.
1. Run `cd [PATH]`.
1. Para finalizar, escribe el comando `copy /b *.part?.iso game.iso` y oprime Enter.
1. Wait until the merging process finishes.
    + Espera a que el proceso termine (hasta que aparezca el mensaje `1 archivo(s) copiado(s).`).

#### Instrucciones para macOS y Linux

1. Mueve todos los archivos que tengan el mismo nombre y terminen en `.partX.iso` a una carpeta vacía.
1. Abre una Terminal.
1. Ejecuta el comando `cd <path>`, reemplazando `<path>` con la ruta a la carpeta donde se encuentran los archivos `.partX.iso`.
1. Ejecuta el siguiente comando tal cual se muestra: `cat \*.part?.iso > game.iso`.
1. Wait until the merging process finishes.

Deberás usar Wii Backup Manager para organizar tus juegos recién copiados en una unidad USB. Puedes seguir nuestra guía desde [aquí](wiibackupmanager).
{: .notice--info}
