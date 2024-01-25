---
title: "Backup BootMii"
---

{% include toc title="Table of Contents" %}

BootMii permette di eseguire il backup e il ripristino della memoria NAND del tuo Wii. Questa pagina ti guiderà su come eseguire il backup della NAND del tuo Wii su una scheda SD, che potrai usare come vuoi.

Hai bisogno di una **scheda SD** per usare BootMii, ma specialmente per creare backup della NAND. Se non hai una scheda SD a portata di mano in questo momento, puoi saltare questa pagina, ma è FORTEMENTE CONSIGLIATO di tornare su questa pagina dopo per eseguire il backup della tua NAND.
{: .notice--warning}

### Requisiti

* Una scheda SD con un spazio disponibile minimo di 512MB (1GB o più sono consigliati)

### Istruzioni

Se hai BootMii installato come boot2, dovrai riavviare la console per eseguierlo. Salta i passaggi 1 e 2 se è questo il caso.
{: .notice--info}

1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Premi il tasto HOME, poi seleziona "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    Se il pulsante `Launch BootMii` non appare nell'Homebrew Channel, [rilancia l'HackMii Installer](hackmii) e installa BootMii.
    {: .notice--warning}

    Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](/assets/files/bootmii_sd_files.zip) ed estrailo nella root della tua scheda SD, poi riprova.
    {: .notice--warning}

1. Dovresti vedere un'immagine a schermo simile a questa qui sotto:

    ![](/images/bootmii/BootMii_Main.png)

    Navigare in BootMii è impossibile usando un Wii Remote. Devi usare i tasti POWER e RESET sulla tua console, o un controller GameCube inserito nella porta 1. To navigate between options, press POWER. To select an option, press RESET.
    {: .notice--info}

1. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

    ![](/images/bootmii/BootMii_Gears.png)

1. Seleziona il primo pulsante a sinistra.

    ![](/images/bootmii/BootMii_Backup.png)

1. Un backup della NAND inizierà. Puoi guardare i progressi sullo schermo.
    + I "Bad Blocks" sono normali, e derivano probabilmente dal binning della NAND in fabbrica. Non preoccuparti se ne vedi alcuni sul backup della NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Non appena la prima scan sarà terminata, BootMii verificherà il backup. Idealmente, tutti i blocchi dovrebbero essere verdi dopo il processo di verifica.
    + Se hai blocchi neri con pagine non correggibili, questi blocchi potrebbero non venire verificati. Finchè però tutti i blocchi verdi sono verificati con successo, non ci dovrebbero essere problemi.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Premi il pulsante Back (quello con una freccia), per premi il pulsante del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Nota: **ripristinare un backup della NAND è di solito l'ultima spiaggia**. Ci sono spesso dei modi migliori di ubrickare la tua console.
Fai del tuo meglio per [identificare la tua condizione di brick](bricks) e annullare l'azione che lo ha causato in primo luogo.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups.**
</div>

Come detto in precedenza, se hai BootMii installato in boot2, si avvierà ogni volta che accenderai la console. Se vuoi modificare questa feature, puoi usare l'app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Altrimenti, puoi editare il file `sd:/bootmii/bootmii.ini` manualmente.
{: .notice--info}

Due file saranno stati creati sul root della tua scheda SD: `nand.bin` e `keys.bin`. `nand.bin` è la memoria interna del tuo Wii, mentre `keys.bin` sono le chiavi della tua console.
{: .notice--info}

[Continua all'Installazione di Priiloader](priiloader)<br> Priiloader aggiunge un secondo strato di protezione dai brick, ed è fortemente consigliato anche se BootMii è stato installato su boot2. È specialmente importante per gli utenti di BootMii su IOS.
{: .notice--info}
