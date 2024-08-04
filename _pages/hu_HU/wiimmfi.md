---
title: "Nintendo Wi-Fi kapcsolat"
---

{% include toc title="Tartalomjegyzék" %}

A Nintendo Wi-Fi Connection egy online multiplayer játékszolgáltatás volt a Wii számára, amely ingyenes online játékot tett lehetővé. Bár különböző játékok hosszabb ideig voltak támogatva, mint mások, 2023 augusztusától már nem lehet minden játékot hagyományos úton játszani. A Nintendo WFC funkcionalitás visszaszerzéséhez ez az útmutató nyújt útmutatást a Wiimmfi telepítésével. A Wiimmfihez való csatlakozáshoz többféle módszer is kerül itt listázásra a legkisebb nehézségűtől a legnagyobbig terjedő sorrendben - válaszd a helyzetednek leginkább megfelelő módszert.

Ha a Wiimmfihez való csatlakozás során a 23904-es hibaüzenetet kapok, akkor elavult javítást használsz.<br> Kövesd az alábbi lépéseket az által használt módszerhez, hogy újra csatlakozhass a Wiimmfi-hez.<br> További részletekért lásd [ezt az oldalt](https://wiimmfi.de/update).<br>
{: .notice--warning}

### Automatikus lemez patchelés a Priiloader segítségével

Ha a `Wiimmfi Patch` a v4-től eltérő értéket jelenít meg, akkor nem a hacks_hash.ini fájl legújabb verziója van meg, és a patch nem fog működni. Újra kell telepítened a Priiloader-t, az ehhez szükséges útmutatót a követelmények részben találod.
{: .notice--warning}

A Wiimmfi patchelés módszere, amely a kiskereskedelmi lemezes játékokon automatikusan fut a Disc Channel csatornán keresztül.

#### Követelmények
+ Egy internetkapcsolattal rendelkező Wii, a System Menu 4.3-as verzióján
+ [Priiloader](priiloader) 0.9 vagy későbbi

#### Útmutató

1. Tartsd lenyomva a RESET gombot a Wii bekapcsolása közben. Ha Wii mini-t használsz, csatlakoztass egy USB-billentyűzetet, és tartsd lenyomva az Escape gombot bekapcsolás közben.
1. A Priiloader menüt kell látnod.

    ![](/images/priiloader/mainmenu.jpg)

1. Menj a` System Menu Hacks` menüpontra. Ha USB drive-ot használtál a Priiloader telepítéséhez, győződj meg róla, hogy nincs-e SD kártya behelyezve ezzel egyidejűleg. Ez azt okozhatja, hogy a Priiloader nem fogja tudni megtalálni a hacks_hash.ini fájlt.
    {: .notice--info}
1. Győződj meg róla, hogy a `Wiimmfi patch v4 hack` engedélyezve van.

    ![](/images/priiloader/hacks.jpg)

1. Görgess a `Save Settings` menüpontra, és mentsd el a módosításokat.
1. Térjen vissza a főmenübe, és nyomjd meg a `System Menu`-t a Wii menübe való visszatéréshez.
1. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

### Automatikus mentés patchelés USB Loader-en keresztül

Egy módszer a Wiimmfi patcheléshez, amely automatikusan foltozza a játék másolatait az USB Loader GX vagy a WiiFlow Lite legújabb verzióiban.

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii
+ [USB Loader GX vagy WiiFlow Lite](wii-loaders)

#### Útmutató

1. Nyisd meg a játék vagy a globális beállításokat az adott USB loader-hez, és keresd meg a `Private Server` opciót. Alapértelmezés szerint kikapcsoltra lesz ( `Off`) állítva.
1. Állítsd az opciót `Wiimmfi`-re, és mentsd el a beállításokat. Alapértelmezés szerint a játékoknak mostantól automatikusan patch-elődnie kell a Wiimmfihez.

### Automatikus lemezfoltozás egyéni DNS-en keresztül

Egy patchelési módszer a Wiimmfi-hez f, amely a kiskereskedelmi játéklemezeken automatikusan fut egy egyéni DNS-kiszolgáló használatával. Bár kényelmes, csak a játékok egy kis választékával működik, köztük a Mario Kart Wii és az SSBB játékokkal. A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

Ha a 20100 vagy 20110 hibaát kapod, akkor a játék, amellyel játszani próbálsz, nem támogatott ezzel a módszerrel.
{: .notice--warning}

Ha a 23400-as hibát kapod, az internetszolgáltatód vagy a hálózatod blokkolja az egyéni DNS használatát.<br> Ennek a problémának a megoldására a Wiimmfi rendelkezik egy egyéni DNS-kiszolgálóval, amelyet a számítógépeden futtathatsz - erről [itt olvashatsz](https://wiimmfi.de/patcher/dnspatch#customdns).
{: .notice--warning}

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii

#### Útmutató

1. Menj a `Wii Settings > Internet > Connection Settings` és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.181` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.
1. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.
1. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

### Kézi lemezpatchelésa Homebrew Channel csatornán keresztül

A Wiimmfi egy patchelési módszere, amely a kiskereskedelmi lemezes játékokon fut, de manuálisan kell elindítani a Homebrew Channel csatornán keresztül.

#### Követelmények

+ Egy SD kártya vagy pendrive
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Útmutató

1. Csomagold ki az `apps`-mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerére.
1. Helyezd be az SD-kártyád a Wii-be, és indítsd el az Auto Wiimmfi Patchert a Homebrew Channel-ről.
1. Helyezd be a játéklemezt (ha még nem lenne), várd meg, amíg a patchelés befejeződik, és a játék elindul.

### Kézi lemez patchelés az EULA felhasználói megállapodáson keresztül

A Wiimmfi egy patchelési módszere, amely kiskereskedelmi játéklemezeken fut, de manuálisan kell elindítani az EULA felhasználói megállapodáson keresztül (a str2hax-ból származik). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii

#### Útmutató

1. Helyezd be a játék lemezed.
1. Menj a `Wii Settings > Internet > Connection Settings` és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.151` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.
1. Menj vissza kétszer az `Internet`-hez, és nyomd meg a `User Agreements` gombot. Ezután erősítsd meg, hogy szeretnéd használni a WC24-et és a Wii Shop Channel csatornát.
1. A Wiimmfi patcher oldalnak most meg kell jelennie. Ha nem, és továbbra is az alapértelmezett licencszerződés jelenik meg, akkor lehet, hogy a routered nem kompatibilis ezzel a módszerrel.
1. Várj egy kicsit, amíg a patcher betöltődik (általában kb. 1,5 percig), és a behelyezett játéknak a Wiimmfi patch-el együtt kell elindulnia.

### Kézi lemezkép javítás az Internet Channel csatornán keresztül

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Követelmények

+ Egy Wii internet kapcsolattal 60Hz módban futva
+ Az Internet Channel

#### Útmutató

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. Exit back to the Wii Menu.
1. Open the Internet Channel again and access the favorite you just made.
1. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### Kézi WiiWare patchelés PC-vel

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Követelmények

* Egy SD kártya
* A játékod másolata (WAD formátumban)
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

[Ha szeretnéd megtudni, hogyan használd a WiiWare Patcher-t, kattints ide!](wiiwarepatcher)
{: .notice--info}

#### Útmutató

1. Extract the .zip of the latest version of WiiWare Patcher, and put your WAD in it.
1. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the WiiWare patcher.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with YAWM ModMii Edition.

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Követelmények

+ Egy Windows/macOS/Linux számítógép internet kapcsolattal
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Útmutató

1. Töltsd le a patchert, és csomagold ki a `.zip` fájlt.
1. Nyisd meg a kicsomagolt mappát, és másold bele a Wii játék képeit.
    + Ha Windows rendszeren vagy, kattints duplán a `patch-images.bat` fájlra (ez „patch-images” Batch File néven is megjelenhet). Ha Cygwin-hez kapcsolódó problémákba ütközöl, próbáld meg helyette a `patch-images-32.bat` fájlt.
    + Ha MacOS-t használsz, nyiss parancssort az aktuális mappában, a `chmod +x *.sh` paranccsal tedd futtathatóvá a shell jszkriptet, majd futtasd a `./patch-images.sh` fájlt.
    + Ha Linuxon vagy, kattints duplán a `patch-images.desktop` fájlra (ez „Patch Images” néven is megjelenhet), vagy futtasd a `./patch-images.sh` fájlt egy terminálban, miután a `chmod +x *.sh` paranccsal futtathatóvá tetted.
1. Ha a fentiek sikeresek voltak, akkor egy ablaknak kell felugrania, amely a patch folyamatot jeleníti meg. Ha a folyamat befejeződött, a javított képeket a `wiimmfi-images` nevű mappában találja.

Gratulálunk, hogy eljutottál a fő útmutató opcionális részének végére! Az oldal indexére nézve megtekinthetsz más útmutatókat is.
{: .notice--success}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
