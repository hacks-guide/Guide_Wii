---
title: "A játék mentések átvitele"
---

Ez az útmutató lerja, hogyan viszel át játék mentéseket a következők között:

+ egy Wii/Wii U(vWii),
+ Dolphin Emulátor,
+ GameCube memória kártyák,
+ és (Nintendont) emulált memória kártyák.

<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'wii')">Egy Wii/vWii-ról</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'dol')">A Dolphin Emulator-ból</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'gcmc')">Egy GameCube memória kártyáról</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'emumc')">A Nintendont-ról</button>

<div id="wii" class="tabcontent" markdown="1">

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-vwii')">egy másik Wii/vWii-ra</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-dol')">a Dolphin Emulator-ba</button>

<div id="wii-vwii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-data')">a Data Management-tel</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-svgm')">a SaveGame Manager GX-szel</button>

<div id="wii-vwii-data" class="tabcontent via" markdown="1">

##### Amire szükséged van

+ egy FAT32/MS-DOS-ra formázott SD kártya

##### Útmutató

1. Helyezd be az SD kártyát a Wii/Wii U-ba.
1. A Wii Menu-ben válaszd a `Wii Options`-t baloldalt alul.
1. Válaszd a `Data Management` (ha a Wii-n vagy), `Save Data`, majd `Wii` opciót.
1. Válaszd ki az átvinni kívánt mentést, majd válaszd a `Copy` lehetőséget.
    + Ha a `Copy` gomb ki van szürkítve, akkor [telepítened kell a Priiloader-t](priiloader) a másolásvédelem kikapcsolásához.
1. Ismételd meg az előző lépést minden egyes átvinni kívánt mentés esetében.
1. Ha befejezted, tedd be az SD-kártyát a másik Wii/Wii U készülékedbe.
1. A Wii Menu-ben válaszd a `Wii Options`-t baloldalt alul.
1. Válaszd a `Data Management` (ha a Wii-n vagy), `Save Data`, majd `Wii` opciót.
1. Válaszd az `SD Card` fület a jobb felső sarokban.
1. Válassz ki egyet az SD-kártyára másolt mentések közül, majd válaszd ki a `Copy` lehetőséget.
1. Ismételd meg az előző lépést minden egyes SD-kártyára másolt mentésnél.
</div>

<div id="wii-vwii-svgm" class="tabcontent via" markdown="1">
Győződj meg róla, hogy telepítetted a [cIOS](cios)-t, mielőtt ezt a lépéssorozatot követnéd!
{: .notice--warning}

##### Amire szükséged van

* A Homebrew Channel csatornára mindkét rendszeren
* Egy SD kártya vagy pendrive
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Útmutató

1. Csomagold ki a SaveGame Manager GX-et az SD-kártya vagy USB-meghajtó gyökerébe, és helyezd be a forrás Wii/Wii U-ba.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a SaveGame Manager GX-et.
1. Győződj meg róla, hogy a forrás Wii-re van állítva.
1. Keresdmeg és válaszd ki a mentésed, majd válasza ki az `Extract`, majd a `Default` lehetőséget.
    + Ismételd meg ezt a többi mentésnél is, amit másolni szeretnél.
1. Nyomd meg a HOME gombot, és lépj ki a SaveGame Manager GX-ből.
1. Tedd az SD-kártyát a cél Wii/Wii U-ba.
1. Hozz létre egy új mentési fájlt minden egyes játékhoz. Erre azért van szükség, hogy a SaveGame Manager GX felül tudja írni azt.
1. Indítsd el a Homebrew Channel csatornát, és indítsa el a SaveGame Manager GX-et.
1. Győződj meg róla, hogy a forrásként az SD vagy az USB van beállítva.
1. Válaszd ki az egyes másolt mentéseket, és kattints az `Install` gombra.
</div>
</div>

<div id="wii-dol" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-nand')">egy NAND mentéssel (Wii)</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-svgm')">a SaveGame Manager GX-szel</button>

<div id="wii-dol-nand" class="tabcontent via" markdown="1">
A NAND mentés Dolphinba történő importálásával gyakorlatilag mindent átmásolsz a Wii-n (a mentés időpontjában). Ennek az az előnye is megvan, hogy lehetővé teszi a [Wiimmfi](https://wiimmfi.de/) elérését, valamint a RiiConnect24 patchelt csatornák átvitelét.
Ha ezt már kész, akkor fontold meg a SaveGame Manager GX módszerét, hogy időt takarítson meg.
{: .notice--info}

##### Amire szükséged van

* [egy NAND mentés](bootmii)
* A Dolphin Emulator legutolsó béta verziója

##### Útmutató

1. Miután [elkészítetted a NAND biztonsági mentésed](bootmii), helyezd az SD-kártyád a számítógépedbe, és nyissa meg a Dolphin Emulator-t.
1. Válassza az `Tools > Manage NAND... > Import BootMii NAND Backup` lehetőséget.
1. A megnyíló fájl párbeszédpanelen keresd meg az SD-kártyád, és válaszd ki a `nand.bin` fájlt.
</div>

<div id="wii-dol-svgm" class="tabcontent via" markdown="1">
Győződj meg róla, hogy telepítetted a [cIOS](cios)-t, mielőtt ezt a lépéssorozatot követnéd!
{: .notice--warning}

##### Amire szükséged van

* A Homebrew Channel csatornára a Wii/vWii-den
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)
* Egy SD kártya vagy pendrive
* A Dolphin Emulator legutolsó béta verziója

##### Útmutató

1. A Wii/Wii U-on indítsd el a Homebrew Channel csatornát, majd indítsd el a SaveGame Manager GX-et.
1. Keresd meg és válaszd ki az átvinni kívánt mentést, majdválaszd az `Extract`, majd az `Default` lehetőséget.
    + Ismételd meg ezt az összes mentésnél, amit át szeretnél vinni.
1. Ha az összes mentési fájlt kicsomagoltad, nyomd meg a HOME gombot, és lépj ki a SaveGame Manager GX-ből.
1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a PC-dhez.
1. Indítsd el a Dolphin Emulátort.
1. Válaszd a `Tools > Import Wii Save...` opciókat.
1. A megnyíló fájl párbeszédpanelben menj az SD-kártyán vagy USB-drive-on lévő `savegames` mappába, és válassz ki benne minden `.bin` fájlt.
Sajnos egyszerre csak egyet tudsz kiválasztani, így az előző lépést minden egyes .bin fájl esetében meg kell ismételned.
{: .notice--info}
</div>
</div>
</div>

<div id="dol" class="tabcontent" markdown="1">
{% capture dolphin-user-folder %}
A `<User Folder>`a `File -> Open User Folder` menüpont által megnyitott mappára utal. ![](/images/dolphin/dolphin-user-folder.png)
{: .notice--info}
{% endcapture %}
{% capture dolphin-emu-memcard-manager %}
Ha a Dolphin úgy van beállítva, hogy `.raw` memóriakártyát használjon, akkor `Tools > Memory Card Manager`menüpont segítségével exportálja a kívánt mentéseket `.gci` formátumba. ![](/images/homebrew/gcsaves/dolphin-emu-memcard-manager.png)
{: .notice--info}
{% endcapture %}
Minden módszer feltételezi, hogy a [Dolphin Emulator legújabb béta vagy fejlesztői verziójával](https://dolphin-emu.org/download) rendelkezel.
{: .notice--info}

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-wii')">Wii/vWii-ra</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-gcmc')">GameCube memória kártyára</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-emumc')">Nintendont-ra</button>

<div id="dol-wii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-data')">a Data Management-tel</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-svgm')">a SaveGame Manager GX-szel</button>

<div id="dol-wii-data" class="tabcontent via" markdown="1">

##### Amire szükséged van

* egy SD kártya

##### Útmutató

1. Indítsd el a Dolphin Emulátort.
1. Ha egy kiválasztott játék mentését exportálod, kattints a jobb gombbal a játékra a Dolphin ablakban, és válaszd az `Export Wii Save` lehetőséget.
    + Ha az összes Wii mentést exportálod a Dolphinból, válaszd a `Tools > Export All Wii Saves` lehetőséget.
![](/images/dolphin/export-wiisave.png)

1. A felugró mappa párbeszédpanelen válaszd ki az SD-kártyát. (Ne menj bele más mappába!)
1. Biztonságosan válaszd le az SD-kártyát, majd tedd be a Wii/Wii U-ba.
    + Ha Wii U-n vagy, mindenképpen indítsd el a Wii Mode-ot.
1. Válaszd ki a `Wii Options` gombot a bal alsó sarokban.
1. Válaszd a `Data Management` (ha a Wii-n vagy), `Save Data`, majd `Wii` opciót.
1. Menj a jobb felső sarokban lévő `SD Card` fülre.
1. Jelöld ki az egyes mentéseket, amelyeket a Wii/Wii U-ra szeretne másolni, és válaszd a `Copy` lehetőséget.
</div>

<div id="dol-wii-svgm" class="tabcontent via" markdown="1">
Győződj meg róla, hogy telepítetted a [cIOS](cios)-t, mielőtt ezt a lépéssorozatot követnéd!
{: .notice--warning}

##### Amire szükséged van

* A Homebrew Channel csatornára a Wii/vWii-den
* Egy SD kártya vagy pendrive
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Útmutató

1. Indítsd el a Dolphin Emulátort.
1. Ha egy kiválasztott játék mentését exportálod, kattints a jobb gombbal a játékra a Dolphin ablakban, és válaszd az `Export Wii Save` lehetőséget.
    + Ha az összes Wii mentést exportálod a Dolphinból, válaszd a `Tools > Export All Wii Saves` lehetőséget.
1. A felugró mappa párbeszédpanelen válaszd ki az SD-kártyát/USB drive-ot. (ne menj bele más mappába!)
1. Biztonságosan válaszd le az SD-kártyát/USB drive-ot, majd tedd be a Wii/Wii U-ba.
    + Ha Wii U-n vagy, mindenképpen indítsd el a Wii Mode-ot.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a SaveGame Manager GX-et.
1. Győződj meg róla, hogy a forrásként az SD vagy az USB van beállítva.
1. Válaszd ki az egyes másolt mentéseket, és kattints az `Install` gombra.
</div>
</div>

<div id="dol-gcmc" class="tabcontent to" markdown="1">

##### Amire szükséged van

* egy Wii, GameCube portokkal és a Homebrew Channel telepítéssel
* Egy SD kártya vagy pendrive
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Útmutató

1. Indítsd el a Dolphin Emulátort.
1. A főmenüben válaszd a `File > Open User Folder` menüpontot.
![](/images/dolphin/open-user-folder.png)

1. A megnyíló mappában navigálj a `GC > [Save region] > Card A` lehetőséghez.
1. Másold ki azokat a `.gci` fájlokat, amelyeket a memóriakártyára szeretnél helyezni.
1. Hozz létre egy `MCBACKUP` nevű mappát az SD-kártyán vagy USB-meghajtón, és helyezd el a másolt `.gci` fájlokat ebbe a mappába.
{{ dolphin-emu-memcard-manager }}

1. Töltsd le és csomagold ki a GCMM-et az SD-kártya vagy USB-meghajtó gyökerébe.
1. Biztonságosan válaszd le az SD kártyát/USB drive-ot a számítógépről, majd helyezd be a Wii-be.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a GCMM-et.
1. Válaszd ki azt az eszközt, amelyre a `.gci` fájlokat másoltad.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomd meg a `+`/`X` billentyűt a visszaállítási módba való belépéshez.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a memóriakártyát tartalmazó slot-ot.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Válaszd ki a visszaállítani kívánt mentést.
    + Ha az `MCBACKUP` összes mentését vissza szeretnéd állítani, nyomd meg az `1`/`R` gombot.
![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.
</div>

<div id="dol-emumc" class="tabcontent to" markdown="1">

##### Útmutató

1. Nyisd meg a Dolphin Emulátort, és válaszd a főmenüben a `Tools > Memory Card Manager` menüpontot.
1. Kattints az `Open` gombra a Slot B mellett.
1. Menj az SD-kártyán vagy USB-meghajtón található `saves` mappába, és válaszd ki a játék azonosítója után elnevezett `.raw` fájlt.
    + Ha még nincs mentésed a Nintendont-on, válaszd a `Create` lehetőséget, és állítsd a Card size-ot 251 blokkra.
    + Ha egy memóriakártyát használsz az összes játékhoz, nyisd meg a `ninmem.raw`/`ninmemj.raw` fájlt az SD-kártya/USB-drive gyökerén.
1. Ha a Dolphin a mentéseket egy GCI mappában tárolja (alapértelmezett):
    + Kattints a `Switch to B` lehetőségre.
    + Kattints az `Import` gombra, és navigálj a `<REGION>/Card A/` helyre.
    + Válaszd ki az importálni kívánt `.gci` fájl(oka)t. Ellenkező esetben, ha a Dolphin a mentéseket `.raw` fájlban tárolja. egyszerűen válaszd ki a mentéseket a bal oldalon, és válaszd a `Copy to B` lehetőséget.
</div>
</div>

<div id="gcmc" class="tabcontent" markdown="1">
Minden metódusnak szükségve van egy Wii-ra GameCube portokkal.
{: .notice--warning}

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-dol')">Dolphin Emulator-ra</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-emumc')">Nintendont</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-gcmc')">másik memóriakártyára</button>

<div id="gcmc-emumc" class="tabcontent to" markdown="1">

##### Amire szükséged van

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Útmutató

1. Töltsd le és csomagold ki a GCMM-et az SD-kártya vagy USB-meghajtó gyökerébe.
1. Biztonságosan válaszd le az SD kártyát/USB drive-ot a számítógépről, majd helyezd be a Wii-be.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a GCMM-et.
1. Válaszd ki az eszközt, amire mentés fájlt másolnád.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomj `B` és `-`/`L` és `Y` gombokat, hogy belépj a Raw backup módba.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a memóriakártyát tartalmazó slot-ot.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Amikor a dump megtörtént, nyomj tetszőleges gombot a folytatáshoz.
1. Nyomj HOME/START gombot a GCMM-ből való kilépéshez.
1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Másold a `.raw` fájlt az `MCBACKUP`-on belül a Nintendont használt eszköz gyökerébe, és nevezd el `ninmem.raw`-nak.
    + Ha a játékaid japánok, a Nintendont a `ninmemj.raw` fájlt fogja használni, mert a japán játékok nem játszanak túl szépen, ha más régió mentések vannak jelen.
1. Indítsd el a Nintendont-ot, és állítsd a Memcard emulációt multi-ra [ ? ]
</div>

<div id="gcmc-dol" class="tabcontent to" markdown="1">

##### Amire szükséged van

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Útmutató

1. Töltsd le és csomagold ki a GCMM-et az SD-kártya vagy USB-meghajtó gyökerébe.
1. Biztonságosan válaszd le az SD kártyát/USB drive-ot a számítógépről, majd helyezd be a Wii-be.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a GCMM-et.
1. Válaszd ki az eszközt, amire mentés fájlt másolnád.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomj `B` és `-`/`L` és `Y` gombokat, hogy belépj a Raw backup módba.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a memóriakártyát tartalmazó slot-ot.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Amikor a dump megtörtént, nyomj tetszőleges gombot a folytatáshoz.
1. Nyomj HOME/START gombot a GCMM-ből való kilépéshez.
1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Nyisd meg a Dolphin Emulátort, és válaszd a főmenüben a `Tools > Memory Card Manager` menüpontot.
1. Kattints az `Open` gombra a Slot B mellett.
1. Menj az `MCBACKUP` mappába az SD-kártyádon/USB-drive-odon, és nyisd meg a frissen létrejött `.raw` fájlt.
1. Kattints a `Switch to B` lehetőségre.
1. Ha a Dolphin úgyvan beálltva, hogy a mentéseket egy GCI mappában tárolja (alapértelmezett):
    + Válaszd ki a másolni kívánt mentéseket.
    + Kattints az `Export as .gci`-re.
    + Exportáld a `.gci` fájlokat a `<REGION>/Card A/` útvonalra.
1. Ellenkező esetben, ha a Dolphin a mentéseidet `.raw` fájlban tárolja,
    + Válaszd ki a másolni kívánt mentéseket.
    + Kattints a `Copy to A` lehetőségre.
</div>

<div id="gcmc-gcmc" class="tabcontent to" markdown="1">

##### Amire szükséged van

* egy Wii

##### Útmutató

1. Csatlakoztasd mindkettő memória kártyát a Wii-dhez.
1. Indtsd el a Wii Menu-t és válaszd a Wii Options-t baloldalt alul.
![](/images/Wii/wii-options.png)

1. Válaszd a `Data Management > Save Data > Nintendo GameCube` lehetőséget.
1. Válaszd ki az másolni kívánt mentést, majd válaszd a `Copy` lehetőséget.
![](/images/homebrew/gcsaves/gc-data-management.png)
</div>
</div>
<
div id="emumc" class="tabcontent" markdown="1">

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-dol')">Dolphin Emulator-ra</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-gcmc')">memóriakártyára</button>

<div id="emumc-dol" class="tabcontent to" markdown="1">

##### Amire szükséged van

* A Dolphin Emulator legutolsó béta vagy fejlesztői verziója

##### Útmutató

1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a PC-dhez.
1. Nyisd meg a Dolphin Emulátort, és válaszd a főmenüben a `Tools > Memory Card Manager` menüpontot.
1. Kattints az `Open` gombra a Slot B mellett.
1. Navigáljon az SD-kártyán/USB drive-on található `saves` mappába, és nyisd meg a `.raw` fájlt, amelyet a játékod azonosítója után neveztek el.
1. Kattints a `Switch to B` lehetőségre.
1. Ha a Dolphin úgyvan beálltva, hogy a mentéseket egy GCI mappában tárolja (alapértelmezett):
    + Válaszd ki a másolni kívánt mentéseket.
    + Kattints az `Export as .gci`-re.
    + Exportáld a `.gci` fájlokat a `<REGION>/Card A/` útvonalra.
1. Ellenkező esetben, ha a Dolphin a mentéseidet `.raw` fájlban tárolja:
    + Válaszd ki a másolni kívánt mentéseket.
    + Kattints a `Copy to A` lehetőségre.
</div>
<

div id="emumc-gcmc" class="tabcontent to" markdown="1">

##### Amire szükséged van

* A Homebrew Channel telepíítésre került a Wii-odra
* Egy SD kártya vagy pendrive
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Független memóriakártyák (.gci files)

1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a PC-dhez.
1. Hozz létre egy mappát `MCBACKUP` néven.
1. Másold a `.gci` fájlokat a `saves` mappából az `MCBACKUP` mappába.
1. Töltsd le és csomagold ki a GCMM-et az SD-kártya vagy USB-meghajtó gyökerébe.
1. Biztonságosan válaszd le az SD kártyát/USB drive-ot a számítógépről, majd helyezd be a Wii-be.
1. Indítsd el a Homebrew Channel csatornát, majd indítsd el a GCMM-et.
1. Válaszd ki azt az eszközt, amelyre a `.gci` fájlokat másoltad.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomd meg a `+`/`X` billentyűt a visszaállítási módba való belépéshez.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a memóriakártyát tartalmazó slot-ot.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Válaszd ki a visszaállítani kívánt mentést.
    + Ha az `MCBACKUP` összes mentését vissza szeretnéd állítani, nyomd meg az `1`/`R` gombot.

    ![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

<div>

</div>

<script>
    const tablinks     = document.getElementsByClassName('tablinks');
    const tablinks_to  = document.getElementsByClassName('tablinks to');
    const tablinks_via = document.getElementsByClassName('tablinks via');

    const tabcontent     = document.getElementsByClassName('tabcontent');
    const tabcontent_to  = document.getElementsByClassName('tabcontent to');
    const tabcontent_via = document.getElementsByClassName('tabcontent via');

    for (e of tabcontent) {
        e.style.display = 'none';
    }

    function openTab_from(evt, tabName) {
        for (t of tabcontent) t.style.display = 'none';
        for (b of tablinks) b.className = b.className.replace('btn--primary', 'btn--info');
        
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_to(evt, tabName) {
        for (t of tabcontent_to) t.style.display = 'none';
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_to) b.className = b.className.replace('btn--primary', 'btn--info');
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_via(evt, tabName) {
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
