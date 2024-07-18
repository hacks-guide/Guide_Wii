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

    Bir Wiimote ile BootMii'yi kontrol etmek mümkün değildir. Konsolunuzdaki POWER ve RESET butonlarını, veya birinci girişe takılmış bir GameCube kumandası kullanmalısınız. Seçenekler arasında gezinmek için, POWER butonuna basın. Bir seçeneği seçmek için, RESET butonuna tıklayın.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Soldan ilk butonu seçin.

    ![](/images/bootmii/BootMii_Backup.png)

1. Bir NAND yedeklemesi başlayacaktır. Ekranda süreci izleyebilirsiniz.
    + "Bad Blocks" are normal. Bunları bir NAND yedeklemesinde gördüğünüzde endişelenmeyin.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After this step, it will verify the backup. İdeal olarak, bütün bloklar doğrulama sürecinden sonra yeşil olmalıdır.
    + Eğer düzeltilemeyecek kötü bloklarınız var ise, bu bloklar doğrulanamayabilir. Bütün kötü olmayan bloklar doğrulandığı sürece, hiçbir sorun olmayacaktır.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Not: **bir NAND yedeklemesini geri yüklemek genellikle son çaredir**. Genellikle konsolunuzu bir brick'ten kurtarmak için daha iyi yollar vardır.
[Brick durumunuzu tanımlamak](bricks) için elinizden gelenin en iyisini yapın ve ilk etapta buna neden olan eylemi tersine çevirin.
SD card'ınızdan bir NAND yedeklemesini geri yüklemek için, [RestoreMii](bootmiirecover) talimatlarını uygulayabilirsiniz. **Family edition Wiiler (GameCube girişleri olmayan Wiiler) donanım modifikasyonu olmadan NAND yedeklemelerini geri YÜKLEYEMEZLER.**
</div>

SD card'ınızın kök dizininde iki tane dosya oluşturulmuş olacaktır: `nand.bin` ve `keys.bin`. `nand.bin` konsolunuzun dahili depolamasının bir yedeği iken, `keys.bin` konsolunuzun anahtarlarıdır.
{: .notice--info}

### Otomatik önyükleme

Eğer BootMii'yi boot2 olarak kurabilmişseniz, ancak Wiinizi her açtığınızda BootMii ekranını görmek istemiyorsanız, otomatik olarak sistem menüsünü açma seçeneğiniz vardır. Böylece BootMii'yi boot2 olarak kurduğunuzun farkına bile varmazsınız.

1. `SD:/bootmii/bootmii.ini` dosyasını not defteri gibi bir metin düzenleyicisi ile açın.
1. `#`'i silerek `#AUTOBOOT=SYSMENU` yazısını `AUTOBOOT=SYSMENU` olarak değiştirin.
1. Sonra da `#`'i silerek ve `5`'i `1` yaparak `#BOOTDELAY=5` yazısını `BOOTDELAY=1` olarak değiştirin.
1. Dosyayı kaydedin ve çıkın.

Ayrıca Wii'de [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) uygulamaı ile de bu ayarları değiştirebilirsiniz.
{: .notice--info}

### Dolphin Emulator'a NAND yedeklemesini yüklemek

NAND yedeklemeniz Dolphin Emulator'da kullanılabilir.

1. [Dolphin web sitesinden](https://dolphin-emu.org/) en yeni sürümü ya da geliştirici sürümünü indirin ve cihazınıza kurun.
1. Dolphin Emulator'ü açın.
1. `Tools` sekmesine tıklayın, ardından `Manage NAND` seçeneğinin üstüne gelin, sonra da `Import BootMii NAND backup...`'a tıklayın.
1. `nand.bin` dosyasını bulun ve Aç butonuna tıklayın.
1. Eğer `keys.bin` dosyasını da isterse, onu da bulun ve Aç butonuna tıklayın.

[Priiloader kurulumu'na devam edin](priiloader)<br> Priiloader ikinci bir brick'ten koruma katmanıdır, ve BootMii'yi boot2 olarak kurmuş olsanız bile önerilir. BootMii'yi sadece bir IOS olarak kurabildiyseniz çok önemlidir.
{: .notice--info}
