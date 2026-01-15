# vWii Modding útmutató

Ez az útmutató végig vezet a vWii moddolásán a Wii U oldal móddolása nélkül. A Wii U egyéni firmware-ét fogjuk használni ehhez az útmutatóhoz, azonban magára a Wii U oldalra nem lesz telepítve semmi. A [legacy exploits](legacy-exploits) oldalra is ellátogathatsz, ahol további, a vWii-n működő exploitokat találsz.

::: info

Ha a Wii U oldal már moddolt, folytasd a [Homebrew Channel telepítésével](vwii-homebrew-channel)

:::

::: info

Az SD kártyád FAT32 kell formázva legyen. Ha az SD kártyád nem FAT32-re formázott, kövesd [ezt az útmutatót](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) a formázásához. **Ne** címkézd fel az SD kártyát `wiiu`-ként, különben problémákat okoz a homebrew-val.

## Követelmények

- A legutolsó fájlok az [Aroma for your café](https://aroma.foryour.cafe/) oldalról.
  - Olvasd el a megelőző lépéseket, majd pipáld be mind a négy dobozt.
  - Duplán ellenőrizd, hogy a nanddumper van kiválasztva.
  - Kattints a `Download Payloads`-ra.
  - Kattints a `Download Base Aroma`-ra.
- A [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) legutolsó kiadása. (`compat_installer-Aroma.zip`)

## Lépések

### I. rész - SD kártya előkészítés

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a tartalmát a letöltött Aroma _`.zip`_ fájlnak az SD kártyád gyökerébe.
3. Másold a `compat_installer.wuhb` fájlt a `compat_installer-Aroma.zip` fájlból a `wiiu` -> `apps` útvonalra az SD kártyádra.

SD kártya kiosztás

::: details Kattints ide végső SD kártya kiosztás megtekintéséhez.

```
💾sd:
 ┗ 📁 wiiu
   ┣ 📁 apps
   ┃ ┣ 📄 AromaUpdater.wuhb
   ┃ ┗ 📄 PayloadLoaderInstaller.wuhb
   ┣ 📁 environments
   ┃ ┗ 📁 aroma
   ┃   ┣ 📁 modules
   ┃   ┃ ┗ 📁 setup
   ┃   ┃   ┣ 📄 00_mocha.rpx
   ┃   ┃   ┣ 📄 10_wums_loader.rpx
   ┃   ┃   ┗ 📄 99_autoboot.rpx
   ┃   ┣ 📁 plugins
   ┃   ┃ ┣ 📄 AromaBasePlugin.wps
   ┃   ┃ ┣ 📄 drc_region_free.wps
   ┃   ┃ ┣ 📄 homebrew_on_menu.wps
   ┃   ┃ ┗ 📄 regionfree.wps
   ┃   ┗ 📄 root.rpx
   ┣ 📁 payloads
   ┃ ┣ 📁 default
   ┃ ┃ ┗ 📁 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

:::

### II. rész - Az exploit indítása

::: info

Biztosítsd, hogy a Wii U-dnak legyen internet hozzáférése ennél a lépésnél.

:::

1. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.
2. Indítsd el az Internet Browser-t és navogált a `wiiuexploit.xyz` weboldalra.
3. Kattints a `Run Exploit!`-ra és tartsd nyomva a B gombot, amíg az nem mondja a képernyő, hogy `Please choose your payload:`, ez szükséges lesz a következő lépésekhez.
   - Ha a Wii U-d megál egy fehér vagy más módon lefagyott képernyőnél, várj pár másodpercet. Ha semmi nem történi, bootold újra a konzolt, [és töröld a böngésző mentés adatát](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history), majd próbáld újra.
   - Ha az EnvironmentLoader-t látod, nem tartottad elég hosszan nyomva a B gombot. Próbáld újra.

### III. rész - NAND mentés

Ha valami rosszul sül el a későbbi folyamatban és a vWii brickelődik, a visszaállítása egy korábban készített NAND mentésből megjavítja azt.

1. Használd a Wii U GamePad D-Pad-jét a kövtkező konfiguráció beviteléhez:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
2. Nyomj A gombot a dumpolás elkezdéséhez.
3. Ha a folyamat végzett, kapcsold ki a Wii U-dat, vedd ki az SD kártyád a Wii U-ból és csatlakoztasd a PC-dhez.
4. Hogy biztosan ne veszd el a fájlokat, másold az `slccmpt.bin` és `otp.bin` fájlokat (és ha teljes mentést választottál a `seeprom.bin`, `slc.bin`, és `minden mlc.bin.part` fájlt) a számítógépedre.
5. Töröld a fájloat az SD kártyádról hely felszabadításához.
6. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.

::: tip

[Folytatás a Homebrew Channel telepítésével](vwii-homebrew-channel-no-wiiu-mods)

:::
