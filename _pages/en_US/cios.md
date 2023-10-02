---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

This guide will show you how to install cIOS (custom IOS). This enables the usage of USB Loader GX and WiiFlow. Some homebrew might also work better using cIOS.

![d2x cIOS Installer](/images/cios/cIOS.png)

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

If your Wii has an Internet connection, you may skip this section.<br/>
However, If you encounter any errors like `tcp_read timeout` and `net_gethostbyname failed:`, this will allow the Wii to skip the downloading step.
{: .notice--warning}

If you are not on Windows, you may download & run [this script](/assets/files/d2x_offline_ios.sh), and it will download the WAD files for you.
{: .notice--info}

1. Download, extract, and run [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Select "Database", "IOS", then "IOS38", and select "v4123".
    + Ensure that "Pack WAD" is checked.
    + *Don't* check "Patch IOS". That is the cIOS Installer's job.
1. Click `Start NUS Download!`.
1. Repeat the step 2 & 3 for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
1. Once you have downloaded all four IOS, there will be a folder named `titles` in the same folder as the NUS Downloader.
    + Open the folder and navigate through them until you locate the four WAD files you downloaded. Place each WAD file on the root of your SD card or USB drive.
    + This must be the same device containing the d2x cIOS Installer.

The WAD files should be on your SD card like this:
![offline IOS files](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Section II - Installing

1. Download the d2x cIOS installer and extract the zip to the root of your SD card or USB drive.
1. Insert the SD card or USB drive into your Wii, and launch the d2x cIOS Installer from the Homebrew Channel
1. Press A to continue, then set the options to the following:
    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base: 38
    Select cIOS slot: 248
    Select cIOS version <65535>
    ```
    If `d2x-v11-beta1` isn't showing up, try select the cIOS base first, then check again. This can also happen if your SD card is locked.
    {: .notice--info}
    ![Install cIOS 248](/images/cios/d2x_v11_248.png)
1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:
    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <56>
    Select cIOS slot <249>
    Select cIOS version <65535>
    ```
    ![Install cIOS 249](/images/cios/d2x_v11_249.png)
1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:
    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <57>
    Select cIOS slot <250>
    Select cIOS version <65535>
    ```
    ![Install cIOS 250](/images/cios/d2x_v11_250.png)
1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:
    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <58>
    Select cIOS slot <251>
    Select cIOS version <65535>
    ```
    ![Install cIOS 251](/images/cios/d2x_v11_251.png)
1. Once set, press A twice again to install, and then exit once done.

[Click here to go back to the site index.](site-navigation)
{: .notice--info}