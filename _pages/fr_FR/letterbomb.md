---
title: "Donations"
---

{% include toc title="Table of Contents" %}

LetterBomb est un exploit pour la Wii qui est déclenché à l'aide du Bureau Wii.

Pour des instructions sur la façon de formater correctement votre carte SD, veuillez consulter [ce guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Il est fortement recommandé de vérifier en raison de problèmes de formatage en FAT32.
{: .notice--info}

N'utilisez PAS les adresses MAC d'exemple affichées dans ce guide, car elles provoqueront simplement une erreur sur le site web de HackMii. Utilisez la vôtre !
{: .notice--warning}

### Prérequis
* An SD card formatted as FAT32 that is 32GB or less
* Une Wii sur le menu système version 4.3
* Un ordinateur Windows/MacOS/Linux avec une connexion Internet

### Instructions

1. Éteignez votre console.
1. On your Wii, go to `Wii Settings` -> `Internet` -> `Console Information` and make note of your MAC address.
1. Prenez note dans le coin supérieur droit de la lettre à côté de la version du système.
    + Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.
    + Assurez-vous également que vous êtes sur le menu système version 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Naviguez vers `Internet` > `Informations générales`.
1. Prenez note de votre adresse MAC COMPLET.

    ![](/images/wii/MacAddress.png)

1. Sur votre ordinateur, ouvrez le navigateur et allez sur [le site Web de HackMii](https://please.hackmii.com/).
1. Visit [please.hackmii.com](https://please.hackmii.com/), input your Wii MAC and region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. HackMii Screen
1. Cliquez sur un des deux boutons.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insérez votre carte SD dans votre ordinateur.
1. Copiez le dossier `private` et le fichier `boot.elf` de LetterBomb`.zip` à la racine de votre carte SD.
1. Extract the contents of the downloaded ZIP to the root of your SD card.
    + La carte SD doit être insérée dans le port carte SD située devant la Wii. Using a USB adapter plugged into the Wii's USB port will not work.
1. Take out your SD card and insert it in your Wii.
1. On your Wii, return to the Wii Menu and then open the Wii Message Board.
1. Load the red letter with a bomb icon.
    + Assurez-vous que la date sur votre Wii est correcte, sinon vous pourriez ne pas trouver la lettre.
    + In various scenarios, you may need to look at the previous or next day to find it.
    + If you don't see the red letter, check if any errors appear in the SD card sections in `Data Management`. S'il y a une erreur, il peut y avoir un problème avec le format de la carte SD ou le port carte SD de la Wii.
    + If your Wii freezes after clicking on the letter, you probably chose the wrong region when downloading the exploit. Redo Step 2 and select the correct region.
    + Si tout est correct et que la console gèle (freeze) toujours, continuez à re-essayer jusqu'à ce que cela fonctionne.
1. Si l'exploit a réussi, votre console aura chargé l'installeur HackMii.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}
