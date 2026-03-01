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

---

::: tip

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)

:::
