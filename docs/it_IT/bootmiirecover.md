# Recupero BootMii

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

:::

::: warning

Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

I Wii Family Edition (senza le porte GameCube) NON POSSONO ripristinare backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. Per ulteriore assistenza, per favovre cerca supporto.

:::

::: danger

NON ripristinare un backup della NAND non verificato o che non proviene dal tuo Wii: farlo potrebbe portare a un BRICK PEGGIORE. Lo stesso vale per l'utilizzo di schede SD difettose.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Ripristinare dati individuali da un backup della NAND

C'è un metodo molto più sicuro e veloce di riportare indietro dei dati individuali sul tuo Wii, che coinvolge probabilmente l'utilizzo dell'emulatore Dolphin.

Per esempio, se vuoi ripristinare i dati della Bacheca Wii, usa Dolphin per importare il tuo backup della NAND. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Note preliminari importanti

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- Se hai BootMii installato come IOS, RestoreMii ti chiedere il codice Konami attraverso un controller GameCube.

- Devi usare i tasti POWER (destra) e RESET (select) sulla tua console, o su un controller GameCube collegato alla porta 1 per navigare in BootMii. Per navigare con un controller GameCube, clicca sinistra/destra sul +Control Pad sul controller GameCube. Per selezionare, premi A.

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

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
