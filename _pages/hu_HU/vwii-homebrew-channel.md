---
title: vWii Modding útmutató
---

{% include toc title="Tartalomjegyzék" %}

Ez az oldal végig vezet a vWii-d moddolásának folyamatán.

## SD előkészítés

Ha már hackelted a Wii U-dat a múltban, akkor használhatod ugyanazt az SD kártyát ehhez a folyamathoz.
{: .notice--info}

Ha még nem tetted meg, akkor készíts egy [NAND mentést](https://wiiu.hacks.guide/#/aroma/nand-backup)-ot és telepítsd az [Aroma Environment](https://aroma.foryour.cafe/)-et a Wii U-dra . Egyébként folytasd az [Aroma telepítésével](https://wiiu.hacks.guide/#/aroma/getting-started) vagy [A vWii moddolása a Wii U oldal moddolása nélkül](wiiu-nand-dumper) fejezettel
{: .notice--info}

### Követelmények

- Egy moddolt Wii
- Az [Aroma környezet](https://aroma.foryour.cafe/)
- A [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller) legutolsó kiadása.
- (Opcionális) Az [Enhanced vWii Aroma Plugin](https://hb-app.store/wiiu/evWii)

Ha az evWii Aroma plugin nem telepített, és a homebrew alkalmazás lefagy, az egyetlen mód a Wii U kikapcsolására a tápkábel kihúzása. A tápkábel kihúzása néhány esetben memória sérüléshez vezet, így erősen ajánlott a plugin telepítése.
{: .notice--warning}

### Útmutató

#### I. rész - Fájlok

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a tartalmát a `CompatTitleInstaller.zip` fájlnak az SD kártyád gyökerébe.
3. Másold a tartalmát a `evWii.zip` fájlnak az SD kártyád gyökerébe.

#### II. rész - A Homebrew Channel telepítése

1. Bootolj [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup)-ba.
2. Indítsd el a vWii Compat Installer-t a Wii U Menu-ből.
3. Nyomj `A`-t a Homebrew Channel telepítéséhez és várj amíg azt nem látod, hogy `Install succeeded`. Utána nyomd meg a HOME gombot, hogy vissza tért a Wii U Menu-be.
4. Indítsd el a vWii-t (a Wii Menu ikon).
   - Ha a telepítés sikeres volt, látnod kell a Homebrew Channel-t a Wii Menu-dben.

### Olvass el!

Most már tudod használni a Homebrew Channel-t arra, hogy Wii homebrew appokat indítsd.

Megjegyzés: Ha homebrew Wii alkalmazásokat telepítesz SD kártyára vagy USB drive-ra, a könyvtár felépítésed így kell, hogy kinézzen:

```
💾 SD Card
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
Ne keverd össze az `apps` mappát a `wiiu` mappában és az `apps` mappával az SD kártya gyökerében.

Folytatás a [Priiloader telepítésével](priiloader)<br>
{: .notice--info}
