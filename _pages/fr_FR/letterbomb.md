---
title: "LetterBomb"
---

{% include toc title="Table of Contents" %}

Pour des instructions sur la façon de formater correctement votre carte SD, veuillez consulter [ce guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.
{: .notice--info}

N'utilisez PAS les adresses MAC d'exemple affichées dans ce guide, car elles provoqueront simplement une erreur sur le site web de HackMii. Utilisez la vôtre !
{: .notice--warning}

LetterBomb is an exploit for the Wii that is triggered using the Wii Message Board.

### Prérequis
* Une carte SD formatée en FAT32
* A Wii on System Menu version 4.3
* Un ordinateur Windows/MacOS/Linux avec une connexion Internet

### Instructions

1. Éteignez votre console.
1. Allez sur `Paramètres Wii`.
1. Prenez note dans le coin supérieur droit de la lettre à côté de la version du système.
    + Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.
    + Also, ensure that you are on System Menu version 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Prenez note de votre adresse MAC COMPLET.

    ![](/images/wii/MacAddress.png)

1. Sur votre ordinateur, ouvrez le navigateur et allez sur [le site Web de HackMii](https://please.hackmii.com/).
1. Entrez votre adresse MAC Wii et votre région.
1. Soyez-sûr que `Bundle the HackMii Installer for me!` est coché.
1. Cliquez sur un des deux boutons.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insérez votre carte SD dans votre ordinateur.
1. Copiez le dossier `private` et le fichier `boot.elf` de LetterBomb`.zip` à la racine de votre carte SD.
1. Réinsérez votre carte SD dans votre console.
    + La carte SD doit être insérée dans le port carte SD située devant la Wii. L'utilisation d'un adaptateur SD vers USB branché dans le port USB de la Wii ne marchera pas.
1. Sur votre Wii, revenez au menu Wii.
1. Allez sur le bureau Wii (bouton avec l'enveloppe).
1. Ouvrez la lettre rouge avec une bombe.
    + Assurez-vous que la date sur votre Wii est correcte, sinon vous pourriez ne pas trouver la lettre.
    + Dans certains cas, vous devrez peut-être vérifier les messages du lendemain ou d'hier pour que la lettre apparaisse.
    + If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. S'il y a une erreur, il peut y avoir un problème avec le format de la carte SD ou le port carte SD de la Wii.
    + Si votre Wii gèle (freeze) après avoir cliqué sur la lettre, vous avez probablement choisi la mauvaise région sur le site de LetterBomb. Retournez à l'étape 2 et vérifiez que vous avez choisi la bonne région.
    + Si tout est correct et que la console gèle (freeze) toujours, continuez à re-essayer jusqu'à ce que cela fonctionne.
1. Si l'exploit a réussi, votre console aura chargé l'installeur HackMii.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}
