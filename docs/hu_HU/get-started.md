# Kezdés

::: info

Javasoljuk, hogy a kezdeti hackelési folyamat után legalább egy SD-kártya legyen kéznél, mivel ez lehetővé teszi, hogy a BootMii segítségével NAND biztonsági mentést készíts, és sokféle homebrew előnyeit vehesd igénybe.

:::

Ez a Wii-hoz és a Wii mini-hez listázott exploit a HackMii telepítőhöz fog vinni. A HackMii telepítő telepíteni fogja a Homebrew Channel-t (ami homebrew-ok indítására szolgál) valamint a BootMii-t (NAND mentések készítéséhez, helyreállításához használt), függően a konzolodtól.

A Wii mód a Wii U-n kicsit más exploitálási folyamattal rendelkezik, és nem fogja elindítani a HackMii telepítőt. E helyett a Wii módot támadod majd a Wii U menün keresztül a leírt folyamattal.

## Szoftmoddolt már a Wii-od?

Ha van egy Wii-od vagy egy Wii mini-d ami már szoftmoddoltés szeretnéd frissíteni a konfigurációt, kövesd [ezt](hackmii) az útmutatót a HackMii telepítő indításához a Homebrew Channel-ből, or Priiloader-ből.

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
