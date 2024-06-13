---
title: "Wilbrand"
---

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

本页列出了两种用于创建正确的 Wilbrand 漏洞的方法。 推荐使用 Wilbrand Web，因为它易用。
{: .notice--info}

{% capture wilbrand-web %}

### Wilbrand Web

#### Requirements

* An SD card formatted to FAT32/MS-DOS
* 版本至少为 3.0 的 Wii

无法在 4.0 之前的 Wii 菜单版本中使用大于 2GB 的 SD 卡。
{: .notice--warning}

#### Instructions

1. Power on your console.
1. 转到您 Wii 上的 `Wii 设置`，并记下右上角的版本。
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. 请访问 [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/)，输入您的 Wii 的 MAC 、版本、区域，确保已勾选 `Bundle the HackMii Installer for me!` ，然后剪断其中一根电线。
1. Ensure `Bundle the HackMii Installer for me!` is checked.
1. Cut either wire.

    ![](/images/exploits/wilbrand/web.png)

1. 点击 "Download your .zip"。
1. 将 SD 卡插入你的电脑。
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. 取出 SD 卡并将其插入 Wii 中。
    + 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。
1. 将 HackMii Installer v1.2 解压到 PC 的一个文件夹中。
1. Open the Wii Message Board.
1. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    + 请确保 Wii 的日期正确，否则您可能找不到信。
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + 如果您没有看到绿色信，请检查 `数据管理` 中的 SD 卡部分是否有任何错误。 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。


1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}

{% endcapture %}

{% capture wilbrand-cli %}

### Wilbrand CLI

#### Requirements

* 运行 Windows、MacOS 或 Linux 的 PC
* An SD card formatted to FAT32/MS-DOS
* 版本至少为 3.0 的 Wii
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [将 HackMii Installer v1.2 解压到 PC 的一个文件夹中。](https://bootmii.org/download/)

无法在 4.0 之前的 Wii 菜单版本中使用大于 2GB 的 SD 卡。
{: .notice--warning}

#### Instructions

1. Power on your console.
1. 转到您 Wii 上的 `Wii 设置`，并记下右上角的版本。
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. 将 Wilbrand zip 解压到您 PC 的一个文件夹中，最好是放在桌面上。
1. 将下载的 ZIP 的内容解压到您 SD 卡的根目录中。
1. 在解压了 Wilbrand 的文件夹中打开终端。
1. 使用您 Wii 的版本和 MAC 地址运行以下命令：

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` 是您 SD 卡的盘符。

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/MacOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + 如果您没有直接在打开了 Wilbrand 的文件夹中打开终端，请先使用 `cd` 进入该文件夹，例如： `cd ~/Desktop/Wilbrand` `cd ~/Desktop/Wilbrand` `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` 是您 SD 卡挂载的文件夹。 这可能会因您使用的 Linux 发行版而有所不同。

        ![](/images/exploits/wilbrand/linux.png)

1. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.
1. 找到 `boot.elf` 文件并将其放置在您 SD 卡的根目录中。
1. 取出 SD 卡并将其插入 Wii 中。
    + 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。
1. 在 Wii 上，回到 Wii 菜单，然后打开 Wii 留言板。
1. Open the Wii Message Board.
1. Open the green letter with a bomb.
    + 请确保 Wii 的日期正确，否则您可能找不到信。
    + In some cases, you may need to check the messages for tommorow or yesterday for the letter to show up.
    + 如果您没有看到绿色信，请检查 `数据管理` 中的 SD 卡部分是否有任何错误。 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。

    ![](/images/exploits/wilbrand/msgboard.png)

1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'wilbrand-web')"> Wilbrand Web </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'wilbrand-cli')"> Wilbrand CLI </button>

<div class="tabContent tabDefualt" id="wilbrand-web" markdown="1">

{{ wilbrand-web }}
</div>
<div class="tabContent" id="wilbrand-cli" markdown="1">
{{ wilbrand-cli }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefualt')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
