---
title: "Nintendont"
---

{% include toc title="Table of Contents" %}

Nintendont è un'applicazione homebrew in modalità Wii che ti consente di giocare a giochi GameCube e dump di arcade Triforce. Nintendont è un'app interessante in quanto è un ibrido tra un emulatore e una macchina virtuale - mentre esegue comunque i giochi GameCube con prestazioni e qualità quasi native. Ulteriori informazioni possono essere trovate [qui](https://gbatemp.net/threads/nintendont.349258/).

Per giocare ai giochi, si consiglia di utilizzare una scheda SD di grandi dimensioni o un hard drive esterno, poiché le unità flash sono molto sporadiche in funzionalità. Vedi il [FAQ storage](faq).
{: .notice--info}

Assicurati che l'unità di archiviazione sia formattata come FAT32. Non formattarlo ad altri file system come NTFS, exFAT o WBFS.
{: .notice--info}

### Requisiti

* Una Wii modificata
* Una scheda SD o dispositivo USB
* [Nintendont](https://oscwii.org/library/app/Nintendont)

### Installazione
1. Scarica Nintendont ed estrailo nella root della tua scheda SD o dispositivo USB.
1. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia Nintendont dall'Homebrew Channel.

### Guida rapida

#### Funzioni principali

+ È possibile utilizzare vari dispositivi di input per giocare ai giochi GameCube. Questi includono i controller GameCube (anche tramite un adattatore USB), telecomandi Wii, Controller Tradizionali, i Konga, controller USB HID, controller Bluetooth e potenzialmente altri ancora.
+ Nintendont supporta memory card virtuali che vengono salvate nell'unità di archiviazione esterna, dalle dimensioni di 51 blocchi fino a 1019 blocchi. Nonostante ciò, la dimensione massima consigliata è di 251 blocchi per memory card per garantire la massima compatibilità.
+ Puoi usare una patch creata dalla community per attivare il gioco online in alcuni giochi.
+ Nintendont può essere usato su [WiiFlow Lite](wii-loaders#wiiflow-lite) o [USB Loader GX](wii-loaders#usb-loader-gx) per il caricamento dei giochi GameCube.

#### Interfaccia utente

![](/images/usb-loaders/nintendont-ui.png)

Nintendont utilizza un'interfaccia utente che è principalmente controllabile e navigabile utilizzando un controller.

#### Avvio dei giochi

I giochi in Nintendont devono essere avviati da un dispositivo esterno con una specifica struttura di cartelle, utilizzando gli ID di gioco. Gli ID di gioco possono essere trovati su [GameTDB](https://www.gametdb.com).<br>La struttura prevista per giochi su disco singolo è la seguente:<br>
```
💾SD/USB:
 ┗ 📂games
    ┗ 📂NomeGioco [IDgioco]
       ┗ 📜game.iso o 📜game.ciso
```

La struttura prevista per giochi multi-disco è la seguente:<br>
```
💾SD/USB:
┗ 📂games
   ┗ 📂NomeGioco [IDgioco]
      ┣ 📜game.iso o 📜game.ciso
      ┗ 📜disc2.iso o 📜disc2.ciso
```

Ecco un esempio in cui viene usato The Legend of Zelda: The Wind Waker in un dispositivo USB:<br>
```
💾SD/USB:
 ┗ 📂games
    ┗ 📂The Legend of Zelda: The Wind Waker [GZLE01]
       ┗ 📜game.iso o 📜game.ciso
```

#### Configurazione BIOS

Puoi usare un BIOS GameCube originale su Nintendont se ne hai ottenuto uno legalmente.

1. Rinomina il file BIOS a `iplusa.bin`/`ipljap.bin`/`iplpal.bin` in base alla sua regione.
1. Copialo nella root del dispositivo di archiviazione in cui si trovano i tuoi giochi GameCube.
1. Vai nelle impostazioni di Nintendont e controlla che l'opzione `Skip IPL` sia su OFF.

#### Utilizzare un controller HID USB con Nintendont

Di predefinito, Nintendont seleziona una configurazione di controller da un elenco interno di controller già configurati. Se il tuo dovesse funzionare in automatico, assicurati di controllare l'elenco dei controller supportati nell'articolo in cima alla pagina. Se vuoi comunque controllare, puoi usare [HIDTest](https://oscwii.org/library/app/HIDTest) per controllare se il tuo controller verrà rilevato e funzionerà con Nintendont, o meno.

#### Combinazioni di pulsanti per Nintendont durante il gioco

Riavvia: Riavvia il gioco e torna alla schermata del titolo del gioco.<br> Spegni: Chiude Nintendont e ritorna al loader.<br>

Alcuni giochi potrebbero avere combinazioni di pulsanti native per il riavvio.

**Controller GameCube:**<br> Riavvia: R+Z+Start<br> Spegni: R+Z+B+Giù (croce direzionale)

**Telecomando Wii + Nunchuck:**<br> Spegni: Pulsante HOME sul telecomando Wii

**Controller USB-HID o adattatore:**<br> Puoi definire i pulsanti per il spegnimento da te.<br> Il pulsante Power è definito nel file controller.ini o nel file controllers/PID_VID.ini corretto utilizzato per il tuo controller.<br> La combinazione più comune con le impostazioni HID predefinite:<br> Spegni: L+R+Z+Start

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
