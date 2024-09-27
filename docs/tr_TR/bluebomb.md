# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Her ne kadar Wii mini'de işe yarayan tek exploit olsa da BlueBomb orijinal Wii'de de çalışabilir.

Bu exploit aynı zamanda banner brick'leri ve (bazı) tema brick'leri gibi belirli brick'lerden kurtarmayı da mümkün kılar.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Ancak bir brick'ten kurtarma gibi durumlarda istisnalar mevcuttur.

:::

::: info

Konsolun, exploit'i çalıştıran bilgisayara yakın olduğundan emin olun; ideal olarak 3 metreden kısa olmalıdır.

:::

### Gereksinimler

- Linux çalıştıran bir bilgisayar
  - Bir sanal makinenin çalışma ihtimali vardır, fakat Bluetooth'u sanal makineye geçirmenin zorluğu nedeniyle önerilmez. Eğer mümkün ise, lütfen aşağıda anlatıldığı gibi canlı bir Linux dağıtımı kullanın.
  - Eğer bir Raspberry Pi'ınız varsa, onu kullanabilirsiniz çünkü büyük ihtimalle zaten Linux çalıştırıyordur.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - 64-bit cihazlar için stabil olmasından dolayı en son LTS sürümü önerilse de, en son sürüm de iş görür.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Bir Bluetooth adaptörü.
  - Dahili bir Bluetooth adaptörü iş görür.
  - Eğer birine sahip değilseniz, Linux ile uyumlu bir tane almaya özen gösterin.
- FAT32 olarak formatlanmış bir USB yığın depolama aygıtı.
  - Bu Linux çalıştıracak bilgisayarınızinki ile aynı aygıt olamaz.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Talimatlar

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (eğer bir brick'i düzeltmeye çalışıyorsanız, kullanmak istediğiniz homebrew uygulamasını da /apps/'e koymayı unutmayın)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Bütün senaryolarda boot.elf'i kullanın).

2. Taşınabilir depolama aygıtınızı yeniden konsolunuza takın.
   - Bir Wii mini'de USB girişi konsolun arkasındadır.
   - Normal bir Wii için, alt girişi kullanın (eğer dikeyse sağ girişi).

3. Konsolunuzu açın.

4. Go to `Wii Settings`.

5. Ekranın sağ üst köşesindeki, sistem versiyonunun yanındaki harfi not alın.

   - Bu harf sistem menüsü bölgenizi temsil eder, bir sonraki adımlar için bilmeniz gerekir.

   ![](/images/wii/SystemMenuVersion.png)

6. Konsolunuzu kapatın.

7. Linux dağıtımınızı başlatın, ve internete bağlı olduğunuzdan emin olun.

8. Terminal'i açın

9. Şu komutları çalıştırın:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. Yardımcı gerekli dosyaları indirecek ve konsulunuz hakkında bilgiler soracaktır.
    - Eğer Wii mini'yi seçtiyseniz bölgenizi söylemeniz istenecektir. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Eğer Wii'yi seçtiyseniz sizden Wii menüsü versiyonunuzu girmeniz istenecektir (Aşama 4'te belirlediğiniz şey)

11. Konsolunuzu açın.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Bu birkaç deneme alabilir.

13. It'll then proceed to download and load the HackMii Installer.
    - Eğer sonra kullanmayı düşünmüyorsanız, şimdi Linux dağıtımınızı kapatabilirsiniz.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

Bu exploit aynı zamanda banner brick'leri ve (bazı) tema brick'leri gibi belirli brick'lerden kurtarmayı da mümkün kılar.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Ancak bir brick'ten kurtarma gibi durumlarda istisnalar mevcuttur.

:::

::: info

Konsolun, exploit'i çalıştıran bilgisayara yakın olduğundan emin olun; ideal olarak 3 metreden kısa olmalıdır.

:::

### Gereksinimler

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- FAT32 olarak formatlanmış bir USB yığın depolama aygıtı.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Talimatlar

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (eğer bir brick'i düzeltmeye çalışıyorsanız, kullanmak istediğiniz homebrew uygulamasını da /apps/'e koymayı unutmayın)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Bütün senaryolarda boot.elf'i kullanın).

2. Taşınabilir depolama aygıtınızı yeniden konsolunuza takın.
   - Bir Wii mini'de USB girişi konsolun arkasındadır.
   - Normal bir Wii için, alt girişi kullanın (eğer dikeyse sağ girişi).

3. Konsolunuzu açın.

4. Go to `Wii Settings`.

5. Ekranın sağ üst köşesindeki, sistem versiyonunun yanındaki harfi not alın.

   - Bu harf sistem menüsü bölgenizi temsil eder, bir sonraki adımlar için bilmeniz gerekir.

   ![](/images/wii/SystemMenuVersion.png)

6. Konsolunuzu kapatın.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Konsolunuzu açın.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Bu birkaç deneme alabilir.
4. It'll then proceed to download and load the HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
