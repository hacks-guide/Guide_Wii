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
+ Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

# Diagnosis

Here is a small section that lists out steps similar to the Wii boot process, and links to the likely corresponding brick if something fails.

+ Turn on Wii.
+ Nothing happens, black screen. Wii cannot be turned on with a Wiimote, Recovery Mode cannot be started, and BootMii as boot2 is not accessible. See [low-level brick](bricks#low-level-brick).
+ Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. See [Wi-Fi brick](bricks#wi-fi-brick).
+ Nothing happens, black screen, BUT BootMii as boot2 is accessible. See [IOS brick](bricks#ios-brick).
+ Error 003. See [Korean Kii/Error 003 brick](bricks#error-003-brick).
+ Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. See [mail brick](bricks#mail-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
    + If this happened after installing a theme, see [theme brick](bricks#theme-brick).
    + If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
    + If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
+ Wii starts, and progresses to the Wii Menu.
    + If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick)
    + If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
+ Wii starts, and progresses to the Wii Menu. No app is malfunctioning, Wii settings is error free, everything is seemingly fine. Unless you have some other kind of error or brick that does not fall under this umbrella (which if you do, you should come to support about), you're good!

# Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

## Semibrick

#### Symptoms
When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

#### Cause
A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

#### Solutions
Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use MyMenuifyMod to reinstall the original theme file.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.
{: .notice--danger}

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Banner brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Cause
Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Solutions
If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick

#### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Cause
A theme brick occurs when a wrongly formatted theme is installed.

#### Solutions
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access MyMenuifyMod to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

#### Cause
A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

#### Solution
By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii Menu/Opera brick

#### Symptoms
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Cause
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Solutions

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## Korean Kii/Error 003 Brick

#### Symptoms
Screen shows up as listed below on normal boot.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Cause
When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While obviously this failed, they also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Solutions
Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While these caveats leave the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick.

## IOS brick

#### Symptoms
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Cause
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](wi-fi-brick).

#### Solutions
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. If you cannot reach recovery mode, you must have BootMii as boot2 to fix this. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Symptoms
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Cause
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Solutions
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Symptoms
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Cause
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Solutions
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
