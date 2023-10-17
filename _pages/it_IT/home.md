---
layout: splash
title: "Guida per l'Hacking del Wii"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "La guida omnicomprensiva per modificare il tuo Wii (e Wii mini)."
---

Dal momento che questa guida è stata appena pubblicata, le traduzioni sono ancora in corso d'opera. Grazie per la pazienza!
{: .notice--info}

Per trarre il massimo da questa guida, dovresti leggere questa pagina prima di procedere.
{: .notice--warning}

### Cos'è l'homebrew?

Il nome **Homebrew** si riferisce a una tipologia di software non autorizzata dal creatore originale dell'hardware - in questo caso, Nintendo. Per poter avviare software homebrew sul tuo Wii, la console deve essere prima modificata per eseguire codice non firmato.

Ecco degli esempi comuni di cosa il software homebrew può fare per il tuo Wii:

+ Eseguire [backup](bootmii) e [ripristinare](bootmiirecover) la NAND (memoria di sistema) del tuo Wii
+ Aumentare la [protezione dai brick](priiloader) del tuo Wii
+ Scaricare nuove applicazioni homebrew con [Open Shop Channel](osc)
+ [Patch game disc contents](riivolution) to load game modifications
+ Turn your Wii into a [media center](wiimc)
+ Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
+ Back up your [discs](dump-games) and [other installed titles](dump-wads)
+ Install a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
+ Back up and restore your [Wii](wii-saves) and [GameCube](gcsaves) save files
+ Restore online functionality to both [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](wiimmfi)

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

+ Homebrew is 100% free, and the process of modifying your Wii is also free. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered, nor is the Wii U's vWii.
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

Continue to [Get Started](get-started)
{: .notice--info}
