# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii, by loading before the Wii System Menu. The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any title or homebrew app, or change the way your Wii boots.

::: info

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.

:::

## Requisitos

- Una tarjeta SD o unidad USB
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

### Optional Requirements for vWii (highly recommended)

- An SD card
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (direct download)
  - [Aroma](https://wiiu.hacks.guide/aroma/getting-started) must be installed on your console for the Priiloader Wii U Forwarder to function.

## Instrucciones

### Section I - Prep Work

1. Power off your console.
2. Insert your SD card or USB drive into your computer.
3. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
4. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
5. (vWii only) Copy the `wiiu` folder from the PriiloaderWiiUForwarder `.zip` to the root of your SD card.
6. Insert your SD card into your Wii, and launch CleanRip from the Homebrew Channel.

### Section II - Installing Priiloader

1. Power on your console.

2. Launch the Homebrew Channel on your Wii.

3. Launch Priiloader Installer from the list of homebrew.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Press the + Button on Wii Remote or the A Button on a GameCube controller.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Scroll to <code>Homebrew Channel</code> and press A to launch it.

### Section III - Entering/Configuring Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
2. You should see the Priiloader menu.

   ![](/images/priiloader/menu.png)

:::details In the future, you can use the following methods to enter Priiloader:

| Console Type | Priiloader Entry Methods                                                                                                                                                                                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii          | <ul><li>Holding the RESET button while turning the console ON, or while inside the Wii Menu</li><li>Holding the ESC key on a connected USB keyboard while turning the console ON</li><li>Running the `Load Priiloader` tool from the Homebrew Channel</li></ul> |
| vWii         | <ul><li>Holding the ESC key on a connected USB keyboard while turning the console ON</li><li>Running the `Load Priiloader` tool from the Homebrew Channel</li><li>Running the Priiloader forwarder from the Wii U Menu</li></ul>                                |
| Wii mini     | <ul><li>Holding the ESC key on a connected USB keyboard while turning the console ON</li><li>Running the `Load Priiloader` tool from the Homebrew Channel</li></ul>                                                                                             |

:::

### Section I - Downloading/Installing

::: warning

If you copied the Priiloader installer onto a USB drive, ensure that you DO NOT have an SD card inserted at the same time.

Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

:::

1. Scroll down to `System Menu Hacks` and press `A`.

   ![](/images/priiloader/menu_hacks.png)

2. In `System Menu Hacks`, enable the following options according to your console:

   | Console Type | Priiloader Options                                                                                                                                                                                              |
   | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Wii          | <ul><li>If you are using 480p mode: `480p graphics fix in the system menu`</li><li>`Block Disc Updates`</li><li>`Block Online Updates`</li><li>If you are NOT using a CRT display: `Remove Deflicker`</li></ul> |
   | vWii         | <ul><li>`Block Online Updates`</li><li>`Wii System Settings via Options Button`</li><li>If you are NOT using a CRT display: `Remove Deflicker`</li></ul>                                                        |
   | Wii mini     | <ul><li>`Block Disc Updates`</li><li>If you are NOT using a CRT display: `Remove Deflicker`</li></ul>                                                                                                           |

3. Scroll down to `save settings` and press A.

4. Press `B` to return to the main menu.

---

::: info

[View the Brick Prevention Guidelines](bricks#brick-prevention)

These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.

:::

---

::: tip

Continue to [cIOS](cios)

This guide provides steps on how to get a basic set of cIOS installed on your console, enabling functionality on apps like USB loaders.

:::
