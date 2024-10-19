# A HackMii Installer újraindítása

Ez az útmutató arra van, hogy ha szeretnéd újra futtatni a HackMii Installer-t, hogy frissítsd/újratelepítsd a Homebrew Channel-t vagy a BootMii-t.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Újraindítás a Homebrew Channel-lel

### Követelmények

- A Homebrew Channel
- Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Lépések

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
2. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
   - Ha a mappa nem létezik, hozd létre.
3. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
   - Az appnak nem lesz ikonja.

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::

## Újraindítás Priiloader-rel

### Követelmények

- egy Wii telepített Priiloader-rel (vagy Preloader-rel)
- Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Ahhoz, hogy ellenőrizd, hogy a Wii-odon van-e Priiloader, tartsd nyomva a RESET gombot bekapcsoláskor.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Lépések

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
2. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
3. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
4. Lépj be a Priiloader a RESET gomb nyomva tartásával miközben bekapcsolod a Wii-t.
5. Go to `Load/Install File`.
6. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
