# I brick

Un brick (in inglese "mattone") è un dispositivo danneggiato che non può più funzionare; in altre parole, che diventa "utile quanto un mattone".

I brick possono verificarsi per svariati motivi, tuttavia di solito sono il risultato di software danneggiati o di modifiche improprie effettuate tramite homebrew.

## Prevenzione dai brick

I brick possono essere prevenuti imparando a riconoscere le cause che li provocano. Ecco le raccomandazioni generali dei rischi più comuni e perché dovresti evitarli:

|                         Rischio                         |                                                                                                                                                                                                                                                                                      Spiegazione                                                                                                                                                                                                                                                                                      |
| :-----------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|           Seguire videoguide o tutorial vecchi          |                                                                               Come indicato nella home del sito, seguire le videoguide è rischioso, in quanto molto spesso non vengono aggiornate dopo la loro pubblicazione e potrebbero quindi essere obsolete rispetto alle raccomandazioni contemporanee. I tutorial vecchi hanno lo stesso problema, ma in misura minore. Evita di seguirli se non esplicitamente raccomandato da uno sviluppatore.                                                                              |
|       Usare software di modding come `Pimp My Wii`      |                                                                 Software come `Pimp My Wii` sono destinati a semplificare la modifica della console, ma sono anche una **scatola nera pericolosa**. Spesso apportano modifiche non necessarie o che danneggiano la console per raggiungere un obiettivo semplice, rendendola poi inutilizzabile. Riteniamo che ModMii sia un'**eccezione** in quanto è open source, testato ed esaminato dallo staff di questa guida.                                                                 |
|       Installare pacchetti di cIOS come `DARKCORP`      |                                                                    I pacchetti di IOS sono obsoleti da anni, in quanto sovrascrivono gli IOS essenziali alla console con dei cIOS. Non sono assolutamente supportati da questa guida in quanto possono causare problemi inspiegabili, come la visualizzazione sottosopra dell'Homebrew Channel. Se hai bisogno di sistemare una console con questi cIOS installati, vedi [ModMii](modmii#hackmii-solutions-wizard).                                                                   |
|  Ripristinare un backup della NAND di un'altra console  |                     Ciò brickerà la console in modo immediato e presumibilmente **permanente**. Ogni NAND ha le proprie chiavi AES/HMAC univoche memorizzate nella console. Se installi un backup di un'altra console, non sarà più in grado di verificarne l'autenticità. Di conseguenza, si rifiuterà di avviarsi. Se hai un backup della NAND della tua console che non funziona, usa la guida sul [ripristino di fabbrica](wii-factory-reset) per creare una nuova NAND vuota.                    |
|       Installare IOS destinati a un altro sistema       |                                                                                              Nel peggiore dei casi, ciò brickerà la console. L'esempio migliore è installare IOS di Wii su Wii mini, in quanto non dispone di una scheda Wi-Fi. Facendolo, continuerà a controllare la presenza di una scheda Wi-Fi inesistente. Di conseguenza, non si avvierà mai, creando il suddetto [brick dal Wi-Fi](#wi-fi-brick).                                                                                             |
|        Sbagliare a cambiare regione della console       |                                                                           I blocchi di regione possono essere aggirati facilmente tramite software come [Priiloader](priiloader) e, in quanto tale, spesso non c'è motivo di cambiare la regione della console. Se decidi di farlo, devi esercitare **estrema cautela** perché ciò può rendere la console inutilizzabile se non sai cosa stai facendo; soprattutto se segui i metodi di Wii su vWii o Wii mini, o viceversa.                                                                          |
|       Installare aggiornamenti di un'altra regione      | A pari passo col cambiare la regione della console, spesso non c'è motivo di farlo. Nel peggiore dei casi, può risultare in un brick da [Korean Kii/Errore 003](bricks#koreankiierror-003-brick), che renderebbe la console inutilizzabile. Si consiglia vivamente di eseguire un [SysCheck](syscheck) prima di fare quest'operazione, così da determinare la regione originale. Cerca assistenza seguendo le istruzioni in fondo alla pagina se stai cercando di applicare gli aggiornamenti su una console coreana. |
|      Usare servizi Nintendo WFC non protetti da RCE     |                                                                                                                  Consigliamo di usare solo i servizi WFC elencati nella guida [Nintendo WFC](nintendowfc), in quanto sono noti per essere protetti contro gli attacchi RCE (esecuzione remota di codice). Altri servizi potrebbero non esserlo, il che potrà consentire ai malfattori di brickare la tua console.                                                                                                                  |
| Modificare file di sistema o installare menu Wii vecchi |                                                                                                                     Ciò è quasi sempre non necessario. Consigliamo di fare queste operazioni su Dolphin, se per curiosità, invece di tentare su una console reale. Se non sei consapevole di quello che stai facendo, fare ciò potrà rendere la console inutilizzabile, causando un [brick dall'IOS](#ios-brick).                                                                                                                     |
|             Installare homebrew sconosciuti             |                                                                                 Gli homebrew sono creati da personi esistenti per diverse ragioni. Ci sono stati precedenti di homebrew dannosi creati per Wii, anche se è altamente improbabile che li troverai. Consigliamo di installare gli homebrew esclusivamente da [Open Shop Channel](osc), in quanto vengono sottoposti a controlli di dicurezza e sono conformi a uno standard di qualità.                                                                                 |
|               Eseguire homebrew pericolosi              |                                                                                                                       Gli homebrew possono essere pericolosi non solo quando sono creati maliziosamente, ma anche perché possono modificare la console; questi tipi di software dovrebbero essere usati solo da utenti esperti. Questo include homebrew come **AnyTitle Deleter**, **AnyRegion Changer**, **KoreanKii** e altri.                                                                                                                      |
|             Sbagliare a installare forwarder            |                                                                                                                                                                    I forwarder possono causare un [brick dal banner](#banner-brick) se creati male. Fai attenzione a ciò che installi, e assicurati di avere [Priiloader](priiloader) installato nel caso qualcosa andasse storto.                                                                                                                                                                    |
|             Sbagliare a spegnere la console             |                                                     Non spegnere la console durante determinati processi, come durante il ripristino di un backup della NAND da BootMii. Consigliamo di posticipare queste modifiche alla console in caso di instabilità dell'elettricità (es: durante una tempesta o durante una serie di blackout). Nel peggiore dei casi, le interruzioni di corrente possono portare a un [brick totale](#low-level-brick).                                                    |

In qualsiasi caso, dovresti assolutamente:

- Avere BootMii installato come boot2 se possibile, altrimenti come IOS.
- Avere Priiloader installato indipententemente dalla versione di BootMii scelta.
- Avere sempre un backup della NAND da BootMii o nanddumper@ios a portata di mano, **soprattutto** prima di tentare qualsiasi operazione rischiosa. Nota che in alcuni scenari, o console, BootMii non sarà disponibile; pianifica di conseguenza.

## Diagnosi

Questa è una sezione che intende ad aiutare a diagnosticare un brick potenziale, in ordine crescente di funzionalità della console. Se il tuo problema sembra non essere coperto in questa sezione o nella guida, scorri fino in fondo alla pagina per istruzioni.

### Processo di avvio

```ini
[    AVVIO    ] 
       │
       │
       ▼
[    boot0    ]  ──► Legge, decritta e verifica l'hash del boot1.
       │             Rifiuta l'avvio se non corrisponde.
       │             (Fase 1 del bootloader)
       ▼
[    boot1    ]  ──► Inizializza la memoria. Legge, decritta e
       │             verifica l'hash del boot2. Rifiuta l'avvio se non
       │             corrisponde. Aggirabile sulle prime console Wii.
       │             (Fase 2 del bootloader)
       ▼
[    boot2    ]  ──► Carica i dati del Menu Wii, degli IOS, e della
       │             modalità GameCube (MIOS). Può contenere BootMii
       │             se la fase precedente è aggirabile.
       │             (Fase 3 del bootloader)
       ▼
[ IOS/SysMenu ]
```

### Triage dei brick

La tabella seguente utilizza la seguente codifica dei colori per le possibili soluzioni:

🟩 - sistemabile senza software di prevenzione<br>
🟦 - sistemabile con Priiloader e/o BootMii come IOS<br>
🟨 - sistemabile con BootMii come boot2<br>
🟥 - sistemabile con modifiche hardware

|                                      Tipio di brick                                      |                                                                                                                                                         Funzionalità                                                                                                                                                         |
| :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                     ⬛<br>Nessun brick                                    |                                                                              La console si avvia e prosegue nel menu Wii. Nessuna app è malfunzionante, neanche le impostazioni; non ci sono problemi visibili.                                                                              |
|                               🟩<br>[Semibrick](#semibrick)                              |                                                                                                                Ricevi un errore che ricorda il browser Opera quando accedi alle impostazioni.                                                                                                                |
|    🟩<br> [Brick dal banner (menu Wii accessibile)](#banner-brick)    |                                                                                                           Ricevi il messaggio `I file di sistema sono danneggiati` avviando un determinato canale.                                                                                                           |
| 🟩 O 🟦<br>[Brick dal banner (menu Wii inaccessibile)](#banner-brick) |                                                                                 Dopo aver premuto `A` nella schermata di salute e sicurezza, non appare nulla. Questo è successo dopo aver installato un WAD.                                                                                |
|                        🟩 O 🟦<br>[Brick dalla mail](#mail-brick)                        |                                   Dopo aver premuto `A` nella schermata di salute e sicurezza, non appare nulla. Questo è successo a caso, MA puoi accedere alla modalità di manutenzione tenendo premuto `+` e `-` nella schermata di salute e sicurezza.                                   |
|                           🟦<br>[Brick dal tema](#theme-brick)                           |                                                                                Dopo aver premuto `A` nella schermata di salute e sicurezza, non appare nulla. Questo è successo dopo aver installato un tema.                                                                                |
|                  🟦<br>[Brick dal menu Wii/Opera](#wii-menuopera-brick)                  |                                                                                                                  La console si avvia, ma vedi subito un errore che ricorda il browser Opera.                                                                                                                 |
|                       🟨<br>[Errore 003](#koreankiierror-003-brick)                      |                                                                                                                 La console si avvia, ma vedi un messaggio `Error:003 unauthorized device has been detected.`                                                                                                                 |
|                            🟨<br>[Brick dall'IOS](#ios-brick)                            |                                                                                           La console si avvia, ma non succede nulla; rimane su uno schermo nero. BootMii come boot2 è accessibile.                                                                                           |
|                           🟥<br>[Brick dal Wi-Fi](#wi-fi-brick)                          | La console si avvia, ma non succede nulla; rimane su uno schermo nero. Può essere accesa con un telecomando Wii e la modalità di recupero è raggiungibile. BootMii come boot2 è inaccessibile. **Comune su Wii mini dopo aver installato degli IOS errati**. |
|                      🟥<br>[Brick a basso livello](#low-level-brick)                     |                               La console si avvia, ma non succede nulla; rimane su uno schermo nero. Non può essere accesa con un telecomando Wii. La modalità di recupero è inaccessibile. BootMii come boot2 è inaccessibile.                              |

## Tipi di brick

Qui, i vari tipi di brick per Wii verranno discussi in ordine di severià, con relativi sintomi, cause e soluzioni.

### Semibrick

::: details

#### Sintomi

Navigando nelle Impostazioni console Wii, ricevi un errore dal browser Opera con qualcosa del tipo `You tried to access the address (URL), which is currently unavailable.` (Hai provato ad accedere all'indirizzo (URL), che al momento non è disponibile.) In alcuni casi, alcune impostazioni sono comunque accessibili, ma altre no.

#### Causa

Un semibrick si verifica quando viene installato un menu Wii o un tema di regione diversa. Poiché le Impostazioni console Wii vengono caricate come pagine HTML tramite Opera, i temi spesso li sostituiscono e li mettono in cartelle diverse; essenzialmente portando a un errore `404 Not Found` (404 Non Trovato) ma nella forma di un brick.

<!--What does this pull request do? Why is it needed?-->

**Descrizione**

![](/images/bricks/semibrick.png)

#### Soluzioni

Verifica con AnyRegion Changer che la regione della console sia la stessa di quella richiesta dal tema o dal menu Wii installato.

Se ciò è stato causato da un tema che hai installato, usa [csm-installer](themes) per reinstallare il tema originale.

Se ciò è stato causato da un WAD del menu Wii che hai installato, usa [NUSGet](https://github.com/NinjaCheetah/NUSGet) per riottenere il menu Wii originale. **Fai attenzione quando scarichi il WAD del menu Wii**. Assicurati di scegliere la stessa versione con la regione corretta.

Se sei nel corso di un cambio di regione, usa [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) per impostare automaticamente tutte le impostazioni in modo che corrispondano al menu Wii.

:::

### Brick dal banner (banner brick)

::: details

#### Sintomi

Provi ad accendere la console, vedi la schermata salute e sicurezza e, quando premi A, la schermata passa; ma poi rimani perennemente su uno schermo nero. Questo è successo dopo aver installato un WAD e riavviato il sistema o ritornato nel menu Wii. Alternativamente, il menu Wii si avvia, ma aprire un canale risulta nel blocco della console. In alcuni casi, potresti vedere la schermata "I file di sistema sono danneggiati".

![](/images/bricks/sysfiles-corrupted.jpg)

#### Causa

I brick dal banner capitano se installi un file WAD che contiene un banner o un'icona non validi.

#### Soluzioni

Se il menu Wii si avvia ancora, vai nell'Homebrew Channel e usa [YAWM ModMii Edition](yawmme) o il tuo WAD manager per disinstallare il canale danneggiato.

Se il menu Wii non si avvia, ma hai [Priiloader](priiloader) installato, accedici tenendo premuto RESET mentre la console si accende. Seleziona l'Homebrew Channel e usa [YAWM ModMii Edition](yawmme) o il tuo WAD manager per disinstallare il canale danneggiato.

Se non hai o non puoi accedere a Priiloader, potresti provare la modalità di manutenzione. Tieni premuto `+` e `-` sulla schermata di salute e sicurezza (non premere `A`!).

Come ultima risorsa, potresti usare [BlueBomb](bluebomb) per accedere all'Homebrew Channel stando nella schermata di salute e sicurezza.

:::

### Brick dalla mail (mail brick)

::: details

#### Sintomi

Provi ad accendere la console, vedi la schermata salute e sicurezza e, quando premi A, la schermata passa; ma poi rimani perennemente su uno schermo nero. La modalità di manutenzione è ancora accessibile.

#### Causa

Un brick dalla mail capita quando la console ha troppe mail da gestire, o quando una mail malformata è nella Bacheca Wii, causando un crash avviando la console normalmente. Poiché la Bacheca Wii è costantemente attiva sotto qualsiasi canale, questo impedisce al menu Wii di caricarsi interamente.

#### Soluzioni

Tenendo premuti i tasti + e - sulla schermata di attenzione, puoi entrare nella modalità di manutenzione, in cui la Bacheca Wii non viene caricata. Se l'Homebrew Channel non è installato, segui [Bluebomb](bluebomb).

Da qui, l'Homebrew Channel può essere avviato e il brick può essere risolto cancellando i dati della Bacheca Wii tramite [cdbackup](https://oscwii.org/library/app/cdbackup).

:::

### Brick dal tema (theme brick)

::: details

#### Sintomi

Provi ad accendere la console, vedi la schermata salute e sicurezza e, quando premi A, la schermata passa; ma poi rimani perennemente su uno schermo nero. Questo è successo dopo aver installato un tema.

#### Causa

Un brick del tema capita quando viene installato un tema malformato.

#### Soluzioni

Per risolvere questo problema, apri l'Homebrew Channel tramite Priiloader o BootMii come boot2 e accedi a csm-installer per installare un tema predefinito come quello classico del menu Wii. Alternativamente, entra in [YAWM ModMii Edition](yawmme) e installa il WAD del menu Wii predefinito CORRETTO per la tua regione e versione.

:::

### Brick dal menu Wii/Opera (Wii Menu/Opera brick)

::: details

#### Sintomi

Accendendo la console Wii, ottieni un errore dal browser Opera con qualcosa del tipo `You tried to access the address (URL), which is currently unavailable.` (Hai provato ad accedere all'indirizzo (URL), che al momento non è disponibile.) Questo accade ogni volta che accendi la console, e non può essere aggirato in alcun modo.

#### Causa

Questo brick è una versione più fatale del [semibrick](#semibrick). Se il SYSCONF (file di configurazione di sistema) viene danneggiato, la console la ricreerà e reinizierà la configurazione iniziale.

Tuttavia, le pagine di configurazione sono in posizioni simili a quelle delle Impostazioni console Wii. Se hai un menu Wii di una regione diversa da quella della console, non riuscirà a trovarle.

![](/images/bricks/sysmenu-brick.png)

#### Soluzioni

Se hai [Priiloader](priiloader), usalo per avviare l'Homebrew Channel e reinstallare il tema o il menu Wii originale.

Nel caso non hai Priiloader o la tua console non è modificata, prova [BlueBomb](bluebomb).

Alternativamente, puoi provare con la [Recovery Mode](recovery-mode).

:::

### Brick da KoreanKii/errore 003 (KoreanKii/error 003 brick)

::: details

#### Sintomi

All'avvio compare una schermata come questa:

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

#### Causa

Quando le console Wii coreane furono rilasciate, Nintendo cambiò le chiavi di crittazione per queste unità come un tentativo disperato di prevenire modifiche e homebrew. Seppur fallirono nel loro intento, lasciarono un controllo nel menu di sistema 4.2/4.3 per determinare se una Korean Key è presente o no su console **non** coreane. Se questo controllo ha successo, l'errore appare e la console Wii rimane brickata.

Di solito è una conseguenza diretta a un aggiornamento di sistema o un cambio di regione da una console Wii coreana.

#### Soluzioni

Dato che questo brick spesso capita dopo un aggiornamento di sistema, Priiloader non sarà presente. Nel caso in cui lo fosse, puoi sistemare installando una versione del menu Wii precedente o rimuovendo la chiave usando l'homebrew KoreanKii.

Le Wii coreane sono state rilasciate con la versione 3.3, quando Nintendo [aveva sistemato il Trucha bug nel boot1](https://wiibrew.org/wiki/3.3#Changes), quindi BootMii come boot2 non può essere installato né usato in qualsiasi console Wii coreana.

Anche se ciò lascia la console in una situazione pericolosa, **è comunque sistemabile**. Questo implica andare nella [Recovery Mode](recovery-mode), dove un exploit può essere attivato per accedere all'Homebrew Channel e ripristinare le condizioni che hanno causato il brick. Nota che per poter utilizzare questo metodo è necessario disporre di un drivechip.

:::

### Brick dall'IOS (IOS brick)

::: details

#### Sintomi

Questo brick sembrerà identico a un brick a basso livello a causa di un malfunzionamento del menu Wii tramite IOS; tuttavia non esiste una corruzione completa a basso livello della NAND, né un hardware fallimentare.

#### Causa

Questo brick capita spesso quando l'IOS del menu Wii è un [abbozzo](http://wiibrew.org/wiki/Stub_IOS), o se è stato installato un tipo di IOS non corretto. Di solito è la conseguenza di un tentativo di installazione di una versione precedente del menu Wii. Se questo problema è sorto dopo aver installato un IOS80 normale su Wii mini, vedi: [brick dal Wi-Fi](bricks#wi-fi-brick).

#### Soluzioni

Devi avere BootMii installato come boot2 per poterlo sistemare.

Puoi ripristinare un backup della NAND, o puoi fare questo:

1. Usa [NUSGet](https://github.com/NinjaCheetah/NUSGet) per preparare un WAD del menu Wii originale.
2. Usa BootMii per avviare l'Homebrew Channel e usare un WAD manager per installare il WAD nel menu Wii.

Per vWii, vedi: [recuperare un canale/IOS vWii](https://wiiu.hacks.guide/recover-vwii-ioses-channels).

:::

### Brick dal Wi-Fi (Wi-Fi brick)

::: details

#### Sintomi

Questo brick sembra identico a un brick a basso livello, tuttavia puoi ancora accendere la console Wii col telecomando Wii e puoi ancora avviare la [Recovery Mode](recovery-mode) su una console Wii originale.

#### Causa

Questo brick sorge quando il modulo Wi-Fi (o Bluetooth) della console è danneggiato o non inserito correttamente. In questi casi, la console rimarrà in una schermata nera aspettando una risposta dall'IOS.

Può succedere anche su Wii mini se installi un IOS Wii normale, perché Wii mini non ha un modulo Wi-Fi.

#### Soluzioni

Per risolvere questo problema. puoi risaldare o rimpiazzare il modulo Wi-Fi/Bluetooth.

Se su Wii Mini, devi installarci un modulo Wi-Fi.

Se entrambi non funzionano, vedi: [brick a basso livello](bricks#low-level-brick).

:::

### Brick a basso livello (low-level brick)

::: details

#### Sintomi

Schermo totalmente nero, nessuna risposta ad alcun tasto premuto. La [Recovery Mode](recovery-mode) non può essere avviata, neanche BootMii come boot2 (o non esisteva in primo luogo). A tutti gli effetti, la console sembra morta.

#### Causa

Questo brick capita quando il boot1 o boot2 è danneggiato, o se c'è un componente hardware fallimentare.

#### Soluzioni

Prima dovresti controllare se il problema è dato dall'hardware. In ordine, fai i seguenti:

- Prova che la console funzioni ancora (accetta dischi come al solito, li gira correttamente, i telecomandi Wii si connettono) prima di provare i passaggi successivi. Se è questo il caso ed è solo lo schermo a non essere mostrato, potresti avere un cavo video difettoso oppure un guasto estremamente raro della porta video o della GPU.
- Se su una Wii mini, ed è stato installato un IOS80 normale, vedi: [brick dal Wi-Fi](bricks#wi-fi-brick). Se i passaggi per risolvere il brick dal wifi non sono riusciti, prosegui.
- Prova ad avviare la [Recovery Mode](recovery-mode) (solo Wii normali). Se la console si avvia in Recovery Mode, vedi: [brick dal Wi-Fi](bricks#wi-fi-brick) o: [brick da IOS](bricks#ios-brick). Se i passaggi per risolvere il brick dal wifi o da IOS non sono riusciti, prosegui.
- Risalda il lettore dischi e prova ad accendere la console normalmente. Se ancora non parte, sostituisci il lettore dischi. Se non funziona, prosegui.
- A questo punto, o c'è una corruzione a basso livello del boot0/boot1, una NAND fallimentare, o un fallimento hardware più grave ancora sconosciuto. Considera chiedere aiuto online o di comprare un'altra console Wii.

:::

---

::: info

**Ulteriore assistenza**

Hai bisogno di più assistenza? Unisciti al [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) e chiedi aiuto in inglese sul canale `#wii-vwii-assistance`, specificando che provieni da qui e che hai bisogno di aiuto con un brick o un altro problema. Fornisci le seguenti informazioni:

1. L'esatto messaggio di errore o lo stato della console che noti, con una foto se applicabile
2. Gli esatti procedimenti che ti hanno portato all'errore, da quel che ricordi
3. Un [SysCheck](syscheck), se possibile
4. Se hai o no un backup della NAND disponibile
5. Se hai o no installato Priiloader, BootMii come IOS o BootMii come boot2
6. Il modello specifico della console (Wii originale, Family Edition, Wii mini, vWii su Wii U)

Se il tuo inglese non dovesse essere il migliore, usa un traduttore come [Google Traduttore](https://translate.google.com/) o [DeepL](https://www.deepl.com/translator).

:::

---

[← Ritorna all'indice](site-navigation){.btn .btn-solid}
