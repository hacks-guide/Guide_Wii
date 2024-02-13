---
title: "d2x cIOS for vWii"
---

{% include toc title="Table of Contents" %}

While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

If you have a Wii, use [this](cios) guide for cIOS instead. Attempting to install other cIOS on a Wii will not work.
{: .notice--warning}

If you have a Wii mini, use [this](cios-mini) guide for cIOS instead. Attempting to install other cIOS on a Wii mini will not work.
{: .notice--warning}

Do not attempt to install a Wii IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Requirements

- A Wii U with the Homebrew channel installed on the vWii
- An SD card
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.
{: .notice--warning}

### Instructions

#### Section I - Installing

1. Insert the SD into
2. Power on your Wii U and launch vWii.
2. Launch The Homebrew Channel.
3. Launch d2x cIOS Installer.
4. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
5. Press the `A` button to install.
6. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
7. Press the `A` button to install.
8. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
9. Press the `A` button to install.
10. Press the `B` button to exit.

- Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br>
Now that your vWii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
