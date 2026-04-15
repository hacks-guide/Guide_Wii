# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://it.wikipedia.org/wiki/WiiConnect24) era un servizio che permetteva agli utenti con console connesse a Internet di vedere il meteo e le notizie, inviare messaggi ad amici, partecipare a concorsi Mii, e altro. WiiConnect24 è stato discontinuato il 27 giugno 2013. Nonostante ciò, esiste un servizio che può ripristinare queste funzionalità, descritto sotto.

## WiiLink

[WiiLink](https://www.wiilink.ca/) è un sostituto di WiiConnect24 che ti permette di riottenere ed espandere le funzionalità della tua console. WiiLink ospita una patcher per i servizi che offre, dai canali internazionali come il Canale Notizie a delle esclusive regionali come Wii Room (Stanza Wii). Una guida su come installare questi servizi, insieme al patcher, può essere trovata sul [sito di WiiLink.](https://wiilink.ca/it/guide/)

## Aggiornare l'orologio RTC

In alcuni casi, l'orologio RTC sulla tua console Wii potrebbe essere desincronizzata, causando errori nel cercare di connettersi ai servizi di WiiConnect24, o altri. Nel caso che stai ricevendo errori come FORE000006, potresti voler usare le istruzioni sotto per risincronizzare l'orologio RTC interno della console attraverso Internet.

::::: tabs

:::: tab Wii

### Requisiti

- Una console Wii con connessione a Internet
- L'Homebrew Channel
- Una scheda SD o unità USB
- [sntp](https://oscwii.org/library/app/sntp)

### Istruzioni

1. Scarica ed estrai l'archivio zip di sntp nella root della tua scheda SD o dispositivo USB.

2. Inserisci la scheda SD o unità USB nella console Wii.

3. Avvia il Canale Homebrew.

4. Avvia sntp.

   ![](/images/wiiconnect24/sntp/sntp-hbc.png)

5. Usa le frecce destra/sinistra sulla pulsantiera + per selezionare il fuso orario che corrisponde alla tua ora attuale, poi premi il pulsante A per impostare la configurazione.

   ![](/images/wiiconnect24/sntp/sntp-time-select.png)

6. Premi il pulsante HOME per uscire.

   ![](/images/wiiconnect24/sntp/sntp-success.png)

::::

:::: tab Wii U (vWii)

### Requisiti

- Un ambiente vWii moddato
- L'Homebrew Channel
- Una scheda SD
- [Priiloader](priiloader)

### Istruzioni

1. Visita il sito [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) e riempi le informazioni.

   ![](/images/wiiconnect24/priiloader/patch-generate.png)

2. Seleziona "Generate" e copia le informazioni.

   ![](/images/wiiconnect24/priiloader/patch-copy.png)

3. Sulla tua scheda SD, vai su `SD:/apps/prilloader` e apri `hacks_hash.ini` con un editor di testo come il blocco note.

   ![](/images/wiiconnect24/priiloader/hacks-ini.png)

4. Incolla la patch in fondo al `hacks_hash.ini` e salva le modifiche.

   ![](/images/wiiconnect24/priiloader/hacks-ini-edit.png)

5. Ripeti i passaggi da 1 a 4 se la nazione in cui ti trovi partecipa all'ora legale.

6. Inserisci la tua scheda SD nella console Wii U.

7. [Avvia Priiloader](priiloader#section-iii---entering-priiloader) sulla vWii.

8. Seleziona `System Menu Hacks`, e assicurati che `Fix NWC24iSetUniversalTime` sia abilitato.

   ![](/images/wiiconnect24/priiloader/select-patch.png)

9. Ritorna al menu vWii.

::::

:::::

## Wiiconnect24 da Priiloader (vWii e Wii mini)

::: info

Sulla vWii, le opzioni [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) (Impostazioni di sistema vWii permanenti) e [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) (Abilita sempre WiiConnect24 all'avvio) non possono essere abilitate contemporaneamente. È consigliabile tenere abilitato solo il primo, dato che lì puoi abilitare WiiConnect24 senza problemi. Maggiori informazioni possono essere trovate nelle [domande frequenti su Priiloader](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

Se stai usando una console Wii mini o vWii, alcune opzioni da Priiloader devono essere abilitate per consentire una corretta funzionalità di WiiConnect24. In `System Menu Hacks`, abilita le seguenti opzioni dipendentemente dalla tua console:

| Console  | Opzioni di Priiloader                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vWii     | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii mini | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul>                                                                                                                                                                                                                                                                                 |

## WiiVCLaunch (vWii)

Se sei su Wii U, assicurati di installare WiiVCLaunch per assicurarti che le impostazioni di sistema non vengano sovrascritte quando esegui giochi Wii da Virtual Console dal menu Wii U.

### Requisiti

- Una console Wii U modificata con l'ambiente Aroma
- Una scheda SD
- [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases)

### Istruzioni

1. Spegni la console e inserisci la tua scheda SD nel PC.

2. Vai nel link GitHub citato sopra e scarica il file `WiiVCLaunch.wps`.

   ![](/images/wiiconnect24/wiivclaunch/wps-download.png)

3. Copia il file `WiiVCLaunch.wps` nella tua scheda SD nella cartella `/wiiu/environments/aroma/plugins`.

   ![](/images/wiiconnect24/wiivclaunch/wps-directory.png)

4. Inserisci la scheda SD nella console Wii U e avviala nell'ambiente Aroma.

5. Premi la combinazione `L` + `+ Giù` + `- Meno` contemporaneamente sul tuo Gamepad/Pro Controller/Classic Controller, o i pulsanti `B` + `+ Giù` + `- Meno` sul tuo telecomando Wii per aprire il menu di configurazione dei plugin di Wii U. Naviga fino a `Wii VC Launch` e premi `A`.

   ![](/images/wiiconnect24/wiivclaunch/aroma-config-menu.png)

6. Naviga fino a `Other settings` e premi `A`.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-config-menu.png)

7. Assicurati che l'opzione `Preserve SYSCONF on Wii VC title launch` sia impostata su `true`. Una volta finito, puoi uscire dal menu di configurazione premendo `B` finché non sei nel menu Wii U.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-sysconf-config.png)

---

::: tip

[Procedi con Nintendo Wi-Fi Connection](nintendowfc)

Questa guida spiega come ripristinare le funzionalità di Nintendo Wi-Fi Connection, permettendoti di giocare di nuovo online ai giochi come Mario Kart Wii. Mentre ci sono alcuni altri servizi che fanno la stessa cosa, quella ricoperta qui sarà Wiimmfi.

:::
