# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

A [WiiConnect24(https://wikipedia.org/wiki/WiiConnect24) egy olyan szolgáltatás volt, amely lehetővé tette az internetkapcsolattal rendelkező felhasználók számára az időjárás-előrejelzés megtekintését, a barátoknak való üzenetküldést, a Mii-versenyeken való részvételt és sok mást. Ez a szolgáltatás 2013. június 27-én megszűnt. Habár megszűnt, létezik egy kód visszafejtés alap szolgáltatás, amihez csatlakozhatsz, és ami helyreállítja ez a szolgáltatást és alább kerül leírásra.

## WiiLink

A [WiiLink](https://www.wiilink.ca/) egy olyan szolgáltatás, ami újraéleszti és kiterjeszti a WiiConnect24 funkcióit. A WiiLink egy csatornamódosítóval telepíthető, ami támogatja mind a nemzetközi csatornákat, mint a News Channel, mind a korábban régiókorlátos csatornákat, mint a Wii Room. A szolgáltatások telepítési útmutatója a patcherrel együtt a [WiiLink] honlapján(https://www.wiilink.ca/guide/) érhető el

## A valós idejű óra átállítása

Bizonyos esetekben az RTC óra a Wii-odon deszinkronizált lehet, problémákat okozva a WiiConnect24 szolgáltatások csatlakozáshoz vagy más általán online szolgáltatáshoz a Wii-n. Ha csatlakozási hibákat kapsz, mint pl. FORE000006, elképzelhető, hogy használnod kell a lenti lépéseket, hogy újraszinkronizáld a Wii belső RTC óráját az internethez.

::::: tabs

:::: tab Wii

### Requirements

- Egy internetkapcsolattal rendelkező Wii
- A Homebrew Channel
- Egy SD kártya vagy pendrive
- [sntp](https://oscwii.org/library/app/sntp)

### Lépések

1. Töltsd le és csomagold ki az sntp. zip-fájlt az SD kártya vagy USB drive gyökerére.

2. Csatlakoztasd az USB drive-ot vagy az SD kártyát a Wiidhez.

3. Indítsd el a Homebrew Channelt!

4. Indítsd el az sntp-t.

   ![](/images/wiiconnect24/sntp/sntp-hbc.png)

5. Használd a bal és jobb nyilakatat a +Control Pad-on az időzóna kiválasztásához, ami passzol a jelenlegi idődhöz, majd nyomj A gombot a rendszerkonfigrációba íráshoz.

   ![](/images/wiiconnect24/sntp/sntp-time-select.png)

6. A kilépéshez nyomd meg a HOME gombot.

   ![](/images/wiiconnect24/sntp/sntp-success.png)

::::

:::: tab Wii U (vWii)

### Requirements

- Egy exploitolt vWii környezet
- A Homebrew Channel
- Egy SD kártya
- [Priiloader](priiloader)

### Lépések

1. Látogasd meg az [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) oldalt és töltsd ki az információkat.

   ![](/images/wiiconnect24/priiloader/patch-generate.png)

2. Kattints a „Generate” („generálás”)-gombra, majd másold ki a megjelenő információt kézileg vagy a „Copy” („másolás”)-gombbal!

   ![](/images/wiiconnect24/priiloader/patch-copy.png)

3. Helyezd be az SD kártyát a számítógépbe és nyisd meg az `SD:/apps/priiloader` mappában található `hacks_hash.ini`-fájlt egy szövegszerkesztőben, pl. a Jegyzettömbben.

   ![](/images/wiiconnect24/priiloader/hacks-ini.png)

4. Illeszd be a kimásolt adatokat a `hacks_hash.ini` fájl legaljára és mentsd el a változtatásokat.

   ![](/images/wiiconnect24/priiloader/hacks-ini-edit.png)

5. Ha a régiódban van nyári időszámítás, akkor ismételd meg az 1–4. lépést a másik időzónával is.

6. Helyezd be az SD kártyát a Wii U-dba.

7. [Bootold a Priiloader](priiloader#section-iii---entering-priiloader)-t a vWii-n.

8. Válaszd a `System Menu Hacks` opciót és biztosítsd, hohy a Fix NWC24iSetUniversalTime hack engedélyezett.

   ![](/images/wiiconnect24/priiloader/select-patch.png)

9. Térj vissza a vWii menübe.

::::

:::::

## Wiiconnect24 Priiloader hackek (vWii és Wii mini)

::: info

On vWii, the [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) hacks cannot be enabled at the same time. It is recommended to just enable the Permanent vWii Systems Settings hack, as you can enable WiiConnect24 there without issue. More information can be found [on the Priiloader FAQ page](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

If you are using vWii or a Wii mini, some Priiloader hacks need to be enabled to allow proper WiiConnect24 functionality. A `System Menu Hacks`-ok között kapcsold be a konzolodnak megfelelő következő opciókat:

| Konzol típus | Priiloader opciók                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vWii         | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii mini     | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul>                                                                                                                                                                                                                                                                                 |

## WiiVCLaunch (vWii)

If you are on the Wii U, please ensure that you install WiiVCLaunch to ensure that your system settings are not overwritten when you run Wii Virtual Console games in the Wii U menu.

### Requirements

- Egy exploitolt Wii U Aroma környezettel
- Egy SD kártya
- [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases)

### Lépések

1. Kapcsold ki a konzolod és csatlakoztasd az SD kártyád a számítógépedhez.

2. Menj a fenti GitHub linkre és töltsd le a `WiiVCLaunch.wps` fájlt.

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

[Folytatás a Nintendo Wi-Fi Connectionnel](wiimmfi)

This guide explains how to restore Nintendo Wi-Fi Connection functionality, allowing you to play games like Mario Kart Wii online again. While there are different services that might allow this, the one covered here will be Wiimmfi.

:::
