---
title: "Installer la Chaîne Homebre sur Dolphin Emulator"
---

{% include toc title="Table of Contents" %}

Sur Dolphin Emulator version `5.0-4588` ou ultérieur, le Menu Wii peut être facilement installé via Dolphin lui-même. Une fois installé, la Chaîne Homebrew peut être installée, mais pas de la même manière qu'une Wii physique.

### Prérequis

* Un ordinateur Windows/MacOS/Linux avec une connexion Internet
* [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` ou ultérieur
* La dernière version de [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

### Instructions

1. Si vous ne l'avez pas déjà fait, installez le Menu Wii sur Dolphin Emulator en allant dans `Outils > Effectuer une mise à jour en ligne`.

    ![](/images/homebrew-dolphin/system-update.png)

1. Téléchargez `Open_HBC_(version)_LULZ.wad` depuis la page mentionnée ci-dessus.
1. Ouvrez Dolphin Emulator.
1. Sélectionnez `Outils > Installer un WAD` et sélectionnez `Open_HBC_(version)_LULZ.wad`.

    ![](/images/homebrew-dolphin/ohbc-file.png)

1. Sélectionnez `Outils > Charger le Menu Système Wii`. La chaîne devrait maintenant apparaître.

    ![](/images/homebrew-dolphin/hbc-installed.png)

### Post-installation, installation d'applications Homebrew via Open Shop Channel

1. Téléchargez l'Open Shop Channel [ici](https://oscwii.org/library/app/homebrew_browser). Vous pouvez également télécharger OSCDL et faire ce processus manuellement.
1. Arrêtez l'émulation (si elle est en cours), et ouvrez la fenêtre `Configurer > Wii` dans Dolphin Emulator.
1. Activez `Synchroniser automatiquement avec le dossier`. Vous pouvez également ajuster la `taille du fichier de carte SD` à un paramètre plus grand - cependant, dans la plupart des cas, `Auto` devrait suffire.
1. Ouvrez le `Dossier de synchronisation SD`. Sous Windows, il suffit de coller le chemin d'accès au dossier dans le menu Démarrer, l'explorateur Windows ou Exécuter.
1. Extrayez toutes les applications homebrew dans le dossier `WiiSDSync`. Le résultat final devrait ressembler à ceci :

    ![](/images/homebrew-dolphin/apps-folder.png)

1. Lancez le Menu Wii et ouvrez la Chaîne Homebrew. Vos nouvelles applications installées devraient apparaître !

    ![](/images/homebrew-dolphin/hbc-apps.png)
