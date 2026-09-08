# Reiniciando o HackMii Installer

Este guia é direcionado as situações onde você precisa reiniciar o HackMii Installar para fazer um update/reinstalar o Homebrew Channel ou BootMii.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Reiniciando através do Homebrew Channel

### Requirements

- O Homebrew Channel
- Um cartão SD formatado para FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Insira o cartão SD ou armazenamento USB no seu PC.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - Se a pasta não existir, crie-a.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - O app não vai ter um ícone.

::: tip

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)

:::

## Reiniciando através do Priiloader

### Requirements

- um Wii com Priiloader (ou Preloader) instalado
- Um cartão SD formatado para FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Para checar se seu Wii tem o Priiloader, segure o botão RESET enquanto o liga.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Instructions

1. Insira o cartão SD ou armazenamento USB no seu PC.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Insira o cartão SD ou armazenamento USB no seu Wii.
4. Entre no Priiloader segurando o botão RESET enquanto liga o seu Wii.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

## Relaunching via BootMii

### Requisitos

- A Wii with BootMii installed
- An SD card formatted to FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Your Wii remote will not work in BootMii. Instead, you must use the `POWER` button to move the cursor, as well as the `RESET` button to select an icon. Alternatively, use a GameCube Controller connected to Port 1 to control BootMii.

:::

::: warning

If you can already access BootMii via IOS, it is generally easier to follow the sections above.

:::

### Passos:

1. Insert your SD card into your PC.
2. Copy the `bootmini.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card.
3. Insert your SD card into your Wii.
4. Enter BootMii via one of the following means:
   - If installed as boot2, restart the console.
   - If installed as IOS or if BootMii cannot be accessed via a restart, launch via Priiloader or the Homebrew Channel.
5. Navigate to the SD card icon and press `RESET` to enter the SD card navigation menu.
6. Navigate to `bootmini.elf` and press `RESET` to load the HackMii installer.

::: tip

If `Press (1) to continue` does not show up after around 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

---

::: tip

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)

Now that you are in the HackMii Installer, you will be able to install the Homebrew Channel, as well as BootMii depending on your console.

:::
