# GYIK és hibaelhárítás

## Elsődleges GYIK

### Mennyire kockázatos a konzolom feltörése?

There is very low risk to hacking your console. The Wii requires very little equipment to hack and can usually be done entirely through software. As long as you follow the general advice laid on the [brick overview page](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and apply instructions as written, you should be OK. If you have specific concerns about the hacking process, feel free to join the Nintendo Homebrew discord at the bottom of the page.

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

You are using an old DNS server for WiiLink. You should set your DNS to what is specified [on the WiiLink website](https://wiilink.ca/guide/dns/).

##### nem-WiiLink felhasználók számára

Az elsődleges DNS szerver vagy helytelen vagy nem működik.

Ez akkor is előfordulhat, ha proxy szervert használsz és az nem elérhető.

#### Error 107304

<br>

##### WiiLink felhasználók számára

If you receive the above error or you see Nintendo's User Agreement without WiiLink's logo, that means your ISP (Internet Service Provider) or network is blocking the use of WiiLink DNS. You can set the `Auto-Obtain DNS` option to `On` to resolve this. You can also use the [WiiLink DNS Server](https://github.com/WiiLink24/DNS-Server/releases/latest) as an alternative.

##### nem-WiiLink felhasználók számára

If you receive this error, your Internet or DNS server is having issues. Próbáld később újra.

#### FORE000006

If you receive error FORE000006, your Wii's clock is likely set incorrectly. See [the RTC clock update guide](wiiconnect24#updating-rtc-clock) for instructions on how to properly sync it. If you continue to recieve this error, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and reinsert it. Then, set the Wii's clock to the correct time.

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

For USB devices, FAT32/MS-DOS is also recommended. However, users should be aware of FAT32 limitations, which only allow volumes up to 2TB in size and files up to 4GB in size. WBFS is another file system used for Wii game backups (not to be confused with WBFS files) commonly used in the past, but it is now outdated and should not be used.

:::

::: info

For the [BlueBomb](bluebomb), [str2hax](str2hax), and [FlashHax](flashhax) exploits, you do not need an SD card to hack your Wii. However, it is highly recommended to use one anyway for homebrew and other tasks.

:::

### Tárhely ajánlások

When considering, buying, or using an SD card or USB storage device, it is worth considering what you will be using it for. A tervezet felhasználásod alapján a méret javaslatok alább láthatók:

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

Listings for SD cards larger than 2TB are almost certainly scams, and would not work on a Wii anyway as it is not compatible with the SDUC standard.

:::

When buying SD cards, it is generally recommended that you stick to well-known brands, especially with higher capacity cards. You can buy a generic 2GB SD card and it will most likely work as intended, but the same cannot be said for something like a 512GB SD card. Az SD-kártyák általános jelenlegi árazása a 256 GB-os és az alatti kártyák esetében 10-35 USD körül van, míg az 512 GB-os kártyák ára 60 USD körül van. Ha az Amazonról vásárolsz, győződj meg róla, hogy a kártya vagy `Sold by/Shipped by Amazon` vagy `Sold by [brand], Shipped by Amazon`. Be careful when buying storage on eBay.

Az általunk ajánlott márkák:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, stb.)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, stb)
- [INLAND a Micro Center-től](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### USB eszközök - merevelemezek vásárlása

USB merevlemezek vásárlásakor csak három jelenlegi HDD-gyártó létezik: Western Digital, Seagate és Toshiba. Minden más merevlemezgyártó cég megszűnt, és vagy csődbe ment, vagy a fent említett három cég beolvasztotta őket. Ennek ellenére, ha van egy másik cég által gyártott merevlemezed, annak még működnie kell! A merevlemezek technológiája az elmúlt körülbelül 10 évben nagyjából változatlan maradt. Csak ellenőrizd a S.M.A.R.T. adatokat, hogy megbizonyosodj arról, hogy a meghajtó nem hibásodott meg, mielőtt az összes adatod rápakolod.

For hard drive sizing, 2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch drives consume more power and will always need an external power adapter. Figyelj arra, hogy meghatározd, hogy mit szeretnél csinálni a külső meghajtóval.

For Wii U users, it is highly recommended to have a hard drive that uses external power, or to use a powered USB hub and/or Y cable for 2.5 inch drives. This is due to the Wii U not providing enough power over its USB ports, unlike the Wii.

A Wii mini felhasználók számára külső tápellátású USB hub használata ajánlott, hogy egyszerre lehessen külső tárolót, internetadaptert és egyéb perifériákat csatlakoztatni. A meghajtók tápellátásához Y-kábelt is használhatsz.

Ami a vásárlási lehetőségeket illeti, ez nagyrészt három különböző forgatókönyv határozható meg:

- Új külső merevlemez vásárlása a semmiből: Az új külső meghajtók vadonatújként körülbelül 60 USD a 2TB, 50 USD az 1TB, körülbelül 30 USD az 1TB-nél kisebb méreteknél. Try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
- Buying a new hard drive, and a new enclosure: You can buy a hard drive, as well as an enclosure to store this hard drive, with the added benefit that the drive can be swapped as desired. 2.5 inch enclosures can normally be powered off of USB alone, while 3.5 inch enclosures almost always need externally provided power. An example is buying a 1TB 2.5 inch hard drive as well as 2.5 inch drive enclosure, which may cost around 80 USD.
- Buying an enclosure for an already existing hard drive: If you already have a usable drive, you can slot it into an enclosure and use it with your Wii. Enclosures can be found for prices ranging between 10 to 20 USD on Amazon.

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

- Megpróbálhatsz mobil hotspotot használni. This is not recommended as a first choice as it often results in an unstable connection.
- Használhatsz egy LAN-adaptert. Ennek az `ASIX AX88772` lapkakészlettel kell rendelkeznie, vagy azt kell mondania, hogy „kompatibilis a Wii-vel”. Itt van egy [ajánlott LAN-adapter az Plugable-től](https://a.co/d/g8XvMDp).
  - Jegyezd meg, a chipset varinánsai (pl. `ASIX AX88772E`) **nem fognak működni** a Wii-al.
- Alternatívaként vásárolhatsz egy másodlagos routert, és továbbra is használhatod a már meglévő hálózatod. Bármilyen olcsó, a fenti szabványoknak megfelelő router (például a Linksys WRT54G) működni fog.

A Wii U esetében a vWii a Wii U fő beállításaiban megadott internetbeállításokat használja, de opcionálisan szétválasztható a `Wii VC Launch` Aroma plugin segítségével.

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
