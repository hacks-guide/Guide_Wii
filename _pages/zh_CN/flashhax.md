---
title: "RiiConnect24"
---

{% include toc title="Table of Contents" %}

FlashHax是一个用于 Wii 的漏洞，通过使用 Internet Channel 来触发。 不像其他漏洞，这个漏洞不需要SD卡。

### Requirements

* 一台有互联网连接的Wii
* 互联网频道（The Internet Channel）

### Instructions

#### Section I - Prep Work

1. Power on your console.
1. Launch the Internet Channel.

    ![](/images/exploits/flashhax/internet-channel-start.png)

1. Go to `flashhax.com`.
1. Select the correct region for your console.

    ![](/images/exploits/flashhax/select-region.png)

1. Press the star button to open the bookmark tab.
1. Select `Add Favorite`.

    ![](/images/exploits/flashhax/bookmark-page.png)


#### Section II - FlashHax

1. Open the site from the bookmark
1. Wait a while
    + 由于它通过互联网下载 installer（安装程序），可能需要一些时间。

    ![](/images/exploits/flashhax/wait-for-download.png)

1. 它会下载并且加载HackMii Installer。
    + This may take multiple tries.
    + 如果 HackMii Installer 无法加载并且卡住（无法移动光标），请重启 Wii 并重复第 3 步，直到它正常工作。

如果仍然无法加载，请尝试删除 Internet Channel 的 Cookie 或保存数据。

If after several tries Flashhax still does not work, you should try a [different exploit](get-started) instead.


[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}
