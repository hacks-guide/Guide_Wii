---
title: "WiiConnect24"
---

{% include toc title="Table of Contents" %}

Questa guida fornisce diversi metodi per riottenere le funzionalità di WiiConnect24 sulla tua console. Nonostante non sia necessario, è una funzionalità "buona da avere" che è in origine è stata usata per la connessione online di certe applicazioni nella console. Questa app includono i Canali Meteo/Notizie, Canale Nintendo, Canale Consorsi Mii, alcuni canali esclusivi in Giappone, e altro ancora. Si prega di tenere a mente che le funzionalità che ottieni dipendono a quale servizio o quali servizi usi.

### Panoramica dei servizi

#### Note sulla compatibilità del servizio:
Entrami i servizi elencati in basso sono compatibili l'uno con l'altro e possono essere caricati nella stessa console. Detto ciò, dev'essere notato che quando installi un canale al posto dell'altro (il Canale Meteo di WiiLink24 al posto del Canale Meteo di RiiConnect24 per esempio), il canale che installi sovrascriverà il precedente.


#### Stato di supporto del servizio
✅ - Supportato<br> ⚠️ - In fase di sviluppo<br> ⛔ - Non supportato

| Nome servizio        | WiiLink | RiiConnect24 |
| -------------------- | ------- | ------------ |
| Canale Meteo         | ✅       | ✅            |
| Canale Notizie       | ⚠️      | ✅            |
| Wii Mail             | ✅       | ✅            |
| Canale Vota Anche Tu | ✅       | ✅            |
| Canale Nintendo      | ✅       | ✅            |
| Canale Concorsi Mii  | ⚠️      | ✅            |
| Wii Room             | ✅       | ⛔            |
| Food Channel         | ✅       | ⛔            |
| Photo Prints Channel | ✅       | ⛔            |
| Canale TV Kirby      | ✅       | ⛔            |

#### WiiLink
Un servizio di revival recente per WC24/canali giapponesi che iniziò nel 2020, ma sta rapidamente riottenendo funzionalità in tanti canali diversi.

Lo stato di supporto del servizio può essere trovato [qui](https://www.wiilink24.com/status).<br> La loro guida può essere trovata [qui](https://www.wiilink24.com/guide/2installation/).

#### RiiConnect24
Il servizio di revival per WC24 più longevo, attualmente solo supportato con canali WC24 a livello mondiale assieme ai servizi di mail.

Lo stato di supporto del servizio può essere trovato [qui](https://rc24.xyz/stats/).<br> Attualmente RiiConnect24 non è previsto di una propria guida, ma puoi trovare la nostra [qui](riiconnect24).

### Aggiornare l'orologio RTC
Se scegli di installare uno di questi due servizi sul tuo Wii, si consiglia di sincronizzare il suo orologio esterno per evitare eventuali problemi (come l'incapacità di usare tali servizi) che altrimenti possono sorgere. I passaggi per farlo possono essere trovati qui sotto:

#### Di cosa hai bisogno
+ Una connessione Internet funzionante sul tuo Wii
+ L'Homebrew Channel
+ Una scheda SD o dispositivo USB
+ [sntp](https://oscwii.org/library/app/sntp)

#### Istruzioni
1. Scarica ed estrai l'archivio zip di sntp nella root della tua scheda SD o dispositivo USB.
1. Inserisci la scheda SD o dispositivo USB nel tuo Wii.
1. Avvia il Canale Homebrew sul tuo Wii.
1. Avvia sntp.
1. Usa la +Croce Direzionale per selezionare l'ora attuale.
1. Premi il pulsante HOME per uscire.

[Procedi alla Nintendo Wi-Fi Connection](wiimmfi)<br> Questa guida porta avanti il processo per riottenere le funzionalità online del tuo Wii - consentendo di far funzionare nuovamente i servizi Nintendo Wi-Fi Connection su certi giochi come Mario Kart Wii. Seppur ci sono diversi server privati e servizi che lo permettono, il servizio trattato qui sarà Wiimmfi.
{: .notice--info}
