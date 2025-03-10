# d2x cIOS for vWii

::: details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

This guide is only intended for Wii U users.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

* A Wii U with the Homebrew Channel installed on the vWii
* An SD card
* The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.

:::

## Instructions

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card.
1. Eject the SD card from your PC and insert it into the Wii U.
1. Power on your Wii U and launch vWii.
1. Launch The Homebrew Channel.
1. Launch d2x cIOS Installer.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta2-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta2-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    ::: info

    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

    :::

1. Press the `A` button to install.
1. Repeat the previous 2 steps with the following configurations:

    + cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249_vwii.png)

    + cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    + cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

Continue to [Finalizing Setup](vwii-finalizing-setup)

:::
