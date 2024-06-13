---
title: A Priiloader használata
---

{% include toc title="Tartalomjegyzék" %}

A Priiloader egy elengedhetetlen eszköz, ami egy réteg védelemmel látja el a Wiit. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

Ez az oldal a Priiloader különböző hasznos funkcióiról nyújt magyarázatot.

### Rendszermenü-módosítások

A Priiloader széleskörű lehetőségekkel rendelkezik a Wii viselkedésének módosítására. A különböző módosításokról részletesebben [itt](https://dacotaco.github.io/priiloader/docs/HACKS.html#currently-supported-hacks) olvashatsz (angol nyelven). Továbbá, meglátogathatod a [Priiloader GYIK](https://dacotaco.github.io/priiloader/docs/FAQ.html)-et, ami további információt tartalmaz a rendszermenü-módosításokról (angol nyelven).

### További lehetőségek

A Priiloader még néhány egyéb dologra is képes, amelyek javíthatnak a Wii-élményeden. Ez nem kötelező.

#### Automatikus indítás Priiloaderrel

A Priiloader segítségével a Wii bekapcsolásakor lehetőséged van egyből a Homebrew Channelbe, egy adott alkalmazásba vagy magába a Priiloaderbe indítani a konzolt. Ez nem kötelező.

##### Egy nemhivatalos program automatikus indítása

<div id="autobooting-usbloadergx" class="notice--warning" markdown="1">
Ha szeretnéd az USB Loader GX-et automatikusan indítani, először is végezd el az alábbi lépéseket:
  + Töltsd le az USB Loader GX átirányító WAD-ot ([Wii esetén](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii esetén](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad))!
  + Töltsd le az [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download)-alkalmazást!
  + Telepítsd az átirányító WAD-ot egy WAD-kezelővel, mint pl. a [YAWM ModMii Edition](yawmme)-nel!
  + Csomagold ki valahova az `UNEO Channel Booter for Priiloader.zip`-fájlt!
  + Másold le az `uneoboot.dol`-fájlt az SD kártya gyökerére!
A 3. lépésben fogod telepíteni az `uneoboot.dol`-t.
</div>

1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a „Load Priiloader”-t!
1. Görgess le a „`Load/Install file`” („fájl megnyitása/telepítése”)-menüponthoz és nyomd meg az A-gombot!

    ![](/images/priiloader/menu_install_file.png)

1. Görgess le a listán, amíg meg nem látod a kívánt programot, majd telepítsd az A-gombbal!

    ![](/images/priiloader/installing_file.png)

    ![](/images/priiloader/installing_file_ok.png)

1. Végezetül, nyomd meg a `B`-gombot a főmenübe való visszatéréshez!
1. Görgess le és válaszd ki a „`Settings`” („beállítások”)-menüpontot az A-gombbal!

    ![](/images/priiloader/menu_settings.png)

1. Görgess át az „Autoboot options” („automatikus indítási lehetőségek”)-menün a jobb nyílgombbal, amíg meg nem látod az „`Installed file`” („telepített fájl”)-menüpontot!

    ![](/images/priiloader/autoboot_installed_file.png)

1. Ha végeztél, a mentéshez görgess le és válaszd ki a „`save settings”`-menüpontot az A-gombbal!

    ![](/images/priiloader/settings_save.png)

1. Végezetül, nyomd meg a `B`-gombot a főmenübe való visszatéréshez!
1. Görgess vissza a „`System Menu`” („rendszermenü”)-menüponthoz és válaszd ki az A-gombbal!

A beállítás befejeztével a Wii bekapcsoláskor automatikusan a kiválasztott programot fogja elindítani.

##### Automatikus indítás a Homebrew Channelbe vagy a Priiloaderbe

1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a „Load Priiloader”-t!
1. Görgess le és válaszd ki a „`Settings`” („beállítások”)-menüpontot az A-gombbal!

    ![](/images/priiloader/menu_settings.png)

1. Görgess át az „Autoboot options” („automatikus indítási lehetőségek”)-menün a jobb nyílgombbal, amíg meg nem látod a kívánt menüpontot!
    + A „Disabled” („letiltva”)-lehetőség a Priiloader menüjébe fogja indítani a konzolt.

    Ne válaszd ki a „`BootMii IOS`”-t automatikus indításhoz! Ettől egy végtelen ciklusban fogsz ragadni, amíg nyomva nem tartod a RESET-gombot a Priiloader menüjének megnyitásához.
    {: .notice--warning}

    ![](/images/priiloader/autoboot_disabled.png)

1. Ha végeztél, a mentéshez görgess le és válaszd ki a „`save settings”`-menüpontot az A-gombbal!

    ![](/images/priiloader/settings_save.png)

1. Végezetül, nyomd meg a `B`-gombot a főmenübe való visszatéréshez!
1. Görgess vissza a „`System Menu`” („rendszermenü”)-menüponthoz és válaszd ki az A-gombbal!
