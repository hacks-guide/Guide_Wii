---
outline: false
---

# cIOS

cIOS, or custom IOS, are patched and modified versions of certain IOS (or simply, parts of the Wii's system software) that allow homebrew apps like USB loaders to be able to function where they otherwise would not. While not required for a functioning homebrew setup, it is highly recommended to install cIOS anyway because it augments the functionality of your Wii with little to no downside.

::::: tabs

:::: tab Wii/Family Edition

::: danger

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position. Otherwise, you will not be able to select the correct options in the installer.

:::

## Requirements

- A Wii with the Homebrew Channel installed
- Una scheda SD o dispositivo USB
- The [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

## Instructions

### Sezione I - Download

::: tip

Your browser or antivirus software may flag NUSGet as malware - this is a false positive. NUSGet does NOT contain any malware.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing).

:::

1. Power off your console, and insert your SD card or USB drive into your computer.
2. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
3. Unzip the archive and run the NUSGet executable.
4. Navigate to `IOS` > `IOS 38` > `World` and select `v4123`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-4123.png)
5. Repeat the above step for `IOS 56 (v5661)`, `IOS 57 (v5918)` and `IOS 58 (v6175)`.
6. When you have finished downloading the above IOS, navigate to the folder where your NUSGet executable is stored. This should now contain four different folders with the title IDs for the above IOS.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)
7. Enter the four directories, locating a `IOS-XX-vXXXX-Wii.wad` file in each.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)
8. Piazza ogni file WAD sul root della tua SD o dispositivo USB.
   - Questo deve essere lo stesso dispositivo che contiene d2x cIOS Installer.
9. Ensure that each WAD file is named as listed below for compatibility purposes with d2x-cios-installer:

   |   IOS  |              File Name             |
   | :----: | :--------------------------------: |
   | IOS 38 | IOS38-64-v4123.wad |
   | IOS 56 | IOS56-64-v5661.wad |
   | IOS 57 | IOS57-64-v5918.wad |
   | IOS 58 | IOS58-64-v6175.wad |

::: info

The WAD files should be on your SD card like this:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### Sezione II - Installazione

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

3. Power on your console.

4. Avvia l'Homebrew Channel.

5. Avvia d2x cIOS Installer dalla lista degli homebrew.

6. Imposta le opzioni in modo che corrispondano a quanto segue:

   ```html
   Select cIOS <d2x-v11-beta3>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   If you do not see `d2x-v11-beta3`, exit the installer with B, and make sure your SD card is unlocked.

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

   If the slot is highlighted red, try to install the cIOS again.

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. Questo ti riporterà alla schermata di configurazione.

11. Ripeti i 5 passaggi precedenti con le seguenti configurazioni:

    - Installazione del cIOS 249

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Installazione del cIOS 250

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Installazione del cIOS 251

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

---

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab vWii (Wii U)

::: danger

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position. Otherwise, you will not be able to select the correct options in the installer.

:::

## Requisiti

- A Wii U with the Homebrew Channel installed on the vWii
- Una scheda SD o dispositivo USB
- The [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

## Istruzioni

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

3. Accendi la console.

4. Avvia l'Homebrew Channel.

5. Avvia d2x cIOS Installer dalla lista degli homebrew.

6. Imposta le opzioni in modo che corrispondano a quanto segue:

   ```html
   Select cIOS <d2x-v11-beta3-vWii>
   Select cIOS base <38>
   Select cIOS slot <248>
   ```

   ![](/images/cios/d2x_v11_248_vwii.png)

   ::: info

   If you do not see `d2x-v11-beta3-vWii`, exit the installer with B, and make sure your SD card is unlocked.

   :::

7. Press `A` to install.

   ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

   - Installazione del cIOS 249

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <56>
     Select cIOS slot <249>
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - Installazione del cIOS 250

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <57>
     Select cIOS slot <250>
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - Installazione del cIOS 251

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <58>
     Select cIOS slot <251>
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

---

::: tip

[Continue to Finalizing Setup](vwii-finalizing-setup)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, you can proceed to restore functionality that is normally missing from a standard vWii menu.

:::

::::

:::: tab Wii mini

::: danger

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position. Otherwise, you will not be able to select the correct options in the installer.

:::

::: info

If you need assistance with this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS).

:::

## Requisiti

- Un Wii mini con l'Homebrew Channel installato
- Un dispositivo USB
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Istruzioni

### Sezione I - Download

1. Power off your console.
2. Inserisci il tuo dispositivo USB nel tuo computer.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Reinserisci il tuo dispositivo USB nella tua console.
5. Accendi la console.
6. Avvia l'Homebrew Channel.
7. Avvia dx2l cIOS Installer dalla lista di homebrew.

### Sezione II - Installazione

1. Select `Continue`.
2. Imposta le opzioni come segue:

   ```html
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. Premi A per installare.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. Il numero 57 non cambierà.
4. Quando il processo è completato, esci dall'installer.

---

::: tip

[Continue to Finalizing Setup](mini-finalizing-setup)

:::

::::

:::::
