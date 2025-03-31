---
outline: false
---

# cIOS

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details Technical Details (optional)

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely brick your console.

:::

## Prérequis

- A Wii with the Homebrew Channel installed
- Une carte SD ou une clé USB
- The [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

::: warning

Assurez-vous que, si vous utilisez une carte SD, le verrou est en position déverrouillée, sinon vous ne serez pas en mesure de sélectionner les bonnes options dans l'installeur.

:::

## Instructions

### Section I - Téléchargement

::: info

If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), and it will download the WAD files for you.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)
{: .notice--info}

:::

1. Éteignez votre console.
2. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
3. Download, extract, and run [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
4. Copiez tous les fichiers de `NUS Downloader.zip` vers un dossier sur votre ordinateur.
5. Exécutez `NUS Downloader.exe`.
6. Select "Database", "IOS", then "IOS38", and select "v4123".
    - Assurez-vous que "Pack WAD" est coché.
    - _NE PAS_ cocher "Patch IOS". C'est ce que d2x cIOS Installer va faire.
7. Cliquez sur `Start NUS Download!`.
8. Repeat the step 2 & 3 for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. Once you have downloaded all four IOS, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the folder and navigate through them until you locate the four WAD files you downloaded.
11. You can now use homebrew such as <a href="usbloadergx">USB Loader GX</a> and <a href="wiiflow">WiiFlow</a>.
    - Là où vous placez les fichiers doit être sur le même périphérique contenant d2x cIOS Installer.

::: info

The WAD files should be on your SD card like this: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

{: .notice--info}

:::

### Section II - Installation

1. Download the d2x cIOS installer and extract the zip to the root of your SD card or USB drive.

2. Insérez votre carte SD ou votre clé USB dans votre ordinateur.

3. Allumez votre console.

4. Lancez la Chaîne Homebrew.

5. Insert the SD card or USB drive into your Wii, and launch the d2x cIOS Installer from the Homebrew Channel

6. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta2>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    {: .notice--warning}

    {: .notice--info}

    If you do not see `d2x-v11-beta2`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    {: .notice--info}

    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

    :::

    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

    (If you are trying to exit the installer, the button is B, not Home.)

    :::

7. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

8. Press `A` again.

    ![](/images/cios/d2x_installation.png)

9. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    {: .notice--info}

    If the slot is highlighted red, try to install the cIOS again.

    <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).

    :::

10. Press `A`. This will return you to the configuration screen.

11. Repeat the previous 5 steps with the following configurations:

    - Install cIOS 249

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        {% endcapture %}

    - ```
        ![](/images/cios/d2x_v11_249.png)
        ```* Install cIOS 250

            ```
            Select cIOS: d2x-v11-beta1
            ```

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ```
        ![](/images/cios/d2x_v11_251.png)
        ```

    - ```
        ![](/images/cios/d2x_v11_250.png)
        ```* Install cIOS 251

            ```
            Select cIOS: d2x-v11-beta1
            ```

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        {{ technical_info | markdownify }}

12. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details Technical Details (optional)

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely brick your console.

:::

## Prérequis

- A Wii U with the Homebrew Channel installed on the vWii
- Une carte SD ou une clé USB
- The [d2x cIOS Installer for vWii](/assets/files/d2x_cIOS_Installer-vWii.zip)

::: warning

Assurez-vous que, si vous utilisez une carte SD, le verrou est en position déverrouillée, sinon vous ne serez pas en mesure de sélectionner les bonnes options dans l'installeur.

:::

## Instructions

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Insérez votre carte SD ou votre clé USB dans votre ordinateur.

3. Éteignez votre console.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Insert the SD card or USB drive into your Wii, and launch the d2x cIOS Installer from the Homebrew Channel

6. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta2-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    {: .notice--info}

    If you do not see `d2x-v11-beta2-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

7. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

    - Install cIOS 249

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    - ```
        ![](/images/cios/d2x_v11_249.png)
        ```* Install cIOS 250

            ```
            Select cIOS: d2x-v11-beta1
            ```

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    - ```
        ![](/images/cios/d2x_v11_250.png)
        ```* Install cIOS 251

            ```
            Select cIOS: d2x-v11-beta1
            ```

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to finalizing setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

Si vous avez besoin d'aide pour tout ce qui concerne ce tutoriel, veuillez rejoindre [le serveur Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recommandé)
{: .notice--info}

:::

:::details Technical Details (optional)

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

Cette version de `d2x cIOS installer` a été initialement développé pour la vWii de la Wii U par DaveBaol et les cIOS pour la Wii Mini ont étés créés par Leseratte. La page originale de téléchargement peut être trouvée [ici](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's Github page can be found [here](https://github.com/Leseratte10/d2xl-cios). Veuillez noter que ce cIOS est encore expérimental, bien qu'aucun problème de fonctionnalité n'ait été signalé.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely brick your console.

:::

## Prérequis

- Un Wii Mini avec la Chaîne Homebrew installée
- Une clé USB
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Instructions

### Section I - Téléchargement

1. Power off your Wii.
2. Insérez votre clé USB dans votre ordinateur.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Réinsérez votre clé USB dans votre console.
5. Éteignez votre console.
6. Launch the Homebrew Channel, and launch the Load Priiloader app.
7. Lancez d2x cIOS Installer parmi la liste des homebrew.

### Section II - Installation

1. Select `Continue` when finished.
2. Press continue, then set the options to the following:

    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. Once set, press A to install.
    - Si l'installation échoue avec une version `TMD version mismatch` , appuyez sur la gauche ou la droite avec la croix directionnelle sur l'option `Select cIOS base` jusqu'à ce que le numéro de version soit différent de celui que vous avez essayé auparavant. Le numéro 57 ne changera pas.
4. Once done successfully, exit the installer.

::: tip

[Continue to finalizing setup](mini-finalizing-setup)

:::

::: tip

[Click here to go back to the site index.](site-navigation)
{: .notice--info}

:::

::::

:::::
