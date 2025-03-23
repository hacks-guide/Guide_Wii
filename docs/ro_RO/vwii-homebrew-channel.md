# Ghid de modificare vWii

Această pagină vă va ghida prin procesul de modificare a vWii-ului.

## Preparație

::: info

Dacă ați modat Wii U în trecut, puteți folosi același card SD pentru acest proces.

:::

::: info

If you haven't already, make sure you did a [NAND backup](https://wiiu.hacks.guide/#/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)

:::

## Requirements

- Un Wii U modificat
- [Aroma Environment]](https://aroma.foryour.cafe/)
- Ultima versiune a [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller).
- (Opțional) [Plugin-ul Enhanced vWii Aroma](https://hb-app.store/wiiu/evWii)

::: warning

Dacă plugin-ul evWii Aroma nu este instalat și aplicația homebrew se blochează, singurul mod de a închide Wii U este prin tragerea cordonului electric. În unele cazuri, tragerea cordonului electric poate cauza o corupție de memorie, astfel încât este foarte bine recomandat pentru ca plugin-ul să fie instalat.

:::

## Instructions

### Secțiunea I - Fișiere

1. Introduceți cardul SD al Wii U în PC-ul tău.
2. Copiați conținutul fișierului `CompatTitleInstaller.zip` în directorul principal al cardului SD.
3. Copiați conținutul fișierului `evWii.zip` în directorul principal al cardului SD.

### Secțiunea II - Instalarea Homebrew Channel

1. Porniți în [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup).
2. Lansați vWii Compat Installer pe meniul Wii U.
3. Apasă `A` pentru a instala Homebrew Channel și așteptați până când vedeți `Install succeeded`. Apoi apasă butonul HOME pentru a reveni la meniul Wii U.
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
Nu vă confundați cu folderul `apps` din folderul `wiiu` și folderul `apps` de pe directorul principal al cardului SD.

::: tip

Continue to [Installing Priiloader](priiloader)

:::
