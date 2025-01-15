# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. WiiConnect24 was discontinued on June 27th, 2013.

## WiiLink

[WiiLink](https://www.wiilink24.com/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console.
As of late 2023, the service merged with revival project RiiConnect24, and today is just operated under the name WiiLink.

WiiLink hosts a patcher for the services that it provides, ranging from international channels such as the News Channel to regional exclusives such as Wii Room.
The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink24.com/guide/)

<!-- move this back to another page? or no -->

## Updating RTC Clock

### Wii

#### Você precisará de

- A working Internet connection on your Wii
- O Homebrew Channel
- Um cartão SD ou armazenamento USB
- [sntp](https://oscwii.org/library/app/sntp)

#### Instructions

1. Download and extract the sntp zip to the root of your SD card or USB drive.
2. Insert your SD card or USB drive into your Wii.
3. Inicie o Homebrew Channel no Wii.
4. Launch sntp.
5. Use the +Control Pad to select the current time.
6. Press the HOME Button to exit.

### vWii

#### Você precisará de

- O Homebrew Channel
- Um cartão SD
- [Priiloader](priiloader)

#### Instructions

1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.
2. Select generate and copy the information.
3. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.
4. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.
5. Repeat Steps 1-4 with a new time offset if your location participates in daylight savings time.
6. Insert your SD card into your Wii U.
7. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.
8. Select hacks, and scroll down to enable the Fix NWC24iSetUniversalTime hack.
9. Return to the vWii menu.

## Wiiconnect24 Priiloader Hacks

Some Priiloader hacks need to be enabled on the vWii and the Wii mini so the WiiConnect24 functions could work properly:

- [Create message via Calendar button (vWii, Mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
- [Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
- [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
- [Fix NWC24iSetUniversalTime (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

::: info

[Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) cannot be enabled at the same time. More information on how to use Permanent vWii System Settings can be found [here](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)

:::

::: tip

[Proceed to Nintendo Wi-Fi Connection](nintendowfc)

This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. While there are different private servers and services that allow this, the one covered here will be Wiimmfi.

:::
