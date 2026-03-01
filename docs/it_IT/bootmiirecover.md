# Recupero BootMii

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Se hai BootMii installato come IOS, RestoreMii ti chiedere il codice Konami attraverso un controller GameCube. This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## Ripristinare dati individuali da un backup della NAND

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

Per esempio, se vuoi ripristinare i dati della Bacheca Wii, usa Dolphin per importare il tuo backup della NAND. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Requirements

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## Instructions

1. Avvia l'Homebrew Channel.

2. Premi il pulsante HOME, poi seleziona "Launch BootMii".

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

   ![](/images/bootmii/BootMii_Gears.png)

4. Seleziona il pulsante di RestoreMii.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii ti informerà che farà una scan in "SIMULATION mode", puoi premere A o Reset per continuare.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Se BootMii è installato come IOS, inserisci il codice Konami sul tuo controller GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii percorrerà il processo di restore attraverso una simulazione, esponendo cosa verrà cancellato e riscritto. Una volta finita la simulazione, hai un'ultima possibilità per annullare il processo di ripristino. Se vuoi continuare, premi START o il bottone Eject per iniziare.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Premi qualsiasi pulsante sul tuo Wii o sul tuo controller GCN.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Premi il pulsante Back (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Click here to go back to the site index.](site-navigation)

:::
