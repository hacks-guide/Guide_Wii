---
title: "GameCube mentések"
---

{% include toc title="Tartalomjegyzék" %}

This is a full guide on how to manage your GameCube saves.

Use of any GameCube peripheral with a Family Edition Wii or Wii mini require soldering on GameCube ports and/or memory card slots.
{: .notice--info}

## Uploading an Individual Save (.gci File) to a Physical Memory Card

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).
{: .notice--info}

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).
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

## Backing Up A Save (.gci File) to an SD or USB From a Physical Memory Card

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

1. Select the save you want to backup. If you have multiple saves to backup, you can press R on the GameCube controller or 1 on the Wii remote to backup all of your saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. When backing up is complete, press any button to continue.

## Backing Up Your Physical Memory Card Into an Emulated Memory Card (.raw file)

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

#### Letöltés

1. Csomagold ki a GCMM-et, és tedd az SD-kártyán vagy USB-meghajtón lévő `apps` mappába.
1. Csatlakoztasaz SD-kártyát vagy az USB-meghajtót a Wii-hoz, és indítsd el a GCMM-et a Homebrew Channel-ről.

#### Dumping the .raw

1. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Select the device you want to dump to.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press L and Y at the same time on GameCube Controller or B and - at the same time on the Wii remote to backup your to a .raw file and select the slot your memory card is in.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. When the dump is complete, press any button to continue. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Restoring an Emulated Memory Save to a Physical Memory Card

### Követelmények

* Egy Wii GameCube portokkal
* Egy SD kártya vagy USB drive
* [GCMM](https://oscwii.org/library/app/gcmm)

### Útmutató

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.
1. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.
1. Csatlakoztasd a memória kártyádat a Slot A-hoz vagy a Slot B-hez.
1. Válaszd ki az eszközt, amiről helyreállítani szeretnél.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press L and X at the same time on GameCube controller or B and + at the same time on the Wii remote.
1. Válaszd ki a Slot-ot amelyikben a memóriakártya található.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. It should restore the .raw file to your memory card. Amikor a visszaállítás megtörtént, nyomj tetszőleges gombot a folytatáshoz.

## Transferring Saves Between 2 Physical Memory Cards

### Követelmények

* Egy Wii GameCube portokkal
* At least 2 physical memory cards

### Útmutató

1. Insert both memory cards into the Wii.
1. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. Find the save you want, select it and select `Move or Copy`.

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
