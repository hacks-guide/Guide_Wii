::::: tabs

:::: tab Wii
# Homebrew Channel and BootMii Installation

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

If you do not have an SD card, you cannot install nor use BootMii, regardless of whether you install it as IOS or boot2.

You can always [install it later](hackmii).

:::

::: details Disclaimer for BootMii with boot2

BootMii can be installed in two ways: via IOS, or directly to a part of the Wii bootloader called boot2. BootMii under boot2 is preferred as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader).

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

:::

## Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + You will see a scam warning screen.

    ![](/images/hackmii/scam.png)

1. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
1. Select `Continue`.

    ![](/images/hackmii/test_results.png)

1. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Select `BootMii...`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Once it is completed, select `Continue`.
1. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

1. Select `Return to the main menu`, then select `Exit`.
1. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

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

---

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::: tab Wii mini

# Homebrew Channel

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

::: warning

While it is possible to install BootMii on a Wii mini, you will need to solder an SD card slot. That requires opening up your Wii mini and using special tools, so it is not recommended.

:::

## Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + You will see a scam warning screen.

    ![](/images/hackmii/scam.png)

1. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
1. Select `Continue`.

    ![](/images/hackmii/test_results.png)

1. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Once it is completed, select `Continue`

    ![](/images/hackmii/hbc_install_ok.png)

1. Select `Exit`.

1. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps.

Note: When installing homebrew applications on your USB drive, your folder structure should look like this:

```
💾 USB Drive
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

---

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::
