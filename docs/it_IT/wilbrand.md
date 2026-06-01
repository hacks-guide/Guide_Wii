# Wilbrand

Wilbrand è un exploit per Wii che viene eseguito tramite la Bacheca Wii. È compatibile con le versioni del menu Wii da 3.0 a 4.3 in tutte le regioni. In questa pagina ci sono elencati due metodi per creare il giusto exploit Wilbrand, ma Wilbrand Web è consigliato per la sua facilità d'uso.

::: info

Per istruzioni su come formattare una scheda SD in modo corretto, vedi [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllarla a causa dei problemi di formattazione in FAT32.

Le schede SD di dimensioni superiori a 2GB non funzionano con le versioni del menu Wii precedenti alla 4.0.

:::

::: warning

NON usare alcun indirizzo MAC mostrato negli esempi di questa guida, perché darà errore sul sito di HackMii. Usa il tuo!

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requisiti

- Una scheda SD [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Una console Wii versione 3.0 o successive

### Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` -> `Informazioni console Wii`.

5. Prendi nota dell'indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Sul computer, apri il browser e vai su [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Inserisci l'indirizzo MAC, la versione e la regione della console.

8. Assicurati che `Bundle the HackMii Installer for me!` sia selezionato.

9. Taglia uno dei cavi.

   ![](/images/exploits/wilbrand/web.png)

10. Clicca su "Download your .zip".

11. Inserisci la scheda SD nel computer.

12. Copia la cartella `private` e il file `boot.elf` dal `.zip` scaricato nella root della scheda SD.

13. Reinserisci la scheda SD nella console.
    - La scheda SD deve essere inserita nello slot SD situato nella parte anteriore della console. L'uso di un adattatore da SD a USB nella porta USB non funzionerà.

14. Sulla console Wii, ritorna al menu Wii.

15. Avvia la Bacheca Wii.

16. Apri la lettera verde con all'interno una bomba.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Assicurati che la data della console sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non la vedi, controlla se nella sezione `Scheda SD` di `Gestione dati` appaiono degli errori. Se dovessero apparire, potrebbe esserci un problema con il formato della scheda SD o con il lettore SD della console.

17. Se l'exploit ha avuto successo, la console avrà caricato l'HackMii Installer.
    - Se rimane bloccata su uno schermo nero, spegnila tenendo premuto il pulsante POWER, poi riprova.
    - Se, dopo aperto la lettera, vieni riportato al menu Wii, assicurati che la levetta "Lock" sulla scheda SD sia nella posizione sbloccata.

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requisiti

- Un PC con Windows/macOS/Linux
- Una scheda SD [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Una console Wii versione 3.0 o successive
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` -> `Informazioni console Wii`.

5. Prendi nota dell'indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Copia tutti i file dal `.zip` di Wilbrand in una cartella sul tuo computer

7. Inserisci la scheda SD nel computer.

8. Apri un terminale all'interno della cartella in cui hai estratto Wilbrand.

9. Usando la versione e l'indirizzo MAC della console, esegui il seguente comando:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/GG/AAAA VERSIONE X:`

     - `X:` è la lettera assegnata alla scheda SD.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/GG/AAAA VERSIONE /media/mount_dir`

     - Se non hai aperto il terminale direttamente nella cartella in cui è stato estratto Wilbrand, usa prima il comando `cd` per entraci, es. `cd ~/Scrivania/Wilbrand` o `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` è la cartella in cui è montata la tua scheda SD. Può variare a seconda della distribuzione di Linux.

     ![](/images/exploits/wilbrand/linux.png)

10. Copia tutti i file dal `.zip` di hackmii_installer_v1.2 in una cartella sul tuo computer.

11. Copia il file `boot.elf` dal `.zip` di hackmii_installer_v1.2 nella root della scheda SD.

12. Reinserisci la scheda SD nella console.
    - La scheda SD deve essere inserita nello slot SD situato nella parte anteriore della console. L'uso di un adattatore da SD a USB nella porta USB non funzionerà.

13. Sulla console Wii, ritorna al menu Wii.

14. Avvia la Bacheca Wii.

15. Apri la lettera verde con all'interno una bomba.

    - Assicurati che la data della console sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non la vedi, controlla se nella sezione `Scheda SD` di `Gestione dati` appaiono degli errori. Se dovessero apparire, potrebbe esserci un problema con il formato della scheda SD o con il lettore SD della console.

    ![](/images/exploits/wilbrand/msgboard.png)

16. Se l'exploit ha avuto successo, la console avrà caricato l'HackMii Installer.
    - Se rimane bloccata su uno schermo nero, spegnila tenendo premuto il pulsante POWER, poi riprova.
    - Se, dopo aperto la lettera, vieni riportato al menu Wii, assicurati che la levetta "Lock" sulla scheda SD sia nella posizione sbloccata.

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::

::::

:::::
