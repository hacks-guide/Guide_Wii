---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

This tutorial will tell you how to install cIOS (custom IOS). This is required if you want to load games with a USB Loader. Some homebrew might work better using cIOS.

![d2x cIOS Installer](/images/cios/cIOS.png)

If you have a Wii U (vWii), follow [this guide](https://wiiu.hacks.guide/#/vwii-modding) to install cIOS instead. Attempting to install any other cIOS on vWii won't work.
{: .notice--info}

If you have a Wii mini, install [this cIOS](cios-mini) instead. Attempting to install any other cIOS on a Wii mini won't work.
{: .notice--info}

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
    Select cIOS: d2x-v11-beta1
    Select cIOS base: 38
    Select cIOS slot: 248
    Select cIOS version: 65535
    ```

    If `d2x-v11-beta1` isn't showing up, try select the cIOS base first, then check again. This can also happen if your SD card is locked.
    {: .notice--info}

    ![Install cIOS 248](/images/cios/d2x_v11_248.png)

1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:

    ```
    Select cIOS: d2x-v11-beta1
    Select cIOS base: 56
    Select cIOS slot: 249
    Select cIOS version: 65535
    ```

    ![Install cIOS 249](/images/cios/d2x_v11_249.png)

1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:

    ```
    Select cIOS: d2x-v11-beta1
    Select cIOS base: 57
    Select cIOS slot: 250
    Select cIOS version: 65535
    ```

    ![Install cIOS 250](/images/cios/d2x_v11_250.png)

1. Once set, press A twice to install.
1. When done installing, press A to return, and set the options to the following:

    ```
    Select cIOS: d2x-v11-beta1
    Select cIOS base: 58
    Select cIOS slot: 251
    Select cIOS version: 65535
    ```

    ![Install cIOS 251](/images/cios/d2x_v11_251.png)

1. Once set, press A twice again to install, and then exit once done.

### Troubleshooting

{% capture bruh %}
Although the majority of games should work straight away with the defaults, some may require using a specific cIOS to function, or to utilize certain features within the game.<br>
Examples include:

+ Using a keyboard in Animal Crossing: City Folk.
+ Running SpongeBob's Boating Bash.

A more comprehensive (although still incomplete) list can be found [**here**](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List)<br>
To change the cIOS used for a specific game, follow these instructions:
{% endcapture %}

<div class="notice--warning">{{ bruh | markdownify }}</div>

<button class="tablinks btn btn--large btn--primary" id="defaultOpen" onclick="openTab(event, 'usbloadergx')">USB Loader GX</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'wiiflow')">WiiFlow</button>

<div id="usbloadergx" class="blanktabcontent" markdown="1">
1. Select the game that isn't working.
1. Click Settings.
1. Select `Game Load`.
1. Scroll down to `Game IOS`.
1. Enter the IOS slot to use.
    + Try using 250 or 251, if 249 doesn't work.
1. Press OK and try to load the game.
</div>
<div id="wiiflow" class="blanktabcontent" markdown="1">
1. Select the game that isn't working.
1. Click the gear icon.
1. Go to cIOS and use the arrows to select the IOS slot to use.
    + Try using 250 or 251, if 249 doesn't work.
1. Press Save and try to load the game.
</div>

### Options once complete

[Continue to the Homebrew Browser](hbb)<br>
The Homebrew Browser is a good place to get homebrew on your Wii. This is optional to install.
{: .notice--info}

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}

You can now use homebrew such as [USB Loader GX](usbloadergx) and [WiiFlow](wiiflow).
{: .notice--info}

<script src="/assets/js/tabs.js"></script>
