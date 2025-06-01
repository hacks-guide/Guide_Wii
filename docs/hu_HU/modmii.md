# ModMii

::: warning

Erre a programra NEM vállalunk garanciát, így a konzolodat ért esetleges károkért Te felelsz.

:::

::: warning

Néhány fukció korlátozott lehet a Wii mini-hez.

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

| Tools                                          | ModMii Classic | ModMii Skin |
| ---------------------------------------------- | -------------- | ----------- |
| ModMii Wizard                                  | ✅              | ✅           |
| SysCheck Updater Wizard                        | ✅              | ⛔           |
| USB Loader Setup Wizard                        | ✅              | ✅           |
| HackMii Solutions Wizard                       | ✅              | ✅           |
| Abstinence Wizard                              | ✅              | ✅           |
| Region Change Wizard                           | ✅              | ✅           |
| SNEEK/EmuNAND Installation                     | ✅              | ✅           |
| Open File Function                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ✅           |
| Letöltés oldal 1/2/3/4/5                       | ✅              | ⛔           |
| Advanced Downloads                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ⛔           |
| Build Config Files                             | ✅              | ⛔           |
| File Cleanup & App Updater | ✅              | ⛔           |

:::details Click here for a detailed explanation of each tool.

| Tool                                                                                                                         | Description                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Kezd itt a Wii, vWii vagy WiiU-od moddolásával!                               | This option can be used to hack your Wii for the first time or re-hack a Wii that has been previously modded.                                                                                                                                                                                     |
| SU = SysCheck Updater Wizard (frissítsd a régi Wii\vWii softmodjaid)                                      | This option checks for and updates old modifications installed to your console. On the Wii it can fix things such as DarkCorp/CIOSSPAGHETTI that can potentially cause problems for the latest up to date homebrew.                                                               |
| U = USB-Loader Setup Wizard (Wii \ vWii \ Wii Mini)                                                       | This option will properly set up your USB loader to be able to load your disk backups from an SD or USB hard drive. This option is not necessary if using the ModMii Wizard.                                                                                                      |
| H = HackMii Solutions Wizard (Wii) Upside-Down HBC/No Vulnerable IOS Fix                                  | This option is useful for people who are having trouble getting the HackMii Installer to work or have an upside down homebrew channel.                                                                                                                                                            |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                                                          | This option allows you to run homebrew on your Wii without making any permanent modifications to the system NAND.                                                                                                                                                                                 |
| RC = Region Change Wizard (Wii)                                                                           | This option can be used to change the region of your Wii without bricking it, and is arguably the best region changing wizard on the internet.                                                                                                                                                    |
| S = SNEEK Installation, EmuNAND Builder/Modifier, Game Bulk Extractor                                                        | This option will help you properly set up an EmuNAND (aka neek2o) onto your SD or USB. Benefits for EmuNAND include extra storage space for save games or channels, as well as running homebrew without making any permanent modifications to the system NAND. |
| F = open a File or Folder with ModMii for many more functions!                                                               | This option is an advanced tool especially helpful for developers.                                                                                                                                                                                                                                |
| # = Download Pages: 1=NUS, 2=Wii Homebrew, 3=Themes, 4=cIOSs, 5=WiiU+PC Apps                                 | This will take you to the various download pages available for things like homebrew apps, PC apps, IOSes, cIOSes, Wii Menu themes, and more.                                                                                                                                                      |
| A = Advanced Downloads and Forwarder Builder                                                                                 | This option allows you to download any IOS and cIOS and build custom DOL/ISO forwarders. Intended for advanced users only.                                                                                                                                                        |
| L = Load Download Queue                                                                                                      | This option loads bundled or previously saved download queues.                                                                                                                                                                                                                                    |
| C = Customize Config Files for Bootmii, Wad Manager or Multi-Mod Manager                                                     | This option allows you to build customized config files for BootMii, Wad Manager, and Multi-Mod Manager.                                                                                                                                                                                          |
| FC = File Cleanup & App Updater: Appok frissítése és/vagy felesleges fájlok eltávolítása | This option removes unnessecary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                                                                                                                                       |

:::

When using ModMii, it is important to note that it will generate a custom guide for you depending on the options that you select. Emiatt ez az útmutató nem fog arra összpontosítani, hogy hogyan moddold a konzolod, mivel a ModMii kezeli ezt a funkciót. Instead, it will be a quick start guide show you how to effectively use it with the most common options.

## Installing ModMii

### Követelmények

- Egy Wii vagy egy Wii U
- A USB drive or SD Card
- A Windows PC (a Virtual Machine will work)
- [ModMii](https://modmii.github.io/)

### Installation

::: warning

A böngésződ vagy a vírusírtó szoftvered elképzelhető, hogy a ModMii-t malware-nedk jelöli - ez hamis pozitív. A ModMii NEM tartalmaz malware-t.

:::

1. Menj a [ModMii weboldalára](https://modmii.github.io) és görgess le a Download szekcióig. Itt válaszd az `Installer` opciót. A böngésződ rosszindulatú programként jelezheti a telepítőt, de ez **hamis pozitív** eredmény.

    ![](/images/modmii/modmii-download.png)

2. Nyisd meg a `ModMiiInstaller.exe` fájlt, és menj végig a telepítési folyamaton.

    ![](/images/modmii/modmii-install.png)

## Using the ModMii Wizard

A ModMii Wizard egy olyan eszköz, amely képes a konzolod az elejétől a végéig softmodolni, letölti az összes szükséges fájlt, majd létrehoz egy útmutatót, amelyet a softmod megvalósításához használhatsz. Ez az eszköz arra is használható, hogy felülírja a már meglévő softmodokat egy korábban softmodolt konzolon.

1. Open ModMii Skin or ModMii Classic and select the ModMii Wizard option at the top of the list.

    ![](/images/modmii/modmii-wizard-1.png)

2. Choose the platform you are going to mod. If you have a Wii U, it is recommended to mod both the Wii U and vWii. If you are planning on modding both the Wii U and vWii, skip to step 9. If you are planning on modding just the vWii, skip to step 5. If you are planning on modding Just the Wii U, skip to step 13.

    ![](/images/modmii/modmii-wizard-2.png)

3. Answer `Yes` to the first question, unless you have a very specific idea of what you would like to do or update to your console.

    ![](/images/modmii/modmii-wizard-3.png)

4. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

    ![](/images/modmii/modmii-wizard-4.png)

5. Select the exploit you would like to use to mod your console. If you are on a Wii, we would reccommend using Wilbrand if you have an SD card on hand. For modding just the vWii, we would reccommend using the browser.

    ![](/images/modmii/modmii-wizard-5.png)

6. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

    ![](/images/modmii/modmii-wizard-6.png)

7. Select your desired System Menu version from the list.

    ![](/images/modmii/modmii-wizard-7.png)

8. Select whether or not you would like to install any of the listed channels - this is an optional step.

    ![](/images/modmii/modmii-wizard-8.png)

9. Válaszd ki, hogy szeretnél-e egyéni Wii menü témát telepíteni, három témaeffektus közül választási lehetőséggel. Each effect deals with how much the outline when hovering over a Wii Channel spins.

    ![](/images/modmii/modmii-wizard-9.png)

10. Válaszd ki, hogy szeretnél-e USB Loader-t beállítani a konzolodhoz.

    ![](/images/modmii/modmii-wizard-10.png)

11. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy melyik USB Loader-t szeretnéd használni. If you choose an individual one, we reccomend either USB Loader GX or WiiFlow as both are covered on this website, or you may optionally download each option.

    ![](/images/modmii/modmii-wizard-11.png)

12. Ha az USB Loader menüben a `Yes` lehetőséget választottad, válaszd ki, hogy hová szeretnéd menteni az USB Loader fájlokat.

    ![](/images/modmii/modmii-wizard-12.png)

13. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-13.png)

14. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/modmii-wizard-14.png)

## SysCheck Updater Wizard

A SysCheck Updater Wizard egy olyan eszköz, amely a SysCheck](syscheck) nevű homebrew alkalmazást használja a Wii-n végzett módosítások elemzésére, különösen az IOS és a cIOS esetében. Elfogadja az alkalmazás által generált `syscheck.csv` fájlt, majd szükség szerint biztosítja a szükséges frissítéseket.

1. Nyisd meg a ModMii Classic-ot és írd be hogy `SU`-t a SysCheck Updater Wizard megnyitásához.

    ![](/images/modmii/syscheck-wizard-1.png)

2. Kövesd az ablakban található utasításokat, ha még nincs SysCheck logod, majd húzd be a Windows Intézőből a `syscheck.csv` fájlt az ablakba. This will paste the location of the file, from which you can press Enter.

    ![](/images/modmii/syscheck-wizard-2.png)

3. Ha a priiloader-t észlelte a syscheck, meg fogja kérdezni, hogy szeretnéd-e frissíteni. Írj `Y`-t majd nyomj Entert a priiloader legutolsó verzióra frissítéséhez.

    ![](/images/modmii/syscheck-wizard-3.png)

4. The program will analyze your SysCheck file, and will provide options for you depending on what it sees. In this example instance, the mods on the Wii were up-to-date, but there were several unnecessary IOSes that could be stubbed. Ha ezeket a módosításokat szeretnéd elvégezni a Wii-n, egyszerűen írj be az `Y`-t, és nyomj Entert. From here, you should follow the guide generated by ModMii.

    ![](/images/modmii/syscheck-wizard-4.png)

## HackMii Solutions Wizard

The HackMii Solutions Wizard is a tool that fixes problems that may arise from things like Darkcorp/CIOSSPAGHETTI by installing clean IOSes. Examples of problems that may arise because of this are listed below:

- HackMii Installer not prompting "Press (1) to continue"
- HackMii Installer saying "no vulnerable IOS found!"
- Homebrew Channel displaying upside-down

1. Open ModMii Skin or ModMii Classic and select the HackMii Solutions option.

    ![](/images/modmii/hackmii-wizard-1.png)

2. Válaszd ki az aktuális System Menu verziód, majd a System Menu Region-od, a program utasításait követve. Ha még mindig zavarban vagy, nézd meg az egyes képernyők alsó opcióját, ahol egy oktatóvideót találsz.

    ![](/images/modmii/hackmii-wizard-2.png)

3. Select the exploit you would like to use to mod your Wii. The exploits below are outlined throughout this website, but in most cases we would reccommend using Wilbrand if you have an SD card on hand.

    ![](/images/modmii/hackmii-wizard-3.png)

4. If you selected the Wilbrand option in the previous step, enter your Wii's MAC address. Ha nem tudod, hogyan nézd meg a Wii MAC-címét, írd be a szövegmezőbe a `Help` szót egy oktatóvideó megtekintéséhez.

    ![](/images/modmii/hackmii-wizard-4.png)

5. Verify where you would like to save files for your SD Card and/or USB Drive.

    ![](/images/modmii/modmii-wizard-12.png)

6. Erősítsd meg a beállítások helyességét, majd nyomd meg a `Finish` gombot. Once you press the button, ModMii will begin to process and download files in the background, and will automatically generate and open a guide for you. From here, you should follow the guide generated by ModMii. Miután befejezted ezt az útmutatót, ajánlott a S[SysCheck Updater Wizard](#syscheck-updater-wizard)-ot használni a Wii egyéb problémás módosításainak visszavonásához.

    ![](/images/modmii/hackmii-wizard-5.png)

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
