# Priiloader

A [Priiloader](https://github.com/DacoTaco/priiloader) egy alapvető eszköz amit [DacoTaco](https://github.com/DacoTaco) készített, és egy brick védelmi szintet ad a Wii-odhoz. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

## Követelmények

- Egy SD kártya vagy pendrive
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (a `.zip` fájl)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (a `.zip` fájl)

### Egyéb követelmények vWiihez (nem kötelező, de erősen ajánlott)

- Egy SD kártya
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (közvetlen letöltés)
  - Az [Aroma](https://wiiu.hacks.guide/aroma/getting-started)-nak telepítve kell lennie a konzolodra, hogy a Priiloader Wii U Forwarder működjön.

## Lépések

### I. rész – Előkészületek

1. Kapcsold ki a konzolod.
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
3. Másold az `apps` mappát a LoadPriiloader `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.
4. Másold az `apps` mappát a priiloader `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.
5. (Csak vWii) Másold a `wiiu` mappát a PriiloaderWiiUForwarder `.zip` fájlból az SD kártya gyökerébe.
6. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

### II. rész – A Priiloader telepítése

1. Kapcsold be a konzolod.

2. Indítsd el a Homebrew Channelt.

3. Indítsd el a homebrew listáról a „Priiloader Installer”-t.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Nyomd meg a +-gombot a Wii Remote-on vagy az A-gombot a GameCube-vezérlőn.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Nyomd meg az A gombot a Homebrew Channelbe való visszatéréshez.

### III. rész – A Priiloader indítása

1. Nyomd meg a HOME-gombot, majd válaszd ki az „Exit to System Menu”-gombot a Homebrew Channelbe való visszatéréshez!
2. A konzol most meg fogja nyitni a Priiloader menüjét.

   ![](/images/priiloader/menu.png)

:::details A jövőben a következő módszereket használható a Priiloader-be belépésre:

| Konzol típus | Priiloader belépési módszerek                                                                                                                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wii esetén   | <ul><li>A RESET gomb nyomvatartásával a konzol bekapcsolása során vagy a Wii Menu-ben</li><li>Az ESC gomb nyomva tartásával a csatlakoztatott USB billentyűzeten a konzol bekapcsolása során </li><li>A `Load Priiloader` eszköz futtatásával a Homebrew Channel-ről</li></ul> |
| vWii         | <ul><li>Az ESC gomb nyomva tartásával a csatlakoztatott USB billentyűzeten a konzol bekapcsolása során </li><li>A `Load Priiloader` eszköz futtatásával a Homebrew Channel-ről</li><li>a Priiloader forwarder futtatásával a Wii U Menu-ből</li></ul>                          |
| Wii mini     | <ul><li>Az ESC gomb nyomva tartásával a csatlakoztatott USB billentyűzeten a konzol bekapcsolása során </li><li>A `Load Priiloader` eszköz futtatásával a Homebrew Channel-ről</li></ul>                                                                                       |

:::

### IV. rész – A Priiloader beállítása

::: warning

Ha a Priiloader telepítőt az USB drive-odra raktad, legyél biztos abban, hogy vele egy időben NINCS SD kártya bedugva.

Ha ez mégis így van, akkor a Priiloader nem fogja megtalálni a hacks_hash.ini\\` fájlt.

:::

1. Görgess le a `System Menu Hacks` menüponthoz és nyomj `A` gombot.

   ![](/images/priiloader/menu_hacks.png)

2. A `System Menu Hacks`-ok között kapcsold be a konzolodnak megfelelő következő opciókat:

   | Konzol típus | Priiloader opciók                                                                                                                                                                                       |
   | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Wii esetén   | <ul><li>Ha 480p módot használsz: `480p graphics fix in the system menu`</li><li>`Block Disc Updates`</li><li>`Block Online Updates`</li><li>Ha NEM CRT kijelzőt használsz: `Remove Deflicker`</li></ul> |
   | vWii         | <ul><li>`Block Online Updates`</li><li>`Wii System Settings via Options Button`</li><li>Ha NEM CRT kijelzőt használsz: `Remove Deflicker`</li></ul>                                                     |
   | Wii mini     | <ul><li>`Block Online Updates`</li><li>Ha NEM CRT kijelzőt használsz: `Remove Deflicker`</li></ul>                                                                                                      |

3. Görgess le a `save settings` menüponthoz, és nyomj 'A' gombot.

4. Nyomj `B` gombot a főmenübe való visszatéréshez.

::: info

A Priiloader további használati lehetőségeiről és System Menu hackekről a [Priiloader használat](priiloader-usage) oldalon találhatsz további információt.

:::

::: info

[Olvasd el a brick megelőzési útmutatást](bricks#brick-prevention)

Ez az úmtutató segédlet segít elkerülni a Wii-od brickelését, ha több van rajta, mint egy BootMii és egy Priiloader telepítés.

:::

## További lépések

::: tip

Folytatás a [cIOS-sal](cios)

Ez az útmutató végigvezet az alap cIOS-ok konzolodra telepítésén, ami további funkciókat fog elérhetővé tenni, mint például az USB Loaderek.

:::
