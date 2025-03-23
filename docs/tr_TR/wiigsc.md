# Wii Oyun Kısayolları Oluşturmak

Bir Wii yedekleme yöneticisi kullanıyor ve sistem menüsünde kısayollar oluşturmak mı istiyorsunuz? Eskiden Crap olarak bilinen WiiGSC'yi (Wii Oyun Kısayolu Yaratıcısı) deneyin.

::: warning

In the case of a brick, [installing Priiloader is a must](/priiloader). Ayrıca, BootMii'yi de kurun (eğer eski bir Wiiniz varsa boot2 olarak). Brick korumanız varsa ve bu rehberi düzgün bir şekilde kullanırsanız bricklerden korunabilirsiniz. BOOTMII VE PRIILOADER'I KURMADAN DEVAM ETMEYİN!

:::

::: warning

"Mario Party 9" veya "A Boy and His Blob" adlı oyunlar için kısayollar YAPMAYIN. Bu Wiinizi brickleyecektir.

:::

::: info

Wii Menüsü 48 kanal limitine sahiptir, sistem kanallarını saymazsak.

:::

## Requirements

- Bir Wii
- Bir SD card veya USB yığın depolama aygıtı
- [YAWM ModMii Edition](yawmme)
- Bir Windows bilgisayar.
- [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

## Instructions

1. Install WiiGSC, then right click on it and choose **Run as administrator**. Eğer bunu yapmazsanız, WiiGSC açmaya çalıştığınızda hata verecektir.

   ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. SD card veya USB yığın depolama aygıtınızdaki ISO veya WBFS dosyasını seçin, ve kullandığınız USB yedekleme yöneticisini seçin. Kalan ayarlar olduğu gibi kalabilir.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

   ::: info

   If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.

   :::

3. Install the generated WAD with your [WAD manager](yawmme).

::: info

Eğer "The system files are corrupted" (Sistem dosyaları bozulmuş) diyen bir hata alırsanız, Priiloader kurulu olduğu sürece paniklemeyin. Wii'nizi kapatın, sonra da konsolunuz için uygun olan yöntemlerden birisini kullanarak [Priiloader'ı açın.](priiloader#section-iii---entering-priiloader) Homebrew Channel'a girin ve WAD'ı kaldırmak için WAD yöneticinizi açın. Eğer Priiloader kurulu değilse, [BlueBomb](bluebomb)

:::

::: tip

[Site haritasına geri dönmek için tıklayın.](site-navigation)

:::
