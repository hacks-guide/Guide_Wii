# Wii- és GameCube-játékok másolása

Ezen az oldalon megismerkedhetsz a GameCube-/Wii-játéklemezek lemásolásának módjával, hogy az adatokat egy SD kártyán vagy pendrive-on tárolhasd.

## Lemez másolása SD kártyára / pendrive-ra CleanRippel

### Követelmények

- Egy SD kártya vagy pendrive legalább 4,7 GB szabad hellyel (ha kétrétegű lemezt másolsz le, akkor 8,5 GB szabad hellyel)
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Előkészítés

1. Kapcsold ki a konzolt!

2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!

3. Copy the `apps` folder from the CleanRip `.zip` to the root of your SD card or USB drive.

4. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

5. Kapcsold be a konzolt!

6. Indítsd el a Homebrew Channelt!

7. Indítsd el a listáról a CleanRipet!

8. When prompted, select `Yes` to calculate disc checksums.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Válaszd ki, hogy USB-eszközre vagy SD kártyára szeretnéd másolni a játékot!

   ![](/images/homebrew/CleanRip/device.png)

10. Válaszd ki az eszköz fájlrendszer-típusát – a legtöbb esetben ez FAT (FAT32)!

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Ellenőrizd, hogy az eszköz jól csatlakozik-e a Wiihez, majd a folytatáshoz nyomd meg az A-gombot!

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. When prompted, select `Yes` to download the redump.org DAT files.

    - A másolat készítése után ezeknek a fájloknak a segítségével lehet igazolni, hogy a másolatok tiszták/pontosak-e.

    ::: warning

    Lehetséges, hogy a program hibát ír ki, a letöltés megkísérlésénél. Ha ez így történik, akkor indítsd újra a konzolod és próbáld újra! Ha többször is hibát kapsz, akkor a fájlok letöltése nélkül másold le a lemezt, majd később a Dolphin emulátorral ellenőrizd a másolat tisztaságát!

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Helyezd be a másolni kívánt lemezt, majd a folytatáshoz nyomd meg az A-gombot!

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Egy Wii-lemez lemásolása

::: info

A CleanRip a 2.1.2-es verziójától kezdve képes automatikusan felismerni, hogy kétrétegű lemezt próbálsz-e lemásolni. If you are on an earlier version, or just want to verify that the correct option is being selected, you can check [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your game is a dual layer disc.

:::

::: warning

Ha a program hibát ír ki, ellenőrizd, hogy a másolni kívánt lemez tiszta-e és, hogy a konzol be tudja-e olvasni! Lehetséges, hogy ezt a hibát a program akkor is kiírja, ha egyébként tudsz játszani a játékkal. Ha a probléma fennáll, próbálj lemásolni egy másik lemezt és ellenőrizni, hogy ott is előjön a hiba!

:::

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e! If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Állítsd be a lehetőségeket az alábbi képernyőmentés szerint és még egyszer ellenőrizd, hogy a lemezed kétrétegű vagy sem!

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. A másolási folyamat indításához nyomd meg az A-gombot!

   - Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a lemez teljes, 4,7 GB-nyi tartalmát (kétrétegű lemezeken 8,5 GB).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.

:::

## Egy GameCube-lemez lemásolása

::: info

Egy Wii mini és a Wii U vWiije nem képes GameCube-játékokról másolatot készíteni. Egy Family Editionös Wii csak akkor képes GameCube-játékokról másolatot készíteni, ha a lemezolvasóját kicseréled egy eredeti Wiiből származóra.

:::

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e! If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. A másolási folyamat indításához nyomd meg az A-gombot!

   - Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a Mini DVD teljes, 1,3 GB-nyi tartalmát.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.

:::
