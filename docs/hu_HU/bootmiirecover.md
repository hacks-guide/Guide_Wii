# BootMii biztonsági mentés visszatöltése

Ez az útmutató végigvezet egy biztonsági mentés visszatöltésén a BootMii segítségével. A biztonsági mentés visszatöltését általában csak a <strong>legvégső esetben</strong> szokás megkísérelni, ha egy Wii javításra szorul. Ha ezután is fennmarad a problémád, akkor lehet, hogy külső segítséget kell kérned. Ha még hozzáférsz a BootMiihez, először próbáld meg elindítani a Homebrew Channelt és azonosítani a [brickelődés](bricks) okát.

::: info

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

:::

::: warning

Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](https://static.hackmii.com/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

:::

::: danger

A Family Edition Wiiken (ezek azok, amelyek nem rendelkeznek GameCube-csatlakozókkal) NEM LEHETSÉGES biztonsági mentéseket visszaállítani. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges. Ha további segítségre van szükséged, kérj segítséget.

:::

::: danger

NE állíts vissza olyan biztonsági mentést, ami nem ment át az ellenőrzési szakaszon vagy ami nem a saját Wiidről származik – EZ ROSSZABBÍTHATJA A HELYZETET! Továbbá, csak egészséges SD kártyát használj a folyamathoz!

:::

## Követelmények

- Egy [BootMii](bootmii)-vel készült korábbi biztonsági mentés

## Konkrét adatok visszaállítása egy biztonsági mentésből

Ha csak konkrét adatokat szeretnél visszaállítani, akkor arra egy sokkal gyorsabb és biztonságosabb módszer is van, amihez valószínűleg a Dolphin emulátorra lesz szükséged.

Pl.: Ha csak a Wii Üzenőfal adatait szeretnéd visszaállítani, akkor nyisd meg a Dolphin emulátort és importáld a biztonsági mentést! Ezután kattints a `File -> Open User Folder` menüpontokra, majd keresd meg a `Wii/title/00000001/00000002/data/cdb.vff` fájlt, majd másold az SD kártyádra és használd a WiiXplorer](https://oscwii.org/library/app/wiixplorer)-t a megfelelő helyre történő visszaállításához.

Ha egy játék mentését szeretnéd visszaállítani, importáld a Dolphinba a NAND biztonsági mentést, majd kattints az Tools > Export All Wii Saves\` menüpontokra az összes mentésed SD kártyára való másolásához! Ezután a Data Management-tel áthelyezheted őket a Wii-odra.

## Fontos előzetes megjegyzések

- Ha nem csináltál semmit, ami brickeléshez vezetne (vagy hosszú idő óta először kapcsolod be a konzolod), akkor valószínűleg [Wi-Fi Brick](bricks#wi-fi-brick)-ről van szó.

- Ha IOS-ként van telepítve a BootMii, akkor a RestoreMii a mentés visszaállítása előtt a Konami-kód megadását fogja kérni, amihez egy GameCube-vezérlő kell.

- Vagy a konzolba épített POWER- (következő menüpont) és RESET (kiválasztás)-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod! Egy GameCube-vezérlőn a jobb- és bal nyílgombokkal lépkedhetsz a menüpontok között és az A-gombbal erősítheted meg a választásod.

## Lépések

1. Indítsd el a Homebrew Channelt.

2. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” menüpontot.

    - Ha a Homebrew Channel nem hozzáférhető és telepítve van a Priiloader, akkor azt is elindíthatod a konzol bekapcsolásakor, majd a `BootMii IOS` menüponttal megnyithatod a BootMiit.

    ![](/images/bootmii/BootMii_HBC.png)

3. Válaszd ki az Options menüpontot (az ikon fogaskerékkel).

    ![](/images/bootmii/BootMii_Gears.png)

4. Válaszd ki a RestoreMii gombot.

    ![](/images/bootmii/BootMii_Restore.png)

5. A BootMii jelenteni fogja, hogy először szimulációs módban fogja kipróbálni a visszatöltést. Az A- vagy Reset-gombbal elindíthatod a folyamatot.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Ha a BootMii IOS-ként van telepítve, meg kell adnod a Konami kódot egy GameCube-vezérlő használatával: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

7. A BootMii először szimulációs módban végigmegy a visszatöltési folyamaton és jelenti, hogy mit fog törölni és felülírni. Miután ez befejeződött, még egy utolsó lehetőséged lesz a folyamat megszakítására. A START- vagy Eject-gomb megnyomásával elindul a folyamat – bármely másik gomb megnyomásával megszakad.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

8. A folyamat befejeztével a program jelenteni fogja, hogy a visszaállítás sikerült-e (`I HAZ SUCCESS!`) vagy sem (`I HAZ FAIL`). Nyomj meg egy tetszőleges gombot a konzolon vagy a vezérlőn.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Nyomd meg a Back gombot (a gomb egy nyíllal), majd a BootMii-ből kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel gombot.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Ha azért állítasz vissza egy NAND biztonsági mentést, hogy javatsd a brickelést, és ez nem segít a problémádon, kérjük olvasd el a segédlet [brickeléssel](bricks) kapcsolatos részét.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
