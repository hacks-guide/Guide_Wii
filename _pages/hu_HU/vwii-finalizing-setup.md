---
title: A telepítés befejezése
---

{% include toc title="Tartalomjegyzék" %}

## A telepítés befejezése

Most, hogy befejeztük a Homebrew Channel, a Priiloader és a cIOS-ek telepítését, ideje pár utolsó lépéssel lezárni a folyamatot!

### A Wiis Mii Channel letöltése és telepítése

A Mii Channel vWiis verziója bizonyos szempontokból hiányos: pl. nem képes DS-hez csatlakozni vagy Wii Remote-ra másolni Miiket. Ha szeretnéd, letöltheted az eredeti Mii Channel WAD-ját a Nintendo-szerverekről és telepítheted a [WAD Managerrel](yawmme).

1. Töltsd le ezt a parancsfájlt [Windowsra](/assets/files/Wii_Mii_Channel_Windows.ps1) vagy [Mac-re/Linuxra](/assets/files/Wii_Mii_Channel_Unix.command)!

#### Windowson

1. Kattints jobb gombbal a fájlra és válaszd ki a „`Run With PowerShell`” („Futtatás a PowerShellben”)-menüpontot!
2. Gépelj be egy `R`-karaktert a parancsfájl futtatásához!
3. Ha a parancsfájl lefutott, helyezd át a `Mii Channel v6 (Wii).wad`-fájlt az SD kártyára egy `WAD`-nevű mappába! Ha a mappa még nem létezik, hozd létre!

#### Mac-en

1. Kattints kétszer a fájlra! Ezek után automatikusan le fog futni.
2. Ha a parancsfájl lefutott, helyezd át a `Mii Channel v6 (Wii).wad`-fájlt az SD kártyára egy `WAD`-nevű mappába! Ha a mappa még nem létezik, hozd létre!

#### Linuxon

1. Nyiss meg egy terminálablakot a fájl könyvtárában és a futtatáshoz gépeld be a `./Wii_Mii_Channel_Unix.command`-parancsot!
2. Ha a parancsfájl lefutott, helyezd át a `Mii Channel v6 (Wii).wad`-fájlt az SD kártyára egy `WAD`-nevű mappába! Ha a mappa még nem létezik, hozd létre!

#### Telepítés

1. A `Mii Channel v6 (Wii).wad`-fájlt a [YAWM Modmii Edition](yawmme)-nel telepítheted.

Ha a -1029 hibát kapod telepítéskor, távolítsd el a wad-ot és telepítsd újra. Ez nem befolyásolja a Mii-ket mivel azok máshol kerülnek tárolásra a NAND-on.
{: .notice--info}

### További nemhivatalos alkalmazások

Minden nemhivatalos alkalmazást a Homebrew Channelről lehet elindítani.
{: .notice--info}

- A „Patched IOS 80 Installer for vWii” egy olyan alkalmazás, ami módosítja a konzol létező IOS 80-ját, hogy lehetővé tegye a hamisított aláírással rendelkező csatornák futtatását az SD kártya-menüből.
- A „Photo Upgrader” egy olyan alkalmazás, ami lehetővé teszi a Photo Channel 1.1-es verziójának telepítését a vWiire.
- A „43db patcher” egy olyan alkalmazás, ami módosítja a WiiWare- és Virtual Console-alkalmazásokat, hogy a 16:9-es képarányú megjelenítésre kényszerítse őket.

### További nemhivatalos alkalmazások – Letöltések

- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)
- [Photo Upgrader](https://oscwii.org/library/app/photo_upgrader)
- [WW-43DB-Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### További nemhivatalos alkalmazások – Fájlok kicsomagolása az SD kártyára

1. Másold át a Patched IOS 80 Installer fájljait az SD kártya gyökerére!
2. Másold át a Photo Upgrader fájljait az SD kártya gyökerére!
3. Másold át a WW-43DB-Patcher fájljait az SD kártya gyökerére!

A Wii Virtual Console-játékok Wii U-n történő futtatása felülírja a SYSCONF (rendszerkonfigurációs) fájlt, ami befolyásol bizonyos Priiloader-módosításokat, pl. a WiiConnect24 aktiválásához szükséges javításokat.
{: .notice--info}

Folytatás az <a href="osc">Open Shop Channel telepítésével</a> <br>
Most, hogy befejezted a vWii beállítását, telepítheted az Open Shop Channelt, ami a nemhivatalos programok megbízható tárháza és hozzáférhető mind egy Wiiről vagy egy számítógépről.
{: .notice--info}
