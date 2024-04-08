---
title: "Transferring Game Saves"
---

This guide will explain how to transfer game saves between:

+ un Wii/Wii U (vWii),
+ Emulatore Dolphin,
+ memory card di GameCube
+ e memory card emulate (Nintendont).

<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'wii')">Da un Wii/vWii</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'dol')">Da Emulatore Dolphin</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'gcmc')">Da una memory card di GameCube</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'emumc')">Da Nintendont</button>

<div id="wii" class="tabcontent" markdown="1">

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-vwii')">A un altro Wii/vWii</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-dol')">All'Emulatore Dolphin</button>

<div id="wii-vwii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-data')">tramite Gestione dati</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-svgm')">tramite SaveGame Manager GX</button>

<div id="wii-vwii-data" class="tabcontent via" markdown="1">

##### Di cosa hai bisogno

+ una scheda SD formattata come FAT32

##### Istruzioni

1. Inserisci la scheda SD nel tuo Wii/Wii U.
1. Nel Menu Wii, seleziona `Opzioni Wii` dall'angolo in basso a sinistra.
1. Selezione `Gestione dati` (se sei su Wii), `Dati di salvataggio` e `Wii`.
1. Seleziona un salvataggio che vuoi trasferire, poi seleziona `Copia`.
    + Se il pulsante `Copia` non è selezionabile, dovrai [installare Priiloader](priiloader) per disattivare la protezione della copia.
1. Ripeti il passaggio precedente per ciascun salvataggio che vuoi trasferire.
1. Una volta che hai finito, inserisci la scheda SD nell'altro Wii/Wii U.
1. Nel Menu Wii, seleziona `Opzioni Wii` dall'angolo in basso a sinistra.
1. Selezione `Gestione dati` (se sei su Wii), `Dati di salvataggio` e `Wii`.
1. Seleziona la scheda `Scheda SD` dall'angolo in alto a destra.
1. Selezione uno dei salvataggi che hai copiato alla tua scheda SD, poi seleziona `Copia`.
1. Ripeti il passaggio precedente per ciascun salvataggio che hai copiato alla tua scheda SD.
</div>

<div id="wii-vwii-svgm" class="tabcontent via" markdown="1">
Assicurati di aver installato [cIOS](cios) prima di seguire!
{: .notice--warning}

##### Di cosa hai bisogno

* L'Homebrew Channel su entrambi i sistemi
* Una scheda SD o dispositivo USB
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Istruzioni

1. Estrai SaveGame Manager GX nel root della tua scheda SD o unità USB e inseriscila nel tuo Wii/Wii U.
1. Avvia l'Homebrew Channel e avvia SaveGame Manager GX.
1. Assicurati che la sorgente sia impostata su Wii.
1. Trova e seleziona il tuo salvataggio, poi `Extract` e poi `Default`.
    + Ripeti questo passaggio per gli altri salvataggi che vuoi copiare.
1. Premi il pulsante HOME ed esci da SaveGame Manager GX.
1. Inserisci la scheda SD nel Wii/Wii U di destinazione.
1. Crea un nuovo file di salvataggio per ogni gioco. Questo è necessario in modo che SaveGame Manager GX possa sovrascriverli.
1. Avvia l'Homebrew Channel e avvia SaveGame Manager GX.
1. Assicurati che la sorgente sia impostata su SD o USB.
1. Seleziona ciascuno dei tuoi salvataggi e clicca `Install`.
</div>
</div>

<div id="wii-dol" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-nand')">con un backup della NAND (Wii)</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-svgm')">tramite SaveGame Manager GX</button>

<div id="wii-dol-nand" class="tabcontent via" markdown="1">
Importando il tuo backup della tua NAND su Dolphin, avrai effettivamente copiato tutto che c'era nel tuo Wii (al momento del backup). Questo ha anche il vantaggio di consentire l'accesso a [Wiimmfi](https://wiimmfi.de/) assieme ai canali patchati di RiiConnect24.
Tutti i metodi elencati qui richiedono un Wii con porte GameCube.
{: .notice--info}

##### Di cosa hai bisogno

* [un backup della NAND](bootmii)
* L'ultima versione beta dell'Emulatore Dolphin

##### Istruzioni

1. Dopo [aver creato il tuo backup della NAND](bootmii), inserisci la tua scheda SD al tuo PC e apri l'Emulatore Dolphin.
1. Seleziona `Strumenti > Gestisci NAND > Importa Backup NAND BootMii`.
1. Nella finestra di dialogo file che si apre, apri la tua scheda SD e seleziona `nand.bin`.
</div>

<div id="wii-dol-svgm" class="tabcontent via" markdown="1">
Assicurati di aver installato [cIOS](cios) prima di seguire!
{: .notice--warning}

##### Di cosa hai bisogno

* L'Homebrew Channel sul tuo Wii/vWii
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)
* Una scheda SD o dispositivo USB
* L'ultima versione beta dell'Emulatore Dolphin

##### Istruzioni

1. Sul tuo Wii/Wii U, avvia l'Homebrew Channel e avvia SaveGame Manager GX.
1. Trova e seleziona il salvataggio che vuoi trasferire, seleziona `Extract` e poi `Default`.
    + Ripeti questo passaggio per gli altri salvataggi che vuoi trasferire.
1. Una volta estratti tutti i tuoi file di salvataggio, premi HOME ed esci da SaveGame Manager GX.
1. Inserisci la tua scheda SD o unità USB nel tuo PC.
1. Avvia l'Emulatore Dolphin.
1. Seleziona `Strumenti > Importa Salvataggio Wii...`.
1. Nella finestra di dialogo file che si apre, vai nella cartella `savegames` della tua scheda SD o unità USB e seleziona ciascun file `.bin` al suo interno.
Assicurati di aver installato [cIOS](cios) prima di seguire!
{: .notice--info}
</div>
</div>
</div>

<div id="dol" class="tabcontent" markdown="1">
{% capture dolphin-user-folder %}
`<User Folder>` si riferisce alla cartella aperta dall'opzione di menu `File -> Apri Cartella Utente`. ![](/images/dolphin/dolphin-user-folder.png)
{: .notice--info}
{% endcapture %}
{% capture dolphin-emu-memcard-manager %}
Crea una cartella di nome `MCBACKUP` nella tua scheda SD o unità USB e sposta i file `.gci` che hai appena copiato al suo interno.
{{ dolphin-emu-memcard-manager }}
{% endcapture %}
Tutti i metodi elencati qui presuppongono che tu abbia l'[ultima versione Beta o di sviluppo dell'Emulatore Dolphin](https://dolphin-emu.org/download).
{: .notice--info}

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-wii')">A un Wii/vWii</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-gcmc')">A una memory card di GameCube</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-emumc')">A Nintendont</button>

<div id="dol-wii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-data')">tramite Gestione dati</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-svgm')">tramite SaveGame Manager GX</button>

<div id="dol-wii-data" class="tabcontent via" markdown="1">

##### Di cosa hai bisogno

* una scheda SD

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. Se stai esportando un salvataggio di un gioco, fai clic destro sul gioco nella finestra dell'Emulatore Dolphin e seleziona `Esporta Salvataggio Wii`.
    + Se stai esportando tutti i tuoi salvataggi Wii da Dolphin, seleziona `Strumenti > Esporta tutti i Salvataggi Wii`.
![](/images/dolphin/export-wiisave.png)

1. Nella finestra di dialogo cartelle che si apre, seleziona la tua scheda SD. (Non entrare nelle altre cartelle!)
1. Espelli la tua scheda SD in modo sicuro, quindi inseriscila nel tuo Wii/Wii U.
    + Se sei su Wii U, assicurati di avviare la modalità Wii.
1. Seleziona il pulsante `Opzioni Wii` dall'angolo in basso a sinistra.
1. Seleziona `Gestione dati` (se sei su Wii), `Dati di salvataggio` e poi `Wii`.
1. Seleziona la scheda `Scheda SD` dall'angolo in alto a destra.
1. Seleziona ciascun salvataggio che vorresti copiare al tuo Wii/Wii U e seleziona `Copia`.
</div>

<div id="dol-wii-svgm" class="tabcontent via" markdown="1">
Assicurati di aver installato [cIOS](cios) prima di seguire!
{: .notice--warning}

##### Di cosa hai bisogno

* L'Homebrew Channel sul tuo Wii/vWii
* Una scheda SD o dispositivo USB
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. Se stai esportando un salvataggio di un gioco, fai clic destro sul gioco nella finestra dell'Emulatore Dolphin e seleziona `Esporta Salvataggio Wii`.
    + Se stai esportando tutti i tuoi salvataggi Wii da Dolphin, seleziona `Strumenti > Esporta tutti i Salvataggi Wii`.
1. Nella finestra di dialogo cartelle che si apre, seleziona la tua scheda SD o unità USB. (non entrare nelle altre cartelle!)
1. Espelli la tua scheda SD o unità USB in modo sicuro, quindi inseriscila nel tuo Wii/Wii U.
    + Se sei su Wii U, assicurati di avviare la modalità Wii.
1. Avvia l'Homebrew Channel e avvia SaveGame Manager GX.
1. Assicurati che la sorgente sia impostata su SD o USB.
1. Seleziona ciascuno dei tuoi salvataggi e clicca `Install`.
</div>
</div>

<div id="dol-gcmc" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* una Wii con le porte GameCube e l'Homebrew Channel installato
* Una scheda SD o dispositivo USB
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. Nel menu principale, seleziona `File > Apri Cartella Utente`.
![](/images/dolphin/open-user-folder.png)

1. Nella cartella che si apre, vai su `GC > [Regione salvataggi] > Card A`.
1. Copia i file `.gci` che vuoi trasferire sulla tua Memory Card.
1. Crea una cartella di nome `MCBACKUP` nella tua scheda SD o unità USB e sposta i file `.gci` che hai appena copiato al suo interno.
{{ dolphin-emu-memcard-manager }}

1. Scarica ed estrai GCMM nel root della tua scheda SD o unità USB.
1. Espelli la tua SD/USB dal tuo PC in modo sicuro, quindi inseriscila nel tuo Wii.
1. Avvia l'Homebrew Channel e avvia GCMM.
1. Seleziona il dispositivo dove sono stati copiati i file `.gci`.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi `+`/`X` per procedere con la modalità di ripristino.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot che contiene la tua Memory Card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Seleziona il salvataggio che vuoi ripristinare.
    + Se vuoi ripristinare tutti i salvataggi all'interno di `MCBACKUP`, premi `1`/`R`.
![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.
</div>

<div id="dol-emumc" class="tabcontent to" markdown="1">

##### Istruzioni

1. Apri l'Emulatore Dolphin e seleziona `Strumenti > Memory Card Manager` dal menu principale.
1. Clicca il pulsante `Apri` che è accanto allo Slot B.
1. Vai nella cartella `saves` nella tua scheda SD o unità USB e seleziona il file `.raw` con il nome dell'ID del gioco.
    + Se non hai già creato un salvataggio con Nintendont, seleziona `Crea` e imposta la dimensione della Memory Card a 251 blocchi.
    + Se utilizzi una Memory Card per tutti i giochi, apri il file `ninmem.raw`/`ninmemj.raw` dal root della tua SD/USB.
1. Se Dolphin archivia i tuoi salvataggi in una cartella GCI (per predefinito):
    + Clicca `Scambia a B`.
    + Clicca `Importa` e vai su `<REGION>/Card A/`.
    + Seleziona il (oppure i) file `.gci` che vuoi importare. Altrimenti, se Dolphin archivia i tuoi salvataggi in file `.raw`, Altrimenti, se Dolphin archivia i tuoi salvataggi in file `.raw`, semplicemente seleziona i tuoi salvataggi dal lato sinistro e seleziona `Copia su B`.
</div>
</div>

<div id="gcmc" class="tabcontent" markdown="1">
Tutti i metodi elencati qui richiedono un Wii con porte GameCube.
{: .notice--warning}

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-dol')">All'Emulatore Dolphin</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-emumc')">A Nintendont</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-gcmc')">Ad un'altra Memory Card</button>

<div id="gcmc-emumc" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Scarica ed estrai GCMM nel root della tua scheda SD o unità USB.
1. Espelli la tua SD/USB dal tuo PC in modo sicuro, quindi inseriscila nel tuo Wii.
1. Avvia l'Homebrew Channel e avvia GCMM.
1. Seleziona il dispositivo su cui copiare il file di salvataggio.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi `B` e `-`/`L` e`Y` per entrare in modalità backup Raw.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot che contiene la tua Memory Card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Appena completato il dump, premi un pulsante qualsiasi per continuare.
1. Premi HOME/START per uscire da GCMM.
1. Inserisci la tua scheda SD o unità USB nel tuo PC.
1. Copia il file `.raw` all'interno di `MCBACKUP` nel root del dispositivo utilizzato per Nintendont e rinominalo in `ninmem.raw`.
    + Se i tuoi giochi sono giapponesi, Nintendont userà `ninmemj.raw` perché i giochi giapponesi non funzioneranno tanto bene quando sono presenti salvataggi di altre regioni.
1. Avvia Nintendont e imposta l'opzione Memcard emulation a Multi [ ? ]
</div>

<div id="gcmc-dol" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Scarica ed estrai GCMM nel root della tua scheda SD o unità USB.
1. Espelli la tua SD/USB dal tuo PC in modo sicuro, quindi inseriscila nel tuo Wii.
1. Avvia l'Homebrew Channel e avvia GCMM.
1. Seleziona il dispositivo su cui copiare il file di salvataggio.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi `B` e `-`/`L` e `Y` per entrare in modalità backup Raw.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot che contiene la tua Memory Card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Appena completato il dump, premi un pulsante qualsiasi per continuare.
1. Premi HOME/START per uscire da GCMM.
1. Inserisci la tua scheda SD o unità USB nel tuo PC.
1. Apri l'Emulatore Dolphin e seleziona `Strumenti > Memory Card Manager` dal menu principale.
1. Clicca il pulsante `Apri` che è accanto allo Slot B.
1. Vai nella cartella `MCBACKUP` nella tua SD/USB e apri il file `.raw` appena creato.
1. Clicca `Scambia a B`.
1. Se Dolphin archivia i tuoi salvataggi in una cartella GCI (per predefinito):
    + Seleziona i salvataggi che vuoi copiare.
    + Clicca su `Esporta come .gci`.
    + Esporta i file `.gci` in `<REGION>/Card A/`.
1. Altrimenti, se Dolphin archivia i tuoi salvataggi in file `.raw`,
    + Seleziona i salvataggi che vuoi copiare.
    + Clicca `Copia su A`.
</div>

<div id="gcmc-gcmc" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* un Wii

##### Istruzioni

1. Inserisci entrambe le memory card nel tuo Wii.
1. Avvia il Menu Wii seleziona il pulsante Opzioni Wii dall'angolo in basso a sinistra.
![](/images/Wii/wii-options.png)

1. Seleziona `Gestione dati > Dati di salvataggio > Nintendo GameCube`.
1. Seleziona il salvataggio che vuoi copiare e seleziona `Copia`.
![](/images/homebrew/gcsaves/gc-data-management.png)
</div>
</div>
<
div id="emumc" class="tabcontent" markdown="1">

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-dol')">All'Emulatore Dolphin</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-gcmc')">A una Memory Card</button>

<div id="emumc-dol" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* L'ultima versione beta o di sviluppo dell'Emulatore Dolphin

##### Istruzioni

1. Inserisci la tua scheda SD o unità USB nel tuo PC.
1. Apri l'Emulatore Dolphin e seleziona `Strumenti > Memory Card Manager` dal menu principale.
1. Clicca il pulsante `Apri` che è accanto allo Slot B.
1. Entra nella cartella `saves` sulla tua SD/USB e apri il file `.raw` con il nome dell'ID del gioco.
1. Clicca `Scambia a B`.
1. Se Dolphin archivia i tuoi salvataggi in una cartella GCI (per predefinito):
    + Seleziona i salvataggi che vuoi copiare.
    + Clicca su `Esporta come .gci`.
    + Esporta i file `.gci` in `<REGION>/Card A/`.
1. Altrimenti, se Dolphin archivia i tuoi salvataggi in file `.raw`:
    + Seleziona i salvataggi che vuoi copiare.
    + Clicca `Copia su A`.
</div>
<

div id="emumc-gcmc" class="tabcontent to" markdown="1">

##### Di cosa hai bisogno

* L'Homebrew Channel installato sul tuo Wii
* Una scheda SD o dispositivo USB
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Memcard individuali (file .gci)

1. Inserisci la tua scheda SD o unità USB nel tuo PC.
1. Crea una cartella con il nome `MCBACKUP`.
1. Copia i file `.gci` dentro la cartella `saves` nella cartella `MCBACKUP`.
1. Scarica ed estrai GCMM nel root della tua scheda SD o unità USB.
1. Espelli la tua SD/USB dal tuo PC in modo sicuro, quindi inseriscila nel tuo Wii.
1. Avvia l'Homebrew Channel e avvia GCMM.
1. Seleziona il dispositivo dove sono stati copiati i file `.gci`.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi `+`/`X` per procedere con la modalità di ripristino.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot che contiene la tua Memory Card.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Seleziona il salvataggio che vuoi ripristinare.
    + Se vuoi ripristinare tutti i salvataggi all'interno di `MCBACKUP`, premi `1`/`R`.

    ![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.

<div>

</div>

<script>
    const tablinks     = document.getElementsByClassName('tablinks');
    const tablinks_to  = document.getElementsByClassName('tablinks to');
    const tablinks_via = document.getElementsByClassName('tablinks via');

    const tabcontent     = document.getElementsByClassName('tabcontent');
    const tabcontent_to  = document.getElementsByClassName('tabcontent to');
    const tabcontent_via = document.getElementsByClassName('tabcontent via');

    for (e of tabcontent) {
        e.style.display = 'none';
    }

    function openTab_from(evt, tabName) {
        for (t of tabcontent) t.style.display = 'none';
        for (b of tablinks) b.className = b.className.replace('btn--primary', 'btn--info');
        
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_to(evt, tabName) {
        for (t of tabcontent_to) t.style.display = 'none';
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_to) b.className = b.className.replace('btn--primary', 'btn--info');
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_via(evt, tabName) {
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
