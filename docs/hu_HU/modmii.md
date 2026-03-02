# ModMii

::: warning

Erre a programra NEM vállalunk garanciát, így a konzolodat ért esetleges károkért Te felelsz.

:::

::: warning

Néhány funkció korlátozott lehet a Wii mini-hez.

:::

A ModMii egy mindenre kiterjedő Wii és Wii Uhacker eszköz Windowsra, amelyet XFlak készített, és különböző hasznos eszközöket tartalmaz a moddinghoz. A következőket tudja megvalósítani:

- A konzol első alkalommal történő feltörése vagy újbóli feltörése
- Az elavult softmodok ellenőrzése és frissítése
- Felfordított Homebrew Channel csatorna problémák kijavítása
- A homebrew futtatása a Wii NAND-jának módosítása nélkül
- Homebrew letöltése
- És még több!

## ModMii áttekintés

A ModMii kétféleképpen használható. Van a ModMii Classic, amely parancssori felületet használ, de a program minden funkciója rendelkezésre áll. A ModMii Skin ezzel szemben grafikus felhasználói felülettel rendelkezik, de kevesebb lehetőség áll a felhasználó rendelkezésére. Ha egyszerűen csak a konzolod szeretnéd első alkalommal módosítani, a ModMii Skin elegendő lehet. Ellenkező esetben a ModMii Classic használatát javasoljuk, ha lehetséges.

Az alábbi táblázat segít meghatározni, hogy mit lehet csinálni az egyes felületeken.

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

| Eszköz                                                                                                                       | Leírás                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Kezd itt a Wii, vWii vagy WiiU-od moddolásával!                               | Ez az eszköz a Wii-od első hackelésére vagy egy Wii re-hackelésére, ha az már korábban moddolva volt.                                                                                                                                                                                                                                       |
| SU = SysCheck Updater Wizard (frissítsd a régi Wii\vWii softmodjaid)                                      | Ez az opció ellenőrzi és frissíti a régi telepített módosításokat a konzolodon. Wii-n ez javítani tud olyan dolgokat, mint a DarkCorp/CIOSSPAGHETTI ami potenciális problémákat okozhat a legutolsó friss homebrew-ok esetében.                                                                                             |
| U = USB-Loader Setup Wizard (Wii \ vWii \ Wii Mini)                                                       | Ez az opció megfelelően beállítja az USB Loader-t, hogy képes legyél betölteni lemezes biztonsági mentéseket SD kártyáról vagy USB merevlemezről. Ez az opció nem szükséges, ha a ModMii varázslót használod.                                                                                                               |
| H = HackMii Solutions Wizard (Wii) Fejjel lefelé HBC\No Vulnerable IOS javítás                            | Ez az opció hasznos azok számára akiknek problémája van a HackMii Installer működésével vagy fejjel lefelé látható a homebrew csatorna.                                                                                                                                                                                                     |
| AW = Abstinence Wizard (nem állandó Wii hack-ek)                                                          | Ez lehetővé teszi számodra, hogy homebrew-t futtas a Wii-odon anélkül, hogy bármilyen végleges módosítás történne a rendszer NAND-on.                                                                                                                                                                                                       |
| RC = Region Change Wizard (Wii)                                                                           | Ez az opció arra használható, hogy módosítsd a Wii-od régióját brickelődés nélkül, és vitathatatlanul a legjobb régió módosítás varázsló az interneten.                                                                                                                                                                                     |
| S = SNEEK telepítés, EmuNAND Builder\Modifier, Game Bulk Extractor                                                           | Ez az opció segít megfelelően beállítani egy EmuNAND-ot (más néven neek2o) az SD kártyára vagy USB drive-ra. Az EmuNAND előnyei közé tartozik az extra tárhely a mentett játékok vagy csatornák számára, valamint a homebrew futtatása anélkül, hogy a rendszer NAND-ján állandó módosításokat végeznél. |
| F = Fájl vagy mapppa megnyitás a ModMii-vel további funkciókért!                                                             | Ez az opció egy fejlett eszköz kifejezetten nagy segítség a fejlesztőknek.                                                                                                                                                                                                                                                                  |
| # = Letöltés oldalak: 1=NUS, 2=Wii Homebrew, 3=Témák, 4=cIOSs, 5=WiiU+PC appok                               | Ez különböző letöltési oldalakhoz visz, mint például homebrew appok, PC appok, IOS-ek, cIOS-ek, Wii Menu témák és továbbiak.                                                                                                                                                                                                                |
| A = Speciális letöltések és Forwarder Builder                                                                                | Ez a lehetőség lehetővé teszi bármely IOS és cIOS letöltését és egyéni DOL/ISO forwarderek készítését. Csak haladó felhasználóknak ajánlott.                                                                                                                                                                                |
| L = Letöltési sor betöltése                                                                                                  | Ez az opció betölti a beépített és a korábban mentett letöltési listákat.                                                                                                                                                                                                                                                                   |
| C = Egyéni konfigurációs fájlok készítése Bootmii, Wad Manager vagy Multi-Mod Manager számára                                | Ez az opció lehetővé teszi, hogy egyéni config fájlokat készíts a BootMii, a Wad Manager, és a Multi-Mod Manager számára.                                                                                                                                                                                                                   |
| FC = File Cleanup & App Updater: Appok frissítése és/vagy felesleges fájlok eltávolítása | Ez az opció eltávolítja a felesleges fájlokat az SD kártyádról vagy merevlemezedről a Wii-od softmoddolása után.                                                                                                                                                                                                                            |

:::

When using ModMii, it is important to note that it will generate a custom guide for you depending on the options that you select. Emiatt ez az útmutató nem fog arra összpontosítani, hogy hogyan moddold a konzolod, mivel a ModMii kezeli ezt a funkciót. Instead, it will be a quick start guide show you how to effectively use it with the most common options.

## A ModMii telepítése

### Követelmények

- Egy Wii vagy egy Wii U
- Egy USB drive vagy egy SD kártya
- Egy Windows PC (egy virtuális gép megfelelő)
- [ModMii](https://modmii.github.io/)

### Telepítés

::: warning

A böngésződ vagy a vírusírtó szoftvered elképzelhető, hogy a ModMii-t malware-nedk jelöli - ez hamis pozitív. A ModMii NEM tartalmaz malware-t.

:::

1. Menj a [ModMii weboldalára](https://modmii.github.io) és görgess le a Download szekcióig. Itt válaszd az `Installer` opciót. A böngésződ rosszindulatú programként jelezheti a telepítőt, de ez **hamis pozitív** eredmény.

   ![](/images/modmii/modmii-download.png)

2. Nyisd meg a `ModMiiInstaller.exe` fájlt, és menj végig a telepítési folyamaton.

   ![](/images/modmii/modmii-install.png)

## A ModMii Wizard használata

A ModMii Wizard egy olyan eszköz, amely képes a konzolod az elejétől a végéig softmodolni, letölti az összes szükséges fájlt, majd létrehoz egy útmutatót, amelyet a softmod megvalósításához használhatsz. Ez az eszköz arra is használható, hogy felülírja a már meglévő softmodokat egy korábban softmodolt konzolon.

1. Nyisd meg a ModMii Skin-t vagy a ModMii Classic-ot és válaszd a ModMii Wizard opciót a lista tetejéről.

   ![](/images/modmii/modmii-wizard-1.png)

2. Válaszd ki a moddolni kivánt platformot. Ha Wii U-val rendelkezel, javasoljuk, hogy moddold a Wii U-t és a vWii-t egyaránt. Ha tervezed, hogy a mind a Wii U-t mind a vWii-t fogod moddolni, ugorj a 9. lépésre. Ha azt tervezed, hogy csak a vWii-t moddolni fogod, ugorj a 5. lépésre. Ha azt tervezed, hogy csak a Wii U-t fogod moddolni, ugorj a 13. lépésre.

   ![](/images/modmii/modmii-wizard-2.png)

3. Az első kérdésre válaszolj `Yes`-szel, hacsak nincs nagyon konkrét elképzelésed arról, hogy mit szeretnél tenni vagy frissíteni a konzolodon.

   ![](/images/modmii/modmii-wizard-3.png)

4. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

   ![](/images/modmii/modmii-wizard-4.png)

5. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a konzolod. Ha egy Wii-n vagy, javasoljuk a Wilbrand-ot, ha van egy SD kártya kéznél. Csak a vWii moddolásához ajánljuk a böngészőt.

   ![](/images/modmii/modmii-wizard-5.png)

6. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

   ![](/images/modmii/modmii-wizard-6.png)

7. Válaszd ki az általad kívánt System Menu verziót a listáról.

   ![](/images/modmii/modmii-wizard-7.png)

8. Válaszd ki, szeretnéd-e vagy sem telepíteni a listázot csatornák valamelyikét - ez egy opcionális lépés.

   ![](/images/modmii/modmii-wizard-8.png)

9. Válaszd ki, hogy szeretnél-e egyéni Wii menü témát telepíteni, három témaeffektus közül választási lehetőséggel. Each effect deals with how much the outline when hovering over a Wii Channel spins.

   ![](/images/modmii/modmii-wizard-9.png)

10. Válaszd ki, hogy szeretnél-e USB Loader-t beállítani a konzolodhoz.

    ![](/images/modmii/modmii-wizard-10.png)

11. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy melyik USB Loader-t szeretnéd használni. Ha egyedit választasz, akkor vagy az USB Loader GX-et vagy a WiiFlow-t ajánljuk, mivel mindkettővel foglalkozunk ezen a weboldalon, vagy opcionálisan letöltheted az összes opciót.

    ![](/images/modmii/modmii-wizard-11.png)

12. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy hová szeretnéd menteni az USB Loader fájlokat.

    ![](/images/modmii/modmii-wizard-12.png)

13. Ellenőrizd hova fogod menteni a fájlokat az SD kártyádra és/vagy USB Drive-odra.

    ![](/images/modmii/modmii-wizard-13.png)

14. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

From here, you should follow the guide generated by ModMii. Nem kell követned az alábbi fejezeteket ebben az útmutatóban -- ezek kiegészítő információk olyanoknak akik Modmii-t használnak más célokra.

:::

## SysCheck Updater Wizard

A SysCheck Updater Wizard egy olyan eszköz, amely a SysCheck](syscheck) nevű homebrew alkalmazást használja a Wii-n végzett módosítások elemzésére, különösen az IOS és a cIOS esetében. Elfogadja az alkalmazás által generált `syscheck.csv` fájlt, majd szükség szerint biztosítja a szükséges frissítéseket.

1. Nyisd meg a ModMii Classic-ot és írd be hogy `SU`-t a SysCheck Updater Wizard megnyitásához.

   ![](/images/modmii/syscheck-wizard-1.png)

2. Kövesd az ablakban található utasításokat, ha még nincs SysCheck logod, majd húzd be a Windows Intézőből a `syscheck.csv` fájlt az ablakba. This will paste the location of the file, from which you can press Enter.

   ![](/images/modmii/syscheck-wizard-2.png)

3. Ha a priiloader-t észlelte a syscheck, meg fogja kérdezni, hogy szeretnéd-e frissíteni. Írj `Y`-t majd nyomj Entert a priiloader legutolsó verzióra frissítéséhez.

   ![](/images/modmii/syscheck-wizard-3.png)

4. The program will analyze your SysCheck file, and will provide options for you depending on what it sees. In this example instance, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. Ha ezeket a módosításokat szeretnéd elvégezni a Wii-n, egyszerűen írj be az `Y`-t, és nyomj Entert.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

From here, you should follow the guide generated by ModMii. Nem kell követned az alábbi fejezeteket ebben az útmutatóban -- ezek kiegészítő információk olyanoknak akik Modmii-t használnak más célokra.

:::

## HackMii Solutions Wizard

The HackMii Solutions Wizard is a tool that fixes problems that may arise from things like Darkcorp/CIOSSPAGHETTI by installing clean IOSes. Examples of problems that may arise because of this are listed below:

- HackMii Installer nem írja ki a "Press (1) to continue" üzenetet
- HackMii Installer az mondja "no vulnerable IOS found!"
- Homebrew Channel fejjel lefelé jelenik meg

1. Nyisd meg a ModMii Skin-t vagy a ModMii Classic-ot és válaszd a HackMii Solutions opciót.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

   ![](/images/modmii/hackmii-wizard-2.png)

3. Válaszd ki azt az exploitot, amellyel módosítani szeretnéd a Wii-d. Az alábbi exploitok a weboldalon kerülnek kifejtésre, de a legtöbb esetben a Wilbrand használatát javasoljuk, ha van kéznél SD kártya.

   ![](/images/modmii/hackmii-wizard-3.png)

4. Ha az előző lépésben a Wilbrand opciót választottad, add meg a Wii MAC-címét. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

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
