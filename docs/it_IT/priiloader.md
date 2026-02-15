# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. Si carica prime se si carichi il Menu di Sistema Wii. The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di autoboot del Wii.

## Requirements

- Una scheda SD o dispositivo USB
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

### Requisiti facoltativi per vWii (altamente raccomandati)

- Una scheda SD
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
  - [Aroma](https://wiiu.hacks.guide/aroma/getting-started) must be installed on your console for the Priiloader Wii U Forwarder to function.

## Instructions

### Sezione I - Preparazione

1. Power off your console.
2. Inserisci la scheda SD o dispositivo USB nel tuo computer.
3. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
4. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
5. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
6. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

### Sezione II - Installazione di Priiloader

1. Power on your console.

2. Avvia l'Homebrew Channel.

3. Launch Priiloader Installer from the list of homebrew.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Premi il pulsante + sul telecomando Wii oppure il pulsante A su un controller GameCube.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Premi A per tornare all'Homebrew Channel.

### Sezione III - Avvio di Priiloader

1. Premi il pulsante HOME e seleziona Ritorna al Menu di Sistema per uscire dall'Homebrew Channel.
2. La tua console quindi caricherà il menu di Priiloader.

   ![](/images/priiloader/menu.png)

Successivamente, per entrarci dovrai:

- Tenere premuto il pulsante RESET sul Wii durante l'accensione
  - Solo Wii
- Tenere premuto il tasto ESC su una tastiera USB connessa durante l'accensione della console
  - Wii, vWii e mini
- Eseguire "Load Priiloader" dall'HBC
  - Wii, vWii e mini
- Usare il "Priiloader Wii U Forwarder"
  - Solo vWii

### Sezione III - Configurazione di Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

   ![](/images/priiloader/menu_hacks.png)

   ::: warning

   If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time.

   Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

   :::

2. Per le seguenti opzioni, attiva le opzioni in base alla tua console:
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
