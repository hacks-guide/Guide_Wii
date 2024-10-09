# Extragerea jocurilor Wii/Gamecube

Acest ghid acoperă extragerea discurilor de joc Wii sau Gamecube către un card SD sau o unitate USB locală pe consola ta Wii.

## Extragerea unui Disc în SD/USB (CleanRip)

### Requirements

- Un card SD sau unitate USB cu cel puțin 4.7GB de spațiu liber (8.5GB dacă extragi un disc dublu strat).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparație

1. Power off your console.

2. Extract both apps to the root of your SD card or USB drive.

3. Copy the `apps` folder from the CleanRip `.zip` to the root of your SD card or USB drive.

4. Reintrodu cardul tău SD sau unitatea ta USB în consolă.

5. Power on your console.

6. Launch the Priiloader installer.

7. Rulează CleanRip din lista de aplicații homebrew.

8. When prompted, select `Yes` to calculate disc checksums.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Alege dispozitivul unde îți vei extrage jocul - un dispozitiv USB sau un card SD.

   ![](/images/homebrew/CleanRip/device.png)

10. Alege tipul sistemului de fișiere a dispozitivului - în majoritatea cazurilor va fi FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Asigură-te că dispozitivul tău este conectat în consolă și apasă A pentru a continua.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. When prompted, select `Yes` to download the redump.org DAT files.

    - Acest lucru este necesar pentru a te asigura că extragerile rezultate sunt curate/corecte.

    ::: warning

    Este posibil să primești o eroare dacă faci acest lucru. Dacă acesta este cazul, repornește-ți consola și încearcă din nou - dar în cazul în care primești erori în continuare, extrage discul și verifică checksum-ul folosind Dolphin în schimb dacă este necesar.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Introdu discul de joc pe care vrei să-l extragi și apasă A pentru a continua.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Extragerea unui Disc Wii

::: info

Începând cu CleanRip v2.1.2 există o opțiune de a detecta automat dacă discul tău este dublu strat. If you are on an earlier version, or just want to verify that the correct option is being selected, you can check [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your game is a dual layer disc.

:::

::: warning

Dacă primești o eroare de citire nerecuperată, asigură-te că discul pe care încerci să-l extragi este curat și poate fi citit cum trebuie de către consolă. Poți să primești această eroare chiar dacă poți juca discul de joc normal. Dacă eroarea persistă, încearcă să extragi alt disc și vezi dacă apare aceeași eroare.

:::

1. Când ești întrebat, alege dacă discul tău este un disc Datel nelicențiat. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Modifică setările așa cum sunt pe ecranul de mai jos și verifică dacă discul tău de joc este dublu strat sau nu.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. Apasă A pentru a începe să extragi discul.

   - Acest proces poate dura destul de mult timp pentru că extrage toți cei 4.7GB ai DVD-ului (8.5GB pentru discuri dublu strat).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Odată ce extragerea este finalizată, ar trebui să vezi un ecran cu checksum-ul MD5 al discului tău, comparat cu fișierul DAT Redump dacă l-ai activat.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.

:::

## Extragerea unui Disc GameCube

::: info

Ediția de Familie Wii, Wii mini-uri și vWii-ul de la Wii U nu au capabilitatea de extragere a jocurilor GameCube. Wii-ul Ediția de Familie pot extrage jocuri GameCube dacă disk drive-ul este schimbat cu cea făcută pentru modelul original Wii.

:::

1. Când ești întrebat, alege dacă discul tău este un disc Datel nelicențiat. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Apasă A pentru a începe să extragi discul.

   - Acest proces poate dura ceva timp pentru că extrage toți cei 1.3GB ai Mini DVD-ului.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Odată ce extragerea este finalizată, ar trebui să vezi un ecran cu checksum-ul MD5 al discului tău, comparat cu fișierul DAT Redump dacă l-ai activat.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.

:::
