---
title: "GYIK és hibaelhárítás"
---

## Fő GYIK

{% include toc title="Tartalomjegyzék" %}

### Mennyire kockázatos a konzolom feltörése?
A konzoltól függően nem túl kockázatos. A Wii esetében sokkal kisebb a belépési korlát, mint más konzoloknál, néhány exploithoz nem kell más, mint egy Wii és egy internetkapcsolat. Amíg követed az [itt](bricks#brick-prevention) leírt általános tanácsokat, telepíted a [BootMii](bootmii)-t és a [Priiloader](priiloader)-t, és használod a józan eszed, addig minden rendben lesz!

### Az XXXXXX hibakódot kapom, hogyan tudom javítani?
Ha ellenőrizni szeretnéd, hogy mit jelent a hiba, kérjük, látogass el a [Wiimmfi hiba oldalra](https://wiimmfi.de/error). A gyakoribb hibák javításai az alábbiakban vannak felsorolva:

#### Error 051330/51330

Futtass Internet kapcsolat tesztet a `Wii Settings > Internet > Connection settings > Connection > Test this connection` alól indítva

#### Error 220602

##### RiiConnect24 felhasználók számára

You are using the old DNS server for RiiConnect24. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### Nem RiiConnect24 felhasználók számára

Your Primary DNS server is incorrect or not working.<br> This can also happen if you use a proxy server and it is down.

#### Error 107304

##### RiiConnect24 felhasználók számára

If you get this error or you see Nintendo's User Agreement without RiiConnect24's logo, that means your ISP (Internet Service Provider) or network is blocking the use of RC24 DNS. You can set `Auto-Obtain DNS` to `On` to solve this. A RiiConnect24 továbbra is működni fog nélküle. Or, you can use the [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program.

##### Nem RiiConnect24 felhasználók számára

If you get this error, the DNS server you chose or your internet as a whole is having issues. Próbáld később újra.

#### FORE000006

If you get error FORE000006, your Wii's clock is probably set incorrectly. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. If this still fails, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and put it back in. Then, reset the Wii's clock.

### How can I remove parental controls?
The [mkey generator](https://mkey.eiphax.tech/) can generate the code required to remove parental controls.

### I think my Wii is bricked, or something is seriously wrong, what do I do?
See [this](bricks) page.

## Tároló eszköz GYIK

A [BlueBomb](bluebomb), [str2hax](str2hax) vagy [FlashHax](flashhax) exploitok esetében nincs szükséged SD-kártyára a Wii feltöréséhez; a homebrew és egyéb feladatok elvégzéséhez mindenképpen ajánlott egyet beszerezni.
{: .notice--info}

FAT32 is the recommended file system for SD cards, see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) on formatting instructions.<br> For USB devices, FAT32 is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size. WBFS was a previously used file system for Wii game backups (not to be confused with WBFS files) - today, it is outdated and should not be used.
{: .notice--info}

For stock Wii Menu versions lower than 4.0, a limitation in the Wii system software prevents SD cards bigger than 2GB from being used.<br> For stock Wii Menu versions 4.0 or higher, this limitation is removed and SD cards of various sizes can be used.<br> Your highest chance of getting a working SD card on any Wii is at sizes 32GB or lower, but success has been reported various times on cards ranging up to 256GB.
{: .notice--warning}

For USB devices, flash drives have a high rate of not working on Wii consoles. Instead, it is recommended to use a USB hard drive or solid state drive.
{: .notice--warning}

### Általános tárolási irányelvek

Amikor SD-kártya vagy USB-eszköz vásárlását vagy használatát fontolgatod, érdemes átgondolnod, hogy mire fogod használni a tárolóeszközt. A különböző felhasználási módok különböző mennyiségű helyet foglalhatnak el, az alábbiakban néhány gyakori példát mutatunk be:

+ Wii biztonsági mentések: A legnagyobb Wii-játékok (kétrétegű DVD) akár 8,5 GB-os méretűek is lehetnek, a szokásosabb játékok inkább a 4,7 GB-os vagy annál kisebb mérethez állnak közelebb. Az átlagos felhasználó egy Wii biztonsági másolatot készítő eszköz esetében valószínűleg 128 Gb vagy annál nagyobb tárhelyet szeretne.
+ GameCube biztonsági mentések: A legnagyobb GameCube-játékok mérete eléri az 1,3 Gb-ot. Az ISO-méretek általában a játéktól függetlenül ekkora méretűek, de lényegesen kisebbek lehetnek, ha helyette NKIT formátumot használnak. Az átlagos felhasználó egy GameCube biztonsági mentést készítő eszköz esetében valószínűleg 64 Gb vagy annál nagyobb tárhelyet szeretne.
+ Általános emuláció: A Wii-n sokféle emulátor áll rendelkezésre. Mivel a különböző játék ROM-ok mérete drámaian eltérő, az átlagos felhasználónak, aki játékokat szeretne emulálni, valószínűleg 32 GB vagy annál nagyobb tárhelyre lenne szüksége.
+ Általános homebrew: A homebrew-hoz az átlagos felhasználónak 2 Gb vagy annál nagyobb tárhelyre van szüksége.
+ NAND biztonsági mentések: A BootMii-vel történő NAND biztonsági mentéshez az átlagos felhasználónak legalább 512 MB szabad helyre van szüksége, de 1 GB vagy annál nagyobb méret ajánlott.
+ Puszta minimum, csak exploit: Az SD-kártyával kompatibilis exploit futtatásához a Wii-n legalább 128 MB hely szükséges.

### SD kártyák vásárlása

2 TB-os vagy nagyobb SD-kártyák jelenleg nem léteznek, bárki, aki ilyet próbál eladni neked, megpróbálja átverni Önt.
{: .notice--danger}

SD-kártyák vásárlásakor általában ajánlott, hogy minél drágább és nagyobb kapacitású, annál inkább ragaszkodjon a jól ismert márkákhoz. Míg egy általános 2 GB-os SD-kártyát vásárolhatsz, és valószínűleg biztonságban vagy, ugyanez nem mondható el egy 512 GB-os SD-kártyáról. Az SD-kártyák általános jelenlegi árazása a 256 GB-os és az alatti kártyák esetében 10-20 USD körül van, míg az 512 GB-os kártyák ára 40 USD körül van. Ha az Amazonról vásárolsz, győződj meg róla, hogy a kártya vagy az `Sold by/Shipped by Amazon` vagy `Sold by [brand], Shipped by Amazon`. Légy óvatos, ha az eBay-en vásárolsz merevlemezt.

Ajánlott márkák:
+ Samsung (EVO Select, EVO Plus, PRO Plus)
+ SanDisk (Extreme, Ultra, stb.)
+ Lexar (E-Series, Professional)
+ Silicon Power ("3D NAND" kártyák, a nagyobb kapacitás általában jobb érték)
+ PNY (Elite, Elite-X, stb.)

### USB eszközök - merevelemezek vásárlása

USB merevlemezek vásárlásakor csak három jelenlegi HDD-gyártó létezik: Western Digital, Seagate és Toshiba. Minden más merevlemezgyártó cég megszűnt, és vagy csődbe ment, vagy a fent említett három cég beolvasztotta őket. Ennek ellenére, ha van egy másik cég által gyártott merevlemezed, annak még működnie kell! A merevlemezek technológiája az elmúlt körülbelül 10 évben nagyjából változatlan maradt. Csak ellenőrizd a S.M.A.R.T. adatokat, hogy megbizonyosodj arról, hogy a meghajtó nem hibásodott meg, mielőtt az összes adatod rápakolod.

A merevlemezek méretezését tekintve a 2,5 hüvelykes merevlemezeknek jól kell működniük a Wii-n, ha csak USB-ről működik; a 3,5 hüvelykes merevlemezek sokkal több energiát fogyasztanak, és szinte mindig külső tápegységre lesz szükségük. Figyelj arra, hogy meghatározd, hogy mit szeretnél csinálni a külső meghajtóval.

Ami a vásárlási lehetőségeket illeti, ez nagyrészt három különböző forgatókönyv határozható meg:

+ Új külső merevlemez vásárlása a semmiből: Az új külső meghajtók vadonatújként körülbelül 60 USD a 2TB, 50 USD az 1TB, körülbelül 30 USD az 1TB-nél kisebb méreteknél. Bármit is teszel, próbálj meg a fent felsorolt három jelenlegi gyártó márkánál maradni, de ne feledd, hogy az 1 Tb-nál kisebb méretű meghajtók esetében a kínálat gyér.
+ Új merevlemez és új ház vásárlása: Az új merevlemezek decens módon olcsóbbak, mintha előre gyártott merevlemezt vásárolnál, és az új merevlemez elhelyezéséhez vásárolhatsz házakat is. A 2,5 hüvelykes házak általában csak USB-ről táplálhatóak, míg a 3,5 hüvelykes házakhoz szinte mindig külső adapter is jár a tápellátáshoz. Egy példa ára egy 500 GB-os Western Digital meghajtó és egy 2,5 hüvelykes meghajtóház vásárlása az Amazonról - összességében körülbelül 30 USD.
+ Burkolat vásárlása egy már meglévő merevlemezhez: Ha már van egy merevlemeze, akkor azt egy házba helyezheti, és használhatja a Wii számára. Az Amazonon 10 és 20 USD közötti áron találhat burkolatokat, feltéve, hogy van egy meghajtó, amellyel elláthatja.

### USB eszközök - SSD-k vásárlása

Ha egy meghajtót a Wii-vel akarsz használni, a külső SSD-k gyakran drágábbak, mint a hagyományos merevlemezek, de a Wii-n nem tapasztalható sebességnövekedés (a konzol csak USB 2.0 adatsebességet támogat). Ha szeretnél vásárolni egyet, vagy már van egy, akkor ez is egy lehetőség, de általában ajánlott merevlemezt választani, ha még nincs.
{: .notice--warning}