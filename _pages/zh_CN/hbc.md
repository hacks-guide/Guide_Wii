---
title: "安装Homebrew Channel和BootMii"
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications.
{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications. BootMii 是一个可以备份和恢复Wii的 NAND 存储的软件，如果安装在 boot2 中还可以提供变砖保护。

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. 如果您无法安装 BootMii，请继续[安装 Priiloader](priiloader)。 BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. 如果您无法安装 BootMii，请继续[安装 Priiloader](priiloader)。

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

如果您没有 SD 卡，您无法安装也不能使用 BootMii，因此也就无法享受到上述任何好处。 <br> 您可以随时[在以后安装它](hackmii)。
{: .notice--warning}

### Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + 你会看见一个诈骗警告提醒。

    ![](/images/hackmii/scam.png)

1. 等待30秒，当看见"Press 1 to continue"时，请按1。
1. 选择 `Exit` 以最终打开 Homebrew Channel。

    ![](/images/hackmii/test_results.png)

1. 选择 `Install the Homebrew Channel`。

    ![](/images/hackmii/hbc_install.png)

1. 完成后，请选择 `Continue`。

    ![](/images/hackmii/hbc_install_ok.png)

1. 安装完成后，选择 `Back`，然后选择 `BootMii`。

    ![](/images/hackmii/bootmii_install.png)

1. 选择 `Install BootMii as IOS`。

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. 安装完成后，请选择 `Continue`。
1. 如果 BootMii 显示 `can only be installed as an IOS`，这是正常的。

    ![](/images/hackmii/bootmii_install4.png)

1. 选择 `Continue`。
1. Homebrew Channel 安装成功

### 必读

您现在可以使用 Homebrew Channel 启动自制应用程序。

这里有个提示 - 当在您的 SD 卡或 U 盘上安装自制软件时，您的文件夹结构应该如下所示：

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

`AppName1` 和 `AppName2` 是占位符名称。 不要在 `apps` 文件夹本身内嵌套多个 `apps` 文件夹。

[继续使用 BootMii 制作 NAND 备份](bootmii)<br> 强烈建议此时用 BootMii 制作一个 NAND 备份。
{: .notice--info}

提示：您可以通过以下方式判断 Wii 是否已将 BootMii 安装为 boot2：当您按下 POWER 按钮后，光驱只会在立即的一次闪烁后非常短暂地闪烁。
{: .notice--info}
