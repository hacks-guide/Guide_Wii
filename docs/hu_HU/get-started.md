# Kezdés

Ez a Wii-hoz és a Wii mini-hez listázott exploit a HackMii telepítőhöz fog vinni. A HackMii telepítő telepíteni fogja a Homebrew Channel-t (ami homebrew-ok indítására szolgál) valamint a BootMii-t (NAND mentések készítéséhez, helyreállításához használt), függően a konzolodtól.

A Wii mód a Wii U-n kicsit más exploitálási folyamattal rendelkezik, és nem fogja elindítani a HackMii telepítőt. E helyett a Wii módot támadod majd a Wii U menün keresztül a leírt folyamattal.

::: danger

**NAND mentés nyilatkozat**

Erősen ajánlott, hogy legyen egy használható SD kártyád vagy USB drive-od kéznél, hogy meg tudd csinálni a NAND mentést. Az alábbi tábla bemutatja, mit tudsz haználni a konzolodon:

|              KONZOL             | USB DRIVE | SD KÁRTYA |
| :-----------------------------: | :-------: | :-------: |
|       Wii / Family Edition      |     ✅     |     ✅     |
| Wii U (vWii) |     ⛔     |     ✅     |
|             Wii mini            |     ✅     |     ⛔     |

:::

## Szoftmoddolt már a Wii-od?

Ha van egy Wii-od vagy egy Wii mini-d ami már szoftmoddoltés szeretnéd frissíteni a konfigurációt, kövesd [ezt](hackmii) az útmutatót a HackMii telepítő indításához a Homebrew Channel-ből, or Priiloader-ből. Lehetséges jelei annak, hogy a konzolod már softmoddolt:

- A Homebrew Channel látható a Wii menüben
- Más homebrew mint például USB betöltők és emulátorokláhatóak a Wii menüben
- Meg tudod nyitni a [Priiloader](priiloader#section-iii---entering-priiloader)-t amikor megpróbálod
- A BootMii látható a konzol indulásakor
- Már van egy SD kártya Wii-odban, ami tartalmaz olyan mappákat, mint az `apps`

## Azonosítsd a konzol verziód

<!--@include: @/_include/identify-console.html -->

## Válaszd ki az exploitod

Válaszd ki azt az exploitot, ami a konzolodnak és a helyzetednek leginkább megfelel.

<!--@include: @/_include/exploit-select.html -->
