# Elrontás

Ha elromlott a Wiid, akkor már nem sok hasznod lesz rá, hacsak nem kell egy papírnehezék.

Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

# Az elrontás kiküszöbölése

Az elrontás megelőzésének több módja van, amelyek a józan paraszti észtől a biztonsági mentésig terjednek. Az általánosan elkerülendő dolgokat alább olvashatod:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
- **Only install updates for your own region!**.
  - Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. Ha a Wii régiója koreai, légy KIEMELTEN óvatos, amikor rendszerfrissítéseket telepítesz és fontold meg a segítségkérést!
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - Előfordult már, hogy valaki szándékosan rosszindulatú programokat fejlesztett a Wiire, de az is meglehet, hogy egy programot rosszul fejlesztettek. Mindig bizonyosodj meg róla, hogy mit futtatsz és csak olyan programokat telepíts, amire szükséged is van!
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter;
  - AnyRegion Changer;
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
  - a régebbi rendszerverzióra váló programok;
  - és bármilyen egyéb program, ami hozzányúl a létfontosságú rendszerfájlokhoz.
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
  - Ha éppen nem stabil a villanyforrásod (pl.: vihar vagy áramszünet miatt), várd meg, amíg az oka megszűnik!
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

Mindig tartsd be az alábbiakat:

- Legyen telepítve a BootMii, lehetőleg boot2 alatt, de legalább IOS-ként!
- Legyen telepítve a Priiloader a BootMii telepítési típusától függetlenül!
- Legyen BootMiis biztonsági mentésed a Wii belső tárhelyéről és ellenőrizd, hogy megvan mielőtt bármilyen kockázatos műveletet végeznél! Megjegyzés: Vannak olyan esetek, amikor a BootMii nem hozzáférhető, úgyhogy tervezz előre!

# Diganózis

Ez a rész a lehetséges elrontások diagnózisában segít és súlyosság szerint van sorba rendezve. Ha úgy romlott el a Wiid, hogy az alábbi esetek egyike sem alkalmazható rá, akkor kérj segítséget (angol nyelven) a Nintendo Homebrew Discord-szerveren!

- A Wii elindul és megnyitja a Wii menüt. Minden program rendeltetésszerűen működik, a Wii-beállításokban nincsenek hibák, minden látszólag rendben van. A konzollal minden rendben.
- A Wii elindul és megnyitja a Wii menüt.
  - If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- A Wii elindul és megjeleníti az egészségügyi figyelmeztetéseket, de az A-gomb megnyomása után csak feketét mutat.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- A Wii elindul és megjeleníti az egészségügyi figyelmeztetéseket, de az A-gomb megnyomása után csak feketét mutat és/vagy lefagy. A karbantartási mód hozzáférhető: See [mail brick](bricks#mail-brick).
- A Wii elindul, de RÖGTÖN egy olyan hibát látsz, ami látszólag az Opera-internetböngészőre hasonlít: See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- 003-as hibát látsz: See [Korean Kii/Error 003 brick](bricks#error-003-brick).
- Semmi sem történik, fekete a képernyő, DE a boot2 alá telepített BootMii hozzáférhető: See [IOS brick](bricks#ios-brick).
- Semmi sem történik, fekete a képernyő, DE a Wii bekapcsolható egy Wii Remote-tal és a helyreállítási mód hozzáférhető: See [Wi-Fi brick](bricks#wi-fi-brick).
- Semmi sem történik, fekete a képernyő. A Wii nem kapcsolható be egy Wii Remote-tal, és a helyreállítási mód és a boot2 alá telepített BootMii nem hozzáférhető: See [low-level brick](bricks#low-level-brick).

# Az elromlások típusai

Alább olvashatsz a Wii elromlásának különböző tüneteiről, okairól és megoldásairól, súlyosság szerint sorba rendezve.

## Részleges elromlás

### Tünetek

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### Ok

A részleges elromlás akkor következik be, ha a konzol régiójától éltérő Wii menüt vagy témát telepítesz. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### Megoldás

Nyisd meg az AnyRegion Changert és ellenőrizd, hogy a konzolod régiója ugyanaz-e, mint a telepített Wii menüé!

Ha a hibát egy téma okozta, használd a csm-installer-programot az eredeti téma visszaállításához!

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

A Wii menü letöltésekor légy óvatos! Ellenőrizd, hogy a konzolodnak megfelelő verziót töltötted le!

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Bannerrontás

### Tünetek

A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy WAD telepítése után történt, amit követően visszatértél a Wii menübe vagy újraindítottad a konzolt. Az is lehetséges, hogy a Wii menü még hozzáférhető, de a sérült csatorna megnyitásakor a konzol lefagy. Bizonyos esetekben a konzol „System files are corrupted” („A rendszerfájlok sérültek”)-üzenetet mutat.

![](/images/bricks/sysfiles-corrupted.jpg)

### Ok

A bannerrontás akkor következik be, ha egy olyan WAD-fájlt telepítettél, aminek érvénytelen Wii menüs ikonja vagy bannerje van.

### Megoldás

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Onnan nyisd meg a Homebrew Channelt és távolítsd el a sérült csatornát!

Ha nem férsz hozzá a Priiloaderhez, egy próbát megérhet a karbantartási mód. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Témarontás

### Tünetek

A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. Ez egy téma telepítése után történt.

### Ok

A témarontás akkor következik be, ha a telepített téma rossz formátummal rendelkezik.

### Megoldás

Nyisd meg a Homebrew Channelt a Priiloaderen vagy a boot2 alá telepített BootMiin keresztül, majd a csm-installer használatával telepíts egy alapértelmezett témát, pl. az alap Wii menü témát! Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Üzenetrontás

### Tünetek

A Wii bekapcsolásakor megejelennek az egészségügyi figyelmeztetések, majd amikor megnyomod az A-gombot, a képernyő elsötétül és nem történik semmi. A karbantartási mód hozzáférhető.

### Ok

Az üzenetrontás akkor következik be, ha a Wiinek túl sok üzenetet kell feldolgoznia, vagy ha nem megfelelő üzenetek érkeztek a Wii Üzenőfalra. Ez megakadályozza a normális indítást. Mivel a Wii Üzenőfal a csatornák alatt jelenik meg, ez a Wii menü betöltésének meghiúsulását eredményezi.

### Megoldás

Tartsd nyomva a + és - gombokat az egészségügyi figyelmeztetések képernyőjén a karbantartási módba való belépéshez, ahol a Wii Üzenőfalat nem tölti be a rendszer! If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii menü- / Operarontás

### Tünetek

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### Ok

This brick is a more fatal version of a [Semibrick](#semibrick). Ha s SYSCONF (rendszerkonfigurációs) fájl megsérül, akkor a Wii törli és újra létrehozza azt, majd elindítja az első beállítási folyamatot.

Viszont ez a fájl a Wii-beállítások oldalaihoz hasonló helyen van tárolva. Ha a régiódnak nem megfelelő Wii menü vagy téma van telepítve, akkor a rendszer nem fogja megtalálni.

![](/images/bricks/sysmenu-brick.png)

### Megoldás

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii / 003-as hibás rontás

### Tünetek

Az alábbi hibaüzenet fogad a rendszer indításakor:

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### Ok

A később megjelent koreai Wiik forgalmazásánál a Nintendo megváltoztatta a rendszer titkosítási kulcsát a nemhivatalos programok futtatásának kiküszöbölése érdekében. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. Ha igen, akkor a konzol ezt a hibát jeleníti meg és gyakorlatilag használhatatlanná válik.

Ez általában rögtön azután következik be, amikor egy régióváltott koreai Wiin frissítik a rendszert.

### Megoldás

Mivel ez a rontás leggyakrabban a rendszermenü frissítése után jelenik meg, ilyenkor a Priiloader nincs telepítve. Ha mégis úgy jelent volna meg a probléma, hogy a Priiloader hozzáférhető, akkor egyszerű megjavítani az előző rendszermenü újratelepítésével vagy a KoreanKii megnyitásával és a koreai kulcs törlésével.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Megjegyzés: Ehhez a módszerhez egy lemezolvasó-chippel kell rendelkezned.

## IOS-rontás

### Tünetek

Ez a rontás ugyanolyan tünetekkel rendelkezik, mint az alapszintű elromlás a Wii menü IOS-es elromlása miatt, viszont nem egy alapszintű belső tárhelyes- vagy hardveres sérülés okozza.

### Ok

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. Egy megcsonkolt rendszermenü ISO általában akkor jelenik meg, ha a Wii menü korábbi verzióját próbálod visszatelepíteni. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### Megoldás

Szükséged van a BootMii-re, mint boot2 ennek a javításához.

Tölts vissza egy biztonsági mentést vagy kövesd az alábbi lépéseket:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. A BootMii segítségével nyisd meg a Homebrew Channelt és egy WAD-kezelővel telepítsd újra a Wii menü WAD-ot!

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Wi-Fi-rontás

### Tünetek

Ez a rontás ugyanolyan tünetekkel rendelkezik, mint az alapszintű elromlás, de még be tudod kapcsolni a Wiit egy Wii Remote-tal és egy eredeti kiadású Wiin még hozzáférhető a helyreállítási mód.

### Ok

A Wi-Fi-rontás akkor következik be, ha a Wii Wi-Fi- (vagy Bluetooth) modulja sérült vagy nincs jól csatlakoztatva. Emiatt a konzol megtorpan egy fekete képernyőn, amíg az IOS-es válaszra vár.

Továbbá, ez egy Wii minin akkor is megtörténhet, ha egy sima Wii-re tervezett IOS-t telepítesz, mivel a Wii mini nem rendelkezik Wi-Fi-modullal.

### Megoldás

Próbáld megigazítani vagy kicserélni a Wi-Fi/Bluetooth modult a konzolban!

Ha Wii minivel dolgozol, akkor be kell szerelned egy Wi-Fi-modult.

If both fail, see [low-level brick](bricks#low-level-brick).

## Alapszintű elromlás

### Tünetek

A konzol nem válaszol és nem mutat képet. A helyreállítási mód hozzáférhetetlen. A boot2 alá telepített BootMii hozzáférhetetlen (feltéve, hogy telepítve van). A konzol teljesen halottnak tűnik.

### Ok

Az alapszintű elromlás akkor következik be, ha a rendszer boot1/boot2 része sérült, vagy hardveres hiba történt.

### Megoldás

Először is, meg kell állapítanod, hogy hardveres hiba okozza-e a problémát! Sorban ellenőrizd az alábbiakat:

- Először is, bizonyosodj meg róla, hogy a konzol működik-e még: Befogad egy lemezt? A lemez felpörög? A Wii Remote-ok csatlakoznak? Ha igen, akkor ez azt jelenti, hogy a képi jel nem éri el a kijelzőt. Ebben az esetben lehetséges, hogy rossz a videókábeled, vagy egy nagyon ritka probléma kelezkezett a Wii videócsatlakozójával vagy a videókártyájával.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). Ha ezt már megpróbáltad és a probléma továbbra is fennáll, folytasd a következő ellenőrzéssel!
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). Ha ezt már megpróbáltad és a probléma továbbra is fennáll, folytasd a következő ellenőrzéssel!
- Húzd ki és dugd vissza a lemezolvasót, majd próbáld a bekapcsolni a konzolt! Ha ez nem sikerült, cseréld ki a lemezolvasót! Ha a probléma továbbra is fennáll, olvass tovább!
- Ha idáig eljutottál, akkor vagy egy alapszintű boot0/boot1-sérülésről, a belső tárhely hibájáról, vagy egy ismeretlen hardverhibáról van szó. Próbálj internetes segítséget kérni vagy fontold meg egy új Wii megvásárlását!

::: tip

[Click here to go back to the site index.](site-navigation)

:::
