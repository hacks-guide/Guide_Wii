# Întrebări Frecvente și Rezolvarea unor probleme

## Primary FAQ

### Cât de riscant este să-mi modific consola?

There is very low risk to hacking your console. The Wii requires very little equipment to hack and can usually be done entirely through software. As long as you follow the general advice laid on the [brick overview page](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and apply instructions as written, you should be OK. If you have specific concerns about the hacking process, feel free to join the Nintendo Homebrew discord at the bottom of the page.

### Cum pot elimina controlul parental?

The [mkey generator](https://mkey.nintendohomebrew.com/) can generate the code required to remove parental controls.

### Cred că sistemul meu Wii are un brick sau ceva este foarte în neregulă, ce ar trebui să fac?

See [this](bricks) page.

## Error Code FAQ

### Am primit codul de eroare XXXXXX, cum îl rezolv?

In order to check what the error means, please visit the [Wiimmfi error page](https://wiimmfi.de/error). Multe erori comune au rezolvări listate mai jos:

#### Eroarea 051330/51330

Run an Internet connection test by going to `Wii Settings` -> `Internet` -> `Connection settings` -> `Connection` -> `Test this connection`

#### Eroarea 220602

<br>

##### For WiiLink Users

You are using an old DNS server for WiiLink. You should set your DNS to what is specified [on the WiiLink website](https://wiilink.ca/guide/dns/).

##### For non-WiiLink Users

Your Primary DNS server is incorrect or not working.

This can also happen if you use a proxy server and it is down.

#### Eroarea 107304

<br>

##### For WiiLink Users

If you receive the above error or you see Nintendo's User Agreement without WiiLink's logo, that means your ISP (Internet Service Provider) or network is blocking the use of WiiLink DNS. You can set the `Auto-Obtain DNS` option to `On` to resolve this. You can also use the [WiiLink DNS Server](https://github.com/WiiLink24/DNS-Server/releases/latest) as an alternative.

##### For non-WiiLink Users

If you receive this error, your Internet or DNS server is having issues. Reîncearcă mai încolo.

#### FORE000006

If you receive error FORE000006, your Wii's clock is likely set incorrectly. See [the RTC clock update guide](wiiconnect24#updating-rtc-clock) for instructions on how to properly sync it. If you continue to recieve this error, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and reinsert it. Then, set the Wii's clock to the correct time.

## Întrebări Frecvente despre Dispozitivele de Stocare

::: danger

Flash drives are NOT recommended to be used on a Wii if possible because of their unpredicability and potential to become corrupt on the console. Using a USB flash drive may result in the following behavior:

- Game backups failing to load
- UI glitches in homebrew apps
- Data randomly becoming corrupted

If you experience the issues above, or other inexplicable issues with your flash drive, use a USB hard drive or an SD card instead.

:::

::: warning

For stock Wii Menu versions lower than 4.0, a limitation in the Wii system software prevents SD cards bigger than 2GB from being used.

For stock Wii Menu versions 4.0 or higher, this limitation is removed and SD cards of any size can be used.

:::

::: info

The Wii can read SD cards of any capacity (even those larger than 32GB), but the card must be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**not** exFAT or NTFS).

For USB devices, FAT32/MS-DOS is also recommended. However, users should be aware of FAT32 limitations, which only allow volumes up to 2TB in size and files up to 4GB in size. WBFS is another file system used for Wii game backups (not to be confused with WBFS files) commonly used in the past, but it is now outdated and should not be used.

:::

::: info

For the [BlueBomb](bluebomb), [str2hax](str2hax), and [FlashHax](flashhax) exploits, you do not need an SD card to hack your Wii. However, it is highly recommended to use one anyway for homebrew and other tasks.

:::

### Storage Space Recommendations

When considering, buying, or using an SD card or USB storage device, it is worth considering what you will be using it for. Based on your planned usage, sizing recommendations are outlined below:

|   Device Usage   |                      Recommended Storage Space                      |
| :--------------: | :-----------------------------------------------------------------: |
|   Exploit-only   |                                128MB                                |
|   NAND backups   | Minimum: 512MB<br>Recommended: 1GB+ |
|  Homebrew usage  |                                 2GB+                                |
|  Emulation usage |                                32GB+                                |
| GameCube backups |                                64GB+                                |
|    Wii backups   |                                128GB+                               |

### Cumpărarea Cardurilor SD

::: danger

Listings for SD cards larger than 2TB are almost certainly scams, and would not work on a Wii anyway as it is not compatible with the SDUC standard.

:::

When buying SD cards, it is generally recommended that you stick to well-known brands, especially with higher capacity cards. You can buy a generic 2GB SD card and it will most likely work as intended, but the same cannot be said for something like a 512GB SD card. General current pricing for SD cards is around 10-35 USD for 256GB and below, whereas 512GB is around 60 USD. When buying off of Amazon, make sure that your card is either `Sold by/Shipped by Amazon` or `Sold by [brand], Shipped by Amazon`. Be careful when buying storage on eBay.

Our recommended brands:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, etc)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, etc)
- [INLAND by Micro Center](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### Cumpărarea Unităților USB - Hard Disk-urilor

Când cumperi hard disk-uri USB, există în prezent numai trei producători de HDD: Western Digital, Seagate și Toshiba. Any and all other hard drive companies are defunct and have either went bankrupt, or were absorbed by the three aforementioned companies. Acestea fiind spuse, dacă ai la îndemână un hard disk în plus făcut de altă companie, ar trebui încă să funcționeze! Tehnologia hard disk-urilor a rămas în întregime neschimbată în ultimii circa 10 ani. Doar ține minte să verifici datele S.M.A.R.T pentru a te asigura că unitatea nu are probleme înainte să îți pui toate datele pe el.

For hard drive sizing, 2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch drives consume more power and will always need an external power adapter. Asigură-te să plănuiești acest lucru atunci când stabilești ce vrei să faci cu o unitate externă.

For Wii U users, it is highly recommended to have a hard drive that uses external power, or to use a powered USB hub and/or Y cable for 2.5 inch drives. This is due to the Wii U not providing enough power over its USB ports, unlike the Wii.

For Wii mini users, it is recommended to have an externally powered USB hub in order to have external storage, internet adapters, and other peripherals connected simultaneously. You may also want to use a Y cable for drive power.

În ceea ce privește opțiunile tale, acest lucru în mare se rezumă la trei scenarii diferite:

- Cumpărarea unui hard disk extern nou de la zero: Unitățiile externe noi costă în jur de €56 (300 RON) pentru 2TB, €46 (250 RON) pentru 1TB și în jur de €28 (150 RON) pentru mărimi mai scăzute de 1TB. Try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
- Buying a new hard drive, and a new enclosure: You can buy a hard drive, as well as an enclosure to store this hard drive, with the added benefit that the drive can be swapped as desired. 2.5 inch enclosures can normally be powered off of USB alone, while 3.5 inch enclosures almost always need externally provided power. An example is buying a 1TB 2.5 inch hard drive as well as 2.5 inch drive enclosure, which may cost around 80 USD.
- Buying an enclosure for an already existing hard drive: If you already have a usable drive, you can slot it into an enclosure and use it with your Wii. Enclosures can be found for prices ranging between 10 to 20 USD on Amazon.

### Cumpărarea Dispozitivelor USB - Unitățile SSD

::: warning

Pentru scopurile utilizării unui dispozitiv de stocare cu un Wii, SSD-urile externe sunt de obicei mai scumpe decât hard disk-urile convenționale fără niciun câștig în viteză observabil pentru un Wii (consola suportă maxim viteze de transfer USB 2.0). Dacă vrei să cumperi unul sau deja ai unul la îndemână, este o opțiune, dar în general este recomandat pur și simplu să iei un hard disk dacă nu ai deja unul.

:::

## Networking FAQ

The Wii's wireless networking hardware supports the maximum standard of 802.11g on the 2.4 GHz band (retroactively named Wi-Fi 3), with a maximum security level of WPA2-PSK (AES). Therefore, the Wii will NOT be able to connect to the following access points (APs):

- APs enforcing WPA enterprise encryption, or WPA3 only
- APs not backwards compatible with WiFi 3, or broadcasting only on the 5 GHz band
- APs not supporting legacy 802.11b or 802.11g rates (i.e. APs supporting only 802.11n)

ISPs known to provide routers incompatible with these settings:

- Xfinity
- Spectrum
- Cox

If your ISP will not let you change these settings, or your current networking hardware is not supported, you have a few options:

- You can try to use a cellular hotspot. This is not recommended as a first choice as it often results in an unstable connection.
- You can use a LAN adapter. It must have the `ASIX AX88772` chipset or say “compatible with Wii”. Here is a [recommended LAN adapter by Plugable](https://a.co/d/g8XvMDp).
  - Note that variants of the chipset (eg. `ASIX AX88772E`) **will not work** with the Wii.
- Alternatively, you can buy a secondary router and continue to use the network you already have, like a mesh. Any cheap router meeting the above standards (such as the Linksys WRT54G) will work.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the `Wii VC Launch` Aroma plugin.

---

::: tip

[Click here to go back to the site index.](site-navigation)

:::
