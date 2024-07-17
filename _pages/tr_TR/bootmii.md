---
title: "BootMii Yedekleme"
---

{% include toc title="İçerikler" %}

BootMii Wii'nizin NAND depolamasını yedekleme ve geri yükleme için imkan sağlar. Bu sayfa size Wii'nizin NAND depolamasını bir SD card'a yedeklemeniz konusunda yardımcı olur, böylece istediğiniz zaman istediğiniz gibi kullanabilirsiniz.

BootMii'yi kullanmak için bir **SD card** gereklidir, ama özellikle bir NAND yedeklemesi yapmak için. Eğer şu anda bir SD card'ınız yoksa bu sayfayı atlayabilirsiniz, ama en tez zamanda buraya dönüp NAND depolamanızı yedeklemeniz ŞİDDETLE ÖNERİLİR.
{: .notice--warning}

### Gereksinimler

* En az 512 MB boş alanı olan bir SD card (1GB veya fazlası önerilir)

### Talimatlar

Eğer BootMii'yi boot2 olarak kurduysanız, BootMii'yi konsolunuzu kapatıp açarak başlatmanız gerekir. Eğer durumunuz bu ise, birinci ve ikinci aşamaları atlayabilirsiniz.
{: .notice--info}

1. Konsolunuzu açın.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.
    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
    {: .notice--warning}

1. Şimdi buna benzer bir ekran görmüş olmanız gerekir:

    ![](/images/bootmii/BootMii_Main.png)

    Bir Wiimote ile BootMii'yi kontrol etmek mümkün değildir. Konsolunuzdaki POWER ve RESET butonlarını, veya birinci girişe takılmış bir GameCube kumandası kullanmalısınız. To navigate between options, press POWER. To select an option, press RESET.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the first button to the left.

    ![](/images/bootmii/BootMii_Backup.png)

1. A NAND backup will start. You can watch the progress on the screen.
    + "Bad Blocks" are normal. Don't worry when you see some on a NAND backup.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After this step, it will verify the backup. Ideally, all the blocks should be green after the verification process.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long as all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. There are often better ways to unbrick your console.
Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

### Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.
{: .notice--info}

### Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open Dolphin Emulator.
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select Open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. It is especially important for users of BootMii on IOS.
{: .notice--info}
