# A Homebrew Channel telepítése vWii-ra

Ez az útmutató végig vezet a Homebrew Channel vWii menübe telepítésén.

::: info

Használhatod ugyanazt az SD kártyát, amit eredetileg a Wii U moddolásához használtál.

:::

::: warning

Legyél biztos abban, hogy csináltál [egy NAND mentést](https://wiiu.hacks.guide/aroma/nand-backup) és telepítettél [Aroma Environment](https://aroma.foryour.cafe/)-et a Wii U-dra.

Ha nincs Aromád telepítve, folytasd [Az Aroma telepítésével](https://wiiu.hacks.guide/aroma/getting-started) vagy [A vWii moddolása a Wii U oldal moddolása nélkül](wiiu-nand-dumper) oldallal.

:::

## Követelmények

- Egy Wii U
- Az [Aroma környezet](https://aroma.foryour.cafe/) (az előző lépésben telepítésre kellett kerüljön)
- A [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) legutolsó kiadása. (`compat_installer-Aroma.zip`) (telepítésre kellett kerüljön az előző lépésben)
- Az [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest`)
  (`evwii.wps`) (opcionális)

::: danger

Ha az evWii Aroma plugin nem telepített, és a homebrew alkalmazás összeomlik/lefagy, az egyetlen mód a Wii U kikapcsolására a tápkábel kihúzása. Egyes esetekben, a tápkábel meghúzás memóra hibát okozhat; ezért erősen ajánlott a plugin telepítése.

:::

## Lépések

### I. rész - Fájlok

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a `compat_installer.wuhb` fájlt a `compat_installer-Aroma.zip` fájlból a `wiiu` -> `apps` útvonalra az SD kártyádra.
3. Másold az `evwii.wps` fájlt a `wiiu` > `environments` > `aroma` > `plugins` útvonalra az SD kártyádra.
4. Helyezd vissza az SD kártyád a Wii U-dba.

### II. rész - Bootolás Aromába

A követekző lépések eltérnek, attól függően, hogy Wii U-od [autoboot-ol e Aroma](https://wiiu.hacks.guide/aroma/autobooting)-ba vagy sem. Ha látod a vWii Compat Installer-t a Wii U-d bootolásakor, akkor Aroma környezetben vagy és [folytasd a III. résszel](#section-iii---installing-the-homebrew-channel). Egyébként használd a két alábbi módot az Aromába bootoláshoz.

#### Folyamat a PayloadLoader-rel rendelkező Wii U-k esetén

Ha korábban moddoltad a Wii U-d és van [PayloadLoader telepítve](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), akkor el kell tudnod indítani Health and Safety Information App-ot az Aroma környezet betöltéséhez.

#### Folyamat a PayloadLoader-rel nem rendelkező Wii U-k esetén

::: warning

Ha hibákapt kapsz, mint például FSOpenfile failed, FSGetMountSource failed, vagy SD Mount failed, keresd a böngésző hibákat (browser errors) a [Gyakori problémák és megoldásuk](https://wiiu.hacks.guide/common-issues-fixes.html) oldalon.

:::

Ha NINCS [PayloadLoader telepítve](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), akkor a browser exploit-ot kell használnod az Aroma környzet indításához. Azon felhasználók számára, akik a teljesen moddolni akarják a Wii U-ukat, a következő lépéseket kell követni.

1. Indítsd el az Internet Browser-t és navogált a `wiiuexploit.xyz` weboldalra.

   ![](/images/vwii/exploit/browser-exploit.png)

2. Click on `Run Exploit!` and hold the X button until you see the EnvironmentLoader. Ha az EnvironmentLoader-ben vagy válaszd az `aroma`-t az Aroma környezet indításához.

   - Ha a Wii U-d megál egy fehér vagy más módon lefagyott képernyőnél, várj pár másodpercet. Ha semmi nem történi, bootold újra a konzolt, [és töröld a böngésző mentés adatát](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history), majd próbáld újra.
   - Ha a `Please choose your payload` képernyőt látod, újra kell próbálnod és biztos lenned abban, hogy elég ideig tartod nyomva az `X` gombot. Ne tarts nyomva a `B` gombot.

   ![](/images/vwii/exploit/environment-loader.png)

3. Ha egy figyelmeztető üzenetet látsz arról, hogy a frissítés (update) mappa létezik, nyomj `X` gombot a frissítések blokkolásához és folytasd.

   ![](/images/vwii/exploit/update-warning.png)

4. A Boot Selector-ban nyomj `A` gombot a Wii U Menu indításához.

   ![](/images/vwii/exploit/boot-selector.png)

### III. rész - A Homebrew Channel telepítése

::: tip

A 3. lépésben, ha a HOME gomb nem működik vagy lefagyaszt egy egyszínű képernyőn, biztonságosan kikapcsolhatod a konzolodat a power gomb nyomva tartásával. Utána kapcsold be vissza a konzolt, és folytasd normál módon.

:::

1. Indítsd el a vWii Compat Installer appot a Wii U menu-ből.

   ![](/images/vwii/exploit/compat-install-launch.png)

2. Nyomd meg az `A` gombot a Homebrew Channel telepítéséhez.

   ![](/images/vwii/exploit/compat-install-pending.png)

3. Engedélyezd a Homebrew Channel települését, amíg nem látod az `Install succeeded!` feliratot. Ha a telepítés befejeződött, nyomd meg a HOME gombot a Wii U Menu-höz visszatéréshez.

   ![](/images/vwii/exploit/compat-install-success.png)

4. Indítsd el a vWii-t (a Wii Menu ikon).

   ![](/images/vwii/launch-vwii.png)

5. Ha a telepítés sikeres volt, már látnod kell a Homebrew Channel-t a Wii Menu-dben.

   ![](/images/vwii/exploit/vwii-hbc-installed.png)

## Kötelező olvasnivaló a Homebrew kezelésről

Most már tudod használni a Homebrew Channel-t arra, hogy Wii homebrew appokat indítsd.

Megjegyzés: Ha homebrew Wii alkalmazásokat telepítesz SD kártyára vagy USB drive-ra, a könyvtár felépítésed így kell, hogy kinézzen:

```shell
💾 SD kártya
 ┗ 📁 apps
   ┣ 📁 AppName1
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 AppName2
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1` és `AppName2` helyfoglaló nevek. Az `apps` mappában ne hozz létre egy másik `apps` nevű mappát.

Figyelj arra, hogy `apps` mappa a `wiiu` mappán belül (Wii U homebrew appokhoz) és az `apps` mappa az SD kártya gyökerében (Wii homebrew appokhoz) nem ugyanaz.

---

::: tip

Folytatás a [Priiloader telepítésével](priiloader)

Habár a BootMii nem telepíthető a vWii-re, a Priiloader fontos brcik védelmet ad és telepítése nagyon ajánlott.

:::
