# Foire aux questions

## Primary FAQ

### Quel est le risque de modder ma console ?

Not very risky depending on your console. The Wii requires much less barrier to entry than other consoles, with some exploits requiring nothing more than a Wii and an internet connection. As long as you follow the general advice laid on the [brick overview page](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### Comment puis-je supprimer le contrôle parental ?

The [mkey generator](https://mkey.nintendohomebrew.com/) can generate the code required to remove parental controls.

### Je pense que ma Wii est briquée, ou quelque chose ne va sérieusement pas, que dois-je faire ?

Consultez [cette page](bricks).

## Error Code FAQ

### I got error code XXXXXX, how to fix it?

In order to check what the reason for the error is, please visit the [Wiimmfi error page](https://wiimmfi.de/error). Les erreurs les plus courantes ont des solutions listées en dessous:

#### Error 051330/51330

Run an Internet connection test by going to `Wii Settings` > `Internet` > `Connection settings` > `Connection` > `Test this connection`

#### Erreur 220602

<br>

##### Pour les utilisateurs de RiiConnect24

Vous utilisez l'ancien serveur DNS de RiiConnect24. Suivez [ce guide](riiconnect24#section-iv---connecting) pour des instructions sur comment le changer.

##### Pour les utilisateurs non-RiiConnect24

Your Primary DNS server is incorrect or not working.

This can also happen if you use a proxy server and it is down.

#### Erreur 107304

<br>

##### Pour les utilisateurs de RiiConnect24

Si vous obtenez cette erreur ou que vous voyez le Contrat d'utilisateur de Nintendo sans le logo de RiiConnect24, Cela signifie que votre FAI (fournisseur d'accès Internet) ou votre réseau bloque l'utilisation des DNS de RiiConnect24. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 fonctionnera toujours même sans. You can join [the RiiConnect24 Discord server](https://discord.gg/rc24) (recommended) or [e-mail us at support@riiconnect24.net](mailto:support@riiconnect24.net) for assistance.

##### Pour les utilisateurs non-RiiConnect24

Si vous obtenez cette erreur, le serveur DNS que vous avez choisi ou votre internet dans son ensemble ont des problèmes. Réessayez plus tard.

#### FORE000006

Si vous obtenez l'erreur FORE000006, la date ou l'heure de la Wii est probablement mal réglée. Consultez [cette page](wiiconnect24#updating-rtc-clock) pour savoir les régler correctement (via un logiciel). If this still fails, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and put it back in. Ensuite, réinitialisez l'horloge de la Wii.

## Les périphériques de stockage

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

For USB devices, FAT32/MS-DOS is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size and files up to 4GB in size. WBFS was a previously used file system for Wii game backups (not to be confused with WBFS files) - today, it is outdated and should not be used.

:::

::: info

If you are using the BlueBomb, str2hax, or FlashHax exploits, you do not need an SD card.

:::

### Storage Space Recommendations

When considering buying or using an SD card or USB device, it is worth considering what you will be using either storage medium for. Based on your planned usage, sizing recommendations are outlined below:

|   Device Usage   |                      Recommended Storage Space                      |
| :--------------: | :-----------------------------------------------------------------: |
|   Exploit-only   |                                128MB                                |
|   NAND backups   | Minimum: 512MB<br>Recommended: 1GB+ |
|  Homebrew usage  |                                 2GB+                                |
|  Emulation usage |                                32GB+                                |
| GameCube backups |                                64GB+                                |
|    Wii backups   |                                128GB+                               |

### Buying SD Cards

::: danger

SD cards larger than 2TB currently do not exist, anyone attempting to sell you one is trying to rip you off.

:::

Lorsque vous achetez des cartes SD, il est généralement recommandé de s'en tenir à des marques bien connues, plus la capacité est grande plus elle est coûteuse. Vous pouvez acheter une carte SD générique/no-name de 2Go et être probablement en sécurité, On ne peut pas dire la même chose pour une carte SD de 512Go. General current pricing for SD cards is around 10-35 USD for 256GB and below, whereas 512GB is around 60 USD. Lors d'un achat sur Amazon, assurez-vous que votre carte est soit `vendue par/expédiée par Amazon` ou `vendue par [marque], Livré par Amazon`. Méfiez-vous lorsque vous achetez du stockage (clé USB, cartes SD, disques dur, etc...) sur eBay.

Our recommended brands:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, etc)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, etc)
- [INLAND by Micro Center](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### Achat de périphériques USB - Disques durs

When buying USB hard drives, there are only three existing present-day HDD manufacturers: Western Digital, Seagate, and Toshiba. Any and all other hard drive companies are defunct and have either went bankrupt, or were absorbed by the three aforementioned companies. With that said, if you have an extra hard drive lying around made by another company, it should still work! Hard drive technology has remained largely the same within the past 10 or so years. Just make sure to check the S.M.A.R.T data to ensure that the drive isn't failing before you throw all of your data on there.

For hard drive sizing, 2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch consumes more power and will always need an external power adapter. Make sure to plan for this when determining what you want to do with an external drive.

For Wii U users, it is highly recommended to have a hard drive that takes external power, or to use a powered USB hub and/or Y cable for 2.5 inch drives.

For Wii mini users, it is recommended to have an externally powered USB hub in order to have external storage, internet adapters, and other peripherals connected simultaneously. You may also want to use a Y cable for drive power.

As for your choices in shopping, this largely comes down to three different scenarios:

- Buying a new external hard drive from scratch: New external drives come brand new around 60 USD for 2TB, 50 USD for 1TB, around 30 USD for sizes lower than 1TB. Whatever you do, try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
- Buying a new hard drive, and a new enclosure: New hard drives are decently cheaper than buying a pre-made hard drive, and you can buy an enclosure to house this new hard drive. 2.5 inch enclosures are normally powerable off of USB alone, while 3.5 inch enclosures almost always come with an external adapter for power. An example price is buying a 500GB Western Digital drive and a 2.5 inch drive enclosure off of Amazon - all in all, about 30 USD.
- Buying an enclosure for an already existing hard drive: If you already have a hard drive laying around, you can put it in an enclosure and use it for your Wii. Enclosures can be found for prices ranging between 10 to 20 USD off of Amazon, as long as you have a drive to supply it with.

### Buying USB Devices - Solid State Drives

::: warning

For the purpose of using a drive with a Wii, external SSDs are often more expensive than conventional hard drives for no visible gain in speed on a Wii (the console only supports up to USB 2.0 data speeds). If you would like to buy one or already have one lying around, it's an option, but generally it's recommended to just go for a hard drive if you don't already have one.

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

- You can try to use a cellular hotspot. This is not recommended as it usually results in an unstable connection.
- You can use a LAN adapter. It must have the `ASIX AX88772` chipset or say “compatible with Wii”. Here is a [recommended LAN adapter by Plugable](https://a.co/d/g8XvMDp).
  - Note that variants of the chipset (eg. `ASIX AX88772E`) **will not work** with the Wii.
- Alternatively, you can buy a secondary router and continue to use the network you already have, like a mesh. Any cheap router meeting the above standards (such as the Linksys WRT54G) will work.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the `Wii VC Launch` Aroma plugin.

---

::: tip

[Click here to go back to the site index.](site-navigation)
{: .notice--info}

:::
