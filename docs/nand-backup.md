---
outline: false
---

# Creating a NAND Backup (Wii)

In order to protect your Wii from permanant bricks, this guide will instruct you on how to create a NAND backup.

::: tip

**For standard Wii consoles**

If you own a standard Wii console, you will want to select **BootMii**, unless you do NOT have an SD card on hand, in which case you will want to select **nanddumper@ios**.

:::

::: tip

**For Wii minis**

If you own a Wii mini, most users will want to select **nanddumper@ios**. If you have soldered an SD card slot to your console, you can select **BootMii**.

:::

::: details Importing NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open Dolphin Emulator.
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select Open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

:::

::::: tabs

:::: tab BootMii (dump to SD card)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Please read the below information before proceeding further.

::: details Important Information

* After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

* If you have BootMii installed as boot2, you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.

* You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

* Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

* Family Edition Wiis CANNOT restore NAND backups without hardware modification. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code.

:::

::: danger

**Important Warnings**

* You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the **nanddumper@ios** guide instead.

* If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

* If the screen stays black and the blue disc drive light is blinking upon launching BootMii, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

## Requirements

* An SD card with a minimum 512MB of free space (1GB or more recommended)

## Instructions

1. Power on your console.
1. Launch the Homebrew Channel.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

1. A NAND backup will start. You can watch the progress on the screen.
    * "Bad Blocks" are normal, and mostly originate from the factory due to NAND binning. Don't worry when you see some on a NAND backup.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. Ideally, all the blocks should be green after the verification process.
    * If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long as all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Press the Back button (the one with an arrow), then press either the Wii Menu button or the Homebrew Channel button to exit BootMii.

    ![](/images/bootmii/BootMii_Return.png)

## Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.

:::

::::

:::: tab nanddumper@ios (dump to USB drive)

On Wii consoles with a usable USB slot, nanddumper@ios allows for backing up your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an USB drive, which you can then use however you like.

Please read the below information before proceeding further.

::: details Important Information

* After the completion of this guide, four files will have been created in the directory `/wii/backups` on your USB drive. `DATE_SERIAL_nand_XX.bin` is your NAND backup, and `SERIAL_keys.bin` is the file containing your console keys. `DATE_SERIAL_nand_XX.bin.sha1` and `sha1sums.txt` respectively are files containing checksums to verify the integrity of your backups, and will not be used in an actual NAND restoration.

* Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives. You can ONLY use BootMii to restore a NAND backup if you have a usable SD card slot, as described below.

* If you are a Wii mini user or DO NOT have a usable SD card slot, you will be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires an SD card slot to read the NAND from, as well as a GameCube controller to enter the Konami code with to confirm IOS restorations.

:::

::: danger

**Important Warnings**

* You need a **USB storage device** formatted to FAT32 to use nanddumper@ios. If you do not have an USB drive on hand right now, but instead have an SD card slot on your Wii with a usable SD card, you can use the **BootMii** guide instead.

:::

## Requirements

* A Wii
* A USB drive
* [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.
1. Extract the `apps` folder in the archive to the root of your SD card or USB drive.
1. Insert the USB drive into your Wii, and start the Homebrew Channel. Press `1` and ensure that `USB device` is selected, and then open nanddumper@ios.
    * If you get an **Exception IOS occurred!** error, simply restart your Wii and try again.

    ![](/images/nanddumper@ios/select-hbc.png)

1. nanddumper@ios will start and dump your console keys upon opening, if they are not already on your drive. Press any button that is NOT the `HOME`, `START`, or `EJECT` buttons to begin dumping your console's NAND storage.
    * If you get a **No storage devices are attached** error, ensure that your USB device is directly connected to your Wii and NOT to a USB hub.
  
    ![](/images/nanddumper@ios/dump-startup.png)

1. Your console's NAND will now begin dumping. Please wait for the NAND dump to finish before proceeding.

    ![](/images/nanddumper@ios/dump-in-progress.png)

1. Once the NAND backup has concluded, press any button to exit nanddumper@ios. Your NAND backup and console keys will be output to your USB drive in directory `/wii/backups/`.

    ![](/images/nanddumper@ios/dump-complete.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.

If you are on Wii mini, this is your primary level of brick protection.

:::

:::::
