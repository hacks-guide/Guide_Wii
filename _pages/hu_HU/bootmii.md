---
title: "BootMii biztonsági mentés"
---

{% include toc title="Tartalomjegyzék" %}

A BootMii lehetővé teszi, hogy biztonsági mentést készíts a Wiid belső tárhelyéről és visszatöltsd azt. Ezen az oldalon megismerkedhetsz a biztonsági mentés készítéséről az SD kártyára, amivel aztán úgy cselekedhetsz, ahogy szeretnél.

A BootMii használatához szükséged lesz egy **SD kártyára**. A biztonsági mentést is erre fogjuk másolni. Ha jelenleg nem rendelkezel egy SD kártyával, akkor kihagyhatod ezt az oldalt, de ERŐSEN AJÁNLJUK, hogy később térj vissza és készíts egy biztonsági mentést a Wiid belső tárhelyéről!
{: .notice--warning}

### Követelmények

* Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)

### Útmutató

Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.
{: .notice--info}

1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” („A BootMii indítása”)-menüpontot!

    ![](/images/bootmii/BootMii_HBC.png)

    Ha a `Launch BootMii`-menüpont nem jelenik meg a Homebew Channelben, [indítsd újra a HackMii-telepítőt](hackmii) és telepítsd újra a BootMiit!
    {: .notice--warning}

    Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a .zip-fájlt](/assets/files/bootmii_sd_files.zip), csomagold ki az SD kártyád gyökérmappájába és próbáld újra!
    {: .notice--warning}

1. Ezek után az alábbihoz hasonló képernyőt fogsz látni a Wii képernyőjén:

    ![](/images/bootmii/BootMii_Main.png)

    A BootMii irányítása nem lehetséges Wii Remote-tal. Vagy a konzolba épített POWER- és RESET-gombokat, vagy egy 1. csatlakozóba dugott GameCube-vezérlőt kell használnod! A következő menüpontra a POWER-gombbal léphetsz át. A kiválasztáshoz nyomd meg a RESET-gombot!
    {: .notice--info}

1. Válaszd ki az „Options” („beállítások”)-menüpontot! (Ez az, amelyiken egy fogaskerék van.)

    ![](/images/bootmii/BootMii_Gears.png)

1. Válaszd ki a bal szélső menüpontot!

    ![](/images/bootmii/BootMii_Backup.png)

1. Ezután el fog kezdődni a belső tárhely biztonsági mentése. You can watch the progress on the screen.
    + "Bad Blocks" are normal, and mostly originate from the factory due to NAND binning. Don't worry when you see some on a NAND backup.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. Ideally, all the blocks should be green after the verification process.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Press the Back button (the one with an arrow), then press either the Wii Menu button or the Homebrew Channel button to exit BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Note: **restoring a NAND backup is usually a last resort**. There are often better ways to unbrick your console.
Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

### Autobootolás

If you were able to install BootMii as boot2, but dont want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. It is especially important for users of BootMii on IOS.
{: .notice--info}
