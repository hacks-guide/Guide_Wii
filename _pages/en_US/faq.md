---
title: "FAQ and Troubleshooting"
---

{% include toc title="Table of Contents" %}

### What are the limitations in vWii modding?
The following is a list of things that can potentially **BRICK** your vWii (don't do these things!):

* Installing IOS for a Wii console on vWii.
* Installing Wii menu themes not formatted correctly for vWii and/or your region.
* Installing BootMii.
* Failure during the install of crucial system/IOS titles (e.g. power outage).
* Modifying the vWii NAND without knowing what you are doing.

### What are the SD card requirements and/or recommendations?
You will need an SD card with at least 128MB to run an exploit, unless you are running [BlueBomb](bluebomb), [str2hax](str2hax), or [FlashHax](flashhax).

To store homebrew applications, it is recommended that you use an SD card at least 2GB in size.

### How risky is hacking my console?
Not very risky to be honest, depending on your console. The Wii requires much less barrier to entry than other consoles, with some exploits requiring nothing more than a Wii and an internet connection. As long as you follow the general advice laid out [here](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### I got error code XXXXXX, how do I fix it?
In order to check what the error means, please visit the [Wiimmfi error page](https://wiimmfi.de/error). More common errors have fixes listed below:

#### Error 01530/51330

Run an Internet connection test by going to `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Error 220602

##### For RiiConnect24 Users

You are using the old DNS server for RiiConnect24. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### For non-RiiConnect24 Users

Your Primary DNS server is incorrect or not working.<br>
This can also happen if you use a proxy server and it is down.

#### Error 107304

##### For RiiConnect24 Users

If you get this error or you see Nintendo's User Agreement without RiiConnect24's logo, that means your ISP (Internet Service Provider) or network is blocking the use of RC24 DNS. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 will still work without it. Or, you can use the [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program.

##### For non-RiiConnect24 Users

If you get this error, the DNS server you chose or your internet as a whole is having issues. Try again later.

#### FORE000006

If you get error FORE000006, your Wii's clock is probably set incorrectly. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. If this still fails, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and put it back in. Then, reset the Wii's clock.

### How can I remove parental controls?
The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls.

### I think my Wii is bricked, or something is seriously wrong, what do I do?
See [this](bricks) page.
