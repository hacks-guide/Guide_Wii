# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Ugyan ez az egyetlen Wii minivel kompatibilis módszer, de az eredeti Wiin is lehet használni.

Ez a módszer lehetővé teszi a konzol helyrehozatalát bizonyos olyan esetekből, amitől az használhatatlanná válhat (pl. bannereknél és (bizonyos) témáknál).

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.

:::

::: info

Az optimális működés érdekében ajánlott a konzolt és a telepítőt futtató számítógépet legfeljebb 1 m-es távolságban tartani.

:::

### Követelmények

- Egy Linuxos számítógép
  - Lehetséges, hogy a program egy virtuális számítógépen is elfut, de ez a módszer a Bluetooth-áthidalás bonyolultsága miatt nem ajánlott. Ha lehet, az alább leírtak szerint futtasd a Linuxot egy USB-meghajtóról!
  - Egy Raspberry Pi működhet, ugyanis arra valószínűleg már telepítve van a Linux egy verziója.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - A 64-bites számítógépekhez ajánlott az LTS (hosszútávú fenntartású) kiadást használni a stabilitása miatt, de a legfrissebb verzió is működhet.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Egy Bluetooth-adapter
  - Egy beépített Bluetooth-adapter is megfelel.
  - Ha nincs beépített adaptered, figyelj rá, hogy olyat vegyél, ami Linuxxal kompatibilis!
- Egy FAT32-ként formázott USB-s háttértár
  - Ez nem ugyanaz, amelyről az élő Linux-környezetet fogod futtatni.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Útmutató

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Ha egy elromlott konzolt kívánsz megjavítani, akkor másold a használni kívánt alkalmazást az /apps/ könyvtárba!)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Minden esetben a boot.elf-fájlt használd!)

2. Helyezd be a pendrive-ot a konzolba!
   - Ha Wii minivel dolgozol, az USB-csatlakozó hátul található.
   - Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali)!

3. Kapcsold be a konzolt!

4. Go to `Wii Settings`.

5. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van!

   - Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

   ![](/images/wii/SystemMenuVersion.png)

6. Kapcsold ki a konzolt!

7. Indítsd el a Linuxos számítógépedet és csatlakozz az internetre!

8. Nyisd meg a terminált!

9. Futtasd az alábbi parancsokat:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. A telepítő most letölti a szükséges fájlokat, majd a konzolodról fog érdeklődni.
    - Ha Wii minit adtál meg, akkor a régió felől fog érdeklődni. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Ha Wiit adtál meg, akkor a Wii Menü verziószámát kell megadnod (ezt a 4. lépésben tudtad meg).

11. Kapcsold be a konzolt!
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Lehetséges, hogy ezt többször is meg kell próbálnod.

13. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.
    - Ha a későbbiekben már nem tervezed használni, akkor leállíthatod a Linuxot.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

Ez a módszer lehetővé teszi a konzol helyrehozatalát bizonyos olyan esetekből, amitől az használhatatlanná válhat (pl. bannereknél és (bizonyos) témáknál).

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.

:::

::: info

Az optimális működés érdekében ajánlott a konzolt és a telepítőt futtató számítógépet legfeljebb 1 m-es távolságban tartani.

:::

### Követelmények

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Egy FAT32-ként formázott USB-s háttértár
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Útmutató

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Ha egy elromlott konzolt kívánsz megjavítani, akkor másold a használni kívánt alkalmazást az /apps/ könyvtárba!)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Minden esetben a boot.elf-fájlt használd!)

2. Helyezd be a pendrive-ot a konzolba!
   - Ha Wii minivel dolgozol, az USB-csatlakozó hátul található.
   - Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali)!

3. Kapcsold be a konzolt!

4. Go to `Wii Settings`.

5. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van!

   - Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

   ![](/images/wii/SystemMenuVersion.png)

6. Kapcsold ki a konzolt!

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Kapcsold be a konzolt!
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Lehetséges, hogy ezt többször is meg kell próbálnod.
4. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
