# vWii Modding útmutató

Ez az oldal végig vezet a vWii-d moddolásának folyamatán.

## SD előkészítés

::: info

Ha már hackelted a Wii U-dat a múltban, akkor használhatod ugyanazt az SD kártyát ehhez a folyamathoz.

:::

::: info

Legyél biztos abban, hogy csináltál [egy NAND mentést](https://wiiu.hacks.guide/aroma/nand-backup) és telepítettél [Aroma Environment](https://aroma.foryour.cafe/)-et a Wii U-dra.

Ha ez még nem történt meg, akkor folytasd az [Aroma telepítésével](https://wiiu.hacks.guide/aroma/getting-started) vagy [A vWii moddolása Wii U oldal nélkül](wiiu-nand-dumper) fejezetekkel

:::

## Követelmények

- Egy moddolt Wii
- Az [Aroma környezet](https://aroma.foryour.cafe/)
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)
- (Optional) The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`)

::: warning

Ha az evWii Aroma plugin nem telepített, és a homebrew alkalmazás lefagy, az egyetlen mód a Wii U kikapcsolására a tápkábel kihúzása. A tápkábel kihúzása néhány esetben memória sérüléshez vezet, így erősen ajánlott a plugin telepítése.

:::

## Lépések

### I. rész - Fájlok

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
3. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
4. Helyezd vissza az SD kártyád a Wii U-dba.

### II. rész - A Homebrew Channel telepítése

1. Bootolj [Aroma](https://wiiu.hacks.guide/aroma/finalizing-setup)-ba.
   - Ha beállítottad az [Aromát autobootolásra](https://wiiu.hacks.guide/aroma/autobooting), akkor az Aroma már futni fog, mikor bekapcsolod a konzolod.
2. Indítsd el a vWii Compat Installer appot a Wii U menu-ből.
3. Nyomj `A`-t a Homebrew Channel telepítéséhez és várj amíg azt nem látod, hogy `Install succeeded`. Utána nyomd meg a HOME gombot, hogy vissza térj a Wii U Menu-be.
   - Ha a HOME gomb nem működik, biztonságosan kikapcsolhatod a konzolod a power gomb nyomva tartásával, majd kapcsold be újra.
4. Indítsd el a vWii-t (a Wii Menu ikon).
   - Ha a telepítés sikeres volt, látnod kell a Homebrew Channel-t a Wii Menu-dben.

## Kötelező olvasnivaló

Most már tudod használni a Homebrew Channel-t arra, hogy Wii homebrew appokat indítsd.

Megjegyzés: Ha homebrew Wii alkalmazásokat telepítesz SD kártyára vagy USB drive-ra, a könyvtár felépítésed így kell, hogy kinézzen:

```
💾 SD kártya
 ┗ 📁 apps
   ┣ 📁 <AppName1>
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 <AppName2>
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1` és `AppName2` helyfoglaló nevek. Az `apps` mappában ne hozz létre egy másik `apps` nevű mappát.
Figyelj arra, hogy `apps` mappa a `wiiu` mappán belül (Wii U homebrew appokhoz) és az `apps` mappa az SD kártya gyökerében (Wii homebrew appokhoz) nem ugyanaz.

::: tip

Folytatás a [Priiloader telepítésével](priiloader)

:::
