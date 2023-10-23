---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

Nonostante i [cIOS](https://wiibrew.org/wiki/Custom_IOS) siano stati largamenti soppiantati da AHBPROT, che dà accesso hardware completo, essi hanno comunque delle applicazioni utili. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

Se hai un Wii mini, usa [questa](cios-mini) guida per cIOS invece. Provare a installare altri cIOS su un Wii mini non funzionerà.
{: .notice--warning}

### Requisiti

* Un Wii
* Una scheda SD o dispositivo USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Assicurati che, se stai usando la scheda SD, l'interruttore della proteziona scrittura sia in posizione disattivata, altrimenti non potrai selezionare le opzioni corrette nell'installer.
{: .notice--warning}

### Istruzioni

#### Sezione I - Download (Solo richiesto se il tuo Wii non ha Internet)

Se il tuo Wii ha una connessione a internet, puoi saltare questa sezione. <br> Tuttavia, se incontri errori come `tcp_read timeout` e `net_gethostbyname failed:`, questo permetterà al Wii di saltare la fase di download.
{: .notice--warning}

Se non sei su Windows, puoi scaricare & eseguire [questo script](/assets/files/d2x_offline_ios.sh), e scaricherà i file WAD per te.
{: .notice--info}

1. Spegni la console.
1. Inserisci la scheda SD o dispositivo USB nel tuo computer.
1. Sul tuo computer, scarica [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copia tutti i file dal `.zip` di NUS Downloader a una cartella sul tuo computer.
1. Esegui `NUS Downloader.exe`.
1. Naviga a `Database` > `IOS` > `IOS38`, poi seleziona `v4123`.
    + Assicurati che "Pack WAD" sia attivato.
    + *Non* attivare "Patch IOS". Quello è il ruolo del cIOS Installer.
1. Clicca `Start NUS Download!`.
1. Ripeti i passaggi sopra per `IOS56 v5661`, `IOS57 v5918` e `IOS58 v6175`.
1. Quando il processo è completato, ci sarà una cartella chiamata `titles` nella stessa cartella del NUS Downloader.
1. Apri la cartella `titles` e navigaci finchè non trovi i quattro file WAD che hai scaricato.
1. Piazza ogni file WAD sul root della tua SD o dispositivo USB.
    + Questo deve essere lo stesso dispositivo che contiene d2x cIOS Installer.

I file WAD dovrebbe essere sulla scheda SD in questo modo: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Sezione II - Installazione

Se `d2x-v11-beta1` non viene mostrato, prova a selezionare la base cIOS prima, poi controlla ancora. Questo può anche succedere se la tua scheda SD è bloccata.
{: .notice--info}

Per ogni cIOS che vuoi provare a installare, ti verrà prima mostrata una griglia degli IOS attivi sul Wii. Basta premere A di nuovo, e lo installerà. Poi, ti verrà mostrata la schermata dei risultati, premi A anche qui e vai al prossimo cIOS.
{: .notice--info}

1. Copia la cartella `apps` dal `.zip` di d2x-cios-installer al root della tua scheda SD o dispositivo USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia d2x cIOS Installer dalla lista degli homebrew.
1. Quando ti viene chiesto che IOS usare, seleziona IOS 58.
    + Dovrebbe funzionare in quasi tutti i casi.
1. Ora, installerai i cIOS individuali da 248-251. Le impostazioni esatte sono elencate di seguito.
    + Installazione del cIOS 248

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <38>
        Select cIOS slot <248>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_248.png)

    + Installazione del cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Installazione del cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Installazione del cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

Continua all'[Installazione dell'Open Shop Channel](osc) Ora che il tuo Wii ha una protezione dai brick adeguata, puoi installare l'Open Shop Channel, una repository affidabile per applicazioni homebrew che possono di cui si può usufruire sia con che senza il Wii.
{: .notice--info}
