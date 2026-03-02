# Kezdés

::: info

It is recommended to at least have an SD card on hand after the initial hack process, as this will enable you to make a NAND backup using BootMii and take advantage of more homebrew.

:::

The exploits listed for the Wii and Wii mini will bring you to the HackMii installer. The HackMii installer will install the Homebrew Channel (used for lauching homebrew) as well as BootMii (used for creating and restoring NAND backups), depending on your console.

Wii mode on Wii U has a slightly different exploitation process, and will not launch the HackMii installer. Instead, you will exploit Wii mode through the Wii U menu and proceed as instructed.

## Is your Wii already softmodded?

If you have a Wii or Wii mini that is already softmodded and you would like to update your setup, follow [this](hackmii) guide to launch the HackMii installer from the Homebrew Channel, or Priiloader.

## Azonosítsd a konzol verziód

<!--@include: @/_include/identify-console.html -->

## Válaszd ki az exploitod

Válaszd ki azt az exploitot, ami a konzolodnak és a helyzetednek leginkább megfelel.

| Konzol változat                 | Javasolt exploit                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wii/Wii Family Edition          | <hr>Ha tudsz Windows PC-t használni:<br> Automatikus telepítés — [Exploit ModMii-vel](modmii)<br><hr> Ha tudsz SD kártyát használni:<br> Manuális telepítés — [Exploit Wilbrand-dal](wilbrand)<br><hr> Ha nem tudsz SD kártyát használniI:<br> Manuális telepítés — [Exploit str2hax-szal](str2hax)<br><hr>                                            |
| Wii mini                        | <hr>Manuális telepítés — [Exploit Bluebomb-bal](bluebomb)<hr>                                                                                                                                                                                                                                                                                          |
| Wii U (vWii) | <hr>Ha tudsz Windows PC-t használni:<br> Automatikus telepítés — [Exploit ModMii-vel](modmii)<br><hr>Ha nem moddoltad még a Wii U-t, de akarod:<br> Manuális telepítés — [A Wii U exploitolása](https://wiiu.hacks.guide)<br><hr> Ha moddoltad már a Wii U-t vagy nem akarod:<br> Manuális telepítés — [A vWii exploitolása](wiiu-nand-dumper)<br><hr> |
| Dolphin Emulátor                | <hr>Manuális telepítés — [Homebrew Channel a Dolphin-ra](homebrew-dolphin)<hr>                                                                                                                                                                                                                                                                         |

## Alternatív metódusok

Ha lehetséges, kövesd a fenti módszereket.

Ha az ajánlott lehetőség nem működik, vagy ha kíváncsi vagy más exploitokra, nézd meg a [Legacy Exploits](legacy-exploits) oldalt.
