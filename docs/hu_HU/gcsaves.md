# GameCube mentések

Ez egy teljes útmutató arról, hogy hogyan kezeld a GameCube mentéseidet.

::: info

Bármilyen GameCube periféria a Family Edition Wii vagy Wii mini esetén forrasztást igényel a GameCube portjain és/vagy memória kártya slotokon.

:::

## Egy mentés fájl (.gci fájl) másolása egy Physical Memory Card-ra

### Követelmények

- Egy Wii GameCube portokkal
- Egy SD kártya vagy USB drive
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### Útmutató

#### Letöltés

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### Visszaállítás

1. Csatlakoztasd a fizikai memória kártyádat a Slot A-hoz vagy a Slot B-hez.

2. Válaszd ki az eszközt, amiről helyreállítani szeretnél.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. A GCMM-ben nyomd meg az X gombot a GameCube kontrolleren vagy a + gombot a Wii távirányítón.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Válaszd ki a mentést, amit helyreállítani szeretnél. Ha több mentést szeretnél visszaállítani, akkor az összes mentés visszaállításához nyomd meg az R gombot a GameCube kontrolleren vagy az 1-et a Wii távirányítón.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

## Egy mentés fájl (.gci fájl) másolása egy SD kártyára vagy egy USB drive-ra a Physical Memory Card-ról

### Követelmények

- Egy Wii GameCube portokkal
- Egy SD kártya vagy USB drive
- [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

#### Letöltés

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### Mentés

1. Csatlakoztasd a fizikai memória kártyádat a Slot A-hoz vagy a Slot B-hez.

2. Válaszd ki az eszközt, amire menteni szeretnél.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. A GCMM-ben nyomd meg az Y gombot a GameCube kontrolleren vagy a - gombot a Wii távirányítón.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Válaszd ki a mentést, amit másolni szeretnél. Ha több mentést is szeretnél másolni, nyomj R gombot a Gamecube controlleren vagy 1-et a Wii remote-on az összes játék mentésének másolásához.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Ha a mentés elkészült nyomj tetszőleges gombot.

## A Physical Memory Card másolása egy Emulált Memória kártyára (.raw filel)

### Követelmények

- Egy Wii GameCube portokkal
- Egy SD kártya vagy USB drive
- [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

#### Letöltés

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### A .raw dumpolása

1. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.

2. Válaszd ki az eszközt, amire menteni szeretnél.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Nyomd meg az L és Y gombot egyszerre a a GameCube kontrolleren vagy B és - gombot egyszerre a Wii remote-on a .raw fájlod mentéséhe és válaszd ki a slot-ot amelyikben a memória kártyád van.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. Amikor a dump megtörtént, nyomj tetszőleges gombot a folytatáshoz. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Egy emulált memória mentés visszaállítása egy fizikai memória kártyára

### Követelmények

- Egy Wii GameCube portokkal
- Egy SD kártya vagy USB drive
- [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.

4. Válaszd ki az eszközt, amiről helyreállítani szeretnél.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. Nyomd meg az L és X gombot egyszerre a a GameCube kontrolleren vagy B és + gombot egyszerre a Wii remoteon.

6. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. Helyre kell állítania a .raw fájlt a memória kártyádra. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

## Mentések átvitelek két fizikai memória kártya között

### Követelmények

- Egy Wii GameCube portokkal
- Legalább 2 fizikai memória kártya

### Útmutató

1. Csatlakoztasd mindkettő kártyát a Wii-hez.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

   ![](/images/homebrew/gcsaves/sysmenu.jpg)

   ![](/images/homebrew/gcsaves/settings.jpg)

   ![](/images/homebrew/gcsaves/data-management.jpg)

   ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
