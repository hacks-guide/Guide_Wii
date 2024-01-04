---
title: "Installing RSSMii"
---

{% include toc title="Table of Contents" %}

Do you want to get RSS feed updates on your Wii Message Board? This tutorial will tell you how to set RSSMii up.

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

If you're not receiving updates after a few days, you might need to subscribe to the RSS feeds again. Launch RSSMii from the Homebrew Channel again and it'll create brand new subscriptions.
{: .notice--info}

### Requirements

* An SD card
* [RSSMii](https://oscwii.org/library/app/rssmii)

### Instructions
#### Section I - Downloading/Installing

1. Extract RSSMii and put it in the `apps` folder on your SD card.
1. We need to create a `feeds.xml` on the root of the SD card so the app will know what feeds to subscribe you to.

+ If you're using the Windows Operating System, you can use the [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat) program created by KcrPL. It will automatically create a `feeds.xml` file and will copy it to your SD card!

+ If you don't have a Windows computer, use this template and use your favorite text editor to make the `feeds.xml`.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="Example-Feed"><![CDATA[http://example.com/rss-feed]]></feed>
  <feed name="One more Example-Feed!"><![CDATA[http://example.com/another_rss-feed]]></feed>
</rss>
    ```

    Replace the "name" portion with the title you want to put for the feed. Make sure it's not very long, since there's not that much space. Then, replace the link portion with the link to the RSS feed. You can put as many feeds as you want. Don't delete the "CDATA" part.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
  <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
</rss>
    ```

    Save the feed you made to the root of your SD Card.

1. Launch RSSMii from the Homebrew Channel.
1. Press A to confirm you want to subscribe to the feeds. Ignore the error about ES_GetTitleID, everything is fine.
1. Once everything is done, press HOME to go back to the Homebrew Channel. You should soon get RSS feed updates on your Wii, enjoy!

### rssmii-remove

#### What you need

* An SD card
* [Removing RSSMii](https://oscwii.org/library/app/rssmii-remover)

#### Instructions

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
