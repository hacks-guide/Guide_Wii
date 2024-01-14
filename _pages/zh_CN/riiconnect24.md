---
title: "RiiConnect24"
---

{% include toc title="Table of Contents" %}

如果您对本教程有任何问题或需要帮助，请加入 [RiiConnect24 Discord 服务器](https://discord.gg/rc24)（推荐）或 [发送电子邮件至 support@riiconnect24.net](mailto:support@riiconnect24.net) 与我们联系。
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) 允许你使用已经停止运营的 WiiConnect24 服务，包含新闻、天气、大家一起投票、大家的任天堂和Mii竞赛频道，还有Wii邮箱。

在继续之前，建议将您的 Wii 设为当前时间。 请按照[此教程](rtc)设置时间。
{: .notice--warning}

不要在 WII MINI 上安装 RIICONNECT24！ 它将无法正常工作并导致变砖。
{: .notice--danger}

### Requirements

如果您想在 vWii（Wii U 的 Wii 模式）上安装 RiiConnect24，请按照[此教程](riiconnect24-vwii)进行操作。
{: .notice--primary}

+ 一张SD卡或U盘
+ 一台连接互联网的Wii
+ A PC with an Internet connection
+ [RiiConnect24 Patcher（Windows、Mac 和 Linux）](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

#### 第一部分 - 使用 RiiConnect24 Patcher

1. 请点击上面的链接以前往包含 patcher（修补程序）的 GitHub 页面。
1. 如果您使用的是 Windows 系统，请下载 `RiiConnect24Patcher.bat`，如果您使用的是 Unix 系统，请下载 `RiiConnect24Patcher.sh`
1. RiiConnect24 Patcher 主屏幕
    + 在 Windows 上运行 `RiiConnect24Patcher.bat`。
    + 在 Unix 系统上，打开终端并输入 `bash`，然后将 `RiiConnect24Patcher.sh` 拖到终端中，然后按回车。 它应该是这样的：`bash RiiConnect24Patcher.sh`。
1. 按 1 选择“`Start`”，然后按 `ENTER` 确认您的选择。

    ![](/images/riiconnect24/patcher/1.JPG)

1. 选择您要修补的设备。

    ![](/images/riiconnect24/patcher/2.JPG)

1. 根据本指南，选择 "`Install RiiConnect24 on your Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. 选择“`Express (Recommended)`”。 它将为您提供所需的一切。

    ![](/images/riiconnect24/patcher/4.JPG)

1. 选择您的区域

    ![](/images/riiconnect24/patcher/5.JPG)

1. 当您到这时，RiiConnect24 Patcher 还可以下载一些其它不使用 RiiConnect24 的可选频道。 `[X]` 表示已选择的选项。 如果您不感兴趣，只需按 5 和 `ENTER`。

    ![](/images/riiconnect24/patcher/6.JPG)

1. 将 SD 卡或 U 盘连接到电脑上，并选择“`1`”。

    ![](/images/riiconnect24/patcher/7.JPG)

1. 如果成功检测到您的设备，请选择 "`1`"。 如果没有，请确保您的 SD 卡或 U 盘上有一个名为 `apps` 的文件夹，然后重试。

    ![](/images/riiconnect24/patcher/8.JPG)

1. The patcher will download apps now - please be patient.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Once you reach the screen that says `Patching done`, you can exit the patcher. 所有文件应该已经位于您的 SD 卡上。

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. 如果没有自动将所有文件复制到您的 SD 卡或 U 盘上，请将 `RiiConnect24Patcher.bat` 旁边的 `WAD` 和 `apps` 文件夹复制到您的 SD 卡或 U 盘上。

#### 第二部分 - 安装 WAD

If you are using Dolphin, you have finished the guide. Install the WADs by going to `Tools -> Install WAD` within Dolphin.
{: .notice--primary}

现在您将安装使用 RiiConnect24 所需的已修补 IOS 和频道 WAD。

1. 解压 YAWM ModMii Edition `.zip` 文件，并将 `apps` 文件夹复制到 SD 卡或 U 盘中。
1. 将 SD 卡或 U 盘插入 Wii。
1. 启动 Wii 上的 Homebrew Channel。
1. 启动 YAWM ModMii Edition。
1. 选择您放置 RiiConnect24 文件的设备。
1. 按 + 选择 `wad` 文件夹中的所有 WAD。 选择所有 WAD 后，按两次 A 来安装 WAD。
1. 安装成功后，按HOME按钮返回Homebrew Channel。

#### 第三部分 - 修补 nwc24msg.cfg

现在需要对您的 `nwc24msg.cfg` 文件进行修补以使用 Wii Mail。

1. 启动 RiiConnect24 Mail Patcher。
1. 修补 nwc24msg.cfg 通常只需要几秒钟。 完成后，按下 HOME 按钮退出。

#### 第四部分 - 连接

自 `2023年6月1日` 起，旧 DNS 服务器 `164.132.44.106` 将被弃用，不再可用。
{: .notice--warning}

如果您遇到了例如 `WiiConnect24 and Wii Shop Channel currently not being offered in your country` 的错误，请前往 Wii 设置 -> 最后一页 -> 国家，并将其更改为英国。 当您使用我们不支持的国家时会出现出错误。 如果您需要更多帮助，请通过 [support@riiconnect24.net](mailto:support@riiconnect24.net) 与我们联系。
{: .notice--warning}

如果您遇到错误 107245，表示您尚未安装修补过的 IOS。<br>
{: .notice--warning}

您现在需要将 DNS 设置为我们的服务器。 这是可选项，但建议这么做，因为它通过提供其它功能来增强 RiiConnect24 和 Wiimmfi 的使用。

1. 转到 `Wii Options（Wii 选项）`。
1. 转到 `Wii Settings（Wii 设置）`。
1. 转到 `第 2 页`，然后点击 `Internet`。
1. 转到 `Connection Settings（连接设置）`。
1. 选择当前连接。
1. 转到 `Change Settings（更改设置）`。
1. 转到 `Auto-Obtain DNS（自动获取 DNS）`（不是 IP 地址），然后选择 `否`，然后选择 `Advanced Settings（高级设置）`。
1. 将主要DNS设置为 `167.86.108.126`。
1. 将次要DNS设置为 `1.1.1.1`。
1. 选择 `Confirm（确认）`，然后选择 `Save（保存）`。
1. 选择 `OK` 以进行连接测试。
1. 如果连接测试成功，请选择 `否` 以跳过 Wii 系统更新。
1. 进入 `WiiConnect24`，然后再次点击 `WiiConnect24`，确保它已启用。
1. 回到 WiiConnect24 菜单，转到 `Standby Connection（待机连接）`并确保已启用。
1. 在 `Slot Illumination（插槽照明）`中，我们建议您将光驱灯设置为 `Dim（暗）` 或 `Bright（亮）`，但这是可选的。
1. 最后，进入 `Internet` 部分，然后选择 `User Agreements（用户协议）` 或 `Agreement/Contact（协议/联系）`，然后选择 `是`。 请阅读以下内容。

[Return to WiiConnect24](wiiconnect24)
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
