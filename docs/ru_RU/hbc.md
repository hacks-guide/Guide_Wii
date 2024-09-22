---
title: "Установка канала Homebrew и BootMii"
---

{% include toc title="Оглавление" %}

{% capture technical_info %}
<summary><em>Технические детали (опционально)</em></summary>
Канал Homebrew - это место, где вы будете запускать homebrew приложения. BootMii — программа для резервного копирования и восстановления NAND вашей Wii, а если установленная в boot2, обеспечивает защиту от окирпичивания.

BootMii может быть установлен двумя путями: непосредственно в часть системного загрузчика под названием boot2, и в IOS. BootMii в boot2 предпочтительнее, так как он обеспечивает расширенную защиту от окирпичивания, но консоли Wii с уязвимым boot1 которые позволяют установку в boot2 появляются значительно реже, поскольку они были выпущены до 2009 года. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits. <br> You can always [install it at a later date](hackmii).
{: .notice--warning}

### Инструкции

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + You will see a scam warning screen.

    ![](/images/hackmii/scam.png)

1. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
1. Select `Exit` to finally open the Homebrew Channel.

    ![](/images/hackmii/test_results.png)

1. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Select `Continue` when finished.

    ![](/images/hackmii/hbc_install_ok.png)

1. Once installed, select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Once done, select `Continue`.
1. If you couldn't install BootMii, continue to [installing Priiloader](priiloader).

    ![](/images/hackmii/bootmii_install4.png)

1. If BootMii says that it `can only be installed as an IOS`, that's normal.
1. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

### Required Reading

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

[Continue to making a NAND Backup using BootMii](bootmii)<br> Making a NAND backup with BootMii at this point is highly recommended.
{: .notice--info}

Tip: You can tell if a Wii has BootMii installed as boot2 if your disc drive flashes very briefly, only after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
