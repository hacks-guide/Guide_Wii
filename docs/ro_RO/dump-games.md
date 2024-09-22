---
title: "Extragerea jocurilor Wii/Gamecube"
---

{% include toc title="Tabel de Conținut" %}

Acest ghid acoperă extragerea discurilor de joc Wii sau Gamecube către un card SD sau o unitate USB locală pe consola ta Wii.

### Extragerea unui Disc în SD/USB (CleanRip)

#### Instrumente necesare

+ Un card SD sau unitate USB cu cel puțin 4.7GB de spațiu liber (8.5GB dacă extragi un disc dublu strat).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Preparație

1. Oprește-ți consola.
1. Introdu cardul tău SD sau unitatea ta USB în calculator.
1. Copiază fișierul `apps` din fișierul `.zip` CleanRip către rădăcina cardului tău SD sau unității tale USB.
1. Reintrodu cardul tău SD sau unitatea ta USB în consolă.
1. Pornește-ți consola.
1. Rulează Homebrew Channel.
1. Rulează CleanRip din lista de aplicații homebrew.
1. Când ești întrebat, alege `Yes` pentru a calcula checksum-ul discului.

    ![](/images/homebrew/CleanRip/checksum.png)

1. Alege dispozitivul unde îți vei extrage jocul - un dispozitiv USB sau un card SD.

    ![](/images/homebrew/CleanRip/device.png)

1. Alege tipul sistemului de fișiere a dispozitivului - în majoritatea cazurilor va fi FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Asigură-te că dispozitivul tău este conectat în consolă și apasă A pentru a continua.

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. Când ești întrebat, alege `Yes` pentru a descărca fișierele DAT redump.org.
    + Acest lucru este necesar pentru a te asigura că extragerile rezultate sunt curate/corecte.

    Este posibil să primești o eroare dacă faci acest lucru. Dacă acesta este cazul, repornește-ți consola și încearcă din nou - dar în cazul în care primești erori în continuare, extrage discul și verifică checksum-ul folosind Dolphin în schimb dacă este necesar.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Introdu discul de joc pe care vrei să-l extragi și apasă A pentru a continua.

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Extragerea unui Disc Wii

Începând cu CleanRip v2.1.2 există o opțiune de a detecta automat dacă discul tău este dublu strat. Dacă ești pe o versiune mai veche sau dacă doar vrei să verifici că opțiunea corectă este selectată, poți verifica [această listă](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) pentru a verifica dacă jocul tău este dublu strat.
{: .notice--info}

Dacă primești o eroare de citire nerecuperată, asigură-te că discul pe care încerci să-l extragi este curat și poate fi citit cum trebuie de către consolă. Poți să primești această eroare chiar dacă poți juca discul de joc normal. Dacă eroarea persistă, încearcă să extragi alt disc și vezi dacă apare aceeași eroare.
{: .notice--warning}

1. Când ești întrebat, alege dacă discul tău este un disc Datel nelicențiat. Dacă nu ești sigur, alege `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Modifică setările așa cum sunt pe ecranul de mai jos și verifică dacă discul tău de joc este dublu strat sau nu.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Apasă A pentru a începe să extragi discul.
    + Acest proces poate dura destul de mult timp pentru că extrage toți cei 4.7GB ai DVD-ului (8.5GB pentru discuri dublu strat).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. Odată ce extragerea este finalizată, ar trebui să vezi un ecran cu checksum-ul MD5 al discului tău, comparat cu fișierul DAT Redump dacă l-ai activat.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

Continuă la [Gestionarea Backup-urilor Wii](wii-backups) pentru a combina fișierele PART rezultate și pentru a configura jocurile extrase.
{: .notice--info}

### Extragerea unui Disc GameCube

Ediția de Familie Wii, Wii mini-uri și vWii-ul de la Wii U nu au capabilitatea de extragere a jocurilor GameCube. Wii-ul Ediția de Familie pot extrage jocuri GameCube dacă disk drive-ul este schimbat cu cea făcută pentru modelul original Wii.
{: .notice--info}

1. Când ești întrebat, alege dacă discul tău este un disc Datel nelicențiat. Dacă nu ești sigur, alege `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Apasă A pentru a începe să extragi discul.
    + Acest proces poate dura ceva timp pentru că extrage toți cei 1.3GB ai Mini DVD-ului.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. Odată ce extragerea este finalizată, ar trebui să vezi un ecran cu checksum-ul MD5 al discului tău, comparat cu fișierul DAT Redump dacă l-ai activat.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

Continuă la [Gestionarea Backup-urilor GameCube](gc-backups) pentru a micșora mărimea fișierului rezultat și pentru a configura jocurile extrase.
{: .notice--info}
