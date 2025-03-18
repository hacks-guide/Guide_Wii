# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. Acesta se încarcă înaintea lui Wii System Menu. Această unealtă poate de asemenea să aplice modificări care sunt folosite pentru a îmbunătății, debloca și repara multe funcții ale Meniului de Sistem.

În plus, poate fi folosit pentru lansarea rapidă a orice Titlu sau Homebrew, sau pentru a schimba modul în care Wii autobootează.

## Requirements

- Un card SD sau o unitate USB
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

### What you need

- Un card SD
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
    - [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

## Instructions

### Secțiunea I - Pregătire

1. Power off your console.
2. Extract both apps to the root of your SD card or USB drive.
3. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
4. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
5. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
6. Reintrodu cardul tău SD sau unitatea ta USB în consolă.

### Secțiunea II – Instalarea Priiloader

1. Power on your console.

2. Launch the Priiloader installer.

3. Launch Priiloader Installer from the list of homebrew.

    ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Apasă butonul + pe Wii Remote sau butonul A pe un controller GameCube.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

5. Apasă A pentru a te întoarce în Homebrew Channel.

### Secțiunea III - Intrarea în Priiloader

1. Launch the Homebrew Channel, and launch the Load Priiloader app.
2. Dispozitivul tău va încărca meniul Priiloader.

    ![](/images/priiloader/menu.png)

În viitor, pentru a intra în Priiloader vei putea:

- Ține apăsat RESET pe un Wii în timp ce îl pornești
    - Doar pentru Wii
- Ține apăsat tasta ESC pe o tastatură USB conectată în timp ce pornești consola
    - Wii, vWii și Mini
- Rula unealta "Load Priiloader" din HBC
    - Wii, vWii și Mini
- Rula unealta "Priiloader Wii U Forwarder"
    - Doar pentru vWii

### Secțiunea IV - Configurarea Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

    ![](/images/priiloader/menu_hacks.png)

    ::: warning

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time.

    Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

    :::

2. Pentru următoarele opțiuni, activează opțiunile în funcție de consola ta:
    - Wii:
        - If you are using 480p mode: `480p graphics fix in the system menu`
        - Block Disc Updates
        - Block Online Updates
        - If you are NOT using a CRT display: `Remove Deflicker`
    - vWii:
        - Block Online Updates
        - Wii System Settings via Options Button
        - If you are NOT using a CRT display: `Remove Deflicker`
    - Wii mini:
        - Block Disc Updates
        - If you are NOT using a CRT display: `Remove Deflicker`

3. Scroll down to `save settings` and press A.

4. Press `B` to return to the main menu.

::: info

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.

:::

::: info

[View the Brick Prevention Guidelines](bricks#brick-prevention)

These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.

:::

## Next Steps

::: tip

Continue to [cIOS](cios)

This guide provides steps on how to get a basic set of cIOS installed on your console, enabling functionality on apps like USB loaders.

:::