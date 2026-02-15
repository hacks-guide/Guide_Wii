# はじめに

If your Wii is already softmodded and you would like to update the softmods, follow [this](hackmii) guide to upgrade your setup.

All of the exploits run the HackMii Installer, and have the same end result.

::: info

Although you can follow this guide without an SD card, you will not be able to create or restore a NAND backup using BootMii, and you won't be able to use some homebrew.

:::

## Identify your console revision:

<!--@include: @/_include/identify-console.html -->

## Choose an exploit to use

Select the exploit that corresponds to your console and situation the best.

| Console Revision                | Recommended Exploit                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition          | <hr>If you can use a Windows PC:<br> Automatic Setup — [Exploit with ModMii](modmii)<br><hr> If you can use an SD card:<br> Manual Setup — [Exploit with Wilbrand](wilbrand)<br><hr> If you cannot use an SD card:<br> Manual Setup — [Exploit with str2hax](str2hax)<br><hr>                                                                       |
| Wii Mini                        | <hr>Manual Setup — [Exploit with Bluebomb](bluebomb)<hr>                                                                                                                                                                                                                                                                                            |
| Wii U (vWii) | <hr>If you can use a Windows PC:<br> Automatic Setup — [Exploit with ModMii](modmii)<br><hr> If you have not modded the Wii U, but want to:<br> Manual Setup — [Exploiting the Wii U](https://wiiu.hacks.guide)<br><hr> If you have already modded your Wii U, or don't want to:<br> Manual Setup — [Exploiting the vWii](wiiu-nand-dumper)<br><hr> |
| Dolphin Emulator                | <hr>Manual Setup — [Utilizing Homebrew Channel on Dolphin](homebrew-dolphin)<hr>                                                                                                                                                                                                                                                                    |

## Alternate Methods

If possible, you should follow the methods given above.

If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).