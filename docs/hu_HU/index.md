---
layout: home
title: "Wii Hack útmutató"
hero:
  text: "Wii Hack útmutató"
  tagline: "A teljes útmutató a Wii, vWii és Wii mini moddingjához."
  image:
    src: /images/main-pages/home-page-feature.jpg
---

::: tip

<span style="font-size: 16px;">:clock1: **Becsült befejezési idő: 30–60 perc**</span>

Ezen becslésen túlmenően javasoljuk, hogy szánj rá több időt, amennyire szükséges, hogy el tudd olvasni és teljes mértékben megértsd az útmutató anyagát. Ez biztosítja, hogy megfelelően végrehajthasd az útmutató utasításait, és a Wii, vWii vagy Wii mini készüléked biztonságban és működőképes állapotban maradjon.

Azt is erősen javasoljuk, hogy olvasd el részletesen ezt a bevezető oldalt; bár sok információt tartalmaz, célja, hogy fontos tudnivalókat nyújtson a módosítási folyamat zökkenőmentes lebonyolításához.

A szükséges eszközbiztonsági mentések elvégzése általában 5–10 percet vesz igénybe. Ez a mentési módszertől, az SD-kártya műszaki adataitól és a választott konzoltól függően változhat.

:::

::: warning

Mielőtt elkezdenéd, azt tanácsoljuk a felhasználóknak, hogy számos okból NE használjanak videós útmutatókat. Ezek az okok a következők:

- A feltöltők általában nem szerkesztik az útmutatóikat a feltöltés után, még akkor sem, ha hibák vannak bennük. Ez oda vezethet, hogy az útmutató elavul, ahogy az információk változnak.
- A videós útmutatókkal kapcsolatban nehéz segítséget nyújtani a szerverünkön, és segítségkérés esetén nem nyújtunk támogatást.
- A videók általában egy előre összeállított letöltési csomagra utalják a felhasználókat, amely rosszul szervezett, elavult vagy akár helytelen is lehet.

Jelenleg, a múltban sem, és a jövőben sem állunk kapcsolatban olyan platformok videós útmutató-készítőivel, mint a YouTube vagy a TikTok. Bárki, aki kapcsolatot állít velünk, hamisan teszi ezt; elutasítunk minden ellenkezőjét sugalló állítást.

:::

## Mit kell tudnom a kezdés előtt?

Ezen az oldalon a következőket fogjuk áttekinteni:

- A jelen útmutatóban, valamint általában a Wii-modding közösségben használt fontos kifejezések
- Hogyan hat ez az útmutató a konzolodra, és mit tervezünk telepíteni
- Mit tehetsz egy módosított Wii/vWii/Wii mini készülékkel
- Mire van szükséged a konzolod moddolásához
- Egyéb fontos tudnivalók a folytatás előtt

## Mit jelentenek az ebben az útmutatóban szereplő kifejezések?

Az ebben az útmutatóban használt legfontosabb kifejezéseket az alábbi szakaszokban magyarázzuk el.

Az útmutatóban szereplő egyéb kifejezésekkel kapcsolatos további információkért kérjük, olvasd el a [fogalomtárat](glossary).

### Mi a homebrew?

A „homebrew” kifejezés olyan nem hivatalos szoftvereket jelöl, amelyeket hobbi-fejlesztők írnak zárt rendszerekhez, például a Nintendo Wii-hez. A homebrew-k között megtalálhatók eredeti játékok, emulátorok, mentésszerkesztő eszközök és még sok-sok más!

Más konzolokkal ellentétben a Wii, a vWii és a Wii mini kizárólag szoftveresen módosítható; ez azt jelenti, hogy az SD-kártyához hasonló szükséges eszközökön kívül ez egy **ingyenes** folyamat.

### Mi az a (c)IOS?

Az IOS (IOP-OS, amelynek nincs köze az Apple-hez vagy a Cisco IOS-hoz) az a háttér operációs rendszer, amelyen a Nintendo Wii fut (kivéve a GameCube-módban való működést). Ennek az operációs rendszernek a Wii-n való megvalósítása abban az értelemben egyedülálló, hogy egy dedikált szoftvercsomag helyett számos különböző „slot” vagy „ág” áll rendelkezésre, amelyek közül a Wii válogathat. Egyszerűen fogalmazva: amikor a Wii-t használod, az éppen futó szoftver kiválaszt egy adott IOS-slotot, amely alatt működik; ez igény szerint különböző funkciókat biztosít. További információk az IOS-ról a WiiBrew oldalon találhatók. További információk az IOS-ról a [WiiBrew](https://wiibrew.org/wiki/IOS) oldalon találhatók.

A cIOS-ok olyan módosított IOS-ok, amelyek kívánatos funkciókkal rendelkező IOS-verziókon alapulnak; például a megfelelő alap használata többek között USB 2.0-támogatást is biztosíthat. Telepítésük után ezek a cIOS-ok felhasználhatók a homebrew szoftverekben. Ez az útmutató egy későbbi fejezetben lehetővé teszi a d2x cIOS telepítését, így az USB-betöltők működni fognak, ami lehetővé teszi a játékbiztonsági másolatok használatát.

### Mi az a NAND?

A [NAND](https://en.wikipedia.org/wiki/Flash_memory) az a flash-memória-típus, amelyen a Nintendo Wii működik, és összesen 512 MB használható memóriát tárol. A NAND tárolja az IOS-t és egyéb rendszerfájlokat, a játékmentéseket, a Wii-csatornákat és még sok mást. Ez az útmutató bemutatja, hogyan készíthetsz NAND-biztonsági másolatot; rendkívül fontos, hogy ez kéznél legyen, ha valami baj történik, mivel a konzolodra jellemző kulcsokat és adatokat tárolja. Enélkül a konzolod **helyrehozhatatlanul** megsérülhet egy meghibásodás vagy hiba esetén (bár ezek ritkán fordulnak elő).

## Mit telepít ez az útmutató?

Ennek az útmutatónak az a végső célja, hogy egy teljesen módosítatlan Wii, vWii vagy Wii mini konzolt olyan állapotba hozzon, amelyben futtathatók a homebrew programok. Amennyiben pontosan követed az útmutató utasításait, nem veszítesz el semmilyen adatot; a mentéseid és játékaid megmaradnak, a konzol működése pedig csak javulni fog.

A konzolodat a **HackMii Installer** segítségével fogod módosítani. Ezzel telepíted a Homebrew Channel-t, amely a homebrew-alkalmazások futtatásának elsődleges belépési pontja, valamint a BootMii-t, a konzolod számára elengedhetetlen védelmi eszközt. Ezt követően az útmutató további védelmet biztosít egy Priiloader nevű eszköz segítségével, és utasításokat ad más ajánlott eszközök és szoftverek telepítéséhez, ha úgy döntesz.

## Mit lehet csinálni a homebrew-val?

- A Wii NAND [biztonsági mentése](nand-backup) és [visszaállítása](bootmiirecover)
- A [lemezek](dump-games) és [más telepített címek](dump-wads) biztonsági mentése
- [Játéklemezek patchelése](https://wiki.hacks.guide/wiki/Wii:Riivolution) a játék módosítások betöltéséhez
- [Témák](themes) telepítése a Wii menüjébe és a gyakran használt homebrew alkalmazásokba
- [USB loader](wii-loaders) használata a Wii (és más konzolok) biztonsági mentéseinek külső tárolóeszközről történő indításához
- Az online konzol funkciók helyreállítása a [WiiConnect24](wiiconnect24) és a [Nintendo Wi-Fi Connection](nintendowfc) használatával
- [Emulátorok és egyéb ajánlott programok](recommended-homebrew) használata a konzolon

Javasoljuk, hogy a fenti lépéseket a konzol moddolási folyamata alatt vagy után hajtsd végre.

## Mire van szükségem az útmutató követéséhez?

Attól függően, hogy Wii-t, vWii-t vagy Wii mini-t szeretnél-e módosítani, **különböző felszerelésre** lesz szükséged. Ezeket a felszereléseket a következő oldalon ismertetjük, amikor kiválaszthatod a konzol módosításához szükséges exploit-módszert. A szükséges felszereléssel kapcsolatos további fontos információkat az alábbi szakaszban is megtalálod.

## Mit kell tudnom a kezdés előtt?

### Fontos előfeltételek

::: danger

**Brick kockázat**

Az útmutató követése vagy bizonyos típusú homebrew-programok használata során mindig fennáll annak a kockázata, hogy a konzolod **brickelődik**. A brick-elt eszköz egy sérült eszköz, ami többé nem működik, vagy más szavakkal "hasznos mint egy tégla (brick)".

A brickelődés ritka és megelőzhető a Nintendo Wii konzolokon. Általában csak akkor fordul elő, ha hibát követsz el, vagy szándékosan módosítasz valamit, amit nem szabadna. Ezért kérjük, **GONDOSAN** olvasd el az útmutató tartalmát, és a konzolod védelme érdekében **PONTOSAN** kövesd az utasításokat a műveletek végrehajtása során.

A konzol brickelődésének elkerülése érdekében kerülnöd kell a következőket is:

- Más konzolokról származó NAND-biztonsági másolatok visszaállítása; ez **AZONNAL** tönkreteszi a rendszeredet
- Olyan cIOS-csomagok telepítése, mint a DARKCORP, amelyek feleslegesen írják felül az IOS-slotokat, és tönkretehetik a konzol működését
- Más régió számára szánt frissítések telepítése, a rendszerfájlok módosítása vagy a konzol régióváltása, hacsak nem tudod **pontosan**, mit csinálsz
- Egy adott konzolra szánt IOS telepítése egy másikra; ez a legrosszabb esetben szintén **azonnali** tönkremenetelt eredményez

További információkat a brickelődésről, valamint a megelőzésére vonatkozó tippeket a [brickelődésről szóló oldalon](bricks) találsz.

:::

::: warning

**Segítségkérés**

További segítségre van szükséged? Csatlakozz a [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)-csatornához, és kérj segítséget angol nyelven a #wii-vwii-assistance csatornán. Kérjük, add meg az alábbi információkat:

1. A pontos hibaüzenetet, vagy azt, amit a képernyőn látsz (ha lehetséges, csatolj egy fotót is)
2. A probléma megjelenése előtt végzett pontos lépéseket
3. Egy [SysCheck](syscheck)-naplót, ha tudsz ilyet készíteni
4. Van-e NAND-biztonsági másolatod? (igen vagy nem)
5. Telepítetted a Priiloadert, a BootMii-t IOS-ként vagy a BootMii-t boot2-ként? (mindegyikre igennel vagy nemmel válaszolj)
6. A konzolod pontos modellje (eredeti Wii, Family Edition Wii, Wii mini, vWii a Wii U-n)

Azt is javasoljuk, hogy csatlakozz a szerverhez, ha kérdéseid vannak az útmutató megértésével kapcsolatban.

Ha nem beszélsz jól angolul, kérjük, használd a [Google Translate](https://translate.google.com/)-hez hasonló fordítót a kérdésed megfogalmazásához. Örömmel segítünk. Kérjük, világosan írd le a problémádat!

:::

### Hardver kompatibilitás

::: tip

**Tárhely kompatibilitás**

Az SD-kártyák esetében legalább 128 MB-os memóriára lesz szükséged egy exploit futtatásához. Azonban, átlagosan legalább 2 Gb méretű kártyát szeretnél használni. A Wii bármilyen a legtöbb kapacítású SD kártyát tud olvasni (még a 32 GB-nál nagyobbakat is), de a kártyának [FAT32/MS-DOS-ra kell formázva lennie](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**nem** exFAT vagy NTFS).

USB eszköznek egy USB hard drive-ot vagySSD-t akarsz majd használni [FAT32/MS-DOS-ra formázva](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Nem javasoljuk a pendrive-ok használatát, mivel ezek hajlamosak meghibásodni vagy nem működnek rendeltetésszerűen a Wii-vel.

A 2,5 hüvelykes meghajtók a legtöbb esetben jól működnek a Wii-n kizárólag USB-ről, de a 3,5 hüvelykes meghajtók több energiát fogyasztanak, és mindig szükség lesz külső hálózati adapterre. A Wii U és a Wii mini felhasználóknak az energiafelvétel miatt valószínűleg külső tápellátású USB-hubot vagy Y-kábelt kell használniuk a kizárólag USB-ről működő meghajtókhoz.

További információkért tekintse meg [a tárolási GYIK](faq#storage-device-faq)-et.

:::

::: tip

**Hálózati kompatibilitás**

A Wii egy öregedő konzol, és így problémái vannak a modern vezetéknélküli hálózatokhoz csatlakozással.

A hálózati hardvere a 802.11g (visszamenőlegesen Wi-Fi 3-kén nevezett) szabványon alapul, amely a 2,4 GHz-es sávban működik. Emellett támogatja a WPA2-PSK (AES) személyes hálózati titkosítást is. Ha a Wii-vel szeretnél Wi-Fi-t használni, akkor győződj meg arról, hogy a hálózatod támogatja-e ezeket a szabványokat; kérjük, vedd figyelembe, hogy az Xfinity és a Spectrum útválasztói ismert módon nem kompatibilisek ezekkel a beállításokkal.

A Wii U esetében a vWii a Wii U fő beállításaiban megadott internetbeállításokat használja, de opcionálisan szétválasztható a [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin segítségével.

További információkért tekintsd meg [a hálózati GYIK](faq#networking-faq)-et.

:::

::: tip

**Alap konzol kompatibilitás**

Ez az útmutató működik a polcról megvehető kereskedelmi Wii-okkal, beleértve a Wii mini-t és Wii U Wii módját (más néven vWii).
**NEM** működik fejlesztői Wii-kel, beleértve az alábbi modelleket:

- RVT-001 (NDEV)
- RVT-002 (zöld előlap)
- RVT-005 (piros előlap)

Az egyes támogatott konzolokkal való kompatibilitásról további információk az alábbiakban találhatók.

:::

:::details Kompatibilitás a koreai Wii-kkel

A koreai Wii-k teljes mértékben támogatottak az útmutatóban, és a szokásos eljárásokkal módosíthatók. A koreai Wii-k régiója is megváltoztatható; például 4.3 K-ról 4.3 U-ra, így a konzol úgy viselkedik, mint egy észak-amerikai példány.

A régióadatok módosításakor legyél rendkívül óvatos, és gondosan kövesd az útmutatót a „brick” elkerülése érdekében, mivel a koreai Wii-k különösen hajlamosak az [Error 003](bricks#koreankiierror-003-brick)-as „brick”-re.

Ha koreai Wii régióváltását próbálod meg, de nem vagy biztos a pontos eljárásban, kérjük, csatlakozz a Nintendo Homebrew Discordhoz a fenti információk alapján.

:::

:::details Kompatibilitás a vWii-vel (Wii U Wii mód)

A Wii U-n elérhető Wii-mód (amelyet a homebrew-közösségben vWii-nek neveznek) teljes mértékben támogatott az útmutatóban, azonban azt javasoljuk, hogy előzetesen telepítsd az Aroma programot, ha még nem tetted meg. További információkért látogass el a [wiiu.hacks.guide](https://wiiu.hacks.guide) oldalra.

A hiányzó Wii funkciók helyreállíthatók. Jelenleg szinte az összes létező homebrew támogatott (kivéve a GameCube homebrew-t).

A tárolóeszközöknek további áramellátásra lesz szükségük (akár Y-kábel, akár külső áramforrás segítségével), mivel a Wii U USB-portjai önmagukban nem biztosítanak elegendő áramot.

Legyél biztos abban olyan IOS-t és homebrew-ot használsz, ami kifejezetten a vWii-hez készült, megelőzendő a konzol brickelését.

:::

:::details Kompatibilitás a Wii mini-vel

A Wii Mini az útmutató által teljesen támogatott, és kompatibilis a legtöbb létező homebrew-val.

A hiányzó Wii funkciók helyreállíthatók. LAN adapter és USB hub ajánlott.

Legyél biztos abban olyan IOS-t és homebrew-ot használsz, ami kifejezetten a Wii minihez készült, megelőzendő a konzol brickelését.

:::

## Készen vagy a kezdésre?

Ha igen, kérjük, kattints az alábbi gombra a móddolási folyamat elindításához.

[Folytatás az Első lépésekkel →](get-started){.btn .btn-solid}
