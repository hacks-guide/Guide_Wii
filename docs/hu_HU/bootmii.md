# BootMii biztonsági mentés

A BootMii lehetővé teszi, hogy biztonsági mentést készíts a Wiid belső tárhelyéről és visszatöltsd azt.
Ezen az oldalon megismerkedhetsz a biztonsági mentés készítéséről az SD kártyára, amivel aztán úgy cselekedhetsz, ahogy szeretnél.

::: warning

A BootMii használatához szükséged lesz egy **SD kártyára**. A NAND biztonsági mentést is erre fogjuk másolni. Ha jelenleg nem rendelkezel egy SD kártyával, akkor kihagyhatod ezt az oldalt, de ERŐSEN AJÁNLOTT, hogy később térj vissza és készíts egy biztonsági mentést a Wii-d belső tárhelyéről.

:::

## Követelmények

- Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)

## Lépések

::: info

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

:::

1. Kapcsold be a konzolod.

2. Indítsd el a Homebrew Channelt.

3. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” menüpontot.

    ![](/images/bootmii/BootMii_HBC.png)

    ::: warning

    Ha a `Launch BootMii` gomb nem jelenik meg a Homebew Channelben, [indítsd újra a HackMii-telepítőt](hackmii) és telepítsd újra a BootMiit.

    :::

    ::: warning

    Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](/assets/files/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

    :::

4. Ezek után az alábbihoz hasonló képernyőt fogsz látni a Wii képernyőjén:

    ![](/images/bootmii/BootMii_Main.png)

    ::: info

    A BootMii irányítása nem lehetséges Wii Remote-tal.
    Vagy a konzolba épített POWER- és RESET-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod.
    A következő menüpontra a POWER-gombbal léphetsz át. Egy opció kiválasztáshoz nyomd meg a RESET gombot.

    :::

5. Válaszd ki az Options menüpontot (az ikon fogaskerékkel).

    ![](/images/bootmii/BootMii_Gears.png)

6. Válaszd ki a bal szélső gombot.

    ![](/images/bootmii/BootMii_Backup.png)

7. Ezután el fog kezdődni a belső tárhely biztonsági mentése. A folyamatot a képernyőn figyelemmel követheted.

    - A „Bad Blocks”-ok nomálisak és többnyire a gyárból származnak a NAND binning miatt. Ne aggódj – ez a gyárban történő adatosztályozás természetes mellékterméke és nem azt jelenti, hogy baj van.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Miután a folyamat lezáródott, a BootMii ellenőrizni fogja a biztonsági mentés minőségét. Ha minden jól sikerült, akkor az összes blokk zölden fog megjelenni az ábrán.

    - Ha a mentés tartalmaz olyan gyárilag sérült blokkokat, amelyekben vannak javíthatatlan oldalak, akkor azok nem fognak átmenni az ellenőrzésen. Addig amíg a nem-hibás blokkok sikeresen ellenőrzésre kerülnek, ez nem probléma.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Nyomd meg a Back gombot (a gomb egy nyíllal), majd a BootMii-ből kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel gombot.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Megjegyzés: **egy biztonsági mentés visszatöltése általában a legvégső megoldás**. Sokszor jobb módja is van a konzol megjavításának.

Próbáld minél jobban a [brickelés okát](bricks) és először próbáld visszafelé végre hajtani a lépéseket, amik okozták.

Egy az SD kártyádon található NAND mentésből visszaálláshoz kövesd a [RestoreMii](bootmiirecover) lépéseit.
**A Family Edition Wii-kon (ezek azok, amelyek nem rendelkeznek GameCube-csatlakozókkal) NEM LEHETSÉGES NAND mentéseket visszaállítani hardveres módosítások nélkül.**

:::

::: info

A mentési folyamat befejeztével két fájl lesz létrehozva az SD kártyád gyökerén: a `nand.bin` és a `keys.bin`. A `nand.bin` a belső tárhely másolata, míg a `keys`.bin tartalmazza a konzol biztonsági kulcsait.

:::

## Automatikus indítás

Ha képes voltál boot2 alá telepíteni a BootMiit és nem szeretnéd, hogy bekapcsoláskor a konzol mindig a BootMii-képernyőt mutassa, lehetőséged van azt automatikusan a rendszermenübe indítani. Így fel sem fog tűnni, a boot2 alá telepített BootMii.

1. Nyisd meg az `SD:/bootmii/bootmii.ini` fájlt egy szövegszerkesztővel, pl. a Jegyzettömbbel.
2. Módosítsd az `#AUTOBOOT=SYSMENU`-t `AUTOBOOT=SYSMENU` -re a `#` törlésével.
3. Utána módoítsd a `#BOOTDELAY=5`-öt `BOOTDELAY=1`-re törölve a `#`-et majd az `5`-öt átírva`1`-re.
4. Mentsd el a fájlt és lépj ki.

::: info

Használhatod a [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) appot is Wii-n ezen beállítások módosításához.

:::

## A NAND mentés feltöltése a Dolphin Emulátorba

A NAND mentésed felhasználható a Dolphin Emulátorban.

1. Töltsd le a legutolsó béta vagy fejlesztői verzióját a Dolphin Emulátornak a [Dolphin Weboldaláról](https://dolphin-emu.org/) és telepítsd az eszközödre.
2. Indítsd el a Dolphin Emulátort.
3. Kattints a `Tools` fülre, görgess le a `Manage NAND`-ig majd válaszd az `Import BootMii NAND backup...` opciót.
4. Keresd meg és jelöld ki a `nand.bin` fájlt, amit az SD kártyád gyökerében találtál és válaszd az Open-t.
5. Ha egy `keys.bin` állományt kér, keresd meg az SD kártyádon és válaszd az Open-t.

::: tip

[Folytatás a Priiloader telepítésével](priiloader)

A Priiloader egy második réteg védelemmel látja el a Wiit és erősen javasolt a beállítása, még ha boot2 alá is telepítetted a BootMiit. A BootMii IOS-es felhasználóinak számára kiemelten fontos.

:::
