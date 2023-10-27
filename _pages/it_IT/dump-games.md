---
title: "Dump di Giochi Wii/GameCube"
---

{% include toc title="Table of Contents" %}

Questa guida copre il dumping dei dischi GameCube o Wii. Puoi eseguire il dump direttamente su una scheda SD o unità USB, oppure tramite la rete locale.

### Dump di un Disco su SD/USB (CleanRip)

#### Requisiti

+ Una scheda SD o unità USB con almeno 4.7 GB di spazio disponibile (8.5 GB per il dump di un disco a doppio strato).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Istruzioni

Se stai eseguendo il dump di uno dei 13 giochi in [questa lista](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), imposta `Dual Layer` nel Passaggio 6 a `Yes`.
{: .notice--info}

1. Spegni la console.
1. Inserisci la scheda SD o dispositivo USB nel tuo computer.
1. Copia la cartella `apps` dal `.zip` di CleanRip al root della tua scheda SD o unità USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia CleanRip dalla lista degli homebrew.
1. Seleziona il dispositivo su cui eseguirai il dump del gioco - unità USB o scheda SD.

    ![](/images/homebrew/CleanRip/2.png)

1. Quando richiesto, seleziona `Yes` per scaricare i file DAT di redump.org.
    + Questo è richiesto per assicurarsi che i dump siano puliti/accurati.

    Potresti ottenere un errore se lo fai. Se succede, salta semplicemente e verifica il tuo dump sull'Emulatore Dolphin se necessario.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Inserisci il disco di cui vorresti eseguire il dump.

    ![](/images/homebrew/CleanRip/4.png)

1. Regola le impostazioni come mostrato sotto, nel frattempo verifica se il disco è a doppio strato o no.

    ![](/images/homebrew/CleanRip/6.png)

1. Premi A per iniziare il dump del disco.
    + Questo processo può metterci un po' di tempo, in quanto eseguire il dump dei 4.7 GB completi del contenuto del disco (8.5 GB per i dischi a doppio strato).

    ![](/images/homebrew/CleanRip/7.png)

1. Procedi con [unire i file PART](dump-games#joining-part-files-on-a-fat32-device).

### Dumping a Disc over LAN (Wii DVD Dumper)

#### Requisiti

+ A Windows/macOS/Linux PC with an internet connection
+ [DVD Dump Tool](/assets/files/DVDDumpTool.zip)

#### Istruzioni

Download speeds will be slow due to limitations in the network hardware of the Wii, but it remains a valid solution if you are willing to be patient.
{: .notice--info}

Your Wii and your computer must be connected to the same local network.
{: .notice--warning}

1. Copy the `DVDDumpTool` folder from the DVDDumpTool `.zip` to the root of your SD card or USB drive.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Launch DVD Dump Tool from the list of homebrew.
1. Press right on the D-pad, then press A.
1. Choose the disc that you want to copy (The options are: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc`) and press "A"

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Insert the game disc into your Wii.
    + If it is already inserted, eject and reinsert the disc.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Select the proper disc type.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Press any button to begin the dumping process.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Remember or write down your Wii's URL (IP address).
1. On your computer, open the browser, go to your address bar and enter the Wii URL.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Click on `Click here to download XXXX.iso`.
1. Procedi con [unire i file PART](dump-games#joining-part-files-on-a-fat32-device).

### Joining PART files on a FAT32 device

If you dumped the disc (regardless if it was to a PC or Wii) on a FAT32 formatted device, you should have gotten at least two files that end with `.partX.iso`. They need to be joined.
{: .notice--info}

#### Windows

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.
1. In this folder, click the address bar in Windows Explorer and copy its PATH.
1. Open a PowerShell or Windows Terminal window.
1. Run `cd [PATH]`.
1. Type `copy /b *.part?.iso game.iso` and press enter.
1. Wait until the merging process finishes.
    + It should end with the terminal outputting `1 file(s) copied`.

#### macOS/Linux

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.
1. Open up a Terminal.
1. Run `cd [PATH]`, replacing [PATH] with the folder path to your `.partX.iso` files.
1. Use the following command as is: `cat \*.part?.iso > game.iso`.
1. Wait until the merging process finishes.

To organize the games on your drive properly, you can use [Wii Backup Manager](wiibackupmanager).
{: .notice--info}
