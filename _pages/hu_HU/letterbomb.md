---
title: "LetterBomb"
---

{% include toc title="Tartalomjegyzék" %}

LetterBomb is an exploit for the Wii that is triggered using the Wii Message Board.

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.
{: .notice--info}

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!
{: .notice--warning}

### Követelmények
* Egy 32GB vagy annál kisebb FAT32-re formázott SD kártya
* Egy Wii System Menu 4.3 verzióval
* Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel

### Útmutató

1. Kapcsold be a konzolt!
1. Nyisd meg a konzol beállításait (`Wii Settings`)!
1. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van!
    + Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.
    + Továbbá biztosítsd, hogy System Menu 4.3-on vagy.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigálj az `Internet` > `Console Information` opcióhoz.
1. Jegyezd fel a FULL MAC address-ed.

    ![](/images/wii/MacAddress.png)

1. A számítógépeden nyiss meg egy böngészőt és menj a [the HackMii weboldalára](https://please.hackmii.com/).
1. Add meg a Wii-od MAC-jét és régióját.
1. Ügyelj rá, hogy a `Bundle the HackMii Installer for me!` opció bepipálva legyen.
1. Vágd el mindkét drótot.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Csatlakoztasd az SD kártyád a számítógépedhez.
1. Másold a `private` mappát és a `boot.elf` fájlt a LetterBomb `.zip` fájlból az SD kártyád gyökerébe.
1. Helyezd vissza az SD kártyád a konzolodba.
    + Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.
1. A Wii-odon térj vissza a Wii Menu-be.
1. Indítsd el a Wii Message Board-ot.
1. Nyisd meg a piros levelet a bombával.
    + Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    + Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    + Ha nem látod a piros levelet, nézd meg, hogy jelenik e meg valamilyen hiba az SD kártya szekciónak a `Data Management`-ben. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.
    + Ha a Wii-od lefagy a levélre kattintás után, valószíműleg rossz system menu regiót válsztottál a LetterBomb-hoz. Menj vissza a 2. lépshez, és ellenőriz, hogy a jó régiót választottad-e.
    + Ha minden megfelelő és van fagyás, próbáld addig, amíg nem sikerül.
1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}
