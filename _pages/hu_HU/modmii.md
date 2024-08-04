---
title: "ModMii"
---

{% include toc title="Tartalomjegyzék" %}

Erre a programra NEM vállalunk garanciát, így a Wii-t ért esetleges károkért Te felelsz.
{: .notice--warning}

Ez a program NEM a vWii vagy a Wii mini használatára készült. A vWii-n vagy a Wii minin történő használatot nem teszteltük.
{: .notice--warning}

A ModMii egy mindenre kiterjedő Wii hacker eszköz Windowsra, amelyet XFlak készített, és különböző hasznos eszközöket tartalmaz a moddinghoz. A következőket tudja megvalósítani:

+ A konzol első alkalommal történő feltörése vagy újbóli feltörése
+ Az elavult softmodok ellenőrzése és frissítése
+ Felfordított Homebrew Channel csatorna problémák kijavítása
+ A homebrew futtatása a Wii NAND-jának módosítása nélkül
+ Homebrew letöltése
+ És még több!

### ModMii áttekintés

A ModMii kétféleképpen használható. Van a ModMii Classic, amely parancssori felületet használ, de a program minden funkciója rendelkezésre áll. A ModMii Skin ezzel szemben grafikus felhasználói felülettel rendelkezik, de kevesebb lehetőség áll a felhasználó rendelkezésére. Ha egyszerűen csak a Wii-od szeretnéd először módosítani, a ModMii Skin elegendő lehet. Ellenkező esetben a ModMii Classic használatát javasoljuk, ha lehetséges. <br> Az alábbi táblázat segít meghatározni, hogy mit lehet csinálni az egyes felületeken.

| Eszközök                       | ModMii Classic | ModMii Skin |
| ------------------------------ | -------------- | ----------- |
| ModMii Wizard                  | ✅              | ✅           |
| SysCheck frissítő varázsló     | ✅              | ⛔           |
| USB Loader telepítő varázsló   | ✅              | ✅           |
| HackMii megoldások varázsló    | ✅              | ✅           |
| Abstinence Wizard              | ✅              | ✅           |
| Régió módosítás varázsló       | ✅              | ✅           |
| SNEEK/EmuNAND telepítés        | ✅              | ✅           |
| Fájl megnyitás funkció         | ✅              | ⛔           |
| Letöltési sor betöltése        | ✅              | ✅           |
| Letöltés oldal 1/2/3/4         | ✅              | ⛔           |
| Speciális letöltések           | ✅              | ⛔           |
| Letöltési sor betöltése        | ✅              | ⛔           |
| Konfig fájlok buildelése       | ✅              | ⛔           |
| Fájl takarítás & app frissítés | ✅              | ⛔           |

<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Kattints ide az egyes toolok részletes leírásáért.</a></summary>

| Eszköz                                                                                   | Leírás                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W = ModMii Wizard <-- Kezd itt a Wii-od moddolásával!                                    | Ezzel az opcióval először hackelheted meg a Wii-t, vagy újra feltörhetsz egy korábban már módosított Wii-t.                                                                                                                                                                                            |
| SU = SysCheck Updater Wizard (frissítsd az idejétmúlt softmodjaid)                       | Ez az opció ellenőrzi és frissíti a wii-re telepített régi módosításokat, például a DarkCorp/CIOSSPAGHETTI-t, amelyek potenciálisan problémákat okozhatnak a legújabb homebrew custom firmware-rel.                                                                                                    |
| U = USB-Loader Setup Wizard                                                              | Ez az opció megfelelően beállítja az USB betöltőt, hogy képes legyél betölteni lemezes biztonsági mentéseket SD-kártyáról vagy USB-lemezről. Ez az opció nem szükséges, ha a ModMii varázslót használod.                                                                                               |
| H = HackMii Solutions Wizard (Fejjel lefelé HBC\No Vulnerable IOS javítás)              | Ez az opció hasznos azoknak, akiknek problémájuk van a HackMii Installer működésével vagy fejjel lefelé van a homebrew csatornájuk.                                                                                                                                                                    |
| AW = Abstinence Wizard (Nem-permanens Wii hackek)                                        | Ez az opció lehetővé teszi, hogy homebrew-t futtass a Wii-odon anélkül, hogy bármiféle tartós módosításokat végeznél a rendszer NAND-on.                                                                                                                                                               |
| RC = Region Change Wizard                                                                | Ez opció használható a Wii-od régiójának módosítására brickelés nélkül, és vita nélkül a legjobb régió módosító varázsló az interneten.                                                                                                                                                                |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor                   | Ez az opció segít megfelelően beállítani egy EmuNAND-ot (más néven neek2o) az SD-kártyára vagy USB-lemezre. Az EmuNAND előnyei közé tartozik az extra tárhely a mentett játékok vagy csatornák számára, valamint a homebrew futtatása anélkül, hogy a rendszer NAND-ján állandó módosításokat végezne. |
| F = Nyiss meg a fájlt vagy mappát a ModMii-vel további funkciókért!                      | Ez az opció egy fejlett segédeszköz, kifejezett segítség a fejlesztők számára.                                                                                                                                                                                                                         |
| 1 = Letöltési oldal 1 (Rendszermenük, IOS-ok, MIOS-ok, csatornák stb.)                   | Ez az opció megnyitja az első letöltési oldalt, amely a Wii rendszermenü legtöbb kulcsfontosságú részét tartalmazza (a NUS-ból letöltve).                                                                                                                                                              |
| 2 = Letöltési oldal 2 (Appok, USB-Loader fájlok, csaláskódok, stb.)                      | Ez az opció megnyitja a második letöltési oldalt, amely exploitokat és hasznos alkalmazásokat tartalmaz a Wii számára, beleértve néhány PC-s programot is.                                                                                                                                             |
| 3 = Letöltési oldal 3 (Rendszer menü témák)                                              | Ez az opció megnyitja a harmadik letöltési oldalt, amely néhány rendszermenü-témát és a rendszermenü-témák telepítéséhez szükséges elemeket tartalmaz (az alapalkalmazások a NUS-ból kerülnek letöltésre).                                                                                             |
| 4 = Letöltési oldal 4 (cIOS-ok és cMIOS-ok)                                              | Ez az opció megnyitja a negyedik letöltési oldalt, amely az USB Loader-ekben használható cIOS-okat és cMIOS-okat tartalmazza.                                                                                                                                                                          |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                                    | Ez a lehetőség lehetővé teszi bármely IOS és cIOS letöltését és egyéni DOL/ISO forwarderek készítését. Csak haladó felhasználóknak ajánlott.                                                                                                                                                           |
| L = Letöltési sor betöltése                                                              | Ez az opció betölti a beágyazott vagy korábban mentett letöltési sorokat.                                                                                                                                                                                                                              |
| C = Konfigurációs fájlok készítése Bootmii, Wad Manager vagy Multi-Mod Manager számára   | Ez az opció lehetővé teszi, hogy testreszabott konfigurációs fájlokat készíts a BootMii, a Wad Manager és a Multi-Mod Manager számára.                                                                                                                                                                 |
| FC = File Cleanup & App Updater: Appok frissítése és/vagy felesleges fájlok eltávolítása | Ez az opció eltávolítja a felesleges fájlokat az SD kártyádról vagy merevlemezedről, a Wii-od softmoddingjának befejezésekor.                                                                                                                                                                          |

</details><br>

A ModMii használatakor fontos megjegyezni, hogy a program a kiválasztott beállításoktól függően egyéni útmutatót készít számodra. Emiatt ez az útmutató nem fog arra összpontosítani, hogy hogyan moddolja a Wii-t, mivel a ModMii kezeli ezt a funkciót. Ehelyett ez egy gyors útmutató lesz, amely megmutatja, hogyan lehet hatékonyan használni a leggyakoribb opciókkal.

### A ModMii telepítése

#### Követelmények

* Egy Wii
* Egy SD kártya vagy USB drive
* Egy Windows PC (Egy virtuális gép is működni fog.)
* [ModMii](https://modmii.github.io/)

#### Telepítés

1. Menj a [ModMii weboldalára](https://modmii.github.io), és görgess le a Download részhez. Itt válaszd az `Installer` opciót. A böngésződ rosszindulatú programként jelezheti a telepítőt, de ez **hamis pozitív** eredmény.

    ![](/images/modmii/modmii-download.png)

2. Nyisd meg a `ModMiiInstaller.exe` fájlt, és menjen végig a telepítési folyamaton.

    ![](/images/modmii/modmii-install.png)

### A ModMii Wizard használata

A ModMii Wizard egy olyan eszköz, amely képes a Wii-t az elejétől a végéig softmodolni, letölti az összes szükséges fájlt, majd létrehoz egy útmutatót, amelyet a softmod megvalósításához használhatsz. Ez az eszköz arra is használható, hogy felülírja a már meglévő softmodokat egy korábban softmodolt Wii-n.

1. Nyisd meg a ModMii Skin vagy a ModMii Classic programot, és válaszd a ModMii Wizard opciót a lista tetején.

    ![](/images/modmii/modmii-wizard-1.png)

1. Az első kérdésre válaszolj `Yes`-szel, hacsak nincs nagyon konkrét elképzelésed arról, hogy mit szeretnél tenni vagy frissíteni a Wii-den.

    ![](/images/modmii/modmii-wizard-2.png)

1. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

    ![](/images/modmii/modmii-wizard-3.png)

1. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a Wii-d. Az alábbi exploitok az egész weboldalon szerepelnek, de a legtöbb esetben a Wilbrand használatát javasoljuk, ha van kéznél SD-kártya.

    ![](/images/modmii/modmii-wizard-4.png)

1. Ha az előző lépésben a Wilbrand opciót választottad, add meg a Wii MAC-címét. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

    ![](/images/modmii/modmii-wizard-5.png)

1. Válaszd ki a kívánt System Menu verziót a listából.

    ![](/images/modmii/modmii-wizard-6.png)

1. Válaszd ki, hogy szeretnéd-e telepíteni a felsorolt csatornák valamelyikét - ez egy opcionális lépés.

    ![](/images/modmii/modmii-wizard-7.png)

1. Válaszd ki, hogy szeretnél-e egyéni Wii-témát telepíteni, három témaeffektus közül választási lehetőséggel. Az egyes effektek azzal foglalkoznak, hogy a körvonal mennyit pörög, amikor a Wii-csatorna felett lebeg.

    ![](/images/modmii/modmii-wizard-8.png)

1. Válaszd ki, hogy szeretnél-e USB Loader-t beállítani a Wii-hez.

    ![](/images/modmii/modmii-wizard-9.png)

1. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy melyik USB Loader-t szeretnéd használni. Ha egyedit választasz, akkor vagy az USB Loader GX-et vagy a WiiFlow-t ajánljuk, mivel mindkettővel foglalkozunk ezen a weboldalon, vagy opcionálisan letöltheted az összes opciót.

    ![](/images/modmii/modmii-wizard-10.png)

1. Ha az USB Loader menüben az `Yes` lehetőséget választottad, válaszd ki, hogy hová szeretnéd menteni az USB Loader fájlokat.

    ![](/images/modmii/modmii-wizard-11.png)

1. Ellenőrizd, hogy hová szeretnéd menteni a fájlokat az SD-kártyára és/vagy az USB-meghajtóra.

    ![](/images/modmii/modmii-wizard-12.png)

1. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. A gomb megnyomása után a ModMii elkezdi feldolgozni és letölteni a fájlokat a háttérben, és automatikusan létrehoz és megnyit egy útmutatót számodra. Innentől kezdve kövesd a ModMii által generált útmutatót.

    ![](/images/modmii/modmii-wizard-13.png)

### SysCheck Updater Wizard

A SysCheck Updater Wizard egy olyan eszköz, amely a [SysCheck](syscheck) nevű homebrew alkalmazást használja a Wii-n végzett módosítások elemzésére, különösen az IOS és a cIOS esetében. Elfogadja az alkalmazás által generált `syscheck.csv` fájlt, majd szükség szerint biztosítja a szükséges frissítéseket.

1. Nyisd meg a ModMii Classic-ot és írd be az `SU`-t a SysCheck Updater Wizard megnyitásához.

    ![](/images/modmii/syscheck-wizard-1.png)

1. Kövesd az ablakban található utasításokat, ha még nincs SysCheck logod, majd húzd be a Windows Intézőből a `syscheck.csv` fájlt az ablakba. Ez beilleszti a fájl útvonalát, így már csak az Enter-t kell megnyomnod.

    ![](/images/modmii/syscheck-wizard-2.png)

1. A program elemezni fogja a SysCheck fájlt, és a látottak függvényében választási lehetőségeket kínál Önnek. Ebben a példában például a Wii modjai naprakészek voltak, de több felesleges IOS volt, amit ki lehetne dobni. Ha ezeket a módosításokat szeretnéd elvégezni a Wii-n, egyszerűen írj be az `Y`-t, és nyomj Entert. Innentől kezdve kövesd a ModMii által generált útmutatót.

    ![](/images/modmii/syscheck-wizard-3.png)

### HackMii Solutions Wizard

A HackMii Solutions Wizard egy olyan eszköz, amely a Darkcorp/CIOSSPAGHETTI-hez hasonló dolgok miatt felmerülő problémákat javítja a tiszta IOS-ek telepítésével. Az alábbiakban példák vannak az emiatt felmerülő problémákra:

+ A HackMii telepítő nem kéri a "Press (1) to continue"-t
+ A HackMii telepítő azt mondja, hogy "no vulnerable IOS found!"
+ A Homebrew csatorna fejjel lefelé jelenik meg

1. Nyisd meg a ModMii Skin vagy ModMii Classic programot, és válaszd a HackMii Solutions opciót.

    ![](/images/modmii/hackmii-wizard-1.png)

1. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

    ![](/images/modmii/hackmii-wizard-2.png)

1. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a Wii-d. Az alábbi exploitok az egész weboldalon szerepelnek, de a legtöbb esetben a Wilbrand használatát javasoljuk, ha van kéznél SD-kártya.

    ![](/images/modmii/hackmii-wizard-3.png)

1. Ha az előző lépésben a Wilbrand opciót választottad, add meg a Wii MAC-címét. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

    ![](/images/modmii/hackmii-wizard-4.png)

1. Ellenőrizd, hogy hová szeretnéd menteni a fájlokat az SD-kártyára és/vagy az USB-meghajtóra.

    ![](/images/modmii/modmii-wizard-12.png)

1. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. A gomb megnyomása után a ModMii elkezdi feldolgozni és letölteni a fájlokat a háttérben, és automatikusan létrehoz és megnyit egy útmutatót számodra. Innentől kezdve kövesd a ModMii által generált útmutatót. Miután befejezted ezt az útmutatót, ajánlott a [SysCheck Updater Wizard](#syscheck-updater-wizard)-ot használni a Wii egyéb problémás módosításainak visszavonásához.

    ![](/images/modmii/hackmii-wizard-5.png)

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
