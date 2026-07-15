# Telepítés véglegesítése (Wii mini)

Most, hogy a Homebrew Channel, Priiloader és cIOS telepítésre került, véglegesíteni fogjuk a Wii mini telepítést alapvető appok telepítésével, amik visszaállítják a Wii mini menünek normál konzolhoz képest hiányzó funkcionalitását. Ajánlott, hogy letöltsd az összes homebrew-ot a tárolódra, ami itt listázott, az ELŐTT mielőtt végrehajtod a listázott lépéseket.

## Wii mini Ethernet Enable

A Wii mini Ethernet Enable egy homebrew app ami úgy patcheli a Wii mini-det, hogy támogassa a vezetékes Ethernet adaptereket, lehetővé téve a konzolod számára, hogy olyan helyen is elérje az internetet ahol korábban nem volt lehetséges. Csak az `ASIX AX88772` chipset-tel rendelkező adapterek támogatottak a Wii mini-n. Továbbá, a homebrew appok esetén, amik internetet igényelnek szükség van egy USB hub-ra, mert a konzolnak csak egy USB portja van.

### Követelmények

- Egy USB drive
- [Wii mini Ethernet Enable](https://oscwii.org/library/app/Wii_Mini_Ethernet_Enable)

### Lépések

1. Másold az `apps` mappát a `Wii_Mini_Ethernet_Enable.zip` fájlból az USB drive-od gyökerébe.

2. Helyezd vissza a pendrive-ot a konzolodba.

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a Wii Mini Ethernet Enable-t a homebrew-ok listájáról.

   ![](/images/wii-mini/ethernet-enabler/launch-hb.png)

5. The application will launch and should output `OK.` after attempting to enable Ethernet usage on your Wii mini. After this, press the `HOME` button on your Wii remote to exit the app.

   ![](/images/wii-mini/ethernet-enabler/success.png)

## System Channel Restorer

A System Channel Restorer egy homebrew app, ami visszaállítja a Wii mini menüből normálisan hiányzó csatornákat, mint például a Wii verziója a Mii Channel-nek és a Photo Channel-nek.

### Követelmények

- Egy SD kártya vagy pendrive
- Egy internet kapcsolat
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Lépések

1. Másold az `apps` mappát a `system-channel-restorer.zip` fájlból az SD kártyád vagy az USB drive-od gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a homebrew listáról a System Channel Restorer-t.

   ![](/images/wii-mini/sys-channel-restore/launch-hb.png)

5. A telepítő elindul. Ha a **-3 Failed to initialize network** hibát kapod, ellenőrizd, hogy az Ethernet adaptered megfelelően csatlakoztatott. A legtöbb felhasználó a következő csatornákat szeretné kiválasztani, kivéve, ha szeretnél további csatornákat:

   - EULA
   - Mii Channel

   ![](/images/wii-mini/sys-channel-restore/channel-select.png)

6. Ha minden csatorna kiválasztásra került nyomj `+` gombot a telepítés elkezdéséhez.

   ![](/images/wii-mini/sys-channel-restore/install.png)

7. Ha a telepítés véget ért, visszatérhetsz a Homebrew Channel-hez a HOME gomb megnyomásával.

## EULA elfogadása

In order to use features like WiiConnect24, you must accept the Wii User Agreement (EULA). This can normally only be done through the Wii Settings app or the Wii Shop Channel, however you can download a forwarder to launch the EULA from the Homebrew Channel.

### Követelmények

- Egy USB drive
- [EULA Loader NTSC](/assets/files/EULA_Loader_NTSC.zip)
- [EULA Loader PAL](/assets/files/EULA_Loader_PAL.zip)

### Lépések

1. Download the forwarder above that matches the region of your Wii mini console. The forwarder will not work if you download the incorrect region.

2. Copy the `apps` folder in the `EULA_Loader_XXX.zip` file to the root of your USB drive.

3. Indítsd el a Homebrew Channelt.

4. Launch EULA Loader (your region) from the list of homebrew.

   ![](/images/wii-mini/eula-forwarder/launch-hb.png)

5. The EULA will launch. Press the Next button to proceed.

   ![](/images/wii-mini/eula-forwarder/eula-start.png)

6. Press I ACCEPT to accept the EULA. You will be returned to the Wii Menu afterwards.

   ![](/images/wii-mini/eula-forwarder/eula-accept.png)

---

::: tip

Folytatás az [Open Shop Channel telepítés](osc)-ével

Most, hogy a Wii mini telepítésed teljes, telepítheted az Open Shop Channel-t, ami a homebrew programok megbízható tárháza és hozzáférhető mind egy Wii mini-ről vagy egy számítógépről.

:::
