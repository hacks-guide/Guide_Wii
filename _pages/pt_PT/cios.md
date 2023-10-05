---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

If you have a Wii mini, use [this](cios-mini) guide for cIOS instead. Attempting to install other cIOS on a Wii mini will not work.
{: .notice--warning}

### Requirements

* A Wii
* An SD card or USB drive
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.
{: .notice--warning}

### Instructions

#### Section I - Downloading (Only required if your Wii doesn't have Internet)

If your Wii has an Internet connection, you may skip this section.<br> However, If you encounter any errors like `tcp_read timeout` and `net_gethostbyname failed:`, this will allow the Wii to skip the downloading step.
{: .notice--warning}

If you are not on Windows, you may download & run [this script](/assets/files/d2x_offline_ios.sh), and it will download the WAD files for you.
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

The WAD files should be on your SD card like this: ![offline IOS files](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Section II - Installing

If `d2x-v11-beta1` isn't showing up, try select the cIOS base first, then check again. This can also happen if your SD card is locked.
{: .notice--info}

On each cIOS that you try to install, you will first be shown a grid of active IOS on the Wi. Simply press A again, and it will install. Then, you will be shown a results screen, just press A as well and go to the next cIOS.
{: .notice--info}

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch d2x cIOS Installer from the list of homebrew.
1. When asked what IOS you would like to use, select IOS 58.
    + This should work in nearly all cases.
1. Now, you will install individual cIOS from 248-251. The exact settings needed are listed below.
    + cIOS 248 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <38>
        Select cIOS slot <248>
        Select cIOS version <65535>
        ```

        ![Install cIOS 248](/images/cios/d2x_v11_248.png)

    + cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS version <65535>
        ```

        ![Install cIOS 249](/images/cios/d2x_v11_249.png)

    + cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS version <65535>
        ```

        ![Install cIOS 250](/images/cios/d2x_v11_250.png)

    + cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS version <65535>
        ```

        ![Install cIOS 251](/images/cios/d2x_v11_251.png)

[Continue to Recommended Homebrew](recommended-homebrew)<br> This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.
{: .notice--info}
