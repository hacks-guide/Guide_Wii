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

#### Section I - Téléchargement

If your Wii has an Internet connection, you may skip this section.<br> However, If you encounter any errors like `net_init failed`, `net_gethostbyname failed:`, or any other issues during the downloading stage this will allow the Wii to skip the downloading step.
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


1. Copiez le dossier `apps` du fichier `d2x-cios-installer.zip` à la racine de votre carte SD ou de votre clé USB.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Lancez d2x cIOS Installer à partir de la liste des homebrew.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + Installation de cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Installation de cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Installation de cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br> Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
