---
outline: false
---

# Homebrew Channel and BootMii Installation

<br>

::::: tabs

:::: tab Wii

## Homebrew Channel and BootMii Installation for Wii

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits.

You can always [install it later](hackmii).

:::

:::details Disclaimer for BootMii with boot2

BootMii can be installed in two ways: via IOS, or directly to a part of the Wii bootloader called boot2. If possible, it is urged to install as boot2 as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader). If you DO have the option to install as boot2, you should install both boot2 and IOS as instructed below so that you can launch BootMii in ways other than starting the console.

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

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

11. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

### Post-Installation Info

You can now use the Homebrew Channel to launch homebrew apps.

Here's a tip - when installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```shell
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

### Автозагрузка

Если вы смогли установить BootMii в качестве boot2, но не хотите загружать BootMii при каждом включении Wii, у вас есть возможность настроить автозагрузку в системное меню. This will restore your console behavior to booting to the system menu instaed of to BootMii.

1. Open `SD:/bootmii/bootmii.ini` with a text editor.
2. Замените `#AUTOBOOT=SYSMENU` на `AUTOBOOT=SYSMENU` путем удаления символа `#`.
3. Затем замените `#BOOTDELAY=5` на `BOOTDELAY=1` путем удаления символа `#` и заменой цифры `5` на `1`.
4. Сохраните изменения и выйдите.

::: info

Вы также можете использовать [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) на Wii для изменения этих настроек.

:::

---

::: tip

[Continue to making a NAND Backup](nand-backup)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::: tab Wii mini

## Homebrew Channel Installation for Wii mini

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

::: warning

Хотя установить BootMii на Wii mini возможно, для этого потребуется припаять слот для SD карты. Это требует вскрытия вашей Wii mini и использования специальных инструментов, поэтому данный способ не рекомендуется.

:::

### Инструкции

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - Вы увидите экран предупреждения о мошенничестве.

   ![](/images/hackmii/scam.png)

2. Подождите 30 секунд, пока не появится текст "Press 1 to continue", затем нажмите 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Your console will have booted into the Homebrew Channel.

   ![](/images/hbc/blank.png)

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps.

Note: When installing homebrew applications on your USB drive, your folder structure should look like this:

```shell
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

[Continue to making a NAND Backup](nand-backup)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::::
