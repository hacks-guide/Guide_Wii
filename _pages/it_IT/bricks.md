---
title: "Bricks"
---

{% include toc title="Table of Contents" %}

Un "Brick" significa, solitamente, che il tuo Wii ha raggiunto uno stato in cui il fine della sua esistenza diventa essere un ferma porta o un oggetto da esposizione. <br> I brick possono verificarsi per vari motivi, tuttavia di solito sono il risultato di una corruzione del software, o di modifiche improprie effettuate tramite applicazioni homebrew.

# Prevenzione dei Brick

La prevenzione dei brick include diverse regole che spaziano dal buon senso a dei backup dei sicurezza. Ecco i consigli generali su cosa non fare:

+ **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
+ **NON USARE MAI, IN NESSUNA CIRCOSTANZA, L'APPLICAZIONE HOMEBREW `Pimp My Wii`. È pericoloso e può fare cose che possono anche BRICKARE LA TUA CONSOLE!**
+ **NON installare pacchi IOS come DARKCORP che sovrascrive la maggior parte dei tuoi IOS con cIOS. È PERICOLOSO ed estremamente obsoleto.**
+ **NON ripristinare backup della NAND provenienti da altre console!**
+ **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
+ **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
+ **NON utilizzare un servizio Nintendo Wi-Fi Connection almeno che non sia noto di essere stato corretto per RCE (ad esempio [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
+ **Installa solo aggiornamenti che hanno la stessa regione del tuo Wii!**
    + Installare aggiornamenti che hanno un'altra regione potrebbe essere innocuo, ma può causare un brick [Korean Kii/Errore 003](bricks#korean-kiierror-003-brick) nel peggiore scenario. Per evitare che questo succeda se hai comprato un Wii usato, esegui [SysCheck](syscheck) per verificare la regione originaria della tua console. Se la regione è coreana, sii ESTREMAMENTE attento nell'eseguire gli aggiornamenti alla tua console, e considera chiedere ulteriore assistenza.
+ **NON eliminare o modificare file di sistema, installare vecchie versioni del menu Wii o IOS, e NON installare nessuna mod dei file di sistema almeno che non sappia che cosa stai facendo!**
    + Un esempio di modifica dei file errata è rimpiazzare l'IOS80 sul Wii mini, che potrebbe portare a un [Wi-Fi Brick](bricks#wi-fi-brick).
+ **NON installare homebrew da fonti poco autorevoli o se il codice sorgente non è disponibile.**
    + Le applicazioni sull'[Open Shop Channel](osc) sono sicure.
    + Ci sono stati varie occasioni in cui applicazioni malevole sono state sviluppate per il Wii in passato, mentre altre sono state semplicemente programmate in modo errato. Assicurati di conoscere ciò che stai installando, e installa solo ciò che è necessario.
    + Dei forwarder per le applicazioni homebrew corrotti o instabili potrebbero causare un [banner brick](#banner-brick), quindi prova ad avviare le applicazioni homebrew solo dall'Homebrew Channel, a meno che non ti serva davvero il forwarder.
+ **Assicurati di sapere quello che stai facendo quando esegui applicazioni homebrew - soprattutto quelle in grado di modificare i file di sistema. Sii PARTICOLARMENTE attento nell'usare applicazioni come:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (causa secondaria del brick [Korean Kii/Errore 003](bricks#korean-kiierror-003-brick))
    + Downgraders del Firmware
    + Qualsiasi applicazioni che modifica dei file critici della NAND
+ **NON TOCCARE L'ALIMENTAZIONE O IL TASTO POWER DEL WII MENTRE STAI INSTALLANDO O MODIFICANDO DEL CONTENUTO ESSENZIALE PER LA CONSOLE**.
    + Se la tua fonte di elettricità è instabile (es.
    + Questo si applica a dei processi pericolosi come il ripristino della NAND con BootMi, che potrebbe portare a un [brick completo](#low-level-brick) se qualcosa va storto.

In ogni caso, dovresti assolutamente:
+ Avere BootMii installato su boot2 se disponibile, oppure come IOS.
+ Avere Priiloader installato indipendentemente da come è installato BootMii.
+ Esegui i backup della NAND con BootMii e conserva sempre una copia da avere a portata di mano, soprattutto prima di provare qualcosa di rischioso. Tieni a mente che, in alcuni scenari di brick, BootMii non è accessibile.

# Diagnosi

Questa è una sezione pensata per aiutarti a diagnosticare un potenziale brick, in ordine, dal meno grave al più grave. Se sembra che tu abbia un brick che non è trattato in questa sezione o nella guida, ti preghiamo di unirti al server Discord di Nintendo Homebrew per ricevere assistenza.

+ Il Wii si avvia, e procede avviando il Menu Wii. Nessuna app presente malfunzionamenti, le impostazioni del Wii non hanno errori, e tutto sembra funzionare correttamente. Nessun brick.
+ Il Wii si avvia, e procede avviando il Menu Wii.
    + Se dopo accedendo ad un canale specifico, ricevi il messaggio`I file di sistema sono corrotti.`, dai un'occhiata a [brick del banner](bricks#banner-brick).
    + Se dopo aver aperto le impostazioni del Wii, vedi un errore che ricorda il browser Opera, vedi il [semibrick](bricks#semibrick).
+ Il Wii si avvia, vedi l'avviso di salute e sicurezza, ma nel momento in cui premi A, vedi uno schermo nero.
    + Se questo succede dopo aver installato un tema, vedi il [brick del tema](bricks#theme-brick).
    + Se questo succede dopo aver installato un WAD, vedi il [brick del banner](bricks#banner-brick).
    + Se questo succede casualmente, e puoi accedere alla modalità manutenzione tenendo premuti i tasti +/- sulla schermata di salute e sicurezza, vedi il [brick mail](bricks#mail-brick).
+ La Wii si accende, vedi l'avviso di salute e sicurezza, ma dopo aver premuto A per iniziare, lo schermo diventa nero e/o si blocca e non si può procedere. La modalità manutenzione non è accessibile. Vedi il [brick mail](bricks#mail-brick).
+ Il Wii si avvia, MA vedi SUBITO un errore che ricorda il browser Opera. Vedi il brick [Menu Wii/Opera](bricks#wii-menuopera-brick).
+ Errore 003. Vedi il brick [Korean Kii/Errore 003](bricks#error-003-brick).
+ Non succede nulla, schermo nero, MA BootMii su boot2 è accessibile. Vedi il [brick IOS](bricks#ios-brick).
+ Non succede nulla, schermo nero, MA il Wii può essere accesso col Wiimote/la Recovery Mode può essere eseguita. Vedi il [brick Wi-Fi](bricks#wi-fi-brick).
+ Non succede nulla, schermo nero. Il Wii non può essere acceso con il Wiimote, la Recovery Mode non può essere eseguita, e BootMii su boot2 non è accessibile. Vedi il [brick a basso livello](bricks#low-level-brick).

# Tipi di Brick

Qui sono presenti i diversi tipi di brick del Wii che vengono elencati in ordine d'importanza con sintomi, cause, e soluzioni.

## Semibrick

#### Sintomi
Quando si aprono le impostazioni del Wii, ottieni un errore dal browser Opera simile a `You tried to access the address (URL), which is currently unavailable.` In alcuni casi, delle parti delle impostazioni del Wii potrebbero essere sempre accessibili, mentre altre potrebbero non esserlo (come il menu del Paese).

#### Causa
Un semibrick si verifica quando il Menu Wii o un tema personalizzato di una regione diversa è installato. Dal momento che le impostazioni del Wii sono caricate usando delle pagine HTML con Opera, i temi rimpiazzano spesso queste pagine e le mettono in dei dizionari diversi; essenzialmente portando a un errore `404 Not Found` ma nella forma di un brick.

![](/images/bricks/semibrick.png)

#### Soluzioni
Verifica in AnyRegion Changer che la regione della tua console sia la stessa del Menu Wii installato.

Se questo brick è causato da un tema che hai installato, usa csm-installer per reinstallare il tema originale.

Se questo era causato da un WAD del menu Wii che avevi installato, usa [NUS Downloader](https://wiibrew.org/wiki/NUSD) per riottenere il Menu Wii originale.

Sii prudente mentre scarichi il WAD del Menu Wii. Assicurati di scegliere la stessa versione con la regione corretta.
{: .notice--danger}

Se stai eseguendo il processo del cambio di regione, usa [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) per far coincidere le impostazioni della tua regione con il tuo Menu Wii automaticamente.

## Brick del Banner

#### Sintomi
Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. Questo succede dopo aver installato un WAD e dopo aver riavviato, o essere tornato al Menu Wii. Alternativamente, il Menu Wii può sempre essere avviato, ma aprire il canale corrotto fa bloccare la console. In alcuni casi, potresti vedere la schermata "System files are corrupted".

![](/images/bricks/sysfiles-corrupted.jpg)

#### Causa
I brick del banner si verificano se installi un file WAD che ha un'icona o un banner del Menu invalido.

#### Soluzioni
Se riesci in qualche modo ad accedere al Menu Wii, puoi entrare nell'Homebrew Channel e usare [YAWM ModMii Edition](yawmme) o il tuo WAD manager preferito per disinstallare il canale corrotto.

Se non puoi accedere al Menu Wii, e hai [Priiloader](priiloader) installato, entrarci tenendo premuto RESET mentre accendi il tuo Wii. Selezione Homebrew Channel, e disinstalla il canale corrotto.

Se non hai accesso a Priiloader, potrebbe valere la pena provare a entrare nella modalità manutenzione. Tieni premuto `+` e `-` sulla schermata di salute e sicurezza (non premere `A`!).

## Brick del Tema

#### Sintomi

Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. Questo succede dopo aver installato un tema.

#### Causa
Un brick del tema si verifica quando un tema malformato viene installato.

#### Soluzioni
Per risolvere questo problema, apri HBC tramite Priiloader o BootMii su boot2 e avvia csm-installer per installare un tema predefinito come quello del Menu Wii. Alternativamente, entra in [YAWM ModMii Edition](yawmme) e installa il WAD del menu Wii predefinito CORRETTO per la tua regione e versione.

## Brick mail

#### Sintomi
Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. La modalità manutenzione non è accessibile.

#### Causa
Un brick mail si verifica nel momento in cui un Wii ha troppa mail da gestire, o quando una mail malformata si trova nella Bacheca Wii, causando un blocco del sistema durante l'avvio. In quanto la Bacheca Wii è sempre presente sotto i canali, questo impedisce al Menu Wii di caricare correttamente.

#### Soluzione
Tenendo premuti i tasti + e - sulla schermata di avviso, puoi entrare nella modalità manutenzione, in cui la Bacheca Wii non viene caricata. Se il canale Homebrew non è installato, vedi [Bluebomb](bluebomb).

Da qui, l'Homebrew Channel può essere avviato e il brick può essere risolto eliminando i dati della Bacheca Wii con [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick Menu Wii/Opera

#### Sintomi
Quando avvii il Wii, ottieni un errore dal browser Opera simile a `You tried to access the address (URL), which is currently unavailable.` Questo succede ogni volta che accendi il Wii, e non può essere aggirato con nessun mezzo.

#### Causa
Questo brick è una versione più grave del [Semibrick](#semibrick). Se il tuo SYSCONF (file di configurazione di sistema) viene corrotto o danneggiato, la Wii lo rigenererà e avvierà la fase di configurazione.

Tuttavia, la pagina di configurazione ha una posizione simile a quella delle impostazioni del Wii. Se hai un Menu Wii o un tema di regione incorretta, il Wii non può trovarle.

![](/images/bricks/sysmenu-brick.png)

#### Soluzioni

Se hai ancora [Priiloader](priiloader), usalo per entrare nell'Homebrew Channel e reinstallare il file del tema originale / il Menu Wii originale.

Se non hai Priiloader o il tuo Wii non è modificato, puoi provare [BlueBomb](bluebomb).

Alternativamente, la [Recovery Mode](recovery-mode) può essere usata come tentativo di risoluzione.

## KoreanKii/Error 003 Brick

#### Sintomi
Questa schermata viene mostrata nel momento in cui la console si avvia.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Causa
Prima di rilasciare i Wii coreani, Nintendo ha cambiato la chiave di criptazione di quelle unità nello specifico come tentativo disperato di prevenire le applicazioni homebrew. Se questo controllo ha successo, l'errore viene mostrato e la Wii viene brickata. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean.

Questo di solito succede subito dopo un aggiornamento della versione del sistema di un Wii coreano con la regione cambiata.

#### Soluzioni
In quanto questo Wii succede soprattutto dopo gli aggiornamenti del Menu Wii, Priiloader non sarà presente. Nel caso che Priiloader sia presente, puoi semplicemente aggiustarlo installando il menu di sistema Wii precedente o rimuovere la chiave con l'homebrew KoreanKii.

I Wii coreani sono anche stati rilasciati con il Menu Wii 3.3, all'incirca quando Nintendo [ha corretto il bug Trucha di boot1](https://wiibrew.org/wiki/3.3#Changes), quindi BootMii su boot2 non può essere installato né usato sui Wii coreani.

Il procedimento include entrare in [Recovery Mode](recovery-mode), dove un exploit può essere avviato per accedere all'Homebrew Channel e rimuovere le condizioni che hanno causato il brick. While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. Nota che è necessario avere una modifica hardware del drivechip affinché questo metodo funzioni.

## Brick IOS

#### Sintomi
Questo brick sembra a un brick a basso livello a causa di un fallimento del Menu Wii via IOS; tuttavia non c'è una completa corruzione della NAND a basso livello, o un fallimento dell'hardware a basso livello.

#### Causa
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. Se questo errore ha iniziato ad accadere dopo avere installato una IOS80 normale su una Wii mini, vedere [Brick Wi-Fi](bricks#wi-fi-brick).

#### Soluzioni
Ti serve BootMii come boot2 per aggiustarlo.

Puoi ripristinare un backup della NAND oppure:

1. Usare [NUS Downloader](https://wiibrew.org/wiki/NUSD) per costruire un WAD del tuo Menu Wii originale.
1. Usare BootMii per accedere all'Homebrew Channel, poi usare un WAD manager per installare il WAD del Menu Wii.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Brick Wi-Fi

#### Sintomi
Questo brick sembra identico a un brick a basso livello, tuttavia puoi ancora avviare il Wii con un Wiimote, e puoi ancora accedere alla Recovery Mode con un Wii originale.

#### Causa
Questo brick si verifica quando il modulo Wi-Fi (o Bluetooth) del tuo Wii è danneggiato o inserito incorrettamente. In questi casi, il Wii si blocca su uno schermo nero nell'attesa di una risposta dall'IOS.

Questo succede anche se installi un IOS di un Wii normale su un Wii mini, poiché il Wii mini non possiede il modulo Wi-Fi.

#### Soluzioni
Per risolvere questo problema, puoi provare a riposizionare o rimpiazzare il modulo Wi-Fi/Bluetooth.

Se stai usando un Wii mini, devi installare il modulo Wi-Fi.

Se entrambe le soluzioni falliscono, vedi [brick a basso livello](bricks#low-level-brick).

## Brick a Basso Livello

#### Sintomi
Schermo completamente nero, nessuna risposta all'input dell'utente. La Recovery Mode non si avvia, nè BootMii su boot2 (se installato in primo luogo), a tutti gli effetti la console sembra morta.

#### Causa
Questo brick di verifica nel momento in cui boot1/boot2 sono corrotti, o se c'è un fallimento dell'hardware.

#### Soluzioni
Per prima cosa, deve essere effettuata la risoluzione dei problemi per determinare se c'è un problema hardware. Nell'ordine elencato, procedi come segue:

+ Assicurati che il Wii effettivamente funzioni (legga e faccia girare i dischi normalmente, si connetta con i Wiimote) prima di proseguire. Se questo è il caso e solo il video non viene visto, potresti forse avere un cavo video scadente, o guasto eccezionalmente raro alla porta video o alla GPU.
+ Se stai usando una Wii mini, e un normale IOS80 è stato installato vedi [Wi-Fi brick](bricks#wi-fi-brick). Se i passaggi per risolvere il brick Wi-Fi falliscono, procedi.
+ Prova ad accedere alla [Recovery Mode](recovery-mode) (solo Wii normali). Se la Wii si avvia in Recovery Mode, vedi [Wi-Fi brick](bricks#wi-fi-brick) o [IOS brick](bricks#ios-brick). Se i passaggi per risolvere il Wi-Fi brick o l'IOS brick falliscono, procedi.
+ Riposizione l'unità del disco e prova ad avviare la console normalmente. Se ancora non hai successo, rimpiazza l'unità del disco. Se ancora non hai successo, procedi.
+ A questo punto, vi è una corruzione a basso livello di boot0/boot1, un fallimento del chip della NAND, o c'è un fallimento hardware sconosciuto più grave. Considera chiedere aiuto online o comprare un altro Wii.

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
