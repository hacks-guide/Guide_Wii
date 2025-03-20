# BootMii Recovery (RestoreMii)

Ce guide fournira des instructions sur la façon de restaurer une sauvegarde de votre NAND avec BootMii. Veuillez garder à l'esprit que c'est généralement la méthode de <strong>dernier recours</strong> pour réparer un brique si vous en avez un, et si cela ne résout pas votre problème, vous devrez peut-être demander de l'aide. If you are even able to enter BootMii, enter the Homebrew Channel instead, and try your best to [identify what caused the brick](bricks) and reverse it.

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Sautez les étapes 1 et 2 si c'est le cas.

:::

::: warning

If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Téléchargez [ce fichier zip](https://static.hackmii.com/bootmii_sd_files.zip) et extrayez-le à la racine de votre carte SD, puis réessayez.

:::

::: danger

Les Wii édition familiale (sans ports pour manettes GameCube) **NE PEUVENT PAS** restaurer une sauvegarde de la NAND. Ceci est dû à l'absence de ports GameCube qui sont requis sur les Wii non-boot2 pour entrer le code de confirmation de restauration. Pour obtenir de l'aide supplémentaire, veuillez demander au support.

:::

::: danger

NE PAS restaurer une sauvegarde de NAND non vérifiée, ou une autre qui ne provient pas de votre Wii: cela peut conduire à un BRIQUE ENCORE PIRE. The same also goes for faulty SD cards.

:::

## Prérequis

- An earlier NAND Backup made by [BootMii](https://wii.guide/bootmii)

## Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

Par exemple, si vous voulez restaurer les données de votre Wii Message Board, utilisez Dolphin pour importer votre sauvegarde de la NAND. ff\`, copiez-le sur votre carte SD et utilisez [WiiXplorer](https://oscwii.org/library/app/wiixplorer) pour le restaurer à l'emplacement correspondant.

Si vous voulez restaurer les données de sauvegarde d'un jeu, utilisez Dolphin pour importer votre sauvegarde de la NAND, utiliser `Outils > Exporter toutes les sauvegardes Wii` pour exporter toutes vos sauvegardes sur votre carte SD, et utilisez la gestion des données pour la déplacer vers votre Wii.

## Important notes

- Si vous n'avez rien fait pour causer une brique (ou que vous démarrez votre Wii après un certain temps), alors c'est probablement un [brique Wi-Fi](bricks#wi-fi-brick).

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. Pour naviguer avec une manette de GameCube, utilisez la croix directionnelle. Pour sélectionner, appuyez sur A.

## Instructions

1. Lancez la Chaîne Homebrew.

2. Press the HOME Button, then select "Launch BootMii".

    - Si vous êtes toujours en mesure d'aller sur BootMii, essayez d'aller sur la Chaîne Homebrew à la place afin que vous puissiez essayer de [identifier et réparer le brique](bricks) en utilisant d'autres méthodes.

    ![](/images/bootmii/BootMii_HBC.png)

3. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

8. Une fois la restauration terminée, vous devriez voir un texte dire `I HAZ SUCCESS !` (en cas de succès), sinon `I HAZ FAIL` (en cas d'échec). Appuyez sur n'importe quel bouton de votre console Wii ou de votre manette GameCube.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Si vous avez restauré une sauvegarde NAND pour réparer un brique et que cela n'a pas fonctionné, merci de regarder [la partie sur les briques](bricks) dans le guide.

:::

::: tip

[Cliquez ici pour revenir à l'index du site.](site-navigation)
{: .notice--info}

:::
