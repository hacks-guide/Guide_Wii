# Redeschiderea Instalatorului HackMii

Acest ghid este destinat situațiilor unde ai nevoie să rulezi Instalatorul HackMii din nou pentru a actualiza/reinstala Homebrew Channel sau BootMii.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Redeschiderea prin Homebrew Channel

### Requirements

- Homebrew Channel
- Un card SD sau unitate USB formatată ca FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Introdu cardul tău SD/unitatea ta USB în calculatorul tău.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
    - Dacă acest dosar nu există, creează-l.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
    - Această aplicație nu va avea o iconiță.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## Redeschiderea prin Priiloader

### Requirements

- Un Wii cu Priiloader (sau Preloader) instalat
- Un card SD sau unitate USB formatată ca FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Pentru a verifica dacă sistemul tău Wii are Priiloader, ține apăsat butonul RESET în timp ce se pornește.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Instructions

1. Introdu cardul tău SD/unitatea ta USB în calculatorul tău.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Introdu cardul tău SD/unitatea ta USB în Wii.
4. Rulează Priiloader ținând apăsat butonul RESET în timp ce-ți pornești consola ta Wii.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
