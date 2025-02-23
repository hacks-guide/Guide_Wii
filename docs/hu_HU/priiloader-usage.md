# A Priiloader használata

A Priiloader egy elengedhetetlen eszköz, ami egy réteg védelemmel látja el a Wii-t. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

Ez az oldal a Priiloader különböző hasznos funkcióiról nyújt magyarázatot.

## Rendszermenü-módosítások

A Priiloader széleskörű lehetőségekkel rendelkezik a Wii viselkedésének módosítására. További információkat találhatsz minde egyes hack-ről [itt](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). Továbbá, meglátogadthatod a [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html)-ot, ami sokkal relevánsabb információt tartalmaz a System Menu hackekről.

## További lehetőségek

A Priiloader még néhány egyéb dologra is képes, amelyek javíthatnak a Wii-élményeden. Ez nem kötelező.

### Automatikus indítás Priiloaderrel

A Priiloader segítségével a Wii bekapcsolásakor lehetőséged van egyből a Homebrew Channelbe, egy adott alkalmazásba vagy magába a Priiloaderbe indítani a konzolt. Ez nem kötelező.

#### Egy homebrew program automatikus indítása

::: warning

Ha szeretnéd az USB Loader GX-et automatikusan indítani, először is végezd el az alábbi lépéseket:

- Töltsd le az USB Loader GX forwarder WADot ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Töltsd le az [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download)-t.
- Telepítsd az forwarder WAD-ot egy WAD kezelővel, mint például a [YAWM ModMii Edition](yawmme).
- Csomagold ki valahova az `UNEO Channel Booter for Priiloader.zip` fájlt.
- Másold az `uneoboot.dol` fájlt az SD kártya gyökerébe.

A 3. lépésben fogod telepíteni az `uneoboot.dol`-t.

:::

1. Indítsd el a Homebrew Channelt!

2. Indítsd el a homebrew listáról a „Load Priiloader”-t.

3. Görgess le a `Load/Install file` menüponthoz és nyomj A gombot.

   ![](/images/priiloader/menu_install_file.png)

4. Görgess le a listán, amíg ki nem jelölted a kívánt programot, majd telepítsd az A gombbal.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Nyomj `B` gombot a főmenübe való visszatéréshez.

6. Görgess le a `Settings` menüponthoz, és nyomj 'A' gombot.

   ![](/images/priiloader/menu_settings.png)

7. Nyomj Jobb gombot, hogy végig görgess az „Autoboot options” menün, amíg azt nem látod, hogy az `Installed file` a kiválasztott.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Görgess le a `save settings` menüponthoz, és nyomj 'A' gombot.

   ![](/images/priiloader/settings_save.png)

9. Nyomj `B` gombot a főmenübe való visszatéréshez.

10. Görgess vissza a `System Menu` menüponthoz és nyomj A gombot.

A beállítás befejeztével a Wii bekapcsoláskor automatikusan a kiválasztott programot fogja elindítani.

#### Automatikus indítás a Homebrew Channelbe vagy a Priiloaderbe

1. Indítsd el a Homebrew Channelt!

2. Indítsd el a homebrew listáról a „Load Priiloader”-t.

3. Görgess le a `Settings` menüponthoz, és nyomj 'A' gombot.

   ![](/images/priiloader/menu_settings.png)

4. Görgess át az „Autoboot options” menün a jobb nyílgombbal, amíg meg nem látod a kívánt menüpontot.

   - A „Disabled” („letiltva”)-lehetőség a Priiloader menüjébe fogja indítani a konzolt.

   ::: warning

   Kérjük ne állítsd be azAutoboot-ot `BootMii IOS`-ra. Ettől egy végtelen ciklusban fogsz ragadni, amíg nyomva nem tartod a RESET-gombot a Priiloader menüjének megnyitásához.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Görgess le a `save settings` menüponthoz, és nyomj 'A' gombot.

   ![](/images/priiloader/settings_save.png)

6. Nyomj `B` gombot a főmenübe való visszatéréshez.

7. Görgess vissza a `System Menu` menüponthoz és nyomj A gombot.
