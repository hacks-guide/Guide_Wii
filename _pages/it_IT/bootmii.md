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
1. Premi il pulsante HOME, poi seleziona "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    Se il pulsante `Launch BootMii` non appare nell'Homebrew Channel, [rilancia l'HackMii Installer](hackmii) e installa BootMii.
    {: .notice--warning}

    Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](/assets/files/bootmii_sd_files.zip) ed estrailo nella root della tua scheda SD, poi riprova.
    {: .notice--warning}

1. Dovresti vedere un'immagine a schermo simile a questa qui sotto:

    ![](/images/bootmii/BootMii_Main.png)

    Navigare in BootMii è impossibile usando un Wii Remote. Devi usare i tasti POWER e RESET sulla tua console, o un controller GameCube inserito nella porta 1. Per navigare tra le opzioni, premi POWER. Per selezionare un'opzione, premi RESET.
    {: .notice--info}

1. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

    ![](/images/bootmii/BootMii_Gears.png)

1. Seleziona il primo pulsante a sinistra.

    ![](/images/bootmii/BootMii_Backup.png)

1. Un backup della NAND inizierà. Puoi guardare i progressi sullo schermo.
    + I "Bad Blocks" sono normali, e derivano probabilmente dal binning della NAND in fabbrica. Non preoccuparti se ne vedi alcuni sul backup della NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Non appena la prima scan sarà terminata, BootMii verificherà il backup. Idealmente, tutti i blocchi dovrebbero essere verdi dopo il processo di verifica.
    + Se hai blocchi neri con pagine non correggibili, questi blocchi potrebbero non venire verificati. Finché i blocchi buoni (verdi) sono stati verificati correttamente, dovrebbe andare tutto a posto.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Premi il pulsante Back (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Nota: **ripristinare un backup della NAND è di solito l'ultima risorsa**. Ci sono spesso metodi migliori per unbrickare la tua console.
Fai del tuo meglio per [identificare la tua condizione di brick](bricks) e annullare l'azione che lo ha causato.
Per ripristinare un backup della NAND dalla tua scheda SD, puoi seguire le istruzioni per [RestoreMii](bootmiirecover). **Wii Family Edition (Wii senza porte GameCube) NON POSSONO ripristinare backup della NAND senza modifiche hardware.**
</div>

Due file saranno stati creati sul root della tua scheda SD: `nand.bin` e `keys.bin`. `nand.bin` è il backup della memoria interna della tua console mentre `keys.bin` sono le chiavi d'accesso della tua console.
{: .notice--info}

### Autobooting

Se sei riuscito a installare BootMii come boot2, ma non vuoi che appaia la schermata di BootMii ogni volta che accendi la Wii, puoi impostarlo ad avviarsi automaticamente al Menu di sistema. Questo dovrebbe fare in modo che non ti accorgi nemmeno di avere BootMii installato come boot2.

1. Apri `SD:/bootmii/bootmii.ini` con un editor di testi, come il blocco note.
1. Cambia `#AUTOBOOT=SYSMENU` a `AUTOBOOT=SYSMENU` cancellando il `#`.
1. Poi cambia `#BOOTDELAY=5` a `BOOTDELAY=1` cancellando i `#` cambiando il `5` in un `1`.
1. Salva il file ed esci.

Puoi anche usare l'app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) sulla Wii per cambiare queste impostazioni.
{: .notice--info}

### Caricare un backup della NAND su Dolphin Emulator

Il tuo backup della NAND può essere usato sull'emulatore Dolphin.

1. Ottieni la versione beta o di sviluppo di Dolphin Emulator più recente dal [sito web di Dolphin](https://dolphin-emu.org/) e installala sul tuo dispositivo.
1. Avvia l'Emulatore Dolphin.
1. Clicca sulla scheda `Tools`, scorri in basso per trovare e cliccare `Manage NAND`, e poi seleziona `Import BootMii NAND backup...`.
1. Trova il file `nand.bin` che si trova nella radice della tua scheda SD e seleziona Open.
1. Se chiede un file `keys.bin`, trovalo nella radice della tua scheda SD e seleziona Open.

[Continua all'Installazione di Priiloader](priiloader)<br> Priiloader aggiunge un secondo strato di protezione dai brick, ed è fortemente consigliato anche se BootMii è stato installato su boot2. È specialmente importante per gli utenti di BootMii su IOS.
{: .notice--info}
