# WiiConnect24

[WiiConnect24](https://it.wikipedia.org/wiki/WiiConnect24) era un servizio che permetteva agli utenti con una console connessa a Internet di vedere le previsioni meteo, le notizie, inviare messaggi agli amici, partecipare ai concorsi Mii, e altro. WiiConnect24 è stato interrotto il 27 giugno 2013. Esiste tuttavia un servizio di terze parti chiamato WiiLink che ripristina queste funzionalità.

## WiiLink

[WiiLink](https://www.wiilink.ca/) è un'alternativa a WiiConnect24 che consente di recuperare e ampliare le funzionalità della console. Offre anche di un patcher per i servizi che fornisce. Riabilitano anche i canali internazionali come il Canale Meteo e il Canale Notizie, nonché i canali regionali esclusivi come Wii Room (Stanza Wii). La guida su come installare WiiLink è disponibile [sul loro sito](https://www.wiilink.ca/guide/).

## Aggiornare l'RTC

In alcuni casi, l'RTC (Real Time Clock, orologio in tempo reale) sulla console Wii potrebbe non essere sincronizzato con l'ora attuale. Ciò probabilmente causerà degli errori quando si tenta di connettersi ai servizi WiiConnect24 o ad altri servizi online. Se ricevi errori di connessione come `FORE000006`, usa le istruzioni riportate di seguito per sincronizzare l'RTC interno della console tramite Internet.

::::: tabs

:::: tab Wii

### Requisiti

- Una console Wii connessa a Internet
- Homebrew Channel
- Una scheda SD o un'unità USB
- [sntp](https://oscwii.org/library/app/sntp)

### Istruzioni

1. Scarica ed estrai il file `.zip` di sntp nella root della scheda SD o dell'unità USB.

2. Inserisci la scheda SD o l'unità USB nella console.

3. Avvia l'Homebrew Channel.

4. Avvia sntp.

   ![](/images/wiiconnect24/sntp/sntp-hbc.png)

5. Usa le frecce destra/sinistra sulla pulsantiera + per selezionare il fuso orario che corrispondente all'ora attuale, poi premi il pulsante `A` per impostare la configurazione.

   ![](/images/wiiconnect24/sntp/sntp-time-select.png)

6. Premi il pulsante HOME per uscire.

   ![](/images/wiiconnect24/sntp/sntp-success.png)

::::

:::: tab Wii U (vWii)

### Requisiti

- Un ambiente vWii modificato
- Homebrew Channel
- Una scheda SD
- [Priiloader](priiloader)

### Istruzioni

1. Visita il sito [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) e compila i campi richiesti.

   ![](/images/wiiconnect24/priiloader/patch-generate.png)

2. Seleziona "Generate" e copia le informazioni.

   ![](/images/wiiconnect24/priiloader/patch-copy.png)

3. Sulla scheda SD, vai su `SD:/apps/prilloader` e apri `hacks_hash.ini` con un editor di testo.

   ![](/images/wiiconnect24/priiloader/hacks-ini.png)

4. Incolla la patch in fondo al file e salva le modifiche.

   ![](/images/wiiconnect24/priiloader/hacks-ini-edit.png)

5. Ripeti i passaggi da 1 a 4 se la nazione in cui ti trovi partecipa all'ora legale.

6. Inserisci la scheda SD nella console.

7. [Avvia Priiloader](priiloader#section-iii---entering-priiloader) su vWii.

8. Seleziona `System Menu Hacks` e assicurati che `Fix NWC24iSetUniversalTime` sia abilitato.

   ![](/images/wiiconnect24/priiloader/select-patch.png)

9. Ritorna al menu vWii.

::::

:::::

## WiiConnect24 Priiloader Hacks (vWii e Wii mini)

::: info

Su vWii, le opzioni [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) (Impostazioni di sistema vWii permanenti) e [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) (Abilita sempre WiiConnect24 all'avvio) non possono essere abilitate contemporaneamente. Si consiglia di tenere abilitato solo il primo, in quanto potrai attivarci WiiConnect24 senza problemi. Maggiori informazioni possono essere trovate nelle [domande frequenti di Priiloader](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

Se stai usando una console Wii mini o vWii, alcune opzioni da Priiloader devono essere abilitate per consentire una corretta funzionalità di WiiConnect24. Abilita le seguenti opzioni in base alla tua console:

| Console  | Opzioni                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vWii     | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii mini | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul>                                                                                                                                                                                                                                                                                 |

## WiiVCLaunch (vWii)

Se sei su Wii U, assicurati di installare WiiVCLaunch per evitare che le impostazioni di sistema vengano sovrascritte quando esegui giochi Wii da Virtual Console dal menu Wii U.

### Requisiti

- Una console Wii U modificata con l'ambiente Aroma
- Una scheda SD
- [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases)

### Istruzioni

1. Spegni la console e inserisci la scheda SD nel PC.

2. Vai nel link GitHub sopracicato e scarica il file `WiiVCLaunch.wps`.

   ![](/images/wiiconnect24/wiivclaunch/wps-download.png)

3. Copia il file `WiiVCLaunch.wps` nella scheda SD nella cartella `/wiiu/environments/aroma/plugins`.

   ![](/images/wiiconnect24/wiivclaunch/wps-directory.png)

4. Inserisci la scheda SD nella console e avviala nell'ambiente Aroma.

5. Premi contemporaneamente `L` + `↓` + `-` sul Gamepad/Pro Controller/Classic Controller o `B` + `↓` + `-` sul telecomando Wii per aprire il menu di configurazione dei plugin di Wii U. Naviga fino a `Wii VC Launch` e premi `A`.

   ![](/images/wiiconnect24/wiivclaunch/aroma-config-menu.png)

6. Naviga fino a `Other settings` e premi `A`.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-config-menu.png)

7. Assicurati che l'opzione `Preserve SYSCONF on Wii VC title launch` sia impostata su `true`. Una volta finito, puoi uscire dal menu di configurazione premendo `B` finché non sei nel menu Wii U.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-sysconf-config.png)

---

::: tip

[Continua con Nintendo Wi-Fi Connection](nintendowfc)

Questa guida spiega come ripristinare le funzionalità di Nintendo Wi-Fi Connection, permettendoti di giocare di nuovo online ai giochi come Mario Kart Wii. Nonostante esistano altri servizi che fanno la stessa cosa, qui tratteremo di Wiimmfi.

:::
