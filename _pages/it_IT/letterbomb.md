---
title: "LetterBomb"
---

{% include toc title="Table of Contents" %}

Per istruzioni su come formattare la tua scheda SD correttamente, per favore consulta [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllare a causa dei problemi di formattare in FAT32.
{: .notice--info}

NON usare NESSUN indirizzo MAC mostrato negli esempi di questa guida, perchè causeranno semplicemente un errore nel sito di HackMii. Usa il tuo!
{: .notice--warning}

LetterBomb è un exploit del Wii che viene provocato usando la Bacheca Wii.

### Requisiti
* Una scheda SD formattata in FAT32
* Un Wii con versione di sistema 4.3
* Un computer Windows/MacOS/Linux con una connessione a internet

### Istruzioni

1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Prendi nota nell'angolo in alto a destra della lettera vicino alla versione di sistema.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.
    + Assicurati, anche, che ti trovi sulla versione di sistema 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).
1. Input your Wii MAC address and region.
1. Ensure `Bundle the HackMii Installer for me!` is checked.
1. Cut either wire.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insert your SD card into your computer.
1. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.
1. Reinsert your SD card into your console.
    + The SD card must be inserted in the SD card slot located in the front of the Wii. Using a USB to SD adapter plugged into the Wii's USB port will not work.
1. On your Wii, return to the Wii Menu.
1. Launch the Wii Message Board.
1. Open the red letter with a bomb.
    + Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    + In some cases, you may need to check the messages for tommorow or yesterday for the letter to show up.
    + If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii’s SD card reader.
    + If your Wii freezes after clicking on the letter, you most likely chose the wrong system menu region for LetterBomb. Go back to Step 2 and verify that you chose the right region.
    + If all is correct and there is freezing, keep on trying until it works.
1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}
