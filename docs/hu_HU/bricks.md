# Brickelődés

A brick-elt eszköz egy sérült eszköz, ami többé nem működik, vagy más szavakkal "hasznos mint egy tégla (brick)".

Egy Wii számos okból kifolyólag brickelődhet, de ez általában sérült programok vagy rosszul elvégzett homebrew módosítások okozzák.

## Brickelődés megelőzés

A brickelődés legkönyebben úgy előzhető meg, ha megismered a leggyakoribb kockázatokat, amik hozzájuk vezetnek. Alább találhatók az általános ajánlások a leggyakoribb kockázatokhoz és hogy miért kell elkerülnöd őket:

|                            Brick kockázat                           |                                                                                                                                                                                                                                                                                                            Magyarázat                                                                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|          Videó útmutatók vagy régi oktatóanyagok használata         |                                                                                              Ahogy a weboldal kezdőlapján is szerepel, ez kockázatos, mivel a videós útmutatók általában nem frissülnek feltöltés után, és több hónappal vagy évvel is elavultak lehetnek a kortárs ajánlásokkal szemben. A régi oktatóanyagokban kisebb mértékben ugyanez a probléma jelentkezik; ezek általában elavultak. Ne kövesd egyiket sem, kivéve, ha egy fejlesztő kifejezetten ajánlja.                                                                                              |
| Kényelmes modding szoftver, mint például a `Pimp My Wii` használata |                                                                           Az olyan modder szoftverek, mint a `Pimp My Wii`, a konzol módosításának megkönnyítését célozzák, de végső soron veszélyes fekete dobozok. Gyakran szükségtelen, hibás módosításokat hajtanak végre a konzolon egy egyszerű cél elérése érdekében, és használhatatlanná tehetik azt. Úgy véljük, hogy a ModMii **kivétel** ez alól, mivel nyílt forráskódú, tesztelt és végső soron az útmutató készítői által ellenőrzött.                                                                           |
|           A `DARKCORP`-hoz hasonló IOS csomagok telepítése          |                                                                         Az IOS-csomagok már évek óta elavult koncepciók, mivel a konzolodon található fontos IOS-okat cIOS-okkal írják felül. Ezeket egyáltalán nem támogatjuk, és nem kompatibilisek ezzel az útmutatóval, mivel számos megmagyarázhatatlan problémát okozhatnak, például azt, hogy a Homebrew Channel fejjel lefelé jelenik meg. Ha IOS-csomaggal ellátott konzolt kell javítanod, lásd a [ModMii](modmii#hackmii-solutions-wizard)-t.                                                                        |
|     Más konzolról származó NAND biztonsági mentés visszatöltése     |       Ez azonnal és valószínűleg **visszafordíthatatlanul tönkreteszi** a Wii-det. A NAND-od egyedi AES/HMAC-kulcsokkal rendelkezik, amelyek a konzolodba vannak beépítve. Ha egy másik konzol NAND-mentését telepíted, a Wii hardvere nem fogja tudni ellenőrizni a NAND-od hitelességét. Ennek következtében leáll, és nem fog elindulni. Ha van egy működésképtelen NAND-mentésed a konzolodról, használd [a gyári beállítások visszaállítására](wii-factory-reset) vonatkozó útmutatót, hogy létrehozz egy működőképes, üres NAND-ot.       |
|                Más rendszerhez készül IOS telepítése                |                                                                                                     Ez a legrosszabb esetben egy „brick”-et eredményez, és ezt jobb elkerülni. A legjobb példa erre egy Wii IOS telepítése egy Wii minire; a Wii minit Wi-Fi kártya nélkül tervezték. Ha Wii IOS-t telepítesz a konzolra, az ellenőrzi a Wi-Fi kártya meglétét, de nem talál ilyet. Ennek eredményeként lefagy, és létrehozza a fent említett Wi-Fi bricket.                                                                                                    |
|                     Téves konzol régió módosítás                    |                                                                                                      A régiózárak könnyen megkerülhetők olyan szoftverekkel, mint a [Priiloader](priiloader), így gyakran nincs ok a konzol régióváltására. Ha mégis ezt választod, **rendkívül óvatosnak** kell lenned, mivel a folyamat használhatatlanná teheti a Wii-det, ha nem tudod, mit csinálsz; különösen akkor, ha régióváltókat használsz a Wii-hez egy vWii-n vagy Wii mini-n, vagy fordítva.                                                                                                      |
|                 Más régió frissítéseinek telepítése                 | A konzol régiójának megváltoztatásával összefüggésben gyakran nincs értelme ezt megtenni. A legrosszabb esetben ez a [koreai Kii/Error 003](bricks#koreankiierror-003-brick) hibához vezethet, ami valószínűleg használhatatlanná teszi a konzolodat. Erősen javasoljuk, hogy futtasd le a [SysCheck](syscheck) programot a konzolodon, ha bármilyen verzióváltoztatást tervezel, hogy így meg tudd állapítani az eredeti régióját. Ha frissítéseket próbálsz telepíteni egy koreai konzolra, kérj segítséget az oldal alján található utasítások segítségével. |
|     Nem RCE-vel javított Nintendo WFC-szolgáltatások használata     |                                                                                                               Kizárólag a [Nintendo WFC](nintendowfc)-útmutatóban szereplő WFC-szolgáltatások használatát javasoljuk, mivel ezekről ismert, hogy javításokkal védik őket a Wii RCE-sebezhetőségei (távoli kódfutás) ellen. Más szolgáltatások esetében nincs ilyen védelem, ami miatt a szervereiken működő rosszindulatú felhasználók tönkretehetik a Wii-od.                                                                                                               |
|   Rendszer fájlok módosítása vagy régi Wii menu verzió telepítése   |                                                                                                                               Ez szinte mindig felesleges. Ha kíváncsi vagy, azt javasoljuk, hogy ezeket a feladatokat a Dolphinban hajtsd végre, ahelyett, hogy egy valódi konzolon próbálkoznál vele. Ha nem tudod pontosan, mit csinálsz, a kísérlet valószínűleg az [IOS brick](#ios-brick)-hez vezet, és a konzolod használhatatlanná válik.                                                                                                                               |
|                    Ismeretlen homebrew telepítése                   |                                          A homebrew-alkalmazásokat valódi emberek készítik, számos különböző okból. Korábban már előfordultak olyan esetek, amikor rosszindulatú homebrew-alkalmazásokat hoztak létre a Wii-hez, bár rendkívül valószínűtlen, hogy ilyen szoftverre bukkannál. Azt javasoljuk, hogy a homebrew-alkalmazásokat az [Open Shop Channel](osc)-ről szerezd be, mivel a beküldött homebrew-alkalmazásokat biztonsági szempontból ellenőrzik, és azoknak meg kell felelniük egy alapvető minőségi szabványnak.                                         |
|                  Veszélyes homebrew appok futtatása                 |                                                                                                   A homebrew szoftverek nem csupán azért lehetnek veszélyesek, mert rosszindulatú célból készültek, hanem azért is, mert veszélyes módosításokat hajtanak végre a Wii-n; az ilyen típusú szoftvereket kizárólag jól tájékozott felhasználóknak szabad használniuk. Ide tartoznak olyan homebrew szoftverek, mint az **AnyTitle Deleter**, az **AnyRegion Changer**, a **KoreanKii** és mások.                                                                                                   |
|                      Téves forwarder telepítés                      |                                                                                                                                                                                 A forwarder-ek [banner brick](#banner-brick)-et okozhatnak, ha hibásak. Legyél figyelmes azzal, mit telepítesz és mindig legyen [Priiloader](priiloader) telepítve, hogy megfelelően tudd javítani a briceklődést ha szükséges.                                                                                                                                                                                 |
|                       Téves konzol kikapcsolás                      |                                                                       Ne kapcsold ki a konzolodat bizonyos folyamatok alatt, mint például a BootMii NAND mentés visszaállítása. Azt javasoljuk, hogy halaszd el a Wii-n végrehajtandó veszélyes módosításokra vonatkozó terveid, ha az áramellátás instabil (pl. vihar miatt vagy tervezett áramszünetek idején). Az áramkimaradások a legrosszabb esetben a készülék [full brick](#low-level-brick)-jéhez vezethetnek.                                                                      |

Mindenesetre feltétlenül:

- Telepítsd a BootMii-t boot2-ként, ha lehetséges, egyébként pedig IOS-ként.
- Telepítsd a Priiloader-t, függetlenül a BootMii telepítési módjától.
- Készíts a BootMii-vel vagy a nanddumper@ios-sel NAND biztonsági mentést és mindig legyen kéznél egy érvényes másolat, de **különösen** mielőtt bármilyen kockázatos műveletet végeznél. Ne feledd, hogy bizonyos „brick” helyzetekben és egyes konzolokon a BootMii nem érhető el; ennek megfelelően készülj fel előre.

## Diagnózis

Ez a szakasz segít felismerni, hogy a konzol esetleg „brick” állapotba került-e, a konzol működőképességének alacsonyabb szintjétől a magasabb felé haladva. Ha úgy tűnik, hogy a konzolod olyan „brick” állapotban van, amelyre sem ebben a szakaszban, sem az útmutatóban nem találsz megoldást, kérjük, görgess le az oldal aljára a támogatási utasításokért.

### Wii Boot folyamat

```ini
[   POWERON   ] 
       │
       │
       ▼
[    boot0    ]  ──► Olvassa, dekriptálja és ellenőrzi a boot1 hash-t. Elutasítja 
       │             a boot1-et és nem bootol, ha az adat nem egyezik.
       │             (Stage 1 bootloader)
       ▼
[    boot1    ]  ──► Inicializálja a memóriát. Olvassa, dekriptálja és ellenőrzi 
       │             boot2 hash-t. Elutasítja a boot2-t és nem bootol, ha 
       │             az adat nem egyezik. Exploitolható a régebb Wii-okon.
       │             (Stage 2 bootloader)
       ▼
[    boot2    ]  ──► Betölti a System Menu-t és az IOS adatot, továbbá betölti a 
       │             GameCube (MIOS) módot. Tartalmazhatja a BootMii-t, ha
       │             a boot1 egy exploitolható hash algoritmussal rendelkezik.
       │             (Stage 3 bootloader)
       ▼
[ IOS/SysMenu ]
```

### Brickelődés osztályozás

Az alábbi tábla a következő szinkódolást használja a lehetséges megoldásokhoz:

🟩 - javítható és nem rendelkezik brick megelőző szoftverrel<br>
🟦 - javítható Priiloader-rel és/vagy IOS-ként használt BootMii-vel<br>
🟨 - javítható boot2-ként használt BootMii-vel<br>
🟥 - javítható hardver módosítással

|                                        Brick típus                                       |                                                                                                                                               Funkcionalitás                                                                                                                                              |
| :--------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                     ⬛<br>Nincs brick                                     |                                                                            A Wii elindul, és a Wii menübe lép. Nincs rosszul működő app, Wii beállítások hibamentes, és nincs látható probléma.                                                                           |
|                               🟩<br>[Semibrick](#semibrick)                              |                                                                                                Egy hibaüzenetet kapsz, ami Opera böngészőnek tűnik, amikor hozzáférsz a Wii beállításokhoz.                                                                                               |
|       🟩<br>[Banner brick (elérhető a Wii menu)](#banner-brick)       |                                                                                                      A `The system files are corrupted` üzenetet kapod egy adott csatornát megnyitva.                                                                                                     |
| 🟩 VAGY 🟦<br>[Banner brick (nem elérhető a Wii menu)](#banner-brick) |                                                                              Egy fekete képernyőt látsz a Health and Safety képernyőn `A` gombot nyomva. Ez egy WAD telepítése után történt.                                                                              |
|                          🟩 VAGY 🟦<br>[Mail brick](#mail-brick)                         |               Egy fekete képernyőt látsz a Health and Safety képernyőn `A` gombot nyomva. Ez véletlenül történik, DE hozzá tudsz férni a Maintenance Mode-hoz a `+` és a `-` nyomva tartásával a Health and Safety képernyőn, ami utána automatikusan indul.              |
|                             🟦<br>[Téma brick](#theme-brick)                             |                                                                              Egy fekete képernyőt látsz a Health and Safety képernyőn `A` gombot nyomva. Ez egy téma telepítése után történt.                                                                             |
|                    🟦<br>[Wii Menu/Opera brick](#wii-menuopera-brick)                    |                                                                                                   A Wii elindul, de rögtön egy olyan hibát látsz, ami az Opera web böngészőre hasonlít.                                                                                                   |
|                       🟨<br>[Error 003](#koreankiierror-003-brick)                       |                                                                                                        Wii elindul és a következő üzenetet látod `Error:003 unauthorized device has been detected.`                                                                                                       |
|                               🟨<br>[IOS brick](#ios-brick)                              |                                                                                   A Wii elindul és semmi nem történik; a konzol marad fekete képernyőnél. A BootMii elérhető boot2-ként.                                                                                  |
|                             🟥<br>[Wi-Fi brick](#wi-fi-brick)                            | A Wii elindul és semmi nem történik; a konzol marad fekete képernyőnél. A Wii bekapcsolható egy Wiimote-tal és a Recovery Mode elérhető. A BootMii boot2-ként nem elérhető. **Gyakori a Wii mini-n miután rossz IOS került telepítésre**. |
|                      🟥<br>[Alacson szintű brick](#low-level-brick)                      |                           A Wii elindul és semmi nem történik; a konzol marad fekete képernyőnél. A konzol nem kapcsolható be egy Wiimote-tal. A Recovery mode nem elérhető. A BootMii boot2-ként nem elérhető.                           |

## Brick típusok

Itt a különböző Wii brick-eket súlyosságuk szerint, tüneteikkel, okaikkal és megoldásaikkal együtt ismertetjük.

### Semibrick

::: details

#### Tünetek

Amikor a Wii-beállításokhoz navigálsz, az Opera webböngésző hibaüzenetet kapsz a következő szöveggel: `You tried to access the address (URL), which is currently unavailable.` Bizonyos esetekben a Wii Settings menü egyes részei továbbra is elérhetőek, más részek viszont nem (például a Country menü).

#### Ok

A semibrick akkor következik be, ha a konzol régiójától éltérő Wii menüt vagy témát telepítesz. Mivel a Wii Settings menüje HTML oldalak segítségével jelenik meg az Operával, a témák gyakran kicserélik ezeket az oldalakat, és más könyvtárakba helyezik őket; ez lényegében egy `404 Not Found` hibához vezet, de egy konzol brick formájában.

<!--What does this pull request do? Why is it needed?-->

konzol brick.

![](/images/bricks/semibrick.png)

#### Megoldások

Ellenőrizd az AnyRegion Changer programban, hogy a konzol régiója megegyezik-e a telepített témával vagy Wii menüvel.

Ha ez egy telepített téma miatt történt, használd a [csm-installer](themes) programot az eredeti téma újratelepítéséhez.

Ha a hibát egy telepített Wii Menu WAD okozta, töltsd le és telepítsd az eredeti Wii menüt a [NUSGet](https://github.com/NinjaCheetah/NUSGet) segítségével. **A Wii Menu WAD letöltésekor légy óvatos**. Ellenőrizd, hogy a konzolodnak megfelelő verziót a megfelelő régióval töltötted le.

Ha éppen egy régió csere folyamatában vagy, használd az [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)-t, hogy automatikusan javítsa a régió beállításaidat, hogy passzoljon a Wii Menu-dhöz.

:::

### Banner brick

::: details

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és ezt követően nem történik semmi a Wii sötét képernyőn marad. Ez egy WAD telepítése után történt, amit követően visszatértél a Wii menübe vagy újraindítottad a konzolt. Az is lehetséges, hogy a Wii menü még hozzáférhető, de egy adott csatorna megnyitásakor a konzol lefagy. Bizonyos esetekben a konzol „System files are corrupted” („A rendszerfájlok sérültek”) hibaüzenetet mutat.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Ok

Banner brick akkor fordul elő, ha olyan WAD fájlt telepítettél, amely érvénytelen Wii Menu bannerrel vagy ikonnal rendelkezik.

#### Megoldások

Ha képes vagy még hozzáférni a Wii menühöz, nyisd meg a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nem vagy képes hozzáférni a Wii menühöz, de telepítve van a konzolodra a [Priiloader](priiloader), akkor a Wii bekapcsolása közben tartsd nyomva a RESET-gombot a megnyitásához. Válaszd a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nincs, vagy nem férsz hozzá a Priiloaderhez, egy próbát megérhet a karbantartási mód. A Health and Safety képernyő megjelenése közben tartsd nyomva a `+` és `-` gombokat (az `A` megnyomása nélkül!).

Végső megoldásként használhatod a [BlueBomb](bluebomb)-ot a Homebrew Channel-be bootoláshoz amíg a Health and Safety képernyőn tartózkodsz.

:::

### Mail brick

::: details

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és ezt követően nem történik semmi a Wii sötét képernyőn marad. A karbantartási mód továbbra is hozzáférhető.

#### Ok

Mail brick akkor következik be, ha a Wiinek túl sok üzenetet kell feldolgoznia, vagy ha nem megfelelő üzenetek érkeztek a Wii Üzenőfalra. Ez megakadályozza a normális indítást. Mivel a Wii Üzenőfal a csatornák alatt jelenik meg, ez a Wii menü betöltésének meghiúsulását eredményezi.

#### Megoldások

A + és - gombokat nyomva tartva az egészségügyi figyelmeztetések képernyőjén a karbantartási módba léphetsz, ahol a Wii Message Board nem kerül betöltésre. Ha a Homebrew Channel nem telepített, kövesd a [Bluebomb](bluebomb) útmutatót.

Mostantól a Homebrew Channel betölthető és a brickelés javítható a Wii Message board [cdbackup](https://oscwii.org/library/app/cdbackup) segítségével történő törlésével.

:::

### Téma brick

::: details

#### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és ezt követően nem történik semmi a Wii sötét képernyőn marad. Ez egy téma telepítése után történt.

#### Ok

A téma brick akkor jelenik meg, ha helytelenül formázott téma kerül telepítésre.

#### Megoldások

Ennek a problémának a megoldásához nyisd meg a Homebrew Channel-t a Priiloaderen vagy a boot2 alá telepített BootMii-n keresztül, majd a csm-installer használatával telepíts egy alapértelmezett témát, pl. az alap Wii menü témát. A javításhoz egy másik módszer a [YAWM ModMii Edition](yawmme) elindítása és a régiódnak és verziódnak MEGFELELŐ alap Wii menü WAD újratelepítése.

:::

### Wii Menu/Opera brick

::: details

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

:::

### KoreanKii/Error 003 Brick

::: details

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

:::

### IOS brick

::: details

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

:::

### Wi-Fi brick

::: details

#### Tünetek

Ez a brick ugyanolyan tünetekkel rendelkezik, mint a low-level brick, de még be tudod kapcsolni a Wiit egy Wiimote-tal és egy eredeti kiadású Wii-n még hozzáférhető a [helyreállítási mód](recovery-mode).

#### Ok

Ez a brick akkor következik be, ha a Wii Wi-Fi- (vagy Bluetooth) modulja sérült vagy nincs jól csatlakoztatva. Emiatt a konzol megtorpan egy fekete képernyőn, amíg az IOS-es válaszra vár.

Ez a Wii mini esetében is előfordulhat, ha normál Wii IOS-t telepítesz, mivel a Wii mini nem rendelkezik Wi-Fi modullal.

#### Megoldások

A probléma megoldásához próbáld meg újra behelyezni vagy kicserélni a Wi-Fi/Bluetooth modult.

Ha Wii mini készüléket használsz, akkor Wi-Fi modult kell telepítened.

Ha mindkettő sikertelen, tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

:::

### Low-level brick

::: details

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

:::

---

::: info

**További segítség**

További segítségre van szükséged? Csatlakozz a [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)-csatornához, és kérj segítséget angol nyelven a #wii-vwii-assistance csatornán, jelezve, hogy erről az oldalról érkeztél és egy brick vagy egyéb problémát szeretnél megoldani. Kérjük, add meg az alábbi információkat:

1. A pontos hibaüzenetet, vagy azt, amit a képernyőn látsz, ha lehetséges, csatolj egy fotót is
2. A probléma megjelenése előtt végzett pontos lépéseket
3. Egy[SysCheck](syscheck)-naplót, ha tudsz ilyet készíteni
4. Van-e NAND-biztonsági másolatod vagy sem
5. Telepítetted a Priiloadert, a BootMii-t IOS-ként vagy a BootMii-t boot2-ként
6. A konzolod pontos modellje (eredeti Wii, Family Edition Wii, Wii mini, vWii a Wii U-n)

Ha nem beszélsz jól angolul, kérjük, használd a [Google Translate](https://translate.google.com/)-hez hasonló fordítót a kérdésed megfogalmazásához.

:::

---

[← Vissza a tartalomjegyzékhez](site-navigation){.btn .btn-solid}
