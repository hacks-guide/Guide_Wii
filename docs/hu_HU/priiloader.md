# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader) is an essential tool authored by [DacoTaco](https://github.com/DacoTaco) that adds a level of brick protection to your Wii. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

## Követelmények

- Egy SD kártya vagy pendrive
- [Priiloader Installer](https://oscwii.org/library/app/priiloader) (a `.zip` fájl)
- [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (a `.zip` fájl)

### Egyéb követelmények vWiihez (nem kötelező, de erősen ajánlott)

- Egy SD kártya
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (közvetlen letöltés)
  - [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) must be installed on your console for Priiloader Wii U Forwarder to function.

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

2. Indítsd el a Homebrew Channelt!

3. Indítsd el a homebrew listáról a „Priiloader Installer”-t.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Nyomd meg a +-gombot a Wii Remote-on vagy az A-gombot a GameCube-vezérlőn!

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. Nyomd meg az A-gombot a Homebrew Channelbe való visszatéréshez!

### III. rész – A Priiloader indítása

1. Nyomd meg a HOME-gombot, majd válaszd ki az „Exit to System Menu”-gombot a Homebrew Channelbe való visszatéréshez!
2. A konzol most meg fogja nyitni a Priiloader menüjét.

   ![](/images/priiloader/menu.png)

A későbbi indításhoz kövesd az alábbi lépéseket:

- A Wii bekapcsolása közben tartsd nyomva a RESET-gombot!
  - Csak Wii-konzolokon
- A konzol bekapcsolása közben tartsd nyomva az Esc-gombot egy csatlakoztatott USB-s billentyűzeten!
  - Wii, Wii mini és Wii U konzolokon
- Indítsd el a „Load Priiloader”-programot a Homebrew Channelből!
  - Wii, Wii mini és Wii U konzolokon
- Indítsd el a „Priiloader Wii U Forwarder”-programot!
  - Csak Wii U konzolokon

### IV. rész – A Priiloader beállítása

1. Görgess le a `System Menu Hacks` menüponthoz és nyomj `A` gombot.

   ![](/images/priiloader/menu_hacks.png)

   ::: warning

   If you have put the Priiloader installer on your USB drive, make sure you do not have an SD card inserted at the same time.

   Doing so will cause Priiloader to fail to find the `hacks_hash.ini` file.

   :::

2. A konzolod típusa alapján az alábbi beállításokat kell engedélyezned:
   - Wii:
     - If you are using 480p mode: `480p graphics fix in the system menu`
     - Block Disc Updates (lemezes frissítések letiltása)
     - Block Online Updates (internetes frissítések letiltása)
     - Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)
   - vWii:
     - Block Online Updates (internetes frissítések letiltása)
     - Wii System Settings via Options Button (Wii-rendszerbeállítások megnyitása az Options-gombbal)
     - Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)
   - Wii mini:
     - Block Disc Updates (lemezes frissítések letiltása)
     - Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)

3. Görgess le a `save settings` menüponthoz, és nyomj 'A' gombot.

4. Nyomj `B` gombot a főmenübe való visszatéréshez.

::: info

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.

:::

::: info

[Olvasd el a brick megelőzési útmutatást](bricks#brick-prevention)

These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.

:::

## Wii: További lépések

::: tip

[Folytatás a cIOS-sal](cios)

Ez az útmutató végigvezet az alap cIOS-ok telepítésén, ami további funkciókat fog elérhetővé tenni, mint például az USB Loaderek.

:::

## vWii: További lépések

::: tip

Continue to [vWii cIOS](cios-vwii)

This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.

:::

## Wii mini: További lépések

::: tip

Continue to [Wii mini cIOS](cios-mini)

This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.

:::
