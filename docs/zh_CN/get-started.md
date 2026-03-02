# 开始

::: info

It is recommended to at least have an SD card on hand after the initial hack process, as this will enable you to make a NAND backup using BootMii and take advantage of more homebrew.

:::

The exploits listed for the Wii and Wii mini will bring you to the HackMii installer. The HackMii installer will install the Homebrew Channel (used for lauching homebrew) as well as BootMii (used for creating and restoring NAND backups), depending on your console.

Wii mode on Wii U has a slightly different exploitation process, and will not launch the HackMii installer. Instead, you will exploit Wii mode through the Wii U menu and proceed as instructed.

## Is your Wii already softmodded?

If you have a Wii or Wii mini that is already softmodded and you would like to update your setup, follow [this](hackmii) guide to launch the HackMii installer from the Homebrew Channel, or Priiloader.

## Identify your console revision

<!--@include: @/_include/identify-console.html -->

## 选择要使用的漏洞

Select the exploit that corresponds to your console and situation the best.

| Console Revision                | Recommended Exploit                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition          | <hr>If you can use a Windows PC:<br> Automatic Setup — [Exploit with ModMii](modmii)<br><hr> If you can use an SD card:<br> Manual Setup — [Exploit with Wilbrand](wilbrand)<br><hr> If you cannot use an SD card:<br> Manual Setup — [Exploit with str2hax](str2hax)<br><hr>                                                                       |
| Wii mini                        | <hr>Manual Setup — [Exploit with Bluebomb](bluebomb)<hr>                                                                                                                                                                                                                                                                                            |
| Wii U (vWii) | <hr>If you can use a Windows PC:<br> Automatic Setup — [Exploit with ModMii](modmii)<br><hr> If you have not modded the Wii U, but want to:<br> Manual Setup — [Exploiting the Wii U](https://wiiu.hacks.guide)<br><hr> If you have already modded your Wii U, or don't want to:<br> Manual Setup — [Exploiting the vWii](wiiu-nand-dumper)<br><hr> |
| Dolphin Emulator                | <hr>Manual Setup — [Utilizing Homebrew Channel on Dolphin](homebrew-dolphin)<hr>                                                                                                                                                                                                                                                                    |

## Alternate Methods

If possible, you should follow the methods given above.

If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).
