# Wii U NAND Dumper

Ez az útmutató bemutatja, hogy hogyan dumpolhatod a Wii mini NAND-ját, a nélkül, hogy forrasztanod kellene rá egy SD kártya foglalatot. This was made possible by [nitr8](https://gbatemp.net/members/nitr8.72581/).

::: info

For support (in English) with Wii mini hacking, join [Wii mini Hacking](https://discord.gg/6ryxnkS) on Discord.

:::

::: info

If you have a Wii or a Wii mini with an SD card slot soldered, follow [this tutorial](bootmii) to dump your NAND.

:::

::: info

Nincs lehetősége a NAND mentésed visszaálltására ezen a módon hardmod néékül.

:::

## Követelmények

- Egy Wii
- Egy USB drive
- [Simple IOS Patcher for Wii mini](https://oscwii.org/library/app/SimpleIOSPatcher_Mini)
- [RealWnD for Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

## Útmutató

### I. rész - Az IOS 36 dumpolása és patchelése

1. Töltsd le a Simple IOS Patcher for Wii mini-t és a RealWnD for Wii mini-t és csomagold ki mindkét fájlt az USD drive-od gyökerébe.

2. Csatlakoztasd az USB drive-od a Wii mini-hez, majd indítsd el a Simple IOS Patcher for Wii mini-t a Homebrew Channel-ből.

3. Automatikusan detektálnia kell az IOS 36 verziódat, és megkezdi a patchelését a slot 236-ba. Továbbá létrehozza az IOS 236 wad fájlt az USB drive-odon.

### II. rész - A NAND dumpolása

1. Indítsd el a RealWnD for Wii mini-t a Homebrew Channel-ből.
2. Automatikusan detektálnia kell az IOS 236 verzióját a Wii mini-dnek, és végrehajt néhány futásidejű patchet a NAND-od dumpolásának elkezdéséhez.
3. Ha elkészült, 3 új fájlod lesz az USB drive-odon:

```
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

The `WiiFlash_n_ECC.img` is your NAND image. A másik két fájl "hiba" adat és felesleges.

### III. rész - Wii mini kulcsok dumpolása

1. Indítsd el az xyzzy mod-t a Homebrew Channel-ről.
2. Select `USB device`
   - El kell kezdenie összeszednie a konzol információid.
3. Ha kész nyom tetszőleges gombot a kilépéshez.

   - 5 új fájlod lesz az USB drive-odon:

   ```
   bootmii_keys.bin
   device.cert
   keys.txt
   otp.bin
   seeprom.bin
   ```

For now, only the `bootmii_keys.bin` file is required.

### IV. rész - Opcionális: Töltsd fel a NAND-od a Dolphin Emulátorba

1. Csatlakoztasd az USB drive-od a PC-dhez.
2. Find the `bootmii_keys.bin` on your USB and rename it to `keys.bin`
3. Nyisd meg a Dolphin Emulátort a PC-den.
4. Válaszd a Tools fület és a lenyíló menüben menj a "manage NAND" opcióhoz, majd válaszd az "Import BootMii NAND Backup" menüpont.
5. Válaszd ki a lenyilő menüt jobbra a fájlnév sáv mellett, mjajd válaszd az "All Files" opciót.
6. Locate your `WiiFlash_n_ECC.img` file and select "open".
7. Egy másik ablak fog felugrani, a kulcsok (keys) után érdeklődve. Locate `keys.bin` and select "open".

::: info

If you would like to play Wii games online inside of dolphin with your Wii mini NAND, follow [this tutorial](https://dolphin-emu.org/docs/guides/wii-network-guide/) to retrive the files needed for online, even if you are already using the latest beta or development version of dolphin emulator.

:::

::: tip

Continue to [Open Shop Channel Installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
