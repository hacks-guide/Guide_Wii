---
outline: false
---

# cIOS

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS-ul](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

:::

::: warning

Nu încerca să instalezi un IOS vWii/Wii mini sau System Menu pe un vWii. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.

:::

## Requirements

- A Wii with the Homebrew Channel installed
- Un card SD sau o unitate USB
- The [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

::: warning

Asigură-te că dacă folosești un card SD, comutatorul de blocare este în poziția deblocată, altfel nu vei putea alege opțiunile corecte în instalator.

:::

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

    If the slot is highlighted red, try to install the cIOS again.

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

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS-ul](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

:::

::: warning

Nu încerca să instalezi un IOS Wii/Wii mini sau System Menu pe un vWii. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.

:::

## Instrumente necesare

- A Wii U with the Homebrew Channel installed on the vWii
- Un card SD sau o unitate USB
- The [d2x cIOS Installer for vWii](/assets/files/d2x_cIOS_Installer-vWii.zip)

::: warning

Asigură-te că dacă folosești un card SD, comutatorul de blocare este în poziția deblocată, altfel nu vei putea alege opțiunile corecte în instalator.

:::

## Instrucțiuni

### Secțiunea I – Instalarea

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Reintrodu cardul tău SD sau unitatea ta USB în consolă.

3. Pornește consola.

4. Launch the Priiloader installer.

5. Rulează d2x cIOS Installer din lista de aplicații homebrew.

6. Setează opțiunile astfel:

    ```
    Select cIOS <d2x-v11-beta2-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta2-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

7. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

    - Instalarea cIOS 249

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    - Instalarea cIOS 250

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    - Instalarea cIOS 251

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

9. Odată ce ai terminat cu toate cele 4 cIOS-uri, apasă B pentru a te întoarce în Homebrew Channel.

::: tip

[Continue to Finalizing Setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS-ul](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

Acest instalator de cIOS d2x a fost dezvoltat original pentru vWii-ul consolei Wii U de către DaveBaol iar cIOS-ul modificat a fost creat de către Leseratte pentru Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Reține că acest cIOS încă este experimental, însă nicio problemă nu a fost raportată legată de funcționalitate încă.

:::

::: warning

Nu încerca să instalezi un IOS Wii/vWii sau System Menu pe un Wii mini. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.

:::

## Instrumente necesare

- Un Wii mini cu Homebrew Channel instalat
- O unitate USB
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Instrucțiuni

### Secțiunea I - Descărcare

1. Oprește-ți consola.
2. Introdu unitatea ta USB în calculatorul tău.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Reintrodu unitatea USB în consola ta.
5. Pornește consola.
6. Launch the Priiloader installer.
7. Rulează d2xl cIOS Installer din lista de aplicații homebrew.

### Secțiunea II – Instalare

1. Select `Continue`.
2. Setează opțiunile la următoarele:

    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. Apasă a pentru a instala.
    - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. Numărul 57 nu se va schimba.
4. Odată ce procesul este complet, ieși din aplicație.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### Activarea Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Consolele Wii și Wii mini sunt știute să meargă numai cu adaptoarele de Ethernet care folosesc chipul AX88772. Te rugăm să verifici dacă produsul este compatibil înainte să-l cumperi. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::

::::

:::::
