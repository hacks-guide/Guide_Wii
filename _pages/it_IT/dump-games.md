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

### Dump di un disco su LAN (Wii DVD Dumper)

#### Requisiti

+ Un PC Windows/macOS/Linux con una connessione a internet
+ [DVD Dump Tool](/assets/files/DVDDumpTool.zip)

#### Istruzioni

Le velocità di download saranno lente a causa delle limitazioni hardware della rete del Wii, ma rimane una soluzione valida se hai pazienza.
{: .notice--info}

Il tuo Wii e il tuo computer devono essere connessi alla stessa rete locale.
{: .notice--warning}

1. Copia la cartella `DVDDumpTool` dal `.zip` di DVDDumpTool al root della tua scheda SD o unità USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia DVD Dump Tool dalla lista degli homebrew.
1. Premi destra sul D-pad, poi premi A.
1. Scegli il disco di cui vuoi eseguire il dump (Le opzioni sono: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc`) e premi "A"

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Inserisci il disco di gioco nel tuo Wii.
    + Se è già inserito, espelli il disco e reinserisci il disco.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Seleziona il tipo di disco appropriato.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Premi qualsiasi pulsante per iniziare il processo di dump.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Ricorda di segnarti l'URL (indirizzo IP) del tuo Wii.
1. Sul tuo computer, apri il browser, vai sulla barra degli indirizzi e inserisci l'URL del tuo Wii.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Clicca su `Click here to download XXXX.iso`.
1. Procedi con [unire i file PART](dump-games#joining-part-files-on-a-fat32-device).

### Unire i file PART su un dispositivo FAT32

Se hai eseguito il dump del disco (indipendentemente se era su PC o Wii) su un dispositivo formattato in FAT32, dovresti avere almeno due file che finiscono con `.partX.iso`. Devono essere uniti.
{: .notice--info}

#### Windows

1. Copia i file che condividono lo stesso nome e finiscono con `.partX.iso` in una cartella vuota sul tuo computer.
1. In questa cartella, clicca sulla barra degli indirizzi in Windows Explorer e copia il suo PATH.
1. Apri una finestra di Powershell o del Terminale di Windows.
1. Esegui `cd [PATH]`.
1. Esegui `copy /b *.part?.iso game.iso`.
1. Aspetta fino a quando il processo non si conclude.
    + Dovrebbe finire con l'output del terminale `1 file(s) copied`.

#### macOS/Linux

1. Copia i file che condividono lo stesso nome e finiscono con `.partX.iso` in una cartella vuota sul tuo computer.
1. Apri il Terminale.
1. Esegui `cd [PATH]`, rimpiazzando [PATH] con la `.partX.iso`.
1. Esegui il seguente comando così com'è: `cat \*.part?.iso > game.iso`.
1. Aspetta fino a quando il processo non si conclude.

Per organizzare i giochi sul tuo dispositivo correttamente, puoi usare [Wii Backup Manager](wiibackupmanager).
{: .notice--info}
