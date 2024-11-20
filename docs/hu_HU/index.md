---
layout: home
title: Wii Hack útmutató
hero:
  text: Wii Hack útmutató
  tagline: A teljes útmutató a Wii, vWii és Wii mini moddingjához.
  image:
    src: /images/main-pages/home-page-feature.jpg
---

::: info

Mivel ez az útmutató most jelent meg, a fordítások még folyamatban vannak. Köszönjük a türelmedet!

:::

::: warning

Ahhoz, hogy a legtöbbet hozd ki ebből az útmutatóból, olvasd el ezt az oldalt, mielőtt folytatnád.

:::

## Mi a homebrew?

**Homebrew** refers to software that was not authorized by the original creator of a piece of hardware - in this case, Nintendo. Ahhoz, hogy a homebrew futtatására a Wii konzolon képessé váljon, a konzolt először módosítani kell, hogy a nem aláírt kódot futtathassa.

Íme néhány általános példa arra, hogy a homebrew mit tud a Wii-n:

- [Backup](bootmii) and [restore](bootmiirecover) your Wii's NAND (system memory)
- Enhance the [brick protection](priiloader) of your Wii
- Download new homebrew apps with the [Open Shop Channel](osc)
- [Patch game disc contents](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
- Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
- Back up your [discs](dump-games) and [other installed titles](dump-wads)
- Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
- Install a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
- Restore online functionality to both [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](wiimmfi)

## Mit telepít ez az útmutató?

Ez az útmutató a következőkre törekszik, beleértve a választható szakaszokat is:

- Módosítsa a Wii-t a számos exploit egyikének segítségével, azzal a céllal, hogy elérje a HackMii telepítőjét
- A BootMii és a Homebrew Channel telepítése
- Biztonsági mentés készítése a kritikus rendszerfájlokról
- A Priiloader telepítése
- Az Open Shop Channel telepítése
- Ajánlott Homebrew-ok a Wii-odra
- A WiiConnect24 és a Nintendo Wi-Fi Connection funkcióinak visszaállítása

## Mit kell tudni a kezdés előtt?

- A Homebrew 100%-ban ingyenes, és a Wii módosítása is ingyenes. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
- This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
- **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
- Attól függően, hogy mit szándékozol csinálni a módosított Wii-vel, előfordulhat, hogy a rendszermemóriában olyan módosításokat kell végrehajtanod, amelyek a brickelés (a konzol működésképtelenné válása) kockázatával járnak. As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
- A Wii és a Wii mini közötti különbségek igen jelentősek. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Légy óvatos, ha tervezed, hogy módosítod az egyiket!
- Be extremely careful when modifying a [Korean Wii](bricks#koreankii-error-003-brick).

## Kész?

Az útmutató összese 9 fejezettel rendelkezik. Ezek az alábbiak:

1. Exploit kiválasztása és használata (KÖTELEZŐ)
2. A Homebrew Channel és a BootMii telepítése (KÖTELEZŐ)
3. NAND mentés készítése a BootMii-vel (KÖTELEZŐ)
4. A Priiloader telepítése (KÖTELEZŐ)
5. Az Open Shop Channel telepítése (AJÁNLOTT)
6. A cIOS telepítése (AJÁNLOTT)
7. Az ajánlott Homebrew-ok felfedezése (AJÁNLOTT)
8. A WiiConnect24 funkcionalitás visszaszerzése (OPCIONÁLIS)
9. A Nintendo Wi-Fi Connection funkcionalitás visszaszerzése (OPCIONÁLIS)

::: tip

Continue to [Get Started](get-started)

:::
