# Bricks

Un "Brick" significa, solitamente, che il tuo Wii ha raggiunto uno stato in cui il fine della sua esistenza diventa essere un ferma porta o un oggetto da esposizione. <br> I brick possono verificarsi per vari motivi, tuttavia di solito sono il risultato di una corruzione del software, o di modifiche improprie effettuate tramite applicazioni homebrew.

# Come prevenire i brick

La prevenzione dei brick include diverse regole che spaziano dal buon senso a dei backup dei sicurezza. Ecco i consigli generali su cosa non fare:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
- **Only install updates for your own region!**.
  - Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. Se la regione è coreana, sii ESTREMAMENTE attento nell'eseguire gli aggiornamenti alla tua console, e considera chiedere ulteriore assistenza.
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - Ci sono stati varie occasioni in cui applicazioni malevole sono state sviluppate per il Wii in passato, mentre altre sono state semplicemente programmate in modo errato. Assicurati di conoscere ciò che stai installando, e installa solo ciò che è necessario.
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
  - Downgraders del Firmware
  - Qualsiasi applicazioni che modifica dei file critici della NAND
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
  - Se la tua fonte di elettricità è instabile (es.
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

In ogni caso, dovresti assolutamente:

- Avere BootMii installato su boot2 se disponibile, oppure come IOS.
- Avere Priiloader installato indipendentemente da come è installato BootMii.
- Esegui i backup della NAND con BootMii e conserva sempre una copia da avere a portata di mano, soprattutto prima di provare qualcosa di rischioso. Tieni a mente che, in alcuni scenari di brick, BootMii non è accessibile.

# Diagnosi

Questa è una sezione pensata per aiutarti a diagnosticare un potenziale brick, in ordine, dal meno grave al più grave. Se sembra che tu abbia un brick che non è trattato in questa sezione o nella guida, ti preghiamo di unirti al server Discord di Nintendo Homebrew per ricevere assistenza.

- Il Wii si avvia, e procede avviando il Menu Wii. Nessuna app presente malfunzionamenti, le impostazioni del Wii non hanno errori, e tutto sembra funzionare correttamente. Nessun brick.
- Il Wii si avvia, e procede avviando il Menu Wii.
  - If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- Il Wii si avvia, vedi l'avviso di salute e sicurezza, ma nel momento in cui premi A, vedi uno schermo nero.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- La Wii si accende, vedi l'avviso di salute e sicurezza, ma dopo aver premuto A per iniziare, lo schermo diventa nero e/o si blocca e non si può procedere. La modalità manutenzione non è accessibile. See [mail brick](bricks#mail-brick).
- Il Wii si avvia, MA vedi SUBITO un errore che ricorda il browser Opera. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Errore 003. See [Korean Kii/Error 003 brick](bricks#error-003-brick).
- Non succede nulla, schermo nero, MA BootMii su boot2 è accessibile. See [IOS brick](bricks#ios-brick).
- Non succede nulla, schermo nero, MA il Wii può essere accesso col Wiimote/la Recovery Mode può essere eseguita. See [Wi-Fi brick](bricks#wi-fi-brick).
- Non succede nulla, schermo nero. Il Wii non può essere acceso con il Wiimote, la Recovery Mode non può essere eseguita, e BootMii su boot2 non è accessibile. See [low-level brick](bricks#low-level-brick).

# Tipi di Brick

Qui sono presenti i diversi tipi di brick del Wii che vengono elencati in ordine d'importanza con sintomi, cause, e soluzioni.

## Semibrick

### Sintomi

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### Causa

Un semibrick si verifica quando il Menu Wii o un tema personalizzato di una regione diversa è installato. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### Soluzioni

Verifica in AnyRegion Changer che la regione della tua console sia la stessa del Menu Wii installato.

Se questo brick è causato da un tema che hai installato, usa csm-installer per reinstallare il tema originale.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

Sii prudente mentre scarichi il WAD del Menu Wii. Assicurati di scegliere la stessa versione con la regione corretta.

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Brick del Banner

### Sintomi

Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. Questo succede dopo aver installato un WAD e dopo aver riavviato, o essere tornato al Menu Wii. Alternativamente, il Menu Wii può sempre essere avviato, ma aprire il canale corrotto fa bloccare la console. In alcuni casi, potresti vedere la schermata "System files are corrupted".

![](/images/bricks/sysfiles-corrupted.jpg)

### Causa

I brick del banner si verificano se installi un file WAD che ha un'icona o un banner del Menu invalido.

### Soluzioni

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Selezione Homebrew Channel, e disinstalla il canale corrotto.

Se non hai accesso a Priiloader, potrebbe valere la pena provare a entrare nella modalità manutenzione. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Brick del Tema

### Sintomi

Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. Questo succede dopo aver installato un tema.

### Causa

Un brick del tema si verifica quando un tema malformato viene installato.

### Soluzioni

Per risolvere questo problema, apri HBC tramite Priiloader o BootMii su boot2 e avvia csm-installer per installare un tema predefinito come quello del Menu Wii. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Brick mail

### Sintomi

Prova ad accendere il Wii - viene mostrato l'avviso di salute e sicurezza, quando premi A lo schermo sparisce normalmente; tuttavia, dopo questo punto, non succede nulla e il Wii rimane su uno schermo nero. La modalità manutenzione non è accessibile.

### Causa

Un brick mail si verifica nel momento in cui un Wii ha troppa mail da gestire, o quando una mail malformata si trova nella Bacheca Wii, causando un blocco del sistema durante l'avvio. In quanto la Bacheca Wii è sempre presente sotto i canali, questo impedisce al Menu Wii di caricare correttamente.

### Soluzione

Tenendo premuti i tasti + e - sulla schermata di avviso, puoi entrare nella modalità manutenzione, in cui la Bacheca Wii non viene caricata. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick Menu Wii/Opera

### Sintomi

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### Causa

This brick is a more fatal version of a [Semibrick](#semibrick). Se il tuo SYSCONF (file di configurazione di sistema) viene corrotto o danneggiato, la Wii lo rigenererà e avvierà la fase di configurazione.

Tuttavia, la pagina di configurazione ha una posizione simile a quella delle impostazioni del Wii. Se hai un Menu Wii o un tema di regione incorretta, il Wii non può trovarle.

![](/images/bricks/sysmenu-brick.png)

### Soluzioni

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

### Sintomi

Questa schermata viene mostrata nel momento in cui la console si avvia.

`Error:003`<br>
`unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

### Causa

Prima di rilasciare i Wii coreani, Nintendo ha cambiato la chiave di criptazione di quelle unità nello specifico come tentativo disperato di prevenire le applicazioni homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is <strong x-id="1">not</strong> Korean.

Questo di solito succede subito dopo un aggiornamento della versione del sistema di un Wii coreano con la regione cambiata.

### Soluzioni

In quanto questo Wii succede soprattutto dopo gli aggiornamenti del Menu Wii, Priiloader non sarà presente. Nel caso che Priiloader sia presente, puoi semplicemente aggiustarlo installando il menu di sistema Wii precedente o rimuovere la chiave con l'homebrew KoreanKii.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Nota che è necessario avere una modifica hardware del drivechip affinché questo metodo funzioni.

## Brick IOS

### Sintomi

Questo brick sembra a un brick a basso livello a causa di un fallimento del Menu Wii via IOS; tuttavia non c'è una completa corruzione della NAND a basso livello, o un fallimento dell'hardware a basso livello.

### Causa

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### Soluzioni

Ti serve BootMii come boot2 per aggiustarlo.

Puoi ripristinare un backup della NAND oppure:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. Usare BootMii per accedere all'Homebrew Channel, poi usare un WAD manager per installare il WAD del Menu Wii.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Brick Wi-Fi

### Sintomi

Questo brick sembra identico a un brick a basso livello, tuttavia puoi ancora avviare il Wii con un Wiimote, e puoi ancora accedere alla Recovery Mode con un Wii originale.

### Causa

Questo brick si verifica quando il modulo Wi-Fi (o Bluetooth) del tuo Wii è danneggiato o inserito incorrettamente. In questi casi, il Wii si blocca su uno schermo nero nell'attesa di una risposta dall'IOS.

Questo succede anche se installi un IOS di un Wii normale su un Wii mini, poiché il Wii mini non possiede il modulo Wi-Fi.

### Soluzioni

Per risolvere questo problema, puoi provare a riposizionare o rimpiazzare il modulo Wi-Fi/Bluetooth.

Se stai usando un Wii mini, devi installare il modulo Wi-Fi.

If both fail, see [low-level brick](bricks#low-level-brick).

## Brick a Basso Livello

### Sintomi

Schermo completamente nero, nessuna risposta all'input dell'utente. La Recovery Mode non si avvia, nè BootMii su boot2 (se installato in primo luogo), a tutti gli effetti la console sembra morta.

### Causa

Questo brick di verifica nel momento in cui boot1/boot2 sono corrotti, o se c'è un fallimento dell'hardware.

### Soluzioni

Per prima cosa, deve essere effettuata la risoluzione dei problemi per determinare se c'è un problema hardware. Nell'ordine elencato, procedi come segue:

- Assicurati che il Wii effettivamente funzioni (legga e faccia girare i dischi normalmente, si connetta con i Wiimote) prima di proseguire. Se questo è il caso e solo il video non viene visto, potresti forse avere un cavo video scadente, o guasto eccezionalmente raro alla porta video o alla GPU.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). Se i passaggi per risolvere il brick Wi-Fi falliscono, procedi.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). Se i passaggi per risolvere il Wi-Fi brick o l'IOS brick falliscono, procedi.
- Riposizione l'unità del disco e prova ad avviare la console normalmente. Se ancora non hai successo, rimpiazza l'unità del disco. Se ancora non hai successo, procedi.
- A questo punto, vi è una corruzione a basso livello di boot0/boot1, un fallimento del chip della NAND, o c'è un fallimento hardware sconosciuto più grave. Considera chiedere aiuto online o comprare un altro Wii.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
