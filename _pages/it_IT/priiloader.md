---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

[Priiloader](https://github.com/DacoTaco/priiloader) è un'utilità essenziale creato da [DacoTaco](https://github.com/DacoTaco) che aggiunge un livello di protezione da brick sul tuo Wii. Si carica prime se si carichi il Menu di Sistema Wii. The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di autoboot del Wii.

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

Priiloader on vWii does not have any impact on Wii U VC titles.

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

1. Per le seguenti opzioni, attiva le opzioni in base alla tua console:
    + Wii:
        + Se stai usando la modalità 480p: `480p graphics fix in the system menu`
        + Block Disc Updates
        + Block Online Updates
        + Se NON stai usando un display CRT: `Remove Deflicker`
    + vWii:
        + Block Online Updates
        + Wii System Settings via Options Button
        + Se NON stai usando un display CRT: `Remove Deflicker`
    + Wii mini:
        + Blocca Aggiornamenti da Disco
        + Se NON stai usando un display CRT: `Remove Deflicker`
1. Scorri in basso fino a `save settings` e premi A.
1. Premi `B` per tornare al menu principale.

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.
{: .notice--info}

[Guarda le Linee Guida per la Prevenzione di Brick](bricks#brick-prevention)<br> Queste linee guida elencano buone abitudini che ti aiuteranno a prevenire un brick al tuo Wii, che vanno oltre l'installazione di BootMii e Priiloader.
{: .notice--info}

### Wii: I passaggi successivi

Continua su [cIOS](cios)<br> Questa guida fornisce i passaggi su come installare una configurazione base di cIOS sul tuo Wii, attivando funzionalità nelle app tipo loader USB.
{: .notice--info}

### vWii: Next Steps

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.
{: .notice--info}

### Wii mini: I passaggi successivi

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.
{: .notice--info}
