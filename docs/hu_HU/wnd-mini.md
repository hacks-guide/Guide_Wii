# Wii U NAND Dumper

Ez az útmutató bemutatja, hogy hogyan dumpolhatod a Wii mini NAND-ját, a nélkül, hogy forrasztanod kellene rá egy SD kártya foglalatot. Ezt [nitr8](https://gbatemp.net/members/nitr8.72581/) miatt lehetséges.

::: info

Támogatásért (angolul) a Wii mini hacking-gel kapcsolatosan csatlakozz a [Wii mini Hacking](https://discord.gg/6ryxnkS)-hez Discord-on.

:::

::: info

Ha van Wii-od vagy Wii mini-d egy forrasztott SD kártya foglalattal [kövesd ezt az útmutatót](bootmii) a NAND-od dumpolásához.

:::

::: info

Nincs lehetőséged a NAND mentésed visszaálltására ezen a módon hardmod nélkül.

:::

## Követelmények

- Egy Wii
- Egy USB drive
- [Simple IOS Patcher for Wii mini](http://www.mediafire.com/file/7k141mu1whqzwdp/SimpleIOSPatcher_Mini.zip/file)
- [RealWnD for Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

## Lépések

### I. rész - Az IOS 36 dumpolása és patchelése

1. Töltsd le a Simple IOS Patcher for Wii mini-t és a RealWnD for Wii mini-t és csomagold ki mindkét fájlt az USD drive-od gyökerébe.

2. Csatlakoztasd az USB drive-od a Wii mini-hez, majd indítsd el a Simple IOS Patcher for Wii mini-t a Homebrew Channel-ből.

3. Automatikusan detektálnia kell az IOS 36 verziódat, és megkezdi a patchelését a slot 236-ba. Továbbá létrehozza az IOS 236 wad fájlt az USB drive-odon.

### II. rész - A NAND dumpolása

1. Indítsd el a RealWnD for Wii mini-t a Homebrew Channel-ből.
2. Automatikusan detektálnia kell az IOS 236 verzióját a Wii mini-dnek, és végrehajt néhány futásidejű patchet a NAND-od dumpolásának elkezdéséhez.
3. Ha elkészült, 3 új fájlod lesz az USB drive-odon:

```shell
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

A `WiiFlash_n_ECC.img` a te NAND képfájlod. A másik két fájl "hiba" adat és felesleges.

### III. rész - Wii mini kulcsok dumpolása

1. Indítsd el az xyzzy mod-t a Homebrew Channel-ről.
2. Válaszd az `USB device` opciót
   - El kell kezdenie összeszednie a konzol információid.
3. Ha kész nyom tetszőleges gombot a kilépéshez.

   - 5 új fájlod lesz az USB drive-odon:

   ```shell
   bootmii_keys.bin
   device.cert
   keys.txt
   otp.bin
   seeprom.bin
   ```

Most csak a `bootmii_keys.bin` fájl szükséges.

### IV. rész - Opcionális: Töltsd fel a NAND-od a Dolphin Emulátorba

1. Csatlakoztasd az USB drive-od a PC-dhez.
2. Keresd meg a `bootmii_keys.bin` fájlt az USB drive-odon és nevezd át `keys.bin`-re
3. Nyisd meg a Dolphin Emulátort a PC-den.
4. Válaszd a Tools fület és a lenyíló menüben menj a "manage NAND" opcióhoz, majd válaszd az "Import BootMii NAND Backup" menüpont.
5. Válaszd ki a lenyilő menüt jobbra a fájlnév sáv mellett, mjajd válaszd az "All Files" opciót.
6. Keresd meg a `WiiFlash_n_ECC.img` fájlt és válaszd az "open"-t.
7. Egy másik ablak fog felugrani, a kulcsok (keys) után érdeklődve. Válaszd ki a `keys.bin`-t majd az "open"-t.

::: info

Ha Wii játékokat online játszanál a dolphin-on belülről, a Wii mini NAND-oddal, kövesd [ezt az útmutatót](https://dolphin-emu.org/docs/guides/wii-network-guide/) az online kapcsolathoz szükséges fájlok beszerzéséhez, még akkor is ha a legutolsó béta vagy fejlesztői verzióját használod a dolphin emulátornak.

:::

---

::: tip

[Folytatás a Priiloader telepítésével](priiloader)

:::

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
