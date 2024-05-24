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

### Important preliminary notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Útmutató

1. Indítsd el a Homebrew Channelt!
1. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!
    + If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Ha végeztél, nyomd meg a jobb szélen található vissza-gombot, majd a kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel-gombot!

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
