---
title: "Ripristino con BootMii"
---

{% include toc title="Table of Contents" %}

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

Se hai BootMii installato come boot2, dovrai riavviare la console per eseguierlo. Salta i passaggi 1 e 2 se è questo il caso.
{: .notice--info}

Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](https://static.hackmii.com/bootmii_sd_files.zip) ed estrailo nel root della tua scheda SD, poi riprova.
{: .notice--warning}


I Wii Family Edition (senza le porte GameCube) NON POSSONO ripristinare backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. For additional help, please seek support.
{: .notice--danger}

DO NOT restore an unverified NAND backup, or one that is not from your Wii: this may lead to a WORSE BRICK. The same goes for using faulty SD cards.
{: .notice--danger}

### Requisiti

* An earlier NAND Backup made by [BootMii](bootmii)

### Restoring individual data from a NAND backup

There is likely a much safer and faster way to bring individual data back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

### Important preliminary notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Istruzioni

1. Avvia l'Homebrew Channel.
1. Premi il pulsante HOME, poi seleziona "Lancia BootMii".
    + Se l'Homebrew Channel è inaccessibile e hai Priiloader installato, dovresti potere avviare quest'ultimo e selezionare `BootMii IOS` per lanciare BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii ti informerà che farà una scan in "SIMULATION mode", puoi premere A o Reset per continuare.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii percorrerà il processo di restore attraverso una simulazione, esponendo cosa verrà cancellato e riscritto. Una volta finita la simulazione, hai un'ultima possibilità per annullare il Nand Restore. Se vuoi continuare, premi START o il bottone Eject per iniziare.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Premi il bottone Indietro (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
