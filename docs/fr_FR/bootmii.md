# Sauvegarde avec Bootmii

You need an **SD card** to create a NAND backup using BootMii.
Si vous n'avez pas de carte SD à portée de main maintenant, vous pouvez sauter cette page, mais il est **FORTEMENT RECOMMANDÉ** de revenir à cette page plus tard pour sauvegarder votre NAND.

::: warning

Vous avez besoin d'une carte **SD** pour utiliser BootMii, mais surtout pour créer une sauvegarde de la NAND. If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.

:::

## Prérequis

- An SD card with at least 512MB of free space

## Instructions

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Sautez les étapes 1 et 2 si c'est le cas.

:::

1. Allumez votre console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    {: .notice--warning}

    If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.

    :::

    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

    :::

4. Vous devriez voir une image similaire à ce qui suit maintenant sur votre écran :

    ![](/images/bootmii/BootMii_Main.png)

    {: .notice--info}

    Naviguer sur BootMii n'est pas possible avec une manette Wii.
    Vous devez utiliser les boutons POWER et RESET de votre console, ou une manette GameCube connecté au port 1.
    To navigate between options, press POWER. To select an option, press RESET.

    :::

5. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

6. Sélectionnez le premier bouton à gauche.

    ![](/images/bootmii/BootMii_Backup.png)

7. La sauvegarde de la NAND va commencer. Vous pouvez regarder la progression sur l'écran.

    - "Bad Blocks" are normal. Ne vous inquiétez pas quand vous en voyez sur une sauvegarde.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After this step, it will verify the backup. Idéalement, tous les blocs devraient être verts après le processus de vérification.

    - If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long as all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. There are often better ways to unbrick your console.

Essayez de faire de votre mieux pour [comprendre pourquoi/comment votre console est briqué](bricks) et inverser l'action qui l'a causé en premier lieu.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Save the file and exit.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Ouvrez Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. C'est particulièrement important pour les utilisateurs de BootMii sur IOS.

:::
