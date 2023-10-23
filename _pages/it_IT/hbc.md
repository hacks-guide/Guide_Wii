---
title: "Installazione dell'Homebrew Channel e di BootMii"
---

{% include toc title="Table of Contents" %}

The Homebrew Channel is where you will go to launch homebrew applications. BootMii is a piece of software that can backup and restore your Wii's NAND storage, and if installed in boot2, provide brick protection.

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot2 are considerably rarer, having been manufactured before 2009. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).
{: .notice--info}

If you do not have an SD card, you cannot install nor use BootMii, regardless of whether you install it as IOS or boot2. You can always [install it later](hackmii).
{: .notice--warning}

### Istruzioni

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + You will see a scam warning screen.

    ![](/images/hackmii/scam.png)

1. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
1. Seleziona `Continue`.

    ![](/images/hackmii/test_results.png)

1. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Once it is completed, select `Continue`.
1. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

1. Select `Exit`.
1. Your console will have booted into the Homebrew Channel.

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

Note: When installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card or USB Drive
| ╸📁 apps
    | ╸📁 AppName1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 AppName2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

[Continue to making a NAND Backup using BootMii](bootmii)<br> Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.
{: .notice--info}

Tip: If a Wii has BootMii installed as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
