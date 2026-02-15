# Ghid de modificare vWii

Această pagină vă va ghida prin procesul de modificare a vWii-ului.

## Preparație

::: info

Dacă ați modat Wii U în trecut, puteți folosi același card SD pentru acest proces.

:::

::: info

If you haven't already, make sure you did a [NAND backup](https://wiiu.hacks.guide/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)

:::

## Requirements

- Un Wii U modificat
- [Aroma Environment]](https://aroma.foryour.cafe/)
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)
- (Optional) The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`)

::: warning

Dacă plugin-ul evWii Aroma nu este instalat și aplicația homebrew se blochează, singurul mod de a închide Wii U este prin tragerea cordonului electric. În unele cazuri, tragerea cordonului electric poate cauza o corupție de memorie, astfel încât este foarte bine recomandat pentru ca plugin-ul să fie instalat.

:::

## Instructions

### Secțiunea I - Fișiere

1. Introduceți cardul SD al Wii U în PC-ul tău.
2. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
3. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
4. Re-insert your SD card into the Wii U.

### Secțiunea II - Instalarea Homebrew Channel

1. Boot into [Aroma](https://wiiu.hacks.guide/aroma/finalizing-setup).
   - If you set up [Aroma autobooting](https://wiiu.hacks.guide/aroma/autobooting), Aroma will already be running when you turn on your console.
2. Launch the vWii Compat Installer app from the Wii U menu.
3. Apasă `A` pentru a instala Homebrew Channel și așteptați până când vedeți `Install succeeded`. Apoi apasă butonul HOME pentru a reveni la meniul Wii U.
   - If the HOME button doesn't work, you can safely power off by holding down the power button on your console, and then turn it back on.
4. Lansează vWii (pictograma Wii Menu).
   - Dacă instalarea a reușit, ar trebui să vedeți Homebrew Channel în meniul Wii.

## Citire necesară

Acum puteți folosi Homebrew Channel pentru a porni aplicațiile homebrew Wii.

Notă: Când instalezi aplicații homebrew pe cardul tău SD sau unitatea ta USB, structura dosarului tău ar trebui să arate astfel:

```
💾 SD Card
 ┗ 📁 apps
   ┣ 📁 <AppName1>
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 <AppName2>
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1` și `AppName2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.
Note that the `apps` folder inside of the `wiiu` folder (for Wii U homebrew apps) and the `apps` folder on the root of the SD card (for Wii homebrew apps) are distinct.

::: tip

Continue to [Installing Priiloader](priiloader)

:::
