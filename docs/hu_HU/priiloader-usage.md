# A Priiloader használata

A Priiloader egy elengedhetetlen eszköz, ami egy réteg védelemmel látja el a Wiit. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

Ez az oldal a Priiloader különböző hasznos funkcióiról nyújt magyarázatot.

## Rendszermenü-módosítások

A Priiloader széleskörű lehetőségekkel rendelkezik a Wii viselkedésének módosítására. You can find more information on each hack [here](https://dacotaco.github.io/priiloader/docs/HACKS.html#currently-supported-hacks). Addditionally, you can visit the [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) which has more relevant information regarding System Menu hacks.

## További lehetőségek

A Priiloader még néhány egyéb dologra is képes, amelyek javíthatnak a Wii-élményeden. Ez nem kötelező.

### Automatikus indítás Priiloaderrel

A Priiloader segítségével a Wii bekapcsolásakor lehetőséged van egyből a Homebrew Channelbe, egy adott alkalmazásba vagy magába a Priiloaderbe indítani a konzolt. Ez nem kötelező.

#### Egy nemhivatalos program automatikus indítása

::: warning

Ha szeretnéd az USB Loader GX-et automatikusan indítani, először is végezd el az alábbi lépéseket:

- Download the USB Loader GX forwarder WAD ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Install the forwarder WAD with a WAD manager like [YAWM ModMii Edition](yawmme).
- Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
- Copy `uneoboot.dol` to the root of your SD card.

You will be installing `uneoboot.dol` in step 3.

:::

1. Indítsd el a Homebrew Channelt!

2. Indítsd el a listáról a „Load Priiloader”-t!

3. Scroll down to `Load/Install file` and press A.

   ![](/images/priiloader/menu_install_file.png)

4. Görgess le a listán, amíg meg nem látod a kívánt programot, majd telepítsd az A-gombbal!

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Press `B` to return to the main menu.

6. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

7. Press Right to cycle through the Autoboot options until `Installed file` is selected.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

9. Press `B` to return to the main menu.

10. Scroll back up to `System Menu` and press A.

A beállítás befejeztével a Wii bekapcsoláskor automatikusan a kiválasztott programot fogja elindítani.

#### Automatikus indítás a Homebrew Channelbe vagy a Priiloaderbe

1. Indítsd el a Homebrew Channelt!

2. Indítsd el a listáról a „Load Priiloader”-t!

3. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

4. Görgess át az „Autoboot options” („automatikus indítási lehetőségek”)-menün a jobb nyílgombbal, amíg meg nem látod a kívánt menüpontot!

   - A „Disabled” („letiltva”)-lehetőség a Priiloader menüjébe fogja indítani a konzolt.

   ::: warning

   Please don't set Autoboot to `BootMii IOS`. Ettől egy végtelen ciklusban fogsz ragadni, amíg nyomva nem tartod a RESET-gombot a Priiloader menüjének megnyitásához.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

6. Press `B` to return to the main menu.

7. Scroll back up to `System Menu` and press A.
