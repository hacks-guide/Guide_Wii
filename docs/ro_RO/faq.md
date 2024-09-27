# Întrebări Frecvente și Rezolvarea unor probleme

## Întrebări Principale

### Cât de riscant este să-mi modific consola?

Nu prea riscant, în funcție de consola ta. Consola Wii are o barieră de intrare mult mai joasă decât alte console, unele exploit-uri necesitând nu mai mult decât un Wii și o conexiune la Internet. As long as you follow the general advice laid out [here](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### Am primit codul de eroare XXXXXX, cum îl rezolv?

In order to check what the error means, please visit the [Wiimmfi error page](https://wiimmfi.de/error). Multe erori comune au rezolvări listate mai jos:

#### Eroarea 051330/51330

Run an Internet connection test by going to `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Eroarea 220602

##### Pentru Utilizatorii RiiConnect24

Folosești serverul DNS vechi pentru RiiConnect24. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### Pentru cei care nu folosesc RiiConnect24

Serverul tău DNS primar este incorect sau nu funcționează.<br> Acest lucru se poate întâmpla și dacă folosești un server proxy care este închis.

#### Eroarea 107304

##### Pentru Utilizatorii RiiConnect24

Dacă primești această eroare sau dacă vezi Acordului Utilizatorului Nintendo fără logoul RiiConnect24, asta înseamnă că ISP-ul tău (Furnizorul de Internet) sau rețeaua blochează folosirea DNS-ului RC24. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 va funcționa și fără aceasta. Or, you can use the [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program.

##### Pentru cei care nu folosesc RiiConnect24

Dacă primești această eroare, serverul DNS pe care l-ai ales sau internetul tău în general are probleme. Reîncearcă mai încolo.

#### FORE000006

Dacă primești eroarea FORE000006, ceasul consolei tale Wii este probabil setat incorect. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. Dacă acest lucru tot eșuează, scoate bateria ceas a consolei (aflată pe fundul consolei sub un șurub) pentru o oră și apoi reintroduce-l. Apoi, resetează ceasul consolei Wii.

### Cum pot elimina controlul parental?

The [mkey generator](https://mkey.eiphax.tech/) can generate the code required to remove parental controls.

### Cred că sistemul meu Wii are un brick sau ceva este foarte în neregulă, ce ar trebui să fac?

See [this](bricks) page.

## Întrebări Frecvente despre Dispozitivele de Stocare

::: info

For the [BlueBomb](bluebomb), [str2hax](str2hax), or [FlashHax](flashhax) exploits, you do not need an SD card to hack your Wii; it is highly recommended to grab one anyway for homebrew and other tasks.

:::

::: info

FAT32 is the recommended file system for SD cards, see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) on formatting instructions.<br>
For USB devices, FAT32 is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size. WBFS a fost un sistem de fișiere folosit anterior pentru backup-uri de jocuri Wii (nu de a fi confundate cu fișierele WBFS) - astăzi, este învechit și nu ar trebui să fie folosit.

:::

::: warning

Pentru versiunile nemodificate ale Meniului Wii cu versiunea mai veche de 4.0, o limitare în software-ul sistemului Wii previne folosirea cardurilor SD mai mari de 2GB.<br> Pentru versiunile nemodificate ale Meniului Wii cu versiunea 4.0 sau mai nouă, această limitare a fost eliminată iar carduri SD de mărimi variate pot fi folosite.<br> Șansele cele mai mari să obții un card SD care merge cu orice Wii sunt la mărimile de 32GB sau mai mici, însă a fost raportat succesul de mai multe ori și folosind carduri care ajung până la 256GB.

:::

::: warning

Pentru dispozitivele USB, stick-urile USB au o șansă mare să nu meargă corespunzător cu sistemele Wii. În schimb, este recomandat să folosești un hard disk USB sau o unitate SSD.

:::

### Reguli Generale de Stocare

Când vrei să cumperi sau să folosești un card SD sau o unitate USB, merită să iei în considerare lucrurile pe care vei folosi oricare dintre mediile de stocare. Diferite utilizări pot ocupa variate cantități de spațiu, unele exemple comune fiind afișate mai jos:

- Backup-urile Wii: Cele mai mari jocuri Wii (DVD-urile dublu strat) pot ajunge la mărimea de 8.5GB, jocurile mai normale sunt mai apropiate de mărimea de 4.7GB sau mai puțin. Utilizatorul obișnuit de un dispozitiv de backup-uri Wii probabil că ar dori 128GB sau mai mult de spațiu.
- Backup-uri GameCube: Cele mai mari jocuri GameCube ajung la mărimea de până la 1.3GB. Mărimile ISO sunt normal această mărime indiferent de joc, dar acestea pot fi scăzute considerabil dacă formatul NKIT este folosit în schimb. Utilizatorul obișnuit de un dispozitiv de backup-uri GameCube probabil că ar dori 64GB sau mai mult de spațiu.
- Emulare Generală: Există o mare varietate de emulatoare disponibile pentru Wii. Deoarece mărimea diferitelor ROM-uri de jocuri diferă drastic, utilizatorul obișnuit care vrea să emuleze jocuri probabil că ar dori 32GB sau mai mult de spațiu.
- Homebrew General: Pentru aplicații homebrew, utilizatorul obișnuit ar dori 2GB sau mai mult de spațiu.
- Backup-uri ale memoriei NAND: Pentru a crea un backup a memoriei tale NAND folosind BootMii, utilizatorul obișnuit ar avea nevoie de minim 512MB de spațiu liber, însă mărimi de 1GB sau mai mult sunt recomandate.
- Minimul necesar, doar exploit-ul: Cantitatea minimă de spațiu necesară pentru a rula un exploit compatibil cu cardul SD este 128MB.

### Cumpărarea Cardurilor SD

::: danger

Cardurile SD de 2TB sau mai mult momentan nu există, oricine care încearcă să-ți vândă unul vrea să te păcălească.

:::

Când cumperi carduri SD, este în general recomandat să rămâi la mărci de încredere cu cât crește prețul și mărimea cardului pe care vrei să-l cumperi. În timp ce poți cumpăra un card SD de 2GB generic și cel mai probabil vei fi în regulă, același lucru nu poate fi spus și pentru lucruri precum un card SD de 512GB. Prețul general curent pentru cardurile SD este în jur de €9-20 (45-100 RON) pentru 256GB și sub, în timp ce 512GB costă în jur de €38 (200 RON). When buying off of Amazon, make sure that your card is either `Sold by/Shipped by Amazon` or `Sold by [brand], Shipped by Amazon`. Asigură-te când cumperi unități de stocare de pe eBay.

Mărci recomandate:

- Samsung (EVO Select, EVO Plus, PRO Plus)
- SanDisk (Extreme, Ultra, etc)
- Lexar (E-Series, Professional)
- Silicon Power (carduri "3D NAND", capacitate mărită de obicei cu raportul calitate-preț mai bun)
- PNY (Elite, Elite-X, etc)

### Cumpărarea Unităților USB - Hard Disk-urilor

Când cumperi hard disk-uri USB, există în prezent numai trei producători de HDD: Western Digital, Seagate și Toshiba. Oricare și toate celelalte companii de hard disk-uri sunt desființate și ori au dat faliment, ori au fost absorbite de cele trei companii menționate anterior. Acestea fiind spuse, dacă ai la îndemână un hard disk în plus făcut de altă companie, ar trebui încă să funcționeze! Tehnologia hard disk-urilor a rămas în întregime neschimbată în ultimii circa 10 ani. Doar ține minte să verifici datele S.M.A.R.T pentru a te asigura că unitatea nu are probleme înainte să îți pui toate datele pe el.

Pentru mărimea hard disk-ului, 2.5 inch ar trebui să funcționeze în regulă mergând doar pe alimentarea din USB pentru un Wii, 3.5 inch consumă mult mai multă putere și în majoritatea cazurilor va avea nevoie de un alimentator extern. Asigură-te să plănuiești acest lucru atunci când stabilești ce vrei să faci cu o unitate externă.

În ceea ce privește opțiunile tale, acest lucru în mare se rezumă la trei scenarii diferite:

- Cumpărarea unui hard disk extern nou de la zero: Unitățiile externe noi costă în jur de €56 (300 RON) pentru 2TB, €46 (250 RON) pentru 1TB și în jur de €28 (150 RON) pentru mărimi mai scăzute de 1TB. Orice ai face, încearcă să rămâi cu cele trei mărci prezente listate mai sus, dar ține minte că ofertele sunt destul de rare pentru mărimile de mai puțin de 1TB.
- Cumpărarea unui hard disk nou și o carcasă nouă: Hard disk-urile noi sunt mai ieftine decât hard disk-urile preconstruite în fabrică și poți cumpăra o carcasă pentru a acoperi acest hard disk nou. Carcasele de 2.5 inch normal pot fi alimentate numai din USB, în timp ce carcasele de 3.5 inch aproape mereu vin cu un adaptor extern pentru alimentare. Un exemplu de preț ar fi cumpărarea unui hard disk Western Digital de 500GB și o carcasă de 2.5 inch de pe Amazon - în total, în jur de €28 (150 RON).
- Cumpărarea unei carcase pentru un hard disk deja existent: Dacă ai un hard drive la îndemână, ai putea pune într-o carcasă și o poți folosi pentru Wii-ul tău. Carcasele pot fi găsite pentru prețuri cuprinse între €9-19 (45-100 RON) de pe Amazon, cât timp ai o unitate cu care s-o folosești.

### Cumpărarea Dispozitivelor USB - Unitățile SSD

::: warning

Pentru scopurile utilizării unui dispozitiv de stocare cu un Wii, SSD-urile externe sunt de obicei mai scumpe decât hard disk-urile convenționale fără niciun câștig în viteză observabil pentru un Wii (consola suportă maxim viteze de transfer USB 2.0). Dacă vrei să cumperi unul sau deja ai unul la îndemână, este o opțiune, dar în general este recomandat pur și simplu să iei un hard disk dacă nu ai deja unul.

:::
