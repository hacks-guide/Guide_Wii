---
title: Priiloader Usage
---

{% include toc title="Table of Contents" %}

Priiloader is an essential tool that adds a level of brick protection to your Wii. It loads before the Wii System Menu does. The tool can also apply hacks that are used to enhance, unlock, and/or fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

This page documents some of the useful features of Priiloader that may be of interest.

### System Menu Hacks

Priiloader has a large selection of options that, once enabled, change the behaviour of the Wii to one of your choice.

<details id="system-menu-hacks-list" class="notice--info" markdown="1">
<summary><a>Click here for a full list of available System menu hacks.</a></summary>

| Hack										| Description																																											|
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block Disc Updates						| Removes the "Wii System Update" screen included with some games that forces you to update the system before playing the game.															|
| Block Online Updates						| Disables updating your Wii. Updates will fail with error 32007.																														|
| Auto-Press A at Health Screen				| Automatically presses the A Button to get past the initial "Health and Safety" screen.																								|
| Replace Health Screen with Backmenu		| Changes the "Health and Safety" screen to the animation played when returning to the Wii Menu.																						|
| Move Disc Channel							| Enables moving the Disc Channel anywhere on the Wii Menu. It's normally stuck in the top left of the first page.																		|
| Wiimmfi Patch v4							| Automatically patches all games you run from the Disc Channel for use with Wiimmfi.																									|
| 480p graphics fix in system menu			| Fixes a small issue with 480p on the Wii Menu.																																		|
| Remove NoCopy Save File Protection		| Allows you to copy normally disallowed save files to your SD card from Data Management																								|
| Region Free EVERYTHING					| Disables region locking for any Wii application, including downloaded ones.																											|
| ~~No System Menu Sounds AT ALL~~			| ~~Disables all the Wii Menu sound effects.~~ Currently broken.																														|
| No System Menu Background Music			| Disables the Wii Menu background music.																																				|
| Re-Enable Bannerbomb v2					| Enables the "Bannerbomb" exploit on the latest Wii version. Not needed when the Homebrew Channel is already installed.																|
| OSReport to UsbGecko(slot B)				| Sends Wii Menu logs to a debugging device in memory card slot B.																														|
| OSReport to UsbGecko(GeckoOS,B)			| Sends Wii Menu logs to a debugging device in memory card slot B, if the Wii Menu is launched by Gecko OS.																				|
| Force boot into Data Management			| Immediately loads the Wii menu into Data Management.																																	|
| Force Standard Recovery Mode				| Automatically launches the console in recovery mode. Used to launch recovery discs, letting users unbrick their Wii systems.															|
| Remove Diagnostic Disc Check				| Removes a check in the Wii to see if an inserted game matches the title ID of the "Wii Startup Disc".																					|
| No-Delete HAXX,JODI,DVDX,DISC,DISK,RZDx	| Re-enable channels with these title IDs (originally blocked in system updates due to them being exploits).																			|
| Force Disc Games to run under IOS249		| Make discs use cIOS 249 as the game's IOS. While it cannot allow playing of burned games on its own, it is needed to play burned discs. (Can give you Error 002 on a non-burned game)	|
| Remove Deflicker							| Removes the deflicker filter and makes the Wii Menu appear clearer.																													|
| Block Disc Autoboot						| This prevents the Wii from instantly launching discs with title IDs starting with 0 or 1 (0x30, 0x31).																				|
| Allow TitleID RAAE, 408x, 410x			| Allows the Wii Menu to read the discs with the title IDs RAAE (Wii Startup Disc), 408x and 410x (Wii Backup Disc)																		|
| Remove IOS16 Disc Error					| Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.																								|
| Mark Network Connection as Tested			| Enables the `Use This Connection` button in the Internet connection settings, regardless of the results of the last connection test.													|
| Always enable WiiConnect24 for vWii		| Enables WiiConnect24 & Standby Connection every time the Wii menu starts. **Requires a reboot after enabling.**																		|
| Create message via Calendar button (vWii)	| Clicking on the Calendar button opens the Create Message menu instead of the Calendar, allowing the user to create Memos, send messages to, and register Wii friends.					|

</details>

### Additional options

These are some extra things you can do with Priiloader to enhance your homebrew experience. This is optional.

#### Autobooting with Priiloader

Priiloader allows you to automatically boot to the Homebrew Channel, an individual homebrew application, or Priiloader itself. This is optional.

##### Autobooting a Homebrew application

<div id="autobooting-usbloadergx" class="notice--warning" markdown="1">
If you would like to autoboot USB loader GX, do this first:
  + Download the USB Loader GX forwarder WAD ([Wii](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT.wad), [vWii](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT_vWii%20%28Fix%29.wad)).
  + Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
  + Install the forwarder WAD with a WAD manager like [YAWM ModMii Edition](yawmme).
  + Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
  + Copy `uneoboot.dol` to the root of your SD card.

You will be installing `uneoboot.dol` in step 3.
</div>

1. Launch the Homebrew Channel
1. Launch Load Priiloader from the list of homebrew.
1. Scroll down to `Load/Install file` and press A.

    ![](/images/priiloader/menu_install_file.png)

1. Scroll through the menu until your desired homebrew app is highlighted, and press A to install it.

    ![](/images/priiloader/installing_file.png)

    ![](/images/priiloader/installing_file_ok.png)

1. Press `B` to return to the main menu.
1. Scroll down to `Settings` and press A.

    ![](/images/priiloader/menu_settings.png)

1. Press Right to cycle through the Autoboot options until `Installed file` is selected.

    ![](/images/priiloader/autoboot_installed_file.png)

1. Scroll down to `save settings` and press A.

    ![](/images/priiloader/settings_save.png)

1. Press `B` to return to the main menu.
1. Scroll back up to `System Menu` and press A.

Your Wii should now automatically boot to whichever homebrew app you installed.

##### Autobooting the Homebrew Channel or Priiloader

1. Launch the Homebrew Channel
1. Launch Load Priiloader from the list of homebrew.
1. Scroll down to `Settings` and press A.

    ![](/images/priiloader/menu_settings.png)

1. Press Right to cycle through the Autoboot options until your desired option is selected.
    + Disabled` will autoboot to the Priiloader menu.

    Please don't set Autoboot to `BootMii IOS`. You will get stuck in a loop until you continuously hold the RESET button to enter the Priiloader menu.
    {: .notice--warning}

    ![](/images/priiloader/autoboot_disabled.png)

1. Scroll down to `save settings` and press A.

    ![](/images/priiloader/settings_save.png)

1. Press `B` to return to the main menu.
1. Scroll back up to `System Menu` and press A.
