---
title: "Wii- és GameCube-játékok másolása"
---

{% include toc title="Tartalomjegyzék" %}

Ezen az oldalon megismerkedhetsz a GameCube-/Wii-játéklemezek lemásolásának módjával, hogy az adatokat egy SD kártyán vagy pendrive-on tárolhasd.

### Lemez másolása SD kártyára / pendrive-ra CleanRippel

#### Követelmények

+ Egy SD kártya vagy pendrive legalább 4,7 GB szabad hellyel (ha kétrétegű lemezt másolsz le, akkor 8,5 GB szabad hellyel)
+ [A CleanRip](https://oscwii.org/library/app/cleanrip)

#### Előkészítés

1. Kapcsold ki a konzolt!
1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
1. Helyezd át az `apps`-mappát a CleanRip `.zip`-fájlból az SD kártya vagy pendrive gyökerére!
1. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!
1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a CleanRipet!
1. Amikor a program megkérdezi, hogy „Enable checksum calculations?” („Szeretnéd engedélyezni az ellenőrzőösszeg-kiszámítást?”), válaszolj igennel („`Yes`”)!

    ![](/images/homebrew/CleanRip/checksum.png)

1. Válaszd ki, hogy USB-eszközre vagy SD kártyára szeretnéd másolni a játékot!

    ![](/images/homebrew/CleanRip/device.png)

1. Válaszd ki az eszköz fájlrendszer-típusát – a legtöbb esetben ez FAT (FAT32)!

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Ellenőrizd, hogy az eszköz jól csatlakozik-e a Wiihez, majd a folytatáshoz nyomd meg az A-gombot!

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. Amikor a program megkérdezi, válaszolj igennel („`Yes`”) a redump.org DAT-fájlok leötltésére!
    + A másolat készítése után ezeknek a fájloknak a segítségével lehet igazolni, hogy a másolatok tiszták/pontosak-e.

    Lehetséges, hogy a program hibát ír ki, a letöltés megkísérlésénél. Ha ez így történik, akkor indítsd újra a konzolod és próbáld újra! Ha többször is hibát kapsz, akkor a fájlok letöltése nélkül másold le a lemezt, majd később a Dolphin emulátorral ellenőrizd a másolat tisztaságát!
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Helyezd be a másolni kívánt lemezt, majd a folytatáshoz nyomd meg az A-gombot!

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Egy Wii-lemez lemásolása

A CleanRip a 2.1.2-es verziójától kezdve képes automatikusan felismerni, hogy kétrétegű lemezt próbálsz-e lemásolni. Ha egy korábbi verziót használsz és szeretnéd ellenőrizni, hogy a helyes beállításokat adod-e meg, akkor [a kétrétegű lemezes játékok listája](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) a hasznodra válhat.
{: .notice--info}

Ha a program hibát ír ki, ellenőrizd, hogy a másolni kívánt lemez tiszta-e és, hogy a konzol be tudja-e olvasni! Lehetséges, hogy ezt a hibát a program akkor is kiírja, ha egyébként tudsz játszani a játékkal. Ha a probléma fennáll, próbálj lemásolni egy másik lemezt és ellenőrizni, hogy ott is előjön a hiba!
{: .notice--warning}

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e! Ha nem vagy benne biztos, válaszolj nemmel („`No`”)!

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Állítsd be a lehetőségeket az alábbi képernyőmentés szerint és még egyszer ellenőrizd, hogy a lemezed kétrétegű vagy sem!

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. A másolási folyamat indításához nyomd meg az A-gombot!
    + Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a lemez teljes, 4,7 GB-nyi tartalmát (kétrétegű lemezeken 8,5 GB).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

A kimeneti PART-fájlok összekapcsolásához és a lemásolt Wii-játékok kezeléséhez ld. a [Wii-másolatok kezelése](wii-backups)-oldalt!
{: .notice--info}

### Egy GameCube-lemez lemásolása

Egy Wii mini és a Wii U vWiije nem képes GameCube-játékokról másolatot készíteni. Egy Family Editionös Wii csak akkor képes GameCube-játékokról másolatot készíteni, ha a lemezolvasóját kicseréled egy eredeti Wiiből származóra.
{: .notice--info}

1. Amikor a program megkérdezi, válaszold meg, hogy a lemezed egy engedély nélküli Datel lemez-e! Ha nem vagy benne biztos, válaszolj nemmel („`No`”)!

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. A másolási folyamat indításához nyomd meg az A-gombot!
    + Ez a folyamat eltarthat egy darabig, mivel a program lemásolja a Mini DVD teljes, 1,3 GB-nyi tartalmát.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. Ha korábban engedélyezted a Redump DAT-fájlok letöltését, akkor a másolás befejeztével a program megmutatja a másolat MD5-ellenőrzőösszegét, amit összehasonlíthatsz a Redumpéval.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

A kimeneti fájl méretének csökkentéséhez és a lemásolt GameCube-játékok kezeléséhez ld. a [GameCube-másolatok kezelése](gc-backups)-oldalt!
{: .notice--info}
