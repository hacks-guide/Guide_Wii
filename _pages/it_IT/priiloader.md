---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

[Priiloader](https://github.com/DacoTaco/priiloader) è un'utilità essenziale creato da [DacoTaco](https://github.com/DacoTaco) che aggiunge un livello di protezione da brick sul tuo Wii. Si carica prime se si carichi il Menu di Sistema Wii. Può anche applicare hack che possono essere utilizzate per migliorare, sbloccare e/o correggere molte funzioni del Menu di sistema.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di autoboot del Wii.


Per ulteriori informazioni su Priiloader e sulle sue opzioni, puoi vedere la pagina [Usare Priiloader](priiloader-usage).
{: .notice--info}

### Requisiti

* Una scheda SD o dispositivo USB
* [Priiloader Installer](https://oscwii.org/library/app/priiloader) (il file `.zip`)
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (il file `.zip`)

#### Requisiti facoltativi per vWii (altamente raccomandati)

* Una scheda SD
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (download diretto)
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) deve essere installato sulla console affinché il Priiloader Wii U Forwarder possa funzionare.

### Istruzioni

{% capture vwii-notes %}

Se stai usando un vWii:

+ NON installare un tema dopo aver installato Priiloader, altrimenti c'è il rischio di BRICK sul vWii!
+ Priiloader non avrà effetto su titoli VC per Wii U.

{% endcapture %}

<div class="notice--danger">{{ vwii-notes | markdownify }}</div>

#### Sezione I - Preparazione

1. Spegni la console.
1. Inserisci la scheda SD o dispositivo USB nel tuo computer.
1. Copia la cartella `apps` dal `.zip` di LoadPriiloader al root della tua scheda SD o unità USB.
1. Copia la cartella `apps` dal `.zip` di Priiloader al root della tua scheda SD o unità USB.
1. (Solo per vWii) Copia la cartella `wiiu` dal `.zip` di PriiloaderWiiUForwarder al root della scheda SD.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

#### Sezione II - Installazione di Priiloader

1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia Priiloader Installer dalla lista degli homebrew.
1. Premi il pulsante + sul telecomando Wii oppure il pulsante A su un controller GameCube.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Premi A per tornare all'Homebrew Channel.

#### Sezione III - Avvio di Priiloader

1. Premi il pulsante HOME e seleziona Ritorna al Menu di Sistema per uscire dall'Homebrew Channel.
1. La tua console quindi caricherà il menu di Priiloader.

    ![](/images/priiloader/menu.png)

Successivamente, per entrarci dovrai:

+ Tenere premuto il pulsante RESET sul Wii durante l'accensione
    + Solo Wii
+ Tenere premuto il tasto ESC su una tastiera USB connessa durante l'accensione della console
    + Wii, vWii e mini
+ Eseguire "Load Priiloader" dall'HBC
    + Wii, vWii e mini
+ Usare il "Priiloader Wii U Forwarder"
    + Solo vWii

#### Sezione III - Configurazione di Priiloader

1. Scorri in basso fino a `System Menu Hacks` e premi `A`.

    ![](/images/priiloader/menu_hacks.png)

    Se hai inserito il Priiloader Installer sulla tua unità USB, assicurati di non avere una scheda SD inserita allo stesso tempo. <br> Altrimenti, Priiloader potrebbe fallire a trovare il file `hacks_hash.ini`.
    {: .notice--warning}

1. Scorri fino a ciascuna delle seguenti opzioni e premi `A`:
    + `Block Online Updates`
    + Se NON stai usando un display CRT: `Remove Deflicker`
1. Per le seguenti opzioni, attiva le opzioni in base alla tua console:
    + Wii:
        + Se stai usando la modalità 480p: `480p graphics fix in the system menu`
        + Block Disc Updates
    + Wii mini:
        + Block Disc Updates
1. Scorri in basso fino a `save settings` e premi A.
1. Premi `B` per tornare al menu principale.

### Wii mini: I passaggi successivi

Continua su [Wii mini cIOS](cios-mini)<br> Questa guidà fornisce istruzioni di installazione per il cIOS su Wii mini.
{: .notice--info}

### Wii: I passaggi successivi

Se sei arrivato a questo punto, congratulazioni! Hai finito con la sezione richiesta della guida principale! Puoi continuare se vuoi sapere di più, ma tutto ciò che è oltre questo punto è facoltativo.
{: .notice--success}

Continua su [cIOS](cios)<br> Questa guida fornisce i passaggi su come installare una configurazione base di cIOS sul tuo Wii, attivando funzionalità nelle app tipo loader USB.
{: .notice--info}

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}
