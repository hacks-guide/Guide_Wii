---
layout: home
title: "Wii 해킹 가이드"
hero:
  text: "Wii 해킹 가이드"
  tagline: "완벽한 Wii, vWii, Wii 미니 해킹 가이드."
  image:
    src: /images/main-pages/home-page-feature.jpg
---

::: tip

<span style="font-size: 16px;">:clock1: **Estimated Completion Time: 30 to 60 minutes**</span>

Beyond this estimate, we recommend allocating more time as needed to allow yourself to read and fully understand the guide material. This ensures you can properly execute guide instructions and keep your Wii, vWii, or Wii mini safe and functional.

We also highly advise you to read this introduction page in detail; although it is information dense, it is designed to provide you with important information to streamline your modding process.

Required device backups typically take 5 to 10 minutes to complete. This may vary based on your backup method, SD card specifications, and console choice.

:::

::: warning

Before starting, we would advise users NOT to use video guides for a variety of reasons. These reasons include:

- Uploaders typically do not edit their guides after uploading, even if there are mistakes. This can result in the guide becoming outdated as information develops.
- Video guides are difficult to give assistance with on our server, and will not be supported if seeking assistance.
- Videos typically refer users to a pre-packaged download, which can be poorly organized, outdated, or potentially even incorrect.

We are not currently, historically, or will ever be, associated with video guide creators on platforms such as YouTube or TikTok. Any that claim relation to us are doing so falsely; we resent any implication to the contrary.

:::

## What do I need to know before starting?

This page will explore:

- Important terms used in the context of this guide, as well as in the Wii modding scene in general
- What this guide does to your console, and what we plan to install
- What you can do with a modded Wii/vWii/Wii mini
- What you need to mod your console
- Other important notices before proceeding

## What do the terms on this guide mean?

The primary terms used on this guide are explained in various sections below.

For more information about other terms used on this guide, please see the [glossary](glossary).

### "홈브류"가 무엇인가요?

Homebrew refers to unofficial software written by hobbyists for locked down systems, like the Nintendo Wii. Homebrew can include original games, emulators, save-editing tools, and much, much more!

Unlike some other consoles, the Wii, vWii, and Wii mini can be modded purely through software; meaning that beyond necessary equipment like an SD card, this is a **free** process.

### What is (c)IOS?

IOS (IOP-OS, not associated with Apple or Cisco IOS) is the underlying operating system that the Nintendo Wii runs on (with the exception of being in GameCube mode). The implementation of this OS software on the Wii is unique in that instead of one dedicated set of software, there are instead many different "slots" or "branches" that the Wii can pull from. Simply, when you use your Wii, the currently running software chooses a specific IOS slot to function under; this provides different functionality on-demand. More information about IOS can be found on [WiiBrew](https://wiibrew.org/wiki/IOS).

cIOSes are patched IOSes based off IOS versions with desirable functionality; for example, using the right base can provide USB 2.0 support among other things. Once installed, these cIOSes can then be used in homebrew software. This guide will allow you to install d2x cIOS in a later section such that USB loaders can function, which allows the usage of game backups.

### What is NAND?

[NAND](https://en.wikipedia.org/wiki/Flash_memory) is the underlying type of flash memory that the Nintendo Wii functions on, holding 512MB of total usable memory. The NAND supplies IOS and other system files, game saves, Wii channels, and more. This guide will instruct you to create a NAND backup; it is crucially important to have on hand if anything goes wrong as it holds keys and data that are unique to your console. Without it, your console may be **unrecoverable** in the event of a failure or mistake (as rare as they are).

## What does this guide install?

This guide has the end-goal of taking a completely unmodified Wii, vWii, or Wii mini and putting it into a state where homebrew can be ran. You will not lose any data so long as you follow guide instructions as written; your saves and games will not be lost and the functionality of your console will only be enhanced.

Your console will be modded through the usage of the **HackMii Installer**. This will install the Homebrew Channel, your primary entry point for running homebrew, as well as BootMii, a crucial protection tool for your console. After this, the guide will provide additional protection via a tool called Priiloader, and provide instructions on how to install other recommended tools and software, if you so choose.

## What can I do with homebrew?

- [Back up](nand-backup) and [restore](bootmiirecover) your Wii's NAND
- Back up [discs](dump-games) and [other installed titles](dump-wads)
- [Patch game discs](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
- Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
- Use a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
- Restore online console functionality through [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](nintendowfc)
- Utilize [emulators and other recommended software](recommended-homebrew) on your console

It is recommended that you check the links above during or after the standard console modding process.

## What do I need to follow this guide?

You will need **different equipment** depending on whether you are trying to mod a Wii, vWii, or Wii mini. This equipment will be outlined on the next guide page when you are asked to choose an exploit method to mod your console. Other important information about the equipment you may need is also outlined in the following section.

## What else should I know before proceeding?

### Important Prerequisites

::: danger

**Bricking Risks**

When following the guide or using specific kinds of homebrew, there is always a risk that you may **brick** your console. A brick is a damaged device that can no longer function; in other words, something that becomes "as useful as a brick".

Bricks are rare and preventable on Nintendo Wii consoles. They typically do not happen unless you make a mistake or deliberately edit something that you shouldn't. Therefore, please ensure that you read the content of this guide **CAREFULLY**, and follow instructions **EXACTLY** while performing them to protect your console.

Other things you should avoid to help prevent bricking your console are:

- Restoring NAND backups from other consoles; this will **IMMEDIATELY** brick your system
- Installing cIOS packs like DARKCORP, which needlessly overrite IOS slots and can break your console's functionality
- Installing updates intended for another region, modifying system files, or region changing your console unless you know **exactly** what you are doing
- Installing IOS intended for a specific console onto another; this will also result in an **immediate** brick in the worst case scenarios

More information about bricks, alongside tips to prevent them, can be found on the [bricks page](bricks).

:::

::: warning

**Getting Assistance**

Need more assistance? Join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask for help in English on the `#wii-vwii-assistance` channel. Please provide this information:

1. The exact error message, or what you see on the screen (include a photo if possible)
2. The exact steps you took before the problem started
3. A [SysCheck](syscheck) log if you can get one
4. Do you have a NAND backup? (yes or no)
5. Did you install Priiloader, BootMii as IOS, or BootMii as boot2? (yes or no to each)
6. Your specific console model (Original Wii, Family Edition Wii, Wii mini, vWii on Wii U)

We also suggest joining the server to ask questions if you have trouble understanding the guide.

If you do not speak English well, please use a translator like [Google Translate](https://translate.google.com/) to write your question. We are happy to help you. Please explain your problem clearly!

:::

### Hardware Compatibility

::: tip

**Storage Compatibility**

SD 카드의 경우, 익스플로잇을 실행하려면 최소 128MB가 필요합니다. 하지만, 평균적으로 2GB 이상 크기의 카드가 필요합니다. The Wii can read SD cards of most capacities (even those larger than 32GB), but the card must be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**not** exFAT or NTFS).

USB 장치의 경우 [FAT32/MS-DOS 형식으로 포맷된](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) USB 하드 드라이브 또는 솔리드 스테이트 드라이브를 사용하는 것이 좋습니다. 플래시 드라이브는 Wii에서 고장이 나거나 의도한 대로 작동하지 않을 수 있으므로 사용하지 않는 것이 좋습니다.

대부분의 경우 2.5인치 드라이브는 Wii에서 USB 전원만으로 문제없이 작동하지만, 3.5인치 드라이브는 전력 소모가 더 많으므로 항상 외부 전원 어댑터가 필요합니다. Wii U 및 Wii 미니 사용자의 경우, 전력 소모 때문에 USB 전원만으로 작동하는 드라이브에는 외부 전원 공급 USB 허브 또는 Y 케이블을 사용하는 것이 좋습니다.

자세한 내용은 [저장소 자주 묻는 질문](faq#storage-device-faq)를 참조합니다.

:::

::: tip

**Network Compatibility**

Wii는 오래된 콘솔이기 때문에 최신 무선 네트워크에 연결하는 데 어려움이 있을 수 있습니다.

이 제품의 네트워크 하드웨어는 2.4 GHz 대역에서 작동하는 802.11g (이후 Wi-Fi 3으로 명칭 변경)를 기반으로 합니다. 또한 최대 WPA2-PSK (AES) 개인 네트워크 암호화도 지원합니다. You must make sure your network supports these standards if you would like to use Wi-Fi with your Wii; please note that routers from Xfinity and Spectrum are known to be incompatible with these settings.

Wii U의 경우 vWii는 Wii U 기본 설정에서 설정한 인터넷 설정을 그대로 사용하지만, [Wii VC 실행](https://hb-app.store/wiiu/WiiVCLaunch) 아로마 플러그인을 이용해 선택적으로 분리할 수 있습니다.

자세한 내용은 [네트워크 자주 묻는 질문](faq#networking-faq)를 참조합니다.

:::

::: tip

**Base Console Compatibility**

This guide works with all off-the-shelf retail Wiis, including Wii mini and the Wii U's Wii mode (or vWii).
개발용 Wii (모델 포함)에서는 **작동하지 않습니다.**

- RVT-001 (NDEV)
- RVT-002 (초록색 전면판)
- RVT-005 (빨간색 전면판)

More information about compatability for specific supported consoles is below.

:::

:::details Compatability with Korean Wiis

Korean Wiis are fully supported by the guide and can be modded via normal procedures. Korean Wiis can also be region changed; for example, changed from `4.3K` to `4.3U` so that the console behaves like a North American unit.

Exercise heavy caution when modifying region data and follow the guide carefully to avoid a brick, as Korean Wiis are particularly susceptible to the [Error 003](bricks#koreankiierror-003-brick) brick.

If you are attempting to region change a Korean Wii and are unsure of the exact process to do so, please join the Nintendo Homebrew Discord by referencing the information above.

:::

:::details Compatability with vWii (Wii U Wii Mode)

Wii mode on Wii U (called vWii in the homebrew community) is fully supported by the guide, however we recommend that you set up Aroma beforehand if it has not already been done. Visit [wiiu.hacks.guide](https://wiiu.hacks.guide) to learn more.

누락된 Wii 기능을 복구할 수 있습니다. 현재 거의 모든 홈브류가 지원됩니다. (게임큐브 홈브류 제외)

Wii U의 USB 포트만으로는 충분한 전력을 공급할 수 없으므로 저장 장치에는 추가 전원 (Y형 케이블이나 외부 전원 공급 장치 사용)이 필요합니다.

Make sure to use IOS and homebrew that are designed specifically for vWii in order to avoid bricking the console.

:::

:::details Compatability with Wii mini

Wii Mini is fully supported by the guide and has compatibility with most existing homebrew.

누락된 Wii 기능을 복구할 수 있습니다. LAN 어댑터와 USB 허브를 권장합니다.

Make sure to use IOS and homebrew that are designed specifically for the Wii mini in order to avoid bricking the console.

:::

## 시작할 준비가 되었나요?

If so, please click the button below to begin the modding process.

[Continue to Get Started →](get-started){.btn .btn-solid}
