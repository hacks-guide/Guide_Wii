---
title: "Sauvegarde avec Bootmii"
---

{% include toc title="Table of Contents" %}

BootMii permet de sauvegarder et de restaurer le stockage NAND de votre Wii. Cette page vous guidera dans la sauvegarde de la NAND de votre Wii sur une carte SD, que vous pourrez ensuite utiliser comme bon vous semble.

Les Wii édition familiale (sans ports pour manettes GameCube) **NE PEUVENT PAS** restaurer une sauvegarde de la NAND. Ceci est dû à l'absence de ports GameCube qui sont requis sur les Wii non-boot2 pour entrer le code de confirmation de restauration. Quoi qu'il en soit, il est toujours recommandé d'en faire une sur ces consoles.
{: .notice--danger}

Vous avez besoin d'une carte **SD** pour utiliser BootMii, mais surtout pour créer une sauvegarde de la NAND. Si vous n'avez pas de carte SD à portée de main maintenant, vous pouvez sauter cette page, mais il est **FORTEMENT RECOMMANDÉ** de revenir à cette page plus tard pour sauvegarder votre NAND.
{: .notice--warning}

Naviguer sur BootMii n'est pas possible avec une manette Wii. Vous devez utiliser les boutons POWER et RESET de votre console, ou une manette GameCube connecté au port 1. Pour naviguer entre les options, appuyez le bouton POWER sur la Wii (ou à gauche/droite sur la croix directionnelle sur une manette GameCube). Pour sélectionner une option, appuyez sur RESET sur la Wii ou A sur votre manette GameCube. Vous devrez utiliser un contrôleur GameCube pour restaurer une sauvegarde de la NAND dans le futur si BootMii est installé en tant qu'IOS.
{: .notice--info}

Si le bouton `Lancez BootMii` n'apparaît pas dans la Chaîne Homebrew, [relancez l'installateur HackMii](hackmii) et installez BootMii.
{: .notice--warning}

Si l'écran reste noir et que le voyant du lecteur de disque bleu clignote au lancement de BootMii, il vous manque les fichiers BootMii sur votre carte SD. Téléchargez [ce fichier zip](https://static.hackmii.com/bootmii_sd_files.zip) et extrayez-le à la racine de votre carte SD, puis réessayez.
{: .notice--warning}

### Prérequis

* Une carte SD avec un minimum de 512 Mo d'espace libre (1Go ou plus recommandé)

### Instructions

Si BootMii est installé en tant que boot2, vous devrez lancer BootMii en redémarrant la console. Sautez les étapes 1 et 2 si c'est le cas.
{: .notice--info}

1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Appuyez sur le bouton HOME, puis sélectionnez "Lancer BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. Sélectionnez le bouton Options (l'icône avec les engrenages).

    ![](/images/bootmii/BootMii_Gears.png)

1. Sélectionnez le premier bouton à gauche.

    ![](/images/bootmii/BootMii_Backup.png)

1. La sauvegarde de la NAND va commencer. Vous pouvez regarder la progression sur l'écran.
    + Les « mauvais blocs » sont normaux et proviennent principalement de l'usine en raison du binage de la NAND. Ne vous inquiétez pas quand vous en voyez sur une sauvegarde.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. Idéalement, tous les blocs devraient être verts après le processus de vérification.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Appuyez sur le bouton Retour (celui avec une flèche), puis appuyez sur le bouton Menu Wii ou sur le bouton Homebrew Channel pour quitter BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Remarque : **restaurer une sauvegarde de la NAND est généralement un dernier recours**. Il y a souvent de meilleures façons de débriquer votre console.
Essayez de faire de votre mieux pour [comprendre pourquoi/comment votre console est briqué](bricks) et inverser l'action qui l'a causé en premier lieu.
Pour restaurer à partir d'une sauvegarde de la NAND sur votre carte SD, vous pouvez suivre les instructions pour [RestoreMii](bootmiirecover) (Wii originale uniquement).
</div>

Deux fichiers ont été créés à la racine de votre carte SD : `nand.bin` et `keys.bin`. `nand.bin` est la mémoire interne de votre Wii, tandis que `keys.bin` sont les clés de votre console.
{: .notice--info}

[Continuer sur l'installation de Priiloader](priiloader)<br> Priiloader ajoute un niveau secondaire de protection contre les brique et est fortement recommandé même si BootMii a été installé en tant que boot2. C'est particulièrement important pour les utilisateurs de BootMii sur IOS.
{: .notice--info}
