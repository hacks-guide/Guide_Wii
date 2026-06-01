# Completamento dell'installazione (Wii U)

Ora che l'Homebrew Channel, Priiloader, e i cIOS sono installati, finalizzeremo l'installazione per vWii installando le app cruciali per ripristinare varie le funzionalità mancanti del menu vWii rispetto a una console normale. Per risparmiare tempo, consigliamo di scaricare tutti gli homebrew elencati di seguito PRIMA di iniziare i passaggi successivi.

## Patched IOS 80 Installer

Patched IOS 80 Installer for vWii è un homebrew che modifica l'IOS 80 per omettere il controllo della firma. Ciò permetterà ai canali con firma fasulla di essere avviati dal menu scheda SD.

### Requisiti

- Una scheda SD o un'unità USB
- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)

### Istruzioni

1. Copia la cartella `apps` da `Patched_IOS80_Installer_for_vWii.zip` nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia Patched IOS 80 Installer for vWii dalla lista degli homebrew.

   ![](/images/vwii/ios80-installer/launch-hb.png)

5. L'installer verrà avviato, mostrerà un avviso e inizierà l'installazione dopo 30 secondi. Leggi l'avviso prima di continuare, poi premi un pulsante.

   ![](/images/vwii/ios80-installer/warning.png)

6. Dopo, l'installer modificherà e installerà l'IOS80. Al termine, puoi premere un pulsante qualsiasi per tornare all'Homebrew Channel.

   ![](/images/vwii/ios80-installer/install.png)

## System Channel Restorer

System Channel Restorer è un homebrew che ripristina i canali normalmente assenti nel menu vWii, come la versione Wii del Canale Mii e il Canale Foto.

### Requisiti

- Una scheda SD o un'unità USB
- Una connessione a Internet
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Istruzioni

1. Copia la cartella `apps` da `system-channel-restorer.zip` nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia System Channel Restorer dalla lista degli homebrew.

   ![](/images/vwii/sys-channel-restore/launch-hb.png)

5. L'installer verrà avviato.  Se ricevi l'errore **-3 Failed to initialize network**, assicurati che la console sia connessa a Internet. Potresti voler installare i seguenti canali, a meno che tu non ne preferisca altri:

   - EULA
   - Canale Mii

   ![](/images/vwii/sys-channel-restore/channel-select.png)

6. Una volta selezionati i canali, premi `+` per iniziare l'installazione.

   ![](/images/vwii/sys-channel-restore/install-begin.png)

7. A installazione terminata, puoi tornare all'Homebrew Channel premendo il pulsante HOME.

## WiiWare 4:3 DB Patcher

WiiWare 4:3 DB Patcher è un homebrew che modifica il database di canali in risoluzione a 4:3 di vWii, permettendo di usare quella a 16:9 in Vota Anche Tu e Concorsi Mii.

### Requisiti

- Una scheda SD o un'unità USB
- [WiiWare 4:3 DB Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Istruzioni

1. Copia la cartella `apps` da `ww-43db-patcher.zip` nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia ww-43db-patcher dalla lista degli homebrew.

   ![](/images/vwii/43db-patcher/hb-launch.png)

5. L'installer verrà avviato. Premi il pulsante `1` o `X` per modificare il database.

   ![](/images/vwii/43db-patcher/install-prompt.png)

6. Una volta modificato, l'installer salverà una copia di backup del database precedente. NON eliminare questo backup. Puoi premere un pulsante qualsiasi per tornare all'Homebrew Channel.

   ![](/images/vwii/43db-patcher/install-finish.png)

---

::: tip

Continua con l'[installazione di Open Shop Channel](osc)

Ora che la configurazione di vWii è terminata, puoi installare l'Open Shop Channel, una repository affidabile per le app homebrew che può essere navigata con o senza Wii.

:::
