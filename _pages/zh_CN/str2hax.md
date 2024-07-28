---
title: "Wiimmfi"
---

{% include toc title="Table of Contents" %}

请注意，如果您的 ISP 或网络禁止自定义 DNS 服务器，str2hax 将无法工作，您应该[选择其它漏洞](get-started)。
{: .notice--warning}

str2hax 是一种通过加载 Wii 最终用户许可协议触发的 Wii 漏洞。 它只需要一个可以在 Wii 上更改 DNS 的互联网连接。

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.
{: .notice--warning}

### Requirements

* 一台连接互联网的Wii

### Instructions

#### 第一部分 - 连接

此漏洞需要您设置 DNS，以便连接到包含漏洞的服务器。

1. Power on your console.
1. 转到 `Wii 选项`。

    ![](/images/riiconnect24/Internet_1.png)

1. 转到`Wii 设置`。

    ![](/images/riiconnect24/Internet_2.png)

1. 转到 `第 2 页`，然后点击 `Internet`。

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Click on your network connection slot and navigate to `Change Settings`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. 转到 `自动获取 DNS` (不是 IP 地址)，然后选择 `否`，然后选择 `高级设置`。

    ![](/images/riiconnect24/Internet_7.png)

1. Set the Primary DNS to `3.143.163.250`.

    ![](/images/exploits/str2hax/dns.png)

    如果存在 3 个字段而不是 2 个（如上所示），请返回并确保您位于 `自动获取 DNS` 页面上。
    {: .notice--warning}

1. 选择 `Confirm（确认）`，然后选择 `Save（保存）`。

    ![](/images/riiconnect24/Internet_10.png)

1. 选择 `OK` 以进行连接测试。

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + 如果连接测试成功，请选择 `否` 以跳过 Wii 系统更新。
    + 如果出现错误代码 `521xx`，请验证您输入的 DNS 是否正确。
    + 如果仍然不成功，请[使用其它漏洞](get-started)。

#### 第二部分 - 触发漏洞

1. 前往 `Internet` 部分，然后选择 `用户协议` 或 `Agreement/Contact`，然后选择 `是`。
1. Select `Yes`.
1. 点击 `下一个`。
    + 您将会看到以下屏幕：

    ![](/images/exploits/str2hax/EULA.png)

    + 如果您看到了正常的用户协议，这意味着您的 ISP 阻止了使用自定义 DNS。 Try another connection, or [use another exploit](get-started).

1. 请给漏洞 1-2 分钟的时间下载（不要点击 `I ACCEPT`/`I DO NOT ACCEPT`）。
1. If the exploit was successful, your device will have loaded the HackMii Installer.

    ![](/images/hackmii/scam.png)

    + 如果您安装了类似 CTGP Revolution 或 Project+ 的修改版，str2hax 可能会加载该修改版而不是 HackMii Installer。 如果发生这种情况，请重启 Wii，并在没有插入 SD 卡的情况下再次尝试。

[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}
