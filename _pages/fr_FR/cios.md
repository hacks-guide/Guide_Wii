---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

If you have a Wii mini, install [this cIOS](cios-mini) instead. Attempting to install any other cIOS on a Wii mini won't work.
{: .notice--warning}

### Prérequis

* Une Wii
* Une carte SD ou une clé USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Assurez-vous que, si vous utilisez une carte SD, le verrou est en position déverrouillée, sinon vous ne serez pas en mesure de sélectionner les bonnes options dans l'installeur.
{: .notice--warning}

### Instructions

#### Section I - Téléchargement

If your Wii has an Internet connection, you may skip this section.
{: .notice--warning}

Si vous n'êtes pas sous Windows, vous pouvez télécharger & exécuter [ce script](/assets/files/d2x_offline_ios.sh), et il téléchargera les fichiers WAD pour vous.
{: .notice--info}

1. Éteignez votre console.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Download, extract, and run [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copiez tous les fichiers de `NUS Downloader.zip` vers un dossier sur votre ordinateur.
1. Exécutez `NUS Downloader.exe`.
1. Select "Database", "IOS", then "IOS38", and select "v4123".
    + Assurez-vous que "Pack WAD" est coché.
    + *NE PAS* cocher "Patch IOS". C'est ce que d2x cIOS Installer va faire.
1. Cliquez sur `Start NUS Download!`.
1. Repeat the step 2 & 3 for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
1. Once you have downloaded all four IOS, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. <br/> Open the folder and navigate through them until you locate the four WAD files you downloaded.
1. You can now use homebrew such as [USB Loader GX](usbloadergx) and [WiiFlow](wiiflow).
    + Là où vous placez les fichiers doit être sur le même périphérique contenant d2x cIOS Installer.

The WAD files should be on your SD card like this: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Section II - Installation


1. Download the d2x cIOS installer and extract the zip to the root of your SD card or USB drive.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Insert the SD card or USB drive into your Wii, and launch the d2x cIOS Installer from the Homebrew Channel
1. Set everything to match the following:

    ```
    Select cIOS: d2x-v11-beta1
Select cIOS base: 38
Select cIOS slot: 248
Select cIOS version: 65535
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

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

    + Install cIOS 249

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 56
Select cIOS slot: 249
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Install cIOS 250

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 57
Select cIOS slot: 250
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Install cIOS 251

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 58
Select cIOS slot: 251
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

[Continue to the Homebrew Browser](hbb)<br> The Homebrew Browser is a good place to get homebrew on your Wii. This is optional to install.
{: .notice--info}
