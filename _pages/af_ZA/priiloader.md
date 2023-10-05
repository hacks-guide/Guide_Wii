---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

Priiloader adds a level of brick protection to your Wii. It loads before the Wii Menu does (hence the name). The tool can also enable hacks for your Wii Menu, and be used to quickly launch the Homebrew Channel, BootMii, or whatever homebrew you want.

### Installing Priiloader

{% capture notice-vwii-priiloader %}
Priiloader 0.10.0 introduces vWii support! <br> There are some important things to take note of:
+ To fix the timestamp issues (FORE000006, wrong News Channel update time), you will need to [generate a timestamp fix hack](https://garyodernichts.github.io/priiloader-patch-gen/) (more information on the page).
+ Installing a theme after installing Priiloader **will brick your vWii.**
{% endcapture %}

<!--div class="notice--success" markdown="1">{{ notice-vwii-priiloader }} </div-->

### Requirements

* An SD card or USB drive
* [Priiloader Installer](https://oscwii.org/library/app/priiloader) (the `.zip` file)
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (the `.zip` file)

### Instructions

#### Section I - Prep Work

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. Copy the `apps` folder from the LoadPriiloader `.zip` to the root of your SD card or USB drive.
1. Copy the `apps` folder from the priiloader `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.

#### Section II - Installing Priiloader

1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch Priiloader installer from the list of homebrew.
1. Press the + Button on Wii Remote or the A Button on a GameCube controller.

    ![Install Priiloader](/images/priiloader/installer.png)

    ![Installing](/images/priiloader/installing.png)

1. Press A to return to the Homebrew Channel.

#### Section III - Entering Priiloader

Priiloader will appear automatically after you install it. Simply exit the Homebrew Channel, and you should see the Priiloader menu:

![Priiloader Menu](/images/priiloader/menu.png)

To enter it later on, simply run the "Load Priiloader" homebrew app. There are also other ways to enter Priiloader:

+ Holding RESET on a Wii while turning it on
+ Holding the ESC key on a USB keyboard while turning on the console

### Configuring Priiloader

#### System Menu Hacks

1. Open the Homebrew Channel.
1. Launch "Load Priiloader" from the list of homebrew.
1. Scroll down to `System Menu Hacks` and press `A`.

    ![System Menu Hacks](/images/priiloader/menu_hacks.png)

    If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time. <br> Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.
    {: .notice--warning}

1. Press `A` on each hack you would like to enable.
    + It is advised to enable "Block Disc Updates", "Block Online Updates", and "Region Free EVERYTHING".

    ![System Menu Hacks List](/images/priiloader/system_menu_hacks.png)

1. Scroll down to `save settings` and press A.
1. Press `B` to return to the main menu.

<details id="system-menu-hacks-list" class="notice--info" markdown="1">
<summary><a>Click here for a full list of available System menu hacks.</a></summary>

| Hack                                      | Description                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block Disc Updates                        | Removes the "Wii System Update" screen included with some games that forces you to update the system before playing the game.                                                         |
| Block Online Updates                      | Disables updating your Wii. Updates will fail with error 32007.                                                                                                                       |
| Auto-Press A at Health Screen             | Automatically presses the A Button to get past the initial "Health and Safety" screen.                                                                                                |
| Replace Health Screen with Backmenu       | Changes the "Health and Safety" screen to the animation played when returning to the Wii Menu.                                                                                        |
| Move Disc Channel                         | Enables moving the Disc Channel anywhere on the Wii Menu. It's normally stuck in the top left of the first page.                                                                      |
| Wiimmfi Patch v4                          | Automatically patches all games you run from the Disc Channel for use with Wiimmfi.                                                                                                   |
| 480p graphics fix in system menu          | Fixes a small issue with 480p on the Wii Menu.                                                                                                                                        |
| Remove NoCopy Save File Protection        | Allows you to copy normally disallowed save files to your SD card from Data Management                                                                                                |
| Region Free EVERYTHING                    | Disables region locking for any Wii application, including downloaded ones.                                                                                                           |
| ~~No System Menu Sounds AT ALL~~          | ~~Disables all the Wii Menu sound effects.~~ Currently broken.                                                                                                                        |
| No System Menu Background Music           | Disables the Wii Menu background music.                                                                                                                                               |
| Re-Enable Bannerbomb v2                   | Enables the "Bannerbomb" exploit on the latest Wii version. Not needed when the Homebrew Channel is already installed.                                                                |
| OSReport to UsbGecko(slot B)              | Sends Wii Menu logs to a debugging device in memory card slot B.                                                                                                                      |
| OSReport to UsbGecko(GeckoOS,B)           | Sends Wii Menu logs to a debugging device in memory card slot B, if the Wii Menu is launched by Gecko OS.                                                                             |
| Force boot into Data Management           | Immediately loads the Wii menu into Data Management.                                                                                                                                  |
| Force Standard Recovery Mode              | Automatically launches the console in recovery mode. Used to launch recovery discs, letting users unbrick their Wii systems.                                                          |
| Remove Diagnostic Disc Check              | Removes a check in the Wii to see if an inserted game matches the title ID of the "Wii Startup Disc".                                                                                 |
| No-Delete HAXX,JODI,DVDX,DISC,DISK,RZDx   | Re-enable channels with these title IDs (originally blocked in system updates due to them being exploits).                                                                            |
| Force Disc Games to run under IOS249      | Make discs use cIOS 249 as the game's IOS. While it cannot allow playing of burned games on its own, it is needed to play burned discs. (Can give you Error 002 on a non-burned game) |
| Remove Deflicker                          | Removes the deflicker filter and makes the Wii Menu appear clearer.                                                                                                                   |
| Block Disc Autoboot                       | This prevents the Wii from instantly launching discs with title IDs starting with 0 or 1 (0x30, 0x31).                                                                                |
| Allow TitleID RAAE, 408x, 410x            | Allows the Wii Menu to read the discs with the title IDs RAAE (Wii Startup Disc), 408x and 410x (Wii Backup Disc)                                                                     |
| Remove IOS16 Disc Error                   | Allows the Wii Menu to launch discs (this is only the Wii Backup Disc) that use IOS16.                                                                                                |
| Mark Network Connection as Tested         | Enables the `Use This Connection` button in the Internet connection settings, regardless of the results of the last connection test.                                                  |
| Always enable WiiConnect24 for vWii       | Enables WiiConnect24 & Standby Connection every time the Wii menu starts. **Requires a reboot after enabling.**                                                                       |
| Create message via Calendar button (vWii) | Clicking on the Calendar button opens the Create Message menu instead of the Calendar, allowing the user to create Memos, send messages to, and register Wii friends.                 |

</details>

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that to avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}

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

    ![Load/Install File](/images/priiloader/menu_install_file.png)

1. Scroll through the menu until your desired homebrew app is highlighted, and press A to install it.

    ![Installing a Homebrew App](/images/priiloader/installing_file.png)

    ![Installing a Homebrew App OK](/images/priiloader/installing_file_ok.png)

1. Press `B` to return to the main menu.
1. Scroll down to `Settings` and press A.

    ![Settings](/images/priiloader/menu_settings.png)

1. Press Right to cycle through the Autoboot options until `Installed file` is selected.

    ![Autoboot: Installed File](/images/priiloader/autoboot_installed_file.png)

1. Scroll down to `save settings` and press A.

    ![Saving Settings](/images/priiloader/settings_save.png)

1. Press `B` to return to the main menu.
1. Scroll back up to `System Menu` and press A.

Your Wii should now automatically boot to whichever homebrew app you installed.

##### Autobooting the Homebrew Channel or Priiloader

1. Launch the Homebrew Channel
1. Launch Load Priiloader from the list of homebrew.
1. Scroll down to `Settings` and press A.

    ![Settings](/images/priiloader/menu_settings.png)

1. Press Right to cycle through the Autoboot options until your desired option is selected.
    + Disabled` will autoboot to the Priiloader menu.

    Please don't set Autoboot to `BootMii IOS`. You will get stuck in a loop until you continuously hold the RESET button to enter the Priiloader menu.
    {: .notice--warning}

    ![Autoboot](/images/priiloader/autoboot_disabled.png)

1. Scroll down to `save settings` and press A.

    ![Saving Settings](/images/priiloader/settings_save.png)

1. Press `B` to return to the main menu.
1. Scroll back up to `System Menu` and press A.

[Continue to Open Shop Channel Installation](osc) Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
