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
<summary><a>Click here for a detailed explanation of each tool.</a></summary>

| Tool                                                                        | Description                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                           | This option can be used to hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                                                  |
| SU = SysCheck Updater Wizard (update only your outdated softmods)           | This option checks for and updates old modifications installed to their wii such as DarkCorp/CIOSSPAGHETTI that can potentially cause problems for the latest homebrew custom firmware.                                                                        |
| U = USB-Loader Setup Wizard                                                 | This option will properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive. This option is not necessary if using the ModMii Wizard.                                                                                   |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)       | This option is useful for people who are having trouble getting the HackMii Installer to work or have an upside down homebrew channel.                                                                                                                         |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                            | This option allows you to run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                                              |
| RC = Region Change Wizard                                                   | This option can be used to change the region of your Wii without bricking it, and is arguably the best region changing wizard on the internet.                                                                                                                 |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor      | This option will help you properly set up an EmuNAND (aka neek2o) onto your SD or USB. Benefits for EmuNAND include extra storage space for save games or channels, as well as running homebrew without making any permanent modifications to the system NAND. |
| F = open a File or Folder with ModMii for many more functions!              | This option is an advanced tool especially helpful for developers.                                                                                                                                                                                             |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | This option opens the first download page that includes most of the key parts of the Wii System Menu (downloaded from NUS).                                                                                                                                    |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | This option opens the second download page that includes exploits and useful apps for your Wii including some PC programs.                                                                                                                                     |
| 3 = Download Page 3 (System Menu Themes)                                    | This option opens the third download page that includes some system menu themes and items required to install system menu themes (base apps are downloaded from NUS).                                                                                          |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                      | This option opens the fourth download page that includes cIOSes and cMIOSes for use in USB loaders.                                                                                                                                                            |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                       | This option allows you to download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users only.                                                                                                                                     |
| L = Load Download Queue                                                     | This option loads bundled or previously saved download queues.                                                                                                                                                                                                 |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager        | This option allows you to build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                                       |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | This option removes unnessecary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                                                                                                    |

</details><br>

A ModMii használatakor fontos megjegyezni, hogy a program a kiválasztott beállításoktól függően egyéni útmutatót készít számodra. Emiatt ez az útmutató nem fog arra összpontosítani, hogy hogyan moddolja a Wii-t, mivel a ModMii kezeli ezt a funkciót. Ehelyett ez egy gyors útmutató lesz, amely megmutatja, hogyan lehet hatékonyan használni a leggyakoribb opciókkal.

### A ModMii telepítése

#### Követelmények

* Egy Wii
* Egy SD kártya vagy USB drive
* Egy Windows PC (Egy virtuális gép is működni fog.)
* [ModMii](https://modmii.github.io/)

#### Telepítés

1. Go to the [ModMii website](https://modmii.github.io) and scroll down to the Download section. Here, select the `Installer` option. Your browser may flag the installer as malware, but it is a **false positive**.

    ![](/images/modmii/modmii-download.png)

2. Open the `ModMiiInstaller.exe` file and go through the setup process.

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
