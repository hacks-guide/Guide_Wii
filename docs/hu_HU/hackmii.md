# A HackMii Installer újraindítása

Ez az útmutató arra van, hogy ha szeretnéd újra futtatni a HackMii Installer-t, hogy frissítsd/újratelepítsd a Homebrew Channel-t vagy a BootMii-t.

::: info

Továbbá az is biztonságos hogy [újra csinálj](get-started) bármilyen exploitot, hogy visszakerülj a HackMii Installer-be.

:::

## Újraindítás a Homebrew Channel-lel

### Követelmények

- A Homebrew Channel
- Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Lépések

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
2. Csomagold ki a HackMii Installer v1.2-t az SD kártyád/USB drive-od `apps` mappájába.
   - Ha a mappa nem létezik, hozd létre.
3. Helyezd be az SD kártyád/USB-d a Wii-odba, majd indítsd el a `hackmii_installer_v1.2` appot a Homebrew Channel-ből.
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

A Preloader és Priiloader régi verziói úgy tűnik, hogy nem támogatják az SDHC (>2GB) kártyákat.

:::

### Lépések

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
2. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből az SD kártya vagy USB drive gyökerébe.
3. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
4. Lépj be a Priiloader a RESET gomb nyomva tartásával miközben bekapcsolod a Wii-t.
5. Menj a `Load/Install File` opcióhoz.
6. Navigálj a `boot.elf`-hez és nyomj `1`-et a betöltéséhez.

::: info

Ha a `Press (1) to continue` nem jelenik meg kb. 30 másodperc után a [HackMii Installer v1.0](https://bootmii.org/download/) segíthet.

:::

---

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
