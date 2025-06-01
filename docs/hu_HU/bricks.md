# Brickelődés

A "Brick" usually means your Wii has reached a state where its next purpose in existence is likely that of a doorstop, or a display figure.

Egy Wii számos okból kifolyólag brickelődhet, de ez általában sérült programok vagy rosszul elvégzett homebrew módosítások okozzák.

# Brick Prevention

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do:

- **NE kövess régi útmutatókat, NE használj régi homebrew programokat és NE kövess videós utmutatókat az interneten, hacsak a program fejlesztője KÜLÖN NEM KÉRI!**
- \*\* SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT NE HASZNÁLD a `Pimp My Wii` HOMEBREW ALKALMAZÁST. Ez VESZÉLYES, mert a program működése képes véletlenül BRICKELNI A KONZOLOD!\*\*
- NE telepíts olyan IOS csomagokat, mint a DARKCORP, mert felülírják a legtöbb IOS-edet cIOS-ekkel. Ez a módszer VESZÉLYES és elavult.\*\*
- **NE tölts vissza más konzolokról származó NAND biztonsági mentéseket!**
- NE telepíts olyan IOS-eket, amelyeket nem a konzolodra terveztek!\*\* (Pl.: Wii-s IOS-eket Wii mini-re.)
- **A Wii-re készült régióváltási módszereket NE próbáld ki vWii-n vagy Wii mini-n**
- **NE használj Nintendo Wi-Fi Connection-szolgáltatást, kivéve ha rendelkezik távoli kódfuttatási javításokkal (mint például a [Wiimmfi](nintendowfc)). Ha mégis így tennél, az lehetővé teszi egy rosszindulatú támadó számára a konzolod BRICKELŐDÉSÉT!**
- **Csak a saját régiódhoz tartozó frissítéseket telepíts!**.
    - A más régióból származó frissítések telepítése a legjobb esetben semmit sem eredményezhet, de a legrosszabb esetben egy [Korean Kii/Error 003](bricks#koreankii-error-003-brick) bricket eredményezhet. Ha használt Wii-t vásároltál, hogy ez ne történhessen meg, futtasd le a [SysCheck](syscheck) -et, hogy ellenőrizd a konzol eredeti régióját. If it is Korean, be EXTREMELY careful with applying system updates to your console, and consider seeking support for further assistance.
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
    - Firmware Downgraders
    - Any other app that modifies critical NAND files
- **NE NYÚLJ HOZZÁ A WII ÁRAMFORRÁSÁHOZ VAGY A BEKAPCSOLÓGOMBJÁHOZ, MIKÖZBEN LÉTFONTOSSÁGÚ RENDSZERFÁJLOKAT TELEPÍTESZ VAGY MÓDOSÍTASZ**.
    - If your electricity is unstable (e.g. storm, power outage), postpone what you are doing until you have a stable power source.
    - Ez főleg a kockázatos folyamatokra vonatkozik, mint pl. a BootMii biztonsági mentés visszaállítása, ami egy [teljes bricket](#low-level-brick) eredményezhet, ha valami balul sül el.

In any case, you should absolutely:

- Have BootMii installed as boot2 if available, but otherwise as IOS.
- Have Priiloader installed regardless of BootMii installation method.
- Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

# Diagnosis

This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. If you seem to have a brick that isn't covered in this section or in the guide, please join the Nintendo Homebrew discord server for support.

- Wii starts, and progresses to the Wii Menu. No app is malfunctioning, Wii settings is error free, everything is seemingly fine. No brick.
- Wii starts, and progresses to the Wii Menu.
    - Ha egy adott csatorna elérése után a `The system files are corrupted.` üzenet jelenik meg, lásd [banner brick](bricks#banner-brick).
    - Ha a Wii-beállítások megnyitásával egy olyan hibát látsz, ami látszólag az Opera-internetböngészőre hasonlít, lásd a[semibrick](bricks#semibrick)-et.
- Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
    - Ha ez egy téma telepítése után történt akkor tekintsd meg a [téma brick-et](bricks#theme-brick).
    - Ha ez egy WAD-fájl telepítése után történt akkor tekintsd meg a [banner brick-et](bricks#banner-brick).
    - Ha ez látszólag minden ok nélkül keződött el és képes vagy hozzáférni a Maintenance Mode-hoz a + és - gombok nyomvatartásával az egészségügyi figyelmeztetések képernyőn, akkor tekintsd meg a [mail brick-et](bricks#mail-brick).
- Wii starts, and you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. Tekintsd meg a [mail brick-et](bricks#mail-brick).
- Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. Tekintsd meg a [Wii Menu/Opera brick-et](bricks#wii-menuopera-brick).
- Error 003. Tekintsd meg a [Korean Kii/Error 003 brick-et](bricks#koreankii-error-003-brick).
- Nothing happens, black screen, BUT BootMii as boot2 is accessible. Tekintsd meg az [IOS brick-et](bricks#ios-brick).
- Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. Tekintsd meg a [Wi-Fi brick-et](bricks#wi-fi-brick).
- Nothing happens, black screen. Wii cannot be turned on with a Wiimote, Recovery Mode cannot be started, and BootMii as boot2 is not accessible. Tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

# Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

## Semibrick

### Symptoms

Amikor a Wii-beállításokhoz navigálsz, az Opera webböngésző hibaüzenetet kapsz a következő szöveggel: `You tried to access the address (URL), which is currently unavailable.` Bizonyos esetekben a Wii Settings menü egyes részei továbbra is elérhetőek, más részek viszont nem (például a Country menü).

### Cause

A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. Mivel a Wii Settings menüje HTML oldalak segítségével jelenik meg az Operával, a témák gyakran kicserélik ezeket az oldalakat, és más könyvtárakba helyezik őket; ez lényegében egy `404 Not Found` hibához vezet, de egy konzol brick formájában.

![](/images/bricks/semibrick.png)

### Solutions

Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

Ha a hibát egy telepített Wii Menu WAD okozta, töltsd le és telepítsd az eredeti Wii menüt a [NUS Downloader](https://wiibrew.org/wiki/NUSD) segítségével.

::: danger

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.

:::

Ha éppen egy régió csere folyamatában vagy, használd az [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)-t, hogy automatikusan javítsa a régió beállításaidat, hogy passzoljon a Wii Menu-dhöz.

## Banner brick

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

### Cause

Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

### Solutions

Ha valahogy még képes vagy hozzáférni a Wii menühöz, nyisd meg a Homebrew Channelt és a [YAWM ModMii Edition](yawmme) segítségével vagy a jelenlegi WAD-kezelőddel távolítsd el a sérült csatornát.

Ha nem vagy képes hozzáférni a Wii menühöz, de telepítve van a konzolodra a [Priiloader](priiloader), akkor a Wii bekapcsolása közben tartsd nyomva a RESET-gombot a megnyitásához. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. A Health and Safety képernyő megjelenése közben tartsd nyomva a `+` és `-` gombokat (az `A` megnyomása nélkül!).

## Theme brick

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

### Cause

A theme brick occurs when a wrongly formatted theme is installed.

### Solutions

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. A javításhoz egy másik módszer a [YAWM ModMii Edition](yawmme) elindítása és a régiódnak és verziódnak MEGFELELŐ alap Wii menü WAD újratelepítése.

## Mail brick

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

### Cause

A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

### Solution

By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. Ha a Homebrew Channel nem telepített, kövesd a [Bluebomb](bluebomb) útmutatót.

Mostantól a Homebrew Channel betölthető és a brickelés javítható a Wii Message board [cdbackup](https://oscwii.org/library/app/cdbackup) segítségével történő törlésével.

## Wii Menu/Opera brick

### Symptoms

A Wii indításakor egy Opera-internetböngészőben megjelenített hibaüzenetet látsz, ami valahogy így néz ki: `You tried to access the address (URL), which is currently unavailable`. Ez a Wii minden indításakor megjelenik és nem lehet átlépni.

### Cause

Ez a brick sokkal végzetesebb, mint a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

### Solutions

Ha hozzáférsz a [Priiloader](priiloader)-hez, indítsd el rajta keresztül a Homebrew Channelt és telepítsd újra az eredeti témát vagy az eredeti Wii menüt.

Ha nem férsz hozzá a Priiloaderhez vagy a Wiid nincs modolva, akkor próbáld meg a [BlueBomb](bluebomb) módszert.

Alternatívaként a [Recovery Mode](recovery-mode) is használható a helyreállítás megpróbálásához.

## KoreanKii/Error 003 Brick

### Symptoms

Screen shows up as listed below on normal boot.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### Cause

When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. Ugyan ez nem sikerült, de később, de a Nintendo bennhagyott egy ellenőrzést a System Menu 4.2/4.3-as verziójában, ami ellenőrzi, hogy a **nem**-koreai gépeken megjelenik-e a koreai titkosítási kulcs. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

### Solutions

Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

A koreai Wii-k is a Wii menü 3.3-as verziójával jelentek meg, a körül, amikor a Nintendo kijavította a boot1 Trucha-hibát, ezért a BootMii, mint boot2 nem telepíthető és használható egyetlen koreai Wii-n sem.

Ugyan ez az állapot különösen veszélyes helyzetben hagyja a konzolt, \*\* de még javítható\*\*. Ehhez a [Recovery Mode](recovery-mode)-ba kell lépned, ahol egy program futtatásával hozzáférhetsz a Homebrew Channelhez és visszafordíthatod a feltételeket, amik a bricket eredményezték. Note that you must have a drivechip in order for this method to work.

## IOS brick

### Symptoms

This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

### Cause

Ez a brick akkor következik be, amikor a Wii menü IOS-e [csonk](http://wiibrew.org/wiki/Stub_IOS), vagy ha rossz típusú IOS-t volt telepítve a konzolra. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. Ha ez a probléma egy sima IOS80 Wii mini-re telepítése után lépett fel, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et.

### Solutions

You must have BootMii as boot2 to fix this.

You can either restore a NAND backup, or do this:

1. Használd a [NUS Downloader](https://wiibrew.org/wiki/NUSD)-t, hogy egy WAD-ot készts az eredeti Wii Menu-dből.
2. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

vWii-hez tekintsd meg az [Egy vWii IOS/Channel helyreállítását](https://wiiu.hacks.guide/recover-vwii-ioses-channels)

## Wi-Fi brick

### Symptoms

This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

### Cause

This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

### Solutions

To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

Ha mindkettő sikertelen, tekintsd meg az [alacsony-szintű brick-et](bricks#low-level-brick).

## Low-level brick

### Symptoms

Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

### Cause

This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

### Solutions

First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

- Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- Ha Wii mini-n vagy és egy normál IOS80-at telepítettél, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et. If steps to resolve the Wi-Fi brick failed, proceed.
- Próbálkozás a [Recovery Mode](recovery-mode)-ba bootoláshoz (normál Wii-ok csak). Ha a Wii Recovery Mode-ba bootol, tekintsd meg a [Wi-Fi brick](bricks#wi-fi-brick)-et vagy az [IOS brick](bricks#ios-brick)-et. If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
- At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
