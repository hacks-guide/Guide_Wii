# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) è uno strumento essenziale creato da [DacoTaco](https://github.com/DacoTaco) che aggiunge un livello di sicurezza dai brick sulla tua console Wii, caricandosi prima del menu di sistema. Può anche applicare varie hack che possono venir usate per migliorare, sbloccare e sistemare le funzionalità della tua console.

Inoltre, può essere usato per avviare rapidamente qualsiasi titolo o applicazione homebrew, oppure cambiare in che modo la tua console Wii si avvia.

::: info

Puoi vedere la pagina su [come usare Priiloader](priiloader-usage) per maggiori informazioni su Priiloader, insieme alle sue opzioni e hack.

:::

## Requisiti

- Una scheda SD o unità USB
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (il file `.zip`)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (il file `.zip`)

### Requisiti facoltativi per vWii (altamente raccomandati)

- Una scheda SD
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (download diretto)
  - [Aroma](https://wiiu.hacks.guide/aroma/getting-started) deve essere installato sulla tua console per far funzionare Priiloader Wii U Forwarder.

## Istruzioni

### Sezione I - Preparazione

1. Spegni la console.
2. Inserisci la scheda SD o unità USB nel tuo computer.
3. Copia la cartella `apps` dal `.zip` di LoadPriiloader nella root della tua scheda SD o unità USB.
4. Copia la cartella `apps` dal `.zip` di Priiloader nella root della tua scheda SD o unità USB.
5. (Solo vWii) Copia la cartella `wiiu` dal `.zip` di PriiloaderWiiUForwarder nella root della tua scheda SD.
6. Reinserisci la scheda SD o unità USB nella console.

### Sezione II - Installare Priiloader

1. Accendi la console.

2. Avvia l'Homebrew Channel.

3. Avvia Priiloader Installer dalla lista degli homebrew.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Premi il pulsante + sul telecomando Wii oppure il pulsante A su un controller GameCube.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Premi A per tornare all'Homebrew Channel.

### Sezione III - Avviare Priiloader

1. Premi il pulsante HOME e seleziona Exit to System Menu per uscire dall'Homebrew Channel.
2. La tua console quindi caricherà il menu di Priiloader.

   ![](/images/priiloader/menu.png)

:::details In futuro, potrai usare i seguenti metodi per accedere a Priiloader:

| Console  | Metodi di accesso                                                                                                                                                                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii      | <ul><li>Tenendo premuto il pulsante RESET mentre accendi la console, o mentre dentro il menu Wii</li><li>Tenendo premuto il pulsante ESC su una tastiera USB collegata mentre accendi la console</li><li>Eseguendo `Load Priiloader` dall'Homebrew Channel</li></ul> |
| vWii     | <ul><li>Tenendo premuto il pulsante ESC su una tastiera USB collegata mentre accendi la console</li><li>Eseguendo `Load Priiloader` dall'Homebrew Channel</li><li>Running the Priiloader forwarder from the Wii U Menu</li></ul>                                     |
| Wii mini | <ul><li>Tenendo premuto il pulsante ESC su una tastiera USB collegata mentre accendi la console</li><li>Eseguendo `Load Priiloader` dall'Homebrew Channel</li></ul>                                                                                                  |

:::

### Sezione III - Configurazione di Priiloader

::: warning

Se hai copiato l'installer di Priiloader su un'unità USB, assicurati di NON avere una scheda SD inserita contemporaneamente.

Altrimenti, Priiloader non riuscirà a trovare il file `hacks_hash.ini`.

:::

1. Scendi fino `System Menu Hacks` e premi `A`.

   ![](/images/priiloader/menu_hacks.png)

2. Abilita le seguenti opzioni a seconda della tua console:

   | Console  | Opzioni                                                                                                                                                                                                      |
   | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | Wii      | <ul><li>Se sei in modalità 480p: `480p graphics fix in the system menu`</li><li>`Block Disc Updates`</li><li>`Block Online Updates`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul> |
   | vWii     | <ul><li>`Block Online Updates`</li><li>`Wii System Settings via Options Button`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul>                                                     |
   | Wii mini | <ul><li>`Block Disc Updates`</li><li>Se NON stai usando uno schermo CRT: `Remove Deflicker`</li></ul>                                                                                                        |

3. Scendi fino `save settings` e premi A.

4. Premi `B` per tornare al menu principale.

---

::: info

[Guarda le linee guida sulla prevenzione dei brick](bricks#brick-prevention)

Queste linee guida elencano risorse che ti aiuteranno a prevenire di brickare la tua console Wii, oltre ad avere BootMii e Priiloader installati.

:::

---

::: tip

Continua con [i cIOS](cios)

Questa guida fornisce passaggi su come avere una lista base di cIOS installati sulla tua console, abilitando alcune funzionalità aggiuntive in applicazioni come gli USB Loader.

:::
