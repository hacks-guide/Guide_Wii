# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader), creato da [DacoTaco](https://github.com/DacoTaco), è uno strumento essenziale che aggiunge un livello di sicurezza dai brick sulla console Wii, caricandosi prima del menu di sistema. Consente anche di applicare varie hack che possono essere utilizzate per migliorare, sbloccare e riparare le funzionalità della console.

Inoltre, può essere usato per avviare rapidamente qualsiasi titolo o applicazione homebrew o per modificare il modo in cui la console si avvia.

::: info

Per maggiori informazioni sulle opzioni e sugli hack, vedi la pagina su [come usare Priiloader](priiloader-usage).

:::

## Requisiti

- Una scheda SD o un'unità USB
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (il file `.zip`)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (il file `.zip`)

### Requisiti facoltativi per vWii (altamente consigliati)

- Una scheda SD
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (download diretto)
  - Per funzionare, [Aroma](https://wiiu.hacks.guide/aroma/getting-started) deve essere installato sulla console.

## Istruzioni

### Sezione I - Preparazione

1. Spegni la console.
2. Inserisci la scheda SD o l'unità USB nel computer.
3. Copia la cartella `apps` dal `.zip` di LoadPriiloader nella root della scheda SD o dell'unità USB.
4. Copia la cartella `apps` dal `.zip` di Priiloader nella root della scheda SD o dell'unità USB.
5. (Solo vWii) Copia la cartella `wiiu` dal `.zip` di PriiloaderWiiUForwarder nella root della scheda SD.
6. Reinserisci la scheda SD o l'unità USB nella console.

### Sezione II - Installazione di Priiloader

1. Accendi la console.

2. Avvia l'Homebrew Channel.

3. Avvia Priiloader Installer dalla lista degli homebrew.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Premi il pulsante `+` sul telecomando Wii o il pulsante `A` sul controller GameCube.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Premi `A` per tornare all'Homebrew Channel.

### Sezione III - Avviare Priiloader

1. Premi il pulsante HOME e seleziona `Exit to System Menu` per uscire dall'Homebrew Channel.
2. La console quindi caricherà il menu di Priiloader.

   ![](/images/priiloader/menu.png)

:::details In futuro, potrai usare i seguenti metodi per accedere a Priiloader:

| Console  | Metodi di accesso                                                                                                                                                                                                                                                                |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii      | <ul><li>Tenendo premuto il pulsante RESET durante l'accensione della console o mentre si è nel menu Wii</li><li>Tenendo premuto il tasto ESC durante l'accensione della console su una tastiera USB collegata</li><li>Avviando `Load Priiloader` dall'Homebrew Channel</li></ul> |
| vWii     | <ul><li>Tenendo premuto il tasto ESC durante l'accensione della console su una tastiera USB collegata</li><li>Avviando `Load Priiloader` dall'Homebrew Channel</li><li>Avviando il forwarder di Priiloader dal menu Wii U</li></ul>                                              |
| Wii mini | <ul><li>Tenendo premuto il tasto ESC durante l'accensione della console su una tastiera USB collegata</li><li>Avviando `Load Priiloader` dall'Homebrew Channel</li></ul>                                                                                                         |

:::

### Sezione III - Configurazione di Priiloader

::: warning

Se hai utilizzato un'unità USB per installare Priiloader, assicurati di non avere una scheda SD inserita.

Altrimenti, Priiloader non riuscirà a trovare il file `hacks_hash.ini`.

:::

1. Scendi fino a `System Menu Hacks` e premi `A`.

   ![](/images/priiloader/menu_hacks.png)

2. Abilita le seguenti opzioni in base alla tua console:

   | Console  | Opzioni                                                                                                                                                                                                      |
   | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | Wii      | <ul><li>Se sei in modalità 480p: `480p graphics fix in the system menu`</li><li>`Block Disc Updates`</li><li>`Block Online Updates`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul> |
   | vWii     | <ul><li>`Block Online Updates`</li><li>`Wii System Settings via Options Button`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul>                                                     |
   | Wii mini | <ul><li>`Block Disc Updates`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul>                                                                                                        |

3. Scendi fino a `save settings` e premi `A`.

4. Premi `B` per tornare al menu principale.

5. Seleziona "System Menu" per tornare al menu Wii.

---

::: info

[Vedi le linee guida sulla prevenzione dei brick](bricks#brick-prevention)

Queste linee guida elencano le risorse che ti aiuteranno a evitare di brickare la console, oltre ad avere BootMii e Priiloader installati.

:::

---

::: tip

Continua con [i cIOS](cios)

Questa guida fornirà istruzioni su come avere una lista base di cIOS installati sulla console, abilitando alcune funzionalità aggiuntive in applicazioni come gli USB loader.

:::
