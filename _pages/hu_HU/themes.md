---
title: "Wii-témák"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató az utolsó, amire valaha is szükséged lesz, ha a Wii témázásáról van szó, nem csak a csm-installer segítségével a Wii menüjéhez ad útmutatást, hanem a WiiFlow Lite, az USB Loader GX és a Homebrew Channel témáival is. Ezenkívül a forwarderek is le vannak fedve.

### Wii Menu témázás

NE FOLYTASD EZT AZ ÚTMUTATÓT, HA NINCS MEGFELELŐ BRICKELÉS VÉDELMED, KÜLÖNÖSEN [BOOTMII](bootmii) (csak Wii) ÉS [PRIILOADER](priiloader)!
{: .notice--danger}

A csm-installer tartalmaz beépített biztonsági funkciókat, hogy megakadályozza, hogy hibás vagy sérült Wii Menu témákat telepíts, így javasolt, hogy ezt használd más téma telepítő homebrew helyett.
{: .notice--warning}

Ne használj az itt linkeltnél régebbi ThemeMii verziót, mivel a ThemeMii Mod teszi lehetővé hogy témát készíts a Wii Menu 4.3 verziójához, míg a többi verzió lehet, hogy nem.
{: .notice--warning}

Csak olyan témákat telepíts a Wii-re, amelyek kifejezetten a Wii verziójához és az aktuális régióhoz lettek formázva. Ha rossz verziójú vagy régiójú témákat telepítesz a Wii-re, az [brickelődik](bricks#theme-brick). Ez a útmutató leírja, hogyan hozhatsz létre egy .csm fájlt, amelyet aztán biztonságosan telepíthetsz.
{: .notice--danger}

Mielőtt folytatnánk, hasznos tudnod, hogy mi a különbség a .MYM és a .CSM fájlformátumok között, amikor a Wii menü témázása során használják őket. Míg a MYM-et a téma készítője készíti, amelyet aztán körbe lehet osztani, addig a CSM a MYM rendszermenübe építésének eredménye. Más szóval, a MYM elsősorban csak eszközöket tartalmaz - maga a tényleges rendszermenü, amelyet telepíteni kell, különálló.
{: .notice--info}

#### Téma források

+ [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym fájlok terjesztése)
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym fájlok terjesztése)
+ [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym fájlok terjesztése)
+ [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

#### Követelmények

* Egy SD kártya vagy USB drive
* Egy internetkapcsolattal rendelkező Windows PC
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Downloading the Base Theme

<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "csm-installer")' >(All) Via csm-installer</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-wii")' >(Wii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-vwii")' >(vWii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "thememii")' >(Wii) Via ThemeMii</button>

<div id="csm-installer" class="tabContent tabDefault" markdown="1">

1. Csomagold ki a csm-installer `.zip` fájlt az SD-kártya vagy USB eszköz gyökerébe.
1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
1. Launch csm-installer, then select `Download original Wii theme (Base theme)`
1. Miután az alaptéma befejezte a mentést, nyomd meg a HOME gombot az alkalmazásból való kilépéshez.
1. Csatlakoztasd vissza az SD-kártyát/USB-eszközt a számítógépedhez. The base app will be saved to a folder named `themes`.
</div>

<div id="nus-downloader-wii" class="tabContent" markdown="1">

1. Töltsd le az [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)t a számítógépedre!
1. Másold ki az NUS Downloader `.zip`-fájljának tartalmát egy mappába!
1. Futtasd az `NUS Downloader.exe`-fájlt!
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii menu version.
1. Check the `Create decrypted contents (*.app)` box.
1. Kattints a „`Start NUS Download!`” („NUS-letöltés indítása”)-gombra!
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the **largest .app file** (usually 6~7MB) inside the folder.
1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerén.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="nus-downloader-vwii" class="tabContent" markdown="1">

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
1. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
1. Futtasd az `NUS Downloader.exe`-fájlt!
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii U's region in the table below:

| Regió  | vWii Menu verzió |
| ------ | ---------------- |
| Japán  | v608             |
| USA    | v609             |
| Európa | v610             |

1. Check the `Create decrypted contents (*.app)` box.
1. Kattints a „`Start NUS Download!`” („NUS-letöltés indítása”)-gombra!
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000700000002` folder inside it.
1. Find the .app file that corresponds to your Wii U's region in the table below:

| Regió  | .app file    |
| ------ | ------------ |
| Japán  | 0000001c.app |
| USA    | 0000001f.app |
| Európa | 00000022.app |

1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerén.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="thememii" class="tabContent" markdown="1">

1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerén.
1. Csomagold ki a ThemeMii MOD `.zip` fájlt egy helyre a számítógépeden.
1. Launch the ThemeMii application.
1. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
1. A dialog box will pop-up asking you to enter in a value to create a key. Enter what it says, and it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
1. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.
</div>

#### Téma készítése

1. Csomagold ki a ThemeMii MOD `.zip` fájlt egy helyre a számítógépeden.
1. Launch the ThemeMii application.
1. Navigálj a `File` -> `Open` opcihoz, majd válaszd ki a létrehozni kívánt téma `.mym` fájlját.
1. Nyomjd meg a `Create csm` gombot.
1. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
1. Amikor a `.csm` fájl mentését kell megtenned, mentsd azt a `themes` mappába.
1. Miután a téma felépítése elkészül, a .mym fájl mentésétre vonakozó kérdésre kell válaszolnod. Nyomj `No` gombot.

#### Téma telepítése

1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
1. Indítsd el a csm-installert, és várd meg, amíg betöltődik.
1. Válaszd ki a telepíteni kívánt témát `A` -val. Ezen a ponton feltétlenül győződj meg arról, hogy a rendszermenü verziódnak és régiódnak megfelelő témát töltöted le.
1. Nyomj `+` gombot a téma telepítéséhez.
1. Indítsd újra a Wii menüt, és nézd meg, hogy a téma sikeresen települt-e. Ha minden jól ment, akkor az alábbihoz hasonló eredményt fogsz kapni!

    ![](/images/themes/themed-wii-menu.png)

### WiiFlow Lite témázás

Sajnos az eredeti WiiFlow és az újabb WiiFlow Lite közötti kódbázisbeli különbség miatt a témák ritkák - valójában csak egyetlen olyan témát találtunk, amely biztosan működik az újabb verzióval. A téma telepítésének utasításai alább találhatók.

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [WiiFlow Lite](wii-loaders#wiiflow-lite)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Útmutató

1. A WiiFlow Lite-ot tartalmazó tárolóeszköz legyen csatlakoztatva a számítógépedhez.
2. Töltsd le a Rhapsodii Shima archívumot, a téma mindkét verziója működik, és gond nélkül telepíthető egymás mellé.
3. Csomagold ki és másold a `wiiflow` mappát a tárolóeszköz gyökerébe, egyesítve az összes mappát, és kérésre felülírva az összes fájlt.
4. Kövesd a téma telepítési és beállítási utasításait az `installation.txt`.fájlban. Élvezd a témát!

### USB Loader GX témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), ez a link vegyes sötét témákat tartalmaz

#### Útmutató

1. Töltsd le a téma `.zip` fájlját a fentebb linkelt weboldalról, vagy bárhonnan máshonnan, ahol megfelelő témát kaphatsz.
2. Csomagold ki a `.zip` fájl tartalmát az `apps\usbloader_gx` könyvtárba azon a tárolóeszközön, ahová az USB Loader GX-et telepítetted.
3. Tedd a tárolóeszközt a Wii-be, és indítsd el.
4. Indítsd el az USB Loader GX-et, lépj a `Settings` menübe, majd a `Theme Menu`opcióhoz.
5. Nyissd meg a témát, és telepítsd azt.

### Homebrew Channel témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://wiibrew.org/wiki/Homebrew_Channel/Themes) a WiiBrew-ról

#### Útmutató

1. Töltsd le a téma `.zip` fájlját a fent említett weboldalról.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Illesszd be a `.zip` fájlt az `apps` mappába a tárolóeszközén, ahová a homebrew-ot betölti.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Csomagold ki a `.zip` tartalmát az `apps` mappába, majd töröld az archívum fájlt.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Csatlakoztasd vissza a tárolóeszközt a Wii-be, és lépj be a Homebrew Channel csatornába.
5. A téma amít telepítettél betölthető úgyanolyan módon, mint ahogy egy standard appot érsz el.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. A témának most már be kell töltődnie, jó szórakozást!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarder-ek

Az App forwarderek egy kis extra hangulatot adhatnak a Wii menüjének - de légy óvatos velük, mivel a rossz forwarderek [banner bricket](bricks#banner-brick) okozhatnak. Általában olyan helyeken találhatsz forwardereket, mint a [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) a népszerű alkalmazásokhoz, például emulátorokhoz. Mivel a forwarderek .WAD formátumban érkeznek, a telepítésük ugyanolyan egyszerű, mint a [YAWM ModMii Edition](yawmme) normál használata.


[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
