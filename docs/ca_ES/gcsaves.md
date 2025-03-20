# GameCube Saves

This is a full guide on how to manage your GameCube saves.

::: info

Use of any GameCube peripheral with a Family Edition Wii or Wii mini require soldering on GameCube ports and/or memory card slots.

:::

## Uploading an Individual Save (.gci File) to a Physical Memory Card

### str2hax Method

- A Wii with GameCube ports
- An SD Card or USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### Instructions

#### Downloading

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Insert your SD card or USB drive into your Wii and launch GCMM from the Homebrew Channel.

#### Restoring

1. Insert your physical memory card into Slot A or Slot B.

2. Select the device you want to restore from.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. In GCMM, Press X on a GameCube controller or + on a Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Select the slot your memory card is in.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Select the save you want to restore. If you have multiple saves to restore, you can press R on the GameCube controller or 1 on the Wii remote to restore all of your saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. When restoration is complete, press any button to continue.

## Backing Up A Save (.gci File) to an SD or USB From a Physical Memory Card

### str2hax Method

- A Wii with GameCube ports
- An SD Card or USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Downloading

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Insert your SD card or USB drive into your Wii and launch GCMM from the Homebrew Channel.

#### Backing Up

1. Insert your physical memory card into slot A or slot B.

2. Select the device you want to backup to.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. In GCMM, Press Y on a GameCube controller or - on a Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Select the slot your memory card is in.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Select the save you want to backup. If you have multiple saves to backup, you can press R on the GameCube controller or 1 on the Wii remote to backup all of your saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. When backing up is complete, press any button to continue.

## Backing Up Your Physical Memory Card Into an Emulated Memory Card (.raw file)

### str2hax Method

- A Wii with GameCube ports
- An SD Card or USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Downloading

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Insert your SD card or USB drive into your Wii and launch GCMM from the Homebrew Channel.

#### Dumping the .raw

1. Insert your memory card into Slot A or Slot B.

2. Select the device you want to dump to.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Press L and Y at the same time on GameCube Controller or B and - at the same time on the Wii remote to backup your to a .raw file and select the slot your memory card is in.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. When the dump is complete, press any button to continue. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Restoring an Emulated Memory Save to a Physical Memory Card

### str2hax Method

- A Wii with GameCube ports
- An SD Card or USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. Insert your memory card into Slot A or Slot B.

4. Select the device you want to restore from.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. Press L and X at the same time on GameCube controller or B and + at the same time on the Wii remote.

6. Select the slot your memory card is in.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. It should restore the .raw file to your memory card. When restoration is complete, press any button to continue.

## Transferring Saves Between 2 Physical Memory Cards

### str2hax Method

- A Wii with GameCube ports
- At least 2 physical memory cards

### Instructions

1. Insert both memory cards into the Wii.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg)

    ![](/images/homebrew/gcsaves/settings.jpg)

    ![](/images/homebrew/gcsaves/data-management.jpg)

    ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
