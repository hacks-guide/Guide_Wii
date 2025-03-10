# cIOS

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

:::

## Requirements

::: warning

Questa guida è solo per gli utenti Wii.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

- Un Wii
- Una scheda SD o dispositivo USB
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

## Instructions

### Sezione I - Download

::: info

If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), and it will download the WAD files for you.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. Power off your console.
2. Inserisci la scheda SD o dispositivo USB nel tuo computer.
3. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
4. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
5. Run `NUS Downloader.exe`.
6. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
   - Assicurati che "Pack WAD" sia attivato.
   - _Don't_ check "Patch IOS". Quello è il ruolo del cIOS Installer.
7. Click `Start NUS Download!`.
8. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
11. Piazza ogni file WAD sul root della tua SD o dispositivo USB.
    - Questo deve essere lo stesso dispositivo che contiene d2x cIOS Installer.

::: info

The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)

:::

### Sezione II - Installazione

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

3. Power on your console.

4. Avvia l'Homebrew Channel.

5. Avvia d2x cIOS Installer dalla lista degli homebrew.

6. Imposta le opzioni in modo che corrispondano a quanto segue:

   ```
   Select cIOS <d2x-v11-beta2>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   If you do not see `d2x-v11-beta2`, exit the installer with B, and make sure your SD card is unlocked.

   :::

   ::: info

   The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

   :::

   ::: info

   If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

   (If you are trying to exit the installer, the button is B, not Home.)

   :::

7. Press `A`. Questo ti porterà alla mappa degli slot:

   ![](/images/cios/d2x_summary.png)

8. Press `A` again.

   ![](/images/cios/d2x_installation.png)

9. Appena terminata l'installazione, tornerai alla mappa degli slot. Assicurati che lo slot appena installato sia evidenziato in verde.

   ![](/images/cios/d2x_log.png)

   ::: info

   Se lo slot è evidenziato in rosso, ritenta l'installazione del cIOS.

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. Questo ti riporterà alla schermata di configurazione.

11. Ripeti i 5 passaggi precedenti con le seguenti configurazioni:

    - Installazione del cIOS 249

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Installazione del cIOS 250

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Installazione del cIOS 251

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Una volta finito con tutti i 4 cIOS, premi B per tornare all'Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
