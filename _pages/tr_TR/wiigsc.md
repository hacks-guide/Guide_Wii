---
title: "Wii Oyun Kısayolları Oluşturmak"
---

{% include toc title="İçerikler" %}

Bir Wii yedekleme yöneticisi kullanıyor ve sistem menüsünde kısayollar oluşturmak mı istiyorsunuz? Eskiden Crap olarak bilinen WiiGSC'yi (Wii Oyun Kısayolu Yaratıcısı) deneyin.

Bir brickten korunmak için, [Priiloader olması zorunludur](/priiloader). Ayrıca, BootMii'yi de kurun (eğer eski bir Wiiniz varsa boot2 olarak). Installing brick protection along with following the guide correctly should keep you safe from bricks. DO NOT CONTINUE UNTIL YOU HAVE INSTALLED PRIILOADER AND BOOTMII!
{: .notice--warning}

Do NOT make a shortcut for the games "Mario Party 9" or "A Boy and His Blob". It will brick your Wii.
{: .notice--warning}

The Wii Menu is limited to 48 channels, not including existing system channels.
{: .notice--info}

### Gereksinimler

* A Wii
* An SD or USB drive
* [YAWM ModMii Edition](yawmme)
* A Windows computer.
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Talimatlar

1. Install WiiGSC, then right click on it and choose **Run as administrator**. If you do not do this, WiiGSC will throw an error when you open it.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your SD or USB drive, and select the loader you use. The other options should be fine the way they are.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Install the generated WAD with your [WAD manager](yawmme).

<div class="notice--info">
If you get an error saying "The system files are corrupted", don't panic as long as you installed Priiloader. Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).
</div>

[Site dizinine geri dönmek için burayı tıklayın.](site-navigation)
{: .notice--info}
