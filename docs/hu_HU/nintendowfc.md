# Nintendo Wi-Fi Connection

A Nintendo Wi-Fi Connection egy online multiplayer játékszolgáltatás volt a Wii számára, amely ingyenes online játékot tett lehetővé. Ez a szolgáltatás 2013-ban leállításra került, de léteznek visszafejtett szerver, amikhez csatlakozhatdz, hogy helyreállítsd ezt a funkcionalitást. Ez az útmutató két megbizható szolgáltatáshoz szolgál részletekkel; a WiiLink WFC és a Wiimmfi - a legtöbb felhasználó számára a Wiimmfi-t ajánljuk a nagyobb felhasználószám miatt (különösen a Mario Kart Wii esetén).

## WiiLink WFC

WiiLink WFCegy nyílt forrású szolgáltatás amit a WiiLink team hozott létre, ami helyreállítja az online játékot, kisebb játék támogatássa és kevesebb játékossal, mint a Wiimmfi (listázva lentebb). Néhány esetben a WiiLink WFC szerver kód már megtalálható a játék moddban - mint például a Mario Kart Retro Rewind. Útmutató a WiiLink WFC használatáról alább található, vagy megtalálható [a WiiLink WFC telepítés oldalon](https://wfc.wiilink.ca/setup).

### Automatikus lemez patchelés a Homebrew Channel csatornán keresztül

::: details

A WiiLink WFC egy patchelési módszere, amely a kiskereskedelmi lemezes játékokon fut, de manuálisan kell elindítani a Homebrew Channel csatornán keresztül.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii
- [WiiLink WFC Patcher](https://oscwii.org/library/app/WiiLink-WFC-Patcher)

#### Lépések

1. Egyszerűen csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.
2. Helyezd be az SD-kártyád a Wii-be, és indítsd el az WiiLink WFC Patcher-t a Homebrew Channel-ről.
3. Helyezd be a játéklemezt (ha még nem lenne), várd meg, amíg a patchelés befejeződik, és a játék elindul.

:::

## Wiimmfi

::: warning

Ha a `23904` hibát kapod a Wiimmfi-hez csatlakozás közben, akkor egy régi patchet használsz, és frissíteneked kell ahhoz, hogy folytathasd az online játékot. Kövesd az általad használt metódushoz kapcsolódó lépéseket, hogy csatlakozz a Wiimmfi-hez újra.

Tekintsd meg [a Wiimmfi patcher frissítés oldalt](https://wiimmfi.de/update) a magyarázatért arra, hogy miért szükséges a frissítés.

:::

A Wiimmfi egy zárt forrású szolgáltatá, amit Wiimm és Leseratte hozott létre és tart karban, ami helyre állítja az online játékot a játékok szignifikáns mennyisége esetében, amit támogatják ezt a funkcionalitást a Wii-on. A játékok listája és az aktuálisan online játékosok megtalálhatók a [Wiimmfi státusz oldalán](https://wiimmfi.de/stat?m=8). Bizonyos esetekben a Wiimmfi támogatás már beépített a játék modba - mint például a CTGP-R. Útmutató a Wiimmfi használatáról alább található, vagy megtalálható [a Wiimmfi patcher oldalon](https://wiimmfi.de/patcher/).

### Automatikus lemez patchelés a Priiloader segítségével

::: details

A Wiimmfi patchelés módszere, amely a kiskereskedelmi lemezes játékokon automatikusan fut a Disc Channel csatornán keresztül.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii, a System Menu 4.3-as verzióján
- [Priiloader](priiloader) 0.9 vagy későbbi

#### Lépések

1. Tartsd lenyomva a RESET gombot a Wii bekapcsolása közben. Ha Wii mini-t használsz, csatlakoztass egy USB-billentyűzetet, és tartsd lenyomva az Escape gombot bekapcsolás közben.

2. A Priiloader menüt kell látnod.

   ![](/images/priiloader/mainmenu.png)

3. Menj a `System Menu Hacks` menüpontra.

   ::: info

   Ha USB drive-ot használtál a Priiloader telepítéséhez, győződj meg róla, hogy nincs-e SD kártya behelyezve ezzel egyidejűleg.
   Ez azt okozhatja, hogy a Priiloader nem fogja tudni megtalálni a hacks_hash.ini fájlt.

   :::

4. Győződj meg róla, hogy a `Wiimmfi patch v4` hack engedélyezve van.

   ![](/images/priiloader/hacks.png)

5. Görgess a `Save Settings` menüpontra, és mentsd el a módosításokat.

6. Térjvissza a főmenübe, és nyomd meg a `System Menu`-t a Wii menübe való visszatéréshez.

7. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

::: warning

Ha a `Wiimmfi Patch` a v4-től eltérő értéket jelenít meg, akkor nem a hacks_hash.ini fájl legújabb verziója van meg, és a patch nem fog működni. Újra kell telepítened a Priiloader-t, az ehhez szükséges útmutatót a követelmények részben találod.

:::

### Automatikus mentés patchelés USB Loader-en keresztül

::: details

Egy módszer a Wiimmfi patcheléshez, amely automatikusan foltozza a játék másolatait az USB Loader GX vagy a WiiFlow Lite legújabb verzióiban.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii
- [USB Loader GX vagy WiiFlow Lite](wii-loaders)

#### Lépések

1. Nyisd meg a játék vagy a globális beállításokat az adott USB loader-hez, és keresd meg a `Private Server` opciót. Alapértelmezetten ez kikapcsolt (`Off`).
2. Állítsd az opciót `Wiimmfi`-re, és mentsd el a beállításokat. Alapértelmezés szerint a játékoknak mostantól automatikusan patch-elődnie kell a Wiimmfi-hez.

:::

### Automatikus lemezfoltozás egyéni DNS-en keresztül

::: details

Egy patchelési módszer a Wiimmfi-hez f, amely a kiskereskedelmi játéklemezeken automatikusan fut egy egyéni DNS-kiszolgáló használatával. Bár kényelmes, csak a játékok egy kis választékával működik, köztük a Mario Kart Wii és az SSBB játékokkal. A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii

#### Lépések

1. Go to `Wii Settings` > `Internet` > `Connection Settings` and select whatever connection you are using. Then, `Change Settings` > `Auto-Obtain DNS NO` > `Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.181` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.
2. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.
3. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

::: warning

Ha a `20100` vagy `20110` hibát kapod, akkor a játék, amellyel játszani próbálsz, nem támogatott ezzel a módszerrel.

Ha a `23400` hibát kapod, akkor az internet szolgáltatód vagy a hálózatod blokkolja az egyéni DNS használatát. Ahhoz, hogy megoldja ezt a problémát a Wiimmfi tartalmaz egy egyedi DNS szervert, ami futtatható a PC-den - erről [a Wiimmfi weboldalán](https://wiimmfi.de/patcher/dnspatch#customdns) olvashatsz.

:::

### Manuális lemez patchelés a Homebrew Channel csatornán keresztül

::: details

A Wiimmfi egy patchelési módszere, amely a kiskereskedelmi lemezes játékokon fut, de manuálisan kell elindítani a Homebrew Channel csatornán keresztül.

#### Követelmények

- Egy SD kártya vagy pendrive
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Lépések

1. Egyszerűen csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.
2. Helyezd be az SD-kártyád a Wii-be, és indítsd el az Auto Wiimmfi Patchert a Homebrew Channel-ről.
3. Helyezd be a játéklemezt (ha még nem lenne), várd meg, amíg a patchelés befejeződik, és a játék elindul.

:::

### Manuális lemez patchelés az EULA felhasználói megállapodáson keresztül

::: details

A Wiimmfi egy patchelési módszere, amely kiskereskedelmi játéklemezeken fut, de manuálisan kell elindítani az EULA felhasználói megállapodáson keresztül (az [str2hax](str2hax)-ból származik). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii

#### Lépések

1. Helyezd be a játék lemezed.

2. Menj a `Wii Settings > Internet > Connection Settings` opcióhoz és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.151` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.

4. Menj vissza kétszer az `Internet`-hez, és nyomd meg a `User Agreements` gombot. Ezután erősítsd meg, hogy szeretnéd használni a WC24-et és a Wii Shop Channel csatornát.

5. A Wiimmfi patcher oldalnak most meg kell jelennie. Ha nem, és továbbra is az alapértelmezett licencszerződés jelenik meg, akkor lehet, hogy a routered nem kompatibilis ezzel a módszerrel.

6. Várj egy kicsit, amíg a patcher betöltődik (általában kb. 1,5 percig), és a behelyezett játéknak a Wiimmfi patch-el együtt kell elindulnia.

:::

### Manuális lemezkép javítás az Internet Channel csatornán keresztül

::: details

A Wiimmfi patchelés egy módszere, amely a kiskereskedelmi játéklemezeken fut, de manuálisan kell elindítani az internetes csatornán keresztül (a [Flashhax](flashhax)-ból származik). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken. [Ez](nintendowfc#manual-disc-patching-via-eula-user-agreement) a metódus általábban jobban megbízható és ajánlott is helyette.

#### Követelmények

- Egy Wii internet kapcsolattal 60Hz módban futva
- Az Internet Channel

#### Lépések

1. Nyisd meg a következő weboldalt az Internet Channel-ben: `http://chadsoft.co.uk/wiimmfi`
2. Add hozzá az oldalt a böngésző kedvenceidhez a csillag ikonra, majd az `Add Favorite` gombra kattintva.
3. Lépj vissza a Wii menübe.
4. Nyisd meg újra az Internet Channel-t, és lépj be az imént létrehozott kedvenchez.
5. A Wiimmfi patchernek el kell indulnia. Légy türelmes, mivel a Flashhax nagyon megbízhatatlan tud lenni - több próbálkozásra is szükség lehet, hogy sikerüljön.

::: warning

Ha UPnP-vel kapcsolatos problémákba ütközöl (például a patcher 10 másodpercnél tovább megáll a ""Init network..." vagy az "add UPnP port forward" lépéseknél), akkor a Wii Remote - gombját vagy a GameCube kontroller Y gombját nyomd meg, amint a patcher betöltődik, hogy ezt megkerüld.

:::

### Manuális WiiWare patchelés PC-vel

::: details

A Wiimmfi patchelés egy módszere, amely a WiiWare játékokon fut, de manuálisan kell futtatni a PC-n egy szkript segítségével.

#### Követelmények

- Egy SD kártya
- A játékod másolata (WAD formátumban)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Lépések

1. Csomagold ki a WiiWare Patcher legújabb verziójának .zip csomagját, és tedd bele a WAD-edet.
2. Futtasd le az operációs rendszeredhez tartozó patch scriptet: Windows esetén általában `.bat`, Mac/Linux esetén `.sh` végződésű. Ha a RiiConnect24 Patchert használod, válaszd ki a készülékedet (Wii, vWii vagy Dolphin), és válaszd a WiiWare patchert.
3. Ha sikeresen befejeződött, telepítsd a `wiiware-wads`-szel készük WAD fájl a [YAWM ModMii Edition](yawmme)-nel.

:::

### Manuális lemezkép patchelés PC-n keresztül

::: details

A Wiimmfi patchelés egy módszere, amely játék-lemezképeken fut, de kézzel kell futtatni a PC-n egy szkript segítségével.

#### Requirements

- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- A patchelni kívánt játék egy példánya - támogatott formátumok: `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ` és `FST` - az `NKIT` NEM támogatott
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Lépések

1. Töltsd le a patchert, és csomagold ki a `.zip` fájlt.
2. Nyisd meg a kicsomagolt mappát, és másold bele a Wii játék képeit.
   - Ha Windows rendszeren vagy, kattints duplán a `patch-images.bat` fájlra (ez „patch-images” Batch File néven is megjelenhet). Ha Cygwin-hez kapcsolódó problémákba ütközöl, próbáld meg helyette a `patch-images-32.bat` fájlt.
   - Ha macOS-t használsz, nyiss parancssort az aktuális mappában és a `chmod +x *.sh` paranccsal tedd futtathatóvá a shell szkriptet, majd futtasd a `./patch-images.sh` fájlt.
   - Ha Linuxon vagy, kattints duplán a `patch-images.desktop` fájlra (ez „Patch Images” néven is megjelenhet), vagy futtasd a `./patch-images.sh` fájlt egy terminálban, miután a `chmod +x *.sh` paranccsal futtathatóvá tetted.
3. Ha a fentiek sikeresek voltak, akkor egy ablaknak kell felugrania, amely a patch folyamatot jeleníti meg. Ha a folyamat befejeződött, a javított képfájlokat a `wiimmfi-images` nevű mappában találod.

:::

---

::: tip

Folytatás az [ajánlott Homebrew](recommended-homebrew)-okkal

Ez az útmutató tartalmaz egy homebrew válogatást, ami kiemel néhány dolgot, amit most már tudsz csinálni a Wii-oddal. Ez tartalmaz emulátorokat, játék hackeket és egyebeket.

:::
