# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

A [WiiConnect24(https://wikipedia.org/wiki/WiiConnect24) egy olyan szolgáltatás volt, amely lehetővé tette az internetkapcsolattal rendelkező felhasználók számára az időjárás-előrejelzés megtekintését, a barátoknak való üzenetküldést, a Mii-versenyeken való részvételt és sok mást. Ez a szolgáltatás 2013. június 27-én megszűnt.

## WiiLink

A [WiiLink](https://www.wiilink24.com/) egy olyan szolgáltatás, ami újraéleszti és kiterjeszti a WiiConnect24 funkcióit.
2023 második felében összeolvadt a RiiConnect24-nevű újraélesztőprojekttel és most mindketten a WiiLink-név alatt futnak.

A WiiLink egy csatornamódosítóval telepíthető, ami támogatja mind a nemzetközi csatornákat, mint a News Channel, mind a korábban régiókorlátos csatornákat, mint a Wii Room.
A szolgáltatások telepítési útmutatója a patcherrel együtt a [WiiLink] honlapján(https://www.wiilink24.com/guide/) érhető el

<!-- move this back to another page? or no -->

## A valós idejű óra átállítása

### Wii esetén

#### Amire szükséged van

- Egy Wii, ami csatlakoztatva van az internetre
- A Homebrew Channel
- Egy SD kártya vagy pendrive
- [sntp](https://oscwii.org/library/app/sntp)

#### Lépések

1. Töltsd le és csomagold ki az sntp. zip-fájlt az SD kártya vagy USB drive gyökerére.
2. Csatlakoztasd az USB drive-ot vagy az SD kártyát a Wiidhez.
3. Indítsd el a Homebrew Channelt!
4. Indítsd el az sntp-t.
5. Állítsd be a pontos időt a +Control Pad-del.
6. A kilépéshez nyomd meg a HOME gombot.

### vWii

#### Amire szükséged van

- A Homebrew Channel
- Egy SD kártya
- [Priiloader](priiloader)

#### Lépések

1. Látogasd meg az [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) oldalt és töltsd ki az információkat.
2. Kattints a „Generate” („generálás”)-gombra, majd másold ki a megjelenő információt kézileg vagy a „Copy” („másolás”)-gombbal!
3. Helyezd be az SD kártyát a számítógépbe és nyisd meg az `SD:/apps/priiloader` mappában található `hacks_hash.ini`-fájlt egy szövegszerkesztőben, pl. a Jegyzettömbben.
4. Illeszd be a kimásolt adatokat a `hacks_hash.ini` fájl legaljára és mentsd el a változtatásokat.
5. Ha a régiódban van nyári időszámítás, akkor ismételd meg az 1–4. lépést a másik időzónával is.
6. Helyezd be az SD kártyát a Wii U-dba.
7. [Bootold a Priiloader](priiloader#section-iii---entering-priiloader)-t a vWii-n.
8. Válaszd ki a „Hacks” menüpontot és engedélyezd a „Fix NWC24iSetUniversalTime” hacket.
9. Térj vissza a vWii menübe.

## WiiConnect24 Priiloader-módosítások

A WiiConnect24 vWiin és Wii minin való működéséhez bizonyos módosításokat engedélyezned kell. Ezekről (angol nyelven) alább olvashatsz:

- [Üzenet létrehozás a Calendar gombbal (vWii, Mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
- [Permanens vWii System beállítások (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
- [A WiiConnect24 engedélyezése mindig boot-nál (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
- [NWC24iSetUniversalTime javítás(vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

::: info

[A permanens vWii System beállítások (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) és [A WiiConnect24 engedélyezése mindig a bootnál (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) nem bekapcsolható egy időben. További információk a permanens vWii System Settings-ről [itt találhatók](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)

:::

::: tip

[Folytatás a Nintendo Wi-Fi Connectionnel](wiimmfi)

Ez az útmutató végigvezet a Wiid ismételt internetre való csatlakoztatásának a folyamatán. Az útmutató végén újra képes leszel online játékokat játszani, mint pl. a Mario Kart Wiit. Ugyan több különböző privát szerver is létezik, mi a Wiimmfit fogjuk megemlíteni.

:::
