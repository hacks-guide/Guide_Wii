# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. WiiConnect24 è stato disattivato il 27 giugno 2013. Although discontinued, there is a reverse-engineered service that you can connect to which restores this functionality, described below.

## WiiLink

[WiiLink](https://www.wiilink.ca/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console. WiiLink ospita una patcher per i servizi fornisce, dai canali internazionali come il Canale Notizie a delle esclusive regionali come Wii Room. The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink.ca/guide/)

## Aggiornare l'orologio RTC

In some cases, the RTC clock on your Wii may be desynced, causing errors when trying to connect to WiiConnect24 services, or other general online services on the Wii. In the event that you are receiving connection errors like FORE000006, you may use the below instructions to re-sync your Wii's internal RTC clock with the Internet.

::::: tabs

:::: tab Wii

### Requisiti

- A Wii with an active Internet connection
- L'Homebrew Channel
- Una scheda SD o dispositivo USB
- [sntp](https://oscwii.org/library/app/sntp)

### Instructions

1. Scarica ed estrai l'archivio zip di sntp nella root della tua scheda SD o dispositivo USB.

2. Inserisci la scheda SD o dispositivo USB nel tuo Wii.

3. Avvia il Canale Homebrew sul tuo Wii.

4. Avvia sntp.

   ![](/images/wiiconnect24/sntp/sntp-hbc.png)

5. Use the left and right arrows on the +Control Pad to select the time zone that matches your current time, then press the A button to write it to your system configuration.

   ![](/images/wiiconnect24/sntp/sntp-time-select.png)

6. Premi il pulsante HOME per uscire.

   ![](/images/wiiconnect24/sntp/sntp-success.png)

::::

:::: tab Wii U (vWii)

### Requisiti

- An exploited vWii environment
- L'Homebrew Channel
- Una scheda SD
- [Priiloader](priiloader)

### Instructions

1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.

   ![](/images/wiiconnect24/priiloader/patch-generate.png)

2. Seleziona "Generate" e copia le informazioni.

   ![](/images/wiiconnect24/priiloader/patch-copy.png)

3. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.

   ![](/images/wiiconnect24/priiloader/hacks-ini.png)

4. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.

   ![](/images/wiiconnect24/priiloader/hacks-ini-edit.png)

5. Ripeti i passaggi 1-4 con un nuovo offset di tempo se la tua posizione partecipa al risparmio di tempo legale.

6. Inserisci la tua scheda SD nella tua Wii U.

7. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.

8. Select `System Menu Hacks`, and ensure that the Fix NWC24iSetUniversalTime hack is enabled.

   ![](/images/wiiconnect24/priiloader/select-patch.png)

9. Ritorna al Menu vWii.

::::

:::::

## Wiiconnect24 Priiloader Hacks (vWii and Wii mini)

::: info

On vWii, the [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) hacks cannot be enabled at the same time. It is recommended to just enable the Permanent vWii Systems Settings hack, as you can enable WiiConnect24 there without issue. More information can be found [on the Priiloader FAQ page](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

If you are using vWii or a Wii mini, some Priiloader hacks need to be enabled to allow proper WiiConnect24 functionality. In `System Menu Hacks`, enable the following options according to your console:

| Console Type | Priiloader Options                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vWii         | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii mini     | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul>                                                                                                                                                                                                                                                                                 |

## WiiVCLaunch (vWii)

If you are on the Wii U, please ensure that you install WiiVCLaunch to ensure that your system settings are not overwritten when you run Wii Virtual Console games in the Wii U menu.

### Requisiti

- An exploited Wii U with the Aroma Environment
- Una scheda SD
- [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases)

### Istruzioni

1. Power off your console, and insert your SD card into your PC.

2. Go to the GitHub link above, and download the `WiiVCLaunch.wps` file.

   ![](/images/wiiconnect24/wiivclaunch/wps-download.png)

3. Copy the `WiiVCLaunch.wps` file to your SD card in the `/wiiu/environments/aroma/plugins` directory.

   ![](/images/wiiconnect24/wiivclaunch/wps-directory.png)

4. Insert the SD card into your Wii U and boot it into the Aroma Environment.

5. Hit the `L` + `+DPAD Down` + `- Minus` combination on your Gamepad/Pro Controller/Classic Controller, or the `B` + `+Control Pad Down` + `- Minus` combination on your Wii Remote to open the Wii U Plugin System Config Menu. Find the `Wii VC Launch` menu option and press `A`.

   ![](/images/wiiconnect24/wiivclaunch/aroma-config-menu.png)

6. Find the `Other settings` menu option and press `A`.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-config-menu.png)

7. Ensure that the `Preserve SYSCONF on Wii VC title launch` option is set to `true`. Once this is finished, you may exit the config menu by pressing `B` until you are at the Wii U menu.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-sysconf-config.png)

---

::: tip

[Proceed to Nintendo Wi-Fi Connection](nintendowfc)

This guide explains how to restore Nintendo Wi-Fi Connection functionality, allowing you to play games like Mario Kart Wii online again. While there are different services that might allow this, the one covered here will be Wiimmfi.

:::
