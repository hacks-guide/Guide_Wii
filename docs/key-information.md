# Key Information

This page outlines important information and disclaimers that you should be aware of before starting with the modding process.

## Bricks and Common Risks

When following the guide or using specific kinds of homebrew, there is a risk that you may brick your console - or put it into a state where it is partially or fully unusable. To prevent this, please follow the guide **exactly as written** and follow precautions when stated. Common risks for bricking are slated as below:

+ Following old modding tutorials or video guides unless explicitly recommended due to potentially outdated or incorrect information
+ Restoring NAND backups from other consoles
+ Installing cIOS/WAD packs like DARKCORP
+ Installing updates intended for another region, or region changing your console
+ Modifying system files

Please consult the [bricks guide](bricks) for more information.

## Console Compatibility

This guide works with all off-the-shelf retail Wiis, including Wii mini and the Wii U's Wii mode.
It does **NOT** work with development Wiis, including models:

+ RVT-001 (NDEV)
+ RVT-002 (green frontplate)
+ RVT-005 (red frontplate)

Important notes relating to specific Wiis are below.

:::: details What if I own a Korean Wii?

Korean Wiis are fully supported by the guide and can be modded using normal procedures. They can also be region changed.
Exercise caution when modifying region data and follow the guide carefully to avoid a brick.

::::

:::: details What if I own a Wii U and want to exploit Wii mode?

Wii mode on Wii U (called vWii in the homebrew community) is fully supported by the guide, however it is recommended to setup an Aroma environment before starting.
Missing Wii features can be restored. Almost all existing homebrew is currently supported (except for GameCube homebrew).
Storage devices will need additional power (either using a Y-cable or an external power source), as the Wii U's USB ports do not provide sufficient power on their own.
Make sure to use IOS and homebrew that are designed specifically for vWii in order to avoid bricking the console.

::::

:::: details What if I own a Wii mini?

Wii Mini is fully supported by the guide and has compatibility with most existing homebrew.
Missing Wii features can be restored. A LAN adapter and USB hub are recommended.
Make sure to use IOS and homebrew that are designed specifically for the Wii mini in order to avoid bricking the console.

::::

## Storage Compatibility

For SD cards, you will want a minimum of 128MB to run an exploit. On average, however, you will want a card that is sized 2GB or more. The Wii can read SD cards of most capacities (even those larger than 32GB), but the card must be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**not** exFAT or NTFS).

For USB devices, you will want to use a USB hard drive or solid state drive [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). We do not recommend using flash drives as they are prone to failure or not working as intended with a Wii.

2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch drives consume more power and will always need an external power adapter. For Wii U and Wii mini users, you will probably want to use an externally powered USB hub or a Y-cable for drives that operate off of USB power alone, due to power draw.

Please consult [the storage FAQ](faq#storage-device-faq) for more information.

## Network Compatibility

The Wii is an aging console, and as such, may have difficulties connecting to modern wireless networks.

Its network hardware is based on 802.11g (retroactively named Wi-Fi 3), which operates on the 2.4 GHz band. It also supports a maximum of WPA2-PSK (AES) personal network encryption. You must make sure your network supports these standards if you would like to use Wi-Fi with your Wii.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin.

Please consult [the network FAQ](faq#networking-faq) for more information.

## Getting Help

Ran into an issue while following the guide, already have an issue on your modded Wii, or just have a question?

+ If your question isn't already answered on this page, it may be answered in the [FAQs](faq) section of the guide.
+ If your question still isn't answered by the FAQs page, or you need support, join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and go to the `#wii-vwii-assistance` channel.

---

::: tip

Continue to [Get Started](get-started)

Once you have finished reading the above disclaimers, proceed to Get Started to select your console and initial exploit method.

:::



