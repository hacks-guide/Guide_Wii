# Finalizing Setup (Wii mini)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, we are going to finalize setup for your Wii mini by installing crucial apps to restore various missing functionalities of the Wii mini menu compared to a normal console. Ajánlott, hogy letöltsd az összes homebrew-ot a tárolódra, ami itt listázott, az ELŐTT mielőtt végrehajtod a listázott lépéseket.

## Wii mini Ethernet Enable

Wii mini Ethernet Enable is a homebrew app that patches your Wii mini to support wired Ethernet adapters, allowing your console to connect to the internet where previously impossible. Only adapters with the `ASIX AX88772` chipset are supported on the Wii mini. Additionally, homebrew apps that need internet will require the use of a USB hub, as the console only has a singular USB port.

### Requirements

- Egy USB drive
- [Wii mini Ethernet Enable](https://oscwii.org/library/app/Wii_Mini_Ethernet_Enable)

### Lépések

1. Copy the `apps` folder in the `Wii_Mini_Ethernet_Enable.zip` file to the root of your USB drive.

2. Reinsert USB drive into your console.

3. Indítsd el a Homebrew Channelt.

4. Launch Wii Mini Ethernet Enable from the list of homebrew.

   ![](/images/wii-mini/ethernet-enabler/launch-hb.png)

5. The application will launch and should output `OK.` after attempting to enable Ethernet usage on your Wii mini. After this, press the `HOME` button on your Wii remote to exit the app.

   ![](/images/wii-mini/ethernet-enabler/success.png)

## System Channel Restorer

System Channel Restorer is a homebrew app that restores channels missing from the Wii mini menu normally, such as the Wii version of the Mii Channel and Photo Channel.

### Requirements

- Egy SD kártya vagy pendrive
- Egy internet kapcsolat
- [System Channel Restorer](https://oscwii.org/library/app/system-channel-restorer)

### Lépések

1. Copy the `apps` folder in the `system-channel-restorer.zip` file to the root of your USB drive.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Indítsd el a Homebrew Channelt.

4. Indítsd el a homebrew listáról a System Channel Restorer-t.

   ![](/images/wii-mini/sys-channel-restore/launch-hb.png)

5. A telepítő elindul. If you receive **-3 Failed to initialize network**, ensure that your Ethernet adapter is connected properly. A legtöbb felhasználó a következő csatornákat szeretné kiválasztani, kivéve, ha szeretnél további csatornákat:

   - EULA
   - Mii Channel

   ![](/images/wii-mini/sys-channel-restore/channel-select.png)

6. Ha minden csatorna kiválasztásra került nyomj `+` gombot a telepítés elkezdéséhez.

   ![](/images/wii-mini/sys-channel-restore/install.png)

7. Ha a telepítés véget ért, visszatérhetsz a Homebrew Channel-hez a HOME gomb megnyomásával.

## Accepting the EULA

In order to use features like WiiConnect24, you must accept the Wii User Agreement (EULA). This can normally only be done through the Wii Settings app or the Wii Shop Channel, however you can download a forwarder to launch the EULA from the Homebrew Channel.

### Requirements

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
