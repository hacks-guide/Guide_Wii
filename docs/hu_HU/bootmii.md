# BootMii biztonsági mentés

A BootMii lehetővé teszi, hogy biztonsági mentést készíts a Wiid belső tárhelyéről és visszatöltsd azt.
Ezen az oldalon megismerkedhetsz a biztonsági mentés készítéséről az SD kártyára, amivel aztán úgy cselekedhetsz, ahogy szeretnél.

::: warning

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Ha jelenleg nem rendelkezel egy SD kártyával, akkor kihagyhatod ezt az oldalt, de ERŐSEN AJÁNLJUK, hogy később térj vissza és készíts egy biztonsági mentést a Wiid belső tárhelyéről!

:::

## Requirements

- Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)

## Instructions

::: info

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

:::

1. Power on your console.

2. Indítsd el a Homebrew Channelt!

3. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!

   ![](/images/bootmii/BootMii_HBC.png)

   ::: warning

   If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

   :::

   ::: warning

   Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

   :::

4. Ezek után az alábbihoz hasonló képernyőt fogsz látni a Wii képernyőjén:

   ![](/images/bootmii/BootMii_Main.png)

   ::: info

   A BootMii irányítása nem lehetséges Wii Remote-tal.
   Vagy a konzolba épített POWER- és RESET-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod!
   A következő menüpontra a POWER-gombbal léphetsz át. A kiválasztáshoz nyomd meg a RESET-gombot!

   :::

5. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

   ![](/images/bootmii/BootMii_Gears.png)

6. Válaszd ki a bal szélső menüpontot!

   ![](/images/bootmii/BootMii_Backup.png)

7. Ezután el fog kezdődni a belső tárhely biztonsági mentése. A folyamatot a képernyőn figyelemmel követheted.

   - Lehetséges, hogy az ábra néhány feketével jelölt sérült blokkot („Bad block”) fog mutatni. Ne aggódj – ez a gyárban történő adatosztályozás természetes mellékterméke és nem azt jelenti, hogy baj van.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Miután a folyamat lezáródott, a BootMii ellenőrizni fogja a biztonsági mentés minőségét. Ha minden jól sikerült, akkor az összes blokk zölden fog megjelenni az ábrán.

   - Ha a mentés tartalmaz olyan gyárilag sérült blokkokat, amelyekben vannak javíthatatlan oldalak, akkor azok nem fognak átmenni az ellenőrzésen. Addig amíg a nem-hibás blokkok sikeresen ellenőrzésre kerülnek, ez nem probléma.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Ha végeztél, nyomd meg a jobb szélen található vissza-gombot, majd a kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel-gombot!

   ![](/images/bootmii/BootMii_Return.png)

::: info

Note: **restoring a NAND backup is usually a last resort**. Sokszor jobb módja is van a konzol megjavításának.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Automatikus indítás

Ha képes voltál boot2 alá telepíteni a BootMiit és nem szeretnéd, hogy bekapcsoláskor a konzol mindig a BootMii-képernyőt mutassa, lehetőséged van azt automatikusan a rendszermenübe indítani. Így fel sem fog tűnni, a boot2 alá telepített BootMii.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Ha végeztél, mentsd el a fájlt és zárd be!

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## A NAND mentés feltöltése a Dolphin Emulátorba

A NAND mentésed felhasználható a Dolphin Emulátorban.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Indítsd el a Dolphin Emulátort.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. A BootMii IOS-es felhasználóinak számára kiemelten fontos.

:::
