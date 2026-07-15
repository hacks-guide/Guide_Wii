# GYIK és hibaelhárítás

## Elsődleges GYIK

### Mennyire kockázatos a konzolom feltörése?

Nagyon alacsony a kockázat a konzolod hackelésénél. A Wii-nak nagyon kevés felszerelésre van szüksége a hackeléshez, és többnyire teljesen szoftveres. Amíg követed az általános tanácsokat a [brick áttekintő oldalon](bricks#brick-prevention), telepíted a [BootMii](bootmii)-t és a [Priiloader](priiloader)-t, és használod a józan eszed, addig minden rendben lesz. Ha van valami kérdésed a hackelési folyamattal, csatlakozz a Nintendo Homebrew discord csatornához a oldal végén.

### Hogyan távolíthatom el a szülői felügyeletet?

Az [mkey generator](https://mkey.nintendohomebrew.com/) tud olyan kódotgenerálni, amivel eltávolítható a szülői felügyelet.

### Úgy gondolom, hogy a Wii-om brickelt, vagy valami komoly baja van, mit tegyek?

Tekintsd meg [ezt](bricks) az oldalt.

## Hibakód GYIK

### Az XXXXXX hibakódot kapom, hogyan tudom javítani?

Ha ellenőrizni szeretnéd, hogy mit jelent a hiba, kérjük, látogass el a [Wiimmfi hiba oldalra](https://wiimmfi.de/error). A gyakoribb hibák javításai az alábbiakban vannak felsorolva:

#### Error 051330/51330

Futtass Internet kapcsolat tesztet a `Wii Settings` -> `Internet` -> `Connection settings` -> `Connection` -> `Test this connection` opciót indítva

#### Error 220602

<br>

##### WiiLink felhasználók számára

Egy régi WiiLink DNS szervert használsz. Be kell állítanod a DNS-ed arra, ami [a WiiLink weboldalon található](https://wiilink.ca/guide/dns/).

##### nem-WiiLink felhasználók számára

Az elsődleges DNS szerver vagy helytelen vagy nem működik.

Ez akkor is előfordulhat, ha proxy szervert használsz és az nem elérhető.

#### Error 107304

<br>

##### WiiLink felhasználók számára

Ha ezt a hibát kapod, vagy a Nintendo felhasználói megállapodását látod a WiiLink logója nélkül, az azt jelenti, hogy az internet szolgáltatód vagy hálózatod blokkolja az WiiLink DNS használatát. Beállíthatod az `Auto-Obtain DNS` opciót `On`-ra ennek megoldásához. Használhatod a [WiiLink DNS szervert](https://github.com/WiiLink24/DNS-Server/releases/latest) is mint alternatívát.

##### nem-WiiLink felhasználók számára

Ha ezt a hibát kapod, az internetednek vagy a DNS szerverednek problémái vannak. Próbáld később újra.

#### FORE000006

Ha a FORE000006 hibaüzenetet kapod, a Wii órája valószínűleg rosszul van beállítva. Tekintsd meg [az RTC óra frissítés útmutató](wiiconnect24#updating-rtc-clock) a lépésekért a helyes szinkronizáláshoz. Ha továbbra is kapod a hibát, akkor vedd ki a Wii óra elemét (a rendszer alján található egy csavar mögött) egy óra időtartamra, majd tedd vissza. Utána állítsd be a Wii óráját a megfelelő időre.

## Tároló eszköz GYIK

::: danger

A flash drive-ok NEM ajánlotta a Wii-n, ha lehetséges, mert a megjósolhatatlan viselkedésük és potenciaális elromlásuk a konzolon. Egy USB flash drive használata a következőkhöz vezethet:

- Játék mentések nem töltődnek be
- UI hibák a homebrew appokban
- Adat véletlenül elromlik

Ha fenti problémákat, vagy megmagyarázhatatlan hibákat tapasztalsz a flash drive-oddal, használj USB merevlemezt vagy SD kártyát helyette.

:::

::: warning

A 4.0-nál alacsonyabb verziószámú Wii Menu a Wii rendszer szoftverének egy korlátozása megakadályozza a 2 GB-nál nagyobb SD-kártyák használatát.

A bolti 4.0 vagy magasabb verziószámú Wii Menu verziók esetében ez a korlátozás megszűnt, és különböző méretű SD-kártyák használhatók.

:::

::: info

A Wii bármilyen kapacítású SD kártyát tud olvasni (még a 32GB-nál nagyobbakat is), de a kártyának [FAT32/MS-DOS-ra kell formázva lennie](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**nem** exFAT vagy NTFS).

Az USB eszközökhöz FAT32/MS-DOS ajánlott. Habár a felhasználóknak érdemes figyelemünkben tartani a FAT32 korlátozásait, ami maximum 2TB méretű köteteket és 4GB méretű fájlokat tesz lehetővé. A WBFS egy másik fájlrendszer ami Wii játék mentésekhez használt (nem keverendő össze a WBFS fájlokkal) a múltban, de már idejétmúlt és nem javasolt a használata.

:::

::: info

A [BlueBomb](bluebomb), [str2hax](str2hax), és [FlashHax](flashhax) exploitokhoz nem szükséges SD kártya a Wii hackeléséhez. Azonban erősen ajánlott, hogy használj egyet mindeféleképp a homebrew-okhoz és más feladatokra.

:::

### Tárhely ajánlások

Amikor SD-kártya vagy USB tároló vásárlását vagy használatát fontolgatod, érdemes átgondolnod, hogy mire fogod használni azt. A tervezet felhasználásod alapján a méret javaslatok alább láthatók:

|  Eszköz használat  |                         Ajánlott tárolóhely                        |
| :----------------: | :----------------------------------------------------------------: |
|    Csak exploit    |                               128 MB                               |
|    NAND mentések   | Minimum: 512 MB<br>Ajánlott: 1 GB+ |
| Homebrew használat |                                2 GB+                               |
| Emuláció használat |                               32 GB+                               |
|  GameCube mentések |                               64 GB+                               |
|    Wii mentések    |                               128 GB+                              |

### SD kártyák vásárlása

::: danger

A 2TB-nál nagyobb SD kártyák többnyire átverések és nem fognak működni a Wii-jal mivel nem kompatibilisek az SDUC szabvánnyal.

:::

SD-kártyák vásárlásakor általában ajánlott, hogy ragaszkodj a jól ismert márkákhoz, különösen a nagy kapacitású kártyáknál. Ha egy általános 2 GB-os SD-kártyát vásárolsz az úgy fom működi ahogy elvárt, de ugyanez nem mondható el egy 512 GB-os SD-kártyáról. Az SD-kártyák általános jelenlegi árazása a 256 GB-os és az alatti kártyák esetében 10-35 USD körül van, míg az 512 GB-os kártyák ára 60 USD körül van. Ha az Amazonról vásárolsz, győződj meg róla, hogy a kártya vagy `Sold by/Shipped by Amazon` vagy `Sold by [brand], Shipped by Amazon`. Légy óvatos, ha az eBay-en vásárolsz tárolót.

Az általunk ajánlott márkák:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, stb.)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, stb)
- [INLAND a Micro Center-től](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### USB eszközök - merevelemezek vásárlása

USB merevlemezek vásárlásakor csak három jelenlegi HDD-gyártó létezik: Western Digital, Seagate és Toshiba. Minden más merevlemezgyártó cég megszűnt, és vagy csődbe ment, vagy a fent említett három cég beolvasztotta őket. Ennek ellenére, ha van egy másik cég által gyártott merevlemezed, annak még működnie kell! A merevlemezek technológiája az elmúlt körülbelül 10 évben nagyjából változatlan maradt. Csak ellenőrizd a S.M.A.R.T. adatokat, hogy megbizonyosodj arról, hogy a meghajtó nem hibásodott meg, mielőtt az összes adatod rápakolod.

A 2,5 hüvelykes meghajtók a legtöbb esetben jól működnek a Wii-n kizárólag USB-ről, de a 3,5 hüvelykes meghajtók több energiát fogyasztanak, és mindig szükség lesz külső hálózati adapterre. Figyelj arra, hogy meghatározd, hogy mit szeretnél csinálni a külső meghajtóval.

A Wii U felhasználók számára erősen ajánlott egy külső tápellátást igénylő merevlemez, vagy a 2,5 hüvelykes meghajtókhoz egy tápellátással rendelkező USB hub és/vagy Y kábel használata. Ez azért kell, mert a Wii U nem ad elég energiát az USB protjain, ellentétben a Wii-jal.

A Wii mini felhasználók számára külső tápellátású USB hub használata ajánlott, hogy egyszerre lehessen külső tárolót, internetadaptert és egyéb perifériákat csatlakoztatni. A meghajtók tápellátásához Y-kábelt is használhatsz.

Ami a vásárlási lehetőségeket illeti, ez nagyrészt három különböző forgatókönyv határozható meg:

- Új külső merevlemez vásárlása a semmiből: Az új külső meghajtók vadonatújként körülbelül 60 USD a 2TB, 50 USD az 1TB, körülbelül 30 USD az 1TB-nél kisebb méreteknél. Próbálj meg a fent felsorolt három jelenlegi gyártó márkánál maradni, de ne feledd, hogy az 1 Tb-nál kisebb méretű meghajtók esetében a kínálat gyér.
- Új merevlemez és ház vásárlása: Vásárolhatsz egy merevlemez és egy házat ehhez a merevlemezhez, azzal az előnnyel, hogy kicserélheted, ha akarod benne a merevlemezt. A 2,5 hüvelykes házak általában csak USB-ről táplálhatóak, míg a 3,5 hüvelykes házakhoz szinte mindig külső adapter is jár a tápellátáshoz. Például egy 1 TB 2,5 inch merevlemez és egy 2,5 inch ház költsége 80 USD.
- Burkolat vásárlása egy már meglévő merevlemezhez: Ha már van egy merevlemezed, akkor azt egy házba helyezheted, és használhatod a Wii számára. A házak 10-20 USD között találhatók az Amazon-on.

### USB eszközök - SSD-k vásárlása

::: warning

Ha egy meghajtót a Wii-vel akarsz használni, a külső SSD-k gyakran drágábbak, mint a hagyományos merevlemezek, de a Wii-n nem tapasztalható sebességnövekedés (a konzol csak USB 2.0 adatsebességet támogat). Ha szeretnél vásárolni egyet, vagy már van egy, akkor ez is egy lehetőség, de általában ajánlott merevlemezt választani, ha még nincs.

:::

## Hálózati GYIK

A Wii vezeték nélküli hálózati hardvere a 802.11g maximális szabványt támogatja a 2,4 GHz-es sávban (visszamenőlegesen Wi-Fi 3-ként nevezett), a maximális biztonsági szint pedig WPA2-PSK (AES). Ezért a Wii NEM képes csatlakozni a következő hozzáférési pontokhoz (AP):

- WPA enterprise titkosítást vagy csak WPA3 titkosítást kényszerítő hozzáférési pontokhoz
- A WiFi 3-mal nem visszafelé kompatibilis vagy csak az 5 GHz-es sávban sugárzó AP-khez
- A 802.11b vagy 802.11g sebességet nem támogató hozzáférési pontok (pl.  a csak 802.11n-t támogató AP-k)

Internet szolgáltatók akikről ismert, hogy olyan routert biztosítanak ami inkompatibilis ezekkel a beállításokkal:

- Xfinity
- Spectrum
- Cox

Ha az internet szolgáltatód nem engedi megváltoztatni ezeket a beállításokat, vagy a jelenlegi hálózati hardvered nem támogatja, akkor van néhány lehetőséged:

- Megpróbálhatsz mobil hotspotot használni. Ez nem ajánlott első választásként, mivel általában instabil kapcsolatot eredményez.
- Használhatsz egy LAN-adaptert. Ennek az `ASIX AX88772` lapkakészlettel kell rendelkeznie, vagy azt kell mondania, hogy „kompatibilis a Wii-vel”. Itt van egy [ajánlott LAN-adapter az Plugable-től](https://a.co/d/g8XvMDp).
  - Jegyezd meg, a chipset varinánsai (pl. `ASIX AX88772E`) **nem fognak működni** a Wii-al.
- Alternatívaként vásárolhatsz egy másodlagos routert, és továbbra is használhatod a már meglévő hálózatod. Bármilyen olcsó, a fenti szabványoknak megfelelő router (például a Linksys WRT54G) működni fog.

A Wii U esetében a vWii a Wii U fő beállításaiban megadott internetbeállításokat használja, de opcionálisan szétválasztható a `Wii VC Launch` Aroma plugin segítségével.

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
