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

Ez az útmutató működik a polcról megvehető kereskedelmi Wii-okkal, beleértve a Wii U Wii módját és a Wii mini-t.
**NEM** működik fejlesztői Wii-kel, beleértve az alábbi modelleket:

- RVT-001 (NDEV)
- RVT-002 (zöld előlap)
- RVT-005 (piros előlap)

Fontods megjegyzések a különböző Wii-okhoz alább.

:::: details Mi van akkor, ha koreai Wii-om van?

A koreai Wii teljesen támogatott és régió is módosítható rajta.
Óvatosan csináld, ha régió adatot módosítasz és kövesd az útmutatókat figyelmesen, hogy elkerüld a brickelődést.

::::

:::: details Mi van akkor, ha Wii U-m (vWii) van?

A Wii U Wii mód (a homebrew közösségben vWii-nek hívják) teljes mértékben támogatott, de ajánlott egy Aroma környezetet beállítani.
A hiányzó Wii funkciók helyreállíthatók. Jelenleg szinte az összes létező homebrew támogatott (kivéve a GameCube homebrew-t).
A tárolóeszközöknek további áramellátásra lesz szükségük (akár Y-kábel, akár külső áramforrás segítségével), mivel a Wii U USB-portjai önmagukban nem biztosítanak elegendő áramot.
Ha többféle homebrew verzió létezik, győződj meg róla, hogy a vWii-hez tervezett verziót használod. Különösen óvatosnak kell lenned az Ios-sel, hogy elkerüld a brickelést, mivel ezeket kifejezetten a vWii-re tervezték.
Különösen óvatosnak kell lenned az IOS-sel, hogy elkerüld a brickelést, mivel ezeket kifejezetten a vWii-re tervezték.

::::

:::: details Mi van akkor, ha Wii mini-m van?

A Wii Mini támogatott, és kompatibilis a legtöbb létező homebrew-val.
A hiányzó Wii funkciók helyreállíthatók. LAN adapter és USB hub ajánlott.
Ha többféle homebrew verzió létezik, győződj meg róla, hogy a Wii minihez tervezettet használod.
Legyél nagyon óvatos az IOS-sel a brickelés elkerüléséhez, mivel ezek kifejezetten
a Wii mini-hez készültek.

::::

## Tárhely kompatibilitás

Az SD-kártyák esetében legalább 128 MB-os memóriára lesz szükséged egy exploit futtatásához. Azonban, átlagosan legalább 2 Gb méretű kártyát szeretnél használni. A Wii bármilyen kapacítású SD kártyát tud olvasni (még a 32GB-nál nagyobbakat is), de a kártyának [FAT32/MS-DOS-ra kell formázva lennie](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**nem** exFAT vagy NTFS).

USB eszköznek egy USB hard drive-ot vagySSD-t akarsz majd használni [FAT32/MS-DOS-ra formázva](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Nem javasoljuk a pendrive-ok használatát, mivel ezek hajlamosak meghibásodni vagy nem működnek rendeltetésszerűen a Wii-vel.

A 2,5 hüvelykes meghajtók a legtöbb esetben jól működnek a Wii-n kizárólag USB-ről, de a 3,5 hüvelykes meghajtók több energiát fogyasztanak, és mindig szükség lesz külső hálózati adapterre. A Wii U és a Wii mini felhasználóknak az energiafelvétel miatt valószínűleg külső tápellátású USB-hubot vagy Y-kábelt kell használniuk a kizárólag USB-ről működő meghajtókhoz.

További információkért tekintse meg [a tárolási GYIK](faq#storage-device-faq)-et.

## Hálózati kompatibilitás

A Wii egy öregedő konzol, és így problémái vannak a modern vezetéknélküli hálózatokhoz csatlakozással.

A hálózati hardvere a 802.11g (visszamenőlegesen Wi-Fi 3-kén nevezett) szabványon alapul, amely a 2,4 GHz-es sávban működik. Emellett támogatja a WPA2-PSK (AES) személyes hálózati titkosítást is. Meg kell győződnöd arról, hogy a hálózatod támogatja ezeket a szabványokat, ha szeretnél Wi-Fi-t a Wii-vel használni.

A Wii U esetében a vWii a Wii U fő beállításaiban megadott internetbeállításokat használja, de opcionálisan szétválasztható a [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin segítségével.

További információkért tekintsd meg [a hálózati GYIK](faq#networking-faq)-et.

## Segítség szerzése

Problémába ütköztél az útmutató követése közben, vagy már van egy problémád a módosított Wii-ddel, vagy csak egyszerűen válaszokra van szükséged?

- Ha a kérdésedre még nem kaptál választ ezen az oldalon, akkor az útmutató [GYIK](faq) részében találhatsz rá választ.
- Ha a kérdésedre még mindig nincs válasz, és segítségre van szükséged, csatlakozz a [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)-hoz, és lépj a `#wii-vwii-assistance` csatornára.

::: tip

Folytatás a [Kezdeti lépésekkel](get-started)

:::



