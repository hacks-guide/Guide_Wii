---
layout: home
title: "Wii Hacks Guide"
hero:
  text: "Wii Hacks Guide"
  tagline: "The complete guide to modding your Wii, vWii, and Wii mini."
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

* Uploaders typically do not edit their guides after uploading, even if there are mistakes. This can result in the guide becoming outdated as information develops.
* Video guides are difficult to give assistance with on our server, and will not be supported if seeking assistance.
* Videos typically refer users to a pre-packaged download, which can be poorly organized, outdated, or potentially even incorrect.

We are not currently, historically, or will ever be, associated with video guide creators on platforms such as YouTube or TikTok. Any that claim relation to us are doing so falsely; we resent any implication to the contrary.

:::

## What do I need to know before starting?

This page will explore:

* Important terms used in the context of this guide, as well as in the Wii modding scene in general
* What this guide does to your console, and what we plan to install
* What you can do with a modded Wii/vWii/Wii mini
* What you need to mod your console
* Other important notices before proceeding

## What do the terms on this guide mean?

The primary terms used on this guide are explained in various sections below.

For more information about other terms used on this guide, please see the [glossary](glossary).

### What is homebrew?

Homebrew refers to unofficial software written by hobbyists for locked down systems, like the Nintendo Wii. Homebrew can include original games, emulators, save-editing tools, and much, much more!

Unlike some other consoles, the Wii, vWii, and Wii mini can be modded purely through software; meaning that beyond necessary equipment like an SD card, this is a **free** process.

### What is (c)IOS?

IOS (IOP-OS, not associated with Apple or Cisco IOS) is the underlying operating system that the Nintendo Wii runs on (with the exception of being in GameCube mode). The implementation of this OS software on the Wii is unique in that instead of one dedicated set of software, there are instead many different "slots" or "branches" that the Wii can pull from. Simply, when you use your Wii, the currently running software chooses a specific IOS slot to function under; this provides different functionality on-demand. More information about IOS can be found on [WiiBrew](https://wiibrew.org/wiki/IOS).

cIOS is a custom-engineered type of IOS that is based off of an ideal IOS version; for example, using the right base can provide USB 2.0 support among other things. Once installed, these cIOS can then be used in homebrew software. This guide will allow you to install cIOS in a later section such that USB loaders can function, which allows the usage of game backups.

### What is NAND?

[NAND](https://en.wikipedia.org/wiki/Flash_memory) is the underlying type of flash memory that the Nintendo Wii functions on, holding 512MB of total usable memory. The NAND supplies IOS and other system files, game saves, Wii channels, and more. This guide will instruct you to create a NAND backup; it is crucially important to have on hand if anything goes wrong as it holds keys and data that are unique to your console. Without it, your console may be **unrecoverable** in the event of a failure or mistake (as rare as they are).

## What does this guide install?

This guide has the end-goal of taking a completely unmodified Wii, vWii, or Wii mini and putting it into a state where homebrew can be ran. You will not lose any data so long as you follow guide instructions as written; your saves and games will not be lost and the functionality of your console will only be enhanced.

Your console will be modded through the usage of the **HackMii Installer**. This will install the Homebrew Channel, your primary entry point for running homebrew, as well as BootMii, a crucial protection tool for your console. After this, the guide will provide additional protection via a tool called Priiloader, and provide instructions on how to install other recommended tools and software, if you so choose.

## What can I do with homebrew?

* [Back up](nand-backup) and [restore](bootmiirecover) your Wii's NAND
* Back up [discs](dump-games) and [other installed titles](dump-wads)
* [Patch game discs](https://wiki.hacks.guide/wiki/Wii:Riivolution) to load game modifications
* Install [themes](themes) on the Wii Menu and in commonly used homebrew apps
* Use a [USB loader](wii-loaders) to launch Wii (and other console) backups from an external storage device
* Restore online console functionality through [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](nintendowfc)
* Utilize [emulators and other recommended software](recommended-homebrew) on your console

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

* Restoring NAND backups from other consoles; this will **IMMEDIATELY** brick your system
* Installing cIOS packs like DARKCORP, which needlessly overrite IOS slots and can break your console's functionality
* Installing updates intended for another region, modifying system files, or region changing your console unless you know **exactly** what you are doing
* Installing IOS intended for a specific console onto another; this will also result in an **immediate** brick in the worst case scenarios

More information about bricks, alongside tips to prevent them, can be found on the [bricks page](bricks).

:::

::: warning

**Getting Assistance**

Need more assistance? Join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask for help in English on the `#wii-vwii-assistance` channel. Please provide the following information:

1. The exact error message or console state that you see, with a photo if applicable
1. The exact steps you took prior to the issue, as far as you remember
1. A [SysCheck](syscheck) log if possible to obtain
1. Whether or not you have a NAND backup available
1. Whether or not you installed Priiloader, BootMii as IOS, or BootMii as boot2
1. The specific model of console you are working with (Original Wii, Family Edition Wii, Wii mini, vWii on Wii U)

We also advise you to join the server and ask for assistance or clarification if you are having trouble understanding the content of the guide, even after reading it in advance.

If your English isn't the best, use a translator such as [Google Translate](https://translate.google.com/) to submit your questions so that we can assist.

:::

### Hardware Compatibility

::: tip

**Storage Compatibility**

For SD cards, you will want a minimum of 128MB to run an exploit. On average, however, you will want a card that is sized 2GB or more. The Wii can read SD cards of most capacities (even those larger than 32GB), but the card must be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**not** exFAT or NTFS).

For USB devices, you will want to use a USB hard drive or solid state drive [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). We do not recommend using flash drives as they are prone to failure or not working as intended with a Wii.

2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch drives consume more power and will always need an external power adapter. For Wii U and Wii mini users, you will probably want to use an externally powered USB hub or a Y-cable for drives that operate off of USB power alone, due to power draw.

Please consult [the storage FAQ](faq#storage-device-faq) for more information.

:::

::: tip

**Network Compatibility**

The Wii is an aging console, and as such, may have difficulties connecting to modern wireless networks.

Its network hardware is based on 802.11g (retroactively named Wi-Fi 3), which operates on the 2.4 GHz band. It also supports a maximum of WPA2-PSK (AES) personal network encryption. You must make sure your network supports these standards if you would like to use Wi-Fi with your Wii; please note that routers from Xfinity and Spectrum are known to be incompatible with these settings.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin.

Please consult [the network FAQ](faq#networking-faq) for more information.

:::

::: tip

**Base Console Compatibility**

This guide works with all off-the-shelf retail Wiis, including Wii mini and the Wii U's Wii mode (or vWii).
It does **NOT** work with development Wiis, including models:

* RVT-001 (NDEV)
* RVT-002 (green frontplate)
* RVT-005 (red frontplate)

More information about compatability for specific supported consoles is below.

:::

::: details Compatability with Korean Wiis

Korean Wiis are fully supported by the guide and can be modded via normal procedures. Korean Wiis can also be region changed; for example, changed from `4.3K` to `4.3U` so that the console behaves like a North American unit.

Exercise heavy caution when modifying region data and follow the guide carefully to avoid a brick, as Korean Wiis are particularly susceptible to the [Error 003](bricks#koreankiierror-003-brick) brick.

If you are attempting to region change a Korean Wii and are unsure of the exact process to do so, please join the Nintendo Homebrew Discord by referencing the information above.

:::

::: details Compatability with vWii (Wii U Wii Mode)

Wii mode on Wii U (called vWii in the homebrew community) is fully supported by the guide, however we recommend that you set up Aroma beforehand if it has not already been done. Visit [wiiu.hacks.guide](https://wiiu.hacks.guide) to learn more.

Missing Wii features can be restored. Almost all existing homebrew is currently supported (except for GameCube homebrew).

Storage devices will need additional power (either using a Y-cable or an external power source), as the Wii U's USB ports do not provide sufficient power on their own.

Make sure to use IOS and homebrew that are designed specifically for vWii in order to avoid bricking the console.

:::

::: details Compatability with Wii mini

Wii Mini is fully supported by the guide and has compatibility with most existing homebrew.

Missing Wii features can be restored. A LAN adapter and USB hub are recommended.

Make sure to use IOS and homebrew that are designed specifically for the Wii mini in order to avoid bricking the console.

:::

## Ready to start?

If so, please click the button below to begin the modding process.

[Continue to Get Started →](get-started){.btn .btn-solid}
