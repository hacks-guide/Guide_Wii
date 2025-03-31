---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technikai részletek (opcionális)

A BlueBomb egy exploit, ami a Wii és a Wii mini Bluetooth-könyvtárainak egy biztonsági rését használja ki. Ugyan ez az egyetlen Wii minivel kompatibilis módszer, de az eredeti Wiin is lehet használni.

Ez az exploit lehetővé teszi bizonyos brick-ek, mint például a banner brick és (néhány) téma brick helyreállítását is.

:::

::: warning

A konzol **brickelésének** magas esélye miatt **erősen** ajánljuk, hogy messze kerülj el **bármilyen** Wii mini hackeléssel kapcsolatos oktatóvideót.

:::

::: info

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük csatlakozz a [Wii mini Hacking Discord server](https://discord.gg/6ryxnkS)-hez. (ajánlott)

:::

::: info

Ha a Wii eredeti kiadását használod, javasoljuk, hogy egy [másik exploitot használj](get-started), mert a HackMii telepítő előkészítésének sokkal egyszerűbb módjai is vannak. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.

:::

::: info

Győződj meg róla, hogy a konzol közel van az exploitot futtató számítógéphez, ideális esetben kevesebb mint 1 méternyire.

:::

### Requirements

- Egy Linuxos számítógép
    - Lehetséges, hogy a program egy virtuális számítógépen is elfut, de ez a módszer a Bluetooth-áthidalás bonyolultsága miatt nem ajánlott. Ha lehet, az alább leírtak szerint futtasd a Linuxot egy Usb-meghajtóról.
    - Egy Raspberry Pi működhet, ugyanis arra valószínűleg már telepítve van a Linux egy verziója.
    - Linuxos Windows-alrendszert vagy Linux-módban futó Chromebookot nem használhatsz, ugyanis ezek nem férnek hozzá a Bluetooth-adapterhez vagy az USB portokhoz.
    - Ha még nem használtál Linuxot, akkor az [Ubuntu](https://ubuntu.com/download/desktop) lehet a legfelhasználóbarátabb lehetőség és ami a legtöbb Windowsos vagy MacOS-es számítógépen elfut.
        - A 32-bites eszközök [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) verziót igényelnek.
        - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
    - [Készíthetsz egy Linux Live környezetet egy USB pendrive-ra](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) is a helyett, hogy telepítenéd a számítógépedre.
- A Bluetooth adapter.
    - Egy beépített Bluetooth-adapter is megfelel.
    - Ha nincs beépített adaptered, figyelj rá, hogy olyat vegyél, ami Linuxxal kompatibilis.
- Egy FAT32-ként formázott USB-s flash drive.
    - Ez nem lehet ugyanaz, amelyről a Linux-környezetet fogod futtatni.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Lépések

1. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből a pendrive-od gyökerébe.

    - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    - (Még a Wii mini számára **sem** fog a bootmini.elf működni, ennek a fájlnak teljesen más szerepe van és itt nem releváns. Minden esetben a boot.elf-fájlt használd).

    ![](/images/exploits/bluebomb/usb-exploit.png)

2. Helyezd vissza az flash drive-od a konzolodba.
    - For a Wii mini, the USB port is on the back.
    - Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali).

3. Kapcsold be a konzolod.

4. Menj a `Wii Settings`-hez.

5. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van.

    - Ez a betű jelzi a rendszermenü régióját, amire a későbbi lépésekben szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

6. Kapcsold ki a konzolod.

7. Indítsd el a Linuxos számítógépedet és csatlakozz az internetre.

8. Nyisd meg a Terminált és futtasd a következő parancsokat:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

    ![](/images/exploits/bluebomb/run-commands.png)

9. A telepítő most letölti a szükséges fájlokat, majd a konzolodról fog érdeklődni.

    ![](/images/exploits/bluebomb/console-type.png)

    - Ha Wii mini-t adtál meg, akkor a régió felől fog érdeklődni. Ezt a Wii Menu verziójának utolsó betűje alapján lehet meghatározni (`U` az **USA**-ban és `E` a **PAL** modellek esetében).

    ![](/images/exploits/bluebomb/wii-mini-options.png)

    - Ha Wii-t adtál meg, akkor a Wii Menü verziószámát kell megadnod (ezt a 4. lépésben tudtad meg).

    ![](/images/exploits/bluebomb/wii-options.png)

10. Kapcsold be a konzolod.
    - **Ne csatlakoztass** egy Wii Remote-ot sem.

11. Ha még nem tetted meg, írd be a szkriptbe az `yes`-t a folytatáshoz, és győződj meg róla, hogy a `Waiting to accept` felirat jelenik meg.

12. Nyomogasd a konzol Sync gombját, amíg a terminálon nem látod ezt az üzenetet: `got connection handle`.

    - Lehetséges, hogy ezt többször is meg kell próbálnod.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. Ha az exploit sikeres volt, akkor az alábbi képernyőhöz hasonlót kell látnod, majd a HackMii installer-nek be kell töltődnie.

    - Ha a későbbiekben már nem tervezed használni, akkor leállíthatod a Linuxot.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technikai részletek (opcionális)

Ez az exploit lehetővé teszi bizonyos brick-ek, mint például a banner brick és (néhány) téma brick helyreállítását is.

:::

::: warning

A konzol **brickelésének** magas esélye miatt **erősen** ajánljuk, hogy messze kerülj el **bármilyen** Wii mini hackeléssel kapcsolatos oktatóvideót.

:::

::: info

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük csatlakozz a [Wii mini Hacking Discord server](https://discord.gg/6ryxnkS)-hez. (ajánlott)

:::

::: info

Ha a Wii eredeti kiadását használod, javasoljuk, hogy egy [másik exploitot használj](get-started), mert a HackMii telepítő előkészítésének sokkal egyszerűbb módjai is vannak. Ha egy elromlott konzol megjavításáról van szó, akkor viszont vannak kivételek.

:::

::: info

Az optimális működés érdekében ajánlott a mikrokonrollert és a telepítőt futtató számítógépet legfeljebb 1 m-es távolságban tartani.

:::

### Requirements

- Egy Raspberry Pi Pico W 1/2 vagy egy ESP32 BR/EDR (Classic) támogatással.
- Egy FAT32-ként formázott USB-s flash drive.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

Egy normál Raspberry Pi Pico nem fog működni. Vezeték nélküli modellnek KELL lennie. Továbbá, egy ESP32 csak BLE vezérlővel nem fog működni.

:::

### Instructions

1. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből a pendrive-od gyökerébe.

    - (Ha egy brick-et kívánsz megjavítani, akkor másold a használni kívánt alkalmazást az /apps/ könyvtárba)
    - (Még a Wii mini számára **sem** fog a bootmini.elf működni, ennek a fájlnak teljesen más szerepe van és itt nem releváns. Minden esetben a boot.elf fájlt használd).

    ![](/images/exploits/bluebomb/usb-exploit.png)

2. Helyezd vissza az flash drive-od a konzolodba.
    - Ha Wii minivel dolgozol, az USB csatlakozó hátul található.
    - Egy sima Wii esetén az alsó csatlakozót használd (ha a konzol fel van állítva, akkor ez a jobb oldali).

3. Kapcsold be a konzolod.

4. Menj a `Wii Settings`-hez.

5. Jegyezd meg a jobb felső sarokban megjelenő betűjelet, ami a rendszer verziószáma mellett van.

    - Ez a betű jelzi a rendszermenü régióját, amire későbbi lépésekben szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

6. Kapcsold ki a konzolod.

#### Raspberry Pi Pico W

1. Töltsd le a legújabb [előre lefordított binárisokat](https://github.com/GaryOderNichts/bluebomb_micro/releases) a Release oldalról, és csomagold ki a számítógépedre.

    - Válaszd ki az eszközödnek megfelelő binárisokat. `bluebomb_micro_pico2_w_version` a Pico 2 W, míg `bluebomb_micro_pico_w_version` a Pico 1 W készülékhez készült.

    ![](/images/exploits/bluebomb/pico-download.png)

2. Csatlakoztasd a Pico W-t a számítógépedhez, miközben lenyomva tartod a `BOOTSEL` gombot. A Pico W-dnek mostantól meghajtóként kell megjelennie a számítógépeden.

    ![](/images/exploits/bluebomb/pico-button.jpg)
    ![](/images/exploits/bluebomb/pico-drive.png)

3. Csomagold ki a letöltött archívumot, és másold a meghajtóra a Wii vagy Wii mini a Wii-nek megfelelő fájlt.

    - Ha egy európai Wii 4.3-as verzióval rendelkezel, akkor a bluebomb_WII_SM4_3E.uf2 fájlt másold, vagy ha egy európai Wii Minivel rendelkezik, akkor a bluebomb_MINI_SM_PAL.uf2 fájlt, stb...

    ![](/images/exploits/bluebomb/pico-files.png)

4. A meghajtónak le kell kapcsolódnia, és egy zöld LED-nek villognia kell. Ez azt jelenti, hogy a Pico W készen áll - kihúzhatod az eszközt a számítógépedből.

    ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. A legújabb [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html) beállítása.
2. Fordítsd le a bináris változatot [a forrásból](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flasheld a bináris állományt](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) az ESP32-re.
4. Az eszközöd most már készen áll. Kihúzhatod az eszközt a PC-dből.

### Az exploit végrehajtása

1. Csatlakoztasd vissza a flashelt eszközöd a számítógépedhez.
2. Kapcsold be a konzolod.
    - **Ne csatlakoztass** egy Wii Remote-ot sem.
3. Nyomd meg többször a Sync gombot, amíg a Pico W LED gyorsan villogni nem kezd, ekkor az megkezdi az exploit feltöltését.
    - Lehetséges, hogy ezt többször is meg kell próbálnod.
4. Ha az exploit sikeres volt, akkor az alábbi képernyőhöz hasonlót kell látnod, majd a HackMii installer-nek be kell töltődnie.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

Ha `Exception 0700 occurred!` hibaüzenetet vagy hasonlót kapsz, próbálja meg újra az exploitot. Ha ez továbbra is előfordul, csatlakozz [a Wii mini Hacking Discord szerverhez](https://discord.gg/6ryxnkS) támogatásért.

:::

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::::
