# Priiloader

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

## Prérequis

- Une carte SD ou une clé USB
- Your Wii should now automatically boot to whichever homebrew app you installed.
- https://oscwii.org/library/app/loadpriiloader

### Optional Requirements for vWii (highly recommended)

- An SD card
- Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
  - [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

## Instructions

### Section I - Préparation

1. Éteignez votre console.
2. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
3. Extract both apps to the root of your SD card or USB drive.
4. Copy `uneoboot.dol` to the root of your SD card.
5. Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.
6. Sends Wii Menu logs to a debugging device in memory card slot B, if the Wii Menu is launched by Gecko OS.

### Section II - Installing Priiloader

1. Allumez votre console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Launch Priiloader Installer from the list of homebrew.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Press the + Button on Wii Remote or the A Button on a GameCube controller.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Press A to return to the Homebrew Channel.

### Section III - Entering Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
2. Your device will have loaded the Priiloader menu.

   ![](/images/priiloader/menu.png)

Later on, to enter it you can:

- Holding RESET on a Wii while turning it on.
  - Wii Only
- Holding the ESC key on a USB keyboard while turning on the console.
  - Wii, vWii and Mini
- Run the "Load Priiloader" tool from the HBC
  - Wii, vWii and Mini
- Launch the Homebrew Channel on your Wii.
  - vWii Only

### Configuring Priiloader

1. Scroll down to `System Menu Hacks` and press `A`.

   ![](/images/priiloader/menu_hacks.png)

   {: .notice--warning}

   If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time.

   Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

   :::

2. For the following options, enable the options according to your console:
   - Wii:
     - 480p graphics fix in system menu
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

## Wii: Next Steps

::: tip

Continue to [cIOS](cios)

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.

:::

## vWii: Next Steps

::: tip

Continue to [vWii cIOS](cios-vwii)

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.

:::

## Wii mini: Next Steps

::: tip

Continue to [Wii mini cIOS](cios-mini)

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.

:::
