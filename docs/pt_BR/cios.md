# cIOS

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

:::

## Requirements

::: warning

This guide is only intended for Wii users.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

- Um Wii
- Um cartão SD ou armazenamento USB
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

## Instructions

### Seção I - Baixando

::: info

If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), and it will download the WAD files for you.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. Power off your console.
2. Extract both apps to the root of your SD card or USB drive.
3. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
4. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
5. Run `NUS Downloader.exe`.
6. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
   - Verifique se a caixa "Pack WAD" está habilitada.
   - _Don't_ check "Patch IOS". Esse é o trabalho do instalador de cIOS.
7. Click `Start NUS Download!`.
8. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
11. Você agora poderá usar homebrew como o <a href="usbloadergx">USB Loader GX</a> e <a href="wiiflow">WiiFlow</a>.
    - Esse deve ser o mesmo dispositivo contendo o d2x cIOS Installer.

::: info

The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)

:::

### Parte II - Instalando

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Reinsira seu cartão SD ou armazenamento USB no seu console.

3. Power on your console.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Insira o cartão SD ou armazenamento USB no seu Wii, então inicie o d2x cIOS Installer através do Homebrew Channel

6. Set everything to match the following:

   ```
   Select cIOS <d2x-v11-beta1>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   If you do not see `d2x-v11-beta1`, exit the installer with B, and make sure your SD card is unlocked.

   :::

   ::: info

   The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

   :::

   ::: info

   If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

   (If you are trying to exit the installer, the button is B, not Home.)

   :::

7. Press `A`. This will bring you to the slot map:

   ![](/images/cios/d2x_summary.png)

8. Press `A` again.

   ![](/images/cios/d2x_installation.png)

9. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

   ![](/images/cios/d2x_log.png)

   ::: info

   If the slot is highlighted red, try install the cIOS again.

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. This will return you to the configuration screen.

11. Repeat the previous 5 steps with the following configurations:

    - Install cIOS 248

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Install cIOS 250

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Install cIOS 251

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
