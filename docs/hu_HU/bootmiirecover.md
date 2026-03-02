# BootMii biztonsági mentés visszatöltése

Ez az útmutató végigvezet egy biztonsági mentés visszatöltésén a BootMii segítségével.

Kérjük olvasd el az alábbi információkat mielőtt tovább haladsz.

:::details Fontos információ

- A Family Edition Wii-ok és Wii mini-k **NEM TUDNAK** helyreállítani NAND mentést. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

- Ha nem csináltál semmit, ami brickeléshez vezetne (vagy hosszú idő óta először kapcsolod be a konzolod), akkor valószínűleg [Wi-Fi Brick](bricks#wi-fi-brick)-ről van szó.

- Ha azért állítasz vissza egy NAND biztonsági mentést, hogy javítsd a brickelést, és ez nem segít a problémádon, kérjük olvasd el a segédlet [brickeléssel](bricks) kapcsolatos részét.

- Vagy a konzol gombokat, vagy egy az 1. csatlakozóba dugott GameCube-vezérlőt kell használnod a BootMii-ben navigáláshoz. A GameCube vezérlővel navigáláshoz, kattintsd bal/jobb gombbal a +Control Pad-on a mozgáshoz és nyomj A gombot a kiválasztáshoz. A konzol gombokkal navigáláshoz nyomd meg a `POWER`-t a jobbra mozgáshoz és a `RESET`-et a kiválasztáshoz.

- Ha IOS-ként van telepítve a BootMii, akkor a RestoreMii a mentés visszaállítása előtt a Konami-kód megadását fogja kérni, amihez egy GameCube-vezérlő kell. Ez kifejtésre került a 6. lépésben.

:::

::: danger

**Fontos figyelmeztetések**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](https://static.hackmii.com/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. Ez egy WORSE BRICK-hez vezethet. The same goes for restoring backups off of faulty SD cards.

:::

## Konkrét adatok visszaállítása egy biztonsági mentésből

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

Pl.: Ha csak a Wii Üzenőfal adatait szeretnéd visszaállítani, akkor nyisd meg a Dolphin emulátort és importáld a biztonsági mentést! In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Követelmények

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

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

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
