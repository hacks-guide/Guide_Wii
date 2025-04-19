# Wilbrand

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

::: info

Ci sono due metodi elencati in questa pagina per creare correttamente l'exploit Wilbrand.

Wilbrand Web è consigliato per la sua facilità d'uso.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requirements

- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Un Wii sulla versione 3.0 o successiva

::: warning

Le schede SD di dimensioni maggiori a 2GB non funzioneranno su versioni del Menu Wii precedenti alla 4.0.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.

    - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Inserisci l'indirizzo MAC, versione e la regione del tuo Wii.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Taglia entrambi i cavi.

    ![](/images/exploits/wilbrand/web.png)

10. Clicca su "Download your .zip".

11. Inserisci la scheda SD nel tuo computer.

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.

14. Sul tuo Wii, ritorna al Menu Wii.

15. Open the Wii Message Board.

16. Apri la lettera verde con all'interno una bomba.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Assicurati che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello corrente.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

17. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requirements

- Un computer che esegue Windows, macOS o Linux
- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Un Wii sulla versione 3.0 o successiva
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

Le schede SD di dimensioni maggiori a 2GB non funzioneranno su versioni del Menu Wii precedenti alla 4.0.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.

    - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. Inserisci la scheda SD nel tuo computer.

8. Apri un terminale all'interno della cartella in cui è stato estratto Wilbrand.

9. Utilizzando la versione e l'indirizzo MAC del tuo Wii, esegui questo comando:

    - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

        - `X:` is the drive letter of your SD card.

        ![](/images/exploits/wilbrand/windows.png)

    - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

        - If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
        - `/media/mount_dir` is the folder your SD card is mounted in. Può variare a seconda della tua distro di Linux.

        ![](/images/exploits/wilbrand/linux.png)

10. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.

11. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.

12. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.

13. Sul tuo Wii, ritorna al Menu Wii.

14. Open the Wii Message Board.

15. Apri la lettera verde con all'interno una bomba.

    - Assicurati che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello corrente.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
