---
title: "安装 RSSMii"
---

{% include toc title="Table of Contents" %}

您想在 Wii 留言板上接收 RSS 订阅更新吗？ 本教程将告诉您如何设置 RSSMii。

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

如果几天后仍然没有收到更新，您可能需要重新订阅 RSS 源。 再次从 Homebrew Channel 启动 RSSMii，它将创建全新的订阅。
{: .notice--info}

### Requirements

* 一张SD卡
* [RSSMii](https://oscwii.org/library/app/rssmii)

### Instructions
#### 第一部分 - 下载/安装

1. 解压 RSSMii 并将其放入 SD 卡的 `apps` 文件夹中。
1. 我们需要在 SD 卡的根目录创建 `feeds.xml` 文件，以便应用知道要订阅哪些源。

+ 如果您使用的是 Windows 操作系统，您可以使用由 KcrPL 创建的 [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat) 程序。 它将自动创建 `feeds.xml` 文件，并将其复制到您的 SD 卡上！

+ 如果您没有 Windows 电脑，请使用此模板，并使用您喜欢的文本编辑器创建 `feeds.xml`。

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="Example-Feed"><![CDATA[http://example.com/rss-feed]]></feed>
  <feed name="One more Example-Feed!"><![CDATA[http://example.com/another_rss-feed]]></feed>
</rss>
    ```

    将“name”部分替换为您要为该源设置的标题。 请确保标题不要太长，因为空间有限。 然后，将链接部分替换为 RSS 源的链接。 您可以添加任意数量的源。 请不要删除“CDATA”部分。

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
  <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
</rss>
    ```

    将您创建的源保存到 SD 卡的根目录。

1. 从 Homebrew Channel 启动 RSSMii。
1. 按 A 确认您要订阅这些源。 忽略关于 ES_GetTitleID 错误，一切都正常。
1. 完成后，按 HOME 回到 Homebrew Channel。 您应该很快就会在 Wii 上收到 RSS 源的更新，祝您愉快！

### rssmii-remove

#### 你需要的是

* /images/rssmii.png
* [删除 RSSMii](https://oscwii.org/library/app/rssmii-remover)

#### Instructions

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
