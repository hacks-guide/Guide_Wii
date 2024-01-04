---
title: "Sauvegarde avec Bootmii"
---

{% include toc title="Table of Contents" %}

You need an **SD card** to create a NAND backup using BootMii. If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.

Les Wii édition familiale (sans ports pour manettes GameCube) **NE PEUVENT PAS** restaurer une sauvegarde de la NAND. Ceci est dû à l'absence de ports GameCube qui sont requis sur les Wii non-boot2 pour entrer le code de confirmation de restauration. Quoi qu'il en soit, il est toujours recommandé d'en faire une sur ces consoles.
{: .notice--danger}

Vous avez besoin d'une carte **SD** pour utiliser BootMii, mais surtout pour créer une sauvegarde de la NAND. Si vous n'avez pas de carte SD à portée de main maintenant, vous pouvez sauter cette page, mais il est **FORTEMENT RECOMMANDÉ** de revenir à cette page plus tard pour sauvegarder votre NAND.
{: .notice--warning}

Naviguer sur BootMii n'est pas possible avec une manette Wii. Vous devez utiliser les boutons POWER et RESET de votre console, ou une manette GameCube connecté au port 1. Pour naviguer entre les options, appuyez le bouton POWER sur la Wii (ou à gauche/droite sur la croix directionnelle sur une manette GameCube). Pour sélectionner une option, appuyez sur RESET sur la Wii ou A sur votre manette GameCube. One of BootMii's most important features is the ability to backup and restore your Wii's NAND storage. We will be going over how to perform a NAND backup. You can then restore from that backup for any reason.
{: .notice--info}

If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.
{: .notice--warning}

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

### Prérequis

* An SD card with at least 512MB of free space

### Instructions

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Sautez les étapes 1 et 2 si c'est le cas.
{: .notice--info}

1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. Vous devriez voir une image similaire à ce qui suit maintenant sur votre écran :

    ![](/images/bootmii/BootMii_Main.png)

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Sélectionnez le premier bouton à gauche.

    ![](/images/bootmii/BootMii_Backup.png)

1. La sauvegarde de la NAND va commencer. Vous pouvez regarder la progression sur l'écran.
    + "Bad Blocks" are normal. Ne vous inquiétez pas quand vous en voyez sur une sauvegarde.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After this step, it will verify the backup. Idéalement, tous les blocs devraient être verts après le processus de vérification.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. Il y a souvent de meilleures façons de débriquer votre console.
Essayez de faire de votre mieux pour [comprendre pourquoi/comment votre console est briqué](bricks) et inverser l'action qui l'a causé en premier lieu.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
</div>

BootMii as boot2 is recommended, but only available to install on early Wii consoles. Otherwise, it can only be installed as an IOS. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` est la mémoire interne de votre Wii, tandis que `keys.bin` sont les clés de votre console.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. C'est particulièrement important pour les utilisateurs de BootMii sur IOS.
{: .notice--info}
