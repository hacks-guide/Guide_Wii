---
title: vWii Modding útmutató
---

{% include toc title="Tartalomjegyzék" %}

Ez az oldal végig vezet a vWii-d moddolásának folyamatán.

## SD előkészítés

If you have hacked your Wii U in the past, you can use the same SD Card for this process.
{: .notice--info}

If you haven't already, make sure you did a [nand backup](https://wiiu.hacks.guide/#/aroma/nand-backup) and have the [Aroma Enviorment](https://aroma.foryour.cafe/) installed on your Wii U. Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)
{: .notice--info}

### Követelmények

- Egy moddolt Wii
- Az [Aroma környezet](https://aroma.foryour.cafe/)
- A [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller) legutolsó kiadása.
- (Opcionális) Az [Enhanced vWii Aroma Plugin](https://hb-app.store/wiiu/evWii)

If the evWii Aroma plugin is not installed, and a homebrew app hangs, the only way to shut off the Wii U is by pulling the power cord. Pulling the power cord in some cases can cause a memory corruption so it is highly recomended to have the plugin installed.
{: .notice--warning}

### Útmutató

#### I. rész - Fájlok

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Copy the contents of the `CompatTitleInstaller.zip` file to the root of your SD Card.
3. Copy the contents of the `evWii.zip` file to the root of your SD Card.

#### II. rész - A Homebrew Channel telepítése

1. Bootolj [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup)-ba.
2. Indítsd el a vWii Compat Installer-t a Wii U Menu-ből.
3. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
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

[Folytatás a Priiloader telepítésével](priiloader)<br>
{: .notice--info}
