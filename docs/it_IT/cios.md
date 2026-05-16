---
outline: false
---

# cIOS

cIOS, o custom IOS, sono versioni patchate e modificate di certi IOS (ovvero parti del sistema del software Wii) che consentono a homebrew come gli USB loader di funzionare dove prima non potevano. Sebbene non siano richiesti, la loro installazione è altamente consigliata in quanto aumenta le funzionalità della console Wii con quasi nessuna conseguenza.

::::: tabs

:::: tab Wii/Family Edition

::: danger

Non provare a installare IOS di vWii o Wii mini o i loro menu di sistema su Wii. Cosi facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà disponibile selezionare le opzioni corrette nell'installer.

:::

## Requisiti

- Una console Wii con l'Homebrew Channel installato
- Una scheda SD o unità USB
- Il [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

## Istruzioni

### Sezione I - Download

::: tip

Il tuo browser o antivirus potrebbe segnalare NUSGet come malware - è un falso positivo. NUSGet NON contiene alcun malware.

:::

::: info

Se riesci a connettere Wii a Internet, puoi saltare alla [Sezione II](cios#section-ii---installing).

:::

1. Spegni la console e inserisci la scheda SD o unità USB nel tuo computer.

2. Sul tuo computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per utenti Windows, dovreste scegliere il file `NUSGet-Windows-x86_64-bin.zip`.

3. Estrai l'archivio ed esegui NUSGet.

4. Naviga su `IOS` > `IOS 38` > `World` e seleziona `v4123`. Deseleziona `Mantieni contenuti criptati`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-4123.png)

5. Ripeti i passaggi sopra per `IOS 56 (v5661)`, `IOS 57 (v5918)` e `IOS 58 (v6175)`.

6. Quando hai finito di scaricare gli IOS sovracitati, clicca la cartella vicino`Avvia download`. Questo aprirà il tuo gestore file alla cartella download di NUSGet.
   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)

7. Questa cartella dovrebbe contenerne altre quattro con gli ID degli IOS, come mostrato qui.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)

8. Entra nelle quattro cartelle, troverai un file `IOS-XX-vXXXX-Wii.wad` in ognuna.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)

9. Piazza ogni file WAD nella root della scheda SD o unità USB.
   - Questo deve essere lo stesso dispositivo che contiene d2x cIOS Installer.

10. Assicurati che ogni WAD sia nominato come sotto per compatibilità col d2x-cios-installer:

    |   IOS  |            Nome del file           |
    | :----: | :--------------------------------: |
    | IOS 38 | IOS38-64-v4123.wad |
    | IOS 56 | IOS56-64-v5661.wad |
    | IOS 57 | IOS57-64-v5918.wad |
    | IOS 58 | IOS58-64-v6175.wad |

::: info

I file WAD dovrebbero essere sulla tua scheda SD in questo modo:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### Sezione II - Installazione

1. Copia la cartella `apps` nel `.zip` di d2x-cios-installer nella root della tua scheda SD o unità USB.

2. Reinserisci la scheda SD o unità USB nella console.

3. Accendi la console.

4. Avvia l'Homebrew Channel.

5. Avvia d2x cIOS Installer dalla lista degli homebrew.

6. Imposta le opzioni in modo che corrispondano a quanto segue:

   ```html
   Select cIOS <d2x-v11-beta3>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   Se non vedi `d2x-v11-beta3`, esci dall'installer con B e assicurati che la scheda SD sia sbloccata.

   :::

   ::: info

   L'avviso "`(c)IOS detected in slot ### will be overwritten`" può essere ignorato in sicurezza.

   :::

   ::: info

   Se vedi "`Slot ### already used in batch settings`" o "`cIOS already added in batch with revision ##### and slot ###`", premi `-`.

   (Se stai cercando di uscire dall'installer, il pulsante è B, non Home.)

   :::

7. Premi `A`. Questo ti porterà alla mappa degli slot:

   ![](/images/cios/d2x_summary.png)

8. Premi di nuovo `A`.

   ![](/images/cios/d2x_installation.png)

9. Appena terminata l'installazione, tornerai alla mappa degli slot. Assicurati che lo slot appena installato sia evidenziato in verde.

   ![](/images/cios/d2x_log.png)

   ::: info

   Se è evidenziato in rosso, prova a reinstallare il cIOS.

   Se ricevi un errore prima o durante la fase di download (es. `tcp_connect timeout`, `net_gethostbyname failed: ...`), premi B per uscire e ritorna alla [Sezione I](#section-i---downloading).

   :::

10. Premi `A`. Questo ti riporterà alla schermata di configurazione.

11. Ripeti i 5 passaggi precedenti con le seguenti configurazioni:

    - Installazione del cIOS 249

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Installazione del cIOS 250

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Installazione del cIOS 251

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Una volta finito di installare tutti e 4 i cIOS, premi B per ritornare all'Homebrew Channel.

::: info

Se hai scaricato i 4 file WAD nella Sezione I, ora puoi rimuoverli dalla tua scheda SD/unità USB.

:::

---

::: tip

[Continua con l'installazione di Open Shop Channel](osc)

Ora che la tua console Wii ha una protezione dai brick adeguata, puoi installare l'Open Shop Channel, una repository affidabile per app homebrew che può essere navigata con o senza Wii.

:::

::::

:::: tab vWii (Wii U)

::: danger

Non provare a installare IOS di Wii o Wii mini o i loro menu di sistema su vWii. Cosi facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà disponibile selezionare le opzioni corrette nell'installer.

:::

## Requisiti

- Una console Wii U con l'Homebrew Channel installato sulla vWii
- Una scheda SD o unità USB
- Il [d2x cIOS Installer per vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

## Istruzioni

### Sezione I - Installazione

1. Copia la cartella `apps` nel `.zip` di d2x-cios-installer-vwii nella root della tua scheda SD o unità USB.

2. Reinserisci la scheda SD o unità USB nella console.

3. Accendi la console.

4. Avvia l'Homebrew Channel.

5. Avvia d2x cIOS Installer dalla lista degli homebrew.

6. Imposta le opzioni in modo che corrispondano a quanto segue:

   ```html
   Select cIOS <d2x-v11-beta3-vWii>
   Select cIOS base <38>
   Select cIOS slot <248>
   ```

   ![](/images/cios/d2x_v11_248_vwii.png)

   ::: info

   Se non vedi `d2x-v11-beta3-vWii`, esci dall'installer con B e assicurati che la scheda SD sia sbloccata.

   :::

7. Premi `A` per installare.

   ![](/images/cios/d2x_installation.png)

8. Ripeti i 2 passaggi precedenti con le seguenti configurazioni:

   - Installazione del cIOS 249

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <56>
     Select cIOS slot <249>
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - Installazione del cIOS 250

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <57>
     Select cIOS slot <250>
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - Installazione del cIOS 251

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <58>
     Select cIOS slot <251>
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Una volta finito di installare tutti e 4 i cIOS, premi B per ritornare all'Homebrew Channel.

---

::: tip

[Continua con completare l'installazione](vwii-finalizing-setup)

Ora che l'Homebrew Channel, Priiloader e i cIOS sono installati, puoi procedere a ripristinare le funzionalità che normalmente sono assenti da un menu vWii standard.

:::

::::

:::: tab Wii mini

::: danger

Non provare a installare IOS di Wii o vWii o i loro menu di sistema su Wii mini. Cosi facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà disponibile selezionare le opzioni corrette nell'installer.

:::

::: info

Se hai bisogno di assistenza con questo tutorial, unisciti al server Discord [Wii mini Hacking](https://discord.gg/6ryxnkS) (in inglese).

:::

## Requisiti

- Un Wii mini con l'Homebrew Channel installato
- Un'unità USB
- Il [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Istruzioni

### Sezione I - Download

1. Spegni la console.
2. Inserisci l'unità USB nel tuo computer.
3. Copia la cartella `apps` nel `.zip` di d2xl-cios-installer-mini nella root dell'unità USB.
4. Reinserisci il tuo dispositivo USB nella tua console.
5. Accendi la console.
6. Avvia l'Homebrew Channel.
7. Avvia dx2l cIOS Installer dalla lista di homebrew.

### Sezione II - Installazione

1. Seleziona `Continue`.
2. Imposta le opzioni come segue:

   ```html
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - Sotto le note, vedrai un numero di versione di IOS che termina in `v31775` o `v31776`. `IOS57-64-v31776` è per console PAL (europee), mentre `IOS57-64-v31775` è per console NTSC (Nord America). Assicurati di star selezionando la versione corretta per la tua console.
3. Premi A per installare.
   - Se l'installazione fallisce con un errore `TMD version mismatch`, premi sinistra o destra sulla pulsantiera + sull'opzione `Select cIOS base` finché il numero di versione non sia diverso da quello che hai provato prima. Il numero 57 non cambierà.
4. Quando il processo è completato, esci dall'installer.

---

::: tip

[Continua con completare l'installazione](mini-finalizing-setup)

:::

::::

:::::
