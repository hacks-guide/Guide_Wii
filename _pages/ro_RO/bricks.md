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
    + Canalele forwarder pentru aplicații homebrew corupte sau instabile pot cauza un [brick de banner](#banner-brick), așa că încearcă să rulezi aplicații homebrew din Homebrew Channel dacă nu vrei neapărat un canal forwarder.
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
+ Nimic nu se întâmplă, ecran negru. Consola nu poate fi pornită cu un Wiimote, Recovery Mode nu poate fi pornit și BootMii ca boot2 nu este accesibil. Vezi [brick de nivel adânc](bricks#low-level-brick).
+ Nimic nu se întâmplă, ecran negru, DAR consola Wii poate fi pornită cu un Wiimote/Recovery Mode poate fi accesat. Vezi [brick de Wi-Fi](bricks#wi-fi-brick).
+ Nimic nu se întâmplă, ecran negru, DAR BootMii ca boot2 este accesibil. Vezi [brick de IOS](bricks#ios-brick).
+ Error 003. Vezi [brick Korean Kii/Error 003](bricks#error-003-brick).
+ Consola pornește, DAR INSTANT vezi o eroare care seamănă cu browserul web Opera. Vezi [brick de Wii Menu/Opera](bricks#wii-menuopera-brick).
+ Consola pornește, vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, ecranul rămâne negru și/sau îngheață și nu continuă. Modul de mentenanță este accesibil. Vezi [brick de mail](bricks#mail-brick).
+ Consola pornește, vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, vezi un ecran negru.
    + Dacă acest lucru se întâmplă după ce ai instalat o temă de fundal, vezi [brick de temă](bricks#theme-brick).
    + Dacă acest lucru se întâmplă după ce ai instalat un fișier WAD, vezi [brick de banner](bricks#banner-brick).
    + Dacă acest lucru a început să se întâmple aleatoriu și poți accesa Maintenance Mode dacă apeși +/- pe ecranul de sănătate/avertizare, vezi [brick de mail](bricks#mail-brick).
+ Consola pornește și continuă la Meniul Wii.
    + Dacă după ce accesezi un canal specific primești mesajul `The system files are corrupted.`, vezi [brick de banner](bricks#banner-brick)
    + Dacă după ce accesezi setările Wii vezi o eroare care seamănă cu browserul web Opera, vezi [semibrick](bricks#semibrick).
+ Consola pornește și continuă la Meniul Wii. Nici o aplicație nu este defectă, setările Wii nu au erori, totul pare să fie în regulă. Dacă nu ai un alt tip de eroare sau brick care nu se află în această secțiune (dacă ai, ar trebui să ceri ajutor), ești în regulă!

# Tipuri de Brick

Aici, diferitele tipuri de brick-uri Wii vor fi discutate în ordinea severității cu simptome, cauze și soluții.

## Semibrick

#### Simptome
Când navighezi în Setările Wii vei primi o eroare din browserul web Opera care afișează mesajul `You tried to access the address (URL), which is currently unavailable.` În unele cazuri, unele părți a meniului din Setările Wii s-ar putea încă să fie accesibile, însă alte părți pot să nu fie (precum meniul "Country").

#### Cauze
Un semibrick apare atunci când un Meniu Wii sau o temă de fundal dintr-o regiune diferită este instalată. Pentru că meniul ale Setărilor Wii este afișat folosind pagini HTML cu Opera, temele de fundal de obicei înlocuiesc aceste pagini și le pun în alte locații; esențial rezultând la o eroare `404 Not Found` dar în forma unui brick a consolei.

![](/images/bricks/semibrick.png)

#### Soluții
Verifică în AnyRegion Changer dacă regiunea consolei tale este aceeași cu tema sau cu Meniul Wii pe care îl ai instalat.

Dacă acest lucru a fost cauzat de o temă de fundal pe care ai instalat-o, folosește csm-installer pentru a reinstala tema originală.

Dacă acest lucru a fost cauzat de un fișier WAD de Meniu Wii, folosește [NUS Downloader](https://wiibrew.org/wiki/NUSD) pentru a reobține Meniul Wii original.

Ai grijă când descarci fișierul WAD de Meniu Wii. Asigură-te că alegi aceeași versiune cu regiunea corectată.
{: .notice--danger}

Dacă ești în procesul unei schimbări de regiune, folosește [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) pentru a repara automat toate setările de regiune ca să fie potrivite cu Meniul Wii.

## Brick de banner

#### Simptome
După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Acest lucru s-a întâmplat după ce ai instalat un fișier WAD și ai repornit consola sau te-ai întors în Meniul Wii. Altfel, Meniul Wii încă poate fi accesat dar deschiderea canalului defect rezultă în înghețarea consolei. În unele cazuri, este posibil să vezi ecranul "System files are corrupted".

![](/images/bricks/sysfiles-corrupted.jpg)

#### Cauze
Brick-urile de banner apar dacă instalezi un fișier WAD care are un banner sau iconiță de Meniu Wii invalidă.

#### Soluții
În cazul în care ai norocul să poți accesa Meniul Wii, mergi în Homebrew Channel și folosește [YAWM ModMii Edition](yawmme) sau managerul tău de fișiere WAD ales pentru a dezinstala canalul defect.

Dacă nu poți accesa Meniul Wii și ai [Priiloader](priiloader) instalat, ține apăsat butonul RESET în timp ce-ți pornești consola Wii pentru a-l accesa. Alege Homebrew Channel, apoi dezinstalează canalul defect.

Dacă nu ai sau nu poți accesa Priiloader, poți încerca să intri în Maintenance mode. Ține apăsat `+` și `-` pe ecranul "Health and Safety" (nu apăsa `A`!).

## Brick de temă

#### Simptome

După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Acest lucru s-a întâmplat după ce ai instalat o temă de fundal.

#### Cauze
Un brick de temă apare atunci când o temă de fundal formatată greșit este instalată.

#### Soluții
Pentru a repara această problemă, deschide HBC folosind Priiloader sau BootMii ca boot2 și accesează csm-installer pentru a instala o temă prestabilită precum temă de bază a Meniului Wii. Altfel, intră în [YAWM ModMii Edition](yawmme) și instalează fișierul WAD prestabilit a Meniului Wii CORECT pentru regiunea și versiunea ta.

## Brick de mail

#### Simptome
După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Maintenance mode încă este accesibil.

#### Cauze
Un brick de mail apare atunci când un Wii are mai mult mail decât poate face față sau când mail defect se află în Wii Message Board, cauzând o înghețare a sistemului odată ce o pornești normal. Pentru că Wii Message Board este mereu afișat sub canalele Wii, asta cauzează Meniul Wii să eșueze înainte să se încarce complet.

#### Soluție
Dacă ții apăsat + și - pe ecranul de avertizare, maintenance mode poate fi accesat, unde Wii Message Board-ul nu este încărcat deloc. Dacă Homebrew Channel nu este instalat și meniul de sistem este la versiunea meniului Wii 2.0 sau mai nou, urmează [str2hax](str2hax). Altfel, vezi [Bluebomb](bluebomb).

De aici, Homebrew Channel poate fi rulat și brick-ul poate fi reparat prin ștergerea datelor Wii Message Board folosind [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick de Wii Menu/Opera

#### Simptome
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Cauze
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Soluții

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

{: .notice}

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

#### Simptome
This brick occurs when boot1/boot2 is corrupt.

You can only recover by using a NAND programmer.<br>

![](/images/bricks/error-003.png)

#### Cauze
When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While obviously this failed, they also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Soluții
Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While these caveats leave the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick.

## IOS brick

#### Simptome
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Cauze
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

#### Soluții
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. If you cannot reach recovery mode, you must have BootMii as boot2 to fix this. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Simptome
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Cauze
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Soluții
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Simptome
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Cauze
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Soluții
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Apasă aici pentru a vedea toate ghidurile pe care le poți găsi pe acest site!](site-navigation)
{: .notice--info}
