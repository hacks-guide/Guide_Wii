---
title: "Brick-uri"
---

{% include toc title="Tabel de Conținut" %}

Un "Brick" de obicei înseamnă că sistemul tău Wii a ajuns într-un stadiu unde sunt șanse mari ca următorul său motiv de a exista este ca un opritor de uși, sau pentru display. <br> Brick-urile pot apărea dintr-o varietate de motive, însă de obicei sunt rezultatul unui software defect sau unei modificări necorespunzătoare făcute prin homebrew.

# Prevenirea Brick-urilor

Prevenirea unui brick implică multe reguli care variază între gândire logică și backup-uri de rezervă. Iată recomandările generale referitoare la ce să nu faci:

+ **NU urmări tutorialele vechi, folosi homebrew vechi, sau folosi tutoriale video de pe Internet, singura excepție fiind cele care sunt EXPLICIT RECOMANDATE de către dezvoltatorul homebrew.**
+ **NU FOLOSI, ÎN NICIUN CAZ, APLICAȚIA HOMEBREW `Pimp My Wii`. Este PERICULOS și face chestii care au abilitatea de a CAUZA UN BRICK CONSOLEI TALE!**
+ **NU instala pachete IOS precum DARKCORP care înlocuiesc majoritatea IOS-urilor tale cu cIOS. Este PERICULOS și foarte învechit.**
+ **NU restaura backup-uri NAND create de alte console!**
+ **NU instala niciun IOS care nu este făcut pentru sistemul tău** (exemplu: IOS de la Wii pe Wii mini)
+ **NU încerca să schimbi regiunea prin metode concepute pentru Wii, vWii sau Wii mini**
+ **NU folosi un serviciu Nintendo Wi-Fi Connection care nu este știut să fie reparat RCE. Un exemplu de serviciu sigur de folosit este [Wiimmfi](wiimmfi). Făcând acest lucru permite ca un actor malițios să îți distrugă consola!**
+ **Instalează actualizări doar pentru regiunea ta!**.
    + Instalarea actualizărilor din altă regiune pot să nu aibă niciun efect în cel mai bun caz, dar pot duce la un brick [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) în cel mai rău caz. Pentru a preveni acest lucru, dacă ai cumpărat un Wii care a fost utilizat în trecut, rulează [SysCheck](syscheck) pentru a verifica regiunea originală a consolei tale. Dacă este Coreean, fii EXTREM de atent când aplici actualizări de sistem în consola ta și consideră solicitarea de ajutor pentru asistență suplimentară.
+ **NU șterge sau modifica fișiere de sistem, instala versiuni vechi ale Meniului Wii sau a unui IOS și NU instala nicio modificare de fișier de sistem decât dacă știi ce faci!**
    + Un exemplu de modificare a fișierelor mergând prost este înlocuirea IOS80 pe un Wii mini, care poate duce la un [Wi-Fi Brick](bricks#wi-fi-brick).
+ **NU instala homebrew din surse nesigure sau în cazul în care codul sursă nu este disponibil.**
    + Aplicațiile găsite pe [Open Shop Channel](osc) sunt sigure.
    + Au existat incidente de aplicații malițioase dezvoltate pentru Wii în trecut, în timp ce unele aplicații sunt doar prost dezvoltate. Asigură-te că știi ce instalezi și că instalezi doar de ce ai nevoie.
    + Canalele forwarder pentru aplicații homebrew corupte sau instabile pot cauza un [brick de banner](#banner-brick), așa că încearcă să rulezi aplicații homebrew din Homebrew Channel dacă nu vrei neapărat un canal forwarder.
+ **Asigură-te că știi ce faci când rulezi aplicații homebrew - în special cele cu capacitatea de a modifică fișierele de sistem. Ai FOARTE multă atenție când folosești aplicați precum:**
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

Aceasta este o secțiune menită să te ajute să diagnostichezi un brick potențial, în ordine de la cel mai puțin la cel mai sever. Dacă pare că ai un brick care nu este acoperit de aceasta secțiune sau de ghid, te rugăm să te alături serverului de Discord Nintendo Homebrew pentru ajutor.

+ Consola pornește și continuă la Meniul Wii. Nici o aplicație nu este defectă, setările Wii nu au erori, totul pare să fie în regulă. Niciun brick.
+ Consola pornește și continuă la Meniul Wii.
    + Dacă după ce accesezi un canal specific, primești mesajul `The system files are corrupted.`, vezi [brick de banner](bricks#banner-brick).
    + Dacă după ce accesezi setările Wii vezi o eroare care seamănă cu browserul web Opera, vezi [semibrick](bricks#semibrick).
+ Consola pornește, vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, vezi un ecran negru.
    + Dacă acest lucru se întâmplă după ce ai instalat o temă de fundal, vezi [brick de temă](bricks#theme-brick).
    + Dacă acest lucru se întâmplă după ce ai instalat un fișier WAD, vezi [brick de banner](bricks#banner-brick).
    + Dacă acest lucru a început să se întâmple aleatoriu și poți accesa Maintenance Mode dacă apeși +/- pe ecranul de sănătate/avertizare, vezi [brick de mail](bricks#mail-brick).
+ Consola pornește și vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, ecranul rămâne negru și/sau îngheață și nu continuă. Modul de mentenanță este accesibil. Vezi [brick de mail](bricks#mail-brick).
+ Consola pornește, DAR INSTANT vezi o eroare care seamănă cu browserul web Opera. Vezi [brick de Wii Menu/Opera](bricks#wii-menuopera-brick).
+ Error 003. Vezi [brick Korean Kii/Error 003](bricks#error-003-brick).
+ Nimic nu se întâmplă, ecran negru, DAR BootMii ca boot2 este accesibil. Vezi [brick de IOS](bricks#ios-brick).
+ Nimic nu se întâmplă, ecran negru, DAR consola Wii poate fi pornită cu un Wiimote/Recovery Mode poate fi accesat. Vezi [brick de Wi-Fi](bricks#wi-fi-brick).
+ Nimic nu se întâmplă, ecran negru. Consola nu poate fi pornită cu un Wiimote, Recovery Mode nu poate fi pornit și BootMii ca boot2 nu este accesibil. Vezi [brick de nivel adânc](bricks#low-level-brick).

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
Dacă ții apăsat + și - pe ecranul de avertizare, maintenance mode poate fi accesat, unde Wii Message Board-ul nu este încărcat deloc. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

De aici, Homebrew Channel poate fi rulat și brick-ul poate fi reparat prin ștergerea datelor Wii Message Board folosind [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick de Wii Menu/Opera

#### Simptome
Când pornești consola vei primi o eroare din browserul web Opera care afișează mesajul `You tried to access the address (URL), which is currently unavailable.` Asta se va întâmpla de fiecare dată când pornești consola Wii și nu poate fi evitată prin alte metode.

#### Cauze
Acest brick este o versiune mai gravă a unui [Semibrick](#semibrick). Dacă fișierul SYSCONF (fișier de configurare a sistemului) este corupt sau eronat, consola o va regenera și va începe faza de configurare inițială.

Însă, paginile de configurare sunt într-o locație similară cu paginile de setări Wii. Dacă ai un Meniu Wii sau o temă de fundal cu regiunea incorectă, consola nu le poate găsi.

![](/images/bricks/sysmenu-brick.png)

#### Soluții

În cazul în care încă ai [Priiloader](priiloader), folosește-l pentru a intra în Homebrew Channel și reinstalează tema originală/Meniul Wii original.

Dacă nu ai Priiloader instalat sau consola ta Wii nu este modificată, poți încerca [BlueBomb](bluebomb).

Alternativ, [Recovery Mode](recovery-mode) poate fi încercat pentru a repara consola.

## Brick KoreanKii/Error 003

#### Simptome
Ecranul afișează mesajul de mai jos dupa ce pornești consola.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Cauze
Când au lansat consolele Wii Coreene, Nintendo a schimbat cheia de criptare pentru aceste unități ca o ultimă încercare de a preveni instalarea homebrew-ului. Deși scopul modificării acesteia a eșuat, Nintendo au mai lăsat și o verificare în versiunile ale Meniului de Sistem 4.2/4.3 care determină dacă Cheia Coreeană este prezentă pe o regiune a sistemului care **nu** este Coreean. Dacă această verificare are succes, eroarea este declanșată și consola Wii este practic blocată.

Acest lucru este de obicei o continuare imediată a unei actualizări a sistemului Wii pe un Wii Coreean căruia i-a fost schimbată regiunea.

#### Soluții
Deoarece acest brick apare cel mai des în urma unei actualizări a Meniului Wii, Priiloader nu va fi instalat. În cazul în care Priiloader este prezent, poți să-l repari instalând Meniul de Sistem Wii anterior sau eliminând cheia cu aplicația homebrew KoreanKii.

Consolele Wii Coreene de asemenea au fost lansate cu Meniul Wii 3.3, în jurul perioadei de timp când Nintendo [a reparat bug-ul Trucha în boot1](https://wiibrew.org/wiki/3.3#Changes), deci BootMii ca boo2 nu poate fi instalat pe sau folosit pe niciun Wii Coreean.

Deși acest lucru lasă consola Wii într-o situație destul de periculoasă, **încă poate fi reparat**. Asta implică intrarea în [Recovery Mode](recovery-mode), unde un exploit poate fi activat pentru a obține access la Homebrew Channel și pentru a inversa condițiile care au cauzat brick-ul. Ține minte că ai nevoie de un drivechip pentru ca această metodă să funcționeze.

## Brick de IOS

#### Simptome
Acest brick pare să fie identic cu un brick de nivel adânc datorită eșuării Meniului Wii din cauza unui IOS; însă acesta nu este o corupere completă de nivel adânc a memoriei NAND sau o defecțiune de nivel adânc a componentelor sistemului.

#### Cauze
Acest brick se întâmplă cel mai des atunci când sistemul IOS al meniului Wii este unul [stub](http://wiibrew.org/wiki/Stub_IOS), sau în cazul în care pe consolă este instalat un tip greșit de IOS. Un IOS stub pentru system menu este de obicei consecința încercării de a face downgrade la Wii menu. Dacă această eroare a început să se întâmple după instalarea unui IOS80 normal într-un Wii mini, vezi [brick de Wi-Fi](bricks#wi-fi-brick).

#### Soluții
You must have BootMii as boot2 to fix this.

Poți să restaurezi un backup al memoriei NAND sau să faci asta:

1. Folosește [NUS Downloader](https://wiibrew.org/wiki/NUSD) pentru a construi un fișier WAD al Meniului tău Wii original.
1. Folosește BootMii pentru a intra în Homebrew Channel și folosește un manager WAD pentru a instala fișierul WAD de Meniu Wii.

Pentru vWii, Vezi [Recuperarea unui Canal/IOS vWii](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Brick de Wi-Fi

#### Simptome
Acest brick pare identic cu un brick de nivel adânc, însă încă poți să îți pornești consola cu un Wiimote și încă poți să intri în Recovery Mode pe un Wii de revizie originală.

#### Cauze
Acest brick apare atunci când modulul Wi-Fi (sau Bluetooth) al consolei tale Wii este defect sau nu este introdus cum trebuie. În astfel de cazuri, consola Wii rămâne blocată pe un ecran negru așteptând un răspuns de la IOS.

Acest lucru de asemenea se va întâmpla pe un Wii mini dacă instalezi un IOS de Wii normal deoarece consola Wii mini nu are un modul Wi-Fi.

#### Soluții
Pentru a rezolva această problemă, poți încerca să reintroduci sau să înlocuiești modulul Wi-Fi/Bluetooth.

Dacă ai un Wii mini, trebuie să instalezi un modul Wi-fi.

Dacă ambele soluții eșuează, vezi [brick de nivel adânc](bricks#low-level-brick).

## Brick de nivel adânc

#### Simptome
Ecran complet negru, niciun răspuns la nicio acțiune. Recovery Mode nu poate fi inițializat și nici BootMii ca boot2 (sau dacă n-a existat deloc), în esență consola pare moartă.

#### Cauze
Acest brick apare când boot1/boot2 sunt defecte sau dacă există defecțiuni de hardware.

#### Soluții
În primul rând, trebuie să determinăm dacă problema este legată de hardware. În ordinea listată, urmează acești pași:

+ Testează să verifici dacă sistemul Wii încă funcționează (acceptă discuri normal, cititorul de discuri se rotește corect, controlerele Wiimote se conectează) înainte de a încerca următorii pași. Dacă acesta este cazul și doar nu este afișată imaginea video, s-ar putea să ai un cablu video defect sau o defecțiune foarte rară a portului video sau a plăcii video.
+ Dacă ești pe un Wii mini și un IOS80 normal a fost instalat, vezi [brick de Wi-Fi](bricks#wi-fi-brick). Dacă pașii pentru repararea brick-ului de Wi-Fi au eșuat, continuă.
+ Încearcă să intri în [Recovery Mode](recovery-mode) (doar pentru console Wii normale). În cazul în care consola Wii pornește în Recovery Mode, vezi [brick de Wi-Fi](bricks#wi-fi-brick) sau [brick de IOS](bricks#ios-brick). Dacă pașii pentru repararea brick-ului de Wi-Fi sau brick-ului de IOS au eșuat, continuă.
+ Reintrodu unitatea de discuri și încearcă să pornești consola normal. Dacă nu a funcționat, înlocuiește unitatea de discuri. Dacă tot nu a funcționat, continuă.
+ În acest stadiu, problema este ori o corupere de nivel adânc de boot0/boot1, o defecțiune a chipului NAND sau o defecțiune a unei alte componente interne. Consideră cererea în ajutor online sau cumpărarea altui Wii.

[Apasă aici pentru a vedea toate ghidurile pe care le poți găsi pe acest site!](site-navigation)
{: .notice--info}
