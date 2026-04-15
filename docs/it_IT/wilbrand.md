# Wilbrand

Wilbrand è un exploit per la console Wii che viene attivato usando la Bacheca Wii. È compatibile con le versioni del menu Wii da 3.0 a 4.3 in tutte le regioni. Ci sono due metodi elencati in questa pagina utilizzati per creare il corretto exploit Wilbrand, ma Wilbrand Web è consigliato per la sua facilità di utilizzo.

::: info

Per istruzioni su come formattare la tua scheda SD correttamente, vedi [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllare a causa dei problemi di formattare in FAT32.

Le schede SD di dimensioni maggiori a 2GB non funzioneranno su versioni del menu Wii precedenti alla 4.0.

:::

::: warning

NON usare alcun indirizzo MAC mostrato negli esempi di questa guida, perché daranno errore nel sito di HackMii. Usa il tuo!

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requisiti

- Una scheda SD [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Una console Wii versione 3.0 o successiva

### Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` > `Informazioni console Wii`.

5. Prendi nota del tuo indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Sul tuo computer, apri il browser e vai su [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Inserisci l'indirizzo MAC, versione e la regione della console Wii.

8. Assicurati che `Bundle the HackMii Installer for me!` sia selezionato.

9. Taglia uno dei cavi.

   ![](/images/exploits/wilbrand/web.png)

10. Clicca su "Download your .zip".

11. Inserisci la scheda SD nel tuo computer.

12. Copia la cartella `private` e il file `boot.elf` dal file `.zip` scaricato nella root della tua scheda SD.

13. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore della console Wii. Usare un adattatore da USB a SD inserito nella porta USB della console Wii non funzionerà.

14. Sulla console Wii, ritorna al Menu Wii.

15. Avvia la Bacheca Wii.

16. Apri la lettera verde con all'interno una bomba.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Assicurati che la data di Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non vedi la lettera verde, controlla se appaiono degli errori nella sezione della scheda SD della `Gestione dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

17. Se l'exploit è avvenuto con successo, il tuo dispositivo avrà caricato l'installer di HackMii.
    - Se la Wii rimane bloccata su uno schermo nero, spegnila tenendo premuto il pulsante POWER, poi riprova.
    - Se vieni riportato al menu Wii dopo aver aperto la lettera, assicurati che la levetta lock sulla tua scheda SD sia nella posizione sbloccata.

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requisiti

- Un computer che esegue Windows, macOS o Linux
- Una scheda SD [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Una console Wii versione 3.0 o successiva
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera accanto alla versione di sistema, nell'angolo in alto a destra dello schermo.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` > `Informazioni console Wii`.

5. Prendi nota del tuo indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Copia tutti i file dal `.zip` di Wilbrand in una cartella sul tuo computer

7. Inserisci la scheda SD nel tuo computer.

8. Apri un terminale all'interno della cartella in cui è stato estratto Wilbrand.

9. Utilizzando la versione e l'indirizzo MAC della console Wii, esegui questo comando:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/GG/YYYY VERSION X:`

     - `X:` è la lettera dell'unità della tua scheda SD.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/GG/YYYY VERSION /media/mount_dir`

     - Se non hai aperto il tuo terminale direttamente nella cartella nella quale è stato estratto Wilbrand, prima usa `cd` per entraci, es. `cd ~/Scrivania/Wilbrand`
     - `/media/mount_dir` è la cartella in cui è montata la tua scheda SD. Può variare a seconda della tua distro di Linux.

     ![](/images/exploits/wilbrand/linux.png)

10. Copia tutti i file dal `.zip` di hackmii_installer_v1.2 in una cartella sul tuo computer.

11. Copia il file `boot.elf` dal `.zip` di hackmii_installer_v1.2 nella root della tua scheda SD.

12. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore della console Wii. Usare un adattatore da USB a SD inserito nella porta USB della console Wii non funzionerà.

13. Sulla console Wii, ritorna al Menu Wii.

14. Avvia la Bacheca Wii.

15. Apri la lettera verde con all'interno una bomba.

    - Assicurati che la data di Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non vedi la lettera verde, controlla se appaiono degli errori nella sezione della scheda SD della `Gestione dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD del Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

16. Se l'exploit è avvenuto con successo, il tuo dispositivo avrà caricato l'installer di HackMii.
    - Se la Wii rimane bloccata su uno schermo nero, spegnila tenendo premuto il pulsante POWER, poi riprova.
    - Se vieni riportato al menu Wii dopo aver aperto la lettera, assicurati che la levetta lock sulla tua scheda SD sia nella posizione sbloccata.

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::

::::

:::::
