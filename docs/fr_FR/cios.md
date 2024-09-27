# cIOS

:::details Technical Details (optional)

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Bien que [cIOS](https://wiibrew.org/wiki/Custom_IOS) ait été largement remplacé par AHBPROT, qui donne un accès complet au matériel, il a encore des applications utiles. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

:::

## Prérequis

::: warning

This guide is only intended for Wii users.

<br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

<br/> If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

- Une Wii
- Une carte SD ou une clé USB
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

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

   ````
   Select cIOS base: 38
   Select cIOS slot: 248
   Select cIOS version: 65535
       ```
   ````

   {: .notice--warning}

   {: .notice--info}

   ![](/images/cios/d2x_v11_248.png)If you do not see `d2x-v11-beta1`, exit the installer with B, and make sure your SD card is unlocked.
   {: .notice--info}The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.
   {: .notice--info}If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
   {: .notice--info}

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

   If the slot is highlighted red, try install the cIOS again.

   <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. This will return you to the configuration screen.

11. Repeat the previous 5 steps with the following configurations:

    - Install cIOS 249

      ````
      Select cIOS base: 56
      Select cIOS slot: 249
      Select cIOS version: 65535
              ```
      ````

      {% endcapture %}

    - ```
      ![](/images/cios/d2x_v11_249.png)
      ```* Install cIOS 250

        ```
        Select cIOS: d2x-v11-beta1
        ```

      ````
      Select cIOS base: 57
      Select cIOS slot: 250
      Select cIOS version: 65535
              ```
      ````

      ```
      ![](/images/cios/d2x_v11_251.png)
      ```

    - ```
      ![](/images/cios/d2x_v11_250.png)
      ```* Install cIOS 251

        ```
        Select cIOS: d2x-v11-beta1
        ```

      ````
      Select cIOS base: 58
      Select cIOS slot: 251
      Select cIOS version: 65535
              ```
      ````

      {{ technical_info | markdownify }}

12. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
