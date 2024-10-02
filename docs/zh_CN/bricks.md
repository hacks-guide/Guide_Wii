# 变砖

“变砖” 通常意味着您的 Wii 已经到了只能作为<a href="https://wikipedia.org/wiki/Brick">砖块</a>使用的地步。

Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

# Brick Prevention

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do: Here are the general recommendations of what not to do:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
- **Only install updates for your own region!**.
  - Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. If it is Korean, be EXTREMELY careful with applying system updates to your console, and consider seeking support for further assistance.
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - There have been incidents of malicious software being developed for the Wii in the past, while other apps are just badly developed. Make sure that you know what you are installing, and only install what you need. Make sure that you know what you are installing, and only install what you need.
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
  - Firmware Downgraders
  - Any other app that modifies critical NAND files
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
  - If your electricity is unstable (e.g. storm, power outage), postpone what you are doing until you have a stable power source.
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

In any case, you should absolutely:

- Have BootMii installed as boot2 if available, but otherwise as IOS.
- Have Priiloader installed regardless of BootMii installation method.
- Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

# Diagnosis

This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. If you seem to have a brick that isn't covered in this section or in the guide, please join the Nintendo Homebrew discord server for support.

- Wii Menu brick（Wii 菜单砖） Wii Menu brick（Wii 菜单砖） No app is malfunctioning, Wii settings is error free, everything is seemingly fine. No brick. No brick.
- Wii Menu brick（Wii 菜单砖）
  - If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- Wii starts, and you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. See <a href="bricks#mail-brick">mail brick</a>. Maintenance mode is accessible. See [mail brick](bricks#mail-brick).
- Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See <a href="bricks#wii-menuopera-brick">Wii Menu/Opera brick</a>. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Error 003 See [Korean Kii/Error 003 brick](bricks#error-003-brick).
- <a href="recovery-mode">Recovery mode</a> may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. 必须将 BootMii 安装为 boot2 才能解决这个问题。 See [IOS brick](bricks#ios-brick).
- Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. See <a href="bricks#wi-fi-brick">Wi-Fi brick</a>. See [Wi-Fi brick](bricks#wi-fi-brick).
- Nothing happens, black screen. 解决这个问题的唯一办法是通过恢复菜单启动游戏来启动自制。 只有当您拆开 GameCube 手柄，按住所有 4 个十字键，同时将 GameCube 手柄插入 Wii 的第 4 个插槽，打开 Wii 后才能使用它。 See [low-level brick](bricks#low-level-brick).

# Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

## Semibrick（半砖）

### Symptoms

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### 原因

Semibrick（半砖）在安装了不同区域的 Wii 菜单或不同区域的自定义主题时发生。 As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### 解决方案

Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

下载 Wii 菜单 WAD 时要小心。 确保选择与更正后的区域相同的版本。

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Banner brick（横幅砖）

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible. Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

### 原因

Banner bricks（横幅砖）会在安装了含无效的 Wii 菜单横幅或图标的 WAD 文件时出现。

### 解决方案

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. 选择 Homebrew Channel，然后使用 WAD 管理器卸载有问题的 WAD。

如果没有 Priiloader，维护模式也许值得一试。 Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick（主题砖）

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible. This happened after installing a theme.

### 原因

Theme brick（主题砖）在安装了格式错误的主题时发生。

### 解决方案

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into <a href="yawmme">YAWM ModMii Edition</a> and install the CORRECT default Wii Menu WAD for your region and version. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick（邮件砖）

### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible. Maintenance mode is still accessible.

### 原因

当 Wii 收到大量邮件时，就会出现 "mail brick（邮件砖）"。 这会导致 Wii 崩溃。

### 解决方案

By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii 菜单砖

### Symptoms

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### 原因

This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

然而，设置页面的位置与 Wii 设置页面类似。 如果Wii 菜单或主题的区域不正确，Wii 将无法找到它们。

![](/images/bricks/sysmenu-brick.png)

### 解决方案

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

### Symptoms

Screen shows up as listed below on normal boot.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### 原因

When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is <strong x-id="1">not</strong> Korean. If this check succeeds, the error triggers and the Wii is effectively bricked. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

这通常是在不知情的更改区域的韩版 Wii 进行 Wii 系统更新后立即发生的情况。

### 解决方案

由于此砖最常在 Wii 菜单更新后发生，因此 Priiloader 将不会存在。 In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Note that you must have a drivechip in order for this method to work.

## IOS brick（IOS 砖）

### Symptoms

This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

### 原因

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### 解决方案

You must have BootMii as boot2 to fix this.

您可以还原 NAND 备份，或执行以下步骤：

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. 使用 BootMii 进入 Homebrew Channel，并使用 WAD 管理器安装 Wii 菜单 WAD。

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Wi-Fi brick（Wi-Fi 砖）

### Symptoms

This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

### 原因

当 Wii 的 Wi-Fi（或蓝牙）模块损坏或未正确插入时，就会出现这种状况。 在这种情况下，Wii 会在等待 IOS 响应时卡在黑屏上。

这也会在 Wii Mini 上安装了普通的 Wii IOS 时发生，因为 Wii Mini 没有 Wi-Fi 模块。

### 解决方案

要解决这个问题，可尝试重新安装或更换 Wi-Fi/蓝牙模块。

如果使用 Wii Mini，则必须安装 Wi-Fi 模块。

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick（低层砖）

### Symptoms

Completely black screen, no response to user input. Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

### 原因

当 boot1/boot2 损坏时会出现此故障。

### 解决方案

First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following: In the order listed, do the following:

- Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
- At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii. Consider consulting online help or buying another Wii.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
