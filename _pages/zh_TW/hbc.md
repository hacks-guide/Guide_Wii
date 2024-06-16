---
title: "Homebrew Channel and BootMii Installation"
---

{% include toc title="條目內容" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications.
{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications. BootMii is a piece of software that can backup and restore your Wii's NAND storage, and if installed in boot2, provide brick protection.

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. If BootMii says that it `can only be installed as an IOS`, that's normal. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. If BootMii says that it `can only be installed as an IOS`, that's normal.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

If you do not have an SD card, you cannot install nor use BootMii, and therefore will not be able to utilize any of the mentioned benefits. <br> You can always [install it at a later date](hackmii). You can always [install it later](hackmii). You can always [install it later](hackmii).
{: .notice--warning}

### Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + You will see a scam warning screen.

    ![](/images/hackmii/scam.png)

1. You will see a scam warning screen. Wait 30 seconds for the text "Press 1 to continue" to appear, then press 1.
1. Select `Exit` to finally open the Homebrew Channel.

    ![](/images/hackmii/test_results.png)

1. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Once done, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Once installed, select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Select `Continue` when finished.
1. If you have the option to `Install BootMii as boot2`, please do so as well. This offers the best possible brick protection you can have. <br> 否則，請跳過此步驟。

    ![](/images/hackmii/bootmii_install4.png)

1. Select `Exit` to finally open the Homebrew Channel.
1. Your console will have booted into the Homebrew Channel.

### Required Reading

The Homebrew Channel is where you will go to launch homebrew applications. BootMii is a piece of software that can backup and restore your Wii's NAND storage, and if installed in boot2, provides brick protection.

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

`AppName1` and `AppName2` are placeholder names. `AppName1` and `AppName2` are placeholder names. `AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

[繼續使用 BootMii 進行 NAND 備份](bootmii)<br> 強烈建議此時使用 BootMii 進行 NAND 備份。
{: .notice--info}

Tip: You can tell if a Wii has BootMii installed as boot2 if your disc drive flashes very briefly, only after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
