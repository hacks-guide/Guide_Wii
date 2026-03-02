# Creating Wii Game Shortcuts

This guide provides instructions on how to create Wii game shortcuts for game backups that you have on external storage devices, using a piece of software called WiiGSC (Wii Game Shortcut Creator). By creating game shortcuts, you can launch a game backup directly from the Wii Menu as if you had inserted the game as a regular disc.

:::details Important Information

- Your browser or antivirus software may flag WiiGSC as malware - this is a false positive. WiiGSC does NOT contain any malware.
- The Wii Menu is limited to 48 channels, not including existing system channels.

:::

::: danger

**Important Warnings**

- DO NOT continue the guide unless you have installed [Priiloader](priiloader) or [BootMii](bootmii), as this guide carries the risk of causing a [banner brick](bricks#banner-brick) which will prevent the Wii Menu from booting.
- DO NOT create and install a shortcut for the games "Mario Party 9" or "A Boy and His Blob". It will cause a [banner brick](bricks#banner-brick) due to the complexity of the channels making the Wii Menu crash.
- If you get an error saying `The system files are corrupted`, you are likely dealing with a [banner brick](bricks#banner-brick). To fix it, turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager or [YAWM ModMii Edition](yawmme) to uninstall the WAD that caused the error. If Priiloader was not installed, proceed to [BlueBomb](bluebomb) for further resolution.

:::

## Wymagania

- A Wii
- An SD or USB drive
- A Windows computer
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Instrukcje

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

---

::: tip

[Kliknij tutaj, aby wrócić do indeksu witryny.](site-navigation)

:::
