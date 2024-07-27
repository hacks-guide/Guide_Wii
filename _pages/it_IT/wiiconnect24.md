---
title: "WiiConnect24"
---

{% include toc title="Table of Contents" %}
<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) era un servizio che permetteva agli utenti con una Wii connessa a internet di controllare le notizie e il meteo, inviare dei messaggi ad amici, partecipare ai concorsi Mii, e altro ancora. WiiConnect24 è stato disattivato il 27 giugno 2013.

## WiiLink
[WiiLink](https://www.wiilink24.com/) è un revival (una resurrezione) di WiiConnect24 che ti permette di recuperare ed espandere la sua funzionalità sulla tua console. Nel tardo 2023, il servizio si è fuso con il progetto revival RiiConnect24, e a oggi è gestito solo con il nome WiiLink.

WiiLink ospita una patcher per i servizi fornisce, dai canali internazionali come il Canale Notizie a delle esclusive regionali come Wii Room. Una guida su come installare questi servizi, come anche la patcher, può essere trovata sul [sito web di WiiLink.](https://www.wiilink24.com/guide/)

<!-- move this back to another page? or no -->
### Aggiornare l'orologio RTC

### Wii

#### Di cosa hai bisogno
+ Una connessione Internet funzionante sul tuo Wii
+ Il Canale Homebrew
+ Una scheda SD o dispositivo USB
+ [sntp](https://oscwii.org/library/app/sntp)

#### Istruzioni
1. Scarica ed estrai l'archivio zip di sntp nella root della tua scheda SD o dispositivo USB.
1. Inserisci la scheda SD o dispositivo USB nel tuo Wii.
1. Avvia il Canale Homebrew sul tuo Wii.
1. Avvia sntp.
1. Usa la +Croce Direzionale per selezionare l'ora attuale.
1. Premi il pulsante HOME per uscire.

### vWii

#### Di cosa hai bisogno
+ Il Canale Homebrew
+ Una scheda SD
+ [Priiloader](priiloader)

#### Istruzioni
1. Visita il sito di [UTC Patche Generator](https://garyodernichts.github.io/priiloader-patch-gen/) e compila le informazioni.
2. Seleziona "Generate" e copia le informazioni.
3. Sulla tua scheda SD, vai su `SD:/apps/prilloader` e apri `hacks_hash.ini` con un editor di testo come blocco note.
4. Incolla la patch in fondo a `hacks_hash.ini` e salva le modifiche.
5. Ripeti i passaggi 1-4 con un nuovo offset di tempo se la tua posizione partecipa al risparmio di tempo legale.
6. Inserisci la tua scheda SD nella tua Wii U.
7. [Avvia Priiloader](priiloader#section-iii---entering-priiloader) sulla vWii.
8. Seleziona hacks e scorri in basso per abilitare l'hack Fix NWC24iSetUniversalTime.
9. Ritorna al Menu vWii.

### Hack di WiiConnect24 su Priiloader

Alcune hack di Priiloader devono essere abilitate sulla vWii e la Wii mini in modo che le funzioni di WiiConnect24 possano funzionare correttamente:

+ [Crea un messaggio tramite il pulsante del calendario (vWii, Wii mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
+ [Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
+ [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
+ [Fix NWC24iSetUniversalTime (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

[Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) non possono essere abilitati allo stesso tempo. Più informazioni su come utilizzare le impostazioni di sistema vWii permanenti (Permanent vWii System Settings) sono disponibili [qui](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)
{: .notice--info}

[Procedi alla Nintendo Wi-Fi Connection](wiimmfi)<br> Questa guida porta avanti il processo per riottenere le funzionalità online del tuo Wii - consentendo di far funzionare nuovamente i servizi Nintendo Wi-Fi Connection su certi giochi come Mario Kart Wii. Seppur ci sono diversi server privati e servizi che lo permettono, il servizio trattato qui sarà Wiimmfi.
{: .notice--info}
