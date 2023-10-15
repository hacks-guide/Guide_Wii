---
title: "Bricks"
---

{% include toc title="Table of Contents" %}

Un "Brick" significa, solitamente, che il tuo Wii ha raggiunto uno stato in cui il fine della sua esistenza diventa essere un ferma porta o un oggetto da esposizione. <br> I brick possono verificarsi per vari motivi, tuttavia di solito sono il risultato di una corruzione del software, o di modifiche improprie effettuate tramite applicazioni homebrew.

# Prevenzione dei Brick

La prevenzione dei brick include diverse regole che spaziano dal buon senso a dei backup dei sicurezza. Ecco i consigli generali su cosa non fare:

+ **NON seguire dei tutorial obsoleti di modding del Wii, NON usare software homebrew obsoleto e NON seguire delle video guide su internet a meno che non sia ESPLICITAMENTE INDICATO dallo sviluppatore del software homebrew.
+ **NON USARE MAI, IN NESSUNA CIRCOSTANZA, L'APPLICAZIONE HOMEBREW `Pimp My Wii`. È un'applicazione homebrew PERICOLOSA che ha l'abilità di BRICKARE IL TUO WII!
+ **NON ripristinare backup della NAND provenienti da altre console!**
+ **NON usare un servizio Nintendo Wi-Fi Connection che non sia RCE patched (come [Wiimmfi](wiimmfi)). Ignorare questa indicazione potrebbe consentire a un malintenzionato di BRICKARE il tuo Wii!
+ **Installa solo aggiornamenti che hanno la stessa regione del tuo Wii!**
    + Installare aggiornamenti che hanno un'altra regione potrebbe essere innocuo, ma può causare un brick [Korean Kii/Errore 003](bricks#korean-kiierror-003-brick) nel peggiore scenario. Per evitare che questo succeda se hai comprato un Wii usato, esegui [SysCheck](syscheck) per verificare la regione originaria della tua console. Se la regione è coreana, sii ESTREMAMENTE attento nell'eseguire gli aggiornamenti alla tua console, e considera chiedere ulteriore assistenza.
+ **NON eliminare o modificare i file di sistema, e NON installare mod dei file di sistema a meno che non tu non sappia esattamente cosa stai facendo!
    + Un esempio di modifica dei file errata è rimpiazzare l'IOS80 sul Wii mini, che potrebbe portare a un [Wi-Fi Brick](bricks#wi-fi-brick).
+ **NON installare homebrew da fonti poco autorevoli o se il codice sorgente non è disponibile.**
    + Le applicazioni sull'[Open Shop Channel](osc) sono sicure.
    + Ci sono stati varie occasioni in cui applicazioni malevole sono state sviluppate per il Wii in passato, mentre altre sono state semplicemente programmate in modo errato. Assicurati di conoscere ciò che stai installando, e installa solo ciò che è necessario.
    + Dei forwarder per le applicazioni homebrew corrotti o instabili potrebbero causare un [banner brick](#banner-brick), quindi prova ad avviare le applicazioni homebrew solo dall'Homebrew Channel, a meno che non ti serva davvero il forwarder.
+ **Assicurati di sapere quello che stai facendo quando esegui applicazioni homebrew - soprattutto quelle in grado di modificare i file di sistema.**
+ **Sii PARTICOLARMENTE attento nell'usare applicazioni come:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (causa secondaria del brick [Korean Kii/Errore 003](bricks#korean-kiierror-003-brick))
    + Downgraders del Firmware
    + Qualsiasi applicazioni che modifica dei file critici della NAND
+ **NON TOCCARE L'ALIMENTAZIONE O IL TASTO POWER DEL WII MENTRE STAI INSTALLANDO O MODIFICANDO DEL CONTENUTO ESSENZIALE PER LA CONSOLE**.
    + Se la tua fonte di elettricità è instabile (es. tempesta, blackout), interrompi ogni attività fino alla fine dell'evento di instabilità.
    + Questo si applica a dei processi pericolosi come il ripristino della NAND con BootMi, che potrebbe portare a un [brick completo](#low-level-brick) se qualcosa va storto.

In ogni caso, dovresti assolutamente:
+ Avere BootMii installato su boot2 se disponibile, oppure come IOS.
+ Avere Priiloader installato indipendentemente da come è installato BootMii.
+ Esegui i backup della NAND con BootMii e conserva sempre una copia da avere a portata di mano, soprattutto prima di provare qualcosa di rischioso. Tieni a mente che, in alcuni scenari di brick, BootMii non è accessibile.

# Diagnosi

Questa è una piccola sezione che elenca i passaggi simili a quelli di accensione del Wii, e i collegamenti al brick corrispondente se qualcosa va storto.

+ Accendi il Wii.
+ Non succede nulla, schermo nero. Il Wii non può essere acceso con il Wiimote, la recovery mode non può essere eseguita, e BootMii su boot2 non è accessibile. Vedi il [brick a basso livello](bricks#low-level-brick).
+ Non succede nulla, schermo nero, MA il Wii può essere accesso col Wiimote/la recovery mode può essere eseguita. Vedi il [brick Wi-Fi](bricks#wi-fi-brick).
+ Non succede nulla, schermo nero, MA BootMii su boot2 è accessibile. Vedi il [brick IOS](bricks#ios-brick).
+ Errore 003. Vedi il brick [Korean Kii/Errore 003](bricks#error-003-brick).
+ Il Wii si avvia, MA vedi SUBITO un errore che ricorda il browser Opera. Vedi il brick [Menu Wii/Opera](bricks#wii-menuopera-brick).
+ Il Wii si avvia, vedi l'avviso di salute e sicurezza, ma nel momento in cui premi A, lo schermo diventa nero e/o si blocca e non procede. La modalità manutenzione non è accessibile. Vedi il [brick mail](bricks#mail-brick).
+ Il Wii si avvia, vedi l'avviso di salute e sicurezza, ma nel momento in cui premi A, vedi uno schermo nero.
    + Se questo succede dopo aver installato un tema, vedi il [brick del tema](bricks#theme-brick).
    + Se questo succede dopo aver installato un WAD, vedi il [brick del banner](bricks#banner-brick).
    + Se questo succede casualmente, e puoi accedere alla modalità manutenzione tenendo premuti i tasti +/- sulla schermata di salute e sicurezza, vedi il [brick mail](bricks#mail-brick).
+ Il Wii si avvia, e procede avviando il Menu Wii.
    + Se dopo aver aperto un canale specifico, ottieni l'errore `The system files are corrupted.`, vedi il [brick del banner](bricks#banner-brick)
    + Se dopo aver aperto le impostazioni del Wii, vedi un errore che ricorda il browser Opera, vedi il [semibrick](bricks#semibrick).
+ Il Wii si avvia, e procede avviando il Menu Wii. Nessuna app presente malfunzionamenti, le impostazioni del Wii non hanno errori, e tutto sembra funzionare correttamente. A meno che tu non abbia qualche altro tipo di errore o brick che non appartiene a queste categorie (per cui dovresti chiedere supporto), sei a posto!

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

Se questo brick era causato da un tema che avevi installato, usa MyMenuifyMod per reinstallato il file del tema originale.

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
Per risolvere questo problema, apri HBC tramite Priiloader o BootMii su boot2 e avvia MyMenuifyMod per installare un tema predefinito come quello del Menu Wii. Alternativamente, entra in [YAWM ModMii Edition](yawmme) e installa il WAD del menu Wii predefinito CORRETTO per la tua regione e versione.

## Brick mail

#### Sintomi
Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. La modalità manutenzione non è accessibile.

#### Causa
Un brick mail si verifica nel momento in cui un Wii ha troppa mail da gestire, o quando una mail malformata si trova nella Bacheca Wii, causando un blocco del sistema durante l'avvio. In quanto la Bacheca Wii è sempre presente sotto i canali, questo impedisce al Menu Wii di caricare correttamente.

#### Soluzione
Tenendo premuti i tasti + e - sulla schermata di avviso, puoi entrare nella modalità manutenzione, in cui la Bacheca Wii non viene caricata. Se l'Homebrew Channel non è installato e il menu di sistema del Wii è di versione 2.0 o superiore, segui [str2hax](str2hax). Altrimenti, vedi [Bluebomb](bluebomb).

Da qui, l'Homebrew Channel può essere avviato e il brick può essere risolto eliminando i dati della Bacheca Wii con [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick Menu Wii/Opera

#### Sintomi
Quando avvii il Wii, ottieni un errore dal browser Opera simile a `You tried to access the address (URL), which is currently unavailable.` Questo succede ogni volta che accendi il Wii, e non può essere aggirato con nessun mezzo.

#### Causa
Questo brick è una versione più grave del [Semibrick](#semibrick). Se il tuo SYSCONF è corrotto o dennaggiato, il Wii lo rigenererà e avvierà la fase di configurazione.

Tuttavia, la pagina di configurazione ha una posizione simile a quella delle impostazioni del Wii. Se hai un Menu Wii o un tema di regione incorretta, il Wii non può trovarle.

![](/images/bricks/sysmenu-brick.png)

#### Soluzioni

Se hai ancora [Priiloader](priiloader), usalo per entrare nell'Homebrew Channel e reinstallare il file del tema originale / il Menu Wii originale.

Se non hai Priiloader o il tuo Wii non è modificato, puoi provare [BlueBomb](bluebomb).

Alternativamente, la [Recovery Mode](recovery-mode) può essere usata come tentativo di risoluzione.

## Brick Korean Kii/Errore 003

#### Sintomi
Questa schermata viene mostrata nel momento in cui la console si avvia.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Causa
Prima di rilasciare i Wii coreani, Nintendo ha cambiato la chiave di criptazione di quelle unità nello specifico come tentativo disperato di prevenire le applicazioni homebrew. Mentre ovviamente questo tentativo è fallito, hanno anche lasciato un controllo nel Menu di sistema delle versioni 4.2/4.3 per verificare la presenza della chiave coreana su console di regione **non** coreana. Se questo controllo ha successo, l'errore viene mostrato e la Wii viene brickata.

Questo di solito succede subito dopo un aggiornamento della versione del sistema di un Wii coreano con la regione cambiata.

#### Soluzioni
In quanto questo Wii succede soprattutto dopo gli aggiornamenti del Menu Wii, Priiloader non sarà presente.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While these caveats leave the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick.

## IOS brick

#### Sintomi
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Causa
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](wi-fi-brick).

#### Soluzioni
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. If you cannot reach recovery mode, you must have BootMii as boot2 to fix this. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Sintomi
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Causa
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Soluzioni
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Sintomi
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Causa
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Soluzioni
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
