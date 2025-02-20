# Priiloader Usage

Priiloader is an essential tool that adds a level of brick protection to your Wii. It loads before the Wii System Menu does. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

This page documents some of the useful features of Priiloader that may be of interest.

## System Menu Hacks

Priiloader has a large selection of options that, once enabled, change the behaviour of the Wii to one of your choice. You can find more information on each hack [here](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). Additionally, you can visit the [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) which has more relevant information regarding System Menu hacks.

## Additional options

These are some extra things you can do with Priiloader to enhance your homebrew experience. This is optional.

### Autobooting with Priiloader

Priiloader allows you to automatically boot to the Homebrew Channel, an individual homebrew application, or Priiloader itself. This is optional.

#### Autobooting a Homebrew application

::: warning

If you would like to autoboot USB loader GX, do this first:

- Download the USB Loader GX forwarder WAD ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Install the forwarder WAD with a WAD manager like [YAWM ModMii Edition](yawmme).
- Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
- Copy `uneoboot.dol` to the root of your SD card.

You will be installing `uneoboot.dol` in step 3.

:::

1. Launch the Homebrew Channel

2. Launch Load Priiloader from the list of homebrew.

3. Scroll down to `Load/Install file` and press A.

   ![](/images/priiloader/menu_install_file.png)

4. Scroll through the menu until your desired homebrew app is highlighted, and press A to install it.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Press `B` to return to the main menu.

6. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

7. Press Right to cycle through the Autoboot options until the `Installed file` option is selected.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

9. Press `B` to return to the main menu.

10. Scroll back up to `System Menu` and press A.

Your Wii should now automatically boot to whichever homebrew app you installed.

#### Autobooting the Homebrew Channel or Priiloader

1. Launch the Homebrew Channel

2. Launch Load Priiloader from the list of homebrew.

3. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

4. Press Right to cycle through the Autoboot options until your desired option is selected.

   - Disabled\` will autoboot to the Priiloader menu.

   ::: warning

   Please don't set Autoboot to `BootMii IOS`. You will get stuck in a loop until you continuously hold the RESET button to enter the Priiloader menu.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

6. Press `B` to return to the main menu.

7. Scroll back up to `System Menu` and press A.
