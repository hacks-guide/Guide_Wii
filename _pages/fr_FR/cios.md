---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

Si vous avez une Wii Mini, utilisez [ce guide](cios-mini) pour les cIOS au lieu de celui-ci. Tenter d'installer d'autres cIOS sur une Wii mini ne fonctionnera pas.
{: .notice--warning}

### Prérequis

* Une Wii
* Une carte SD ou une clé USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Assurez-vous que, si vous utilisez une carte SD, le verrou est en position déverrouillée, sinon vous ne serez pas en mesure de sélectionner les bonnes options dans l'installeur.
{: .notice--warning}

### Instructions

#### Section I - Téléchargement (uniquement requis si votre Wii n'a pas d'Internet)

Si votre Wii a une connexion Internet, vous pouvez sauter cette section.<br> Cependant, si vous rencontrez des erreurs comme `tcp_read timeout` et `net_gethostbyname failed:`, cela permettra à la Wii de sauter l'étape de téléchargement.
{: .notice--warning}

Si vous n'êtes pas sous Windows, vous pouvez télécharger & exécuter [ce script](/assets/files/d2x_offline_ios.sh), et il téléchargera les fichiers WAD pour vous.
{: .notice--info}

1. Éteignez votre console.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Sur votre ordinateur, téléchargez [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copiez tous les fichiers de `NUS Downloader.zip` vers un dossier sur votre ordinateur.
1. Exécutez `NUS Downloader.exe`.
1. Naviguez vers `Database` > `IOS` > `IOS38`, puis sélectionnez `v4123`.
    + Assurez-vous que "Pack WAD" est coché.
    + *NE PAS* cocher "Patch IOS". C'est ce que d2x cIOS Installer va faire.
1. Cliquez sur `Start NUS Download!`.
1. Répétez les étapes ci-dessus pour `IOS56 v5661`, `IOS57 v5918` et `IOS58 v6175`.
1. Une fois le processus terminé, il y aura un dossier nommé `titles` dans le même dossier que NUS Downloader.
1. Ouvrez le dossier `titles` et naviguez entre eux jusqu'à ce que vous trouviez les quatre fichiers WAD que vous avez téléchargés.
1. Placez chaque fichier WAD à la racine de votre carte SD ou de votre clé USB.
    + Là où vous placez les fichiers doit être sur le même périphérique contenant d2x cIOS Installer.

Les fichiers WAD devraient être sur votre carte SD ou clé USB comme ceci: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Section II - Installation

Si `d2x-v11-beta1` ne s'affiche pas, essayez d'abord de sélectionner `cIOS base` en premier, puis vérifiez à nouveau. Cela peut également se produire si votre carte SD est verrouillée.
{: .notice--info}

Sur chaque cIOS que vous essayez d'installer, vous verrez d'abord une grille d'IOS actifs sur la Wii. Appuyez simplement à nouveau sur A, et il sera installé. Ensuite, on vous montrera un écran de résultats, appuyez aussi sur A et passez au prochain cIOS.
{: .notice--info}

1. Copiez le dossier `apps` du fichier `d2x-cios-installer.zip` à la racine de votre carte SD ou de votre clé USB.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Lancez d2x cIOS Installer à partir de la liste des homebrew.
1. Si l'application demande quel IOS voulez-vous utiliser, sélectionnez IOS 58.
    + Cela devrait fonctionner dans presque tous les cas.
1. Maintenant, vous allez installer individuellement les cIOS de 248 à 251. Les réglages exacts sont listés ci-dessous.
    + Installation de cIOS 248

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <38>
        Select cIOS slot <248>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_248.png)

    + Installation de cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Installation de cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Installation de cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS version <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

Continuez vers [l'installation du Open Shop Channel](osc), maintenant que votre Wii a une protection de brique suffisante, vous pouvez installer le Open Shop Channel, un répertoire de confiance pour les homebrews qui peuvent être consultés sur et à partir de la Wii.
{: .notice--info}
