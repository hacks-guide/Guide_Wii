---
title: "Salvataggi GameCube"
---

{% include toc title="Table of Contents" %}

Questa è una guida completa su come gestire i tuoi salvataggi di GameCube.

L'utilizzo di periferiche GameGube su un modello di Wii Family Edition o Wii mini richiederà la saldatura delle porte GameCube e/o i slot per le memory card.
{: .notice--info}

## Caricare un salvataggio individuale (file .gci) su una Memory Card fisica

### Requisiti

* Un Wii con porte GameCube
* Una scheda SD o unità USB
* [GCMM](https://oscwii.org/library/app/gcmm)

Se stai cercando salvataggi completati al 100%, li puoi trovare [qui](https://gamefaqs.gamespot.com/).
{: .notice--info}

Se stai cercando gli exploit per i dati di salvataggio per entrare su [Swiss](https://github.com/emukidid/swiss-gc/releases), li puoi vedere elencati [qui](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).
{: .notice--info}

### Istruzioni

#### Download

1. Estrai GCMM e inseriscilo nella cartella `apps` della tua scheda SD.
1. Sposta il file `.gci` in una cartella chiamata `MCBACKUP` nella root della scheda SD o dell'unità USB.
1. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Effettuare il ripristino

1. Inserisci la memory card fisica nello Slot A o Slot B.
1. Seleziona il dispositivo da cui vuoi ripristinare.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Su GCMM, premi X su un controller GameCube o + su un telecomando Wii.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot in cui la memory card è inserita.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Seleziona il salvataggio che vuoi ripristinare. Se hai più salvataggi da ripristinare, puoi premere R sul controller GameCube o 1 sul telecomando Wii per ripristinare tutti i tuoi salvataggi.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.

## Backup di un salvataggio (file .gci) su una SD o USB da una Memory Card fisica

### Requisiti

* Un Wii con porte GameCube
* Una scheda SD o unità USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Istruzioni

#### Download

1. Estrai GCMM e inseriscilo nella cartella `apps` della tua scheda SD.
1. Sposta il file `.gci` in una cartella chiamata `MCBACKUP` nella root della scheda SD o dell'unità USB.
1. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Effettuare il backup

1. Inserisci la memory card fisica nello Slot A o Slot B.
1. Seleziona il dispositivo su cui vuoi fare il backup.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Su GCMM, premi Y su un controller GameCube o - su un telecomando Wii.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Seleziona lo slot in cui la memory card è inserita.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Seleziona il salvataggio di cui vuoi farne il backup. Se hai più salvataggi da cui farne il backup, puoi premere R sul controller GameCube o 1 sul telecomando Wii per fare il backup di tutti i tuoi salvataggi.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Appena completato il backup, premi un pulsante qualsiasi per continuare.

## Backup della Memory Card fisica in una Memory Card emulata (file .raw)

### Requisiti

* Un Wii con porte GameCube
* Una scheda SD o unità USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Istruzioni

#### Download

1. Estrai GCMM e inseriscilo nella cartella `apps` della tua scheda SD.
1. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Dump del .raw

1. Inserisci la memory card nello Slot A o Slot B.
1. Seleziona il dispositivo su cui vuoi fare il dump.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi L e Y simultaneamente sul controller GameCube oppure B e - simultaneamente sul telecomando Wii per fare il backup su file .raw e seleziona lo slot in cui la memory card è inserita.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Appena completato il dump, premi un pulsante qualsiasi per continuare. Dovrebbe essere salvato in una cartella nella root della tua SD o USB chiamata `MCBACKUP`.

## Ripristino di un salvataggio da Memory Card virtuale a Memory Card fisica

### Requisiti

* Un Wii con porte GameCube
* Una scheda SD o unità USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Istruzioni

1. Se stai cercando di ripristinare un salvataggio da Dolphin, vai nella cheda `File` su Dolphin, seleziona Apri Cartella Utente, apri la cartella GC e trova il file `.raw`.
1. Se stai cercando di ripristinare un salvataggio di Memory Card emulata da Nintendont, vai nella cartella `saves` nella root della tua scheda SD o unità USB.
1. Inserisci la memory card nello Slot A o Slot B.
1. Seleziona il dispositivo da cui vuoi ripristinare.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Premi L e X simultaneamente sul controller GameCube oppure B e + simultaneamente sul telecomando Wii.
1. Seleziona lo slot in cui la memory card è inserita.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Dovrebbe aver ripristinato il file .raw sulla tua memory card. Appena completato il ripristino, premi un pulsante qualsiasi per continuare. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.

## Trasferire salvataggi tra due Memory Card fisiche

### Requisiti

* Un Wii con porte GameCube
* Almeno due memory card fisiche

### Istruzioni

1. Inserisci entrambe le memory card nel Wii.
1. Dal menu di sistema, vai su `Opzioni Wii`, `Gestione dati`, `Dati di salvataggio`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. Trova il salvataggio che vuoi, selezionalo e seleziona `Sposta o Copia`.

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
