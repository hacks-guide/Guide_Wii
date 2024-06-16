---
layout: splash
title: "Wii Guide"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "The complete guide to modding your Wii, vWii, and Wii mini."
---

Since this guide has just been published, translations are a work-in-progress. Thank you for your patience!
{: .notice--info}

To get the most out of this guide, you should read this page before proceeding.
{: .notice--warning}

### ¿Qué es "homebrew"?

[**Homebrew**](https://es.wikipedia.org/wiki/Homebrew) se refiere a software no autorizado por Nintendo. In order to gain the ability to run homebrew on the Wii, the console must first be modified to run unsigned code.

Hay muchas cosas que puedes hacer con homebrew. A continuación se enlistan algunos de los usos más populares:

+ [Respaldar](bootmii) y [restaurar](bootmiirecover) los contenidos de la memoria de la consola (NAND), usando [BootMii](hbc).
+ Protect your Wii from bricks then add hacks to your Wii Menu using [Priiloader](priiloader).
+ Download new homebrew apps with the [Open Shop Channel](hbb).
+ [Patch game disc contents](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
+ Cambiar el aspecto del menú de Wii, usando [MyMenuify](themes).
+ Back up your discs with [CleanRip](/dump-games) and installed games and titles with [Yet Another BlueDump MOD](dump-wads).
+ Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
+ Back up and restore your Wii save files with [SaveGame Manager GX](https://oscwii.org/library/app/savegame_manager_gx).
+ Restore discontinued online services using [RiiConnect24](riiconnect24), [Wiimmfi](wiimmfi) and [WiiLink](wiilink).
+ Back up and restore your GameCube save files using [GCMM](gcsaves).

### What does the guide install?

This guide aims to do the following, including optional sections:

+ Modify your Wii using one of many exploits, with the end goal of reaching the HackMii installer
+ Install BootMii and the Homebrew Channel
+ Make a backup of critical system files
+ Instalar Priiloader
+ Install the Open Shop Channel
+ Recommended homebrew to use on your Wii
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection

### What should I know before starting?

+ Ejecutar homebrew en la Nintendo Wii puede hacerse de forma gratuita, aprovechando diversas vulnerabilidades en el software de la consola. Las modificaciones que instales en tu consola al seguir esta guía te darán acceso fácil y permanente a homebrew. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### ¿Estás listo?

The guide has nine sections in total. These are listed below:

1. Choosing and using an exploit (REQUIRED)
1. Installing the Homebrew Channel and BootMii (REQUIRED)
1. Making a NAND backup with BootMii (REQUIRED)
1. Installing Priiloader (REQUIRED)
1. Installing the Open Shop Channel (RECOMMENDED)
1. Installing cIOS (RECOMMENDED)
1. Discovering Recommended Homebrew (RECOMMENDED)
1. Regaining WiiConnect24 Functionality (OPTIONAL)
1. Regaining Nintendo Wi-Fi Connection Functionality (OPTIONAL)

Comienza por [elegir un exploit](get-started).
{: .notice--info}
