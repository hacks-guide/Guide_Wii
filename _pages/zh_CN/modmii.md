---
title: "ModMii"
---

{% include toc title="Table of Contents" %}

如果您需要有关本教程的任何帮助，请加入 [ModMii Discord 服务器](https://discord.gg/cMnBRACQwQ)。
{: .notice--info}

本程序不提供保修，因此您需要对 Wii 可能造成的损坏负责。
{: .notice--warning}

本程序不适用于 vWii 或 Wii mini。 某些工具可能适用于这些平台，也可能不适用。
{: .notice--warning}

ModMii 是由 XFlak 制作的 windows PC 程序，其中包含各种有用的修改工具，还包括一些目前在 [wii.guide](site-navigation) 网站上可能还没有的教程。 <br> 您可以选择在 ModMii skin 启动，它的用户界面更友好，也可以在 ModMii Classic 中启动，它的交互方式类似于 PC 终端或命令提示符。

在 ModMii Skin 中可能无法访问一些高级功能。 可在页面底部找到 Modmii Classic 的各种活动列表。
{: .notice--info}

### Requirements

* 一台 Wii
* 移动硬盘/U 盘或 SD 卡
* 一台 Windows PC（虚拟机也可以）
* [ModMii](https://modmii.github.io/)

这是如何在 Windows PC 上使用 ModMii 的快速入门指南。

### ModMii Wizard（ModMii 向导）

您可以使用 ModMii wizard（向导）软破任何 Wii。 <br> 即使 Wii 曾经软破过，您也可以告诉 ModMii 这是您第一次软破 Wii（即使不是），从而让 ModMii 覆盖现有的软破。

您还可以使用这个向导同时设置 USB loader，而不必稍后再使用 USB loader 设置向导。

### SysCheck Updater Wizard

[SysCheck](syscheck) 是一款自制应用程序，用于分析 Wii 上的修改。 <br> 您还可以向 ModMii 提供 SysCheck 报告，帮助识别 & 更新过时的修改。

您可以将 `syscheck.csv` 文件拖到 ModMii.exe 上，让 ModMii 分析 SysCheck。 或者，您可以从 ModMii 的主菜单中启动 SysCheck Updater Wizard (`SU`)，然后手动浏览文件。

### HackMii Solutions Wizard

HackMii Solutions wizard 可以帮助修以下症状：

+ HackMii Installer 未提示 "Press (1) to continue"
+ HackMii Installer 提示 "no vulnerable IOS found!"
+ Homebrew Channel 显示颠倒

它将安装干净的 IOS，以便 HackMii Installer 正常运行。

### Abstinence Wizard

该 wizard（向导）需要 SD 卡。
{: .notice--warning}

此向导允许您在不对 Wii 进行任何永久修改的情况下享受许多软破 Wii 的好处。 您可以利用它从外部存储启动模拟 NAND 而不是 Wii 的内置 NAND。

与此相关，您也可以在完全不修改 Wii 的情况下制作 NAND 备份。 找到 ModMii 的 "Support" 文件夹并启动 `Casper2BootMii.bat`。 <br> 它会将一些文件保存到名为 `COPY_TO_SD` 的文件夹中，将其中的文件复制到 SD 卡中，然后[启动一个漏洞](get-started)。

在按照上述任一漏洞指南时，请避免替换 `boot.elf` 文件。
{: .notice--warning}


<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>点击这里查看可用工具的完整列表。</a></summary>

| 工具                                                                          | 描述                                                                                                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                           | 该选项可用于首次修改 Wii 或重新修改以前修改过的 Wii。                                                                                    |
| SU = SysCheck Updater Wizard (update only your outdated softmods)           | 此选项适用于已经在 wii 上安装了 DarkCorp/Ciosspaghetti 旧修改的用户，这些修改可能会给最新的自制固件带来问题。                                              |
| U = USB-Loader Setup Wizard                                                 | 此选项可帮助您正确设置 USB loader，以便从 SD 或移动硬盘加载磁盘备份。                                                                         |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)       | 此选项适用于使用 HackMii Installer 时遇到问题的用户，或者它们的 homebrew channel 显示颠倒，或者安装了 DarkCorp/Ciosspaghetti 但没有 homebrew channel。 |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                            | 此选项适用于不想对 Wii 进行任何永久性修改，但又想获得自制所能提供的一些好处的用户。                                                                       |
| RC = Region Change Wizard                                                   | 此选项可在不使 Wii 变砖的情况下更改区域（这是互联网上最好的区域更改教程！）。                                                                          |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor      | 此选项帮助您在 SD 或 USB 上正确设置 EmuNAND（又名 neek2o）。 emunand 的优势包括为保存的游戏或频道提供额外的存储空间。 以及不对 Wii 进行任何永久性修改的好处。                 |
| F = open a File or Folder with ModMii for many more functions!              | 该选项是一种高级工具，对开发人员特别有用。                                                                                              |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | 此选项将打开第一个下载页面，其中包括系统菜单的大部分关键部分（从 NUS 下载）。                                                                          |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | 此选项将打开第二个下载页面，其中包括针对 Wii 的漏洞和实用应用，包括一些 PC 程序。                                                                      |
| 3 = Download Page 3 (System Menu Themes)                                    | 此选项将打开第三个下载页面，其中包括一些系统菜单主题和安装系统菜单主题所需的项目（从 NUS 下载基本应用）。                                                            |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                      | 此选项将打开第四个下载页面，其中包括用于 USB loader 的 cIOS 和 cMIOS。 建议只安装推荐的 cios，除非您打算进行一些测试。                                         |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                       | 此选项是一个高级工具，用于更好地定制下载，或构建用于转发器（在系统菜单上访问 Wii 应用程序的频道）的 dol 可执行文件。                                                    |
| L = Load Download Queue                                                     | 此选项将下载 Wii 系统菜单所需的所有标题（从 NUS 下载标题）                                                                                 |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager        | 该选项可帮助您构建某些应用程序所需的配置文件。                                                                                            |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | 此选项对于想要清理 SD 或 USB 中被认为过时、无用或不再支持的应用程序的人来说非常有用。                                                                    |
| M = ModMii Skin Mode: use your mouse instead of your keyboard!              | 此选项将启动 ModMii skin 模式。 某些高级功能可能无法在此视图中使用。                                                                          |

</details>

<details id="Modmii-Options" class="notice--info" markdown="1">
<summary><a>点击这里查看可用选项的完整列表。</a></summary>

| 选项                                                                              | 描述                                                 |
| ------------------------------------------------------------------------------- | -------------------------------------------------- |
| D = Change Drive letter:                                                        | 更改 SD 文件的保存位置。                                     |
| DU = Change Drive letter for USB:                                               | 更改 USB 文件的保存位置。                                    |
| d2x = change d2x cIOS version built:                                            | 更改 ModMii 下载的 cios 版本。                             |
| H = Hermes cIOSs (202 & 222-224) will also be recommended                       | 允许在 syscheck updater 中推荐并下载 Hermes IOS（将在禁用时存根）。   |
| CM = cMIOS included in recommended cIOSs                                        | 允许在 syscheck updater 中推荐并下载 cMIOS（如果禁用则安装原始 MIOS）。 |
| E = Extra Brick Protection in ModMii Wizard Guides                              | 允许在 syscheck updater tool 中推荐和使用 ModMii 额外防砖 IOS。  |
| U = Update IOSs. U = Update IOSs. Wizard/SysCheck-Updater to update Active IOSs | 将现有 IOS 更新为 NUS 上的最新版本。                            |
| AU = Auto-Updating downloads will skip update check if cached                   | 如果文件已在队列中，将跳过下载。                                   |
| FWD = Install USB-Loader Forwarder in ModMii Wizard Guides                      | 将在 USB loader 向导指南中包含 USB loader 转发程序的 wad 文件。     |
| PC = PC Programs Save Location                                                  | 更改可下载 PC 程序的保存位置。                                  |
| RS = Root Save: Save IOSs\MIOSs to Root instead of WAD Folder                  | 将 IOS\MIOS 保存到根目录而不是 WAD 文件夹。                     |
| 1 = Do not Keep 00000001 or NUS Folders for IOSs\MIOSs\SMs etc                | 删除用于编译 wad 文件的文件夹，只提供 wad 文件。                      |
| n2o = neek2o - build mod of s\uneek instead of original                        | 在 EmuNAND builder 中使用经过改进版本的 neek2o。               |
| SSD = SNEEK and SNEEK+DI SD Access                                              | 允许访问 SD 卡上的 SNEEK 和 SNEEK+DI。                      |
| F = Font.bin Colour for SNEEK/UNEEK                                             | 更改 neek2o 的字体颜色。                                   |
| SV = SNEEK Verbose Output                                                       | 显示有关 EmuNAND 的额外信息。                                |
| V = Verbose for ModMii Skin & nandBinCheck                                      | 显示另一个窗口，其中包含有关 nand 检查的额外信息。                       |
| SO = Play sound at Finish                                                       | Plays a fun jingle after a successful download.    |
| A = Auto-Update ModMii at program start                                         | 将在启动 ModMii 时自动检查更新。                               |
| N = Check for New versions of ModMii right now                                  | 将在线检查 ModMii 更新。                                   |

</details>

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
