---
outline: false
---

# cIOS

I cIOS, o custom IOS, sono versioni modificate di determinati IOS (ovvero parti del sistema del software di Wii) che permettono a homebrew come gli USB loader di funzionare dove prima non era possibile. Sebbene non siano obbligatori, la loro installazione è altamente consigliata, in quanto aumentano le funzionalità della console senza quasi nessuna conseguenza.

::::: tabs

:::: tab Wii/Family Edition

::: danger

Non installare gli IOS o il menu di sistema di vWii o Wii mini su Wii. Così facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà possibile selezionare le opzioni corrette nell'installer.

:::

## Requisiti

- Una console Wii con l'Homebrew Channel installato
- Una scheda SD o un'unità USB
- [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

## Istruzioni

### Sezione I - Scaricamento

::: warning

Il tuo browser o antivirus potrebbe segnalare NUSGet come malware, ma è un falso positivo. NUSGet NON contiene malware.

:::

::: tip

Se riesci a connettere Wii a Internet, puoi saltare alla [Sezione II](cios#section-ii---installing).

:::

1. Spegni la console, poi inserisci la scheda SD o l'unità USB nel computer.

2. Sul computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per gli utenti Windows, provate `NUSGet-Windows-x86_64-bin.zip`.

3. Estrai l'archivio ed esegui NUSGet.

4. Naviga su `IOS` -> `IOS 38` -> `World` e clicca due volte su `v4123`. Deseleziona `Mantieni contenuti criptati`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-4123.png)

5. Ripeti il passaggio sopra per `IOS 56 (v5661)`, `IOS 57 (v5918)` e `IOS 58 (v6175)`.

6. Una volta scaricati gli IOS sopraccitati, clicca sulla cartella accanto ad `Avvia download`. Questo aprirà il gestore file alla cartella download di NUSGet.
   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)

7. Questa cartella dovrebbe contenerne altre quattro con gli ID degli IOS, come mostrato qui.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)

8. Entra in ciascuna cartella, troverai un file `IOS-XX-vXXXX-Wii.wad` in ognuna.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)

9. Posiziona ogni file WAD nella root della scheda SD o dell'unità USB.
   - Questa deve essere la stessa unità che contiene d2x cIOS Installer.

10. Assicurati che ogni WAD sia nominato come sotto per compatibilità con d2x-cios-installer:

    |   IOS  |            Nome del file           |
    | :----: | :--------------------------------: |
    | IOS 38 | IOS38-64-v4123.wad |
    | IOS 56 | IOS56-64-v5661.wad |
    | IOS 57 | IOS57-64-v5918.wad |
    | IOS 58 | IOS58-64-v6175.wad |

::: info

I file WAD dovrebbero trovarsi sulla scheda SD in questo modo:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### Sezione II - Installazione

1. Copia la cartella `apps` dal `.zip` di d2x-cios-installer nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

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

   L'avviso "`(c)IOS detected in slot ### will be overwritten`" può essere ignorato tranquillamente.

   :::

   ::: info

   Se vedi "`Slot ### already used in batch settings`" o "`cIOS already added in batch with revision ##### and slot ###`", premi `-`.

   (Se stai cercando di uscire dall'installer, il pulsante da premere è B, non Home.)

   :::

7. Premi `A`. Questo ti porterà alla mappa degli slot:

   ![](/images/cios/d2x_summary.png)

8. Premi di nuovo `A`.

   ![](/images/cios/d2x_installation.png)

9. Al termine dell'installazione, tornerai alla mappa degli slot. Assicurati che lo slot appena installato sia evidenziato in verde.

   ![](/images/cios/d2x_log.png)

   ::: info

   Se è evidenziato in rosso, prova a reinstallare il cIOS.

   Se durante la fase di download ricevi un errore (es. `tcp_connect timeout`, `net_gethostbyname failed: ...`), premi B per uscire e torna alla [Sezione I](#section-i---downloading).

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

12. Una volta installati tutti e 4 i cIOS, premi B per tornare all'Homebrew Channel.

::: info

Se hai scaricato i file WAD nella Sezione I, puoi ora rimuoverli dalla scheda SD/unità USB.

:::

---

::: tip

[Continua con l'installazione di Open Shop Channel](osc)

Ora che l'Homebrew Channel, BootMii, Priiloader e i cIOS sono installati, puoi installare l'Open Shop Channel: una repository affidabile per le app homebrew che può essere navigata con o senza Wii.

:::

::::

:::: tab vWii (Wii U)

::: danger

Non installare gli IOS o il menu di sistema di Wii o Wii mini su vWii. Così facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà possibile selezionare le opzioni corrette nell'installer.

:::

## Requisiti

- Una console Wii U con l'Homebrew Channel installato su vWii
- Una scheda SD o un'unità USB
- [d2x cIOS Installer per vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

## Istruzioni

### Sezione I - Scaricamento

::: warning

Il tuo browser o antivirus potrebbe segnalare NUSGet come malware, ma è un falso positivo. NUSGet NON contiene malware.

:::

::: tip

Se riesci a connettere vWii a Internet, puoi saltare alla [Sezione II](cios#section-ii---installing-1).

:::

1. Spegni la console, poi inserisci la scheda SD o l'unità USB nel computer.

2. Sul computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per gli utenti Windows, provate `NUSGet-Windows-x86_64-bin.zip`.

3. Estrai l'archivio ed esegui NUSGet.

4. Seleziona la piattaforma `vWii`, poi naviga su `IOS` -> `IOS 38` -> `World` e clicca due volte su `v4380`. Deseleziona `Mantieni contenuti criptati`. Spunta `Cripta titolo usando la Chiave Comune Wii`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-4380.png)

5. Ripeti il passaggio sopra per `IOS 56 (v5918)`, `IOS 57 (v6175)` e `IOS 58 (v6432)`.

6. Una volta scaricati gli IOS sopraccitati, clicca sulla cartella accanto ad `Avvia download`. Questo aprirà il gestore file alla cartella download di NUSGet.
   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)

7. Questa cartella dovrebbe contenerne altre quattro con gli ID degli IOS, come mostrato qui.

   ![](/images/desktop-apps/nusget/nusget-folder-vios.png)

8. Entra in ciascuna cartella, troverai un file `IOS-XX-vXXXX-vWii.wad` in ognuna.

   ![](/images/desktop-apps/nusget/nusget-vios-output.png)

9. Posiziona ogni file WAD nella root della scheda SD o dell'unità USB.
   - Questa deve essere la stessa unità che contiene d2x cIOS Installer.

10. Assicurati che ogni WAD sia nominato come sotto per compatibilità con d2x-cios-installer-vwii:

    |   IOS  |            Nome del file           |
    | :----: | :--------------------------------: |
    | IOS 38 | IOS38-64-v4380.wad |
    | IOS 56 | IOS56-64-v5918.wad |
    | IOS 57 | IOS57-64-v6175.wad |
    | IOS 58 | IOS58-64-v6432.wad |

::: info

I file WAD dovrebbero trovarsi sulla scheda SD in questo modo:

![](/images/desktop-apps/nusget/nusget-vios-on-sd.png)

:::

### Sezione II - Installazione

1. Copia la cartella `apps` dal `.zip` di d2x-cios-installer-vwii nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

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

9. Una volta installati tutti e 4 i cIOS, premi B per tornare all'Homebrew Channel.

---

::: tip

[Continua col completamento dell'installazione (Wii U)](vwii-finalizing-setup)

Ora che l'Homebrew Channel, Priiloader e i cIOS sono installati, puoi procedere a ripristinare le funzionalità che normalmente sono assenti da un menu vWii standard.

:::

::::

:::: tab Wii mini

::: danger

Non installare gli IOS o il menu di sistema di Wii o vWii su Wii mini. Così facendo rischierai di [brickare](bricks#ios-brick) la console.

:::

::: warning

Se stai usando una scheda SD, assicurati che la levetta "Lock" sia nella posizione sbloccata. Altrimenti, non sarà possibile selezionare le opzioni corrette nell'installer.

:::

::: info

Se hai bisogno di assistenza con questo tutorial, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (in inglese).

:::

## Requisiti

- Una console Wii mini con l'Homebrew Channel installato
- Un'unità USB
- [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Istruzioni

### Sezione I - Scaricamento

1. Spegni la console.
2. Inserisci l'unità USB nel computer.
3. Copia la cartella `apps` dal `.zip` di d2xl-cios-installer-mini nella root della scheda SD o dell'unità USB.
4. Reinserisci l'unità USB nella console.
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

   - Vedrai un numero di versione dell'IOS che termina in `v31775` o `v31776`. `IOS57-64-v31776` è per leconsole PAL (europee), mentre `IOS57-64-v31775` è per le console NTSC (nordamericane). Assicurati di selezionare la versione corretta per la tua console.
3. Premi A per installare.
   - Se l'installazione fallisce con l'errore `TMD version mismatch`, premi sinistra o destra sulla pulsantiera + sull'opzione `Select cIOS base` finché il numero di versione non sarà diverso da quello provato in precedenza. Il numero 57 non cambierà.
4. Al termine dell'operazione, esci dall'installer.

---

::: tip

[Continua col completamento dell'installazione (Wii mini)](mini-finalizing-setup)

Ora che l'Homebrew Channel, Priiloader e i cIOS sono installati, puoi procedere a ripristinare le funzionalità che normalmente sono assenti da un menu Wii mini standard.

:::

::::

:::::
