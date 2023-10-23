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

1. Naviga in `Internet` > `Informazioni console Wii`.
1. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

1. Sul tuo computer, apri il tuo browser e vai sul [sito di HackMii](https://please.hackmii.com/).
1. Inserisci l'indirizzo MAC e la regione del tuo Wii.
1. Assicurati che `Bundle the HackMii Installer for me!` sia attivato.
1. Taglia entrambi i cavi.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Inserisci la scheda SD nel tuo computer.
1. Copia la cartella `private` e il file `boot.elf` dall'archivio `.zip` di LetterBomb al root della tua scheda SD.
1. Reinserisci la scheda SD nella tua console.
    + La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.
1. Sul tuo Wii, ritorna al Menu Wii.
1. Avvia la Bacheca Wii.
1. Apri la lettera rossa con all'interno una bomba.
    + Assicurate che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    + In alcuni casi, la lettera potrebbe trovarsi nei messaggi per domani o ieri.
    + Se non vedi la lettera rossa, controlla se appaiono degli errori nella sezione della scheda SD della `Gestione Dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.
    + Se il tuo Wii si blocca dopo aver cliccato sulla lettera, hai probabilmente scelto la regione sbagliata del menu di sistema per LetterBomb. Torna al Passaggio 2 e verifica di aver scelto la regione giusta.
    + Se è tutto corretto e il blocco persiste, riprova finchè non funziona.
1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continua all'Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}
