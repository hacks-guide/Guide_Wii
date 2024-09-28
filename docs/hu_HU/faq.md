# GYIK és hibaelhárítás

## Fő GYIK

### Mennyire kockázatos a konzolom feltörése?

A konzoltól függően nem túl kockázatos. A Wii esetében sokkal kisebb a belépési korlát, mint más konzoloknál, néhány exploithoz nem kell más, mint egy Wii és egy internetkapcsolat. As long as you follow the general advice laid out [here](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### Az XXXXXX hibakódot kapom, hogyan tudom javítani?

In order to check what the error means, please visit the [Wiimmfi error page](https://wiimmfi.de/error). A gyakoribb hibák javításai az alábbiakban vannak felsorolva:

#### Error 051330/51330

Run an Internet connection test by going to `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Error 220602

##### RiiConnect24 felhasználók számára

A RiiConnect24 régi DNS-kiszolgálóját használod. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### Nem RiiConnect24 felhasználók számára

Your Primary DNS server is incorrect or not working.

This can also happen if you use a proxy server and it is down.

#### Error 107304

##### RiiConnect24 felhasználók számára

Ha ezt a hibát kapod, vagy a Nintendo felhasználói megállapodását látod a RiiConnect24 logója nélkül, az azt jelenti, hogy az internet szolgáltatód vagy hálózatod blokkolja az RC24 DNS használatát. You can set `Auto-Obtain DNS` to `On` to solve this. A RiiConnect24 továbbra is működni fog nélküle. Or, you can use the [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program.

##### Nem RiiConnect24 felhasználók számára

Ha ezt a hibát kapod, a DNS szerver amit választottá vagy az interneted teljességében hibás. Próbáld később újra.

#### FORE000006

Ha a FORE000006 hibaüzenetet kapod, a Wii órája valószínűleg rosszul van beállítva. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. Ha ez sem sikerül, akkor vedd ki a Wii óraelemét (a rendszer alján található egy csavar mögött) egy órára, majd tedd vissza. Ezután reseteld Wii óráját.

### Hogyan távolíthatom el a szülői felügyeletet?

The [mkey generator](https://mkey.eiphax.tech/) can generate the code required to remove parental controls.

### Úgy gondolom, hogy a Wii-om brickelt, vagy valami komoly baja van, mit tegyek?

See [this](bricks) page.

## Tároló eszköz GYIK

::: info

For the [BlueBomb](bluebomb), [str2hax](str2hax), or [FlashHax](flashhax) exploits, you do not need an SD card to hack your Wii; it is highly recommended to grab one anyway for homebrew and other tasks.

:::

::: info

FAT32 is the recommended file system for SD cards, see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) on formatting instructions.

For USB devices, FAT32 is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size. A WBFS korábban a Wii-játékok biztonsági mentéséhez használt fájlrendszer volt (nem tévesztendő össze a WBFS fájlokkal) - ma már elavult, és nem szabad használni.

:::

::: warning

For stock Wii Menu versions lower than 4.0, a limitation in the Wii system software prevents SD cards bigger than 2GB from being used.

For stock Wii Menu versions 4.0 or higher, this limitation is removed and SD cards of various sizes can be used.

Your highest chance of getting a working SD card on any Wii is at sizes 32GB or lower, but success has been reported various times on cards ranging up to 256GB.

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

2 TB-os vagy nagyobb SD-kártyák jelenleg nem léteznek, bárki, aki ilyet próbál eladni neked, megpróbálja átverni Önt.

:::

SD-kártyák vásárlásakor általában ajánlott, hogy minél drágább és nagyobb kapacitású, annál inkább ragaszkodjon a jól ismert márkákhoz. Míg egy általános 2 GB-os SD-kártyát vásárolhatsz, és valószínűleg biztonságban vagy, ugyanez nem mondható el egy 512 GB-os SD-kártyáról. Az SD-kártyák általános jelenlegi árazása a 256 GB-os és az alatti kártyák esetében 10-20 USD körül van, míg az 512 GB-os kártyák ára 40 USD körül van. When buying off of Amazon, make sure that your card is either `Sold by/Shipped by Amazon` or `Sold by [brand], Shipped by Amazon`. Légy óvatos, ha az eBay-en vásárolsz merevlemezt.

Ajánlott márkák:

- Samsung (EVO Select, EVO Plus, PRO Plus)
- SanDisk (Extreme, Ultra, stb.)
- Lexar (E-Series, Professional)
- Silicon Power ("3D NAND" kártyák, a nagyobb kapacitás általában jobb érték)
- PNY (Elite, Elite-X, stb.)

### USB eszközök - merevelemezek vásárlása

USB merevlemezek vásárlásakor csak három jelenlegi HDD-gyártó létezik: Western Digital, Seagate és Toshiba. Minden más merevlemezgyártó cég megszűnt, és vagy csődbe ment, vagy a fent említett három cég beolvasztotta őket. Ennek ellenére, ha van egy másik cég által gyártott merevlemezed, annak még működnie kell! A merevlemezek technológiája az elmúlt körülbelül 10 évben nagyjából változatlan maradt. Csak ellenőrizd a S.M.A.R.T. adatokat, hogy megbizonyosodj arról, hogy a meghajtó nem hibásodott meg, mielőtt az összes adatod rápakolod.

A merevlemezek méretezését tekintve a 2,5 hüvelykes merevlemezeknek jól kell működniük a Wii-n, ha csak USB-ről működik; a 3,5 hüvelykes merevlemezek sokkal több energiát fogyasztanak, és szinte mindig külső tápegységre lesz szükségük. Figyelj arra, hogy meghatározd, hogy mit szeretnél csinálni a külső meghajtóval.

Ami a vásárlási lehetőségeket illeti, ez nagyrészt három különböző forgatókönyv határozható meg:

- Új külső merevlemez vásárlása a semmiből: Az új külső meghajtók vadonatújként körülbelül 60 USD a 2TB, 50 USD az 1TB, körülbelül 30 USD az 1TB-nél kisebb méreteknél. Bármit is teszel, próbálj meg a fent felsorolt három jelenlegi gyártó márkánál maradni, de ne feledd, hogy az 1 Tb-nál kisebb méretű meghajtók esetében a kínálat gyér.
- Új merevlemez és új ház vásárlása: Az új merevlemezek decens módon olcsóbbak, mintha előre gyártott merevlemezt vásárolnál, és az új merevlemez elhelyezéséhez vásárolhatsz házakat is. A 2,5 hüvelykes házak általában csak USB-ről táplálhatóak, míg a 3,5 hüvelykes házakhoz szinte mindig külső adapter is jár a tápellátáshoz. Egy példa ára egy 500 GB-os Western Digital meghajtó és egy 2,5 hüvelykes meghajtóház vásárlása az Amazonról - összességében körülbelül 30 USD.
- Burkolat vásárlása egy már meglévő merevlemezhez: Ha már van egy merevlemeze, akkor azt egy házba helyezheti, és használhatja a Wii számára. Az Amazonon 10 és 20 USD közötti áron találhat burkolatokat, feltéve, hogy van egy meghajtó, amellyel elláthatja.

### USB eszközök - SSD-k vásárlása

::: warning

Ha egy meghajtót a Wii-vel akarsz használni, a külső SSD-k gyakran drágábbak, mint a hagyományos merevlemezek, de a Wii-n nem tapasztalható sebességnövekedés (a konzol csak USB 2.0 adatsebességet támogat). Ha szeretnél vásárolni egyet, vagy már van egy, akkor ez is egy lehetőség, de általában ajánlott merevlemezt választani, ha még nincs.

:::
