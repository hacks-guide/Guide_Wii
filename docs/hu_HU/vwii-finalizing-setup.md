# Telepítés véglegesítése — vWii

Most, hogy a Homebrew Channel, Priiloader és cIOS telepítésre került, véglegesíteni fogjuk a vWii telepítést alapvető appok telepítésével, amik visszaállítják a vWii menünek normál konzolhoz képest hiányzó funkcionalitását. Ajánlott, hogy letöltsd az összes homebrew-ot a tárolódra, ami itt listázott, az ELŐTT mielőtt végrehajtod a listázott lépéseket.

## Patchelt IOS 80 Installer

Patched IOS 80 Installer for vWii egy homebrew app ami veszi a az aktuálisan telepített IOS 80-at és patcheli, hogy kikapcsolja az aláírás ellenőrzést. Ez lehetővé teszi, hogy a fake aláírású csatornák használhatókal egyenek az SD kártya menüben.

### Requirements

- Egy SD kártya vagy pendrive
- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)

### Lépések

1. Másold az `apps` mappát a `Patched_IOS80_Installer_for_vWii.zip` fájlból az SD kártyád vagy az USB drive-od gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a homebrew listáról a Patched IOS 80 Installer-t vWii-hez.

   ![](/images/vwii/ios80-installer/launch-hb.png)

5. A telepítő elindul, megjelenít egy figyelmeztetést, aztán elindít egy 30 másodperces timeout-ot a telepítés megkezdése előtt. Olvasd el ezt a figyelmeztetést, miealőtt folytatod, majd nyomj egy gombot a folytatáshoz.

   ![](/images/vwii/ios80-installer/warning.png)

6. A folytatás után a telepítő patchelni és telepíteni fogja az IOS80-at. Ha végzett, nyomj tetdzőleges gombot a Homebrew Channel-hez visszatéréshez.

   ![](/images/vwii/ios80-installer/install.png)

## System Channel Restorer

System Channel Restorer egyhomebrew app, ami visszaállítja a vWii menüből normálisan hiányzó csatornákat, mint például a Wii verziója a Mii Channel-nek és a Photo Channel-nek.

### Követelmények

- Egy SD kártya vagy pendrive
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Lépések

1. Másold az `apps` mappát a `system-channel-restorer.zip` fájlból az SD kártyád vagy az USB drive-od gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a homebrew listáról a System Channel Restorer-t.

   ![](/images/vwii/sys-channel-restore/launch-hb.png)

5. A telepítő elindul. A legtöbb felhasználó a következő csatornákat szeretné kiválasztani, kivéve, ha szeretnél további csatornákat:

   - EULA
   - Mii Channel

   ![](/images/vwii/sys-channel-restore/channel-select.png)

6. Ha minden csatorna kiválasztásra került nyomj `+` gombot a telepítés elkezdéséhez.

   ![](/images/vwii/sys-channel-restore/install-begin.png)

7. Ha a telepítés véget ért, visszatérhetsz a Homebrew Channel-hez a HOME gomb megnyomásával.

## WiiWare 4:3 DB Patcher

WiiWare 4:3 DB Patcher egy olyan homebrew app ami patcheli a vWii's 4:3 képerány adatbázisát, így a WiiWare és a Virtual Console címek használhatják a 16:9 képarányt ott is, ahol normálisan nem lehet.

### Requirements

- Egy SD kártya vagy pendrive
- [WiiWare 4:3 DB Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Lépések

1. Másold az `apps` mappát a `ww-43db-patcher.zip` fájlból az SD kártyád vagy az USB drive-od gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a homebrew listáról a ww-43db-patcher-t.

   ![](/images/vwii/43db-patcher/hb-launch.png)

5. A telepítő elindul. Nyomj `1` vagy `X` gombot a képerány adatbázis patcheléséhez.

   ![](/images/vwii/43db-patcher/install-prompt.png)

6. Amint a képerány adatbázis patchelt, az telepítő menteni fog egy példányt az előző adatbázisból. NE töröld le ezt a mentést. Megnyomhatsz bármilyen gombot a Homebrew Channel-hez visszatéréshez.

   ![](/images/vwii/43db-patcher/install-finish.png)

::: tip

Folytatás az [Open Shop Channel telepítés](osc)-ével

Most, hogy a fő vWii telepítés teljes, telepítheted az Open Shop Channel-t, ami a homebrew programok megbízható tárháza és hozzáférhető mind egy Wii-ről vagy egy számítógépről.

:::
