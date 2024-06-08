---
title: "Întrebări Frecvente și Rezolvarea unor probleme"
---

## Întrebări Principale

{% include toc title="Table of Contents" %}

### Cât de riscant este să-mi modific consola?
Nu prea riscant, în funcție de consola ta. Consola Wii are o barieră de intrare mult mai joasă decât alte console, unele exploit-uri necesitând nu mai mult decât un Wii și o conexiune la Internet. Cât timp urmezi sfaturile generale afișate [aici](bricks#brick-prevention), instalezi [BootMii](bootmii) și [Priiloader](priiloader) și gândești logic, ar trebui să fii în regulă!

### Am primit codul de eroare XXXXXX, cum îl rezolv?
Pentru a verifica ce înseamnă eroarea, te rugăm accesează [pagina de erori Wiimmfi](https://wiimmfi.de/error). Multe erori comune au rezolvări listate mai jos:

#### Eroarea 051330/51330

Rulează un test de conexiune la Internet mergând la `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Eroarea 220602

##### Pentru Utilizatorii RiiConnect24

Folosești serverul DNS vechi pentru RiiConnect24. Urmează [acest](riiconnect24#section-iv---connecting) ghid pentru instrucțiuni legate de cum să-l schimbi.

##### Pentru cei care nu folosesc RiiConnect24

Serverul tău DNS primar este incorect sau nu funcționează.<br> Acest lucru se poate întâmpla și dacă folosești un server proxy care este închis.

#### Eroarea 107304

##### Pentru Utilizatorii RiiConnect24

Dacă primești această eroare sau dacă vezi Acordului Utilizatorului Nintendo fără logoul RiiConnect24, asta înseamnă că ISP-ul tău (Furnizorul de Internet) sau rețeaua blochează folosirea DNS-ului RC24. Poți seta `Auto-Obtain DNS` la `ON` pentru a rezolva asta. RiiConnect24 va funcționa și fără aceasta. Altfel, poți folosi aplicația [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest).

##### Pentru cei care nu folosesc RiiConnect24

Dacă primești această eroare, serverul DNS pe care l-ai ales sau internetul tău în general are probleme. Reîncearcă mai încolo.

#### FORE000006

Dacă primești eroarea FORE000006, ceasul consolei tale Wii este probabil setat incorect. Vezi [asta](wiiconnect24#updating-rtc-clock) pentru instrucțiuni legate de cum să-l setezi cum trebuie. Dacă acest lucru tot eșuează, scoate bateria ceas a consolei (aflată pe fundul consolei sub un șurub) pentru o oră și apoi reintroduce-l. Apoi, resetează ceasul consolei Wii.

### Cum pot elimina controlul parental?
[Generatorul mkey](https://mkey.eiphax.tech/) poate genera codul necesar pentru a elimina controlul parental.

### Cred că sistemul meu Wii are un brick sau ceva este foarte în neregulă, ce ar trebui să fac?
Vezi [această](bricks) pagină.

## Întrebări Frecvente despre Dispozitivele de Stocare

Pentru exploit-urile [BlueBomb](bluebomb), [str2hax](str2hax) sau [FlashHax](flashhax), nu ai nevoie de un card SD pentru a-ți modifica sistemul Wii; este totuși foarte recomandat să folosești unul pentru aplicații homebrew și pentru alte sarcini.
{: .notice--info}

FAT32 este sistemul de fișiere recomandat pentru cardurile SD, vezi [acest ghid](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) pentru instrucțiuni de formatare.<br> Pentru dispozitive USB, FAT32 este de asemenea recomandat, deși utilizatorii ar trebui să știe limitările FAT32 care permit mărimi de maxim 2TB în spațiu. WBFS a fost un sistem de fișiere folosit anterior pentru backup-uri de jocuri Wii (nu de a fi confundate cu fișierele WBFS) - astăzi, este învechit și nu ar trebui să fie folosit.
{: .notice--info}

Pentru versiunile nemodificate ale Meniului Wii cu versiunea mai veche de 4.0, o limitare în software-ul sistemului Wii previne folosirea cardurilor SD mai mari de 2GB.<br> Pentru versiunile nemodificate ale Meniului Wii cu versiunea 4.0 sau mai nouă, această limitare a fost eliminată iar carduri SD de mărimi variate pot fi folosite.<br> Șansele cele mai mari să obții un card SD care merge cu orice Wii sunt la mărimile de 32GB sau mai mici, însă a fost raportat succesul de mai multe ori și folosind carduri care ajung până la 256GB.
{: .notice--warning}

Pentru dispozitivele USB, stick-urile USB au o șansă mare să nu meargă corespunzător cu sistemele Wii. În schimb, este recomandat să folosești un hard disk USB sau o unitate SSD.
{: .notice--warning}

### Reguli Generale de Stocare

Când vrei să cumperi sau să folosești un card SD sau o unitate USB, merită să iei în considerare lucrurile pe care vei folosi oricare dintre mediile de stocare. Diferite utilizări pot ocupa variate cantități de spațiu, unele exemple comune fiind afișate mai jos:

+ Backup-urile Wii: Cele mai mari jocuri Wii (DVD-urile dublu strat) pot ajunge la mărimea de 8.5GB, jocurile mai normale sunt mai apropiate de mărimea de 4.7GB sau mai puțin. Utilizatorul obișnuit de un dispozitiv de backup-uri Wii probabil că ar dori 128GB sau mai mult de spațiu.
+ Backup-uri GameCube: Cele mai mari jocuri GameCube ajung la mărimea de până la 1.3GB. Mărimile ISO sunt normal această mărime indiferent de joc, dar acestea pot fi scăzute considerabil dacă formatul NKIT este folosit în schimb. Utilizatorul obișnuit de un dispozitiv de backup-uri GameCube probabil că ar dori 64GB sau mai mult de spațiu.
+ Emulare Generală: Există o mare varietate de emulatoare disponibile pentru Wii. Deoarece mărimea diferitelor ROM-uri de jocuri diferă drastic, utilizatorul obișnuit care vrea să emuleze jocuri probabil că ar dori 32GB sau mai mult de spațiu.
+ Homebrew General: Pentru aplicații homebrew, utilizatorul obișnuit ar dori 2GB sau mai mult de spațiu.
+ Backup-uri ale memoriei NAND: Pentru a crea un backup a memoriei tale NAND folosind BootMii, utilizatorul obișnuit ar avea nevoie de minim 512MB de spațiu liber, însă mărimi de 1GB sau mai mult sunt recomandate.
+ Minimul necesar, doar exploit-ul: Cantitatea minimă de spațiu necesară pentru a rula un exploit compatibil cu cardul SD este 128MB.

### Cumpărarea Cardurilor SD

Cardurile SD de 2TB sau mai mult momentan nu există, oricine care încearcă să-ți vândă unul vrea să te păcălească.
{: .notice--danger}

Când cumperi carduri SD, este în general recomandat să rămâi la mărci de încredere cu cât crește prețul și mărimea cardului pe care vrei să-l cumperi. În timp ce poți cumpăra un card SD de 2GB generic și cel mai probabil vei fi în regulă, același lucru nu poate fi spus și pentru lucruri precum un card SD de 512GB. Prețul general curent pentru cardurile SD este în jur de €9-20 (45-100 RON) pentru 256GB și sub, în timp ce 512GB costă în jur de €38 (200 RON). Când cumperi de pe Amazon, asigură-te că cardul SD este ori `Vândut de/Livrat de Amazon` sau `Vândut de [marcă], Livrat de Amazon`. Asigură-te când cumperi unități de stocare de pe eBay.

Mărci recomandate:
+ Samsung (EVO Select, EVO Plus, PRO Plus)
+ SanDisk (Extreme, Ultra, etc)
+ Lexar (E-Series, Professional)
+ Silicon Power (carduri "3D NAND", capacitate mărită de obicei cu raportul calitate-preț mai bun)
+ PNY (Elite, Elite-X, etc)

### Cumpărarea Unităților USB - Hard Disk-urilor

Când cumperi hard disk-uri USB, există în prezent numai trei producători de HDD: Western Digital, Seagate și Toshiba. Oricare și toate celelalte companii de hard disk-uri sunt desființate și ori au dat faliment, ori au fost absorbite de cele trei companii menționate anterior. Acestea fiind spuse, dacă ai la îndemână un hard disk în plus făcut de altă companie, ar trebui încă să funcționeze! Tehnologia hard disk-urilor a rămas în întregime neschimbată în ultimii circa 10 ani. Doar ține minte să verifici datele S.M.A.R.T pentru a te asigura că unitatea nu are probleme înainte să îți pui toate datele pe el.

Pentru mărimea hard disk-ului, 2.5 inch ar trebui să funcționeze în regulă mergând doar pe alimentarea din USB pentru un Wii, 3.5 inch consumă mult mai multă putere și în majoritatea cazurilor va avea nevoie de un alimentator extern. Asigură-te să plănuiești acest lucru atunci când stabilești ce vrei să faci cu o unitate externă.

În ceea ce privește opțiunile tale, acest lucru în mare se rezumă la trei scenarii diferite:

+ Cumpărarea unui hard disk extern nou de la zero: Unitățiile externe noi costă în jur de €56 (300 RON) pentru 2TB, €46 (250 RON) pentru 1TB și în jur de €28 (150 RON) pentru mărimi mai scăzute de 1TB. Orice ai face, încearcă să rămâi cu cele trei mărci prezente listate mai sus, dar ține minte că ofertele sunt destul de rare pentru mărimile de mai puțin de 1TB.
+ Cumpărarea unui hard disk nou și o carcasă nouă: Hard disk-urile noi sunt mai ieftine decât hard disk-urile preconstruite în fabrică și poți cumpăra o carcasă pentru a acoperi acest hard disk nou. Carcasele de 2.5 inch normal pot fi alimentate numai din USB, în timp ce carcasele de 3.5 inch aproape mereu vin cu un adaptor extern pentru alimentare. Un exemplu de preț ar fi cumpărarea unui hard disk Western Digital de 500GB și o carcasă de 2.5 inch de pe Amazon - în total, în jur de €28 (150 RON).
+ Cumpărarea unei carcase pentru un hard disk deja existent: Dacă ai un hard drive la îndemână, ai putea pune într-o carcasă și o poți folosi pentru Wii-ul tău. Carcasele pot fi găsite pentru prețuri cuprinse între €9-19 (45-100 RON) de pe Amazon, cât timp ai o unitate cu care s-o folosești.

### Cumpărarea Dispozitivelor USB - Unitățile SSD

Pentru scopurile utilizării unui dispozitiv de stocare cu un Wii, SSD-urile externe sunt de obicei mai scumpe decât hard disk-urile convenționale fără niciun câștig în viteză observabil pentru un Wii (consola suportă maxim viteze de transfer USB 2.0). Dacă vrei să cumperi unul sau deja ai unul la îndemână, este o opțiune, dar în general este recomandat pur și simplu să iei un hard disk dacă nu ai deja unul.
{: .notice--warning}