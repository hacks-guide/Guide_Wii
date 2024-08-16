---
title: "BlueBomb"
---

{% include toc title="İçerikler" %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

Bu exploit aynı zamanda banner brick'leri ve (bazı) tema brick'leri gibi belirli brick'lerden kurtarmayı da mümkün kılar.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Wii mini konsolunuzu hack'lemek için **herhangi bir** video rehberini kullanmamanız **şiddetle** tavsiye edilir, çünkü onu **brick'leme** şansı çok yüksektir.
{: .notice--warning}

Bu eğitimle ilgili herhangi bir konuda yardıma ihtiyacınız olursa lütfen [Wii mini Hacking Discord sunucusuna](https://discord.gg/6ryxnkS) katılın (önerilir)
{: .notice--info}

Wii'nin orijinal revizyonunu kullanıyorsanız, HackMii yükleyicisine ulaşmanın çok daha kolay yolları olduğundan [kullanılacak başka bir exploit](get-started) bulmalısınız. Ancak bir brick'ten kurtarma gibi durumlarda istisnalar mevcuttur.
{: .notice--info}

Konsolun, exploit'i çalıştıran bilgisayara yakın olduğundan emin olun; ideal olarak 3 metreden kısa olmalıdır.
{: .notice--info}

### Gereksinimler
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* FAT32 olarak formatlanmış bir USB yığın depolama aygıtı.
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Talimatlar

1. hackmii_installer_v1.2`.zip`'ten `boot.elf` dosyasını kopyalayın ve USB cihazınızın köküne yapıştırın.
    + (eğer bir brick'i düzeltmeye çalışıyorsanız, kullanmak istediğiniz homebrew uygulamasını da /apps/'e koymayı unutmayın)
    + (Bir Wii mini için bile, bootmini.elf **çalışmayacaktır**, amacı tamamen farklı ve alakasızdır. Bütün senaryolarda boot.elf'i kullanın).
1. Taşınabilir depolama aygıtınızı yeniden konsolunuza takın.
    + Bir Wii mini'de USB girişi konsolun arkasındadır.
    + Normal bir Wii için, alt girişi kullanın (eğer dikeyse sağ girişi).
1. Konsolunuzu açın.
1. `Wii Settings`'e gidin.
1. Ekranın sağ üst köşesindeki, sistem versiyonunun yanındaki harfi not alın.
    + Bu harf sistem menüsü bölgenizi temsil eder, bir sonraki adımlar için bilmeniz gerekir.

    ![](/images/wii/SystemMenuVersion.png)

1. Konsolunuzu kapatın.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
1. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Konsolunuzu açın.
    + Herhangi bir Wiimote **bağlamayın**.
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Bu birkaç deneme alabilir.
1. Eğer exploit başarılı olmuşsa, cihazınız HackMii Installer'ı yüklemiş olmalıdır.

Eğer bir Wii kullanıyorsanız: [Homebrew Channel ve BootMii Kurulumu](hbc)<br>
{: .notice--info}

Eğer bir Wii mini kullanıyorsanız, [Homebrew Channel Kurulumu](hbc-mini)'na devam edin
{: .notice--info}

## BlueBomb Classic

{% capture technical_info %}
<summary><em>Teknik Detaylar (isteğe bağlı)</em></summary>
BlueBomb, Wii ve Wii mini'nin Bluetooth kitaplıklarındaki bir kusurdan yararlanan bir exploit'tir. Her ne kadar Wii mini'de işe yarayan tek exploit olsa da BlueBomb orijinal Wii'de de çalışabilir.

Bu exploit aynı zamanda banner brick'leri ve (bazı) tema brick'leri gibi belirli brick'lerden kurtarmayı da mümkün kılar.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Wii mini konsolunuzu hack'lemek için **herhangi bir** video rehberini kullanmamanız **şiddetle** tavsiye edilir, çünkü onu **brick'leme** şansı çok yüksektir.
{: .notice--warning}

Bu eğitimle ilgili herhangi bir konuda yardıma ihtiyacınız olursa lütfen [Wii mini Hacking Discord sunucusuna](https://discord.gg/6ryxnkS) katılın (önerilir)
{: .notice--info}

Wii'nin orijinal revizyonunu kullanıyorsanız, HackMii yükleyicisine ulaşmanın çok daha kolay yolları olduğundan [kullanılacak başka bir exploit](get-started) bulmalısınız. Ancak bir brick'ten kurtarma gibi durumlarda istisnalar mevcuttur.
{: .notice--info}

Konsolun, exploit'i çalıştıran bilgisayara yakın olduğundan emin olun; ideal olarak 3 metreden kısa olmalıdır.
{: .notice--info}

### Gereksinimler

* Linux çalıştıran bir bilgisayar
    * Bir sanal makinenin çalışma ihtimali vardır, fakat Bluetooth'u sanal makineye geçirmenin zorluğu nedeniyle önerilmez. Eğer mümkün ise, lütfen aşağıda anlatıldığı gibi canlı bir Linux dağıtımı kullanın.
    * Eğer bir Raspberry Pi'ınız varsa, onu kullanabilirsiniz çünkü büyük ihtimalle zaten Linux çalıştırıyordur.
    * Windows Subsystem for Linux veya Linux modunu çalıştıran bir Chromebook *çalışmayacaktır,* çünkü Bluetooth adaptörü veya USB girişlerine doğrudan erişimleri yoktur.
    * Eğer Linux'unuz yoksa, [Ubuntu](https://ubuntu.com/download/desktop) sizin için en kullanıcı dostu seçim olacaktır ve Windows veya macOS çalıştıran bilgisayarlarla uyumludur.
        * 32-bit cihazlar için [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) gereklidir.
        * 64-bit cihazlar için stabil olmasından dolayı en son LTS sürümü önerilse de, en son sürüm de iş görür.
    * Bilgisayarınıza kurmak yerine [bir USB yığın depolama aygıtına bir Linux Live ortamı yazabilirsiniz](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview).
* Bir Bluetooth adaptörü.
    * Dahili bir Bluetooth adaptörü iş görür.
    * Eğer birine sahip değilseniz, Linux ile uyumlu bir tane almaya özen gösterin.
* FAT32 olarak formatlanmış bir USB yığın depolama aygıtı.
    * Bu Linux çalıştıracak bilgisayarınızinki ile aynı aygıt olamaz.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Talimatlar

1. hackmii_installer_v1.2`.zip`'ten `boot.elf` dosyasını kopyalayın ve USB cihazınızın köküne yapıştırın.
    + (eğer bir brick'i düzeltmeye çalışıyorsanız, kullanmak istediğiniz homebrew uygulamasını da /apps/'e koymayı unutmayın)
    + (Bir Wii mini için bile, bootmini.elf **çalışmayacaktır**, amacı tamamen farklı ve alakasızdır. Bütün senaryolarda boot.elf'i kullanın).
1. Taşınabilir depolama aygıtınızı yeniden konsolunuza takın.
    + Bir Wii mini'de USB girişi konsolun arkasındadır.
    + Normal bir Wii için, alt girişi kullanın (eğer dikeyse sağ girişi).
1. Konsolunuzu açın.
1. `Wii Settings`'e gidin.
1. Ekranın sağ üst köşesindeki, sistem versiyonunun yanındaki harfi not alın.
    + Bu harf sistem menüsü bölgenizi temsil eder, bir sonraki adımlar için bilmeniz gerekir.

    ![](/images/wii/SystemMenuVersion.png)

1. Konsolunuzu kapatın.
1. Linux dağıtımınızı başlatın, ve internete bağlı olduğunuzdan emin olun.
1. Terminal'i açın
1. Şu komutları çalıştırın:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. Yardımcı gerekli dosyaları indirecek ve konsulunuz hakkında bilgiler soracaktır.
    + Eğer Wii mini'yi seçtiyseniz bölgenizi söylemeniz istenecektir. Bu Wii menüsü versiyonunuzun son harfinden anlaşılabilir (**ABD** modelleri için `U` ve **PAL (Avrupa)** modelleri için de `E`).
    + Eğer Wii'yi seçtiyseniz sizden Wii menüsü versiyonunuzu girmeniz istenecektir (Aşama 4'te belirlediğiniz şey)
1. Konsolunuzu açın.
    + Herhangi bir Wiimote **bağlamayın**.
1. Terminal `Got connection handle!` diyene kadar Sync butonuna durmadan tıklayın.
    + Bu birkaç deneme alabilir.
1. Eğer exploit başarılı olmuşsa, cihazınız HackMii Installer'ı yüklemiş olmalıdır.
    + Eğer sonra kullanmayı düşünmüyorsanız, şimdi Linux dağıtımınızı kapatabilirsiniz.

Eğer bir Wii kullanıyorsanız: [Homebrew Channel ve BootMii Kurulumu](hbc)<br>
{: .notice--info}

Eğer bir Wii mini kullanıyorsanız, [Homebrew Channel Kurulumu](hbc-mini)'na devam edin
{: .notice--info}
