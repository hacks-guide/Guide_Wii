---
title: "Ripristino con BootMii"
---

{% include toc title="Table of Contents" %}

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii. Per favore tieni a mente che questa è di solito <strong>l'ultima spiaggia</strong> per riparare un brick se ne hai uno, e se questo non risolve il tuo problema, devi cercare supporto. Se puoi ancora entrare in BootMii, prova ad accedere all'Homebrew Channel in modo da provare a [identificare e riparare il brick](bricks) usando altri metodi.

Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.
{: .notice--info}

Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](https://static.hackmii.com/bootmii_sd_files.zip) ed estrailo nel root della tua scheda SD, poi riprova.
{: .notice--warning}


I Wii Family Edition (senza le porte GameCube) NON POSSONO ripristinare backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. Per ulteriore assistenza, per favovre cerca supporto.
{: .notice--danger}

NON ripristinare un backup della NAND non verificato o che non proviene dal tuo Wii: farlo potrebbe portare a un BRICK PEGGIORE. Lo stesso vale per l'utilizzo di schede SD difettose.
{: .notice--danger}

### Requisiti

* Un backup della NAND precedentemente creato usando [BootMii](bootmii)

### Ripristinare dati individuali da un backup della NAND

C'è un metodo molto più sicuro e veloce di riportare indietro dei dati individuali sul tuo Wii, che coinvolge probabilmente l'utilizzo dell'emulatore Dolphin.

Per esempio, se vuoi ripristinare i dati della Bacheca Wii, usa Dolphin per importare il tuo backup della NAND. In Dolphin, vai su `File -> Open User Folder` e trova `Wii/title/00000001/00000002/data/cdb.vff`, copialo sulla tua scheda SD, poi usa [WiiXplorer](https://oscwii.org/library/app/wiixplorer) per ripristinarlo nella sua posizione corrispondente.

Se vuoi ripristinare i dati di salvataggio di un gioco, usa Dolphin per importare il tuo backup della NAND, usa `Tools > Export all Wii Saves` per esportare tutti i salvataggi sulla tua scheda SD, poi usa la Gestione Dati per spostarli sul tuo Wii.

### Note preliminari importanti

+ Se non hai fatto nulla per provovare un brick (oppure stai avviando il Wii dopo molto tempo), è probabilmente un [Brick Wi-Fi](bricks#wi-fi-brick).

+ Se hai BootMii installato come IOS, RestoreMii ti chiedere il codice Konami attraverso un controller GameCube.

+ Devi usare i tasti POWER (destra) e RESET (select) sulla tua console, o su un controller GameCube collegato alla porta 1 per navigare in BootMii. Per navigare con un controller GameCube, clicca sinistra/destra sul +Control Pad sul controller GameCube. Per selezionare, premi A.

### Istruzioni

1. Avvia l'Homebrew Channel.
1. Premi il pulsante HOME, poi seleziona "Launch BootMii".
    + Se l'Homebrew Channel è inaccessibile e hai Priiloader installato, dovresti potere avviare quest'ultimo e selezionare `BootMii IOS` per lanciare BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

    ![](/images/bootmii/BootMii_Gears.png)

1. Seleziona il pulsante di RestoreMii.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii ti informerà che farà una scan in "SIMULATION mode", puoi premere A o Reset per continuare.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. Se BootMii è installato come IOS, inserisci il codice Konami sul tuo controller GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii percorrerà il processo di restore attraverso una simulazione, esponendo cosa verrà cancellato e riscritto. Una volta finita la simulazione, hai un'ultima possibilità per annullare il Nand Restore. Se vuoi continuare, premi START o il bottone Eject per iniziare.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. Dopo la fine del ripristino, dovresti vedere un testo che dice `I HAZ SUCCESS!` oppure `I HAZ FAIL`. Premi qualsiasi pulsante sul tuo Wii o sul tuo controller GCN.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Premi il pulsante Back (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

    ![](/images/bootmii/BootMii_Return.png)

Se stavi ripristinando un backup della NAND per riparare un brick e questo non ha funzionato, per favore consulta la seziona di questa guida [riguardo ai brick](bricks).
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
