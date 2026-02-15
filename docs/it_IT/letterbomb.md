# LetterBomb

LetterBomb è un exploit del Wii che viene provocato usando la Bacheca Wii.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllare a causa dei problemi di formattare in FAT32.

:::

::: warning

NON usare NESSUN indirizzo MAC mostrato negli esempi di questa guida, perchè causeranno semplicemente un errore nel sito di HackMii. Usa il tuo!

:::

## Requirements

- An SD card formatted as FAT32 that is 32GB or less
- Un Wii con versione di sistema 4.3
- A Windows/macOS/Linux computer with an Internet connection

## Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Assicurati, anche, che ti trovi sulla versione di sistema 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Prendi nota del tuo indirizzo MAC COMPLETO.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Inserisci l'indirizzo MAC e la regione del tuo Wii.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Taglia entrambi i cavi.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Inserisci la scheda SD nel tuo computer.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.

13. Sul tuo Wii, ritorna al Menu Wii.

14. Avvia la Bacheca Wii.

15. Apri la lettera rossa con all'interno una bomba.
    - Assicurate che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello corrente.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.
    - Se il tuo Wii si blocca dopo aver cliccato sulla lettera, hai probabilmente scelto la regione sbagliata del menu di sistema per LetterBomb. Torna al Passaggio 2 e verifica di aver scelto la regione giusta.
    - Se è tutto corretto e il blocco persiste, riprova finchè non funziona.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
