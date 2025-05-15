# Kezdés

Ha a Wii már rendelkezik softmoddal, és szeretnéd frissíteni a softmodokat, kövesd [ezt](hackmii) az útmutatót a frissítéshez.

Az itt felsorolt exploitok mindegyike különböző módszer ugyanannak a végeredménynek az elérésére (a HackMii telepítőjéhez való eljutás).

::: info

Javasoljuk, hogy a kezdeti hackelési folyamat után legalább egy SD-kártya legyen kéznél, mivel ez lehetővé teszi, hogy a BootMii segítségével NAND biztonsági mentést készíts, és sokféle homebrew-t telepíts.

:::

## Azonosítsd a konzol verziód:

<!--@include: @/_include/identify-console.html -->

## Válaszd ki az exploitod

Válaszd ki azt az exploitot, ami a konzolodnak és a helyzetednek leginkább megfelel.

| Konzol változat                 | Javasolt exploit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wii/Wii Family Edition          | Ha tudsz Windows PC-t használni:<br> Automatikus telepítés: Tovább a [ModMii](modmii)-hoz<br> Ha tudsz SD kártyát használni:<br> Kézi telepítés: Tovább a [Wilbrand](wilbrand)-hoz<br> Ha nem tudsz SD kártyát használni:<br> Kézi telepítés: Tovább az [str2hax](str2hax)-hoz<br>                                                                                                                     |
| Wii mini                        | Használd a [Bluebomb](bluebomb)-ot                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Wii U (vWii) | Ha tudsz egy Windows PC-t használni:<br> Automatikus telepítés: Tovább a [ModMii-hez](modmii)<br>Ha már moddoltad a Wii U-d: <br>Tovább a [vWii moddolásához](vwii-homebrew-channel)<br> Ha még nem moddoltad a Wii U-d, de szeretnéd:<br>[Tovább a Wii U moddolásához](https://wiiu.hacks.guide)<br> Ha nem szeretnéd moddolni a Wii U-d:<br> Tovább [A vWii moddolása a Wii U moddolása nélkül](wiiu-nand-dumper)-re |
| Dolphin Emulátor                | Tovább a [Homebrew Channel Dolphin-onra](homebrew-dolphin)                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Alternatív metódusok

Ha lehetséges, kövesse a fenti módszert.

Ha az ajánlott lehetőség nem működik, vagy ha kíváncsi vagy más exploitokra, nézd meg a [Legacy Exploits](legacy-exploits) oldalt.
