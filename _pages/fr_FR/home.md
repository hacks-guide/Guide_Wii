---
layout: splash
title: "Wii Hacks Guide"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "Le guide complet pour modder votre Wii (et votre Wii mini)."
---

Étant donné que ce guide vient d'être publié, les traductions sont en cours. Merci pour votre patience!
{: .notice--info}

Pour tirer le meilleur parti de ce guide, vous devriez lire cette page avant de continuer.
{: .notice--warning}

### Qu'est-ce que c'est Homebrew ?

**Homebrew** fait référence à un logiciel qui n'a pas été autorisé par le créateur original d'un matériel électronique - dans ce cas, Nintendo. Afin d'obtenir la possibilité d'exécuter des homebrew sur la Wii, la console doit d'abord être modifiée pour exécuter du code non signé.

Voici quelques exemples communs de ce que les homebrew peuvent faire pour votre Wii:

+ [Sauvegarder](bootmii) et [restaurer](bootmiirecover) la NAND de votre Wii (mémoire système)
+ Améliorer la [protection en cas de brique](priiloader) de votre Wii
+ Télécharger de nouvelles applications homebrew avec le [Open Shop Channel](osc)
+ [Patcher du contenu sur disque](riivolution) pour charger des modifications de jeux
+ Transformer votre Wii en [Media Center](wiimc)
+ Installer des [thèmes](themes) sur le Menu Wii et sur les homebrew les plus utilisés
+ Sauvegarder vos [disques](dump-games) et vos [autres titres installés](dump-wads)
+ Installer un lanceur [USB](usb-loaders) pour lancer des sauvegardes de jeux Wii à partir d'un périphérique de stockage externe
+ Sauvegarder et restaurer vos sauvegardes de jeux/applications [Wii](wii-saves) et [GameCube](gcsaves)
+ Restaurer les fonctionnalités en ligne de [WiiConnect24](wiiconnect24) et de [Nintendo Wi-Fi Connection](wiimmfi)

### Qu'est-ce que le guide installe ?

Ce guide vise à faire ce qui suit, y compris les sections facultatives :

+ Modifier votre Wii en utilisant l'un des nombreux exploits, avec l'objectif final d'atteindre l'installateur HackMii
+ Installer BootMii et la chaîne Homebrew
+ Faire une sauvegarde des fichiers système critiques
+ Installer Priiloader
+ Installer l'Open Shop Channel
+ Des homebrews recommandés à utiliser sur votre Wii
+ Restaurer les fonctionnalités de WiiConnect24 et de Nintendo Wi-Fi Connection

### Que dois-je savoir avant de commencer?

+ Homebrew est 100% gratuit, et le processus de modification de votre Wii est également gratuit. Quiconque essaie de vous convaincre du contraire tente probablement de [vous arnaquer](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered, nor is the Wii U's vWii.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### Ready?

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

Continue to [Get Started](get-started)
{: .notice--info}
