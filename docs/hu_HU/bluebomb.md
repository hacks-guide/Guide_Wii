---
title: "BlueBomb"
---

{% include toc title="Tartalomjegyzék" %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

Ez a módszer lehetővé teszi a konzol helyrehozatalát bizonyos olyan esetekből, amitől az használhatatlanná válhat (pl. bannereknél és (bizonyos) témáknál).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

A konzol **elrontásának** magas esélye miatt **erősen** ajánljuk, hogy messze kerülj el **bármilyen** Wii mini-hackeléssel kapcsolatos oktatóvideót!
{: .notice--warning}

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük [csatlakozz a „Wii mini Hacking”-Discord szerverhez](https://discord.gg/6ryxnkS)! (ajánlott)
{: .notice--info}

Ha a Wii eredeti kiadását használod, javasoljuk, hogy [egy másik módszert használj](get-started), mert a HackMii-telepítő előkészítésének sokkal egyszerűbb módjai is vannak. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.
{: .notice--info}

Az optimális működés érdekében ajánlott a konzolt és a telepítőt futtató számítógépet legfeljebb 1 m-es távolságban tartani.
{: .notice--info}

### Követelmények
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* Egy FAT32-ként formázott USB-s háttértár
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Útmutató

1. Helyezd át a hackmii_installer_v1.2 `.zip`-ben található `boot.elf`-fájlt a pendrive gyökerére!
    + (Ha egy elromlott konzolt kívánsz megjavítani, akkor másold a használni kívánt alkalmazást az /apps/ könyvtárba!)
    + (Ugyan ez az útmutató a Wii miniről szól, megjegyezzük, hogy a bootmini.elf **nem** helyettesíti a boot.elf-fájlt. Ennek a fájlnak teljesen más szerepe van, amire most nincs szükségünk. Minden esetben a boot.elf-fájlt használd!)
1. Helyezd be a pendrive-ot a konzolba!
    + Ha Wii minivel dolgozol, az USB-csatlakozó hátul található.
    + Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali)!
1. Kapcsold be a konzolt!
1. Nyisd meg a konzol beállításait (`Wii Settings`)!
1. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van!
    + Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

1. Kapcsold ki a konzolt!

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
1. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Kapcsold be a konzolt!
    + **Ne** csatlakoztass egy Wii Remote-ot sem!
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Lehetséges, hogy ezt többször is meg kell próbálnod.
1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.

Ha sima Wiivel dolgozol, [folytasd a Homebrew Channel- és a BootMii telepítésével](hbc)!<br>
{: .notice--info}

Ha Wii minivel dolgozol, [folytasd a Homebrew Channel telepítésével](hbc-mini)!
{: .notice--info}

## BlueBomb Classic

{% capture technical_info %}
<summary><em>Technikai részletek (nem kötelező)</em></summary> A BlueBomb egy kiaknázási módszer, ami a Wii és a Wii mini Bluetooth-könyvtárainak egy biztonsági rését használja ki. Ugyan ez az egyetlen Wii minivel kompatibilis módszer, de az eredeti Wiin is lehet használni.

Ez a módszer lehetővé teszi a konzol helyrehozatalát bizonyos olyan esetekből, amitől az használhatatlanná válhat (pl. bannereknél és (bizonyos) témáknál).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

A konzol **elrontásának** magas esélye miatt **erősen** ajánljuk, hogy messze kerülj el **bármilyen** Wii mini-hackeléssel kapcsolatos oktatóvideót!
{: .notice--warning}

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük [csatlakozz a „Wii mini Hacking”-Discord szerverhez](https://discord.gg/6ryxnkS)! (ajánlott)
{: .notice--info}

Ha a Wii eredeti kiadását használod, javasoljuk, hogy [egy másik módszert használj](get-started), mert a HackMii-telepítő előkészítésének sokkal egyszerűbb módjai is vannak. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.
{: .notice--info}

Az optimális működés érdekében ajánlott a konzolt és a telepítőt futtató számítógépet legfeljebb 1 m-es távolságban tartani.
{: .notice--info}

### Követelmények

* Egy Linuxos számítógép
    * Lehetséges, hogy a program egy virtuális számítógépen is elfut, de ez a módszer a Bluetooth-áthidalás bonyolultsága miatt nem ajánlott. Ha lehet, az alább leírtak szerint futtasd a Linuxot egy USB-meghajtóról!
    * Egy Raspberry Pi működhet, ugyanis arra valószínűleg már telepítve van a Linux egy verziója.
    * Linuxos Windows-alrendszert vagy Linux-módban futó Chromebookot *nem használhatsz*, ugyanis ezek nem férnek hozzá a Bluetooth-adapterhez és az USB-csatlakozókhoz!
    * Ha még nem használtál Linuxot, akkor az [Ubuntu](https://ubuntu.com/download/desktop) lehet a legfelhasználóbarátabb lehetőség, ami a legtöbb Windowsos vagy MacOS-es számítógépen elfut.
        * A 32-bites számítógépeken [Ubuntu 16.04](http://releases.ubuntu.com/16.04/)-re lesz szükség.
        * A 64-bites számítógépekhez ajánlott az LTS (hosszútávú fenntartású) kiadást használni a stabilitása miatt, de a legfrissebb verzió is működhet.
    * A Linuxos operációs rendszer telepítése nem kötelező, ugyanis [egy USB-s háttértáron felállíthatsz egy élő környezetet](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview).
* Egy Bluetooth-adapter
    * Egy beépített Bluetooth-adapter is megfelel.
    * Ha nincs beépített adaptered, figyelj rá, hogy olyat vegyél, ami Linuxxal kompatibilis!
* Egy FAT32-ként formázott USB-s háttértár
    * Ez nem ugyanaz, amelyről az élő Linux-környezetet fogod futtatni.
* [A HackMii-telepítő 1.2-es verziója](https://bootmii.org/download/)

### Útmutató

1. Helyezd át a hackmii_installer_v1.2 `.zip`-ben található `boot.elf`-fájlt a pendrive gyökerére!
    + (Ha egy elromlott konzolt kívánsz megjavítani, akkor másold a használni kívánt alkalmazást az /apps/ könyvtárba!)
    + (Ugyan ez az útmutató a Wii miniről szól, megjegyezzük, hogy a bootmini.elf **nem** helyettesíti a boot.elf-fájlt. Ennek a fájlnak teljesen más szerepe van, amire most nincs szükségünk. Minden esetben a boot.elf-fájlt használd!)
1. Helyezd be a pendrive-ot a konzolba!
    + Ha Wii minivel dolgozol, az USB-csatlakozó hátul található.
    + Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali)!
1. Kapcsold be a konzolt!
1. Nyisd meg a konzol beállításait (`Wii Settings`)!
1. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van!
    + Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

1. Kapcsold ki a konzolt!
1. Indítsd el a Linuxos számítógépedet és csatlakozz az internetre!
1. Nyisd meg a terminált!
1. Futtasd az alábbi parancsokat:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. A telepítő most letölti a szükséges fájlokat, majd a konzolodról fog érdeklődni.
    + Ha Wii minit adtál meg, akkor a régió felől fog érdeklődni. Ezt a Wii Menü verziószámának utolsó betűje határozza meg (**PAL**-régiós konzolok esetén `E`, **USA**-régiós konzolok esetén `U`).
    + Ha Wiit adtál meg, akkor a Wii Menü verziószámát kell megadnod (ezt a 4. lépésben tudtad meg).
1. Kapcsold be a konzolt!
    + **Ne** csatlakoztass egy Wii Remote-ot sem!
1. Nyomogasd a konzol Sync gombját, amíg a terminálon nem látod ezt az üzenetet: `got connection handle`!
    + Lehetséges, hogy ezt többször is meg kell próbálnod.
1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.
    + Ha a későbbiekben már nem tervezed használni, akkor leállíthatod a Linuxot.

Ha sima Wiivel dolgozol, [folytasd a Homebrew Channel- és a BootMii telepítésével](hbc)!<br>
{: .notice--info}

Ha Wii minivel dolgozol, [folytasd a Homebrew Channel telepítésével](hbc-mini)!
{: .notice--info}
