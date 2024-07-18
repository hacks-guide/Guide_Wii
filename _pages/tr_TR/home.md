---
layout: splash
title: "Wii Hacks Guide"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "Wii, vWii ve Wii mini'nizi hacklemek için eksiksiz bir rehber."
---

Bu rehber paylaşıldığından beri, çeviriler üzerinde çalışılıyor. Sabrınız için teşekkürler!
{: .notice--info}

Bu rehberi en iyi şekilde kullanmak için, başlamadan önce bu sayfayı okumalısınız.
{: .notice--warning}

### Homebrew nedir?

**Homebrew** bir donanımın orijinal üreticisinin çalıştırılmasına yetki vermediği yazılımlardır - Bu durumda, Nintendo. Wii'de homebrew çalıştırabilme yeteneği kazanmak için, konsol ilk önce bunları çalıştırılacak şekilde modifiye edilmiş olmalıdır.

Aşağıda homebrew yazılımlarının Wii'niz için neler yapabileceğinin bazı örnekleri vardır:

+ Wii'nizin NAND (dahili depolaması)'nı [yedeklemek](bootmii) ve [geri yüklemek](bootmiirecover)
+ Wii'nizin [brick korumasını](priiloader) yükseltmek
+ [Open Shop Channel](osc)'dan yeni homebrew uygulamaları indirmek
+ Oyun modifikasyonlarını yüklemek için [oyun disklerini yamamak](https://wiki.hacks.guide/wiki/Wii:Riivolution)
+ Wii menüsüne [temalar](themes) kurmak
+ [Disklerinizi](dump-games) ve [diğer kurulu uygulamaları](dump-wads) yedeklemek
+ Wii'nizde [DVD'ler](recommended-homebrew#entertainment) izlemek ve medya dosyaları oynatmak
+ Oyunlarınızın yedeklerini harici bir kaynaktan oynamak için bir [USB yükleyici](wii-loaders) kurmak
+ [Wii](wii-saves) ve [GameCube](gcsaves) oyun kayıtı dosyalarınızı yedeklemek ve geri yüklemek
+ [WiiConnect24](wiiconnect24) ve [Nintendo Wi-Fi Connection](wiimmfi) için çevrimiçi özellikleri geri getirmek

### Bu rehber ne kurar?

Bu rehber şunları yapmayı hedef alır:

+ Hedefleri HackMii Installer'ı yüklemek olan exploitlerden birisiyle Wii'nizi modifiye etmek
+ BootMii ve Homebrew Channel'ı kurmak
+ Önemli sistem dosyalarını yedeklemek
+ Priiloader'ı kurmak
+ Install the Open Shop Channel
+ Recommended homebrew to use on your Wii
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection

### What should I know before starting?

+ Running homebrew on your Nintendo Wii can be done for free by exploiting bugs in Wii's software. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### Ready?

The guide has nine sections in total. These are listed below:

1. Choosing and using an exploit (REQUIRED)
1. Installing the Homebrew Channel and BootMii (REQUIRED)
1. Making a NAND backup with BootMii (REQUIRED)
1. Installing Priiloader (REQUIRED)
1. Installing the Open Shop Channel (RECOMMENDED)
1. Installing cIOS (RECOMMENDED)
1. Discovering Recommended Homebrew (RECOMMENDED)
1. Regaining WiiConnect24 Functionality (OPTIONAL)
1. Regaining Nintendo Wi-Fi Connection Functionality (OPTIONAL)

Get started by [choosing your exploit](get-started)!
{: .notice--info}
