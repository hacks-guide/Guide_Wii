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
    + Ha ez látszólag minden ok nélkül keződött el és képes vagy hozzáférni a Wii karbantartási módjához a + és - gombok nyomvatartásával az egészgégügyi figyelmeztetések-képernyőn: ld. [Üzenetrontás](bricks#mail-brick).
+ A Wii elindul és megjeleníti az egészségügyi figyelmeztetéseket, de az A-gomb megnyomása után csak feketét mutat és/vagy lefagy. A karbantartási mód hozzáférhető: ld. [Üzenetrontás](bricks#mail-brick).
+ A Wii elindul, de RÖGTÖN egy olyan hibát látsz, ami látszólag az Opera-internetböngészőre hasonlít: ld. [Wii menü- / Operarontás](bricks#wii-menuopera-brick).
+ 003-as hibát látsz: ld. [KoreanKii / 003-as hibás rontás](bricks#error-003-brick).
+ Semmi sem történik, fekete a képernyő, DE a boot2 alá telepített BootMii hozzáférhető: ld. [IOS-rontás](bricks#ios-brick).
+ Semmi sem történik, fekete a képernyő, DE a Wii bekapcsolható egy Wii Remote-tal és a karbantartási mód hozzáférhető: ld. [Wi-Fi-rontás](bricks#wi-fi-brick).
+ Semmi sem történik, fekete a képernyő. A Wii nem kapcsolható be egy Wii Remote-tal, és a karbantartási mód és a boot2 alá telepített BootMii nem hozzáférhető: ld. [Alapszintű elromlás](bricks#low-level-brick).

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

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.
{: .notice--danger}

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Bannerrontás

#### Tünetek
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Ok
Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Megoldás
If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Témarontás

#### Tünetek

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Ok
A theme brick occurs when a wrongly formatted theme is installed.

#### Megoldás
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Üzenetrontás

#### Tünetek
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

#### Ok
A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

#### Solution
By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii menü- / Operarontás

#### Tünetek
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Ok
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Megoldás

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii / 003-as hibás rontás

#### Tünetek
Screen shows up as listed below on normal boot.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Ok
When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Megoldás
Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Note that you must have a drivechip in order for this method to work.

## IOS-rontás

#### Tünetek
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Ok
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

#### Megoldás
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. If you cannot reach recovery mode, you must have BootMii as boot2 to fix this. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Wi-Fi-rontás

#### Tünetek
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Ok
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Megoldás
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Alapszintű elromlás

#### Tünetek
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Ok
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Megoldás
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
