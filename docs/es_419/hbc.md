::::: tabs

:::: tab Wii

# Instalación del Canal Homebrew y BootMii

:::details Detalles técnicos (opcional)

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. Install BootMii as IOS, even if you already installed BootMii as boot2 in the previous step. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits.

You can always [install it later](hackmii).

:::

## Instrucciones

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - You will see a scam warning screen.

   ![](/images/hackmii/scam.png)

2. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `BootMii...`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Select `Return to the main menu`, then select `Exit`.

11. Install the Homebrew Channel

    ![](/images/hbc/blank.png)

## Required Reading

When at the HackMii installer, you are able to install the Homebrew Channel and BootMii.

Here's a tip - when installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

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

### Wii: Next Steps

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Tip: You can tell if a Wii has BootMii installed as boot2 if your disc drive flashes very briefly, only after the immediate flash that happens when you press the POWER Button.

:::
::::

:::: tab Wii mini

# Homebrew Channel

:::details Detalles técnicos (opcional)

The Homebrew Channel is where you will go to launch homebrew applications.

:::

::: warning

While it is possible to install BootMii on a Wii mini, you will need to solder an SD card slot. That requires opening up your Wii mini and using special tools, so it is not recommended.

:::

## Instrucciones

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - You will see a scam warning screen.

   ![](/images/hackmii/scam.png)

2. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Install the Homebrew Channel

   ![](/images/hbc/blank.png)

## Required Reading

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

::: tip

### Wii mini: Next Steps

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::
::::
