---
layout: splash
title: "Wii 가이드"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "The complete guide to modding your Wii, vWii, and Wii mini."
---

Since this guide has just been published, translations are a work-in-progress. Thank you for your patience!
{: .notice--info}

To get the most out of this guide, you should read this page before proceeding.
{: .notice--warning}

### "홈브류"가 무엇인가요?

[**홈브류**](https://en.wikipedia.org/wiki/Homebrew_(video_games))는 닌텐도에서 승인하지 않은 소프트웨어를 의미합니다. 여기에는 게임, 유틸리티, 에뮬레이터 등이 포함될 수 있습니다!

Here are some common examples of what homebrew can do for your Wii:

+ [Backup](bootmii) and [restore](bootmiirecover) copies of your Wii system memory (NAND) using [BootMii](hbc).
+ Protect your Wii from bricks then add hacks to your Wii Menu using [Priiloader](priiloader).
+ Download new homebrew apps with the [Open Shop Channel](hbb).
+ Patch game disc contents (allowing you to load game modifications) using [Riivolution](riivolution).
+ [MyMenuify](themes)를 사용하여 Wii 메뉴에 테마를 설치합니다.
+ Back up your discs with [CleanRip](/dump-games) and installed games and titles with [Yet Another BlueDump MOD](dump-wads).
+ Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
+ Back up and restore your Wii save files with [SaveGame Manager GX](https://oscwii.org/library/app/savegame_manager_gx).
+ Restore discontinued online services using [RiiConnect24](riiconnect24), [Wiimmfi](wiimmfi) and [WiiLink](wiilink).
+ Back up and restore your GameCube save files using [GCMM](gcsaves).

### What does the guide install?

This guide aims to do the following, including optional sections:

+ Modify your Wii using one of many exploits, with the end goal of reaching the HackMii installer
+ Install BootMii and the Homebrew Channel
+ Make a backup of critical system files
+ Install Priiloader
+ Install the Open Shop Channel
+ Recommended homebrew to use on your Wii
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection

### What should I know before starting?

+ Wii 소프트웨어의 버그를 이용하면 무료로 닌텐도 Wii에서 홈브류를 실행할 수 있습니다. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### 준비됐나요?

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

[취약점 공격을 선택해서](get-started) 시작하세요!
{: .notice--info}
