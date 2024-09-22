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

Bu rehber şunları yapmayı hedefler:

+ Hedefleri HackMii Installer'ı yüklemek olan exploitlerden birisiyle Wii'nizi modifiye etmek
+ BootMii ve Homebrew Channel'ı kurmak
+ Önemli sistem dosyalarını yedeklemek
+ Priiloader'ı kurmak
+ Open Shop Channel'ı kurmak
+ Wii'de kullanmak için önerilen homebrew uygulamalarını keşfetmek
+ WiiConnect24 ve Nintendo Wi-Fi Connection hizmetlerini geri kazanmak

### Başlamadan önce neleri bilmeliyim?

+ Homebrew 100% ücretsizdir, ve Wii'nizi modifiye etme süreci de tamamen ücretsizdir. Bunun aksini iddia eden birisi sizi muhtemelen [dolandırmaya](https://hbc.hackmii.com/scam) çalışıyordur.
+ Bu rehber exploit'e bağlı olarak bütün sistem menüsü versiyonlarında çalışır, fakat **eğer mümkünse 4.3'e (en son yazılıma) güncellemeniz tavsiye edilir**.
+ **Bu rehber SADECE perakende/tüketici Wiileri içindir!** Bu demek oluyor ki geliştirici üniteleri dahil değildir.
+ Modifiye edilmiş Wii'niz ile ne yapmak istediğinize bağlı olarak, sisteme brickleme (konsolu kullanılamayacak bir duruma getirmek) riski olan bazı modifikasyonlar yapmak zorunda kalabilirsiniz. Eğer bu rehberi harfi harfine yerine getirirseniz, bir sorun olmayacaktır, ama genel brick önleme önerileri için [bu sayfaya](bricks#brick-prevention) bakabilirsiniz.
+ Wii ve Wii mini arasındaki farklar kayda değerdir. Bu demek ki bazı durumlarda, normalde Wii'ye zararı olmayan bir şey Wii mini'de [ciddi bir brick vakasına](bricks#wi-fi-brick) sebep olabilir. Eğer bir Wii mini'yi modifiye edecekseniz dikkatli olun!
+ Bir [Koreli Wii](bricks#korean-kiierror-003-brick)'yi modifiye ederken son derece dikkatli olun.

### Hazır mısınız?

Bu rehber toplam dokuz bölüm içeriyor. Aşağıda yazılılar:

1. Bir exploit seçmek ve kullanmak (GEREKLİ)
1. Homebrew Channel ve BootMii'yi kurmak (GEREKLİ)
1. BootMii ile bir NAND yedeği oluşturmak (GEREKLİ)
1. Priiloader'ı kurmak (GEREKLİ)
1. Open Shop Channel'ı kurmak (ÖNERİLİR)
1. cIOS'ları kurmak (ÖNERİLİR)
1. Önerilen homebrew uygulamalarını keşfetmek (ÖNERİLİR)
1. WiiConnect24 özelliklerini geri kazanmak (İSTEĞE BAĞLI)
1. Nintendo Wi-Fi Connection özelliklerini geri kazanmak (İSTEĞE BAĞLI)

[Başlayın](get-started)'a devam edin
{: .notice--info}
