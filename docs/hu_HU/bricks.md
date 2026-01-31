# Brickelődés

A „Brick” általában azt jelenti, hogy a Wii olyan állapotba került, hogy a továbbiakban valószínűleg csak ajtótámasztóként vagy kiállítási tárgyként használható.

Egy Wii számos okból kifolyólag brickelődhet, de ez általában sérült programok vagy rosszul elvégzett homebrew módosítások okozzák.

# Brickelődés megelőzés

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do:

- **NE kövess régi útmutatókat, NE használj régi homebrew programokat és NE kövess videós utmutatókat az interneten, hacsak a program fejlesztője KÜLÖN NEM KÉRI!**
- \*\* SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT NE HASZNÁLD a `Pimp My Wii` HOMEBREW ALKALMAZÁST. Ez VESZÉLYES, mert a program működése képes véletlenül BRICKELNI A KONZOLOD!\*\*
- NE telepíts olyan IOS csomagokat, mint a DARKCORP, mert felülírják a legtöbb IOS-edet cIOS-ekkel. Ez a módszer VESZÉLYES és elavult.\*\*
- **NE tölts vissza más konzolokról származó NAND biztonsági mentéseket!**
- NE telepíts olyan IOS-eket, amelyeket nem a konzolodra terveztek!\*\* (Pl.: Wii-s IOS-eket Wii mini-re.)
- **A Wii-re készült régióváltási módszereket NE próbáld ki vWii-n vagy Wii mini-n.**
- **NE használj Nintendo Wi-Fi Connection-szolgáltatást, kivéve ha rendelkezik távoli kódfuttatási javításokkal (mint például a [Wiimmfi](nintendowfc)). Ha mégis így tennél, az lehetővé teszi egy rosszindulatú támadó számára a konzolod BRICKELŐDÉSÉT!**
- **Csak a saját régiódhoz tartozó frissítéseket telepíts!**
  - A más régióból származó frissítések telepítése a legjobb esetben semmit sem eredményezhet vagy a legrosszabb esetben egy [Korean Kii/Error 003](bricks#koreankii-error-003-brick) bricket eredményezhet. Ha használt Wii-t vásároltál, hogy ez ne történhessen meg, futtasd le a [SysCheck](syscheck) -et, hogy ellenőrizd a konzol eredeti régióját. If it is Korean, be EXTREMELY careful with applying system updates to your console, and consider seeking support for further assistance.
- **NE töröld vagy módosítsd a rendszerfájlokat, NE telepítsd a Wii menü vagy IOS-ek régi verzióit és NE telepíts semmilyen rendszermenü-módosítást, hacsak nem tudod, hogy mit csinálsz!**
  - Például ha egy Wii minin kicseréled az IOS80-at, az [Wi-Fi Brick](bricks#wi-fi-brick) brickben végződhet.
- **Ne telepíts nem megbízható forrásokból származó homebrew programokat vagy ha a forráskód nem elérhető.**
  - Az [Open Shop Channel](osc)-en található programok biztonságosak.
  - There have been incidents of malicious software being developed for the Wii in the past, while other apps are just badly developed. Make sure that you know what you are installing, and only install what you need.
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
- Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

# Diagnózis

This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. Ha úgy brickelődött a Wii-d, hogy az alábbi esetek egyike sem alkalmazható rá, akkor kérj segítséget (angol nyelven) a Nintendo Homebrew Discord-szerveren.

- Wii starts, and progresses to the Wii Menu. Minden program rendeltetésszerűen működik, a Wii Settings-ben nincsenek hibák, minden látszólag rendben van. No brick.
- A Wii elindul, és a Wii menübe lép.
  - If after acccessing a specific channel, you get `The system files are corrupted`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii Settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- Ha egy adott csatorna elérését követően a `The system files are corrupted` üzenet jelenik meg, lásd [banner brick](bricks#banner-brick).
  - Ha a Wii beállítások megnyitása után az Opera webböngészőhöz hasonló hibaüzenet jelenik meg, lásd [semibrick](bricks#semibrick).
  - Ha ez egy WAD-fájl telepítése után történt akkor tekintsd meg a [banner brick-et](bricks#banner-brick).
  - Ha ez látszólag minden ok nélkül keződött el és képes vagy hozzáférni a Maintenance Mode-hoz a + és - gombok nyomvatartásával az egészségügyi figyelmeztetések képernyőn, akkor tekintsd meg a [mail brick-et](bricks#mail-brick).
- Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. Tekintsd meg a [Wii Menu/Opera brick-et](bricks#wii-menuopera-brick).
- Error 003. Tekintsd meg a [Korean Kii/Error 003 brick-et](bricks#koreankii-error-003-brick).
- Nothing happens, black screen, BUT BootMii as boot2 is accessible. Tekintsd meg az [IOS brick-et](bricks#ios-brick).
- Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. Tekintsd meg a [Wi-Fi brick-et](bricks#wi-fi-brick).
- Nothing happens, black screen. A Wii nem kapcsolható be egy Wii Remote-tal, és a [Recovery Mode](recovery-mode) és a boot2 alá telepített BootMii nem hozzáférhető. Tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

# Brick típusok

Itt a különböző Wii brick-eket súlyosságuk szerint, tüneteikkel, okaikkal és megoldásaikkal együtt ismertetjük.

## Semibrick

### Tünetek

Amikor a Wii-beállításokhoz navigálsz, az Opera webböngésző hibaüzenetet kapsz a következő szöveggel: `You tried to access the address (URL), which is currently unavailable.` Bizonyos esetekben a Wii Settings menü egyes részei továbbra is elérhetőek, más részek viszont nem (például a Country menü).

### Ok

A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. Mivel a Wii Settings menüje HTML oldalak segítségével jelenik meg az Operával, a témák gyakran kicserélik ezeket az oldalakat, és más könyvtárakba helyezik őket; ez lényegében egy `404 Not Found` hibához vezet, de egy konzol brick formájában.

![](/images/bricks/semibrick.png)

### Megoldások

Ellenőrizd az AnyRegion Changer programban, hogy a konzol régiója megegyezik-e a telepített témával vagy Wii menüvel.

Ha ez egy telepített téma miatt történt, használd a [csm-installer](themes) programot az eredeti téma újratelepítéséhez.

Ha a hibát egy telepített Wii Menu WAD okozta, töltsd le és telepítsd az eredeti Wii menüt a [NUSGet](https://github.com/NinjaCheetah/NUSGet) segítségével.

::: danger

Be cautious when downloading the Wii Menu WAD. Ellenőrizd, hogy a konzolodnak megfelelő verziót a megfelelő régióval töltötted le.

:::

Ha éppen egy régió csere folyamatában vagy, használd az [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)-t, hogy automatikusan javítsa a régió beállításaidat, hogy passzoljon a Wii Menu-dhöz.

## Banner brick

### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Az is lehetséges, hogy a Wii menü még hozzáférhető, de egy adott csatorna megnyitásakor a konzol lefagy. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

### Ok

Banner brick akkor fordul elő, ha olyan WAD fájlt telepítettél, amely érvénytelen Wii Menu bannerrel vagy ikonnal rendelkezik.

### Megoldások

Ha képes vagy még hozzáférni a Wii menühöz, nyisd meg a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nem vagy képes hozzáférni a Wii menühöz, de telepítve van a konzolodra a [Priiloader](priiloader), akkor a Wii bekapcsolása közben tartsd nyomva a RESET-gombot a megnyitásához. Válaszd a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nincs, vagy nem férsz hozzá a Priiloaderhez, egy próbát megérhet a karbantartási mód. A Health and Safety képernyő megjelenése közben tartsd nyomva a `+` és `-` gombokat (az `A` megnyomása nélkül!).

## Téma brick

### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. This happened after installing a theme.

### Ok

A téma brick akkor jelenik meg, ha helytelenül formázott téma kerül telepítésre.

### Megoldások

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. A javításhoz egy másik módszer a [YAWM ModMii Edition](yawmme) elindítása és a régiódnak és verziódnak MEGFELELŐ alap Wii menü WAD újratelepítése.

## Mail brick

### Tünetek

A Wii bekapcsolásakor megjelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. A karbantartási mód továbbra is hozzáférhető.

### Ok

A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

### Megoldás

A + és - gombokat nyomva tartva az egészségügyi figyelmeztetések képernyőjén a karbantartási módba léphetsz, ahol a Wii Message Board nem kerül betöltésre. Ha a Homebrew Channel nem telepített, kövesd a [Bluebomb](bluebomb) útmutatót.

Mostantól a Homebrew Channel betölthető és a brickelés javítható a Wii Message board [cdbackup](https://oscwii.org/library/app/cdbackup) segítségével történő törlésével.

## Wii Menu/Opera brick

### Tünetek

A Wii indításakor egy Opera-internetböngészőben megjelenített hibaüzenetet látsz, ami valahogy így néz ki: `You tried to access the address (URL), which is currently unavailable`. Ez a Wii minden indításakor megjelenik és nem lehet átlépni.

### Ok

Ez a brick sokkal végzetesebb, mint a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

Viszont ez a fájl a Wii Settings oldalaihoz hasonló helyen van tárolva. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

### Megoldások

Ha rendelkezel [Priiloader](priiloader) programmal, használd azt a Homebrew Channel belépéséhez, és telepítsd újra az eredeti témát/eredeti Wii menüt.

Ha nem férsz hozzá a Priiloaderhez vagy a Wiid nincs modolva, akkor próbáld meg a [BlueBomb](bluebomb) módszert.

Alternatívaként a [Recovery Mode](recovery-mode) is használható a helyreállítás megpróbálásához.

## KoreanKii/Error 003 Brick

### Tünetek

A képernyő normál indításkor az alábbiak szerint jelenik meg.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### Ok

When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. Ugyan ez nem sikerült, de később, de a Nintendo bennhagyott egy ellenőrzést a System Menu 4.2/4.3-as verziójában, ami ellenőrzi, hogy a **nem**-koreai gépeken megjelenik-e a koreai titkosítási kulcs. If this check succeeds, the error triggers and the Wii is effectively bricked.

Ez általában egy Wii rendszerfrissítés közvetlen következménye egy gyanútlan, régióváltott koreai Wii-n.

### Megoldások

Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

A koreai Wii konzolok Wii Menu 3.3 verzióval kerültek forgalomba, körülbelül abban az időben, amikor a Nintendo [kijavította a Trucha hibát a boot1-ben](https://wiibrew.org/wiki/3.3#Changes), így a BootMii boot2-ként nem telepíthető és nem használható egyetlen koreai Wii konzolon sem.

Ugyan ez az állapot különösen veszélyes helyzetben hagyja a konzolt, \*\* de még javítható\*\*. Ehhez a [Recovery Mode](recovery-mode)-ba kell lépned, ahol egy program futtatásával hozzáférhetsz a Homebrew Channelhez és visszafordíthatod a feltételeket, amik a bricket eredményezték. Note that you must have a drivechip in order for this method to work.

## IOS brick

### Tünetek

Ez a brick az IOS-en keresztül a Wii menü meghibásodása miatt azonosnak tűnik egy alacsony szintű téglával, azonban nem teljes alacsony szintű NAND-sérülésről vagy alacsony szintű hardverhibáról van szó.

### Ok

Ez a brick akkor következik be, amikor a Wii menü IOS-e [csonk](http://wiibrew.org/wiki/Stub_IOS), vagy ha rossz típusú IOS-t volt telepítve a konzolra. Egy megcsonkolt rendszermenü ISO általában akkor jelenik meg, ha a Wii menü korábbi verzióját próbáltad visszatelepíteni. Ha ez a probléma egy sima IOS80 Wii mini-re telepítése után lépett fel, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et.

### Megoldások

Ehhez BootMii-t kell boot2-ként használnod.

Visszaállíthatsz egy NAND biztonsági másolatot, vagy a következőket teheted:

1. Használd a [NUSGet](https://github.com/NinjaCheetah/NUSGet)-et, hogy egy WAD-ot készíts az eredeti Wii Menu-dből.
2. Használd a BootMii-t a Homebrew Channel-re belépéshez és használj egy WAD manager-t a Wii Menu WAD telepítéséhez.

vWii-hez tekintsd meg az [Egy vWii IOS/Channel helyreállítását](https://wiiu.hacks.guide/recover-vwii-ioses-channels).

## Wi-Fi brick

### Tünetek

Ez a brick ugyanolyan tünetekkel rendelkezik, mint a low-level brick, de még be tudod kapcsolni a Wiit egy Wiimote-tal és egy eredeti kiadású Wiin még hozzáférhető a [helyreállítási mód](recovery-mode).

### Ok

This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

Ez a Wii mini esetében is előfordulhat, ha normál Wii IOS-t telepítesz, mivel a Wii mini nem rendelkezik Wi-Fi modullal.

### Megoldások

A probléma megoldásához próbáld meg újra behelyezni vagy kicserélni a Wi-Fi/Bluetooth modult.

Ha Wii mini készüléket használsz, akkor Wi-Fi modult kell telepítened.

Ha mindkettő sikertelen, tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

## Low-level brick

### Tünetek

Completely black screen, no response to user input. A [Recovery Mode](recovery-mode) nem bootolható, sem a BootMii, mint boot2 (vagy soha nem létezett). Minden próbálkozás ellenére ez a konzol halottnak tűnik.

### Ok

Ez a hiba akkor jelentkezik, ha a boot1/boot2 sérült, vagy ha hardverhiba lépett fel.

### Megoldások

First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

- Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- Ha Wii mini-n vagy és egy normál IOS80-at telepítettél, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et. If steps to resolve the Wi-Fi brick failed, proceed.
- Próbálkozás a [Recovery Mode](recovery-mode)-ba bootoláshoz (normál Wii-ok csak). Ha a Wii Recovery Mode-ba bootol, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et vagy az [IOS brick](bricks#ios-brick)-et. If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
- Ha idáig eljutottál, akkor vagy egy alacsony szintű boot0/boot1-sérülésről, a NAND chip hibájáról, vagy egy ismeretlen hardverhibáról van szó. Consider consulting online help or buying another Wii.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
