# LetterBomb

LetterBomb è un exploit per Wii che viene eseguito tramite la Bacheca Wii.

::: info

Per istruzioni su come formattare una scheda SD in modo corretto, vedi [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllarla a causa dei problemi di formattazione in FAT32.

:::

::: warning

NON usare alcun indirizzo MAC mostrato negli esempi di questa guida, perché darà errore sul sito di HackMii. Usa il tuo!

:::

## Requisiti

- Una scheda SD formattata in FAT32 con una capacità massima di 32 GB
- Una console Wii con il menu di sistema versione 4.3
- Un PC con Windows/macOS/Linux connesso a Internet

## Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.
   - Assicurati di trovarti sulla versione 4.3 del sistema.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` -> `Informazioni console Wii`.

5. Prendi nota dell'indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Sul computer, apri il browser e vai sul [sito di HackMii](https://please.hackmii.com/).

7. Inserisci l'indirizzo MAC e la regione della console.

8. Assicurati che `Bundle the HackMii Installer for me!` sia selezionato.

9. Taglia uno dei cavi.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Inserisci la scheda SD nel computer.

11. Copia la cartella `private` e il file `boot.elf` dal `.zip` di LetterBomb nella root della scheda SD.

12. Reinserisci la scheda SD nella console.
    - La scheda SD deve essere inserita nello slot SD situato nella parte anteriore della console. L'uso di un adattatore da SD a USB nella porta USB non funzionerà.

13. Sulla console Wii, ritorna al menu Wii.

14. Avvia la bacheca Wii.

15. Apri la lettera rossa con all'interno una bomba.
    - Assicurati che la data della console sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non la vedi, controlla se nella sezione `Scheda SD` di `Gestione dati` appaiono degli errori. Se dovessero apparire, potrebbe esserci un problema con il formato della scheda SD o con il lettore SD della console.
    - Se la console si blocca dopo aver cliccato sulla lettera, hai probabilmente scelto la regione sbagliata del menu di sistema per LetterBomb. Torna al passaggio 2 e verifica di aver scelto la regione corretta.
    - Se è tutto corretto e continua a bloccarsi, riprova finché non funziona.

16. Se l'exploit ha avuto successo, la console avrà caricato l'HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::
