---
title: "Récupération avec BootMii"
---

{% include toc title="Table of Contents" %}

Ce guide fournira des instructions sur la façon de restaurer une sauvegarde de votre NAND avec BootMii. Veuillez garder à l'esprit que c'est généralement la méthode de <strong>dernier recours</strong> pour réparer un brique si vous en avez un, et si cela ne résout pas votre problème, vous devrez peut-être demander de l'aide. Si vous êtes toujours en mesure d'aller sur BootMii, essayez d'aller sur la Chaîne Homebrew à la place afin que vous puissiez essayer de [identifier et réparer le brique](bricks) en utilisant d'autres méthodes.

Si BootMii est installé en tant que boot2, vous devrez lancer BootMii en redémarrant la console. Sautez les étapes 1 et 2 si c'est le cas.
{: .notice--info}

Si l'écran reste noir et que le voyant du lecteur de disque bleu clignote au lancement de BootMii, il vous manque les fichiers BootMii sur votre carte SD. Téléchargez [ce fichier zip](https://static.hackmii.com/bootmii_sd_files.zip) et extrayez-le à la racine de votre carte SD, puis réessayez.
{: .notice--warning}


Les Wii édition familiale (sans ports pour manettes GameCube) **NE PEUVENT PAS** restaurer une sauvegarde de la NAND. Ceci est dû à l'absence de ports GameCube qui sont requis sur les Wii non-boot2 pour entrer le code de confirmation de restauration. Pour obtenir de l'aide supplémentaire, veuillez demander au support.
{: .notice--danger}

NE PAS restaurer une sauvegarde de NAND non vérifiée, ou une autre qui ne provient pas de votre Wii: cela peut conduire à un BRIQUE ENCORE PIRE. Il en va de même pour l'utilisation de cartes SD défectueuses.
{: .notice--danger}

### Prérequis

* Une sauvegarde antérieure de la NAND faite par [BootMii](bootmii)

### Restauration des données individuelles à partir d'une sauvegarde de la NAND

Il y a probablement un moyen beaucoup plus sûr et plus rapide de ramener des données individuelles sur votre Wii, impliquant probablement l'utilisation de l'émulateur de Dolphin.

Par exemple, si vous voulez restaurer les données de votre Wii Message Board, utilisez Dolphin pour importer votre sauvegarde de la NAND. Dans Dolphin, allez dans `Fichier -> Ouvrir le dossier utilisateur` et trouvez `Wii/title/00000001/00000002/data/cdb. ff`, copiez-le sur votre carte SD et utilisez [WiiXplorer](https://oscwii.org/library/app/wiixplorer) pour le restaurer à l'emplacement correspondant.

Si vous voulez restaurer les données de sauvegarde d'un jeu, utilisez Dolphin pour importer votre sauvegarde de la NAND, utiliser `Outils > Exporter toutes les sauvegardes Wii` pour exporter toutes vos sauvegardes sur votre carte SD, et utilisez la gestion des données pour la déplacer vers votre Wii.

### Notes préliminaires importantes

+ Si vous n'avez rien fait pour causer une brique (ou que vous démarrez votre Wii après un certain temps), alors c'est probablement un [brique Wi-Fi](bricks#wi-fi-brick).

+ Si vous avez BootMii comme IOS installé, RestoreMii vous demandera le code Konami via un contrôleur GameCube.

+ Vous devez utiliser les boutons POWER (pour aller à gauche) et RESET (pour sélectionner) de votre console, ou une manette GameCube connecté au port 1. Pour naviguer avec une manette de GameCube, utilisez la croix directionnelle. Pour sélectionner, appuyez sur A.

### Instructions

1. Lancez la Chaîne Homebrew.
1. Appuyez sur le bouton HOME, puis sélectionnez "Lancer BootMii".
1. Sélectionnez le bouton Options (l'icône avec les engrenages).

    ![](/images/BootMii/BootMii_Gears_Icon.png)

1. Sélectionnez le bouton RestoreMii.

    ![](/images/BootMii/BootMii_Red_Arrow.png)

1. Si BootMii est installé en tant qu'IOS, entrez le code Konami sur votre manette GameCube : ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START
1. Une fois la restauration terminée, vous devriez voir un texte dire `I HAZ SUCCESS !` (en cas de succès), sinon `I HAZ FAIL` (en cas d'échec). Appuyez sur n'importe quel bouton de votre console Wii ou de votre manette GameCube.

Si vous avez restauré une sauvegarde NAND pour réparer un brique et que cela n'a pas fonctionné, merci de regarder [la partie sur les briques](bricks) dans le guide.
{: .notice--info}

[Cliquez ici pour revenir à l'index du site.](site-navigation)
{: .notice--info}
