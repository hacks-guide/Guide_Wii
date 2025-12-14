# Wii- és GameCube-játékok másolása

Ezen az oldalon megismerkedhetsz a GameCube-/Wii-játéklemezek lemásolásának módjával, hogy az adatokat egy SD kártyán vagy USB drive-on tárolhasd.

## Lemez másolása SD kártyára / USB drive-ra CleanRippel

### Követelmények

- Egy SD kártya vagy USB drive legalább 4,7 GB szabad hellyel (ha kétrétegű lemezt másolsz le, akkor 8,5 GB szabad hellyel).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Előkészítés

1. Kapcsold ki a konzolod.

2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!

3. Másold át az `apps` mappát a CleanRip `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.

4. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

5. Kapcsold be a konzolod.

6. Indítsd el a Homebrew Channelt.

7. Indítsd el a homebrew listáról a CleanRip-et.

8. Amikor a program megkérdezi, hogy „Enable checksum calculations?”, válaszolj igennel (`Yes`).

   ![](/images/homebrew/CleanRip/checksum.png)

9. Válaszd ki, hogy USB-eszközre vagy SD kártyára szeretnéd másolni a játékot.

   ![](/images/homebrew/CleanRip/device.png)

10. Válaszd ki az eszköz fájlrendszer-típusát – a legtöbb esetben ez FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Ellenőrizd, hogy az eszköz jól csatlakozik-e a Wiihez, majd a folytatáshoz nyomd meg az A gombot.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. Amikor a program megkérdezi, válaszolj igennel ( `Yes`) a redump.org DAT-fájlok letöltésére.

    - A másolat készítése után ezeknek a fájloknak a segítségével lehet igazolni, hogy a másolatok tiszták/pontosak-e.

    ::: warning

    Lehetséges, hogy a program hibát ír ki, a letöltés megkísérlésénél. Ha ez így történik, akkor indítsd újra a konzolod és próbáld újra! Ha továbbra is hibát kapsz, akkor a fájlok dumpold a lemezt, majd később a Dolphin emulátorral ellenőrizd a másolatot.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Helyezd be a dumpolni kívánt lemezt, majd a folytatáshoz nyomd meg az A gombot.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Egy Wii-lemez lemásolása

::: warning

Ha a program hibát ír ki, ellenőrizd, hogy a másolni kívánt lemez tiszta-e és, hogy a konzol be tudja-e olvasni. Lehetséges, hogy ezt a hibát a program akkor is kiírja, ha egyébként tudsz játszani a játékkal. Ha a probléma fennáll, próbálj lemásolni egy másik lemezt és ellenőrizni, hogy ott is előjön a hiba.

:::

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e. Ha nem vagy benne biztos, válaszolj nemmel (`No`).

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Állítsd be a beállításokat az alábbi képernyő szerint.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. A másolási folyamat indításához nyomd meg az A-gombot!

   - Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a lemez teljes, 4,7 GB-nyi tartalmát (kétrétegű lemezeken 8,5 GB).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

A kimeneti PART fájlok összekapcsolásához és a lemásolt Wii-játékok kezeléséhez lásd. a [Wii-mentések kezelése](wii-backups) oldalt.

:::

## Egy GameCube-lemez lemásolása

::: info

Egy Wii mini és a Wii U vWiije nem képes GameCube-játékokról másolatot készíteni. Egy Family Edition-ös Wii csak akkor képes GameCube-játékokról másolatot készíteni, ha a lemezolvasóját kicseréled egy eredeti Wiiből származóra.

:::

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e. Ha nem vagy benne biztos, válaszolj nemmel (`No`).

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. A másolási folyamat indításához nyomd meg az A-gombot!

   - Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a Mini DVD teljes, 1,3 GB-nyi tartalmát.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

A kimeneti fájl méretének csökkentéséhez és a lemásolt GameCube-játékok kezeléséhez lásd a [GameCube-másolatok kezelése](gc-backups) oldalt.

:::
