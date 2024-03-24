---
title: "Wilbrand"
---

{% include toc title="Table of Contents" %}

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

Ci sono due metodi elencati in questa pagina per creare correttamente l'exploit Wilbrand. Wilbrand Web è consigliato per la sua facilità d'uso.
{: .notice--info}

### Wilbrand Web (consigliato)

#### Requisiti

* Una scheda SD formattata come FAT32/MS-DOS (FAT)
* Un Wii sulla versione 3.0 o successiva

Le schede SD di dimensioni maggiori a 2GB non funzioneranno su versioni del Menu Wii precedenti alla 4.0.
{: .notice--warning}

#### Istruzioni

1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Naviga in `Internet` > `Informazioni console Wii`.
1. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

1. Sul tuo computer, apri il browser e vai su [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Inserisci l'indirizzo MAC, versione e la regione del tuo Wii.
1. Assicurati che `Bundle the HackMii Installer for me!` sia attivato.
1. Taglia uno dei due fili.

    ![](/images/exploits/wilbrand/web.png)

1. Clicca su "Download your .zip".
1. Inserisci la scheda SD nel tuo computer.
1. Copia la cartella `private` e il file `boot.elf` dall'archivio `.zip` appena scaricato al root della tua scheda SD.
1. Reinserisci la scheda SD nella tua console.
    + La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.
1. Sul tuo Wii, ritorna al Menu Wii.
1. Apri la Bacheca Wii sul tuo Wii.
1. Apri la lettera verde con all'interno una bomba.
    + Assicurati che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    + In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello corrente.
    + Se non vedi la lettera verde, controlla se appaiono degli errori nella sezione della scheda SD della `Gestione dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.
    + If this didn't work for you, try [Wilbrand CLI](#wilbrand-cli) or [try another exploit](get-started).

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}

### Wilbrand CLI

#### Requisiti

* Un computer che esegue Windows, macOS o Linux
* Una scheda SD formattata come FAT32/MS-DOS (FAT)
* Un Wii sulla versione 3.0 o successiva
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii Installer v1.2](https://bootmii.org/download/)

Le schede SD di dimensioni maggiori a 2GB non funzioneranno su versioni del Menu Wii precedenti alla 4.0.
{: .notice--warning}

#### Istruzioni

1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Naviga in `Internet` > `Informazioni console Wii`.
1. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

1. Copia tutti i file dal `.zip` di Wilbrand a una cartella sul tuo computer
1. Inserisci la scheda SD nel tuo computer.
1. Apri un terminale all'interno della cartella in cui è stato estratto Wilbrand.
1. Utilizzando la versione e l'indirizzo MAC del tuo Wii, esegui questo comando:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` è la lettera di unità della tua scheda SD.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + Se non hai aperto il tuo terminale direttamente nella cartella nella quale è stato estratto Wilbrand, prima usa `cd` per entraci, es. `cd ~/Scrivania/Wilbrand`
        + `/media/mount_dir` è la cartella sulla quale è stata montata la scheda SD. Può variare a seconda della tua distro di Linux.

        ![](/images/exploits/wilbrand/linux.png)

1. Copia tutti i file dal `.zip` di hackmii_installer_v1.2 a una cartella sul tuo computer.
1. Copia il file `boot.elf` dal `.zip` di hackmii_installer_v1.2 al root della tua scheda SD.
1. Reinserisci la scheda SD nella tua console.
    + La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.
1. Sul tuo Wii, ritorna al Menu Wii.
1. Avvia la Bacheca Wii.
1. Apri la lettera verde con all'interno una bomba.
    + Assicurati che la data del tuo Wii sia corretta, o potresti non trovare la lettera.
    + In alcuni casi, la lettera potrebbe trovarsi nei messaggi per domani o ieri.
    + Se non vedi la lettera verde, controlla se appaiono degli errori nella sezione della scheda SD della `Gestione dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}
