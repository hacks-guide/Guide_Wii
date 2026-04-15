# LetterBomb

LetterBomb è un exploit per la console Wii che viene attivato usando la Bacheca Wii.

::: info

Per istruzioni su come formattare la tua scheda SD correttamente, vedi [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). È altamente consigliato controllare a causa dei problemi di formattare in FAT32.

:::

::: warning

NON usare alcun indirizzo MAC mostrato negli esempi di questa guida, perché daranno errore nel sito di HackMii. Usa il tuo!

:::

## Requisiti

- Una scheda SD formattata in FAT32 che sia di 32GB o meno
- Una console Wii con versione di sistema 4.3
- Un computer Windows/macOS/Linux con connessione a Internet

## Istruzioni

1. Accendi la console.

2. Vai su `Impostazioni console Wii`.

3. Prendi nota della lettera a destra della versione di sistema in alto a destra.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi corrispondenti.
   - Assicurati, anche, che ti trovi sulla versione di sistema 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviga su `Internet` > `Informazioni console Wii`.

5. Prendi nota del tuo indirizzo MAC.

   ![](/images/wii/MacAddress.png)

6. Sul tuo computer, apri il browser e vai sul [sito di HackMii](https://please.hackmii.com/).

7. Inserisci l'indirizzo MAC e la regione della tua console Wii.

8. Assicurati che `Bundle the HackMii Installer for me!` sia selezionato.

9. Taglia uno dei cavi.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Inserisci la scheda SD nel tuo computer.

11. Copia la cartella `private` e il file `boot.elf` dal `.zip` di LetterBomb nella root della tua scheda SD.

12. Reinserisci la scheda SD nella tua console.
    - La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore della console Wii. Usare un adattatore da SD a USB nella porta USB non funzionerà.

13. Sulla console Wii, ritorna al Menu Wii.

14. Avvia la Bacheca Wii.

15. Apri la lettera rossa con all'interno una bomba.
    - Assicurati che la data della console Wii sia corretta, o potresti non trovare la lettera.
    - In alcuni casi, la lettera potrebbe trovarsi nei giorni successivi o precedenti a quello attuale.
    - Se non vedi la lettera, controlla se compaiono errori nella sezione `Scheda SD` in `Gestione dati`. Se appaiono, ci potrebbe essere un problema con il formato della scheda SD o con il lettore SD della console.
    - Se la console Wii si blocca dopo aver cliccato sulla lettera, hai probabilmente scelto la regione sbagliata del menu di sistema per LetterBomb. Torna al Passaggio 2 e verifica di aver scelto la regione giusta.
    - Se è tutto corretto e il blocco persiste, riprova finché funzioni.

16. Se l'exploit è avvenuto con successo, il tuo dispositivo avrà caricato l'installer di HackMii.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::
