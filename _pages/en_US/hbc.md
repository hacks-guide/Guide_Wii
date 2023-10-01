---
title: "Homebrew Channel and BootMii Installation"
---

The Homebrew Channel is where you will go to launch homebrew applications.
BootMii is a piece of software that can backup and restore your Wii's NAND storage, and if installed in boot2, provides brick protection.

Regarding BootMii, there are two ways that it can be installed: directly to a part of the Wii bootloader called boot2, and via an IOS. Preferably you would want to install BootMii under boot2 as it provides extended brick protection, however Wiis with a vulnerable boot2 are considerably rare and made mostly before 2009. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).
{: .notice--info}

If you do not have an SD card, you cannot install nor use BootMii; regardless of whether or not you install it as IOS or boot2.
You can always [install it at a later date](hackmii).
{: .notice--warning}

### Instructions

1. You will see a scam warning screen. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
    ![Scam Screen](/images/hackmii/scam.png)
1. You will be presented with a test results screen. Select `Continue`.
    ![Results](/images/hackmii/test_results.png)
1. Select `Install the Homebrew Channel`.
    ![Homebrew Channel installation](/images/hackmii/hbc_install.png)
1. Select `Continue` when finished.
    ![Homebrew Channel installation OK](/images/hackmii/hbc_install_ok.png)
1. Once installed, select `Back`, then select `BootMii`.
    ![BootMii](/images/hackmii/bootmii_install.png)
1. Select `Install BootMii as IOS`.
    ![BootMii installation](/images/hackmii/bootmii_install1.png)
    ![BootMii SD card prompt](/images/hackmii/bootmii_install2.png)
    ![BootMii SD card preparation](/images/hackmii/bootmii_install3.png)
    ![BootMii installation OK](/images/hackmii/bootmii_install_ok.png)
1. Once done, select `Continue`. If you have the option to `Install BootMii as boot2`, please do so as well.
    ![BootMii boot2 Installation](/images/hackmii/bootmii_install4.png)
1. Select `Exit` to finally open the Homebrew Channel.

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

Here's a tip - when installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

![Proper SD Card Folder Structure](images/wii/FolderStructure.png)

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

[Continue to making a NAND Backup using BootMii](bootmii)<br>
Making a NAND backup at this point is highly recommended, and is one of the only ways to save your Wii from a brick in some cases.
{: .notice--info}

Tip: You can tell if a Wii has BootMii installed as boot2 if your disc drive flashes very briefly, only after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
