# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. Ez a szolgáltatás 2013. június 27-én megszűnt.

## WiiLink

[WiiLink](https://www.wiilink24.com/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console.
2023 második felében összeolvadt a RiiConnect24-nevű újraélesztőprojekttel és most mindketten a WiiLink-név alatt futnak.

A WiiLink egy csatornamódosítóval telepíthető, ami támogatja mind a nemzetközi csatornákat, mint a News Channel, mind a korábban régiókorlátos csatornákat, mint a Wii Room.
The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink24.com/guide/)

<!-- move this back to another page? or no -->

## A valós idejű óra átállítása

### Wii esetén

#### Amire szükséged van

- Egy Wii, ami csatlakoztatva van az internetre
- A Homebrew Channel
- Egy SD kártya vagy pendrive
- [sntp](https://oscwii.org/library/app/sntp)

#### Instructions

1. Töltsd le és csomagold ki az sntp .zip-fájlt az SD kártya vagy pendrive gyökerére!
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a Wiidhez!
3. Indítsd el a Homebrew Channelt!
4. Indítsd el az sntp-t!
5. Állítsd be a pontos időt a nyílgombokkal!
6. A kilépéshez nyomd meg a HOME-gombot!

### vWii

#### Amire szükséged van

- A Homebrew Channel
- Egy SD kártya
- [Priiloader](priiloader)

#### Instructions

1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.
2. Kattints a „Generate” („generálás”)-gombra, majd másold ki a megjelenő információt kézileg vagy a „Copy” („másolás”)-gombbal!
3. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.
4. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.
5. Ha a régiódban van nyári időszámítás, akkor ismételd meg az 1–4. lépést a másik időzónával is!
6. Helyezd be az SD kártyát a Wii U-ba!
7. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.
8. Válaszd ki a „Hacks”-menüpontot és engedélyezd a „Fix NWC24iSetUniversalTime”-módosítást!
9. Térj vissza a vWii menübe!

## WiiConnect24 Priiloader-módosítások

A WiiConnect24 vWiin és Wii minin való működéséhez bizonyos módosításokat engedélyezned kell. Ezekről (angol nyelven) alább olvashatsz:

- [Create message via Calendar button (vWii, Mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
- [Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
- [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
- [Fix NWC24iSetUniversalTime (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

::: info

[Permanent vWii System Settings (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) cannot be enabled at the same time. More information on how to use Permanent vWii System Settings can be found [here](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)

:::

::: tip

[Proceed to Nintendo Wi-Fi Connection](wiimmfi)

This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. Ugyan több különböző privát szerver is létezik, mi a Wiimmfit fogjuk megemlíteni.

:::
