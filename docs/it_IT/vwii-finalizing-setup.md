# Completare l'installazione — vWii

Ora che l'Homebrew Channel, Priiloader, e i cIOS sono installati, finalizzeremo l'installazione per vWii installando app cruciali per ripristinare varie funzionalità mancanti del menu vWii rispetto a una console normale. Per risparmiare tempo, consigliamo di scaricare tutti gli homebrew elencati sotto PRIMA di iniziare i seguenti passaggi.

## Patched IOS 80 Installer

Patched IOS 80 Installer for vWii è un homebrew che prende la versione di IOS 80 attualmente installata e la patcha per omettere il controllo della firma. Questo permetterà ai canali con firma fasulla di essere avviati dal menu SD.

### Requisiti

- Una scheda SD o unità USB
- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)

### Istruzioni

1. Copia la cartella `apps` nel file `Patched_IOS80_Installer_for_vWii.zip` nella root della tua scheda SD o unità USB.

2. Reinserisci la scheda SD o unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia Patched IOS 80 Installer for vWii dalla lista degli homebrew.

   ![](/images/vwii/ios80-installer/launch-hb.png)

5. L'installer si avvierà, mostrerà un avviso e inizierà l'installazione dopo 30 secondi. Leggi l'avviso prima di continuare, poi premi un pulsante.

   ![](/images/vwii/ios80-installer/warning.png)

6. Dopo, l'installer patcherà e installerà l'IOS80. Una volta completato, puoi premere un pulsante qualsiasi per tornare all'Homebrew Channel.

   ![](/images/vwii/ios80-installer/install.png)

## System Channel Restorer

System Channel Restorer è un homebrew che ripristina i canali normalmente mancanti nel menu vWii, come la versione Wii del Canale Mii e il Canale Foto.

### Requisiti

- Una scheda SD o unità USB
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Istruzioni

1. Copia la cartella `apps` nel file `system-channel-restorer.zip` nella root della tua scheda SD o unità USB.

2. Reinserisci la scheda SD o unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia System Channel Restorer dalla lista degli homebrew.

   ![](/images/vwii/sys-channel-restore/launch-hb.png)

5. L'installer si avvierà. La maggior parte degli utenti vorrà selezionare i seguenti canali, a meno che non si preferisca installarne anche altri:

   - EULA
   - Canale Mii

   ![](/images/vwii/sys-channel-restore/channel-select.png)

6. Una volta selezionati i canali, premi il pulsante `+` per iniziare l'installazione.

   ![](/images/vwii/sys-channel-restore/install-begin.png)

7. Una volta terminato, puoi tornare all'Homebrew Channel premendo il pulsante HOME.

## WiiWare 4:3 DB Patcher

WiiWare 4:3 DB Patcher è un homebrew che patcha il database di canali in risoluzione a 4:3 della vWii, permettendo di usare quella a 16:9 in Vota Anche Tu e Concorsi Mii.

### Requisiti

- Una scheda SD o unità USB
- [WiiWare 4:3 DB Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Istruzioni

1. Copia la cartella `apps` nel file `ww-43db-patcher.zip` nella root della tua scheda SD o unità USB.

2. Reinserisci la scheda SD o unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia ww-43db-patcher dalla lista degli homebrew.

   ![](/images/vwii/43db-patcher/hb-launch.png)

5. L'installer si avvierà. Premi il pulsante `1` o `X` per patchare il database.

   ![](/images/vwii/43db-patcher/install-prompt.png)

6. Una volta patchato il database, l'installer salverà una copia di backup del database precedente. NON cancellare questo backup. Puoi premere un pulsante qualsiasi per tornare all'Homebrew Channel.

   ![](/images/vwii/43db-patcher/install-finish.png)

---

::: tip

Continua con l'[installazione di Open Shop Channel](osc)

Ora che la configurazione della tua vWii terminata, puoi installare l'Open Shop Channel, una repository affidabile per app homebrew che può essere navigata con o senza Wii.

:::
