# Wilbrand

A Wilbrand egy exploit a Wii-hoz ami a Wii Message Board-on keresztül kerül kiváltásra. Kompatibilis a Wii menu 3.0-4.3 verziókkal minden régióban.

::: info

Két féle metódusa kerül ismertetésre ezen az oldalon egy helyes Wilbrand exploit létrehozásának.

A Wilbrand Web ajánlott, a könnyebb használhatósága miatt.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Követelmények

- Egy SD kártya [FAT32/MS-DOS-ra formatálva](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Egy Wii 3.0 vagy újabb verzióval

::: warning

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.

:::

### Lépések

1. Kapcsold be a konzolod.

2. Menj a `Wii Settings`-hez.

3. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.

   - Ez a betű jelzi a rendszermenü régióját, amire későbbi lépésekben szükséged lesz.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigálj az `Internet` > `Console Information` opcióhoz.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. A számítógépeden nyiss meg egy böngészőt és menj a [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org) oldalra.

7. Add meg a Wii-od MAC-jét, verzióját és régióját.

8. Ügyelj rá, hogy a `Bundle the HackMii Installer for me!` opció bepipálva legyen.

9. Vágd el mindkét drótot.

   ![](/images/exploits/wilbrand/web.png)

10. Kattints a `Download your .zip`-re.

11. Csatlakoztasd az SD kártyád a számítógépedhez.

12. Másold a `private` mappát és a boot.elf`fájlt a letöltött`.zip\\` fájlból az SD kártyád gyökerébe.

13. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

14. A Wii-odon térj vissza a Wii Menu-be.

15. Nyisd meg a Wii Message Board-ot.

16. Nyisd meg a zöld levelet a bombával.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - Ha nem látod a zöld levelet, nézd meg, hogy jelenik-e meg valamilyen hiba az SD kártya szekcióban a `Data Management`-ben. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.

17. Ha az exploit sikeres volt, az eszközöd betöltötte a HackMii Installer-t.
    - Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    - Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Követelmények

- Egy Windows, macOS vagy Linux számítógép
- Egy SD kártya [FAT32/MS-DOS-ra formatálva](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Egy Wii 3.0 vagy újabb verzióval
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.

:::

### Lépések

1. Kapcsold be a konzolod.

2. Menj a `Wii Settings`-hez.

3. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.

   - Ez a betű jelzi a rendszermenü régióját, amire későbbi lépésekben szükséged lesz.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigálj az `Internet` > `Console Information` opcióhoz.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. Másold ki a Wilbrand `.zip` fájl tartalmát egy mappába a számítógépeden

7. Csatlakoztasd az SD kártyád a számítógépedhez.

8. Nyiss meg eg terminal-t a mappába ahova a Wilbrand kicsomagolásra került.

9. A Wii-od verziójával és MAC címével futtasd az alábbi parancsot:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` az SD kártyád meghajtó betüjele.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - Ha nem abban a mappában indítottad a terminált amibe a Wilbrand kicsomagolásra került használd a `cd` parancsot, hogy előbb belépj oda, pl. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` az a mappa ahova az SD kártyád csatolásra került. Ez változhat a Linux distro-tól függően.

     ![](/images/exploits/wilbrand/linux.png)

10. Másold ki a hackmii_installer_v1.2 `.zip` fájl tartalmát egy mappába a számítógépeden.

11. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből az SD kártyád gyökerébe.

12. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

13. A Wii-odon térj vissza a Wii Menu-be.

14. Nyisd meg a Wii Message Board-ot.

15. Nyisd meg a zöld levelet a bombával.

    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - Ha nem látod a zöld levelet, nézd meg, hogy jelenik-e meg valamilyen hiba az SD kártya szekcióban a `Data Management`-ben. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.

    ![](/images/exploits/wilbrand/msgboard.png)

16. Ha az exploit sikeres volt, az eszközöd betöltötte a HackMii Installer-t.
    - Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    - Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::

::::

:::::
