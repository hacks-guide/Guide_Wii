---
title: "FAQ"
---

## Main FAQ

{% include toc title="Table of Contents" %}

### How risky is hacking my console?
Not very risky to be honest, depending on your console. The Wii requires much less barrier to entry than other consoles, with some exploits requiring nothing more than a Wii and an internet connection. Make sure you install [BootMii](bootmii) and [Priiloader](priiloader) to protect yourself from bricks!

### I got error code XXXXXX, how to fix it?
In order to check what the reason for the error is, please visit the [Wiimmfi error page](https://wiimmfi.de/error). More common errors have fixes listed below:

#### Error 051330/51330

Run an Internet connection test by going to `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Error 220602

##### For RiiConnect24 Users

You are using the old DNS server for RiiConnect24. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### For non-RiiConnect24 Users

Your Primary DNS server is incorrect or not working.<br> This can also happen if you use a proxy server and it is down.

#### Error 107304

##### For RiiConnect24 Users

If you get this error or you see Nintendo's User Agreement without RiiConnect24's logo, that means your ISP (Internet Service Provider) or network is blocking the use of RC24 DNS. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 will still work without it. You can join [the RiiConnect24 Discord server](https://discord.gg/rc24) (recommended) or [e-mail us at support@riiconnect24.net](mailto:support@riiconnect24.net) for assistance.

##### For non-RiiConnect24 Users

If you get this error, the DNS server you chose or your internet as a whole is having issues. Try again later.

#### FORE000006

If you get error FORE000006, your Wii's clock is probably set incorrectly. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. If this still fails, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and put it back in. Then, reset the Wii's clock.

### How can I remove parental controls?
The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls.

### I think my Wii is bricked, or something is seriously wrong, what do I do?
See [this](bricks) page.

## Storage Device FAQ

If you are using the BlueBomb, str2hax, or FlashHax exploits, you do not need an SD card.
{: .notice--info}

FAT32 is the recommended file system for SD cards, see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) on formatting instructions.<br> For USB devices, FAT32 is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size. WBFS was a previously used file system for Wii game backups - today, it is outdated and should not be used.
{: .notice--info}

For stock Wii Menu versions lower than 4.0, a limitation in the Wii System Software prevents SD cards bigger than 2GB from being used.<br> For stock Wii Menu versions 4.0 or higher, this limitation is removed and SD cards of various sizes can be used.<br> Your highest chance of getting a working SD card on any Wii is at sizes 32GB or lower, but success has been reported various times on cards ranging up to 256GB.
{: .notice--warning}

For USB devices, flash drives have a high rate of not working on Wii consoles. Instead, it is recommended to use a USB hard drive or solid state drive.
{: .notice--warning}

### General Storage Guidelines

When considering buying or using an SD card or USB device, it is worth considering the things that you will be using either storage medium for. Different uses can take up varying amounts of space, some common examples of which are shown below:

+ Wii Backups: The largest Wii games (dual-layer DVD) are up to sizes of 9GB, more normal games are closer to sizes of 4GB or lower. The average user for a Wii backup device would probably want 128GB or more of space.
+ GameCube Backups: The largest GameCube games reach sizes of up to 1.3GB. ISO sizes are normally this size regardless of the game, but can be considerably lower if NKIT is used as a format instead. The average user for a GameCube backup device would probably want 64GB or more of space.
+ General Emulation: There are a wide variety of emulators available on the Wii. Because the size of different game ROMs differ dramatically, the average user for an emulation drive would probably want 32GB or more of space.
+ General Homebrew: For homebrew, the average user would want 2GB or more of space.
+ NAND Backups: For backing up your NAND with BootMii, the average user would need a minimum of 512MB of free space, but sizes of 1GB or more are recommended.
+ You will need an SD card with at least 128MB to run an exploit.

### Buying SD Cards

SD cards 2TB or larger currently do not exist, anyone attempting to sell you one is trying to rip you off.
{: .notice--danger}

When buying SD cards, it is generally recommended that you stick to well-known brands the more expensive and larger capacity that you get. While you can buy a generic 2GB SD card and most likely be safe, the same cannot be said for something like a 512GB SD card. General current pricing for SD cards is around 10-20 USD for 256GB and below, whereas 512GB is around 40 USD. When buying off of Amazon, make sure that your card is either `Sold by/Shipped by Amazon` or `Sold by [brand], Shipped by Amazon`. Be wary when buying storage on eBay.

Recommended brands:
+ Samsung (EVO Select, EVO Plus, PRO Plus)
+ SanDisk (Extreme, Ultra, etc)
+ Lexar (E-Series, Professional)
+ Silicon Power ("3D NAND" cards, higher capacity usually better value)
+ PNY (Elite, Elite-X, etc)

### Buying USB Devices - Hard Drives

When buying USB hard drives, there are only three existing present-day HDD manufacturers: Western Digital, Seagate, and Toshiba. Any and all other hard drive companies are defunct and have either went bankrupt, or were absorbed by the three aformentioned companies. With that said, if you have an extra hard drive lying around made by another company, it should still work! Hard drive technology has remained largely the same within the past 10 or so years. Just make sure to check the S.M.A.R.T data to ensure that the drive isn't failing before you throw all of your data on there.

For hard drive sizing, 2.5 inch should work fine running off of USB power alone on a Wii; 3.5 inch consumes much more power and will almost always need an external power adapter. Make sure to plan for this when determining what you want to do with an external drive.

As for your choices in shopping, this largely comes down to three different scenarios:

+ Buying a new external hard drive from scratch: New external drives come brand new around 60 USD for 2TB, 50 USD for 1TB, around 30 USD for sizes lower than 1TB. Whatever you do, try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
+ Buying a new hard drive, and a new enclosure: New hard drives are decently cheaper than buying a pre-made hard drive, and you can buy an enclosure to house this new hard drive. 2.5 inch enclosures are normally powerable off of USB alone, while 3.5 inch enclosures almost always come with an external adapter for power. An example price is buying a 500GB Western Digital drive and a 2.5 inch drive enclosure off of Amazon - all in all, about 30 USD.
+ Buying an enclosure for an already existing hard drive: If you already have a hard drive laying around, why not put it in an enclosure and use it for your Wii? Enclosures can be found for prices ranging between 10 to 20 USD off of Amazon, as long as you have a drive to supply it with.

### Buying USB Devices - Solid State Drives

For the purpose of using a drive with a Wii, external SSDs are often more expensive than conventional hard drives for no visible gain in speed on a Wii (the console only supports up to USB 2.0 data speeds). If you would like to buy one or already have one lying around, it's an option, but generally it's recommended to just go for a hard drive if you don't already have one.
{: .notice--warning}
