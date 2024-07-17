---
title: "GameCube mentések"
---

{% include toc title="Tartalomjegyzék" %}

Ez egy teljes útmutató arról, hogy hogyan kezeld a GameCube mentéseidet.

Bármilyen GameCube periféria a Family Edition Wii vagy Wii mini esetén forrasztást igényel a GameCube portjain és/vagy memória kártya slotokon.
{: .notice--info}

## Egy mentés fájl (.gci fájl) másolása egy Physical Memory Card-ra

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

Ha 100% teljesítettségű mentéseket keresel, [itt](https://gamefaqs.gamespot.com/) megtalálhtod őket.
{: .notice--info}

Ha játékmentés exploitokat keresel, a [Swiss](https://github.com/emukidid/swiss-gc/releases)-be bootoláshoz, a listájukat megtalálhatod [itt](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).
{: .notice--info}

### Útmutató

#### Letöltés

1. Csomagold ki a GCMM-et, és tedd az SD-kártyán vagy USB-meghajtón lévő `apps` mappába.
1. Helyezd a `.gci` fájlt az SD-kártya vagy USB-meghajtó gyökerében lévő `MCBACKUP` nevű mappába.
1. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### Visszaállítás

1. Csatlakoztasd a fizikai memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Válaszd ki az eszközt, amiről helyreállítani szeretnél.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. A GCMM-ben nyomd meg az X gombot a GameCube kontrolleren vagy a + gombot a Wii távirányítón.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Válaszd ki a mentést, amit helyreállítani szeretnél. Ha több mentést szeretnél visszaállítani, akkor az összes mentés visszaállításához nyomd meg az R gombot a GameCube kontrolleren vagy az 1-et a Wii távirányítón.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

## Egy mentés fájl (.gci fájl) másolása egy SD kártyára vagy egy USB drive-ra a Physical Memory Card-ról

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

#### Letöltés

1. Csomagold ki a GCMM-et, és tedd az SD-kártyán vagy USB-meghajtón lévő `apps` mappába.
1. Helyezd a `.gci` fájlt az SD-kártya vagy USB-meghajtó gyökerében lévő `MCBACKUP` nevű mappába.
1. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### Mentés

1. Csatlakoztasd a fizikai memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Válaszd ki az eszközt, amire menteni szeretnél.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. A GCMM-ben nyomd meg az Y gombot a GameCube kontrolleren vagy a - gombot a Wii távirányítón.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Válaszd ki a mentést, amit másolni szeretnél. Ha több mentést is szeretnél másolni, nyomj R gombot a Gamecube controlleren vagy 1-et a Wii remote-on az összes játék mentésének másolásához.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Ha a mentés elkészült nyomj tetszőleges gombot.

## A Physical Memory Card másolása egy Emulált Memória kártyára (.raw filel)

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

#### Letöltés

1. Csomagold ki a GCMM-et, és tedd az SD-kártyán vagy USB-meghajtón lévő `apps` mappába.
1. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### A .raw dumpolása

1. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Válaszd ki az eszközt, amire menteni szeretnél.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomd meg az L és Y gombot egyszerre a a GameCube kontrolleren vagy B és - gombot egyszerre a Wii remote-on a .raw fájlod mentéséhe és válaszd ki a slot-ot amelyikben a memória kártyád van.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Amikor a dump megtörtént, nyomj tetszőleges gombot a folytatáshoz. Az `MCBACKUP` nevű mappában kell lennie az SD kártyád vagy az USB drive-od gyökerében.

## Egy emulált memória mentés visszaállítása egy fizikai memória kártyára

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

1. Ha egy Dolphin mentést próbálsz helyreálltani, menj a `File` fülre a Dolphin-ba és válaszd a user mappa megnyitását, a GC mappa megnyitását, majd keresd meg a `.raw` fájlt.
1. Ha egy Nintendont emulált memória kártya mentést próbálsz helyreállítani, akkor navigálj a `saves` mappába az SD kártyád vagy USB drive-od gyökerében.
1. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Válaszd ki az eszközt, amiről helyreállítani szeretnél.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Nyomd meg az L és X gombot egyszerre a a GameCube kontrolleren vagy B és + gombot egyszerre a Wii remoteon.
1. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Helyre kell állítania a .raw fájlt a memória kártyádra. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

## Mentések átvitelek két fizikai memória kártya között

### Követelmények

* Egy Wii GameCube portokkal
* Legalább 2 fizikai memória kártya

### Útmutató

1. Csatlakoztasd mindkettő kártyát a Wii-hez.
1. A System menüből navigálj a `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube` opcióhoz.

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. Keresd meg a mentést amit szeretnél, válaszd ki majd válaszd a `Move or Copy` opciót.

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
