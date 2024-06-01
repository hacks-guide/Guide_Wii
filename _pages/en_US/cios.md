---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii users. If you have a Wii mini, follow [this guide](cios-mini) instead. If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Requirements

* A Wii
* An SD card or USB drive
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.
{: .notice--warning}

### Instructions

#### Section I - Downloading

If you are not on Windows, you may download & run [this script](/assets/files/d2x_offline_ios.sh), and it will download the WAD files for you.
{: .notice--info}

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)
{: .notice--info}

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
1. Run `NUS Downloader.exe`.
1. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
    + Ensure that "Pack WAD" is checked.
    + *Don't* check "Patch IOS". That is the cIOS Installer's job.
1. Click `Start NUS Download!`.
1. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
1. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
1. Place each WAD file on the root of your SD card or USB drive.
    + This must be the same device containing the d2x cIOS Installer.

The WAD files should be on your SD card like this:
![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Section II - Installing


1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch d2x cIOS Installer from the list of homebrew.
1. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)
    
    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.
    {: .notice--info}
    
    If you are seeing "`Slot ### already used in batch settings`" or
    "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br>
    (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}
    
1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)
    
1. Press `A` again.

    ![](/images/cios/d2x_installation.png)
    
1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)
    
    If the slot is highlighted red, try install the cIOS again. <br>
    If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}
    
1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)
        
1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br>
Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
