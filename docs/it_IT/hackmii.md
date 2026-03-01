# Rieseguire l'HackMii Installer

Questa guida è intesa per situazioni in cui devi rieseguire l'HackMii Installer per aggiornare/reinstallare l'Homebrew Channel o BootMii.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Rieseguire tramite l'Homebrew Channel

### Requirements

- L'Homebrew Channel
- Una scheda SD o un'unità USB formattata come FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Inserisci la tua SD/USB nel tuo PC.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - Se la cartella non esiste, creala.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - L'app non avrà un'icona.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## Rieseguire tramite Priiloader

### Requirements

- Un Wii con Priiloader (o Preloader) installato
- Una scheda SD o un'unità USB formattata come FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Per controllare se il tuo Wii ha Priiloader, tieni premuto il pulsante RESET in fase di accensione.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Instructions

1. Inserisci la tua SD/USB nel tuo PC.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Inserisci la tua SD/USB nel tuo Wii.
4. Accedi a Priiloader tenendo premuto il pulsante RESET mentre accendi il Wii.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
