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

A method for Wiimmfi patching which automatically patches game backups in the latest versions of USB Loader GX or WiiFlow Lite.

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii
+ [USB Loader GX vagy WiiFlow Lite](wii-loaders)

#### Útmutató

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
1. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

If you get error 20100 or 20110, the game you are trying to play is not supported by this method.
{: .notice--warning}

If you get error 23400, your ISP or network is blocking the use of a custom DNS.<br> To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).
{: .notice--warning}

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii

#### Útmutató

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
1. Let the connection test finish, and do not perform a Wii System Update.
1. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Követelmények

+ Egy SD kártya vagy pendrive
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Útmutató

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
1. Insert your SD Card into your Wii, and launch Auto Wiimmfi Patcher from the Homebrew Channel.
1. Insert the game disc (if it is not already inserted), wait for the patch to complete, and the game should start.

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### Követelmények

+ Egy internetkapcsolattal rendelkező Wii

#### Útmutató

1. Helyezd be a játék lemezed.
1. Menj a `Wii Settings > Internet > Connection Settings` és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.151` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.
1. Go back twice to `Internet`, and press `User Agreements`. Then, confirm that you would like to use WC24 and the Wii Shop Channel.
1. The Wiimmfi patcher page should now display. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method.
1. Wait a while for the patcher to load (usually about 1.5 minutes) and the inserted game should boot with a Wiimmfi patch.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Követelmények

+ A Wii with an internet connection, running in 60Hz mode
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
* Your copy of your game (in WAD format)
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

[If you want to see how to use the WiiWare Patcher, click here!](wiiwarepatcher)
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
