---
layout: splash
title: "Guida per l'Hacking del Wii"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "La guida omnicomprensiva per modificare il tuo Wii (e Wii mini)."
---

Dal momento che questa guida è stata appena pubblicata, le traduzioni sono ancora in corso d'opera. Grazie per la pazienza!
{: .notice--info}

Per trarre il massimo da questa guida, dovresti leggere questa pagina prima di procedere.
{: .notice--warning}

### Cos'è l'homebrew?

Il nome **Homebrew** si riferisce a una tipologia di software non autorizzata dal creatore originale dell'hardware - in questo caso, Nintendo. Per poter avviare software homebrew sul tuo Wii, la console deve essere prima modificata per eseguire codice non firmato.

Ecco degli esempi comuni di cosa il software homebrew può fare per il tuo Wii:

+ Eseguire [backup](bootmii) e [ripristinare](bootmiirecover) la NAND (memoria di sistema) del tuo Wii
+ Aumentare la [protezione dai brick](priiloader) del tuo Wii
+ Scaricare nuove applicazioni homebrew con [Open Shop Channel](osc)
+ [Modificare il contenuto dei dischi di giochi](riivolution) per avviare delle patch
+ Accendere il tuo Wii in un [media center](wiimc)
+ Installare [temi](themes) sul Menu Wii e nelle applicazioni homebrew più usate
+ Eseguire backup dei tuoi [dischi](dump-games) e di [altri titoli installati](dump-wads)
+ Installare un [USB loader](wii-loaders) per lanciare backup di giochi Wii (e altre console) da un dispositivo di massa esterno
+ Eseguire backup e ripristino dei salvataggi dei giochi [Wii](wii-saves) e [GameCube](gcsaves)
+ Ripristinare la funzionalità online per [WiiConnect24](wiiconnect24) e [Nintendo Wi-Fi Connection](wiimmfi)

### Che cosa installa questa guida?

Questa guida mira a fare le seguenti azioni, incluse le opzionali:

+ Modificare il tuo Wii usando uno dei tanti exploit, con lo scopo finale di raggiungere l'HackMii installer
+ Installare BootMii e l'Homebrew Channel
+ Eseguire il backup dei file di sistema più importanti
+ Installare Priiloader
+ Installare l'Open Shop Channel
+ Homebrew consigliati da usare sul tuo Wii
+ Ripristinare funzionalità su WiiConnect24 e Nintendo Wi-Fi Connection

### Cosa dovrei sapere prima di iniziare?

+ Il software Homebrew e il processo di modificare il tuo Wii sono entrambi al 100% gratuiti. Chiunque che ti provi a convincere del contrario sta probabilmente provando a [truffarti](https://hbc.hackmii.com/scam).
+ Questa guida funziona su tutte le versioni del menu di sistema in base all'exploit, ma **è fortemente consigliato aggiornare alla 4.3 (versione più recente)** se possibile.
+ **Questa guida si applica SOLAMENTE ai Wii retail/consumer** Questo significa che le unità sviluppatore e i vWii dei Wii U non sono supportati.
+ In base a cosa intendi fare con il tuo Wii modificato, potresti rischiare di apportare delle modifiche alla memoria di sistema che potrebbero provocare un brick (rendendo la console inutilizzabile). Finchè segui esattamente questa guida, dovresti essere a posto, ma per dei consigli generali di prevenzione dei brick vedi [questa](bricks#brick-prevention) pagina.
+ Le differenze tra Wii e Wii mini sono abbastanza significative. Questo significa che in alcuni casi, qualcosa completamente innocuo su un Wii potrebbe causare un [brick grave](bricks#wi-fi-brick) su un Wii mini. Procedi con cautela se pensi di volerne modificare uno!
+ Sii estremamente prudente nel modificare un [Wii Coreano](bricks#korean-kiierror-003-brick).

### Pronto?

Questa guida ha nove sezioni in totale. Sono elencate di seguito:

1. Scegliere e usare un exploit (OBBLIGATORIO)
1. Installare l'Hombrew Channel e BootMii (OBBLIGATORIO)
1. Creare un backup della NAND con BootMii (OBBLIGATORIO)
1. Installare Priiloader (OBBLIGATORIO)
1. Installare l'Open Shop Channel (CONSIGLIATO)
1. Installare i cIOS (CONSIGLIATO)
1. Scoprire l'Homebrew Channel (CONSIGLIATO)
1. Ripristinare la funzionalità di WiiConnect24 (OPZIONALE)
1. Ripristinare la funzionalità di Nintendo Wi-Fi Connection (OPZIONALE)

Prosegui con [Cominiciamo!](get-started)
{: .notice--info}
