# ブリック

A "Brick" usually means your Wii has reached a state where its next purpose in existence is likely that of a doorstop, or a display figure.

Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

## Brick Prevention

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini.**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](nintendowfc)). Doing otherwise could allow a malicious actor to BRICK your console!**
- **Only install updates for your own region!**
  - Installing updates from another region could have no effect at best, or result in a [Korean Kii/Error 003](bricks#koreankii-error-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. If it is Korean, be EXTREMELY careful with applying system updates to your console, and consider seeking support for further assistance.
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - There have been incidents of malicious software being developed for the Wii in the past, while other apps are just badly developed. Make sure that you know what you are installing, and only install what you need.
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#koreankii-error-003-brick) brick)
  - Firmware Downgraders
  - Any other app that modifies critical NAND files
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT.**
  - If your electricity is unstable (e.g. storm, power outage), postpone what you are doing until you have a stable power source.
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

In any case, you should absolutely:

- Have BootMii installed as boot2 if available, but otherwise as IOS.
- Have Priiloader installed regardless of BootMii installation method.
- Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

## Diagnosis

This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. If you seem to have a brick that isn't covered in this section or in the guide, please join the Nintendo Homebrew Discord server for support.

- Wii starts, and progresses to the Wii Menu. No app is malfunctioning, Wii Settings is error free, everything is seemingly fine. No brick.
- Wii starts, and progresses to the Wii Menu.
  - If after accessing a specific channel, you get `The system files are corrupted`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii Settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Error 003. See [Korean Kii/Error 003 brick](bricks#koreankii-error-003-brick).
- Nothing happens, black screen, BUT BootMii as boot2 is accessible. See [IOS brick](bricks#ios-brick).
- Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. See [Wi-Fi brick](bricks#wi-fi-brick).
- Nothing happens, black screen. Wii cannot be turned on with a Wiimote, [Recovery Mode](recovery-mode) cannot be started, and BootMii as boot2 is not accessible. See [low-level brick](bricks#low-level-brick).

## Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

### Semibrick

#### Symptoms

When navigating to Wii Settings, you get an error from the Opera web browser with something along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

#### Cause

A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

#### Solutions

Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use [csm-installer](themes) to reinstall the original theme.

If this was caused by a Wii Menu WAD you installed, use [NUSGet](https://github.com/NinjaCheetah/NUSGet) to re-obtain your original Wii Menu.

::: danger

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the correct region.

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

### Banner brick

#### Symptoms

You attempt to start the Wii, the health/warning screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening a particular channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Cause

Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Solutions

If you are able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance Mode may be worth a try. Hold down `+` and `-` on the health/warning screen (do not press `A`!).

As a last resort, you may use [BlueBomb](bluebomb) to boot into the Homebrew Channel while idling at the health/warning screen.

### Theme brick

#### Symptoms

You attempt to start the Wii, the health/warning screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Cause

A theme brick occurs when a wrongly formatted theme is installed.

#### Solutions

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

### Mail brick

#### Symptoms

You attempt to start the Wii, the health/warning screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance Mode is still accessible.

#### Cause

A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

#### Solution

By entering holding + and - on the warning screen, Maintenance Mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

### Wii Menu/Opera brick

#### Symptoms

When starting the Wii, you get an error from the Opera web browser with something along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Cause

This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii Settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Solutions

If you have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

### KoreanKii/Error 003 Brick

#### Symptoms

Screen shows up as listed below on normal boot.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

#### Cause

When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Solutions

Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

Korean Wiis released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Note that you must have a drivechip in order for this method to work.

### IOS brick

#### Symptoms

This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Cause

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii Menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

#### Solutions

You must have BootMii as boot2 to fix this.

You can either restore a NAND backup, or do this:

1. Use [NUSGet](https://github.com/NinjaCheetah/NUSGet) to pack a WAD of your original Wii Menu.
2. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

For vWii, see [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/recover-vwii-ioses-channels).

### Wi-Fi brick

#### Symptoms

This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into [Recovery Mode](recovery-mode) on an original revision Wii.

#### Cause

This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Solutions

To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

### Low-level brick

#### Symptoms

Completely black screen, no response to user input. [Recovery Mode](recovery-mode) cannot be booted, neither can BootMii as boot2 (or it never existed in the first place). For all intents and purposes the console appears dead.

#### Cause

This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Solutions

First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

- Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
- At this point, either there is a low-level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

---

::: tip

[Click here to go back to the site index.](site-navigation)

:::
