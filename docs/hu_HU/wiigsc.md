# Wii játék shortcut-ok létrehozása

This guide provides instructions on how to create Wii game shortcuts for game backups that you have on external storage devices, using a piece of software called WiiGSC (Wii Game Shortcut Creator). By creating game shortcuts, you can launch a game backup directly from the Wii Menu as if you had inserted the game as a regular disc.

::: warning

Installing [Priiloader](priiloader) and [BootMii](bootmii) are advised due to brick risk in this guide, and should keep you safe along with following the guide correctly. Do NOT continue the guide unless you have installed Priiloader or BootMii!

:::

::: warning

NE készíts parancsikont a "Mario Party 9" vagy az "A Boy and His Blob" játékokhoz. Ez brickeli a Wii-odat.

:::

::: warning

Your browser or antivirus software may flag WiiGSC as malware - this is a false positive. WiiGSC does NOT contain any malware.

:::

::: info

A Wii menü 48 csatornára van korlátozva, nem számítva a meglévő rendszercsatornákat.

:::

## Requirements

- Egy Wii
- Egy SD kártya vagy USB drive
- A Windows computer
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Lépések

### Section I - Creating a Channel

1. Csomagold ki a WiiGSC `.zip`-et, keresd meg a `WiiGSC.exe` fájlt és indítsd el. The first launch will prompt you about common key creation and provide a disclaimer - simply click through these windows.

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

Ha hibaüzenetet kapsz "The system files are corrupted", ne ess pánikba, ha telepítetted a Priiloader-t. Kapcsold ki a Wii-t, majd [bootolj a Priiloader-be](priiloader#section-iii---entering-priiloader) a konzolodhoz rendelkezésre álló módszerek egyikével. Lépj be a Homebrew Channel csatornába, és indítsd el a WAD managert a WAD eltávolításához. Ha a priiloader nem volt telepítve, folytasd a [BlueBomb](bluebomb) lépéssel.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
