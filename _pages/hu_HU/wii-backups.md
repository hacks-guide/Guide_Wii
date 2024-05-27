---
title: Wii-másolatok kezelése
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató végigvezet a Wii-másolatok kezelésének különböző részletein, a CleanRip által kiadott .PART-fájlok összekapcsolásától a játékfájlok zsugorításáig, hogy ráférjenek egy FAT32-eszközre. A továbbiakban két programot fogunk kiemelni: a Wii Backup Managert (Windowsra) és a Wii Backup Fusiont (Linuxra és Mac-re).

Ha több játékot akarsz tárolni, javasoljuk egy külső háttértár beszerzését a Wiihez. Szinte bármilyen merevlemez vagy SSD valószínűleg megfelel.
{: .notice--info}

Egy pendrive használatát nem ajánljuk, mert nagyon kicsik és még ugyanannak a terméknek a különböző példányai is máshogy viselkedhetnek. <br>
Ha szeretnéd, ehelyett használhatsz egy SD kártyát is, de figyelmeztetünk, hogy a Wii SD kártya-olvasója lassú!
{: .notice--info}

Ellenőrizd, hogy a külső háttértárad FAT32-fájlrendszerre van-e formázva! Ne formázd más típusokra, mint az exFAT vagy az extFS! <br>
NTFS-ként formázhatod, de a legtöbb nemhivatalos alkalmazás (pl.: a Homebrew Channel és a Nintendont) ezt nem támogatja.

### .PART-fájlok összekapcsolása FAT32-eszközökhöz

Ha a lemez tartalmát egy FAT32-eszközre másoltad le, akkor a program jó eséllyel legalább két fájlt adott vissza a fájlrendszer korlátozásai miatt, amelyek `.partX.iso`-ban végződnek. Ezeket a fájlokat össze kell kapcsolni (egy támogatott fájlrendszer alatt, mint pl. az NTFS), hogy helyesen be lehessen olvasni őket.
{: .notice--info}

#### Windowson

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden!

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. Kattints bele a Windows Intéző címsorába, írd be, hogy `cmd` és nyomd meg az Enter-billentyűt! Ezzel megnyithatsz egy Parancssor-ablakot a mappában.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Írd be a Parancssorba, hogy `copy /b *.part?.iso game.iso`, majd nyomd meg az Enter-billentyűt! Légy türelemmel, amíg a folyamat befejeződik! A parancssor kimenete az alábbiképpen fog kinézni:

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/filemd5.png)

#### macOS-en/Linuxon

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden!

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Nyiss meg egy terminálablakot a fájlokat tartalmazó mappában vagy `cd`-zz bele!

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Futtasd le a következő parancsot: ``cat `ls *.part?.iso | sort` > game.iso``! Légy türelemmel, amíg az összekapcsolási folyamat befejeződik! Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

### A Wii Backup Manager használata

#### Követelmények

- Egy Windowsos számítógép
- Egy SD kártya vagy pendrive
- Egy Wii-játéklemez .iso-formátumú másolata
- A [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

#### I. rész – Telepítés

1. Csomagold ki és indítsd el a Wii Backup Managert!
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedhez!

#### II. rész – Játékok másolása

1. Go to the `Drive 1` tab, then select the drive that will hold your backed up Wii games.

   ![](/images/desktop-apps/WBM/select_drive.png)

2. Go to the `Files` tab, then select `Add`.

   - Select `Files` to add multiple games to the program, or select `Folder` to add a whole folder of games.

   ![](/images/desktop-apps/WBM/select_games.png)

3. Go to `Select`, then click `Games not on drive 1`.

   ![](/images/desktop-apps/WBM/select_games2.png)

4. Select `Transfer`, then select `Drive 1` to transfer the games over. The progress will be displayed on the right side of the window.

   ![](/images/desktop-apps/WBM/transfer_todrive.png)

### Using Wii Backup Fusion

#### Követelmények

- A PC running MacOS or Linux
- Egy SD kártya vagy pendrive
- Egy Wii-játéklemez .iso-formátumú másolata
- [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion)
- [Wiimm's ISO Tools](https://wit.wiimm.de/download.html)

#### I. rész – Telepítés

1. Download Wiimm's ISO tools for your OS and extract the .tar.gz into a folder that you can access with the terminal. The extracted folder should have these files inside:

   ![](/images/desktop-apps/WBM/witinstallfolder.png)

2. Open a terminal in the folder that you just extracted, and run `sudo ./install.sh`.

3. Download Wii Backup Fusion for your OS and install. If on Linux, you will need to make the appimage executable by running `chmod +x [FILE]`.

#### II. rész – Játékok másolása

1. Open Wii Backup Fusion and press `Load`.

   ![](/images/desktop-apps/WBM/loadwbf.png)

2. Select the directory where your game ISO is at.

   ![](/images/desktop-apps/WBM/opendirectorywbf.png)

3. Right click on the game that you want to transfer to a drive, and press `Transfer to image`. Use the following settings:

   ![](/images/desktop-apps/WBM/settingswbf.png)

4. If there is not already a `wbfs` directory on your game drive, make one.

5. Make another directory inside of the `wbfs` folder for the game backup. Take note of the Game ID in Wii Backup Fusion as you will need this for the game folder.

6. Make a game folder for your game, formatted as `game name [GAMEID]`. For the game dumped as an example in this guide, it would be named `New Super Mario Bros. Wii [SMNE01]`.

   ![](/images/desktop-apps/WBM/wbfsname.png)

7. Copy the game.wbfs file that was made in Step 3 to this new folder. The drive should be ready to use on a Wii.

[Continue to cIOS](cios)<br>
cIOS is needed for your Wii to use a USB Loader. Once this is done, you can use [USB Loader GX or WiiFlow](wii-loaders) to play games from your USB drive or SD card.
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
