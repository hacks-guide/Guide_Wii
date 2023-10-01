---
title: "Bricks"
---

{% include toc title="Table of Contents" %}

A "Brick" usually means your Wii has reached a state where its next purpose in existing is likely that of a doorstop, or a display figure. <br>
Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

# Brick Prevention

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do:

+ **DO NOT FOLLOW OLD WII MODDING TUTORIALS, USE OLD HOMEBREW, OR USE OLD VIDEO GUIDES ON THE INTERNET UNLESS EXPLICITLY RECOMMENDED BY THE DEVELOPER**.
+ **DO NOT, UNDER ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. IT IS DANGEROUS, AND DOES THINGS THAT HAVE THE ABILITY TO BRICK YOUR WII!**
+ **DO NOT USE NAND BACKUPS FROM OTHER CONSOLES ON BOOTMII**.
+ **DO NOT USE A NINTENDO WI-FI CONNECTION SERVICE UNLESS IT IS RCE PATCHED, SUCH AS `Wiimmfi`. DOING OTHERWISE COULD PLACE YOUR WII AT RISK OF BEING BRICKED!**
+ **ONLY INSTALL UPDATES FOR YOUR OWN REGION AND PLAY GAMES ONLY FROM YOUR OWN REGION**.
    + In most cases, playing a game from another region should simply cause the game to just not boot, unless you have sufficiently modified the console to do otherwise. With that said, extraordinary events have the potential to cause a brick, so the risk is better left untouched.
    + Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. If it is Korean, be EXTREMELY careful with making system updates to your console, and consider seeking support for help.
+ **DO NOT DELETE OR MODIFY SYSTEM FILES, AND DO NOT INSTALL SYSTEM FILE MODS UNLESS YOU KNOW ABSOLUTELY WHAT YOU ARE DOING**.
    + An example of this going wrong is replacing IOS80 on Wii Mini - this can easily result in a [Wi-Fi Brick](bricks#wi-fi-brick).
+ **DO NOT INSTALL HOMEBREW THAT WAS NOT OBTAINED FROM A TRUSTED SOURCE SUCH AS OSC, IF IT WAS NOT LISTED ON THIS GUIDE, OR IF THE SOURCE CODE IS NOT AVAILABLE**.
    + There have been incidents of malicious software being developed for the Wii in the past, while other apps are just badly developed. Make sure that you know what you are installing, and only install what you need.
    + Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
+ **ENSURE THAT YOU KNOW WHAT YOU ARE DOING WHEN RUNNING HOMEBREW APPS, ESPECIALLY THOSE WITH THE ABILITY TO MODIFY SYSTEM FILES**.
+ **BE EXCEPTIONALLY CAREFUL WHEN USING APPS SUCH AS:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
    + Firmware Downgraders
    + Any other app that modifies critical NAND files
+ **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
    + If you are in the middle of an electrical storm, maybe it's better to just do it afterwards.
    + This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

In any case, you should absolutely:
+ Have BootMii installed as boot2 if available, but otherwise as IOS.
+ Have Priiloader installed regardless of the above.
+ Back your NAND up with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that on some bricks, BootMii is not accessible, so plan ahead.

# Diagnosis

Here is a small section that lists out steps similar to the Wii boot process, and links to the likely corresponding brick if something fails.

+ Turn on Wii.
+ Nothing happens, black screen. Wii cannot be turned on with a Wiimote, Recovery Mode cannot be started, and BootMii as boot2 is not accessible. See [low-level brick](bricks#low-level-brick).
+ Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. See [Wi-Fi brick](bricks#wi-fi-brick).
+ Nothing happens, black screen, BUT BootMii as boot2 is accessible. See [IOS brick](bricks#ios-brick).
+ Error 003. See [Korean Kii/Error 003 brick](bricks#error-003-brick).
+ Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenence mode is accessible. See [mail brick](bricks#mail-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
    + If this happened after installing a theme, see [theme brick](bricks#theme-brick).
    + If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
    + If this randomly started happening, and you can access Maintenence Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
+ Wii starts, and progresses to the Wii Menu.
    + If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick)
    + If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
+ Wii starts, and progresses to the Wii Menu. No app is malfunctioning, Wii settings is error free, everything is seemingly fine. Unless you have some other kind of error or brick that does not fall under this umbrella (which if you do, you should come to support about), you're good! 

# Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

## Semibrick

#### Symptoms
When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

#### Cause
A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.
![Semibrick](/images/bricks/semibrick.png)

#### Solutions
Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use MyMenuifyMod to reinstall the original theme file.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.
{: .notice--danger}

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Banner brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.
![System files are corrupted](/images/bricks/sysfiles-corrupted.jpg)

#### Cause
Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Solutions
If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWMME](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick

#### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Cause
A theme brick occurs when a wrongly formatted theme is installed. 

#### Solutions
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access MyMenuifyMod to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWMME](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenence mode is still accessible.

#### Cause
A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail as it is always open.

#### Solution
By entering holding + and - on the warning screen, Maintenence mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

From here, the Homebrew Browser can be loaded and mail can be deleted by using WiiXplorer and navigating to `TO BE COMPLETED, INSERT INFORMATION ON HOW TO SOLVE MAIL BRICK`

## Wii Menu/Opera brick

#### Symptoms
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed in any other means.

#### Cause
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.
![Wii menu brick](/images/bricks/sysmenu-brick.png)

#### Solutions

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, Recovery Mode can be used by holding all 4 buttons on the D-Pad of a GameCube controller that is plugged into the fourth controller port of the Wii. 

## Korean Kii/Error 003 Brick

#### Symptoms
Screen shows up as listed below on normal boot.

`Error:003`<br>
`unauthorized device has been detected.`<br>
![Error 003](/images/bricks/error-003.png)

#### Cause

This brick happens when a non-Korean Wii Menu on 4.2 or 4.3 detects that the Korean common key is present.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.
#### Solutions

Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this brick is infamous and hard to fix, **it is still fixable**. This involves one of two solutions.

##### Recovery Mode

See [recovery mode](recovery-mode.md).

##### BlueBomb

If you have a drive chip on hand, [BlueBomb](bluebomb) is accessible. It is not known exactly why one is needed to use it, but without one, BlueBomb cannot progress past stage 0.

## IOS brick

#### Symptoms
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure. Due to this, BootMii as boot2 is still bootable.

#### Cause
This brick happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii Mini, see [Wi-Fi brick](wi-fi-brick).

#### Solutions
You must have BootMii as boot2 to fix this. Recovery mode is not accessible due to a broken IOS, and Priiloader will not work. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Symptoms
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Cause
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly.
In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii Mini if you install a normal Wii IOS, because the Wii Mini doesn't have a Wi-Fi module.

#### Solutions
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii Mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Symptoms
Completely black screen, no response to user input. Recovery Mode cannot be booted.

#### Cause
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Solutions
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii Mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Good luck.