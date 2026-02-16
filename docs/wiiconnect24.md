# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. WiiConnect24 was discontinued on June 27th, 2013. Although discontinued, there is a reverse-engineered service that you can connect to which restores this functionality, described below.

## WiiLink

[WiiLink](https://www.wiilink24.com/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console. WiiLink hosts a patcher for the services that it provides, ranging from international channels such as the News Channel to regional exclusives such as Wii Room. The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink24.com/guide/)

## Updating RTC Clock

In some cases, the RTC clock on your Wii may be desynced, causing errors when trying to connect to WiiConnect24 services, or other general online services on the Wii. In the event that you are receiving connection errors like FORE000006, you may use the below instructions to re-sync your Wii's internal RTC clock with the Internet.

::::: tabs

:::: tab Wii

### Requirements

* A Wii with an active Internet connection
* The Homebrew Channel
* An SD card or USB drive
* [sntp](https://oscwii.org/library/app/sntp)

### Instructions

1. Download and extract the sntp zip to the root of your SD card or USB drive.
1. Insert your SD card or USB drive into your Wii.
1. Launch the Homebrew Channel on your Wii.
1. Launch sntp.
1. Use the +Control Pad to select the current time.
1. Press the HOME Button to exit.

::::

:::: tab Wii U (vWii)

### Requirements

* An exploited vWii environment
* The Homebrew Channel
* An SD card
* [Priiloader](priiloader)

### Instructions

1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.
1. Select generate and copy the information.
1. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.
1. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.
1. Repeat Steps 1-4 with a new time offset if your location participates in daylight savings time.
1. Insert your SD card into your Wii U.
1. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.
1. Select `System Menu Hacks`, and ensure that the Fix NWC24iSetUniversalTime hack is enabled.
1. Return to the vWii menu.

::::

:::::

## Wiiconnect24 Priiloader Hacks (vWii and Wii mini)

::: info

On vWii, the [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) hacks cannot be enabled at the same time. It is recommended to just enable the Permanent vWii Systems Settings hack, as you can enable WiiConnect24 there without issue. More information can be found [on the Priiloader FAQ page](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

If you are using vWii or a Wii mini, some Priiloader hacks need to be enabled to allow proper WiiConnect24 functionality. In `System Menu Hacks`, enable the following options according to your console:

| Console Type | Priiloader Options |
| -------------| -------------------|
| vWii         | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii mini     | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul> |

In addition, if you are on the Wii U, please ensure that you install [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases) to ensure that your system settings are not overwritten when you run Wii Virtual Console games in the Wii U menu.

---

::: tip

[Proceed to Nintendo Wi-Fi Connection](nintendowfc)

This guide explains how to restore Nintendo Wi-Fi Connection functionality, allowing you to play games like Mario Kart Wii online again. While there are different services that might allow this, the one covered here will be Wiimmfi.

:::
