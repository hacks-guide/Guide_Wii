# A Wii U NAND dumpolása

Ez az oldal végig vezet a NAND dump készítésén a Wii U-dról. Ez megvéd attól, hogy ha valami elromlik és a Wii U-d brickelődik, lehetővé téve a NAND visszaállítását mentésből.

::: tip

Ha már exploitoltad a Wii U-dat és csináltál NAND dumpot folytasd [A Homebrew Channel telepítésével](vwii-homebrew-channel).

:::

::: warning

Az SD kártyád FAT32 kell formázva legyen. Ha az SD kártyád nem FAT32-re formázott, kövesd [ezt az útmutatót](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) a formázásához.

**NE** címkézd fel az SD kártyát `wiiu`-ként, különben problémákat okoz a homebrew-val.

:::

## Követelmények

- Egy Wii U
- A legutolsó fájlok az [Aroma for your café](https://aroma.foryour.cafe/) oldalról.
  - Olvasd el a megelőző lépéseket, majd pipáld be mind a négy dobozt.
  - Ellenőrizd, hogy a nanddumper van kiválasztva.
  - Kattints a `Download Payloads`-ra.
  - Kattints a `Download Base Aroma`-ra.
- A [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) legutolsó kiadása. (`compat_installer-Aroma.zip`)

## Lépések

### I. rész - SD kártya előkészítés

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a tartalmát a letöltött Aroma _`.zip`_ fájlnak az SD kártyád gyökerébe.
3. Másold a `compat_installer.wuhb` fájlt a `compat_installer-Aroma.zip` fájlból a `wiiu` -> `apps` útvonalra az SD kártyádra.

:::details Ha megfelelően követted a lépéseket az SD kártyádon a következő elrendezésnek kell lennie:

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

### II. rész - A böngésző exploit indítása

::: tip

Biztosítsd hogy a Wii U-nak legyen internet hozzáférése ehhez a lépéshez, hogy az exploit működni tudjon.

:::

1. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.

2. Indítsd el az Internet Browser-t és navogált a `wiiuexploit.xyz` weboldalra.

   ![](/images/vwii/exploit/browser-exploit.png)

3. Kattints a `Run Exploit!`-ra és tartsd nyomva a B gombot, amíg az nem mondja a képernyő, hogy `Please choose your payload:`, ez szükséges lesz a következő lépésekhez.

   - Ha a Wii U-d megál egy fehér vagy más módon lefagyott képernyőnél, várj pár másodpercet. Ha semmi nem történi, bootold újra a konzolt, [és töröld a böngésző mentés adatát](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history), majd próbáld újra.
   - Ha a konzolod az Aroma környezetbe töltödőtt be, az eredményezhette a fenti eredményt. Eltávolíthatod az SD kártyát a Wii U-ból bootolás előtt, ami kényszeríti a Wii U-t hogy Aroma nélkül bootoljon, majd tedd vissza az SD kártyát és próbáld újra.
   - Ha az EnvironmentLoader-t látod, nem tartottad elég hosszan nyomva a B gombot. Próbáld újra.

   ![](/images/vwii/exploit/payload-loader.png)

### III. rész - NAND mentés

1. Használd a Wii U GamePad D-Pad-jét a kövtkező konfiguráció beviteléhez:

   - Az MLC OPCIONÁLIS, ha nem szeretnéd dumpolni, akkor csak hagyd `no` opción. Ha szeretnéd dumpolni, legyél biztos abban, hogy egy elég nagy SD kártyával rendelkezel (a dump 8 GB vagy 32 GB függően a konzoldtól) és váltsd át `yes`-re.

   ![](/images/vwii/nand-backup/backup-selection.png)

2. Nyomj A gombot a dumpolás elkezdéséhez.

3. Ha a folyamat végzett, kapcsold ki a Wii U-dat, vedd ki az SD kártyád a Wii U-ból és csatlakoztasd a PC-dhez.

4. Hogy biztos legyél abban, hogy nem vesztesz el fájlt, másold a `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (és ha teljes mentést választottál, akkor minden `mlc.bin.part`) fájlok valami biztonságos helyre (Dokumentumok, Google Drive, OneDrive, stb.) a számítógépeden.

   - Az SD kártya gyökerében fognak megjelenni.

   ![](/images/vwii/nand-backup/backup-result.png)

5. Töröld a fájlokat az SD kártyádról hely felszabadításához.

6. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.

::: tip

[Folytatás a Homebrew Channel telepítésével](vwii-homebrew-channel)

Most, hogy már van egy NAND mentése, elkezdheted a Homebrew Channel telepítését a vWii Menu-be.

:::
