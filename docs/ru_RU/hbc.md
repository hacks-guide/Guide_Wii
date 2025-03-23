# Homebrew Channel and BootMii Installation

:::details Технические детали (опционально)

BootMii может быть установлен двумя путями: непосредственно в часть системного загрузчика под названием boot2, и в IOS. BootMii в boot2 предпочтительнее, так как он обеспечивает расширенную защиту от окирпичивания, но консоли Wii с уязвимым boot1 которые позволяют установку в boot2 появляются значительно реже, поскольку они были выпущены до 2009 года. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits.
You can always [install it later](hackmii).

:::

## Инструкции

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - Вы увидите экран предупреждения о мошенничестве.

   ![](/images/hackmii/scam.png)

2. Подождите 30 секунд, пока не появится текст "Press 1 to continue", затем нажмите 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Back`, then select `BootMii`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Select `Exit`.

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
