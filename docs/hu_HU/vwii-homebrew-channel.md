# vWii Modding útmutató

Ez az oldal végig vezet a vWii-d moddolásának folyamatán.

## SD előkészítés

::: info

Ha már hackelted a Wii U-dat a múltban, akkor használhatod ugyanazt az SD kártyát ehhez a folyamathoz.

:::

::: info

Legyél biztos abban, hogy csináltál [egy NAND mentést](https://wiiu.hacks.guide/#/aroma/nand-backup) és telepítettél [Aroma Environment](https://aroma.foryour.cafe/)-et a Wii U-dra.

Ha ez még nem történt meg, akkor folytasd az [Aroma telepítésével](https://wiiu.hacks.guide/#/aroma/getting-started) vagy [A vWii moddolása Wii U oldal nélkül](wiiu-nand-dumper) fejezetekkel

:::

## Követelmények

- Egy moddolt Wii
- Az [Aroma környezet](https://aroma.foryour.cafe/)
- A [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller) legutolsó kiadása.
- (Opcionális) Az [Enhanced vWii Aroma Plugin](https://hb-app.store/wiiu/evWii)

::: warning

Ha az evWii Aroma plugin nem telepített, és a homebrew alkalmazás lefagy, az egyetlen mód a Wii U kikapcsolására a tápkábel kihúzása. A tápkábel kihúzása néhány esetben memória sérüléshez vezet, így erősen ajánlott a plugin telepítése.

:::

## Lépések

### I. rész - Fájlok

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a tartalmát a `CompatTitleInstaller.zip` fájlnak az SD kártyád gyökerébe.
3. Másold a tartalmát a `evWii.zip` fájlnak az SD kártyád gyökerébe.

### II. rész - A Homebrew Channel telepítése

1. Bootolj [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup)-ba.
2. Indítsd el a vWii Compat Installer-t a Wii U Menu-ből.
3. Nyomj `A`-t a Homebrew Channel telepítéséhez és várj amíg azt nem látod, hogy `Install succeeded`. Utána nyomd meg a HOME gombot, hogy vissza térj a Wii U Menu-be.
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
Ne keverd össze az `apps` mappát a `wiiu` mappában és az `apps` mappával az SD kártya gyökerében.

::: tip

Folytatás a [Priiloader telepítésével](priiloader)

:::
