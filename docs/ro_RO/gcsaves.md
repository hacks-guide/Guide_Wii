# Salvări GameCube

Acesta este un ghid complet despre cum să-ți gestionezi salvările GameCube.

::: info

Folosirea oricărui dispozitiv GameCube cu un Wii Family Edition sau Wii mini necesită sudarea unor porturi GameCube sau/și unor sloturi de card de memorie.

:::

## Încărcarea unei Salvări Individuale (Fișier .gci) pe un Card de Memorie Fizic

### Requirements

- Un Wii cu porturi GameCube
- Un Card SD sau USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### Instructions

#### Descărcare

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Restaurare

1. Introdu cardul tău de memorie fizic în Slot A sau Slot B.

2. Alege dispozitivul de pe care vrei să restaurezi.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. În GCMM, apasă X pe un controller GameCube sau + pe un Wii Remote.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Alege slotul în care se află cardul tău de memorie.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Alege salvarea pe care vrei s-o restaurezi. Dacă ai mai multe salvări de restaurat, poți apăsa R pe un controller GameCube sau 1 pe un Wii Remote pentru a restaura toate salvările tale.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Odată ce restaurarea este completă, apasă orice buton pentru a continua.

## Crearea unui Backup de Salvare (Fișier .gci) către un SD sau USB de pe un Card de Memorie Fizic

### Requirements

- Un Wii cu porturi GameCube
- Un Card SD sau USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Descărcare

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Crearea Backup-ului

1. Introdu cardul tău de memorie fizic în Slot A sau Slot B.

2. Alege dispozitivul unde vrei să creezi backup-ul.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. În GCMM, apasă Y pe un controller GameCube sau - pe un Wii Remote.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Alege slotul în care se află cardul tău de memorie.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Alege salvarea căruia vrei să-i creați un backup. Dacă ai mai multe salvări cărora vrei sa le creezi un backup, poți apăsa R pe un controller GameCube sau 1 pe un Wii Remote pentru a crea un backup pentru toate salvările tale.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Odată ce procesul de backup este complet, apasă orice buton pentru a continua.

## Crearea unui Backup a Cardului tău de Memorie către un Card de Memorie Emulat (fișier .raw)

### Requirements

- Un Wii cu porturi GameCube
- Un Card SD sau USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Descărcare

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Extragerea fișierului .raw

1. Introdu cardul tău de memorie în Slot A sau Slot B.

2. Alege dispozitivul unde vrei să extragi.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Apasă L și Y în același timp pe un Controller GameCube sau B și - în același timp pe un Wii Remote pentru a crea un backup într-un fișier .raw și alege slotul în care se află cardul tău de memorie.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. Odată ce extragerea este completă, apasă orice buton pentru a continua. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Restaurarea unei Salvări de Memorie Emulată către un Card de Memorie Fizic

### Requirements

- Un Wii cu porturi GameCube
- Un Card SD sau USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. Introdu cardul tău de memorie în Slot A sau Slot B.

4. Alege dispozitivul de pe care vrei să restaurezi.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. Apasă L și X în același timp pe un controller GameCube sau B și + în același timp pe un Wii Remote.

6. Alege slotul în care se află cardul tău de memorie.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. Ar trebui să restaureze fișierul .raw în cardul tău de memorie. Odată ce restaurarea este completă, apasă orice buton pentru a continua.

## Transferarea Salvărilor Între 2 Carduri de Memorie Fizice

### Requirements

- Un Wii cu porturi GameCube
- Cel puțin 2 carduri de memorie fizice

### Instructions

1. Introdu ambele carduri de memorie în Wii.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

   ![](/images/homebrew/gcsaves/sysmenu.jpg)

   ![](/images/homebrew/gcsaves/settings.jpg)

   ![](/images/homebrew/gcsaves/data-management.jpg)

   ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
