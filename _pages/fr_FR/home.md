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
+ Install a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
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
+ Ce guide fonctionne sur toutes les versions du menu du système en fonction de l'exploit, mais **il est recommandé de mettre à jour vers la 4.3 (la dernière version du système) ** si possible.
+ **Ce guide s’applique UNIQUEMENT aux Wiis pour les consommateurs !** Cela veut dire que les consoles dédiées au développement ne sont pas couvert, pas plus que la vWii de la Wii U.
+ Selon ce que vous avez l'intention de faire avec votre Wii moddée, vous devrez peut-être apporter quelques modifications à la mémoire du système qui ont un risque de briquage (rendre la console inopérante). Tant que vous suivez ce guide correctement, vous devriez être bien, mais pour des conseils généralistes sur la prévention de briques, vous pouvez voir [cette page](bricks#brick-prevention).
+ Les différences entre la Wii et la Wii mini sont assez significatives. Cela signifie que dans certains cas, quelque chose qui est normalement inoffensif pour la Wii pourrait causer un [brique sévère](bricks#wi-fi-brick) pour la Wii Mini. Faites donc preuve de prudence si vous prévoyez d'en modder une!
+ Soyez également très prudent si vous moddez une [Wii Coréenne](bricks#korean-kiierror-003-brick).

### Prêt(e) ?

Le guide compte neuf sections au total. Celles-ci sont listées ci-dessous:

1. Choisir et utiliser un exploit (REQUIS)
1. Installation de la chaîne Homebrew et de BootMii (REQUIS)
1. Faire une sauvegarde de la NAND avec BootMii (REQUIS)
1. Installation de Priiloader (REQUIS)
1. Installation de l'Open Shop Channel (RECOMMANDÉ)
1. Installation des cIOS (RECOMMANDÉ)
1. Découvrir les Homebrews recommandés (RECOMMANDÉ)
1. Re-gagner l'accès aux fonctionnalités de WiiConnect24 (OPTIONNEL)
1. Re-gagner l'accès aux fonctionnalités du Nintendo Wi-Fi Connection (OPTIONNEL)

Continuez vers [Pour démarrer](get-started)
{: .notice--info}
