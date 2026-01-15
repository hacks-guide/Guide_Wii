# LetterBomb

A LetterBomb egy exploit a Wii-hoz ami a Wii Message Board-on keresztül kerül kiváltásra.

::: info

AZ SD kártya helyes formázásához útmutatásként tekintsd meg [ezt az útmutatót](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Erősen ajánlott, hogy megnézd, a FAT32 formázás problémái miatt.

:::

::: warning

NE használd a példákban megadott MAC cmeket, mert azok simán hibát okoznak a HackMii weboldalon. Használd a sajátod!

:::

## Követelmények

- Egy 32GB vagy annál kisebb FAT32-re formázott SD kártya
- Egy Wii System Menu 4.3 verzióval
- Egy Windowst/MacOS-t/Linuxot futtató számítógép internet-hozzáféréssel

## Lépések

1. Kapcsold be a konzolod.

2. Menj a `Wii Settings`-hez.

3. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van.

   - Ez a betű jelzi a rendszermenü régióját, amire későbbi lépésekben szükséged lesz.
   - Továbbá biztosítsd, hogy System Menu 4.3-on vagy.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigálj az `Internet` > `Console Information` opcióhoz.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. A számítógépeden nyiss egy böngészőt és menj a [HackMii weboldalára](https://please.hackmii.com/).

7. Add meg a Wii-od MAC-jét és régióját.

8. Ügyelj rá, hogy a `Bundle the HackMii Installer for me!` opció bepipálva legyen.

9. Vágd el mindkét drótot.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Csatlakoztasd az SD kártyád a számítógépedhez.

11. Másold a `private` mappát és a `boot.elf` fájlt a LetterBomb `.zip` fájlból az SD kártyád gyökerébe.

12. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

13. A Wii-odon térj vissza a Wii Menu-be.

14. Indítsd el a Wii Message Board-ot.

15. Nyisd meg a piros levelet a bombával.
    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - Ha nem látod a piros levelet, nézd meg, hogy jelenik-e meg valamilyen hiba az `Data Management` SD kártya szekciójában. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.
    - Ha a Wii-od lefagy a levélre kattintás után, valószíműleg rossz system menu regiót válsztottál a LetterBomb-hoz. Menj vissza a 2. lépéshez, és ellenőrizd, hogy jó régiót választottál-e.
    - Ha minden megfelelő és van fagyás, próbáld addig, amíg nem sikerül.

16. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
