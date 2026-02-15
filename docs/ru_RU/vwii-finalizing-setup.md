# Finalizing Setup — vWii

Now that the Homebrew Channel, Priiloader, and cIOS are installed, we are going to finalize setup for vWii by installing crucial apps to restore various missing functionalities of the vWii menu compared to a normal console. It is recommended that you download all homebrew listed below onto your storage device BEFORE starting the listed steps to save time.

## Patched IOS 80 Installer

Patched IOS 80 Installer for vWii is a homebrew app that takes the currently installed version of IOS 80 and patches it to omit the signature check. This allows fakesigned channels to be used on the SD card menu.

### Требования

- SD-карта или USB-накопитель
- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)

### Инструкции

1. Copy the `apps` folder in the `Patched_IOS80_Installer_for_vWii.zip` file to the root of your SD card or USB drive.

2. Вставьте вашу SD-карту или USB-накопитель в вашу консоль.

3. Launch the Homebrew Channel, and launch the Load Priiloader app.

4. Launch Patched IOS 80 Installer for vWii from the list of homebrew.

   ![](/images/vwii/ios80-installer/launch-hb.png)

5. The installer will launch, display a warning, and then start a 30 second timeout before installation can begin. Read this warning in detail before continuing, and then press any button to continue.

   ![](/images/vwii/ios80-installer/warning.png)

6. After continuing, the installer will patch and install IOS80. Once it is complete, you may press any button to return to the Homebrew Channel.

   ![](/images/vwii/ios80-installer/install.png)

## System Channel Restorer

System Channel Restorer is a homebrew app that restores channels missing from the vWii menu normally, such as the Wii version of the Mii Channel and Photo Channel.

### Требования

- SD-карта или USB-накопитель
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Инструкции

1. Copy the `apps` folder in the `system-channel-restorer.zip` file to the root of your SD card or USB drive.

2. Вставьте вашу SD-карту или USB-накопитель в вашу консоль.

3. Launch the Homebrew Channel, and launch the Load Priiloader app.

4. Launch System Channel Restorer from the list of homebrew.

   ![](/images/vwii/sys-channel-restore/launch-hb.png)

5. The installer will launch. Most users will want to select the following channels, unless you prefer to install additional channels:

   - EULA
   - Mii Channel

   ![](/images/vwii/sys-channel-restore/channel-select.png)

6. Once all channels are selected, press the `+` button to begin installation.

   ![](/images/vwii/sys-channel-restore/install-begin.png)

7. Once installation has finalized, you may return to the Homebrew Channel by pressing the HOME button.

## WiiWare 4:3 DB Patcher

WiiWare 4:3 DB Patcher is a homebrew app that patches the vWii's 4:3 aspect ratio database, such that WiiWare and Virtual Console titles may utilize the 16:9 aspect ratio where they normally cannot.

### Требования

- SD-карта или USB-накопитель
- [WiiWare 4:3 DB Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Инструкции

1. Copy the `apps` folder in the `ww-43db-patcher.zip` file to the root of your SD card or USB drive.

2. Вставьте вашу SD-карту или USB-накопитель в вашу консоль.

3. Launch the Homebrew Channel, and launch the Load Priiloader app.

4. Launch ww-43db-patcher from the list of homebrew.

   ![](/images/vwii/43db-patcher/hb-launch.png)

5. The installer will launch. Press the `1` or `X` buttons to patch the aspect ratio database.

   ![](/images/vwii/43db-patcher/install-prompt.png)

6. Once the aspect ratio database is patched, the installer will save a backup of the previous database. Do NOT delete this backup. You may press any button to return to the Homebrew Channel.

   ![](/images/vwii/43db-patcher/install-finish.png)

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your main vWii setup is complete, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
