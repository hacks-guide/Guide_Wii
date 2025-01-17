# A Homebrew Channel telepítése Dolphin Emulátorra

A Dolphin Emulator `5.0-4588`-as vagy újabb verziójánál a Wii menü egyszerűen telepíthető a Dolphinon keresztül. Ha ez megtörtént, a Homebrew Channel is telepíthető, bár nem ugyanúgy, mint a fizikai Wii esetében.

## Követelmények

- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- [Dolphin Emulator](https://dolphin-emu.org/download/) V`5.0-4588` vagy későbbi
- Az [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases) legutolsó verziója

## Lépések

1. Ha még nem tetted meg, telepítsd a Wii menüt a Dolphin Emulatorra a `Tools > Perform System Update` menüpont alatt.

   ![](/images/homebrew-dolphin/system-update.png)

2. Töltsd le az `Open_HBC_(version)_LULZ.wad`-ot a fenti linkről.

3. Indítsd el a Dolphin Emulátort.

4. Válaszd a `Tools > Install WAD` opciót és válaszd ki az `Open_HBC_(version)_LULZ.wad` fájl, amit letöltöttél.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Válaszd a `Tools > Load Wii System Menu` opciót. A csatornának most meg kell jelennie.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Telepítés utáni, Homebrew alkalmazások telepítése az Open Shop Channel-en keresztül

1. Töltsdf le az Open Shop Channel [innen](https://oscwii.org/library/app/homebrew_browser) a Dolphin-ban használhatóságért. Alternatívaként beszerezheted az OSCDL-t, és elvégezheted ezt a folyamatot manuálisan.

2. Állítsd le az emulációt (ha fut), és nyisd meg a Dolphin Emulatorban a `Config > Wii` ablakot.

3. Engedélyezd az `Automatically Sync with Folder` opciót. Opcionálisan az `SD Card File Size` (SD kártya fájlmérete) paramétert is nagyobbra állíthatod - a legtöbb esetben azonban az `Auto` is jó lesz.

4. Nyisd meg az `SD Sync` mappát. Windowson ez könnyen megtehető a mappa elérési útvonalának beillesztésével a Start menübe, a Windows Intézőbe vagy a Futtatásba.

5. Csomagolj ki minden homebrew alkalmazást a `WiiSDSync` mappába. A végeredménynek valahogy így kell kinéznie:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Töltsd be a Wii menüt, és nyissd meg a Homebrew csatornát. Az újonnan telepített alkalmazásoknak meg kell jelenniük!

   ![](/images/homebrew-dolphin/hbc-apps.png)
