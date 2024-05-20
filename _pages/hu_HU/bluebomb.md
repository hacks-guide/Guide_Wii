---
title: "BlueBomb"
---

{% include toc title="Tartalomjegyzék" %}

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
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your console.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. The helper will then download the required files, and ask for information about your console.
    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    + If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)
1. Power on your console.
    + **Do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If you are not planning to use it later, you can now shut down your Linux distro.

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>
{: .notice--info}

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)
{: .notice--info}
