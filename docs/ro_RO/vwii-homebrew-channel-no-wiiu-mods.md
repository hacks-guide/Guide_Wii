# Installing the Homebrew Channel

This page will guide you through the process of installing the Homebrew Channel to the vWii without modding the Wii U side.

## Instructions

### Section I - Booting into Aroma

1. Execute the web browser exploit as [previously explained](wiiu-nand-dumper) but this time, you will need to hold the X button to open the Environment Loader menu.
2. Once you are there, boot into the Aroma environment by selecting it inside the payload loader.

### Secțiunea II - Instalarea Homebrew Channel

1. Lansați vWii Compat Installer pe meniul Wii U.
2. Apasă `A` pentru a instala Homebrew Channel și așteptați până când vedeți `Install succeeded`. Apoi apasă butonul HOME pentru a reveni la meniul Wii U.
3. Lansează vWii (pictograma Wii Menu).
   - Dacă instalarea a reușit, ar trebui să vedeți Homebrew Channel în meniul Wii.

You may delete the `wiiu` folder on your SD card if you so choose.

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
Do not get confused with the `apps` folder inside of the `wiiu` folder and the `apps` folder on the root of the SD card.

::: tip

[Continue to installing Priiloader](priiloader)

:::
