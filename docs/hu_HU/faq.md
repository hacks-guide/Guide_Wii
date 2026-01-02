# GYIK és hibaelhárítás

## Fő GYIK

### Mennyire kockázatos a konzolom feltörése?

A konzoltól függően nem túl kockázatos. A Wii esetében sokkal kisebb a belépési korlát, mint más konzoloknál, néhány exploithoz nem kell más, mint egy Wii és egy internetkapcsolat. Amíg követed az [itt](bricks#brick-prevention) leírt általános tanácsokat, telepíted a [BootMii](bootmii)-t és a [Priiloader](priiloader)-t, és használod a józan eszed, addig minden rendben lesz!

### Az XXXXXX hibakódot kapom, hogyan tudom javítani?

Ha ellenőrizni szeretnéd, hogy mit jelent a hiba, kérjük, látogass el a [Wiimmfi hiba oldalra](https://wiimmfi.de/error). A gyakoribb hibák javításai az alábbiakban vannak felsorolva:

#### Error 051330/51330

Futtass Internet kapcsolat tesztet a `Wii Settings > Internet > Connection settings > Connection > Test this connection` opciót indítva

#### Error 220602

##### RiiConnect24 felhasználók számára

A RiiConnect24 régi DNS-kiszolgálóját használod. Kövesd [ezt](riiconnect24#section-iv---connecting) az útmutatót a lépésekért, hogy hogyan módosíthatod.

##### Nem RiiConnect24 felhasználók számára

Az elsődleges DNS szerver vagy helytelen vagy nem működik.

Ez akkor is előfordulhat, ha proxy szervert használsz és az nem elérhető.

#### Error 107304

##### RiiConnect24 felhasználók számára

Ha ezt a hibát kapod, vagy a Nintendo felhasználói megállapodását látod a RiiConnect24 logója nélkül, az azt jelenti, hogy az internet szolgáltatód vagy hálózatod blokkolja az RC24 DNS használatát. Beállíthatod az `Auto-Obtain DNS`-t `On`-ra ennek megoldásához. A RiiConnect24 továbbra is működni fog nélküle. Vagy használhatod a [RiiConnect24 DNS Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) programot.

##### Nem RiiConnect24 felhasználók számára

Ha ezt a hibát kapod, a DNS szerver amit választottá vagy az interneted teljességében hibás. Próbáld később újra.

#### FORE000006

Ha a FORE000006 hibaüzenetet kapod, a Wii órája valószínűleg rosszul van beállítva. Tekintsd meg [ezt](wiiconnect24#updating-rtc-clock) a lépésekért a helyes alaphelyzetbe állításhoz. Ha ez sem sikerül, akkor vedd ki a Wii óraelemét (a rendszer alján található egy csavar mögött) egy órára, majd tedd vissza. Ezután reseteld Wii óráját.

### Hogyan távolíthatom el a szülői felügyeletet?

Az [mkey generator](https://mkey.nintendohomebrew.com/) tud olyan kódotgenerálni, amivel eltávolítható a szülői felügyelet.

### Úgy gondolom, hogy a Wii-om brickelt, vagy valami komoly baja van, mit tegyek?

Tekintsd meg [ezt](bricks) az oldalt.

## Tároló eszköz GYIK

::: info

A [BlueBomb](bluebomb), [str2hax](str2hax), vagy [FlashHax](flashhax) exploitok esetében nincs szükséged SD-kártyára a Wii feltöréséhez; a homebrew és egyéb feladatok elvégzéséhez mindenképpen ajánlott egyet beszerezni.

:::

::: info

A Wii bármilyen kapacítású SD kártyát tud olvasni (még a 32GB-nál nagyobbakat is), de a kártyának [FAT32/MS-DOS-ra kell formázva lennie](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**nem** exFAT vagy NTFS).

Az USB eszközökhoz is a FAT32/MSDOS az ajánlott, habár érdemes figyelemünkben tartani a FAT32 korlátozásait, ami maximum 2TB méretű köteteket és 4GB méretű fájlokat tesz lehetővé. A WBFS korábban a Wii-játékok biztonsági mentéséhez használt fájlrendszer volt (nem tévesztendő össze a WBFS fájlokkal) - ma már elavult, és nem szabad használni.

:::

::: warning

A 4.0-nál alacsonyabb verziószámú Wii Menu a Wii rendszer szoftverének egy korlátozása megakadályozza a 2 GB-nál nagyobb SD-kártyák használatát.

A bolti 4.0 vagy magasabb verziószámú Wii Menu verziók esetében ez a korlátozás megszűnt, és különböző méretű SD-kártyák használhatók.

:::

::: warning

Az USB-eszközök esetében a pendrive-ok nagy arányban nem működnek a Wii konzolokon. Ehelyett ajánlott USB-s merevlemezt vagy SSD-meghajtót használni.

:::

### Általános tárolási irányelvek

Amikor SD-kártya vagy USB-eszköz vásárlását vagy használatát fontolgatod, érdemes átgondolnod, hogy mire fogod használni a tárolóeszközt. A különböző felhasználási módok különböző mennyiségű helyet foglalhatnak el, az alábbiakban néhány gyakori példát mutatunk be:

- Wii biztonsági mentések: A legnagyobb Wii-játékok (kétrétegű DVD) akár 8,5 GB-os méretűek is lehetnek, a szokásosabb játékok inkább a 4,7 GB-os vagy annál kisebb mérethez állnak közelebb. Az átlagos felhasználó egy Wii biztonsági másolatot készítő eszköz esetében valószínűleg 128 Gb vagy annál nagyobb tárhelyet szeretne.
- GameCube biztonsági mentések: A legnagyobb GameCube-játékok mérete eléri az 1,3 Gb-ot. Az ISO-méretek általában a játéktól függetlenül ekkora méretűek, de lényegesen kisebbek lehetnek, ha helyette NKIT formátumot használnak. Az átlagos felhasználó egy GameCube biztonsági mentést készítő eszköz esetében valószínűleg 64 Gb vagy annál nagyobb tárhelyet szeretne.
- Általános emuláció: A Wii-n sokféle emulátor áll rendelkezésre. Mivel a különböző játék ROM-ok mérete drámaian eltérő, az átlagos felhasználónak, aki játékokat szeretne emulálni, valószínűleg 32 GB vagy annál nagyobb tárhelyre lenne szüksége.
- Általános homebrew: A homebrew-hoz az átlagos felhasználónak 2 Gb vagy annál nagyobb tárhelyre van szüksége.
- NAND biztonsági mentések: A BootMii-vel történő NAND biztonsági mentéshez az átlagos felhasználónak legalább 512 MB szabad helyre van szüksége, de 1 GB vagy annál nagyobb méret ajánlott.
- Puszta minimum, csak exploit: Az SD-kártyával kompatibilis exploit futtatásához a Wii-n legalább 128 MB hely szükséges.

### SD kártyák vásárlása

::: danger

2 TB-os vagy nagyobb SD-kártyák jelenleg nem léteznek, bárki, aki ilyet próbál eladni neked, megpróbál átverni.

:::

SD-kártyák vásárlásakor általában ajánlott, hogy minél drágább és nagyobb kapacitású, annál inkább ragaszkodjon a jól ismert márkákhoz. Míg egy általános 2 GB-os SD-kártyát vásárolhatsz, és valószínűleg biztonságban vagy, ugyanez nem mondható el egy 512 GB-os SD-kártyáról. Az SD-kártyák általános jelenlegi árazása a 256 GB-os és az alatti kártyák esetében 10-20 USD körül van, míg az 512 GB-os kártyák ára 40 USD körül van. Ha az Amazonról vásárolsz, győződj meg róla, hogy a kártya vagy `Sold by/Shipped by Amazon` vagy `Sold by [brand], Shipped by Amazon`. Légy óvatos, ha az eBay-en vásárolsz merevlemezt.

Ajánlott márkák:

- Samsung (EVO Select, EVO Plus, PRO Plus)
- SanDisk (Extreme, Ultra, stb.)
- Lexar (E-Series, Professional)
- Silicon Power ("3D NAND" kártyák, a nagyobb kapacitás általában jobb érték)
- PNY (Elite, Elite-X, stb.)

### USB eszközök - merevelemezek vásárlása

USB merevlemezek vásárlásakor csak három jelenlegi HDD-gyártó létezik: Western Digital, Seagate és Toshiba. Minden más merevlemezgyártó cég megszűnt, és vagy csődbe ment, vagy a fent említett három cég beolvasztotta őket. Ennek ellenére, ha van egy másik cég által gyártott merevlemezed, annak még működnie kell! A merevlemezek technológiája az elmúlt körülbelül 10 évben nagyjából változatlan maradt. Csak ellenőrizd a S.M.A.R.T. adatokat, hogy megbizonyosodj arról, hogy a meghajtó nem hibásodott meg, mielőtt az összes adatod rápakolod.

A 2,5 hüvelykes meghajtók a legtöbb esetben jól működnek a Wii-n kizárólag USB-ről, de a 3,5 hüvelykes meghajtók több energiát fogyasztanak, és mindig szükség lesz külső hálózati adapterre. Figyelj arra, hogy meghatározd, hogy mit szeretnél csinálni a külső meghajtóval.

A Wii U felhasználók számára erősen ajánlott egy külső tápellátást igénylő merevlemez, vagy a 2,5 hüvelykes meghajtókhoz egy tápellátássaln rendelkező USB hub és/vagy Y kábel használata.

A Wii mini felhasználók számára külső tápellátású USB hub használata ajánlott, hogy egyszerre lehessen külső tárolót, internetadaptert és egyéb perifériákat csatlakoztatni. A meghajtók tápellátásához Y-kábelt is használhatsz.

Ami a vásárlási lehetőségeket illeti, ez nagyrészt három különböző forgatókönyv határozható meg:

- Új külső merevlemez vásárlása a semmiből: Az új külső meghajtók vadonatújként körülbelül 60 USD a 2TB, 50 USD az 1TB, körülbelül 30 USD az 1TB-nél kisebb méreteknél. Bármit is teszel, próbálj meg a fent felsorolt három jelenlegi gyártó márkánál maradni, de ne feledd, hogy az 1 Tb-nál kisebb méretű meghajtók esetében a kínálat gyér.
- Új merevlemez és új ház vásárlása: Az új merevlemezek decens módon olcsóbbak, mintha előre gyártott merevlemezt vásárolnál, és az új merevlemez elhelyezéséhez vásárolhatsz házakat is. A 2,5 hüvelykes házak általában csak USB-ről táplálhatóak, míg a 3,5 hüvelykes házakhoz szinte mindig külső adapter is jár a tápellátáshoz. Egy példa ára egy 500 GB-os Western Digital meghajtó és egy 2,5 hüvelykes meghajtóház vásárlása az Amazonról - összességében körülbelül 30 USD.
- Burkolat vásárlása egy már meglévő merevlemezhez: Ha már van egy merevlemeze, akkor azt egy házba helyezheti, és használhatja a Wii számára. Az Amazonon 10 és 20 USD közötti áron találhat burkolatokat, feltéve, hogy van egy meghajtó, amellyel elláthatja.

### USB eszközök - SSD-k vásárlása

::: warning

Ha egy meghajtót a Wii-vel akarsz használni, a külső SSD-k gyakran drágábbak, mint a hagyományos merevlemezek, de a Wii-n nem tapasztalható sebességnövekedés (a konzol csak USB 2.0 adatsebességet támogat). Ha szeretnél vásárolni egyet, vagy már van egy, akkor ez is egy lehetőség, de általában ajánlott merevlemezt választani, ha még nincs.

:::

## Hálózati GYIK

A Wii vezeték nélküli hálózati hardvere a 802.11g maximális szabványt támogatja a 2,4 GHz-es sávban (visszamenőlegesen WiFi 3-ként nevezett), a maximális biztonsági szint pedig WPA2-PSK (AES). Ezért a Wii NEM képes csatlakozni a következő hozzáférési pontokhoz (AP):

- WPA enterprise titkosítást vagy csak WPA3 titkosítást kényszerítő hozzáférési pontokhoz
- A WiFi 3-mal nem visszafelé kompatibilis vagy csak az 5 GHz-es sávban sugárzó AP-khez
- A 802.11b vagy 802.11g sebességet nem támogató hozzáférési pontok (pl.  a csak 802.11n-t támogató AP-k)

Internet szolgáltatók akikről ismert, hogy olyan routert biztosítanak ami inkompatibilis ezekkel a beállításokkal:

- Xfinity
- Spectrum
- Cox

Ha az internet szolgáltatód nem engedi megváltoztatni ezeket a beállításokat, vagy a jelenlegi hálózati hardvered nem támogatja, akkor van néhány lehetőséged:

- Megpróbálhatsz mobil hotspotot használni. Ez nem ajánlott, mivel általában instabil kapcsolatot eredményez.
- Használhatsz egy LAN-adaptert. Ennek az `ASIX AX88772` lapkakészlettel kell rendelkeznie, vagy azt kell mondania, hogy „kompatibilis a Wii-vel”. Itt van egy [ajánlott LAN-adapter az Plugable-től](https://a.co/d/g8XvMDp).
  - Jegyezd meg, a chipset varinánsai (pl. `ASIX AX88772E`) **nem fognak működni** a Wii-al.
- Alternatívaként vásárolhatsz egy másodlagos routert, és továbbra is használhatod a már meglévő hálózatod. Bármilyen olcsó, a fenti szabványoknak megfelelő router (például a Linksys WRT54G) működni fog.

A Wii U esetében a vWii a Wii U fő beállításaiban megadott internetbeállításokat használja, de opcionálisan szétválasztható a `Wii VC Launch` Aroma plugin segítségével.
