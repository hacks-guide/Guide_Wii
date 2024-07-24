---
title: A Homebrew Channel telepítése
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató végig vezet a Homebrew Channel telepítésén a vWii-re a Wii U oldal módosítása nélkül.

#### Section I - Booting into Aroma

1. Futtasd a web böngésző exploitot, ami [korábban kifejtésre került](wiiu-nand-dumper), de ez alkalommal tartsd nyomva az X gombot, hogy az Environment Loader menüt nyisd meg.
2. Ha már ott vagy bootolj Aroma környzetbe, annak kiválasztásával a payload loader-ben.

#### II. rész - A Homebrew Channel telepítése

1. Indítsd el a vWii Compat Installer-t a Wii U Menu-ből.
2. Nyomj `A`-t a Homebrew Channel telepítéséhez és várj amíg azt nem látod, hogy `Install succeeded`. Utána nyomd meg a HOME gombot, hogy vissza térj a Wii U Menu-be.
3. Indítsd el a vWii-t (a Wii Menu ikon).
   - Ha a telepítés sikeres volt, látnod kell a Homebrew Channel-t a Wii Menu-dben.

Letörölheted a`wiiu` mappát az SD kártyádról, ha azt szeretnéd.

### Olvass el!

Most már tudod használni a Homebrew Channel-t arra, hogy Wii homebrew appokat indítsd.

Megjegyzés: Ha nemhivatalos alkalmazásokat telepítesz SD kártyára vagy pendrive-ra, a könyvtárfelépítésed így kell, hogy kinézzen:

```
💾 SD Card
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
Do not get confused with the `apps` folder inside of the `wiiu` folder and the `apps` folder on the root of the SD card.

[Folytatás a Priiloader telepítésével](priiloader)<br>
{: .notice--info}
