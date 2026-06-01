# Completamento dell'installazione (Wii mini)

Ora che l'Homebrew Channel, Priiloader, e i cIOS sono installati, finalizzeremo l'installazione per Wii mini installando le app cruciali per ripristinare varie le funzionalità mancanti del menu Wii mini rispetto a una console normale. Per risparmiare tempo, consigliamo di scaricare tutti gli homebrew elencati di seguito PRIMA di iniziare i passaggi successivi.

## Wii mini Ethernet Enable

Wii mini Ethernet Enable è un'app homebrew che consente alla console di supportare gli adattatori Ethernet cablati e di connettersi a Internet. Solo gli adattatori col chipset `ASIX AX88772` sono supportati. Inoltre, le applicazioni homebrew che necessitano di una connessione a Internet richiederanno di un hub USB, dato che la console dispone di una sola porta USB.

### Requisiti

- Un'unità USB
- [Wii mini Ethernet Enable](https://oscwii.org/library/app/Wii_Mini_Ethernet_Enable)

### Istruzioni

1. Copia la cartella `apps` da `Wii_Mini_Ethernet_Enable.zip` nella root della scheda SD o dell'unità USB.

2. Reinserisci l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia Wii Mini Ethernet Enable dalla lista degli homebrew.

   ![](/images/wii-mini/ethernet-enabler/launch-hb.png)

5. L'app dovrebbe mostrare `OK.` dopo aver abilitato l'Ethernet sulla console. Premi il pulsante `HOME` sul telecomando Wii per uscire dall'app.

   ![](/images/wii-mini/ethernet-enabler/success.png)

## System Channel Restorer

System Channel Restorer è un homebrew che ripristina i canali normalmente assenti nel menu Wii mini, come la versione Wii del Canale Mii e il Canale Foto.

### Requisiti

- Una scheda SD o un'unità USB
- Una connessione a Internet
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Istruzioni

1. Copia la cartella `apps` da `system-channel-restorer.zip` nella root della scheda SD o dell'unità USB.

2. Reinserisci la scheda SD o l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia System Channel Restorer dalla lista degli homebrew.

   ![](/images/wii-mini/sys-channel-restore/launch-hb.png)

5. L'installer verrà avviato. Se ricevi l'errore **-3 Failed to initialize network**, assicurati di aver collegato correttamente l'adattatore Ethernet. Potresti voler installare i seguenti canali, a meno che tu non ne preferisca altri:

   - EULA
   - Canale Mii

   ![](/images/wii-mini/sys-channel-restore/channel-select.png)

6. Una volta selezionati i canali, premi `+` per iniziare l'installazione.

   ![](/images/wii-mini/sys-channel-restore/install.png)

7. A installazione terminata, puoi tornare all'Homebrew Channel premendo il pulsante HOME.

## Accettazione dell'EULA

Per poter utilizzare funzioni come WiiConnect24, è necessario accettare l'`Accordo/Contatto` (EULA). Normalmente, ciò può essere fatto solo tramite le Impostazioni console Wii o il Canale Wii Shop. Tuttavia, è possibile scaricare un forwarder per avviare l'EULA direttamente dall'Homebrew Channel.

### Requisiti

- Un'unità USB
- [EULA Loader NTSC](/assets/files/EULA_Loader_NTSC.zip)
- [EULA Loader PAL](/assets/files/EULA_Loader_PAL.zip)

### Istruzioni

1. Scarica la versione del forwarder che corrisponde alla regione della console Wii mini. Non funzionerà se scarichi la versione sbagliata.

2. Copia la cartella `apps` da `EULA_Loader_XXX.zip` nella root della scheda SD o dell'unità USB.

3. Avvia l'Homebrew Channel.

4. Avvia EULA Loader (la tua regione) dalla lista degli homebrew.

   ![](/images/wii-mini/eula-forwarder/launch-hb.png)

5. Ora verrà mostrata l'EULA. Premi `Avanti` per procedere.

   ![](/images/wii-mini/eula-forwarder/eula-start.png)

6. Premi `ACCETTO` per accettarla. Ora tornerai al menu Wii.

   ![](/images/wii-mini/eula-forwarder/eula-accept.png)

---

::: tip

Continua con l'[installazione di Open Shop Channel](osc)

Ora che la configurazione di Wii mini è terminata, puoi installare l'Open Shop Channel: una repository affidabile per le app homebrew che può essere navigata con o senza Wii mini.

:::
