---
title: "Wii Oyun Kısayolları Oluşturmak"
---

{% include toc title="İçerikler" %}

Bir Wii yedekleme yöneticisi kullanıyor ve sistem menüsünde kısayollar oluşturmak mı istiyorsunuz? Eskiden Crap olarak bilinen WiiGSC'yi (Wii Oyun Kısayolu Yaratıcısı) deneyin.

Bir brickten korunmak için, [Priiloader olması zorunludur](/priiloader). Ayrıca, BootMii'yi de kurun (eğer eski bir Wiiniz varsa boot2 olarak). Brick korumanız varsa ve bu rehberi düzgün bir şekilde kullanırsanız bricklerden korunabilirsiniz. BOOTMII VE PRIILOADER'I KURMADAN DEVAM ETMEYİN!
{: .notice--warning}

"Mario Party 9" veya "A Boy and His Blob" adlı oyunlar için kısayollar YAPMAYIN. Bu Wiinizi brickleyecektir.
{: .notice--warning}

Wii Menüsü 48 kanal limitine sahiptir, sistem kanallarını saymazsak.
{: .notice--info}

### Gereksinimler

* Bir Wii
* Bir SD card veya USB yığın depolama aygıtı
* [YAWM ModMii Edition](yawmme)
* Bir Windows bilgisayar.
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Talimatlar

1. WiiGSC'yi kurun, sonra ona sağ tıklayın ve **Yönetici olarak çalıştır**'ı seçin. Eğer bunu yapmazsanız, WiiGSC açmaya çalıştığınızda hata verecektir.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. SD card veya USB yığın depolama aygıtınızdaki ISO veya WBFS dosyasını seçin, ve kullandığınız USB yedekleme yöneticisini seçin. Kalan ayarlar olduğu gibi kalabilir.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

Eğer bir vWii kullanıyorsanız vWii'de kullanılabilir WAD oluşturmak için [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) aracını kullanın.
{: .notice--info}

3. Oluşturulmuş WAD dosyasını [WAD yöneticiniz ile kurun](yawmme).

<div class="notice--info">
Eğer "The system files are corrupted" (Sistem dosyaları bozulmuş) diyen bir hata alırsanız, Priiloader kurulu olduğu sürece paniklemeyin. Wii'nizi kapatın, sonra da konsolunuz için uygun olan yöntemlerden birisini kullanarak [Priiloader'ı açın.](priiloader#section-iii---entering-priiloader) Homebrew Channel'a girin ve WAD'ı kaldırmak için WAD yöneticinizi açın. Eğer Priiloader kurulu değilse, [BlueBomb](bluebomb)
</div>

[Site dizinine geri dönmek için burayı tıklayın.](site-navigation)
{: .notice--info}
