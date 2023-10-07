---
title: "d2xl cIOS pour Wii mini (experimental)"
---

{% include toc title="Table of Contents" %}

Si vous avez besoin d'aide pour tout ce qui concerne ce tutoriel, veuillez rejoindre [le serveur Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recommandé)
{: .notice--info}

Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

Ce guide est uniquement pour les Wii Mini. Si vous avez une Wii, suivez [ce guide](cios) à la place.
{: .notice--warning}

N'essayez pas d'installer un IOS pour Wii ou un Menu Système sur la Wii mini. Cela va probablement [briquer](bricks#ios-brick) votre console.
{: .notice--warning}

Cette version de `d2x cIOS installer` a été initialement développé pour la vWii de la Wii U par DaveBaol et les cIOS pour la Wii Mini ont étés créés par Leseratte. La page originale de téléchargement peut être trouvée [ici](https://wii.leseratte10.de/d2xl-cIOS/). La page GitHub de Leseratte peut être trouvée [ici](https://github.com/Leseratte10/d2xl-cios). Veuillez noter que ce cIOS est encore expérimental, bien qu'aucun problème de fonctionnalité n'ait été signalé.
{: .notice--info}

### Prérequis

* Un Wii Mini avec la Chaîne Homebrew installée
* Une clé USB
* [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) par Laseratte

### Instructions

#### Section I - Téléchargement

1. Éteignez votre console.
1. Insérez votre clé USB dans votre ordinateur.
1. Créez un dossier nommé `apps` à la racine de votre clé USB s'il n'existe pas déjà.
1. Copiez le dossier `d2x-cios-installer` du fichier `d2xl_wii_mini_cIOS_installer.zip` vers le dossier `apps` de votre clé USB.
1. Réinsérez votre clé USB dans votre console.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Lancez d2x cIOS Installer parmi la liste des homebrew.

#### Section II - Installation

1. Sélectionnez `Continue`.
1. Définissez les options à ce qui suit :
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Prenez note du numéro de version en dessous de "notes" (`IOS57-64-` se termine par `v31776` ou `v31775`)
1. Appuyez sur A pour installer.
    + Si l'installation échoue avec une version `TMD version mismatch` , appuyez sur la gauche ou la droite avec la croix directionnelle sur l'option `Select cIOS base` jusqu'à ce que le numéro de version soit différent de celui que vous avez essayé auparavant. Le numéro 57 ne changera pas.
1. Une fois l'installation terminée, quittez l'installateur.

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

#### Activer Ethernet

Si vous souhaitez utiliser Wiimmfi avec Ethernet sur une Wii mini, vous devez exécuter l'application [Ethernet Enabler](/assets/files/Wii_Mini_Ethernet_Enable.zip) réalisée par Fullmetal5. Pour l'exécuter, décompressez-le simplement dans le dossier `apps` de votre clé USB et exécutez-le depuis la Chaîne Homebrew.

Les consoles Wii et Wii Mini ne fonctionnent qu'avec les adaptateurs Ethernet avec la puce AX88772. Veuillez vérifier que le produit est compatible avant d'acheter. Celui-ci de UGREEN est connu pour être compatible : [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[Cliquez ici pour revenir à l'index du site.](site-navigation)
{: .notice--info}
