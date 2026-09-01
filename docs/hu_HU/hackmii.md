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

## Újraindítás BootMii-vel

### Követelmények

- Egy Wii telepített BootMii-vel
- Egy FAT32/MS-DOS-ra formázott SD kártya
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

A Wii remote-od nem fog működni a BootMii-ben. Helyette a `POWER` gombot kell használnod a kurzor motgatásához és a `RESET` gombot egy ikon kiválasztásához. Alternatívaként használj a BootMii irányításához egy GameCube Controller-t a Port 1-be dugva.

:::

::: warning

Ha már el tudod érni a BootMii-t IOS-en keresztül, általában könnyebb a fenti rész követése.

:::

### Lépések

1. Csatlakoztasd az SD kártyád a PC-dhez.
2. Másold a `bootmini.elf` fájlt a HackMii Installer v1.2 `.zip`-ből az SD kártyád gyökerébe.
3. Helyezd be az SD kártyád a Wii-odba.
4. Lépj be a BootMii a következők valamelyikével:
   - Ha boot2-ként telepített, indítsd újra a konzolt.
   - Ha IOS-ként telepített vagy a BootMii nem elérhető újraindítással, indítsd el a Priiloader-rel vagy a Homebrew Channel-lel.
5. Navigálj az SD kártya ikonhoz és nyomj `RESET` gombot hogy belépj az SD kártya navigáció menübe.
6. Navigálj a `bootmini.elf`-hez és nyomj `RESET` gombot a HackMii installer betöltéséhez.

::: tip

Ha a `Press (1) to continue` nem jelenik meg kb. 30 másodperc után a [HackMii Installer v1.0](https://bootmii.org/download/) segíthet.

:::

---

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

Most, hogy a HackMii Installer-ben vagy telepítheted a Homebrew Channel-t és a konzolodtól függően a BootMii-t.

:::
