---
title: "开始"
---

{% include toc title="Table of Contents" %}

本指南仅适用于原始 Wii 和 Wii mini（包括 Wii Family Edition）。 请勿在 Wii U（vWii）上使用此指南！ 如果你想在 Wii U 上安装自制程序，请[按照本指南进行操作](https://wiiu.hacks.guide)。

所有漏洞都能运行 HackMii Installer，并且有相同的最终结果。

尽管您可以在没有SD卡的情况下遵循本指南， 但是您将无法使用 BootMii创建或恢复NAND 备份，并且您将无法使用一些自制程序。
{: .notice--info}

### Identify your console revision:

{% include identify-console.html %}<br>

### 选择要使用的漏洞

Select the exploit that corresponds to your console and situation the best.

| Console Revision       | Recommended Exploit                                                                                                                                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition | If you can use a Windows PC:<br> Automatic Setup: Proceed to [ModMii](modmii)<br> If you can use an SD card:<br> Manual Setup: Proceed to [Wilbrand](wilbrand)<br> If you cannot use an SD card:<br> Manual Setup: Proceed to [str2hax](str2hax)<br> |
| Wii mini               | [BlueBomb](bluebomb) - 利用蓝牙的漏洞                                                                                                                                                                                                                                                           |
| Wii U (vWii)           | 如果您的 Wii 菜单版本不是 4.3，使用 str2hax、Wilbrand 或 FlashHax 安装 Homebrew Channel，然后按照 [更新指南](update) 更新到 4.3。                                                                                                                                                                                      |
| Dolphin Emulator       | Proceed to [Homebrew Channel on Dolphin](homebrew-dolphin)                                                                                                                                                                                                                               |

### Alternate methods

If possible, you should follow the method given above.

If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).
