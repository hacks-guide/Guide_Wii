---
title: "BootMii biztonsági mentés"
---

{% include toc title="Tartalomjegyzék" %}

A BootMii lehetővé teszi, hogy biztonsági mentést készíts a Wiid belső tárhelyéről és visszatöltsd azt. Ezen az oldalon megismerkedhetsz a biztonsági mentés készítéséről az SD kártyára, amivel aztán úgy cselekedhetsz, ahogy szeretnél.

A BootMii használatához szükséged lesz egy **SD kártyára**. A biztonsági mentést is erre fogjuk másolni. Ha jelenleg nem rendelkezel egy SD kártyával, akkor kihagyhatod ezt az oldalt, de ERŐSEN AJÁNLJUK, hogy később térj vissza és készíts egy biztonsági mentést a Wiid belső tárhelyéről!
{: .notice--warning}

### Követelmények

* Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)

### Útmutató

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.
{: .notice--info}

1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!

    ![](/images/bootmii/BootMii_HBC.png)

    Ha a `Launch BootMii`-menüpont nem jelenik meg a Homebew Channelben, [indítsd újra a HackMii-telepítőt](hackmii) és telepítsd újra a BootMiit!
    {: .notice--warning}

    Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a .zip-fájlt](/assets/files/bootmii_sd_files.zip), csomagold ki az SD kártyád gyökérmappájába és próbáld újra!
    {: .notice--warning}

1. Ezek után az alábbihoz hasonló képernyőt fogsz látni a Wii képernyőjén:

    ![](/images/bootmii/BootMii_Main.png)

    A BootMii irányítása nem lehetséges Wii Remote-tal. Vagy a konzolba épített POWER- és RESET-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod! A következő menüpontra a POWER-gombbal léphetsz át. A kiválasztáshoz nyomd meg a RESET-gombot!
    {: .notice--info}

1. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

    ![](/images/bootmii/BootMii_Gears.png)

1. Válaszd ki a bal szélső menüpontot!

    ![](/images/bootmii/BootMii_Backup.png)

1. Ezután el fog kezdődni a belső tárhely biztonsági mentése. A folyamatot a képernyőn figyelemmel követheted.
    + Lehetséges, hogy az ábra néhány feketével jelölt sérült blokkot („Bad block”) fog mutatni. Ne aggódj – ez a gyárban történő adatosztályozás természetes mellékterméke és nem azt jelenti, hogy baj van.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Miután a folyamat lezáródott, a BootMii ellenőrizni fogja a biztonsági mentés minőségét. Ha minden jól sikerült, akkor az összes blokk zölden fog megjelenni az ábrán.
    + Ha a mentés tartalmaz olyan gyárilag sérült blokkokat, amelyekben vannak javíthatatlan oldalak, akkor azok nem fognak átmenni az ellenőrzésen. Addig amíg a nem-hibás blokkok sikeresen ellenőrzésre kerülnek, ez nem probléma.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Ha végeztél, nyomd meg a jobb szélen található vissza-gombot, majd a kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel-gombot!

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Megjegyzés: **Egy biztonsági mentés visszatöltése általában a legvégső mentési módszer.** Sokszor jobb módja is van a konzol megjavításának.
Ha elrontod a konzolod, próbáld minél jobban [azonosítani az elromlás okát](bricks) és visszafordítani a problémát!
Az SD kártyás biztonsági mentés visszaállításához ld. [RestoreMii](bootmiirecover). **A Family Edition Wiiken (ezek azok, amelyek nem rendelkeznek GameCube-csatlakozókkal) NEM LEHETSÉGES biztonsági mentéseket visszaállítani hardveres módosítások nélkül.**
</div>

A mentési folyamat befejeztével két fájl lesz létrehozva az SD kártyád gyökerén: a `nand.bin` és a `keys.bin`. A `nand.bin` a belső tárhely másolata, míg a `keys.bin` tartalmazza a konzol biztonsági kulcsait.
{: .notice--info}

### Automatikus indítás

Ha képes voltál boot2 alá telepíteni a BootMiit és nem szeretnéd, hogy bekapcsoláskor a konzol mindig a BootMii-képernyőt mutassa, lehetőséged van azt automatikusan a rendszermenübe indítani. Így fel sem fog tűnni, a boot2 alá telepített BootMii.

1. Nyisd meg az SD kártya bootmii-mappájában található `bootmii.ini`-fájlt egy szövegszerkesztővel, pl. a Jegyzettömbbel!
1. A `#AUTOBOOT=SYSMENU`-sor elejéről töröld ki a kettőskeresztet, hogy `AUTOBOOT=SYSMENU` legyen!
1. Ezután a `#BOOTDELAY=5`-sor elejéről töröld ki a kettőskeresztet és írd át az `5`-öst `1`-esre, hogy ez legyen odaírva: `BOOTDELAY=1`!
1. Ha végeztél, mentsd el a fájlt és zárd be!

Ezeket a beállításokat a [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor)-alkalmazással is megváltoztathatod.
{: .notice--info}

### A NAND mentés feltöltése a Dolphin Emulátorba

A NAND mentésed felhasználható a Dolphin Emulátorban.

1. Töltsd le a legutolsó béta vagy fejlesztői verzióját a Dolphin Emulátornak a [Dolphin Weboldaláról](https://dolphin-emu.org/) és telepítsd az eszközödre.
1. Nyisd meg a Dolphint Emulátort.
1. Kattints a `Tools` fülre, görgess le a `Manage NAND`-ig majd válaszd az `Import BootMii NAND backup...` opciót.
1. Keresd meg és jelöld ki a `nand.bin` fájlt, amit az SD kártyád gyökerében találtál és válaszd az Open-t.
1. Ha egy `keys.bin` állományt kér, keresd meg az SD kártyádon és válaszd az Open-t.

[Folytatás a Priiloader telepítésével](priiloader)<br> A Priiloader egy második réteg védelemmel látja el a Wiit és erősen javasolt a beállítása, még ha boot2 alá is telepítetted a BootMiit. A BootMii IOS-es felhasználóinak számára kiemelten fontos.
{: .notice--info}
