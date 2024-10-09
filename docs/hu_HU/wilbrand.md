# Wilbrand

A Wilbrand egy exploit a Wii-hoz ami a Wii Message Board-on keresztül kerül kiváltásra. Kompatibilis a Wii menu 3.0-4.3 verziókkal minden régióban.

::: info

Két féle metódusa kerül ismertetésre ezen az oldalon egy helyes Wilbrand exploit létrehozásának.

A Wilbrand Web ajánlott, a könnyebb használhatósága miatt.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requirements

- Egy FAT32/MS-DOS-ra formázott SD kártya
- Egy Wii 3.0 vagy újabb verzióval

::: warning

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Add meg a Wii-od MAC-jét, verzióját és régióját.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Vágd el mindkét drótot.

   ![](/images/exploits/wilbrand/web.png)

10. Kattints a "Download your .zip"-re.

11. Csatlakoztasd az SD kártyád a számítógépedhez.

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

14. A Wii-odon térj vissza a Wii Menu-be.

15. Nyisd meg a Wii Message Board-ot.

16. Nyisd meg a zöld levelet a bombával.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.

17. If the exploit was successful, your device will have loaded the HackMii Installer.
    - Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    - Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requirements

- Egy Windows, macOS vagy Linux számítógép
- Egy FAT32/MS-DOS-ra formázott SD kártya
- Egy Wii 3.0 vagy újabb verzióval
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. Csatlakoztasd az SD kártyád a számítógépedhez.

8. Nyiss meg eg terminal-t a mappába ahova a Wilbrand kicsomagolásra került.

9. A Wii-od verziójával és MAC címével futtasd az alábbi parancsot:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` is the drive letter of your SD card.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` is the folder your SD card is mounted in. Ez változhat a Linux distro-tól függően.

     ![](/images/exploits/wilbrand/linux.png)

10. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.

11. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.

12. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

13. A Wii-odon térj vissza a Wii Menu-be.

14. Nyisd meg a Wii Message Board-ot.

15. Nyisd meg a zöld levelet a bombával.

    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    - Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
