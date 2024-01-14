---
title: "Bricks"
---

{% include toc title="Table of Contents" %}

A "Brick" usually means your Wii has reached a state where, its only use is that of a literal [brick](https://wikipedia.org/wiki/Brick). <br> Bricks can occur for a variety of reasons, usually caused by improper system modifications via homebrew.

# Brick Prevention

Preventing a brick involves many rules that range between common sense and fail-safe backups. Here are the general recommendations of what not to do:

+ **Do NOT follow old Wii modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
+ **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR WII!**
+ **Do NOT restore NAND backups from other consoles!**
+ **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi). Doing otherwise could allow a malicious actor to BRICK your Wii!**
+ **Only install updates for your own region!**.
    + Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. If it is Korean, be EXTREMELY careful with applying system updates to your console, and consider seeking support for further assistance.
+ **Do NOT delete or modify system files, and do NOT install any system file mods unless you know what you are doing!**
    + An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
+ **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
    + Software on the [Open Shop Channel](osc) is safe.
    + There have been incidents of malicious software being developed for the Wii in the past, while other apps are just badly developed. Make sure that you know what you are installing, and only install what you need.
    + Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
+ **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files.**
+ **Be ESPECIALLY careful when using applications such as:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
    + Firmware Downgraders
    + Any other app that modifies critical NAND files
+ **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
    + If your electricity is unstable (e.g. storm, power outage), postpone what you are doing until you have a stable power source.
    + This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

In any case, you should absolutely:
+ Have BootMii installed as boot2 if available, but otherwise as IOS.
+ Have Priiloader installed regardless of BootMii installation method.
+ Backup your NAND with BootMii and always have a valid spare copy on hand, but especially before attempting anything risky. Note that in some brick scenarios, BootMii is not accessible, so plan ahead.

# Diagnosis

Here is a small section that lists out steps similar to the Wii boot process, and links to the likely corresponding brick if something fails.

+ Turn on Wii.
+ Nothing happens, black screen. Wii cannot be turned on with a Wiimote, Recovery Mode cannot be started, and BootMii as boot2 is not accessible. See [low-level brick](bricks#low-level-brick).
+ Nothing happens, black screen, BUT Wii can be turned on with a Wiimote/Recovery Mode can be accessed. See [Wi-Fi brick](bricks#wi-fi-brick).
+ Nothing happens, black screen, BUT BootMii as boot2 is accessible. See [IOS brick](bricks#ios-brick).
+ Error 003 See [Korean Kii/Error 003 brick](bricks#error-003-brick).
+ Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. See [mail brick](bricks#mail-brick).
+ Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
    + If this happened after installing a theme, see [theme brick](bricks#theme-brick).
    + If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
    + To fix a mail brick, enter Maintenance mode by holding `+` and `-` on the Health and Safety screen.
+ Wii menu brick
    + If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick)
    + If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
+ Wii menu brick No app is malfunctioning, Wii settings is error free, everything is seemingly fine. Unless you have some other kind of error or brick that does not fall under this umbrella (which if you do, you should come to support about), you're good!

# Brick Types

Here, the different Wii bricks will be discussed in order of severity, with symptoms, causes, and solutions.

## Semibrick

#### Symptoms
When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

#### Cause
A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. This causes the Wii to fail to find the Wii settings page files.

![](/images/bricks/semibrick.png)

#### Solutions
Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.
{: .notice--danger}

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Banner brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

#### Cause
Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Solutions
If you are fortunate enough to get to the Wii Menu, enter the Homebrew Channel and uninstall the faulty WAD.

If you have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then use your WAD manager to uninstall the faulty WAD.

If you don't have Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen. (do not press `A`!)

## Theme brick

#### Symptoms

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

#### Cause
A theme brick occurs when a wrongly formatted theme is installed.

#### Solutions
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

#### Symptoms
Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

#### Cause
A mail brick happens when your Wii has a lot of mail. This will make the Wii crash.

#### Solution
By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

(do not press `A`!) <br> Enter the Homebrew Channel, and use [cdbackup](https://oscwii.org/library/app/cdbackup) to delete your Wii Message Board data.

## Wii Menu brick

#### Symptoms
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Cause
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

#### Solutions

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## Error 003 Brick

#### Symptoms
Screen shows up as listed below on normal boot.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Cause
When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While obviously this failed, they also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Solutions
Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to any Korean Wii.

While these caveats leave the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick.

## IOS brick

#### Symptoms
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Cause
This brick happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

#### Solutions
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. You must have BootMii as boot2 to fix this brick. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Symptoms
The only way to fix this brick is a way to launch homebrew by launching a game through the Recovery Menu. It's only accessible if you take apart a GameCube controller to hold all 4 +Control Pad buttons down while the GameCube controller's plugged into the 4th slot on your Wii as it's turned on.

#### Cause
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii Mini if you install a normal Wii IOS, because the Wii Mini doesn't have a Wi-Fi module.

#### Solutions
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii Mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Symptoms
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Cause
This brick occurs when boot1/boot2 is corrupt.

#### Solutions
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
