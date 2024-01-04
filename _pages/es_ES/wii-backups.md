---
title: Managing Wii Backups
---

{% include toc title="Tabla de contenido" %}

This guide provides instructions on how to manage your Wii backups, from joining .PART files that are output through CleanRip, to shrinking game files that can be copied onto a FAT32 device. Two programs that can be used to manage your Wii backups are Wii Backup Manager (for Windows) and Wii Backup Fusion (for Linux and MacOS) and are covered below.

Si deseas guardar múltiples juegos, te recomendamos adquirir un disco duro externo para tu Wii. La Wii es compatible con la mayoría de unidades USB que se encuentran en el mercado.
{: .notice--info}

No se recomienda usar una memoria USB, ya que su capacidad por lo general es limitada y pueden variar en funcionalidad incluso entre unidades del mismo modelo. <br>
As an alternative, you may simply use an SD card, however the Wii's SD card slot will be slow.
{: .notice--info}

Asegúrate de que tu unidad USB o tarjeta SD esté formateada como FAT32. No es posible usar otros sistemas de archivos más recientes, como exFAT o extFS. <br>
You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)
{: .notice--info}

### Joining PART files on a FAT32 device

If your disc was dumped to a FAT32 device, you should have gotten at least two files that end with `.partX.iso`, due to filesystem limitations. They need to be joined (on a supported filesystem like NTFS) so the file can be read correctly.
{: .notice--info}

#### Windows

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. In this folder, click the address bar in Windows Explorer and type in `cmd`, this will open a command prompt window there.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Type `copy /b *.part?.iso game.iso` and press enter. Wait for the command to finish, your terminal output should be similar to the below.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. If the copy process executed correctly, the checksum from the game dump info file (located where you dumped your disc at) should match the resulting joined file.

   ![](/images/desktop-apps/WBM/filemd5.png)

#### Instrucciones para macOS y Linux

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Open a terminal in the directory where your files are at, or `cd [PATH]` to it.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Use the following command as is: ``cat `ls *.part?.iso | sort` > game.iso``. Then, wait for the merging process to finish. Like in Windows, the resulting checksum should match the dump.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

### Using Wii Backup Manager

#### Requisitos

- Una PC con Windows instalado
- Una unidad USB o tarjeta SD
- A dumped ISO from a Wii game disc
- [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

#### Section I - Installation

1. Extrae el archivo de Wii Backup Manager recién descargado y ejecuta el programa.
2. Inserta la unidad USB o tarjeta SD en tu PC.

#### Section II - Copying Games

1. Go to the `Drive 1` tab, then select the drive that will hold your backed up Wii games.

   ![](/images/desktop-apps/WBM/select_drive.png)

2. Go to the `Files` tab, then select `Add`.

   - Select `Files` to add multiple games to the program, or select `Folder` to add a whole folder of games.

   ![](/images/desktop-apps/WBM/select_games.png)

3. Go to `Select`, then click `Games not on drive 1`.

   ![](/images/desktop-apps/WBM/select_games2.png)

4. Select `Transfer`, then select `Drive 1` to transfer the games over. The progress will be displayed on the right side of the window.

   ![](/images/desktop-apps/WBM/transfer_todrive.png)

### Using Wii Backup Fusion

#### Requisitos

- A PC running MacOS or Linux
- Una unidad USB o tarjeta SD
- A dumped ISO from a Wii game disc
- [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion)
- [Wiimm's ISO Tools](https://wit.wiimm.de/download.html)

#### Section I - Installation

1. Download Wiimm's ISO tools for your OS and extract the .tar.gz into a folder that you can access with the terminal. The extracted folder should have these files inside:

   ![](/images/desktop-apps/WBM/witinstallfolder.png)

2. Open a terminal in the folder that you just extracted, and run `sudo ./install.sh`.

3. Download Wii Backup Fusion for your OS and install. If on Linux, you will need to make the appimage executable by running `chmod +x [FILE]`.

#### Section II - Copying Games

1. Open Wii Backup Fusion and press `Load`.

   ![](/images/desktop-apps/WBM/loadwbf.png)

2. Select the directory where your game ISO is at.

   ![](/images/desktop-apps/WBM/opendirectorywbf.png)

3. Right click on the game that you want to transfer to a drive, and press `Transfer to image`. Use the following settings:

   ![](/images/desktop-apps/WBM/settingswbf.png)

4. If there is not already a `wbfs` directory on your game drive, make one.

5. Make another directory inside of the `wbfs` folder for the game backup. Take note of the Game ID in Wii Backup Fusion as you will need this for the game folder.

6. Make a game folder for your game, formatted as `game name [GAMEID]`. For the game dumped as an example in this guide, it would be named `New Super Mario Bros. Wii [SMNE01]`.

   ![](/images/desktop-apps/WBM/wbfsname.png)

7. Copy the game.wbfs file that was made in Step 3 to this new folder. The drive should be ready to use on a Wii.

[Continue to cIOS](cios)<br>
cIOS is needed for your Wii to use a USB Loader. Once this is done, you can use [USB Loader GX or WiiFlow](wii-loaders) to play games from your USB drive or SD card.
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
