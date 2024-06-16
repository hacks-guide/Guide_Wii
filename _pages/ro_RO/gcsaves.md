---
title: "Salvări GameCube"
---

{% include toc title="Tabel de Conținut" %}

Acesta este un ghid complet despre cum să-ți gestionezi salvările GameCube.

Folosirea oricărui dispozitiv GameCube cu un Wii Family Edition sau Wii mini necesită sudarea unor porturi GameCube sau/și unor sloturi de card de memorie.
{: .notice--info}

## Încărcarea unei Salvări Individuale (Fișier .gci) pe un Card de Memorie Fizic

### Instrumente necesare

* Un Wii cu porturi GameCube
* Un Card SD sau USB
* [GCMM](https://oscwii.org/library/app/gcmm)

Dacă ești în căutarea unor salvări cu completare 100%, le poți găsi [aici](https://gamefaqs.gamespot.com/).
{: .notice--info}

Dacă ești în căutarea unor exploit-uri pentru a rula [Swiss](https://github.com/emukidid/swiss-gc/releases), poți găsi o listă [aici](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).
{: .notice--info}

### Instrucțiuni

#### Descărcare

1. Extrage GCMM și pune-l în dosarul `apps` din cardul tău SD sau unitatea ta USB.
1. Pune fișierul `.gci` într-un dosar numit `MCBACKUP` în rădăcina cardului SD sau unității USB.
1. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Restaurare

1. Introdu cardul tău de memorie fizic în Slot A sau Slot B.
1. Alege dispozitivul de pe care vrei să restaurezi.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. În GCMM, apasă X pe un controller GameCube sau + pe un Wii Remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Alege slotul în care se află cardul tău de memorie.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Alege salvarea pe care vrei s-o restaurezi. Dacă ai mai multe salvări de restaurat, poți apăsa R pe un controller GameCube sau 1 pe un Wii Remote pentru a restaura toate salvările tale.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Odată ce restaurarea este completă, apasă orice buton pentru a continua.

## Crearea unui Backup de Salvare (Fișier .gci) către un SD sau USB de pe un Card de Memorie Fizic

### Instrumente necesare

* Un Wii cu porturi GameCube
* Un Card SD sau USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instrucțiuni

#### Descărcare

1. Extrage GCMM și pune-l în dosarul `apps` din cardul tău SD sau unitatea ta USB.
1. Pune fișierul `.gci` într-un dosar numit `MCBACKUP` în rădăcina cardului SD sau unității USB.
1. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Crearea Backup-ului

1. Introdu cardul tău de memorie fizic în Slot A sau Slot B.
1. Alege dispozitivul unde vrei să creezi backup-ul.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. În GCMM, apasă Y pe un controller GameCube sau - pe un Wii Remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Alege slotul în care se află cardul tău de memorie.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Alege salvarea căruia vrei să-i creați un backup. Dacă ai mai multe salvări cărora vrei sa le creezi un backup, poți apăsa R pe un controller GameCube sau 1 pe un Wii Remote pentru a crea un backup pentru toate salvările tale.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. Odată ce procesul de backup este complet, apasă orice buton pentru a continua.

## Crearea unui Backup a Cardului tău de Memorie către un Card de Memorie Emulat (fișier .raw)

### Instrumente necesare

* Un Wii cu porturi GameCube
* Un Card SD sau USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instrucțiuni

#### Descărcare

1. Extrage GCMM și pune-l în dosarul `apps` din cardul tău SD sau unitatea ta USB.
1. Introdu cardul SD sau unitatea USB în Wii și rulează GCMM din Homebrew Channel.

#### Extragerea fișierului .raw

1. Introdu cardul tău de memorie în Slot A sau Slot B.
1. Alege dispozitivul unde vrei să extragi.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Apasă L și Y în același timp pe un Controller GameCube sau B și - în același timp pe un Wii Remote pentru a crea un backup într-un fișier .raw și alege slotul în care se află cardul tău de memorie.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Odată ce extragerea este completă, apasă orice buton pentru a continua. Ar trebui să fie salvat într-un dosar din rădăcina cardului tău SD sau unității tale USB numit `MCBACKUP`.

## Restaurarea unei Salvări de Memorie Emulată către un Card de Memorie Fizic

### Instrumente necesare

* Un Wii cu porturi GameCube
* Un Card SD sau USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### Instrucțiuni

1. Dacă încerci să restaurezi o salvare din Dolphin, mergi la secțiunea `File` în Dolphin, alege "open user folder", deschide dosarul GC și găsește fișierul `.raw`.
1. Dacă restaurezi o salvare dintr-un card de memorie emulat Nintendont, navighează la dosarul `saves` din rădăcina cardului tău SD sau USB.
1. Introdu cardul tău de memorie în Slot A sau Slot B.
1. Alege dispozitivul de pe care vrei să restaurezi.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Apasă L și X în același timp pe un controller GameCube sau B și + în același timp pe un Wii Remote.
1. Alege slotul în care se află cardul tău de memorie.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Ar trebui să restaureze fișierul .raw în cardul tău de memorie. Odată ce restaurarea este completă, apasă orice buton pentru a continua.

## Transferarea Salvărilor Între 2 Carduri de Memorie Fizice

### Instrumente necesare

* Un Wii cu porturi GameCube
* Cel puțin 2 carduri de memorie fizice

### Instrucțiuni

1. Introdu ambele carduri de memorie în Wii.
1. Din meniul de Sistem, navighează la `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. Găsește salvarea pe care o vrei, alege-o și apasă pe `Move or Copy`.

[Apasă aici pentru a reveni la cuprinsul site-ului.](site-navigation)
{: .notice--info}
