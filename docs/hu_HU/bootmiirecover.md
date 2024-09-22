---
title: "BootMii biztonsági mentés visszatöltése"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató végigvezet egy biztonsági mentés visszatöltésén a BootMii segítségével. A biztonsági mentés visszatöltését általában csak a <strong>legvégső esetben</strong> szokás megkísérelni, ha egy Wii javításra szorul. Ha ezután is fennmarad a problémád, akkor lehet, hogy külső segítséget kell kérned. Ha még hozzáférsz a BootMiihez, először próbáld meg elindítani a Homebrew Channelt és [azonosítani az elromlás okát](bricks)!

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.
{: .notice--info}

Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a .zip-fájlt](https://static.hackmii.com/bootmii_sd_files.zip), csomagold ki az SD kártyád gyökérmappájába és próbáld újra!
{: .notice--warning}

A Family Edition Wiiken (ezek azok, amelyek nem rendelkeznek GameCube-csatlakozókkal) NEM LEHETSÉGES biztonsági mentéseket visszaállítani. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges. Ha további segítségre van szükséged, kérj segítséget!
{: .notice--danger}

NE állíts vissza olyan biztonsági mentést, ami nem ment át az ellenőrzési szakaszon vagy ami nem a saját Wiidről származik – EZ ROSSZABBÍTHATJA A HELYZETET! Továbbá, csak egészséges SD kártyát használj a folyamathoz!
{: .notice--danger}

### Követelmények

* Egy [BootMii](bootmii)vel készült korábbi biztonsági mentés

### Konkrét adatok visszaállítása egy biztonsági mentésből

Ha csak konkrét adatokat szeretnél visszaállítani, akkor arra egy sokkal gyorsabb és biztonságosabb módszer is van, amihez valószínűleg a Dolphin emulátorra lesz szükséged.

Pl.: Ha csak a Wii Üzenőfal adatait szeretnéd visszaállítani, akkor nyisd meg a Dolphin emulátort és importáld a biztonsági mentést! Ezután kattints a `Fájl -> Felhasználói mappa megnyitása`-menüpontokra! A megjelenő ablakban navigálj a `Wii/title/00000001/00000002/data/`-mappába és másold a <0>cdb.vff</0>-fájlt az SD kártyádra! Ezután a [WiiXplorer](https://oscwii.org/library/app/wiixplorer) segítségével átmásolhatod a megfelelő helyre.

Ha egy játék mentését szeretnéd visszaállítani, importáld a Dolphinba a biztonsági mentést, majd kattints az `Eszközök -> Minden Wii mentés exportálása`-menüpontokra a mentéseid SD kártyára való másolásához! Ezután a Wii beépített adatkezelési eszközeivel („Data Management“) áthelyezheted őket a célkönyvtárba.

### Fontos előzetes megjegyzések

+ Ha nem csináltál semmit, ami elromláshoz vezetne (vagy hosszú idő óta először kapcsolod be a konzolod), akkor valószínűleg [Wi-Fi-rontásról](bricks#wi-fi-brick) van szó.

+ Ha IOS-ként van telepítve a BootMii, akkor a RestoreMii a mentés visszaállítása előtt a Konami-kód megadását fogja kérni, amihez egy GameCube-vezérlő kell.

+ Vagy a konzolba épített POWER- (következő menüpont) és RESET (kiválasztás)-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod! Egy GameCube-vezérlőn a jobb- és bal nyílgombokkal lépkedhetsz a menüpontok között és az A-gombbal erősítheted meg a választásod.

### Útmutató

1. Indítsd el a Homebrew Channelt!
1. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!
    + Ha a Homebrew Channel nem hozzáférhető és telepítve van a Priiloader, akkor azt is elindíthatod a konzol bekapcsolásakor, majd a `BootMii IOS`-menüponttal megnyithatod a BootMiit.

    ![](/images/bootmii/BootMii_HBC.png)

1. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

    ![](/images/bootmii/BootMii_Gears.png)

1. Válaszd ki a RestoreMii-menüpontot!

    ![](/images/bootmii/BootMii_Restore.png)

1. A BootMii jelenteni fogja, hogy először szimulációs módban fogja kipróbálni a visszatöltést. Az A- vagy Reset-gombbal elindíthatod a folyamatot.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. Ha a BootMii IOS-ként van telepítve, meg kell adnod a Konami kódot egy GameCube-vezérlő használatával: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. A BootMii először szimulációs módban végigmegy a visszatöltési folyamaton és jelenti, hogy mit fog törölni és felülírni. Miután ez befejeződött, még egy utolsó lehetőséged lesz a folyamat megszakítására. A START- vagy Eject-gomb megnyomásával elindul a folyamat – bármely másik gomb megnyomásával megszakad.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. A folyamat befejeztével a program jelenteni fogja, hogy a visszaállítás sikerült-e („`I HAZ SUCCESS!`”) vagy nem („`I HAZ FAIL`”). Ezután nyomj meg egy gombot a konzolon vagy a vezérlőn!

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Ha végeztél, nyomd meg a jobb szélen található vissza-gombot, majd a kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel-gombot!

    ![](/images/bootmii/BootMii_Return.png)

Ha javítási szándékból akartál visszaállítani egy biztonsági mentést és nem sikerült, olvasd el a segédlet [elromlásokkal kapcsolatos részét](bricks)!
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
