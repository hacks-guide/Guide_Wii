# Brickelődés

A „Brick” általában azt jelenti, hogy a Wii olyan állapotba került, hogy a továbbiakban valószínűleg csak ajtótámasztóként vagy kiállítási tárgyként használható.

Egy Wii számos okból kifolyólag brickelődhet, de ez általában sérült programok vagy rosszul elvégzett homebrew módosítások okozzák.

## Brickelődés megelőzés

A brickelődés megelőzésének több módja van, amelyek a józan paraszti észtől a biztonsági mentésig terjednek. Az általánosan elkerülendő dolgokat alább olvashatod:

- **NE kövess régi útmutatókat, NE használj régi homebrew programokat és NE kövess videós utmutatókat az interneten, hacsak a program fejlesztője KÜLÖN NEM KÉRI!**
- \*\* SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT NE HASZNÁLD a `Pimp My Wii` HOMEBREW ALKALMAZÁST. Ez VESZÉLYES, mert a program működése képes véletlenül BRICKELNI A KONZOLOD!\*\*
- NE telepíts olyan IOS csomagokat, mint a DARKCORP, mert felülírják a legtöbb IOS-edet cIOS-ekkel. Ez a módszer VESZÉLYES és elavult.\*\*
- **NE tölts vissza más konzolokról származó NAND biztonsági mentéseket!**
- NE telepíts olyan IOS-eket, amelyeket nem a konzolodra terveztek!\*\* (Pl.: Wii-s IOS-eket Wii mini-re.)
- **A Wii-re készült régióváltási módszereket NE próbáld ki vWii-n vagy Wii mini-n.**
- **NE használj Nintendo Wi-Fi Connection-szolgáltatást, kivéve ha rendelkezik távoli kódfuttatási javításokkal (mint például a [Wiimmfi](nintendowfc)). Ha mégis így tennél, az lehetővé teszi egy rosszindulatú támadó számára a konzolod BRICKELŐDÉSÉT!**
- **Csak a saját régiódhoz tartozó frissítéseket telepíts!**
  - A más régióból származó frissítések telepítése a legjobb esetben semmit sem eredményezhet vagy a legrosszabb esetben egy [Korean Kii/Error 003](bricks#koreankii-error-003-brick) bricket eredményezhet. Ha használt Wii-t vásároltál, hogy ez ne történhessen meg, futtasd le a [SysCheck](syscheck) -et, hogy ellenőrizd a konzol eredeti régióját. Ha a Wii régiód koreai, légy KIEMELTEN óvatos, amikor rendszerfrissítéseket telepítesz és fontold meg a segítségkérést.
- **NE töröld vagy módosítsd a rendszerfájlokat, NE telepítsd a Wii menü vagy IOS-ek régi verzióit és NE telepíts semmilyen rendszermenü-módosítást, hacsak nem tudod, hogy mit csinálsz!**
  - Például ha egy Wii minin kicseréled az IOS80-at, az [Wi-Fi Brick](bricks#wi-fi-brick) brickben végződhet.
- **Ne telepíts nem megbízható forrásokból származó homebrew programokat vagy ha a forráskód nem elérhető.**
  - Az [Open Shop Channel](osc)-en található programok biztonságosak.
  - Előfordult már, hogy valaki szándékosan rosszindulatú programokat fejlesztett a Wii-re, de az is meglehet, hogy egy programot csak rosszul fejlesztettek. Mindig bizonyosodj meg róla, hogy mit telepítesz és csak olyan programokat telepíts, amire szükséged is van.
  - A sérült vagy nem-stabil forwaderek [banner brick](#banner-brick)-et eredményezhetnek, úgyhogy javasoljuk, hogy mindig a Homebrew Channelből indíts programokat, hacsak nincs nagyon szükséged a forwarder-re.
- **Győződj meg róla, hogy tudod, mit csinálsz, amikor homebrew alkalmazásokat futtatsz - különösen azokat, amelyek képesek a rendszerfájlok módosítására. KÜLÖNÖSEN óvatosnak kell lenned, ha olyan alkalmazásokat használsz, mint:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (második oka a [Korean Kii/Error 003](bricks#koreankii-error-003-brick) brickelésnek)
  - Firmware Downgrader-ek
  - Bármely más alkalmazás, amely kritikus NAND fájlokat módosít
- **NE NYÚLJ HOZZÁ A WII ÁRAMFORRÁSÁHOZ VAGY A BEKAPCSOLÓGOMBJÁHOZ, MIKÖZBEN LÉTFONTOSSÁGÚ RENDSZERFÁJLOKAT TELEPÍTESZ VAGY MÓDOSÍTASZ.**
  - Ha az áramellátásod instabil (pl. vihar, áramkimaradás), halaszd el a tevékenységét, amíg stabil áramforrás nem áll rendelkezésedre.
  - Ha az áramellátásod instabil (pl. vihar, áramkimaradás), halaszd el a tevékenységét, amíg stabil áramforrás nem áll rendelkezésedre.

Mindenesetre feltétlenül:

- Telepítsd a BootMii-t boot2-ként, ha lehetséges, egyébként pedig IOS-ként.
- Telepítsd a Priiloader-t, függetlenül a BootMii telepítési módjától.
- Készíts a BootMii-vel NAND biztonsági mentést és mindig legyen kéznél egy érvényes másolat, különösen mielőtt bármilyen kockázatos műveletet végeznél. Jegyezd meg, hogy vannak olyan brick esetek, amikor a BootMii nem hozzáférhető, úgyhogy tervezz előre.

## Diagnózis

Ez a rész a lehetséges elrontások diagnózisában segít és súlyosság szerint van növekvő sorba rendezve. Ha úgy brickelődött a Wii-d, hogy az alábbi esetek egyike sem alkalmazható rá, akkor kérj segítséget (angol nyelven) a Nintendo Homebrew Discord-szerveren.

- A Wii elindul, és a Wii menübe lép. Minden program rendeltetésszerűen működik, a Wii Settings-ben nincsenek hibák, minden látszólag rendben van. Nincs brick, a konzol rendben.
- A Wii elindul, és a Wii menübe lép.
  - Ha egy adott csatornát elérve a `The system files are corrupted` üzenetet kapod, lásd a [banner brick](bricks#banner-brick)-et.
  - Ha a Wii Settings használatát követően látsz egy hibaüzenetet, ami az Opera web böngészőre hasonlít, lásd a [semibrick](bricks#semibrick)-et.
- Ha egy adott csatorna elérését követően a `The system files are corrupted` üzenet jelenik meg, lásd [banner brick](bricks#banner-brick).
  - Ha a Wii beállítások megnyitása után az Opera webböngészőhöz hasonló hibaüzenet jelenik meg, lásd [semibrick](bricks#semibrick).
  - Ha ez egy WAD-fájl telepítése után történt akkor tekintsd meg a [banner brick-et](bricks#banner-brick).
  - Ha ez látszólag minden ok nélkül keződött el és képes vagy hozzáférni a Maintenance Mode-hoz a + és - gombok nyomvatartásával az egészségügyi figyelmeztetések képernyőn, akkor tekintsd meg a [mail brick-et](bricks#mail-brick).
- A Wii elindul, de RÖGTÖN egy olyan hibát látsz, ami látszólag az Opera web böngészőre hasonlít. Tekintsd meg a [Wii Menu/Opera brick-et](bricks#wii-menuopera-brick).
- Error 003. Tekintsd meg a [Korean Kii/Error 003 brick-et](bricks#koreankii-error-003-brick).
- Semmi sem történik, fekete a képernyő, DE a boot2 alá telepített BootMii hozzáférhető. Tekintsd meg az [IOS brick-et](bricks#ios-brick).
- Semmi sem történik, fekete a képernyő, DE a Wii bekapcsolható egy Wii Remote-tal és a helyreállítási mód hozzáférhető. Tekintsd meg a [Wi-Fi brick-et](bricks#wi-fi-brick).
- Semmi sem történik, fekete a képernyő. A Wii nem kapcsolható be egy Wii Remote-tal, és a [Recovery Mode](recovery-mode) és a boot2 alá telepített BootMii nem hozzáférhető. Tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

## Brick típusok

Itt a különböző Wii brick-eket súlyosságuk szerint, tüneteikkel, okaikkal és megoldásaikkal együtt ismertetjük.

### Semibrick

#### Tünetek

Amikor a Wii-beállításokhoz navigálsz, az Opera webböngésző hibaüzenetet kapsz a következő szöveggel: `You tried to access the address (URL), which is currently unavailable.` Bizonyos esetekben a Wii Settings menü egyes részei továbbra is elérhetőek, más részek viszont nem (például a Country menü).

#### Ok

A semibrick akkor következik be, ha a konzol régiójától éltérő Wii menüt vagy témát telepítesz. Mivel a Wii Settings menüje HTML oldalak segítségével jelenik meg az Operával, a témák gyakran kicserélik ezeket az oldalakat, és más könyvtárakba helyezik őket; ez lényegében egy `404 Not Found` hibához vezet, de egy konzol brick formájában.

![](/images/bricks/semibrick.png)

#### Megoldások

Ellenőrizd az AnyRegion Changer programban, hogy a konzol régiója megegyezik-e a telepített témával vagy Wii menüvel.

Ha ez egy telepített téma miatt történt, használd a [csm-installer](themes) programot az eredeti téma újratelepítéséhez.

Ha a hibát egy telepített Wii Menu WAD okozta, töltsd le és telepítsd az eredeti Wii menüt a [NUSGet](https://github.com/NinjaCheetah/NUSGet) segítségével.

::: danger

A Wii Menu WAD letöltésekor légy óvatos. Ellenőrizd, hogy a konzolodnak megfelelő verziót a megfelelő régióval töltötted le.

:::

Ha éppen egy régió csere folyamatában vagy, használd az [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)-t, hogy automatikusan javítsa a régió beállításaidat, hogy passzoljon a Wii Menu-dhöz.

### Banner brick

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy WAD telepítése után történt, amit követően visszatértél a Wii menübe vagy újraindítottad a konzolt. Az is lehetséges, hogy a Wii menü még hozzáférhető, de egy adott csatorna megnyitásakor a konzol lefagy. Bizonyos esetekben a konzol „System files are corrupted” („A rendszerfájlok sérültek”) hibaüzenetet mutat.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Ok

Banner brick akkor fordul elő, ha olyan WAD fájlt telepítettél, amely érvénytelen Wii Menu bannerrel vagy ikonnal rendelkezik.

#### Megoldások

Ha képes vagy még hozzáférni a Wii menühöz, nyisd meg a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nem vagy képes hozzáférni a Wii menühöz, de telepítve van a konzolodra a [Priiloader](priiloader), akkor a Wii bekapcsolása közben tartsd nyomva a RESET-gombot a megnyitásához. Válaszd a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nincs, vagy nem férsz hozzá a Priiloaderhez, egy próbát megérhet a karbantartási mód. A Health and Safety képernyő megjelenése közben tartsd nyomva a `+` és `-` gombokat (az `A` megnyomása nélkül!).

Végső megoldásként használhatod a [BlueBomb](bluebomb)-ot a Homebrew Channel-be bootoláshoz amíg a health/warning képernyőn tartózkodsz.

### Téma brick

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy téma telepítése után történt.

#### Ok

A téma brick akkor jelenik meg, ha helytelenül formázott téma kerül telepítésre.

#### Megoldások

Ennek a problémának a megoldásához nyisd meg a Homebrew Channel-t a Priiloaderen vagy a boot2 alá telepített BootMii-n keresztül, majd a csm-installer használatával telepíts egy alapértelmezett témát, pl. az alap Wii menü témát. A javításhoz egy másik módszer a [YAWM ModMii Edition](yawmme) elindítása és a régiódnak és verziódnak MEGFELELŐ alap Wii menü WAD újratelepítése.

### Mail brick

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. A karbantartási mód továbbra is hozzáférhető.

#### Ok

Mail brick akkor következik be, ha a Wiinek túl sok üzenetet kell feldolgoznia, vagy ha nem megfelelő üzenetek érkeztek a Wii Üzenőfalra. Ez megakadályozza a normális indítást. Mivel a Wii Üzenőfal a csatornák alatt jelenik meg, ez a Wii menü betöltésének meghiúsulását eredményezi.

#### Megoldás

A + és - gombokat nyomva tartva az egészségügyi figyelmeztetések képernyőjén a karbantartási módba léphetsz, ahol a Wii Message Board nem kerül betöltésre. Ha a Homebrew Channel nem telepített, kövesd a [Bluebomb](bluebomb) útmutatót.

Mostantól a Homebrew Channel betölthető és a brickelés javítható a Wii Message board [cdbackup](https://oscwii.org/library/app/cdbackup) segítségével történő törlésével.

### Wii Menu/Opera brick

#### Tünetek

A Wii indításakor egy Opera-internetböngészőben megjelenített hibaüzenetet látsz, ami valahogy így néz ki: `You tried to access the address (URL), which is currently unavailable`. Ez a Wii minden indításakor megjelenik és nem lehet átlépni.

#### Ok

Ez a brick sokkal végzetesebb, mint a [Semibrick](#semibrick). Ha s SYSCONF (rendszerkonfigurációs) fájl megsérül, akkor a Wii törli és újra létrehozza azt, majd elindítja az első beállítási folyamatot.

Viszont ez a fájl a Wii Settings oldalaihoz hasonló helyen van tárolva. Ha a régiódnak nem megfelelő Wii menü vagy téma van telepítve, akkor a rendszer nem fogja megtalálni.

![](/images/bricks/sysmenu-brick.png)

#### Megoldások

Ha rendelkezel [Priiloader](priiloader) programmal, használd azt a Homebrew Channel belépéséhez, és telepítsd újra az eredeti témát/eredeti Wii menüt.

Ha nem férsz hozzá a Priiloaderhez vagy a Wiid nincs modolva, akkor próbáld meg a [BlueBomb](bluebomb) módszert.

Alternatívaként a [Recovery Mode](recovery-mode) is használható a helyreállítás megpróbálásához.

### KoreanKii/Error 003 Brick

#### Tünetek

A képernyő normál indításkor az alábbiak szerint jelenik meg.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

#### Ok

A később megjelent koreai Wiik forgalmazásánál a Nintendo megváltoztatta a rendszer titkosítási kulcsát a a homebrew programok futtatásának kiküszöbölése érdekében. Ugyan ez nem sikerült, de később, de a Nintendo bennhagyott egy ellenőrzést a System Menu 4.2/4.3-as verziójában, ami ellenőrzi, hogy a **nem**-koreai gépeken megjelenik-e a koreai titkosítási kulcs. Ha ez a teszt sikeres, a hiba kiváltódik és a Wii gyakorlatilag brickelt.

Ez általában egy Wii rendszerfrissítés közvetlen következménye egy gyanútlan, régióváltott koreai Wii-n.

#### Megoldások

Mivel ez a brick leggyakrabban a Wii Menu frissítése után jelenik meg, ilyenkor a Priiloader nincs telepítve. Ha a Priiloader hozzáférhető, akkor egyszerűen meg tudod javítani az előző Wii System Menu újratelepítésével vagy a KoreanKii homebrew app megnyitásával és a koreai kulcs törlésével.

A koreai Wii konzolok Wii Menu 3.3 verzióval kerültek forgalomba, körülbelül abban az időben, amikor a Nintendo [kijavította a Trucha hibát a boot1-ben](https://wiibrew.org/wiki/3.3#Changes), így a BootMii boot2-ként nem telepíthető és nem használható egyetlen koreai Wii konzolon sem.

Ugyan ez az állapot különösen veszélyes helyzetben hagyja a konzolt, \*\* de még javítható\*\*. Ehhez a [Recovery Mode](recovery-mode)-ba kell lépned, ahol egy program futtatásával hozzáférhetsz a Homebrew Channelhez és visszafordíthatod a feltételeket, amik a bricket eredményezték. Megjegyzés: Ehhez a módszerhez egy drivechip-pel kell rendelkezned.

### IOS brick

#### Tünetek

Ez a brick az IOS-en keresztül a Wii menü meghibásodása miatt azonosnak tűnik egy alacsony szintű téglával, azonban nem teljes alacsony szintű NAND-sérülésről vagy alacsony szintű hardverhibáról van szó.

#### Ok

Ez a brick akkor következik be, amikor a Wii menü IOS-e [csonk](http://wiibrew.org/wiki/Stub_IOS), vagy ha rossz típusú IOS-t volt telepítve a konzolra. Egy megcsonkolt rendszermenü ISO általában akkor jelenik meg, ha a Wii menü korábbi verzióját próbáltad visszatelepíteni. Ha ez a probléma egy sima IOS80 Wii mini-re telepítése után lépett fel, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et.

#### Megoldások

Ehhez BootMii-t kell boot2-ként használnod.

Visszaállíthatsz egy NAND biztonsági másolatot, vagy a következőket teheted:

1. Használd a [NUSGet](https://github.com/NinjaCheetah/NUSGet)-et, hogy egy WAD-ot készíts az eredeti Wii Menu-dből.
2. Használd a BootMii-t a Homebrew Channel-re belépéshez és használj egy WAD manager-t a Wii Menu WAD telepítéséhez.

vWii-hez tekintsd meg az [Egy vWii IOS/Channel helyreállítását](https://wiiu.hacks.guide/recover-vwii-ioses-channels).

### Wi-Fi brick

#### Tünetek

Ez a brick ugyanolyan tünetekkel rendelkezik, mint a low-level brick, de még be tudod kapcsolni a Wiit egy Wiimote-tal és egy eredeti kiadású Wii-n még hozzáférhető a [helyreállítási mód](recovery-mode).

#### Ok

Ez a brick akkor következik be, ha a Wii Wi-Fi- (vagy Bluetooth) modulja sérült vagy nincs jól csatlakoztatva. Emiatt a konzol megtorpan egy fekete képernyőn, amíg az IOS-es válaszra vár.

Ez a Wii mini esetében is előfordulhat, ha normál Wii IOS-t telepítesz, mivel a Wii mini nem rendelkezik Wi-Fi modullal.

#### Megoldások

A probléma megoldásához próbáld meg újra behelyezni vagy kicserélni a Wi-Fi/Bluetooth modult.

Ha Wii mini készüléket használsz, akkor Wi-Fi modult kell telepítened.

Ha mindkettő sikertelen, tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

### Low-level brick

#### Tünetek

Teljesen fekete képernyő, nincs válasz a felhasználói bevitelre. A [Recovery Mode](recovery-mode) nem bootolható, sem a BootMii, mint boot2 (vagy soha nem létezett). Minden próbálkozás ellenére ez a konzol halottnak tűnik.

#### Ok

Ez a hiba akkor jelentkezik, ha a boot1/boot2 sérült, vagy ha hardverhiba lépett fel.

#### Megoldások

Először is, meg kell állapítanod, hogy hardveres hiba okozza-e a problémát. A felsorolás sorrendjében csináld a következőket:

- Először is, bizonyosodj meg róla, hogy a Wii-od még mindig működik-e (befogad egy lemezt, helyesen felpörgeti, Wiimote-ok csatlakoznak) mielőtt belefognál a következő lépésekbe. Ha igen, akkor ez azt jelenti, hogy a képi jel nem éri el a kijelzőt. Ebben az esetben lehetséges, hogy rossz a videókábeled, vagy egy nagyon ritka probléma kelezkezett a GPU videó portjával.
- Ha Wii mini-n vagy és egy normál IOS80-at telepítettél, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et. Ha nem sikerült feloldani a Wi-Fi brick-et, folytasd tovább.
- Próbálkozás a [Recovery Mode](recovery-mode)-ba bootoláshoz (normál Wii-ok csak). Ha a Wii Recovery Mode-ba bootol, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et vagy az [IOS brick](bricks#ios-brick)-et. Ha nem sikerült feloldani a Wi-Fi brick-et vagy az IOS brick-et, folytasd tovább.
- Húzd ki és dugd vissza a lemezolvasót, majd próbálj meg nomrálisan bootolni. Ha ez még mindig nem sikerült, cseréld ki a lemezolvasót. Ha a probléma továbbra is fennáll, olvass tovább.
- Ha idáig eljutottál, akkor vagy egy alacsony szintű boot0/boot1-sérülésről, a NAND chip hibájáról, vagy egy ismeretlen hardverhibáról van szó. Próbálj internetes segítséget kérni vagy fontold meg egy új Wii megvásárlását.

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
