---
title: "Aggiornamento del Menu Wii alla versione 4.3"
---

{% include toc title="Table of Contents" %}

Questa guida spiegherà come aggiornare il tuo Menu Wii alla versione 4.3, se hai una Wii già softmoddata.

È molto più sicuro usare [ModMii](modmii) (solo su Windows) per aggiornare la tua console Wii alla versione 4.3.
{: .notice--warning}

### Requisiti

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* Una scheda SD o dispositivo USB
* Un computer Windows
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Istruzioni

#### Sezione I - Download

1. Estrai il file .zip per NUS Downloader Wii e apri l'applicazione.
1. Vai su `Database...` > `System` > `0000000100000002 - System Menu` e seleziona la versione corrispondente a quella mostrata nella tabella sottostante.
1. Controlla che l'opzione `Pack WAD` sia attivata.
1. Premi `Start NUS Download!`.
1. Apri la cartella `titles` -> `0000000100000002` -> (numero versione del Menu Wii) e copia il file .wad in una cartella chiamata `wad` nella tua scheda SD o dispositivo USB.
1. Ripeti gli step da 2 a 5 con `IOS` -> `000000010000003A` -> `Latest Version` e `IOS` -> `0000000100000050` -> `Latest Version`.
1. Dopo aver copiato tutti e 3 i file `.wad`, rimuovi la scheda SD/dispositivo USB dal tuo PC e mettila dentro la console Wii.

| Regione  | Versione Menu Wii |
| -------- | ----------------- |
| Giappone | v512 (4.3J)       |
| USA      | v513 (4.3U)       |
| Europa   | v514 (4.3E)       |
| Corea    | v518 (4.3K)       |

#### Sezione II - Installazione

1. Spegni la tua console. Tieni premuto RESET, poi accendila di nuovo.
1. Nel menu di Priiloader, seleziona `Homebrew Channel`.
    * Se il menu di Priiloader non compare per favore [installalo immediatamente](priiloader). Priiloader è obbligatorio per questa guida.
1. Avvia YAWM ModMii Edition.
1. Seleziona la tua scheda SD o dispositivo USB.
1. Premi `+` sulle WADs IOS80 e IOS58 per evidenziarle, poi premi A due volte per installarle.
1. Naviga sulla WAD del Menu Wii e premi A due volte per installarla.
1. Quando viene richieste di mantenere Priiloader installato, premere A per confermare.
1. Dopo aver installato tutti i file, premi il bottone HOME per ritornare all'Homebrew Channel.

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
