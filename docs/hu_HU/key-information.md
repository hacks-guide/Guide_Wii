# Alapvető információk

Ez az oldal fontos kizáró nyilatkozatokat és a modding folyamatra vonatkozó információkat tartalmaz, amelyeket tudnod kell, mielőtt elkezdenéd.

## Brick és gyakori kockázatok

Ha követed az útmutatót, vagy bizonyos típusú homebrew-t használsz, fennáll a veszélye, hogy brickeled a konzolodat - vagy olyan állapotba hozod, amelyben részben vagy teljesen használhatatlanná válik. Ennek elkerülése érdekében kérjük, **pontosan kövesd az útmutatót**, és kövesd az óvintézkedéseket, amikor azok szerepelnek. Gyakori brickelési kockázatok a következők:

- Régi modding oktatóanyagok vagy videós útmutatók követése, az elavult vagy helytelen információk miatt kifejezetten nem ajánlott, kivéve, ha kifejezetten ajánlott
- Más konzolokról származó NAND biztonsági mentések visszatöltése
- A DARKCORP-hoz hasonló cIOS csomagok telepítése
- Más régióhoz való frissítések telepítése, vagy a konzol régiócseréje
- Rendszer fájlok módosítása

További információkért tekintsd meg [a brick Gyik](bricks)-et.

## Konzol kompatibilitás

This guide works with all off-the-shelf retail Wiis, including Wii mini and the Wii U's Wii mode.
**NEM** működik fejlesztői Wii-okkal, beleértve az alábbi modelleket:

- RVT-001 (NDEV)
- RVT-002 (zöld előlap)
- RVT-005 (piros előlap)

Important notes relating to specific Wiis are below.

:::: details What if I own a Korean Wii?

A Korean Wii is fully supported, and can also be region changed.
Exercise caution when modifying region data and follow guides carefully to avoid a brick.

::::

:::: details Mi van akkor, ha Wii U-m (vWii) van?

Wii mode on Wii U (called vWii in the homebrew community) is fully supported but it is recommended to setup an Aroma environment.
Missing Wii features can be restored. Almost all existing homebrew is currently supported (except for GameCube homebrew).
Storage devices will need additional power (either using a Y-cable or an external power source), as the Wii U's USB ports do not provide sufficient power on their own.
If there are multiple versions of homebrew, make sure you are using the version designed for vWii.
Be especially cautious with IOS to avoid bricking, since they are specifically designed for vWii.

::::

:::: details Mi van akkor, ha Wii mini-m van?

A Wii Mini támogatott, és kompatibilis a legtöbb létező homebrew-val.
A hiányzó Wii funkciók helyreállíthatók. LAN adapter és USB hub ajánlott.
Ha többféle homebrew verzió létezik, győződj meg róla, hogy a Wii minihez tervezettet használod.
Be especially cautious with IOS to avoid bricking, since they are specifically designed for Wii mini.

::::

## Tárhely kompatibilitás

Az SD-kártyák esetében legalább 128 MB-os memóriára lesz szükséged egy exploit futtatásához. Azonban, átlagosan legalább 2 Gb méretű kártyát szeretnél használni. A formázás lépései [itt](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) találhatók.

USB-eszközök esetében FAT32 formátumban formázott USB-merevlemezt vagy SSD meghajtót kell használnod. Nem javasoljuk a pendrive-ok használatát, mivel ezek hajlamosak meghibásodni vagy nem működnek rendeltetésszerűen a Wii-vel.

A 2,5 hüvelykes meghajtók a legtöbb esetben jól működnek a Wii-n kizárólag USB-ről, de a 3,5 hüvelykes meghajtók több energiát fogyasztanak, és mindig szükség lesz külső hálózati adapterre. A Wii U és a Wii mini felhasználóknak az energiafelvétel miatt valószínűleg külső tápellátású USB-hubot vagy Y-kábelt kell használniuk a kizárólag USB-ről működő meghajtókhoz.

További információkért tekintse meg [a tárolási GYIK](faq#storage-device-faq)-et.

## Hálózati kompatibilitás

The Wii is an aging console, and as such, may have difficulties connecting to modern wireless networks.

Its network hardware is based on 802.11g (retroactively named WiFi 3), which operates on the 2.4 GHz band. It also supports a maximum of WPA2-PSK (AES) personal network encryption. You must make sure your network supports these standards if you would like to use WiFi with your Wii.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin.

Please consult [the network FAQ](faq#networking-faq) for more information.

## Segítség szerzése

Ran into an issue while following the guide, already have an issue on your modded Wii, or just plain need answers?

- If your question isn't already answered on this page, it may be answered in the [FAQs](faq) section of the guide.
- If your question still isn't answered and you need support, join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and go to the `#wii-vwii-assistance` channel.

::: tip

Folytatás a [Kezdeti lépésekkel](get-started)

:::
