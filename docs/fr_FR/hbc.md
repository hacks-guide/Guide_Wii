# Installation de la chaine Homebrew et BootMii

:::details Technical Details (optional)

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. In most cases, installing BootMii as IOS should be fine, as long as you also install <a href="priiloader">Priiloader</a>. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits. <br> You can always [install it at a later date](hackmii).

:::

## Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - Vous verrez un écran d'avertissement d'arnaque.

   ![](/images/hackmii/scam.png)

2. Attendez 30 secondes pour que le texte "Press 1 to continue" apparaisse, puis appuyez sur 1.

3. Select `Continue` when finished.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Select `Exit` to finally open the Homebrew Channel.

   ![](/images/hackmii/hbc_install_ok.png)

6. Once installed, select `Back`, then select `BootMii`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once done, select `Continue`.

9. If you couldn't install BootMii, continue to [installing Priiloader](priiloader).

   ![](/images/hackmii/bootmii_install4.png)

10. {% endcapture %}

11. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

## Required Reading

You can now use the Homebrew Channel to launch homebrew apps.

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

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Tip: You can tell if a Wii has BootMii installed as boot2 if your disc drive flashes very briefly, only after the immediate flash that happens when you press the POWER Button.

:::
