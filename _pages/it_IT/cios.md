---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

Nonostante i [cIOS](https://wiibrew.org/wiki/Custom_IOS) siano stati per la maggior parte soppiantati da AHBPROT, che dà l'accesso completo all'hardware, essi hanno comunque delle applicazioni utili. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

Se hai un Wii mini, usa invece [questa](cios-mini) guida per cIOS. Provare a installare altri cIOS su un Wii mini non funzionerà.
{: .notice--warning}

### Requisiti

* Un Wii
* Una scheda SD o dispositivo USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Assicurati che, se stai usando la scheda SD, l'interruttore della proteziona scrittura sia in posizione disattivata, altrimenti non potrai selezionare le opzioni corrette nell'installer.
{: .notice--warning}

### Istruzioni

#### Sezione I - Download

Se il tuo Wii ha una connessione a internet, puoi saltare questa sezione. <br> Tuttavia, se incontri errori come `net_init failed`, `net_gethostbyname failed:`, o altri problemi durante la fase di download, questo permetterà al tuo Wii di saltare alla fase successiva.
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


1. Copia la cartella `apps` dal `.zip` di d2x-cios-installer al root della tua scheda SD o dispositivo USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia d2x cIOS Installer dalla lista degli homebrew.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

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

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br> Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
