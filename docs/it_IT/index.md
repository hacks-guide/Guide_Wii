---
layout: home
title: "Guida agli hack per Wii"
hero:
  text: "Guida agli hack per Wii"
  tagline: "La guida completa per modificare Wii, vWii e Wii Mini."
  image:
    src: /images/main-pages/home-page-feature.jpg
---

::: tip

<span style="font-size: 16px;">:clock1: **Tempo di lettura stimato: dai 30 ai 60 minuti**</span>

Oltre alla stima, consigliamo di dedicare più tempo per permettersi di leggere e comprendere pienamente il materiale di questa guida. In questo modo da assicurarsi di eseguire correttamente le istruzioni e mantenere la console al sicuro e funzionale.

Consigliamo inoltre di leggere questa pagina introduttiva in dettaglio; anche se piena di informazioni, è progettata per fornire informazioni importanti per semplificare il processo di modifica.

Il backup dei dispositivi non richiede più di 10 minuti per essere completato. Questo può variare in base al metodo di backup, alle specifiche della scheda SD e dalla console.

:::

::: warning

Prima di iniziare, consigliamo agli utenti di NON seguire videoguide per una varietà di motivi. Questi motivi includono:

- I canali spesso non aggiornano le loro guide dopo averle caricate, anche se ci sono errori. Ciò la renderà obsoleta man mano che si sviluppano nuove informazioni.
- Sono difficili da fornire assistenza nel nostro server, e verranno ignorate se cercate aiuto.
- Tipicamente forniscono di file prestabiliti, che potrebbero essere malorganizzati, obsoleti o potenzialmente incorretti.

Non siamo, non siamo stati e né saremo affiliati a questi creatori di videoguide su piattaforme come YouTube o TikTok. Chiunque affermi di avere un legame con noi sta mentendo; respingiamo qualsiasi insinuazione contraria.

:::

## Cosa dovrei sapere prima di iniziare?

Questa pagina esplorerà:

- Termini importanti utilizzati nel contesto di questa guida, così come nella scena del modding in generale
- Cosa fa questa guida alla tua console e cosa pensiamo di installarci
- Cosa puoi fare con una console modificata
- Di cosa hai bisogno per modificare la console
- Altre informazioni importanti prima di procedere

## Cosa significano i termini di questa guida?

I termini principali utilizzati in questa guida sono spiegati in varie sezioni qui sotto.

Per ulteriori informazioni sugli altri termini utilizzati in questa guida, consulta il [glossario](glossary).

### Cos'è un homebrew?

Un homebrew è un software non ufficiale scritto da persone reali come hobby, per sistemi bloccati come la console Wii. Può essere un gioco originale, un emulatore, uno strumento di gestione dei salvataggi e molto, molto altro ancora!

A differenza di altre console, Wii, vWii e Wii mini possono essere modificate interamente dal software; il che significa che oltre le apparecchiature necessarie, questo è un processo **gratuito**.

### Cos'è un (c)IOS?

IOS (IOP-OS, non associato con Apple o Cisco IOS) è il sistema operativo sottostante che viene eseguito su Wii (ad eccezione della modalità GameCube). L'implementazione di questo sistema operativo è unica nel suo genere, in quanto, anziché un unico insieme di software, ci sono numerosi “slot”, o “rami”, diversi. Quando usi la console, il software in esecuzione sceglie un IOS specifico che fornisce diverse funzionalità su richiesta. Più informazioni a riguardo sono disponibili su [WiiBrew](https://wiibrew.org/wiki/IOS).

I cIOS sono IOS modificati basati su versioni di IOS con funzionalità desiderabili; ad esempio, utilizzando la base giusta è possibile ottenere, tra le altre cose, il supporto per USB 2.0. Una volta installati, questi cIOS possono essere utilizzati nei software homebrew. Questa guida ti permetterà di installare d2x cIOS in una sezione successiva, così da far funzionare gli USB loader e avviare i backup dei giochi.

### Cos'è una NAND?

[NAND](https://it.wikipedia.org/wiki/Memoria_flash) è il tipo sottostante di memoria flash su cui opera la console Wii, con 512 MB di memoria utilizzabile totale. La NAND fornisce di IOS e altri file di sistema, salvataggi dei giochi, canali Wii e altro. Questa guida ti insegnerà a creare un backup della NAND. È cruciale averla a portata di mano se qualcosa andasse storto, in quanto contiene chiavi e dati unici per la tua console. Senza di essa, la console potrebbe essere **irrecuperabile** in caso di guasto o di errore (anche se sono rari).

## Che cosa installa questa guida?

Questa guida ha l'obiettivo finale di prendere una console completamente non modificata e metterla in uno stato in cui gli homebrew possono essere eseguiti. Non perderai alcun dato fintanto che seguirai le istruzioni della guida come scritto; i tuoi salvataggi e giochi non andranno perduti e le funzionalità della console non saranno che migliorate.

La console verrà modificata tramite l'utilizzo di **HackMii Installer**, che si occuperà di installare l'Homebrew Channel, il punto di accesso principale per gli homebrew, e BootMi, uno strumento di protezione cruciale per la console. Dopo di che, la guida fornirà ulteriore protezione tramite uno strumento chiamato Priiloader, e istruzioni su come installare altri strumenti e software consigliati, se si desidera.

## Cosa posso fare con gli homebrew?

- Fare un [backup](nand-backup) o un [ripristino](bootmiirecover) della NAND della console
- Fare il backup dei [dischi](dump-games) e [altri titoli installati](dump-wads)
- [Applicare patch sui dischi di gioco](https://wiki.hacks.guide/wiki/Wii:Riivolution) per modificarli
- Installare [temi](themes) nel menu Wii e in app homebrew comuni
- Usare un [USB loader](wii-loaders) per eseguire i backup dei giochi Wii (e di altre console) da un'archiviazione esterna
- Ripristinare le funzionalità online di [WiiConnect24](wiiconnect24) e [Nintendo Wi-Fi Connection](nintendowfc)
- Utilizzare [emulatori e altri software consigliati](recommended-homebrew) sulla console

Si consiglia di controllare i link sopra durante o dopo il processo di modifica della console.

## Di cosa ho bisogno per seguire questa guida?

Avrai bisogno di **diverse attrezzature** in base alla console che stai cercando di modificare (Wii, vWii o Wii mini). Le attrezzature richieste saranno delineate nella pagina successiva, quando ti verrà chiesto di scegliere un metodo di exploit. Saranno incluse altre informazioni importanti sulle attrezzature nella sezione a seguire.

## Cos'altro dovrei sapere prima di procedere?

### Prerequisiti importanti

::: danger

**Rischi sui brick**

Quando segui la guida o usi certi tipi di homebrew, c'è sempre il rischio che tu possa **brickare** la console. Un brick (in inglese "mattone") è un dispositivo danneggiato che non può più funzionare; in altre parole, che diventa "utile quanto un mattone".

I brick sono rari e prevenibili sulle console Wii. Di solito non accadono a meno che tu non commetta un errore o modifichi deliberatamente qualcosa che non dovresti. Pertanto, assicurati di leggere questa guida **ATTENTAMENTE** e di seguire le istruzioni **PRECISAMENTE** durante lo svolgimento della modifica.

Altre cose che dovresti evitare per prevenire di brickare la console:

- Ripristinare il backup della NAND di un'altra console; ciò la brickerà **IMMEDIATAMENTE**
- Installare pacchetti di cIOS come DARKCORP, che sovrascrivono inutilmente gli IOS e possono rompere le funzionalità della console
- Installare aggiornamenti di altre regioni, modificare i file di sistema o cambiare la regione della console a meno che tu non sappia **esattamente** cosa stai facendo
- Installare IOS destinati a una console in un'altra; anche questo la brickerà **immediatamente** nella peggiore dei casi

Maggiori informazioni su brick, insieme a suggerimenti per prevenirli, possono essere trovati sulla [pagina sui brick](bricks).

:::

::: warning

**Ricevere assistenza**

Hai bisogno di più assistenza? Unisciti al [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) e chiedi aiuto in inglese sul canale `#wii-vwii-assistance`. Fornisci le seguenti informazioni:

1. Il messaggio di errore esatto, o quello che vedi a schermo (includendo una foto, se possibile)
2. Gli esatti procedimenti prima che il problema capitasse
3. Un [SysCheck](syscheck), se possibile ottenerlo
4. Hai un backup della NAND? (sì o no)
5. Hai installato Priiloader, BootMii come IOS o BootMii come boot2? (sì o no a ciascuno)
6. Il modello specifico della console (Wii originale, Family Edition, Wii mini, vWii su Wii U)

Suggeriamo di entrare nel server per fare domande quando hai problemi a capire la guida.

Se il tuo inglese non dovesse essere il migliore, usa un traduttore come [Google Traduttore](https://translate.google.com/) o [DeepL](https://www.deepl.com/translator). Saremo felici di aiutarti. Spiega il problema chiaramente!

:::

### Compatibilità

::: tip

**Compatibilità con le unità di archiviazione**

Per le schede SD, è sufficiente una da 128MB per eseguire un exploit. In media, tuttavia, se ne consiglia una con una capacità di almeno 2GB. Le console Wii possono leggere la maggior parte delle schede SD (anche con una capacità superiore a 32GB), ma devono essere [formattate in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**non** exFAT o NTFS).

Per le unità USB, si consiglia di usare un disco rigido (HDD) o un'unità a stato solido (SSD) [formattato in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Non consigliamo l'uso di chiavette USB in quanto sono soggette a guasti o malfunzionamenti con la console Wii.

I dischi da 2,5 pollici dovrebbero funzionare alimentandosi dalla porta USB della console, mentre quelli da 3,5 pollici necessitano di un'alimentazione esterna. Per chi ha Wii U o Wii mini, si consiglia di usare un hub USB alimentato esternamente o un cavo a Y per le unità che richiedono più energia di quanta ne possano fornire le porte USB della console.

Consulta le [domande frequenti sull'archiviazione](faq#storage-device-faq) per maggiori informazioni.

:::

::: tip

**Compatibilità di rete**

La console Wii è ormai datata e, in quanto tale, potrebbe avere difficoltà a connettersi alle reti wireless moderne.

Il suo hardware di rete si basa su 802.11g (retroattivamente chiamato Wi-Fi 3), che opera sulla banda 2,4 GHz. Supporta inoltre la crittografia di rete personale WPA2-PSK (AES). Se vuoi usare il Wi-Fi su Wii, assicurati che la tua rete supporti questi standard; tieni presente che alcuni router potrebbero essere incompatibili con queste opzioni.

Per Wii U, vWii utilizza le impostazioni Internet impostate nelle impostazioni di Wii U, ma può essere opzionalmente separato tramite il plugin di Aroma [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch).

Consulta le [domande frequenti sul collegamento di rete](faq#networking-faq) per maggiori informazioni.

:::

::: tip

**Compatibilià con le console**

Questa guida funziona con tutte le console Wii in commercio, incluse Wii mini e la modalità Wii di Wii U (o vWii).
**NON** funziona con kit di sviluppo come:

- RVT-001 (NDEV)
- RVT-002 (fronte verde)
- RVT-005 (fronte rossa)

Ulteriori informazioni sulla compatibilità sono riportate di seguito.

:::

:::details Compatibilità con Wii coreane

Le console Wii coreane sono completamente supportate da questa guida e possono essere modificate usando le procedure normali. Si possono anche cambiare di regione; per esempio, cambiare `4.3K` in `4.3E` in modo che la console si comporti come un'unità europea.

Fai molta cautela quando modifichi i dati di regione e segui attentamente la guida per evitare brick, in quanto le console Wii coreane sono particolarmente suscettibili all'[Errore 003](bricks#koreankiierror-003-brick).

Se stai cercando di cambiare la regione di una console coreana e non sei sicuro dei procedimenti esatti, unisciti al server Discord di Nintendo Homebrew (in inglese) facendo riferimento alle informazioni sopra.

:::

:::details Compatibilità con vWii (modalità Wii di Wii U)

La modalità Wii su Wii U (chiamata vWii nella comunità homebrew) è completamente supportata da questa guida, anche se consigliamo di configurare l'ambiente di Aroma se non si è già fatto. Visita [wiiu.hacks.guide](https://wiiu.hacks.guide) per saperne di più.

Le funzioni mancanti da Wii possono essere ripristinate. Al momento, quasi tutti gli homebrew esistenti sono supportati (tranne quelli per GameCube).

I dispositivi di archiviazione esterni necessiteranno un'alimentazione aggiuntiva (tramite un cavo a Y o un'alimentazione esterna), in quanto le porte USB di Wii U non ne forniscono energia a sufficienza da sole.

Assicurati di usare gli IOS e gli homebrew progettati specificamente per vWii al fine di evitare brick.

:::

:::details Compatibilità con Wii mini

Le console Wii mini sono completamente supportate da questa guida e hanno compatibilità con la maggior parte degli homebrew esistenti.

Le funzioni mancanti da Wii possono essere ripristinate. Si consiglia anche l'uso di un adattatore LAN e un hub USB.

Assicurati di usare gli IOS e gli homebrew progettati specificamente per Wii mini al fine di evitare brick.

:::

## Vuoi cominciare?

In caso affermativo, premi qui sotto per iniziare.

[Continua con Cominciamo! →](get-started){.btn .btn-solid}
