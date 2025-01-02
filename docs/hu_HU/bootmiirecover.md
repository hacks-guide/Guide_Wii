# BootMii biztonsági mentés visszatöltése

Ez az útmutató végigvezet egy biztonsági mentés visszatöltésén a BootMii segítségével. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

:::

::: warning

Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](https://static.hackmii.com/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

:::

::: danger

A Family Edition Wiiken (ezek azok, amelyek nem rendelkeznek GameCube-csatlakozókkal) NEM LEHETSÉGES biztonsági mentéseket visszaállítani. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges. Ha további segítségre van szükséged, kérj segítséget!

:::

::: danger

NE állíts vissza olyan biztonsági mentést, ami nem ment át az ellenőrzési szakaszon vagy ami nem a saját Wiidről származik – EZ ROSSZABBÍTHATJA A HELYZETET! Továbbá, csak egészséges SD kártyát használj a folyamathoz!

:::

## Követelmények

- Egy [BootMii](bootmii)-vel készült korábbi biztonsági mentés

## Konkrét adatok visszaállítása egy biztonsági mentésből

Ha csak konkrét adatokat szeretnél visszaállítani, akkor arra egy sokkal gyorsabb és biztonságosabb módszer is van, amihez valószínűleg a Dolphin emulátorra lesz szükséged.

Pl.: Ha csak a Wii Üzenőfal adatait szeretnéd visszaállítani, akkor nyisd meg a Dolphin emulátort és importáld a biztonsági mentést! In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Fontos előzetes megjegyzések

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- Ha IOS-ként van telepítve a BootMii, akkor a RestoreMii a mentés visszaállítása előtt a Konami-kód megadását fogja kérni, amihez egy GameCube-vezérlő kell.

- Vagy a konzolba épített POWER- (következő menüpont) és RESET (kiválasztás)-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod! Egy GameCube-vezérlőn a jobb- és bal nyílgombokkal lépkedhetsz a menüpontok között és az A-gombbal erősítheted meg a választásod.

## Lépések

1. Indítsd el a Homebrew Channelt!

2. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!

   - Ha a Homebrew Channel nem hozzáférhető és telepítve van a Priiloader, akkor azt is elindíthatod a konzol bekapcsolásakor, majd a `BootMii IOS` menüponttal megnyithatod a BootMiit.

   ![](/images/bootmii/BootMii_HBC.png)

3. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

   ![](/images/bootmii/BootMii_Gears.png)

4. Válaszd ki a RestoreMii-menüpontot!

   ![](/images/bootmii/BootMii_Restore.png)

5. A BootMii jelenteni fogja, hogy először szimulációs módban fogja kipróbálni a visszatöltést. Az A- vagy Reset-gombbal elindíthatod a folyamatot.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Ha a BootMii IOS-ként van telepítve, meg kell adnod a Konami kódot egy GameCube-vezérlő használatával: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. A BootMii először szimulációs módban végigmegy a visszatöltési folyamaton és jelenti, hogy mit fog törölni és felülírni. Miután ez befejeződött, még egy utolsó lehetőséged lesz a folyamat megszakítására. A START- vagy Eject-gomb megnyomásával elindul a folyamat – bármely másik gomb megnyomásával megszakad.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. A folyamat befejeztével a program jelenteni fogja, hogy a visszaállítás sikerült-e (`I HAZ SUCCESS!`) vagy sem (`I HAZ FAIL`). Ezután nyomj meg egy gombot a konzolon vagy a vezérlőn!

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Ha végeztél, nyomd meg a jobb szélen található vissza-gombot, majd a kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel-gombot!

   ![](/images/bootmii/BootMii_Return.png)

::: info

Ha azért állítasz vissza egy NAND biztonsági mentést, hogy javatsd a brickelést, és ez nem segít a problémádon, kérjük olvasd el a segédlet [brickeléssel](bricks) kapcsolatos részét.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez!](site-navigation)

:::
