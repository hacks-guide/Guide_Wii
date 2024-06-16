---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Nonostante i [cIOS](https://wiibrew.org/wiki/Custom_IOS) siano stati per la maggior parte soppiantati da AHBPROT, che dà l'accesso completo all'hardware, essi hanno comunque delle applicazioni utili. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii users. If you have a Wii mini, follow [this guide](cios-mini) instead. If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Farlo [brickerà](bricks#ios-brick) probabilmente la tua console.
{: .notice--warning}

### Requisiti

* Un Wii
* Una scheda SD o dispositivo USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Assicurati che, se stai usando la scheda SD, l'interruttore della proteziona scrittura sia in posizione disattivata, altrimenti non potrai selezionare le opzioni corrette nell'installer.
{: .notice--warning}

### Istruzioni

#### Sezione I - Download

Se non sei su Windows, puoi scaricare & eseguire [questo script](/assets/files/d2x_offline_ios.sh), e scaricherà i file WAD per te.
{: .notice--info}

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)
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


1. Copia la cartella `apps` dal `.zip` di d2x-cios-installer al root della tua scheda SD o dispositivo USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia d2x cIOS Installer dalla lista degli homebrew.
1. Imposta le opzioni in modo che corrispondano a quanto segue:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.
    {: .notice--info}

    Se stai vedendo "`Slot ### already used in batch settings`" oppure "`cIOS already added in batch with revision ##### and slot ###`", premi `-` per disabilitare la modalità batch. <br> (Se stai cercando di uscire dall'installer, il pulsante è B, non Home.)
    {: .notice--info}

1. Premi `A`. Questo ti porterà alla mappa degli slot:

    ![](/images/cios/d2x_summary.png)

1. Premi `A` nuovamente.

    ![](/images/cios/d2x_installation.png)

1. Appena terminata l'installazione, tornerai alla mappa degli slot. Assicurati che lo slot appena installato sia evidenziato in verde.

    ![](/images/cios/d2x_log.png)

    Se lo slot è evidenziato in rosso, ritenta l'installazione del cIOS. <br> Se stai riscontrando un errore prima/durante le fasi di download, premi B per uscire e continua dalla [Sezione I](#section-i---downloading).
    {: .notice--info}

1. Premi `A`. Questo ti riporterà alla schermata di configurazione.
1. Ripeti i 5 passaggi precedenti con le seguenti configurazioni:

    + Installazione del cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Installazione del cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Installazione del cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Una volta finito con tutti i 4 cIOS, premi B per tornare all'Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br> Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
