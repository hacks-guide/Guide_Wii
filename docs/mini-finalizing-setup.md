# Finalizing Setup (Wii mini)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, we are going to finalize setup for your Wii mini by installing crucial apps to restore various missing functionalities of the Wii mini menu compared to a normal console. It is recommended that you download all homebrew listed below onto your storage device BEFORE starting the listed steps to save time.

## Wii mini Ethernet Enable

Wii mini Ethernet Enable is a homebrew app that patches your Wii mini to support wired Ethernet adapters, allowing your console to connect to the internet where previously impossible. Only adapters with the `ASIX AX88772` chipset are supported on the Wii mini. Additionally, homebrew apps that need internet will require the use of a USB hub, as the console only has a singular USB port.

### Requirements

* A USB drive
* [Wii mini Ethernet Enable](https://oscwii.org/library/app/Wii_Mini_Ethernet_Enable)

### Instructions

1. Copy the `apps` folder in the `Wii_Mini_Ethernet_Enable.zip` file to the root of your USB drive.
1. Reinsert USB drive into your console.
1. Launch the Homebrew Channel.
1. Launch Wii Mini Ethernet Enable from the list of homebrew.

    ![](/images/wii-mini/ethernet-enabler/launch-hb.png)

1. The application will launch and should output `OK.` after attempting to enable Ethernet usage on your Wii mini. After this, press the `HOME` button on your Wii remote to exit the app.

    ![](/images/wii-mini/ethernet-enabler/success.png)

## System Channel Restorer

System Channel Restorer is a homebrew app that restores channels missing from the Wii mini menu normally, such as the Wii version of the Mii Channel and Photo Channel.

### Requirements

* An SD card or USB drive
* An Internet connection
* [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Instructions

1. Copy the `apps` folder in the `system-channel-restorer.zip` file to the root of your USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Launch the Homebrew Channel.
1. Launch System Channel Restorer from the list of homebrew.

    ![](/images/wii-mini/sys-channel-restore/launch-hb.png)

1. The installer will launch. If you receive **-3 Failed to initialize network**, ensure that your Ethernet adapter is connected properly. Most users will want to select the following channels, unless you prefer to install additional channels:
    * EULA
    * Mii Channel

    ![](/images/wii-mini/sys-channel-restore/channel-select.png)

1. Once all channels are selected, press the `+` button to begin installation.

    ![](/images/wii-mini/sys-channel-restore/install.png)

1. Once installation has finalized, you may return to the Homebrew Channel by pressing the HOME button.

## Accepting the EULA

In order to use features like WiiConnect24, you must accept the Wii User Agreement (EULA). This can normally only be done through the Wii Settings app or the Wii Shop Channel, however you can download a forwarder to launch the EULA from the Homebrew Channel.

### Requirements

* A USB drive
* [EULA Loader NTSC](/assets/files/EULA_Loader_NTSC.zip)
* [EULA Loader PAL](/assets/files/EULA_Loader_PAL.zip)

### Instructions

1. Download the forwarder above that matches the region of your Wii mini console. The forwarder will not work if you download the incorrect region.
1. Copy the `apps` folder in the `EULA_Loader_XXX.zip` file to the root of your USB drive.
1. Launch the Homebrew Channel.
1. Launch EULA Loader (your region) from the list of homebrew.

    ![](/images/wii-mini/eula-forwarder/launch-hb.png)

1. The EULA will launch. Press the Next button to proceed.

    ![](/images/wii-mini/eula-forwarder/eula-start.png)

1. Press I ACCEPT to accept the EULA. You will be returned to the Wii Menu afterwards.

    ![](/images/wii-mini/eula-forwarder/eula-accept.png)

---

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii mini setup is complete, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii mini.

:::
