---
layout: splash
title: "Wii Hack útmutató"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "A teljes útmutató a Wii, vWii és Wii mini moddingjához."
---

Mivel ez az útmutató most jelent meg, a fordítások még folyamatban vannak. Köszönjük a türelmedet!
{: .notice--info}

Ahhoz, hogy a legtöbbet hozd ki ebből az útmutatóból, olvasd el ezt az oldalt, mielőtt folytatnád.
{: .notice--warning}

### Mi a homebrew?

**Homebrew** refers to software that was not authorized by the original creator of a piece of hardware - in this case, Nintendo. In order to gain the ability to run homebrew on the Wii, the console must first be modified to run unsigned code.

Here are some common examples of what homebrew can do for your Wii:

+ [Backup](bootmii) and [restore](bootmiirecover) your Wii's NAND (system memory)
+ Enhance the [brick protection](priiloader) of your Wii
+ Download new homebrew apps with the [Open Shop Channel](osc)
+ [Patch game disc contents](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
+ Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
+ Back up your [discs](dump-games) and [other installed titles](dump-wads)
+ Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
+ Install a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
+ Back up and restore your [Wii](wii-saves) and [GameCube](gcsaves) save files
+ Restore online functionality to both [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](wiimmfi)

### Mit telepít ez az útmutató?

This guide aims to do the following, including optional sections:

+ Modify your Wii using one of many exploits, with the end goal of reaching the HackMii installer
+ Install BootMii and the Homebrew Channel
+ Make a backup of critical system files
+ A Priiloader telepítése
+ Az Open Shop Channel telepítése
+ Ajánlott Homebrew-ok a Wii-odra
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection

### What should I know before starting?

+ Homebrew is 100% free, and the process of modifying your Wii is also free. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### Kész?

Az útmutató összese 9 fejezettel rendelkezik. Ezek az alábbiak:

1. Exploit kiválasztása és használata (KÖTELEZŐ)
1. A Homebrew Channel és a BootMii telepítése (KÖTELEZŐ)
1. NAND mentés készítése a BootMii-vel (KÖTELEZŐ)
1. A Priiloader telepítése (KÖTELEZŐ)
1. Az Open Shop Channel telepítése (AJÁNLOTT)
1. A cIOS telepítése (AJÁNLOTT)
1. Az ajánlott Homebrew-ok felfedezése (AJÁNLOTT)
1. A WiiConnect24 funkcionalitás visszaszerzése (OPCIONÁLIS)
1. A Nintendo Wi-Fi Connection funkcionalitás visszaszerzése (OPCIONÁLIS)

Folytatás a [Kezdeti lépésekkel](get-started)
{: .notice--info}
