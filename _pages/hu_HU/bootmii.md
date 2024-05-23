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
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.
    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking upon launching BootMii, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
    {: .notice--warning}

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    Navigating BootMii is not possible using a Wii Remote. You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1. To navigate between options, press POWER. To select an option, press RESET.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

1. A NAND backup will start. You can watch the progress on the screen.
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
