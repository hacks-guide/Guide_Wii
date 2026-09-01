# ModMii

::: warning

Ezzel a programmal nem jár garanicia. Te vagy a felelős bármilyen potenciális sérülésért, amit a konzolodnak okozol.

:::

::: warning

Néhány funkció korlátozott lehet a Wii mini-hez a ModMii-ben.

:::

A ModMii egy mindent-egybe Wii ás Wii U hacking eszköz Windows-ra, amit XFlak készített. Számos, felhasználása esete van, mint:

- A konzol első alkalommal történő moddolása vagy újramoddolása
- Az elavult softmodok ellenőrzése és frissítése
- Felfordított Homebrew Channel csatorna problémák kijavítása
- A homebrew futtatása a Wii NAND-jának módosítása nélkül
- Homebrew letöltése

## ModMii áttekintés

Két különböző módja van ModMii használatának: a ModMii Classic, egy teljeskörű parancssori interfész és a ModMii Skin, egy felület kevesebb szolgáltatással. Ha egyszerűen csak a konzolod szeretnéd első alkalommal módosítani, a ModMii Skin elegendő lehet. Egyébként a ModMii Classic ajánlott.

| Eszköz                                         | ModMii Classic | ModMii Skin |
| ---------------------------------------------- | -------------- | ----------- |
| ModMii Wizard                                  | ✅              | ✅           |
| SysCheck Updater Wizard                        | ✅              | ⛔           |
| USB Loader Setup Wizard                        | ✅              | ✅           |
| HackMii Solutions Wizard                       | ✅              | ✅           |
| Abstinence Wizard                              | ✅              | ✅           |
| Region Change Wizard                           | ✅              | ✅           |
| SNEEK/EmuNAND telepítés                        | ✅              | ✅           |
| Fájl megnyitása funkció                        | ✅              | ⛔           |
| Letöltési lista betöltése                      | ✅              | ✅           |
| Letöltés oldal 1/2/3/4/5                       | ✅              | ⛔           |
| Advanced Downloads                             | ✅              | ⛔           |
| Letöltési lista betöltése                      | ✅              | ⛔           |
| Config fájlok készítése                        | ✅              | ⛔           |
| File Cleanup & App Updater | ✅              | ⛔           |

:::details Kattints ide az egyes eszközök részletes leírásáért.

| Eszköz                                                                                        | Leírás                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard                                                                             | Hackeld a Wii-od első alkalommal vagy rehackelj egy Wii-t, ha az már korábban moddolva volt.                                                                                                                                              |
| SU = SysCheck Updater Wizard                                                                  | Ellenőrzi és frissíti a régebben telepített módosításokat a konzolodon. Wii-n ez javítani tud olyan dolgokat, mint a DarkCorp/CIOSSPAGHETTI ami potenciális problémákat okozhat a modern homebrew-ok esetében.            |
| U = USB-Loader Setup Wizard                                                                   | Készíts egy USB loader-t egy lemez mentés betöltéséhez az SD kártyáról vagy az USB merevlemezről. Ez az opció nem szükséges, ha a ModMii varázslót használod.                                                             |
| H = HackMii Solutions Wizard                                                                  | Javítja a HackMii Installer hibáit vagy a fejjel lefelé Homebrew Channel-t.                                                                                                                                                               |
| AW = Abstinence Wizard                                                                        | Futtass homebrew-t a Wii-odon anélkül, hogy bármilyen végleges módosítás történne a rendszer NAND-on.                                                                                                                                     |
| RC = Region Change Wizard                                                                     | A Wii-od régiójának módosítása.                                                                                                                                                                                                           |
| S = SNEEK telepítés, EmuNAND Builder\Modifier, Game Bulk Extractor                            | Állíts be egy EmuNAND-ok (más néve neek2o) az SD-den vagy az USB-den. Extra tároló területként használt mentésekhez/csatornákhoz és homebrew futtatásához a rendszer NAND permanens módosítása nélkül. |
| F = Egy fájl vagy mappa megnyitása                                                            | Különféle eszközök fejlesztőknek és haladó felhasználóknak.                                                                                                                                                                               |
| # = Letöltési oldalak                                                                         | Különbözö letöltési oldalai homebrew appoknak, PC appoknak, IOS-eknek, cIOS-eknek, Wii Menu téméknak és továbbiaknak.                                                                                                                     |
| A = Speciális letöltések és Forwarder Builder                                                 | Töltsd le akármelyik IOS-t és cIOS-t és készíts egyéni DOL/ISO forwarder-eket. Haladó felhasználóknak ajánlott.                                                                                                           |
| L = Letöltési sor betöltése                                                                   | A beépített és a korábban mentett letöltési listák betöltése.                                                                                                                                                                             |
| C = Egyéni konfigurációs fájlok készítése Bootmii, Wad Manager vagy Multi-Mod Manager számára | Készíts egyéni konfigurációs fájlt a Bootmii, a Wad Manager vagy a Multi-Mod Manager számára.                                                                                                                                             |
| FC = File Cleanup                                                                             | Appok frissítése és a felesleges fájlok eltávolítása az SD kártyádról vagy merevlemezedről a Wii-od softmoddolása után.                                                                                                                   |

:::

## A ModMii telepítése

### Követelmények

- Egy Wii vagy egy Wii U
- Egy SD kártya vagy USB drive
  - A drive [FAT32/MS-DOS-ra formatálva](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) kell legyen
  - Tekintds meg a [Tárolóeszköz GYIK](faq#storage-device-faq)-ot a további információkért
- Egy Windows PC (egy virtuális gép megfelelő)
- [ModMii](https://modmii.github.io/)

### Telepítés

::: warning

A böngésződ vagy a vírusírtó szoftvered elképzelhető, hogy a ModMii-t malware-nedk jelöli - ez hamis pozitív. A ModMii nem tartalmaz semmilyen malware-t.

:::

1. Menj a [ModMii weboldalára](https://modmii.github.io) és görgess le a Download szekcióig. Itt válaszd az `Installer` opciót. A böngésződ rosszindulatú programként jelezheti a telepítőt, de ez **hamis pozitív** eredmény.

   ![](/images/modmii/modmii-download.png)

2. Nyisd meg a `ModMiiInstaller.exe` fájlt, és menj végig a telepítési folyamaton.

   ![](/images/modmii/modmii-install.png)

## A ModMii Wizard használata

A ModMii Wizard egy eszköz ami segíti softmod-olni a konzolod a kezdettől a végéig. Letölti a szükséges fájlokat és generál neked egy útmutatót amit követned kell. Használható továbbá a meglévő softmod frissítésére vagy felülírására.

1. Nyisd meg a ModMii Skin-t vagy a ModMii Classic-ot és válaszd a ModMii Wizard opciót a lista tetejéről.

   ![](/images/modmii/modmii-wizard-1.png)

2. Válaszd ki a moddolni kivánt platformot. Ha Wii U-val rendelkezel, javasoljuk, hogy moddold a Wii U-t és a vWii-t egyaránt. Ha tervezed, hogy a mind a Wii U-t mind a vWii-t fogod moddolni, ugorj a 9. lépésre. Ha azt tervezed, hogy csak a vWii-t moddolni fogod, ugorj a 5. lépésre. Ha azt tervezed, hogy csak a Wii U-t fogod moddolni, ugorj a 13. lépésre.

   ![](/images/modmii/modmii-wizard-2.png)

3. Válaszolj `Yes`-t az első kérdésre.

   ![](/images/modmii/modmii-wizard-3.png)

4. Válaszd ki az aktuális System Menu verziódés régiód, a program utasításait követve. (Ha nem tudod, hogyan szerezd meg ezt az információt, válaszd az alsó opciót és nyomd meg a `Next`-et egy oktatóvideó megtekintéséhez)

   ![](/images/modmii/modmii-wizard-4.png)

5. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a konzolod. Ha Wii-on vagy a Wilbrand ajánlott, ha van egy SD kártyád. A vWii moddoláshoz a böngésző használata ajánlott.

   ![](/images/modmii/modmii-wizard-5.png)

6. Ha az előző lépésben a Wilbrand opciót választottad, add meg a Wii MAC-címét. (Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez)

   ![](/images/modmii/modmii-wizard-6.png)

7. Válaszd ki az általad kívánt System Menu verziót a listáról. Tipikusan a 4.3-at szeretnéd választani.

   ![](/images/modmii/modmii-wizard-7.png)

8. Válaszd ki, szeretnéd-e vagy sem telepíteni a listázott csatornák valamelyikét. Ez nem kötelező.

   ![](/images/modmii/modmii-wizard-8.png)

9. Válaszd ki, hogy szeretnél-e egyéni Wii menü témát telepíteni, három témaeffektus közül választási lehetőséggel. Az egyes effektek azzal foglalkoznak, hogy a körvonal mennyit pörög, amikor a Wii-csatorna felett lebeg.

   ![](/images/modmii/modmii-wizard-9.png)

10. Válaszd ki, hogy szeretnél-e USB Loader-t beállítani.

    ![](/images/modmii/modmii-wizard-10.png)

11. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy melyik USB Loader-t szeretnéd használni. Az USB Loader GX és/vagy WiiFlow ajánlottak.

    ![](/images/modmii/modmii-wizard-11.png)

12. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy hová szeretnéd menteni az USB Loader fájlokat.

    ![](/images/modmii/modmii-wizard-12.png)

13. Ellenőrizd hova fogod menteni a fájlokat az SD kártyádra és/vagy USB Drive-odra.

    ![](/images/modmii/modmii-wizard-13.png)

14. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. A gomb megnyomása után a ModMii elkezdi feldolgozni és letölteni a fájlokat a háttérben, és automatikusan létrehoz és megnyit egy útmutatót számodra.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

Innentől kezdve kövesd a ModMii által generált útmutatót. Nem kell követned az alábbi fejezeteket ebben az útmutatóban -- ezek kiegészítő információk olyanoknak akik Modmii-t használnak más célokra.

:::

## SysCheck Updater Wizard

A SysCheck Updater Wizard egy olyan eszköz, amely a SysCheck](syscheck) nevű homebrew alkalmazást használja a Wii-n végzett módosítások elemzésére, különösen az IOS és a cIOS esetében. Elfogadja a SysCheck által generált `syscheck.csv` fájlt, majd biztosítja a szükséges frissítéseket.

1. Ha még nem tetted, kövesd a [SysCheck](syscheck) útmutatót a egy `syscheck.csv` fájl generálásához az SD kártyádra vagy az USB drive-odra.

2. Nyisd meg a ModMii Classic-ot és írd be hogy `SU`-t a SysCheck Updater Wizard megnyitásához.

   ![](/images/modmii/syscheck-wizard-1.png)

3. Húzd a `syscheck.csv` fájlt a Windows Intéző ablakból az ablakba. Ez beilleszti a fájl útvonalát, így már csak az Enter-t kell megnyomnod.

   ![](/images/modmii/syscheck-wizard-2.png)

4. Ha a Priiloader-t észlelve lett, meg fogja kérdezni, hogy szeretnéd-e frissíteni. Írj `Y`-t és nyomj Enter-t.

   ![](/images/modmii/syscheck-wizard-3.png)

5. A program elemezni fogja a SysCheck fájlt, és a látottak függvényében választási lehetőségeket kínál neked. Ebben a példában például a Wii modjai naprakészek voltak, de több felesleges IOS volt, amit ki lehetne dobni. Írj `Y`-t és nyomj Enter-t.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

Innentől kezdve kövesd a ModMii által generált útmutatót. Nem kell követned az alábbi fejezeteket ebben az útmutatóban -- ezek kiegészítő információk olyanoknak akik Modmii-t használnak más célokra.

:::

## HackMii Solutions Wizard

A HackMii Solutions Wizard a Darkcorp/CIOSSPAGHETTI-hez hasonló dolgok miatt felmerülő problémákat javítja a tiszta IOS-ek telepítésével. Meg tudja javítani a következő problémákat, mint:

- HackMii Installer nem írja ki a "Press (1) to continue" üzenetet
- HackMii Installer az mondja "no vulnerable IOS found!"
- Homebrew Channel fejjel lefelé jelenik meg

1. Nyisd meg a ModMii Skin-t vagy a ModMii Classic-ot és válaszd a HackMii Solutions Wizard opciót.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Válaszd ki az aktuális System Menu verziódés régiód, a program utasításait követve. (Ha nem tudod, hogyan szerezd meg ezt az információt, válaszd az alsó opciót és nyomd meg a `Next`-et egy oktatóvideó megtekintéséhez)

   ![](/images/modmii/hackmii-wizard-2.png)

3. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a konzolod. Ha Wii-on vagy a Wilbrand ajánlott, ha van egy SD kártyád. A vWii moddoláshoz a böngésző használata ajánlott.

   ![](/images/modmii/hackmii-wizard-3.png)

4. Ha az előző lépésben a Wilbrand opciót választottad, add meg a Wii MAC-címét. (Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez)

   ![](/images/modmii/hackmii-wizard-4.png)

5. Ellenőrizd hova fogod menteni a fájlokat az SD kártyádra és/vagy USB Drive-odra.

   ![](/images/modmii/modmii-wizard-12.png)

6. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. A gomb megnyomása után a ModMii elkezdi feldolgozni és letölteni a fájlokat a háttérben, és automatikusan létrehoz és megnyit egy útmutatót számodra. Miután befejezted a generált útmutatót, ajánlott a [SysCheck Updater Wizard](#syscheck-updater-wizard)-ot használni a Wii egyéb problémás módosításainak visszavonásához.

   ![](/images/modmii/hackmii-wizard-5.png)

::: warning

Innentől kezdve kövesd a ModMii által generált útmutatót. Nem kell követned az alábbi fejezeteket ebben az útmutatóban -- ezek kiegészítő információk olyanoknak akik Modmii-t használnak más célokra.

:::

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
