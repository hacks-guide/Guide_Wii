# 开始

If your Wii is already softmodded and you would like to update the softmods, follow [this](hackmii) guide to upgrade your setup.

所有漏洞都能运行 HackMii Installer，并且有相同的最终结果。

::: info

尽管您可以在没有SD卡的情况下遵循本指南， 但是您将无法使用 BootMii创建或恢复NAND 备份，并且您将无法使用一些自制程序。

:::

## Identify your console revision:

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