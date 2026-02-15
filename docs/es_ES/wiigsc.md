# Creación de accesos directos a juegos de Wii

This guide provides instructions on how to create Wii game shortcuts for game backups that you have on external storage devices, using a piece of software called WiiGSC (Wii Game Shortcut Creator). By creating game shortcuts, you can launch a game backup directly from the Wii Menu as if you had inserted the game as a regular disc.

::: warning

Installing [Priiloader](priiloader) and [BootMii](bootmii) are advised due to brick risk in this guide, and should keep you safe along with following the guide correctly. Do NOT continue the guide unless you have installed Priiloader or BootMii!

:::

::: warning

NO intentes crear un atajo para los juegos Mario Party 9, o A Boy and His Blob. Si instalas alguno de estos atajos, tu consola sufrirá un brick.

:::

::: warning

Your browser or antivirus software may flag WiiGSC as malware - this is a false positive. WiiGSC does NOT contain any malware.

:::

::: info

The Wii Menu is limited to 48 channels, not including existing system channels.

:::

## Otras cosas

- Una consola Wii original
- An SD or USB drive
- A Windows computer
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Instrucciones (para Wii)

### Section I - Creating a Channel

1. Extract the WiiGSC `.zip`, find `WiiGSC.exe`, and launch it. The first launch will prompt you about common key creation and provide a disclaimer - simply click through these windows.

    ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. With WiiGSC open, select `Open WBFS Drive` and select the drive letter for the device containing your WBFS files. Alternatively, you may select an individual ISO/WBFS file.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Select the game you would like to create a channel for, and then press `Use for Channel Creation`. Select the USB loader that you will use to launch the game, and then press `Create Channel` located in the bottom left corner.

    ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. Copy the output WAD to your SD card or other device used to load homebrew.

### Section II - Installing Channel

1. Open your WAD manager and locate the output WAD, then install it.

    ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. If successful, you should now see your game shortcut on the Wii Menu!

    ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

::: info

Si tras instalar el WAD y volver al menú de Wii aparece el mensaje <code>Los archivos del sistema están dañados</code>, no tienes nada de que preocuparte, siempre y cuando hayas instalado Priiloader, o BootMii como boot2. Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
