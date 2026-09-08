# Volver a lanzar el HackMii Installer

Esta guía puede ser usada en situaciones donde necesites volver a cargar la aplicación HackMii Installer para actualizar o reinstalar el Canal Homebrew o BootMii.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Iniciar desde el Canal Homebrew

### Requirements

- El Canal Homebrew
- Una tarjeta SD o unidad USB formateada como FAT32
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Inserta la tarjeta SD o unidad USB en tu PC.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - Si la carpeta no existe, créala.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - La aplicación se mostrará sin ningún icono.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## Iniciar desde Priiloader

### Requirements

- Una Wii con Priiloader (o Preloader) instalado
- Una tarjeta SD o unidad USB formateada como FAT32
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Para saber si tu Wii tiene Priiloader, mantén oprimido el botón RESET mientras enciendes la consola.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Instructions

1. Inserta la tarjeta SD o unidad USB en tu PC.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Inserta la tarjeta SD o unidad USB en tu Wii.
4. Ingresa a Priiloader manteniendo pulsado RESET mientras enciendes tu Wii.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

## Relaunching via BootMii

### Otras cosas

- A Wii with BootMii installed
- An SD card formatted to FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Your Wii remote will not work in BootMii. Instead, you must use the `POWER` button to move the cursor, as well as the `RESET` button to select an icon. Alternatively, use a GameCube Controller connected to Port 1 to control BootMii.

:::

::: warning

If you can already access BootMii via IOS, it is generally easier to follow the sections above.

:::

### Instrucciones (para Wii)

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

[Continue to Homebrew Channel and BootMii Installation](hbc)

Now that you are in the HackMii Installer, you will be able to install the Homebrew Channel, as well as BootMii depending on your console.

:::
