# Key Information

This page includes important disclaimers and information regarding the modding process that you should know before starting.

## Bricks and Common Risks

When following the guide or using specific kinds of homebrew, there is a risk that you may brick your console - or put it into a state where it is partially or fully unusable. To prevent this, please follow the guide **exactly as written** and follow precautions when stated. Common risks for bricking are slated as below:

- Following old modding tutorials or video guides unless explicitly recommended due to outdated or incorrect information
- Restoring NAND backups from other consoles
- Installing cIOS packs like DARKCORP
- Installing updates intended for another region, or region changing your console
- Modifying system files

Please consult the [bricks guide](bricks) for more information.

## Console Compatibility

This guide works with all off-the-shelf retail Wiis, including Wii mini and the Wii U's Wii mode.
It does **NOT** work with development Wiis, including models:

- RVT-001 (NDEV)
- RVT-002 (green frontplate)
- RVT-005 (red frontplate)

Important notes relating to specific Wiis are below.

:::: details What if I own a Korean Wii?

A Korean Wii is fully supported, and can also be region changed.
Exercise caution when modifying region data and follow guides carefully to avoid a brick.

::::

:::: details What if I own a Wii U (vWii)?

Wii mode on Wii U (called vWii in the homebrew community) is fully supported but it is recommended to setup an Aroma environment.
Missing Wii features can be restored. Almost all existing homebrew is currently supported (except for GameCube homebrew).
Storage devices will need additional power (either using a Y-cable or an external power source), as the Wii U's USB ports do not provide sufficient power on their own.
If there are multiple versions of homebrew, make sure you are using the version designed for vWii.
Be especially cautious with IOS to avoid bricking, since they are specifically designed for vWii.

::::

:::: details What if I own a Wii mini?

Wii Mini is supported and has compatibility with the most existing homebrew.
Missing Wii features can be restored. A LAN adapter and USB hub are recommended.
If there are multiple versions of homebrew, make sure you are using the one designed for Wii mini.
Be especially cautious with IOS to avoid bricking, since they are specifically designed for Wii mini.

::::

## Storage Compatibility

For SD cards, you will want a minimum of 128MB to run an exploit. On average, however, you will want a card that is sized 2GB or more. The Wii can read SD cards of any capacity (even those larger than 32GB), but the card must be formatted as FAT32 (**not** exFAT or NTFS). For instructions on properly formatting your SD card, [see here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).

For USB devices, you will want to use a USB hard drive or solid state drive formatted as FAT32. We do not recommend using flash drives as they are prone to failure or not working as intended with a Wii.

2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch consumes more power and will always need an external power adapter. For Wii U and Wii mini users, you will probably want to use an externally powered USB hub or a Y cable for drives that operate off of USB power alone, due to power draw.

Please consult [the storage FAQ](faq#storage-device-faq) for more information.

## Network Compatibility

The Wii is an aging console, and as such, may have difficulties connecting to modern wireless networks.

Its network hardware is based on 802.11g (retroactively named WiFi 3), which operates on the 2.4 GHz band. It also supports a maximum of WPA2-PSK (AES) personal network encryption. You must make sure your network supports these standards if you would like to use WiFi with your Wii.

For the Wii U, vWii uses the internet settings set in the Wii U's main settings, but can be optionally separated with the [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch) Aroma plugin.

Please consult [the network FAQ](faq#networking-faq) for more information.

## Getting Help

Ran into an issue while following the guide, already have an issue on your modded Wii, or just plain need answers?

- If your question isn't already answered on this page, it may be answered in the [FAQs](faq) section of the guide.
- If your question still isn't answered and you need support, join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and go to the `#wii-vwii-assistance` channel.

::: tip

Continue to [Get Started](get-started)

:::
