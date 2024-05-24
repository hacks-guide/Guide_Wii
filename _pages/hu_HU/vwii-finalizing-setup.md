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

1. Right click the file and select `Run With PowerShell`
2. Type `R` to run the script
3. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Mac

1. Double click on the file. It should automatically run.
2. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Linux

1. Open a terminal in the directory of the file, then type `./Wii_Mii_Channel_Unix.command`
2. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Installing

1. You can install `Mii Channel v6 (Wii).wad` with [YAWM Modmii Edition](yawmme)

### További Homebrew App-ok

All homebrew apps are loaded from the Homebrew Channel.
{: .notice--info}

- Patched IOS 80 Installer for vWii is a homebrew app that will take your current install of IOS 80 and patch it to be able to use fakesigned channels on the SD card menu.
- Photo Upgrader is a homebrew app that allows photo channel 1.1 to be installed on the vWii even though it is normally not possible.
- 43db patcher is a homebrew app that will patch your WiiWare and virtual console titles to force the 16:9 aspect ratio.

### Additional Homebrew Apps - What You Need

- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)
- [Photo Upgrader](https://oscwii.org/library/app/photo_upgrader)
- [WW-43DB-Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the Patched IOS 80 Installer for vWii to the root of the SD.
2. Copy the contents of the Photo Upgrader to the root of the SD.
3. Copy the contents of the WW-43DB-Patcher to the root of the SD.

Running Wii virtual console games on the Wii U menu will overwrite the SYSCONF, which may affect some priiloader hacks such as the ones used for enabling WiiConnect24.
{: .notice--info}

Continue to [Open Shop Channel Installation](osc) <br>
Now that your main vWii setup is complete, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
