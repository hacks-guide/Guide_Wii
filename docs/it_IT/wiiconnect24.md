# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. WiiConnect24 è stato disattivato il 27 giugno 2013.

## WiiLink

[WiiLink](https://www.wiilink24.com/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console.
Nel tardo 2023, il servizio si è fuso con il progetto revival RiiConnect24, e a oggi è gestito solo con il nome WiiLink.

WiiLink ospita una patcher per i servizi fornisce, dai canali internazionali come il Canale Notizie a delle esclusive regionali come Wii Room.
The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink24.com/guide/)

<!-- move this back to another page? or no -->

## Aggiornare l'orologio RTC

### Wii

#### Di cosa hai bisogno

- Una connessione Internet funzionante sul tuo Wii
- L'Homebrew Channel
- Una scheda SD o dispositivo USB
- [sntp](https://oscwii.org/library/app/sntp)

#### Instructions

1. Scarica ed estrai l'archivio zip di sntp nella root della tua scheda SD o dispositivo USB.
2. Inserisci la scheda SD o dispositivo USB nel tuo Wii.
3. Avvia il Canale Homebrew sul tuo Wii.
4. Avvia sntp.
5. Usa la +Croce Direzionale per selezionare l'ora attuale.
6. Premi il pulsante HOME per uscire.

### vWii

#### Di cosa hai bisogno

- L'Homebrew Channel
- Una scheda SD
- [Priiloader](priiloader)

#### Instructions

1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.
2. Seleziona "Generate" e copia le informazioni.
3. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.
4. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.
5. Ripeti i passaggi 1-4 con un nuovo offset di tempo se la tua posizione partecipa al risparmio di tempo legale.
6. Inserisci la tua scheda SD nella tua Wii U.
7. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.
8. Seleziona hacks e scorri in basso per abilitare l'hack Fix NWC24iSetUniversalTime.
9. Ritorna al Menu vWii.

## Hack di WiiConnect24 su Priiloader

Alcune hack di Priiloader devono essere abilitate sulla vWii e la Wii mini in modo che le funzioni di WiiConnect24 possano funzionare correttamente:

- [Create message via Calendar button (vWii, Mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
- [Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
- [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
- [Fix NWC24iSetUniversalTime (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

::: info

[Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) cannot be enabled at the same time. More information on how to use Permanent vWii System Settings can be found [here](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)

:::

::: tip

[Proceed to Nintendo Wi-Fi Connection](nintendowfc)

This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. Seppur ci sono diversi server privati e servizi che lo permettono, il servizio trattato qui sarà Wiimmfi.

:::
