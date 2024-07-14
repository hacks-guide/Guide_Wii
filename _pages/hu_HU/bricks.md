---
title: "Elrontás"
---

{% include toc title="Tartalomjegyzék" %}

Ha elromlott a Wiid, akkor már nem sok hasznod lesz rá, hacsak nem kell egy papírnehezék. <br> Egy Wii számos okból kifolyólag elromolhat, de ez általában sérült programok vagy rosszul elvégzett nemhivatalos módosítások okozzák.

# Az elrontás kiküszöbölése

Az elrontás megelőzésének több módja van, amelyek a józan paraszti észtől a biztonsági mentésig terjednek. Az általánosan elkerülendő dolgokat alább olvashatod:

+ **NE kövess régi útmutatókat, NE használj régi programokat és NE kövess videós utmutatókat, hacsak a projram fejlesztője KÜLÖN NEM KÉRI!**
+ **SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT NE HASZNÁLD a `Pimp My Wii`-alkalmazást! Ez VESZÉLYES, mert a program működése képes véletlenül ELRONTANI A KONZOLOD!**
+ **NE telepíts IOS-csomagokat, mint a DARKCORP, mert felülírják a legtöbb IOS-edet cIOS-ekkel! Ez a módszer VESZÉLYES és elavult.**
+ **NE tölts vissza más konzolokról származó biztonsági mentéseket!**
+ **NE telepíts olyan IOS-eket, amelyeket nem a konzolodra terveztek!** (Pl.: Wii-s IOS-eket Wii minire.)
+ **A Wiire tervezett régióváltási módszereket NE próbáld ki vWiin vagy Wii minin!**
+ **NE használj olyan Nintendo Wi-Fi Connection-szolgáltatást, amit nem távoli kódfuttatási javításokkal terveztek (egy biztonságos példa a [Wiimmfi](wiimmfi))! Ha mégis így tennél, akkor megkockáztatod a Wiidbe való rosszindulatú belépést és annak az elrontását!**
+ **Csak a saját régiódhoz tartozó frissítéseket telepíts!**.
    + A más régióból származó frissítések telepítése esetén legjobb esetben semmi sem történik, legrosszabb esetben a [KoreanKii / 003-as hibás](bricks#korean-kiierror-003-brick) elromlásban végződhet. Ha egy használt Wiit vettél és szeretnéd megelőzni ezt a problémát, futtasd  a[SysCheck](syscheck)-programot a Wii belső régiójának ellenőrzéséhez! Ha a Wii régiója koreai, légy KIEMELTEN óvatos, amikor rendszerfrissítéseket telepítesz és fontold meg a segítségkérést!
+ **NE töröld vagy módosítsd a rendszerfájlokat, NE telepítsd a Wii menü vagy IOS-ek régi verzióit és NE telepíts semmilyen rendszermenü-módosítást, hacsak nem tudod, hogy mit csinálsz!**
    + Pl.: Ha egy Wii minin kicseréled az IOS80-at, az [Wi-Fi-rontásban](bricks#wi-fi-brick) végződhet.
+ **Ne telepíts nem megbízható forrásokból származó programokat vagy ha a forráskód nem elérhető!**
    + Az [Open Shop Channelen](osc) található programok biztonságosak.
    + Előfordult már, hogy valaki szándékosan rosszindulatú programokat fejlesztett a Wiire, de az is meglehet, hogy egy programot rosszul fejlesztettek. Mindig bizonyosodj meg róla, hogy mit futtatsz és csak olyan programokat telepíts, amire szükséged is van!
    + A sérült vagy nem-stabil forwader (átirányító) csatornák [bannerrontást](#banner-brick) eredményezhetnek, úgyhogy javasoljuk, hogy mindig a Homebrew Channelből indíts programokat, hacsak nincs nagyon szükséged rá!
+ **Mindig bizonyosodj meg róla, hogy mit csinálsz, amikor nemhivatalos programokat futtatsz a Wiin – legfőképpen akkor, a azok rendszerfájlokat módosítanak! Az alábbi programok használata közben KÜLÖNÖS óvatossággal járj el:**
    + AnyTitle Deleter;
    + AnyRegion Changer;
    + KoreanKii (a [KoreanKii / 003-as hibás](bricks#korean-kiierror-003-brick) rontás másodlagos oka);
    + a régebbi rendszerverzióra váló programok;
    + és bármilyen egyéb program, ami hozzányúl a létfontosságú rendszerfájlokhoz.
+ **NE NYÚLJ HOZZÁ A WII ÁRAMFORRÁSÁHOZ VAGY A BEKAPCSOLÓGOMBJÁHOZ, MIKÖZBEN LÉTFONTOSSÁGÚ RENDSZERFÁJLOKAT TELEPÍTESZ VAGY MÓDOSÍTASZ!**.
    + Ha éppen nem stabil a villanyforrásod (pl.: vihar vagy áramszünet miatt), várd meg, amíg az oka megszűnik!
    + Ez főleg a kockázatos folyamatokra vonatkozik, mint pl. a BootMiis biztonsági mentés visszaállítása, amely egy [végleges elrontást](#low-level-brick) eredményezhet, ha valami balul sül el.

Mindig tartsd be az alábbiakat:
+ Legyen telepítve a BootMii, lehetőleg boot2 alatt, de legalább IOS-ként!
+ Legyen telepítve a Priiloader a BootMii telepítési típusától függetlenül!
+ Legyen BootMiis biztonsági mentésed a Wii belső tárhelyéről és ellenőrizd, hogy megvan mielőtt bármilyen kockázatos műveletet végeznél! Megjegyzés: Vannak olyan esetek, amikor a BootMii nem hozzáférhető, úgyhogy tervezz előre!

# Diganózis

Ez a rész a lehetséges elrontások diagnózisában segít és súlyosság szerint van sorba rendezve. Ha úgy romlott el a Wiid, hogy az alábbi esetek egyike sem alkalmazható rá, akkor kérj segítséget (angol nyelven) a Nintendo Homebrew Discord-szerveren!

+ A Wii elindul és megnyitja a Wii menüt. Minden program rendeltetésszerűen működik, a Wii-beállításokban nincsenek hibák, minden látszólag rendben van. A konzollal minden rendben.
+ A Wii elindul és megnyitja a Wii menüt.
    + Ha megnyitnál egy csatornát és a konzol azt írja ki, hogy „`The system files are corrupted.`”: ld. [Bannerrontás](bricks#banner-brick).
    + Ha a Wii-beállítások megnyitásával egy olyan hibát látsz, ami látszólag az Opera-internetböngészőre hasonlít: ld. [Részleges elromlás](bricks#semibrick).
+ A Wii elindul és megjeleníti az egészségügyi figyelmeztetéseket, de az A-gomb megnyomása után csak feketét mutat.
    + Ha ez egy téma telepítése után történt: ld. [Témarontás](bricks#theme-brick).
    + Ha ez egy WAD-fájl telepítése után történt: ld. [Bannerrontás](bricks#banner-brick).
    + Ha ez látszólag minden ok nélkül keződött el és képes vagy hozzáférni a Wii karbantartási módjához a + és - gombok nyomvatartásával az egészségügyi figyelmeztetések-képernyőn: ld. [Üzenetrontás](bricks#mail-brick).
+ A Wii elindul és megjeleníti az egészségügyi figyelmeztetéseket, de az A-gomb megnyomása után csak feketét mutat és/vagy lefagy. A karbantartási mód hozzáférhető: ld. [Üzenetrontás](bricks#mail-brick).
+ A Wii elindul, de RÖGTÖN egy olyan hibát látsz, ami látszólag az Opera-internetböngészőre hasonlít: ld. [Wii menü- / Operarontás](bricks#wii-menuopera-brick).
+ 003-as hibát látsz: ld. [KoreanKii / 003-as hibás rontás](bricks#error-003-brick).
+ Semmi sem történik, fekete a képernyő, DE a boot2 alá telepített BootMii hozzáférhető: ld. [IOS-rontás](bricks#ios-brick).
+ Semmi sem történik, fekete a képernyő, DE a Wii bekapcsolható egy Wii Remote-tal és a helyreállítási mód hozzáférhető: ld. [Wi-Fi-rontás](bricks#wi-fi-brick).
+ Semmi sem történik, fekete a képernyő. A Wii nem kapcsolható be egy Wii Remote-tal, és a helyreállítási mód és a boot2 alá telepített BootMii nem hozzáférhető: ld. [Alapszintű elromlás](bricks#low-level-brick).

# Az elromlások típusai

Alább olvashatsz a Wii elromlásának különböző tüneteiről, okairól és megoldásairól, súlyosság szerint sorba rendezve.

## Részleges elromlás

#### Tünetek
A Wii-beállítások megnyitásakor egy Opera-internetböngészőben megjelenített hibaüzenetet látsz, ami valahogy így néz ki: „`You tried to access the address (URL), which is currently unavailable`” („A megadott webcím jelenleg nem elérhető”). Bizonyos esetekben előfordulhat, hogy a Wii-beállítások bizonyos oldalai elérhetőek, mások viszont nem (pl. az országválasztó lap).

#### Ok
A részleges elromlás akkor következik be, ha a konzol régiójától éltérő Wii menüt vagy témát telepítesz. A Wii beállításai HTML-dokumentumokként vannak eltárolva, amelyeket az Opera jelenít meg. A témák gyakran kicserélik ezeket az oldalakat és más könyvtárakban helyezik el őket, ami gyakorlatban egy „`404 – A keresett oldal nem található`”-hibát eredményez egy elrontott konzol formájában.

![](/images/bricks/semibrick.png)

#### Megoldás
Nyisd meg az AnyRegion Changert és ellenőrizd, hogy a konzolod régiója ugyanaz-e, mint a telepített Wii menüé!

Ha a hibát egy téma okozta, használd a csm-installer-programot az eredeti téma visszaállításához!

Ha a hibát egy telepített Wii menü WAD okozta, töltsd le és telepítsd az eredeti Wii menüt az [NUS Downloader](https://wiibrew.org/wiki/NUSD) segítségével!

A Wii menü letöltésekor légy óvatos! Ellenőrizd, hogy a konzolodnak megfelelő verziót töltötted le!
{: .notice--danger}

Ha éppen egy szándékos régióváltás közepén vagy, akkor futtasd le az [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)-programot, ami automatikusan a Wii menünek megfelelő régióbeállításokat fogja alkalmazni!

## Bannerrontás

#### Tünetek
A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy WAD telepítése után történt, amit követően visszatértél a Wii menübe vagy újraindítottad a konzolt. Az is lehetséges, hogy a Wii menü még hozzáférhető, de a sérült csatorna megnyitásakor a konzol lefagy. Bizonyos esetekben a konzol „System files are corrupted” („A rendszerfájlok sérültek”)-üzenetet mutat.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Ok
A bannerrontás akkor következik be, ha egy olyan WAD-fájlt telepítettél, aminek érvénytelen Wii menüs ikonja vagy bannerje van.

#### Megoldás
Ha még képes vagy hozzáférni a Wii menühöz, nyisd meg a Homebrew Channelt és az [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát!

Ha nem vagy képes hozzáférni a Wii menühöz, de telepítve van a konzolodra a <0>Priiloader</0>, akkor a konzol bekapcsolása közben tartsd nyomva a RESET-gombot a megnyitásához! Onnan nyisd meg a Homebrew Channelt és távolítsd el a sérült csatornát!

Ha nem férsz hozzá a Priiloaderhez, egy próbát megérhet a karbantartási mód. A módba való belépéshez az egészségügyi figyelmeztetések megjelenése közben tartsd nyomva a `+` és `-` gombokat (az `A` megnyomása nélkül)!

## Témarontás

#### Tünetek

A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy téma telepítése után történt.

#### Ok
A témarontás akkor következik be, ha a telepített téma rossz formátummal rendelkezik.

#### Megoldás
Nyisd meg a Homebrew Channelt a Priiloaderen vagy a boot2 alá telepített BootMiin keresztül, majd a csm-installer használatával telepíts egy alapértelmezett témát, pl. az alap Wii menü témát! A javításhoz egy másik módszer a [YAWM ModMii Edition](yawmme) elindítása és a régiódnak és verziódnak MEGFELELŐ alap Wii menü WAD újratelepítése.

## Üzenetrontás

#### Tünetek
A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. A karbantartási mód hozzáférhető.

#### Ok
Az üzenetrontás akkor következik be, ha a Wiinek túl sok üzenetet kell feldolgoznia, vagy ha nem megfelelő üzenetek érkeztek a Wii Üzenőfalra. Ez megakadályozza a normális indítást. Mivel a Wii Üzenőfal a csatornák alatt jelenik meg, ez a Wii menü betöltésének meghiúsulását eredményezi.

#### Megoldás
Tartsd nyomva a + és - gombokat az egészségügyi figyelmeztetések képernyőjén a karbantartási módba való belépéshez, ahol a Wii Üzenőfalat nem tölti be a rendszer! Ha a Homebrew Channel nincs telepítve és a rendszermenü legalább 2.0-s verziószámú, akkor ld. [str2hax](str2hax). Egyéb esetben ld. [Bluebomb](bluebomb).

Ezután nyisd meg a Homebrew Channelt és a [cdbackup](https://oscwii.org/library/app/cdbackup) segítségével töröld ki a Wii Üzenőfal adatait!

## Wii menü- / Operarontás

#### Tünetek
A Wii indításakor egy Opera-internetböngészőben megjelenített hibaüzenetet látsz, ami valahogy így néz ki: „`You tried to access the address (URL), which is currently unavailable`” („A megadott webcím jelenleg nem elérhető”). Ez a Wii minden indításakor megjelenik és nem lehet átlépni.

#### Ok
Ez a [részleges rontás](#semibrick) rosszabbik verziója. Ha s SYSCONF (rendszerkonfigurációs) fájl megsérül, akkor a Wii törli és újra létrehozza azt, majd elindítja az első beállítási folyamatot.

Viszont ez a fájl a Wii-beállítások oldalaihoz hasonló helyen van tárolva. Ha a régiódnak nem megfelelő Wii menü vagy téma van telepítve, akkor a rendszer nem fogja megtalálni.

![](/images/bricks/sysmenu-brick.png)

#### Megoldás

Ha hozzáférsz a [Priiloaderhez](priiloader), indítsd el rajta keresztül a Homebrew Channelt és telepítsd újra az eredeti témát vagy Wii menüt!

Ha nem férsz hozzá a Priiloaderhez vagy a Wiid nincs modolva, akkor próbáld meg a [BlueBomb](bluebomb)-módszert!

Egyéb esetben [helyreállítási módban](recovery-mode) is megkísérelheted a megjavítást.

## KoreanKii / 003-as hibás rontás

#### Tünetek
Az alábbi hibaüzenet fogad a rendszer indításakor:

`Error:003`<br> `unauthorized device has been detected.` („A rendszer egy nem engedélyezett készüléket érzékelt.”)<br>

![](/images/bricks/error-003.png)

#### Ok
A később megjelent koreai Wiik forgalmazásánál a Nintendo megváltoztatta a rendszer titkosítási kulcsát a nemhivatalos programok futtatásának kiküszöbölése érdekében. Ugyan ez nem sikerült, de később, a rendszermenü 4.2/4.3-as verziójának megjelenésekor beleprogramoztak egy funkciót, ami ellenőrzi, hogy a **nem**-koreai gépeken megjelenik-e a koreai titkosítási kulcs. Ha igen, akkor a konzol ezt a hibát jeleníti meg és gyakorlatilag használhatatlanná válik.

Ez általában rögtön azután következik be, amikor egy régióváltott koreai Wiin frissítik a rendszert.

#### Megoldás
Mivel ez a rontás leggyakrabban a rendszermenü frissítése után jelenik meg, ilyenkor a Priiloader nincs telepítve. Ha mégis úgy jelent volna meg a probléma, hogy a Priiloader hozzáférhető, akkor egyszerű megjavítani az előző rendszermenü újratelepítésével vagy a KoreanKii megnyitásával és a koreai kulcs törlésével.

A koreai Wiik eredetileg a Wii menü 3.3-as verziójával jelentek meg, ami ugyanaz a kiadás volt, ahol a Nintendo [kijavította a boot1 „Trucha”-hibáját](https://wiibrew.org/wiki/3.3#Changes), ezért a BootMii boot2 alatt egy koreai Wiin sem telepíthető.

Ugyan ez az állípot különösen kiszolgáltatottan hagyja a konzolt, **még javítható**. Ehhez [helyreállítási módba](recovery-mode) kell lépned, ahol egy program futtatásával hozzáférhetsz a Homebrew Channelhez és visszafordíthatod az elromlást. Megjegyzés: Ehhez a módszerhez egy lemezolvasó-chippel kell rendelkezned.

## IOS-rontás

#### Tünetek
Ez a rontás ugyanolyan tünetekkel rendelkezik, mint az alapszintű elromlás a Wii menü IOS-es elromlása miatt, viszont nem egy alapszintű belső tárhelyes- vagy hardveres sérülés okozza.

#### Ok
Az IOS-rontás akkor következik be, amikor a Wii menü IOS-e [csonk](http://wiibrew.org/wiki/Stub_IOS), vagy ha rossz típusú IOS-t telepítettek a konzolra. Egy megcsonkolt rendszermenü ISO általában akkor jelenik meg, ha a Wii menü korábbi verzióját próbálod visszatelepíteni. Ha ez a probléma egy sima IOS80 Wii minis telepítése után lépett fel, ld. [Wi-Fi-rontás](bricks#wi-fi-brick).

#### Megoldás
You must have BootMii as boot2 to fix this.

Tölts vissza egy biztonsági mentést vagy kövesd az alábbi lépéseket:

1. Az [NUS Downloader](https://wiibrew.org/wiki/NUSD) segítségével tömörítsd az eredeti Wii menüdet egy WAD-fájlba!
1. A BootMii segítségével nyisd meg a Homebrew Channelt és egy WAD-kezelővel telepítsd újra a Wii menü WAD-ot!

Ha vWiivel dolgozol, ld. [a kapcsolódó szócikket a Wii U hackelési segédletben](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

## Wi-Fi-rontás

#### Tünetek
Ez a rontás ugyanolyan tünetekkel rendelkezik, mint az alapszintű elromlás, de még be tudod kapcsolni a Wiit egy Wii Remote-tal és egy eredeti kiadású Wiin még hozzáférhető a helyreállítási mód.

#### Ok
A Wi-Fi-rontás akkor következik be, ha a Wii Wi-Fi- (vagy Bluetooth) modulja sérült vagy nincs jól csatlakoztatva. Emiatt a konzol megtorpan egy fekete képernyőn, amíg az IOS-es válaszra vár.

Továbbá, ez egy Wii minin akkor is megtörténhet, ha egy sima Wii-re tervezett IOS-t telepítesz, mivel a Wii mini nem rendelkezik Wi-Fi-modullal.

#### Megoldás
Próbáld megigazítani vagy kicserélni a Wi-Fi/Bluetooth modult a konzolban!

Ha Wii minivel dolgozol, akkor be kell szerelned egy Wi-Fi-modult.

Ha ez nem sikerül, ld. [Alapszintű elromlás](bricks#low-level-brick).

## Alapszintű elromlás

#### Tünetek
A konzol nem válaszol és nem mutat képet. A helyreállítási mód hozzáférhetetlen. A boot2 alá telepített BootMii hozzáférhetetlen (feltéve, hogy telepítve van). A konzol teljesen halottnak tűnik.

#### Ok
Az alapszintű elromlás akkor következik be, ha a rendszer boot1/boot2 része sérült, vagy hardveres hiba történt.

#### Megoldás
Először is, meg kell állapítanod, hogy hardveres hiba okozza-e a problémát! Sorban ellenőrizd az alábbiakat:

+ Először is, bizonyosodj meg róla, hogy a konzol működik-e még: Befogad egy lemezt? A lemez felpörög? A Wii Remote-ok csatlakoznak? Ha igen, akkor ez azt jelenti, hogy a képi jel nem éri el a kijelzőt. Ebben az esetben lehetséges, hogy rossz a videókábeled, vagy egy nagyon ritka probléma kelezkezett a Wii videócsatlakozójával vagy a videókártyájával.
+ Ha Wii minivel dolgozol és egy sima Wiihez készült IOS80-at telepítettél, ld. [Wi-Fi-rontás](bricks#wi-fi-brick). Ha ezt már megpróbáltad és a probléma továbbra is fennáll, folytasd a következő ellenőrzéssel!
+ (Sima Wii esetén) próbálj [helyreállítási módba](recovery-mode) lépni! Ha ez sikerült, ld. [Wi-Fi-rontás](bricks#wi-fi-brick) és [IOS-rontás](bricks#ios-brick). Ha ezt már megpróbáltad és a probléma továbbra is fennáll, folytasd a következő ellenőrzéssel!
+ Húzd ki és dugd vissza a lemezolvasót, majd próbáld a bekapcsolni a konzolt! Ha ez nem sikerült, cseréld ki a lemezolvasót! Ha a probléma továbbra is fennáll, olvass tovább!
+ Ha idáig eljutottál, akkor vagy egy alapszintű boot0/boot1-sérülésről, a belső tárhely hibájáról, vagy egy ismeretlen hardverhibáról van szó. Próbálj internetes segítséget kérni vagy fontold meg egy új Wii megvásárlását!

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
