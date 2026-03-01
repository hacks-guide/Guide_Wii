# Backup della Nand con BootMii

BootMii permette di eseguire il backup e il ripristino della memoria NAND del tuo Wii. Questa pagina ti guiderà su come eseguire il backup della NAND del tuo Wii su una scheda SD, che potrai usare come vuoi.

Please read the below information before proceeding further.

:::details Important Information

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis and Wii minis CANNOT restore NAND backups. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino.

:::

::: danger

**Important Warnings**

- You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Se non hai una scheda SD a portata di mano in questo momento, puoi saltare questa pagina, ma è FORTEMENTE CONSIGLIATO di tornare su questa pagina dopo per eseguire il backup della tua NAND.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

## Requirements

- Una scheda SD con un spazio disponibile minimo di 512MB (1GB o più sono consigliati)

## Instructions

1. Power on your console.

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

## Autobooting

Se sei riuscito a installare BootMii come boot2, ma non vuoi che appaia la schermata di BootMii ogni volta che accendi la Wii, puoi impostarlo ad avviarsi automaticamente al Menu di sistema. Questo dovrebbe fare in modo che non ti accorgi nemmeno di avere BootMii installato come boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Salva il file ed esci.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Caricare un backup della NAND su Dolphin Emulator

Il tuo backup della NAND può essere usato sull'emulatore Dolphin. This is completely optional.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Avvia l'Emulatore Dolphin.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. È specialmente importante per gli utenti di BootMii su IOS.

:::
