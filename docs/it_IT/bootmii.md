# Backup della Nand con BootMii

BootMii permette di eseguire il backup e il ripristino della memoria NAND della console Wii. Questa pagina ti guiderà su come eseguire il backup della NAND della console Wii su una scheda SD, che potrai usare come vuoi.

Leggi la nota sotto prima di procedere oltre.

:::details Informazioni importanti

- Dopo il termine della guida, due file saranno creati nella root della sua scheda SD: `nand.bin` e `keys.bin`. `nand.bin` è un backup della memoria interna della console, mentre `keys.bin` ne sono le chiavi.

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- Dovrai usare i pulsanti sulla tua console o un controller GameCube collegato alla porta 1 per navigare in BootMii. Per navigare con un controller GameCube, clicca sinistra/destra sulla pulsantiera + per spostarti e premi A per selezionare. Per navigare coi pulsanti della console, premi `POWER` per spostarti a destra e `RESET` per selezionare.

- Nota che **ripristinare un backup della NAND dev'essere la tua ultima risorsa**. Detto questo, puoi usare la [guida di ripristino da BootMii](bootmiirecover) per ripristinare il tuo backup, dove sono fornite più informazioni a proposito sui rischi e sulle alternative.

- Wii Family Edition e Wii mini NON POSSONO ripristinare backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino.

:::

::: danger

**Avvertenze**

- Hai bisogno di una **scheda SD** per usare BootMii, soprattutto per creare un backup della NAND. Se non hai una scheda SD a portata di mano in questo momento, puoi saltare questa pagina. Ma è FORTEMENTE CONSIGLIATO ritornarci in seguito.

- Se il pulsante `Launch BootMii` non appare nell'Homebrew Channel, [fai ripartire l'installer di HackMii](hackmii) e installa BootMii.

- Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](/assets/files/bootmii_sd_files.zip) ed estrailo nella root della tua scheda SD, poi riprova.

:::

## Requisiti

- Una scheda SD con un spazio disponibile minimo di 512MB (1GB o più sono consigliati)

## Istruzioni

1. Accendi la console.

2. Avvia l'Homebrew Channel.

3. Premi il pulsante HOME, poi seleziona "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Dovresti vedere un'immagine a schermo simile a questa qui sotto:

   ![](/images/bootmii/BootMii_Main.png)

5. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

   ![](/images/bootmii/BootMii_Gears.png)

6. Seleziona il primo pulsante a sinistra.

   ![](/images/bootmii/BootMii_Backup.png)

7. Un backup della NAND inizierà. Puoi guardare i progressi sullo schermo.

   - I "Bad Blocks" sono normali, e derivano probabilmente dal binning della NAND in fabbrica. Non preoccuparti se ne vedi alcuni sul backup della NAND.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Non appena la prima scan sarà terminata, BootMii verificherà il backup. Idealmente, tutti i blocchi dovrebbero essere verdi dopo il processo di verifica.

   - Se hai blocchi neri con pagine non correggibili, questi blocchi potrebbero non venire verificati. Finché i blocchi buoni (verdi) sono stati verificati correttamente, dovrebbe andare tutto a posto.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Premi il pulsante Back (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

   ![](/images/bootmii/BootMii_Return.png)

## Avvio automatico

Se sei riuscito a installare BootMii come boot2, ma non vuoi che appaia la schermata di BootMii ogni volta che accendi la console Wii, puoi impostarlo ad avviarsi automaticamente al Menu di sistema. Questo dovrebbe fare in modo che non ti accorgi nemmeno di avere BootMii installato come boot2.

1. Apri `SD:/bootmii/bootmii.ini` in un editor di testo, come il blocco note.
2. Cambia `#AUTOBOOT=SYSMENU` in `AUTOBOOT=SYSMENU`, cancellando `#`.
3. Poi cambia `#BOOTDELAY=5` in `BOOTDELAY=1`, cancellando `#` e cambiando il `5` in un `1`.
4. Salva il file ed esci.

::: info

Puoi anche usare l'app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) su Wii per cambiare queste impostazioni.

:::

## Caricare un backup della NAND sull'emulatore Dolphin

Il tuo backup della NAND può essere usato sull'emulatore Dolphin. Ciò è completamente opzionale.

1. Ottieni l'ultima versione beta o di sviluppo dell'emulatore Dolphin dal [sito di Dolphin](https://dolphin-emu.org/) e installalo sul tuo dispositivo.
2. Avvia l'emulatore Dolphin.
3. Clicca sulla scheda `Strumenti`, scendi fino a `Gestisci NAND`, poi seleziona `Importa backup NAND BootMii...`.
4. Trova il file `nand.bin` che si trova nella root della tua scheda SD e premi Apri.
5. Se chiede per un `keys.bin`, fai lo stesso procedimento del passaggio prima con questo file.

---

::: tip

[Continua con l'installazione di Priiloader](priiloader)

Priiloader aggiunge un secondo strato di protezione dai brick, ed è fortemente consigliato anche se BootMii è stato installato su boot2. È specialmente importante per gli utenti di BootMii su IOS.

:::
