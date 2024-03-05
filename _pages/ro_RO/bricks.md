---
title: "Brick-uri"
---

{% include toc title="Tabel de Conținut" %}

Un "Brick" de obicei înseamnă că sistemul tău Wii a ajuns într-un stadiu unde sunt șanse mari ca următorul său motiv de a exista este ca un opritor de uși, sau pentru display. <br> Brick-urile pot apărea dintr-o varietate de motive, însă de obicei sunt rezultatul unui software corupt sau unei modificări necorespunzătoare făcute prin homebrew.

# Prevenirea Brick-urilor

Prevenirea unui brick implică multe reguli care variază între gândire logică și backup-uri de rezervă. Iată recomandările generale referitoare la ce să nu faci:

+ **NU urma ghiduri vechi de modificare a consolei Wii, folosi homebrew vechi sau folosi ghiduri video de pe Internet, singura excepție fiind când este EXPLICIT RECOMANDAT de dezvoltatorul aplicației homebrew.**
+ **NU FOLOSI, ÎN NICIUN CAZ, APLICAȚIA HOMEBREW `Pimp My Wii`. Este PERICULOASĂ și face chestii care au capacitatea de a CAUZA UN BRICK CONSOLEI TALE!**
+ **NU restaura backup-uri NAND create de alte console!**
+ **NU folosi un serviciu Nintendo Wi-Fi Connection care nu este știut să fie reparat RCE. Un exemplu de serviciu sigur de folosit este [Wiimmfi](wiimmfi). Altfel, ai putea permite unei persoane cu intenții rele să CAUZEZE UN BRICK consolei tale!**
+ **Instalează actualizări doar pentru regiunea ta!**.
    + Instalarea actualizărilor din altă regiune pot să nu aibă niciun efect în cel mai bun caz, dar pot duce la un brick [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) în cel mai rău caz. Pentru a preveni acest lucru, dacă ai cumpărat un Wii care a fost utilizat în trecut, rulează [SysCheck](syscheck) pentru a verifica regiunea originală a consolei tale. Dacă este Coreean, fii EXTREM de atent când aplici actualizări de sistem în consola ta și consideră solicitarea de ajutor pentru asistență suplimentară.
+ **NU șterge sau modifica fișiere de sistem și NU instala nicio modificare de fișier de sistem decât dacă știi ce faci!**
    + Un exemplu de modificare a fișierelor mergând prost este înlocuirea IOS80 pe un Wii mini, care poate duce la un [Wi-Fi Brick](bricks#wi-fi-brick).
+ **NU instala homebrew din surse nesigure sau în cazul în care codul sursă nu este disponibil.**
    + Aplicațiile găsite pe [Open Shop Channel](osc) sunt sigure.
    + Au existat incidente de aplicații malițioase dezvoltate pentru Wii în trecut, în timp ce unele aplicații sunt doar prost dezvoltate. Asigură-te că știi ce instalezi și că instalezi doar de ce ai nevoie.
    + Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
+ **Asigură-te că știi ce faci când rulezi aplicații homebrew - în special cele cu capacitatea de a modifică fișierele de sistem.**
+ **Ai FOARTE multă atenție când folosești aplicați precum:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (a doua cauză a brick-ului [Korean Kii/Error 003](bricks#korean-kiierror-003-brick))
    + Retrogradările de firmware
    + Orice altă aplicație care modifică fișiere NAND critice
+ **NU ATINGE SURSA CONSOLEI WII SAU BUTOANELE DE PORNIRE CÂND INSTALEZI SAU MODIFICI CONȚINUT DE SISTEM CRITIC**.
    + Dacă electricitatea este instabilă (ex. furtună, pană de curent), amână ce vrei să faci până când ai o sursă de curent stabilă.
    + Acest lucru se aplică proceselor periculoase precum restaurarea memoriei NAND folosind BootMii, ce ar putea duce la un [brick complet](#low-level-brick) dacă ceva merge prost.

În orice caz, ar trebui cu siguranță:
+ Să ai BootMii instalat ca boot2 dacă este disponibil, altfel ca IOS.
+ Să ai Priiloader instalat indiferent de metoda de instalare BootMii.
+ Să creezi un backup a memoriei NAND cu BootMii și să ai mereu la îndemână o copie validă de rezervă, dar mai ales înainte să încerci ceva riscant. Ține minte că în unele scenarii de brick, BootMii nu este accesibil, așa că planifică din timp.

# Diagnostic

Asta este o secțiune mică unde sunt enumerați pași asemănători procesului de pornire a consolei Wii și care îți arată tipul de brick probabil corespunzător dacă ceva nu merge bine.

+ Pornește-ți consola Wii.
+ Nimic nu se întâmplă, ecran negru. Consola nu poate fi pornită cu un Wiimote, Recovery Mode nu poate fi pornit și BootMii ca boot2 nu este accesibil. Vezi [low-level brick](bricks#low-level-brick).
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
If you are fortunate enough to get to the Wii Menu, enter the Homebrew Channel and uninstall the faulty WAD.

#### Cause
A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

#### Solutions
Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

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
In case you do not have Priiloader, you can try [BlueBomb](bluebomb).

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick

#### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Cause
A theme brick occurs when a wrongly formatted theme is installed.

#### Solutions
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

#### Cause
A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

#### Solution
By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

## Wii Menu/Opera brick

#### Symptoms
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Cause
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Solutions

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

{: .notice}

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

#### Symptoms
This brick occurs when boot1/boot2 is corrupt.

You can only recover by using a NAND programmer.<br>

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
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

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

[Apasă aici pentru a vedea toate ghidurile pe care le poți găsi pe acest site!](site-navigation)
{: .notice--info}
