# cIOS

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS-ul](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

:::

## Requirements

::: warning

Acest ghid este destinat numai utilizatorilor Wii.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

Dacă ai un Wii mini, urmărește în schimb [acest ghid](cios-mini).

:::

- Un Wii
- Un card SD sau o unitate USB
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

## Instructions

### Secțiunea I - Descărcare

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
   - Asigură-te că "Pack WAD" este bifat.
   - _Don't_ check "Patch IOS". Asta este sarcina Instalatorului de cIOS.
7. Click `Start NUS Download!`.
8. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
11. Pune fiecare fișier WAD în rădăcina cardului tău SD sau unității tale USB.
    - Acesta trebuie să fie același dispozitiv care conține aplicația d2x cIOS Installer.

::: info

The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)

:::

### Secțiunea II – Instalare

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Reintrodu cardul tău SD sau unitatea ta USB în consolă.

3. Power on your console.

4. Launch the Priiloader installer.

5. Rulează d2x cIOS Installer din lista de aplicații homebrew.

6. Setează opțiunile astfel:

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

7. Press `A`. Acest lucru te va aduce la harta sloturilor:

   ![](/images/cios/d2x_summary.png)

8. Press `A` again.

   ![](/images/cios/d2x_installation.png)

9. Odată ce instalarea este finalizată, vei fi adus înapoi la harta sloturilor. Asigură-te că slotul care tocmai a fost instalat este evidențiat verde.

   ![](/images/cios/d2x_log.png)

   ::: info

   Dacă slotul este evidențiat roșu, încearcă să mai instalezi cIOS-ul din nou.

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. Asta te va întoarce la ecranul de configurare.

11. Repetă ultimii 5 pași cu următoarele configurații:

    - Instalarea cIOS 249

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Instalarea cIOS 250

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Instalarea cIOS 251

      ```
      Select cIOS <d2x-v11-beta2>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Odată ce ai terminat cu toate cele 4 cIOS-uri, apasă B pentru a te întoarce în Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
