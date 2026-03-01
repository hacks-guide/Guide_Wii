# Installer la Chaîne Homebre sur Dolphin Emulator

Sur Dolphin Emulator version `5.0-4588` ou ultérieur, le Menu Wii peut être facilement installé via Dolphin lui-même. Une fois installé, la Chaîne Homebrew peut être installée, mais pas de la même manière qu'une Wii physique.

## Prérequis

- A Windows/macOS/Linux computer with an Internet connection
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` ou ultérieur
- La dernière version de [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. Si vous ne l'avez pas déjà fait, installez le Menu Wii sur Dolphin Emulator en allant dans `Outils > Effectuer une mise à jour en ligne`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Téléchargez `Open_HBC_(version)_LULZ.wad` depuis la page mentionnée ci-dessus.

3. Ouvrez Dolphin Emulator.

4. Select `Tools` > `Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools` > `Load Wii System Menu`. La chaîne devrait maintenant apparaître.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-installation, installation d'applications Homebrew via Open Shop Channel

1. Download the Open Shop Channel [on the OSC website](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Vous pouvez également télécharger OSCDL et faire ce processus manuellement.

2. Stop the emulation (if running), and open the `Config` > `Wii` window in Dolphin Emulator.

3. Activez `Synchroniser automatiquement avec le dossier`. Vous pouvez également ajuster la `taille du fichier de carte SD` à un paramètre plus grand - cependant, dans la plupart des cas, `Auto` devrait suffire.

4. Ouvrez le `Dossier de synchronisation SD`. Sous Windows, il suffit de coller le chemin d'accès au dossier dans le menu Démarrer, l'explorateur Windows ou Exécuter.

5. Extrayez toutes les applications homebrew dans le dossier `WiiSDSync`. Le résultat final devrait ressembler à ceci :

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Lancez le Menu Wii et ouvrez la Chaîne Homebrew. Vos nouvelles applications installées devraient apparaître !

   ![](/images/homebrew-dolphin/hbc-apps.png)

---

::: tip

[Click here to go back to the site index.](site-navigation)
{: .notice--info}

:::
