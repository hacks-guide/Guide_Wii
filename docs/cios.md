---
outline: false
---

# cIOS

<br>

::::: tabs

:::: tab Wii/Family Edition

## cIOS for Wii/Family Edition

::: details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

### Requirements

* A Wii with the Homebrew Channel installed
* An SD card or USB drive
* The [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.

:::

### Instructions

#### Section I - Downloading

::: warning

Your browser or antivirus software may flag NUSGet as malware - this is a false positive. NUSGet does NOT contain any malware.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. Power off your console, and insert your SD card or USB drive into your computer.
1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
1. Unzip the archive and run the NUSGet executable.
1. Navigate to `IOS` > `IOS 38` > `World` and select `v4123`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

    ![](/images/desktop-apps/nusget/nusget-4123.png)
1. Repeat the above step for `IOS 56 (v5661)`, `IOS 57 (v5918)` and `IOS 58 (v6175)`.
1. When you have finished downloading the above IOS, navigate to the folder where your NUSGet executable is stored. This should now contain four different folders with the title IDs for the above IOS.

    ![](/images/desktop-apps/nusget/nusget-folder-ios.png)
1. Enter the four directories, locating a `IOS-XX-vXXXX-Wii.wad` file in each.

    ![](/images/desktop-apps/nusget/nusget-ios-output.png)
1. Place each WAD file on the root of your SD card or USB drive.
    * This must be the same device containing the d2x cIOS Installer.
1. Ensure that each WAD file is named as listed below for compatibility purposes with d2x-cios-installer:

    |  IOS   |     File Name      |
    | :----: | :----------------: |
    | IOS 38 | IOS38-64-v4123.wad |
    | IOS 56 | IOS56-64-v5661.wad |
    | IOS 57 | IOS57-64-v5918.wad |
    | IOS 58 | IOS58-64-v6175.wad |

::: info

The WAD files should be on your SD card like this:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

#### Section II - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch d2x cIOS Installer from the list of homebrew.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta3>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    ::: info

    If you do not see `d2x-v11-beta3`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    ::: info

    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

    :::

    ::: info

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

    (If you are trying to exit the installer, the button is B, not Home.)

    :::

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    ::: info

    If the slot is highlighted red, try to install the cIOS again.

    If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

    :::

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    * cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    * cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    * cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta3>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab vWii (Wii U)

## cIOS for vWii (Wii U)

::: details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

### Requirements

* A Wii U with the Homebrew Channel installed on the vWii
* An SD card or USB drive
* The [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.

:::

### Instructions

#### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch d2x cIOS Installer from the list of homebrew.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta3-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta3-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

1. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

1. Repeat the previous 2 steps with the following configurations:

    * cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    * cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    * cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta3-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

1. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to Finalizing Setup](vwii-finalizing-setup)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, you can proceed to restore functionality that is normally missing from a standard vWii menu.

:::

::::

:::: tab Wii mini

## cIOS for Wii mini

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

This d2x cIOS installer was originally developed for the Wii U's vWii by DaveBaol and custom cIOS was created by Leseratte for the Wii mini. You can optionally visit [the original download page for d2x](https://wii.leseratte10.de/d2xl-cIOS/) as well as [Leseratte's GitHub page](https://github.com/Leseratte10/d2xl-cios). Please note that this cIOS is still experimental, though no problem with functionality has been reported.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

### Requirements

* A Wii mini with the Homebrew Channel installed
* A USB drive
* The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

### Instructions

#### Section I - Downloading

1. Power off your console.
1. Insert your USB drive into your computer.
1. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
1. Reinsert your USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch d2xl cIOS Installer from the list of homebrew.

#### Section II - Installing

1. Select `Continue`.
1. Set the options to the following:

    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    * Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
1. Press A to install.
    * If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. The number 57 will not change.
1. When the process is complete, exit the installer.

::: tip

[Continue to Finalizing Setup](mini-finalizing-setup)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::

::::

:::::
