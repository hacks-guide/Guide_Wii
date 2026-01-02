# Wii Oyun Kısayolları Oluşturmak

This guide provides instructions on how to create Wii game shortcuts for game backups that you have on external storage devices, using a piece of software called WiiGSC (Wii Game Shortcut Creator). By creating game shortcuts, you can launch a game backup directly from the Wii Menu as if you had inserted the game as a regular disc.

::: warning

Installing [Priiloader](priiloader) and [BootMii](bootmii) are advised due to brick risk in this guide, and should keep you safe along with following the guide correctly. Do NOT continue the guide unless you have installed Priiloader or BootMii!

:::

::: warning

"Mario Party 9" veya "A Boy and His Blob" adlı oyunlar için kısayollar YAPMAYIN. Bu Wiinizi brickleyecektir.

:::

::: warning

Your browser or antivirus software may flag WiiGSC as malware - this is a false positive. WiiGSC does NOT contain any malware.

:::

::: info

Wii Menüsü 48 kanal limitine sahiptir, sistem kanallarını saymazsak.

:::

## Gereksinimler

- Bir Wii
- Bir SD card veya USB yığın depolama aygıtı
- A Windows computer
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Talimatlar

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

Eğer "The system files are corrupted" (Sistem dosyaları bozulmuş) diyen bir hata alırsanız, Priiloader kurulu olduğu sürece paniklemeyin. Wii'nizi kapatın, sonra da konsolunuz için uygun olan yöntemlerden birisini kullanarak [Priiloader'ı açın.](priiloader#section-iii---entering-priiloader) Homebrew Channel'a girin ve WAD'ı kaldırmak için WAD yöneticinizi açın. Eğer Priiloader kurulu değilse, [BlueBomb](bluebomb)

:::

::: tip

[Site haritasına geri dönmek için tıklayın.](site-navigation)

:::
