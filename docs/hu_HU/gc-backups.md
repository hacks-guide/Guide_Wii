---
title: "GameCube-másolatok kezelése"
---

{% include toc title="Tartalomjegyzék" %}

Ebben az útmutatóban bemutatjuk, hogyan használhatod a GameCube Backup Managert a GameCube-másolataid kezelésére. Ez a program hasonlóan működik a [Wii Backup Managerhez](wii-backups#using-wii-backup-manager).

### Követelmények

* Egy SD kártya vagy pendrive
* [A GameCube Backup Manager](https://github.com/AxionDrak/GameCube-Backup-Manager/releases)

Ha több játékot akarsz játszani, javasoljuk egy külső merevlemez használatát a Wiihez. Bármilyen külső merevlemez a legtöbb modern piactérről működni fog a Wii-jal.
{: .notice--info}

Ellenőrizd, hogy a külső háttértárad FAT32-fájlrendszerre van-e formázva. Ne formázd más típusokra, mint NTFS, exFAT, extFS, vagy WBFS, az utolsó egyidejátmúlt fájlrendszer Wii játékok tárolására.
{: .notice--info}

### Útmutató

#### I. rész - Letöltés

1. Csomagold ki és indítsd el a GameCube Backup Manager-t.
1. Csatlakoztasd a pendrive-ot a számítógépedbe!

#### II. rész – Játékok átmásolása

1. Nyisd meg az alkalmazást és keresd meg a mappa gombot a jobb alsó sarokban. Kattints rá a Fájlkezelő ablak megnyitásához.

    ![](/images/desktop-apps/GCBM/folderbutton.png)

1. Keresd meg a mappa helyét, ami a játékot tartalmazza, amit át szeretnél vinni. Ez lehet a számítógéped merevlemezén vagy egy külső tároló eszközön. Ha megtaláltad a mappát, válaszd ki.

    ![](/images/desktop-apps/GCBM/selectfolder.png)

1. Kattints a `Files (Destination)` fülre, majd válaszd az `Inactive` opciót lenyíló menüből. Ez lehetővé teszi, hogy kiválaszd a drive-ot. amire át szeretnéd vinni a játékot. Válaszd ki a megfelelő drive betút a listából.

    ![](/images/desktop-apps/GCBM/selectdrive.png)

1. Utána menj vissza a `Files (Source)` fülre és válaszd ki a játékot, amit átvinnél, majd kattints vagy az `Install Game (1:1)` vagy az `Install Game (Scrub)` opcióra.

    ![](/images/desktop-apps/GCBM/installgame.png)

Az `Install Game (Scrub)` választása eltávolítja az összes felesleges adatot a játékból, csökkentve a játék fájlméretét. Ez bizonyos játékoknál jelentős csökkené, például az Animal Crossing 1.3GB-ról 26MB-ra megy le.
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
