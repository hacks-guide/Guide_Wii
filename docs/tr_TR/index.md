---
layout: home
title: Wii Hacks Guide
hero:
  text: Wii Hacks Guide
  tagline: Wii, vWii ve Wii mini'nizi hacklemek için eksiksiz bir rehber.
  image:
    src: /images/main-pages/home-page-feature.jpg
---

::: info

Bu rehber paylaşıldığından beri, çeviriler üzerinde çalışılıyor. Sabrınız için teşekkürler!

:::

::: warning

Bu rehberi en iyi şekilde kullanmak için, başlamadan önce bu sayfayı okumalısınız.

:::

## Homebrew nedir?

**Homebrew** refers to software that was not authorized by the original creator of a piece of hardware - in this case, Nintendo. Wii'de homebrew çalıştırabilme yeteneği kazanmak için, konsol ilk önce bunları çalıştırılacak şekilde modifiye edilmiş olmalıdır.

Aşağıda homebrew yazılımlarının Wii'niz için neler yapabileceğinin bazı örnekleri vardır:

- [Backup](bootmii) and [restore](bootmiirecover) your Wii's NAND (system memory)
- Enhance the [brick protection](priiloader) of your Wii
- Download new homebrew apps with the [Open Shop Channel](osc)
- [Patch game disc contents](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
- Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
- Back up your [discs](dump-games) and [other installed titles](dump-wads)
- Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
- Install a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
- Restore online functionality to both [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](wiimmfi)

## Bu rehber ne kurar?

Bu rehber şunları yapmayı hedefler:

- Hedefleri HackMii Installer'ı yüklemek olan exploitlerden birisiyle Wii'nizi modifiye etmek
- BootMii ve Homebrew Channel'ı kurmak
- Önemli sistem dosyalarını yedeklemek
- Priiloader'ı kurmak
- Open Shop Channel'ı kurmak
- Wii'de kullanmak için önerilen homebrew uygulamalarını keşfetmek
- WiiConnect24 ve Nintendo Wi-Fi Connection hizmetlerini geri kazanmak

## Başlamadan önce neleri bilmeliyim?

- Homebrew 100% ücretsizdir, ve Wii'nizi modifiye etme süreci de tamamen ücretsizdir. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
- This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
- **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
- Modifiye edilmiş Wii'niz ile ne yapmak istediğinize bağlı olarak, sisteme brickleme (konsolu kullanılamayacak bir duruma getirmek) riski olan bazı modifikasyonlar yapmak zorunda kalabilirsiniz. As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
- Wii ve Wii mini arasındaki farklar kayda değerdir. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Eğer bir Wii mini'yi modifiye edecekseniz dikkatli olun!
- Be extremely careful when modifying a [Korean Wii](bricks#koreankii-error-003-brick).

## Hazır mısınız?

Bu rehber toplam dokuz bölüm içeriyor. Aşağıda yazılılar:

1. Bir exploit seçmek ve kullanmak (GEREKLİ)
2. Homebrew Channel ve BootMii'yi kurmak (GEREKLİ)
3. BootMii ile bir NAND yedeği oluşturmak (GEREKLİ)
4. Priiloader'ı kurmak (GEREKLİ)
5. Open Shop Channel'ı kurmak (ÖNERİLİR)
6. cIOS'ları kurmak (ÖNERİLİR)
7. Önerilen homebrew uygulamalarını keşfetmek (ÖNERİLİR)
8. WiiConnect24 özelliklerini geri kazanmak (İSTEĞE BAĞLI)
9. Nintendo Wi-Fi Connection özelliklerini geri kazanmak (İSTEĞE BAĞLI)

::: tip

Continue to [Get Started](get-started)

:::
