# A Wii NAND visszaállítása gyárira

Ez az útmutató részletesen bemutatja, hogyan hozhatsz létre egy alap NAND-ot a Wii rendszeredhez az Ohneschwanzenegger nevű program segítségével. A Wii beállításaiban található `Format Wii System Memory` opcióval ellentétben ez teljesen törli a NAND minden módosítását a NUS szerverekről letöltött alap Wii System Menu segítségével. Ha helyesen követed, a Wii-n nem marad homebrew a rendszeren, stock IOS-eket tartalmaz és egy gyári beállítási képernyőre kell bootolnia, ha a NAND flashelve lett.

Kérjük, vedd figyelembe, hogy ennek a programnak **szüksége van** egy meglévő (akár brickelt!) NAND biztonsági mentésre a működéshez, mivel szüksége van a NAND első 8 blokkjának másolatára, a rossz blokkok listájára és az AES/HMAC kulcsokra.

::: info

Ne próbáld meg ezt az útmutatót a Wii U vWii rendszerénél.

:::

::: danger

Az ebben az útmutatóban részletezett utasítások TÖRÖLNI fogják a WII-od RENDSZERMEMÓRIÁJÁT, és csak UTOLSÓ MEGOLDÁSKÉNT vagy ha a következők bármelyikét szeretnéd elvégezni használd:

- A Wii-t visszaállítani a gyári állapothoz hasonló állapotba.
- Egy olyan brick javítása, ahol nincs működő NAND biztonsági mentés vagy hozzáférés a Homebrew Channel csatornához, de a BootMii segítségével mégis tusz készíteni egyet.
- A Wii rendszermemóriájának bizonyos módosításait, például az összes cIOS-t nem tudtad visszaállítani a DARKCORP segítségével.

:::

::: warning

Ha a Wii-od [próbálod 4.3U-ra frissíteni](update) homebrew-vel, vagy elavult homebrew/IOS-t frissíteni, akkor valószínűleg nem kell követned ezt az útmutatót. Ehelyett használhatsz egy olyan eszközt, mint a [ModMii](modmii#syscheck-updater-wizard)-be épített SysCheck Updater Wizard. Ha zavarban vagy ezzel a folyamattal kapcsolatban, fontold meg, hogy csatlakozol a Nintendo Homebrew discord szerverhez, ahol támogatást kaphatsz.

:::

## Követelmények

- Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)
- Egy [NAND mentés](bootmii) arról az eszközről, amit flash-elni próbálsz
- Egy internetkapcsolattal rendelkező Windows PC
- [Ohneschwanzenegger](https://raw.githubusercontent.com/modmii/modmii.github.io/master/temp/ohneschwanzenegger.zip)
- [Nand BIN Checker](/assets/files/nandBinCheck.zip)

## Lépések

### I. rész - Előkészületek

1. Indítsd el az Ohneschwanzenegger-t. Előfordulhat, hogy a Windows SmartScreen promptot kapsz, ez egy téves pozitív találat; a programot a `További információk` és a `Futtatás` gomb megnyomásával mindenképpen indítsd el.

2. Nyomd meg a `Local Cache` gombot, és hozz létre egy új mappát a NUS gyorsítótár kimenetéhez, majd nyomd meg az OK gombot. Egy példamappa az alábbiakban látható.

   ![](/images/factory-reset/nuscache.png)

3. Nyomja meg az eszköztáron a `Nand Dump` gombot, majd az `New nand` gombot. Ez megnyit egy felugró ablakot, ahol beállíthaod az új NAND-dump paramétereit. Nyomja meg a nagy meglévő `Existing Nand...` gombot, és keresd meg a meglévő NAND-dumpod a Wii-dről.

   ![](/images/factory-reset/newnand.png)

4. Ez automatikusan kitölti az olyan információkat, mint a kulcsok, a Boot 1/2 és a rossz blokkok. CSAK a Destination mezőt változtasd meg `./blankNand.bin`-re, ami a NAND-ot a program mappájába fogja kiadni `blankNand.bin` néven. Aztán nyomj OK-t.

   ![](/images/factory-reset/renamenand.png)

### II. rész - Üres NAND készítése

1. Most, hogy a NAND be van töltve a programba, válaszd a `Content` lehetőséget az eszköztáron, majd nyomd meg a Format gombot. Ez a BLANK NAND-od inicializálja, nem pedig a NAND mentésed.

   ![](/images/factory-reset/formatnand.png)

2. Válaszd ki a program bal felső szövegmezőjét, és írd be a Wii System Menu verziót, amelyet a NAND-nak kell tartalmaznia. Érdemes megjegyezni, hogy ez optimális esetben 4.3 (példák: `4.3E`, `4.3U`, `4.3J`, `4.3K`).

   ![](/images/factory-reset/sysmenu.png)

3. Miután megerősítette, hogy megadtad a kívánt menüverziót, nyomd meg az Entert vagy a `Get It!` gombot. Ekkor megkezdődik a menü letöltése a NUS szerveréről, és a programban megjelenik folyamat előrehaladása.

   ![](/images/factory-reset/menudownload.png)

4. Amint a menü letöltése befejeződött, egy felugró ablakban megjelennek a NAND-hoz csatolt beállítások. Ez automatikusan kitöltődik attól függően, hogy mi volt a NAND-ban, bár a sorozatszám lehet, hogy hibás. Ezt szerkesztheted, ha szeretnéd, egyébként hagyj mindent üresen, és nyomd meg az OK gombot.

   ![](/images/factory-reset/settings.png)

5. Ezután nyomd meg a `Content` gombot a tálcán, majd nyomd meg a `Write meta entries` gombot. Ezután menj vissza a menübe, és nyomd meg a `Flush` gombot. Ezután bezárhatod az ablakot.

   ![](/images/factory-reset/finalsteps.png)

### III. rész - A NAND ellenőrzése

1. Ha a NAND Bin Checker még nincs az Ohneschwanzeneggerrel azonos könyvtárban, másold oda most. Ezután nyiss terminált ebben a könyvtárban. Futtasd a következő parancsot: `.\nandBinCheck.exe .\blankNand.bin`. Ha a NAND-ot máshogy nevezted el, a parancsot ennek megfelelően módosítsd. A program ezután ellenőrizni fogja a NAND érvényességét.

   ![](/images/factory-reset/nandcheck.png)

2. Ha minden rendben van, az eredménynek az alábbihoz hasonlóan kell kinéznie. Ha BÁRMILYEN hiba feltűnik, NE HASZNÁLD ezt a NAND-ot, és ne próbáld meg újra, mert ez károsíthatja vagy brickelhet a Wii-odat. Ha a további próbálkozásoknál is ilyen hibákat kapsz, menj a Nintendo Homebrew discord szerverére támogatásért.

   ![](/images/factory-reset/nandcheckresult.png)

3. Helyezd át a `blankNand.bin` fájlt a Wii-od SD-kártyájára, és nevezd át `nand.bin`-re, hogy a BootMii segítségével flashelni lehessen. Ne feledd, hogy ne írd felül a meglévő NAND-ot!

   ![](/images/factory-reset/nandname.png)

::: tip

[Folytatás a BootMii Recovery-vel](bootmiirecover)

Mostz, hogy van egy üres NAND-od, helyre állíthatod azt a Wii-odon a BootMii segítségével.

:::
