---
title: "Installing RSSMii"
---

{% include toc title="Table of Contents" %}

This guide provides instructions on installing RSSMii, a homebrew app that parses RSS feeds from your SD card and sends them to your Wii Menu.

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

If you're not receiving updates after a few days, you might need to subscribe to the RSS feeds again. Launch RSSMii from the Homebrew Channel again and it should create new subscriptions.
{: .notice--info}

### Requisiti

* An SD card
* [RSSMii](https://oscwii.org/library/app/rssmii)

### Istruzioni
#### Section I - Downloading/Installing

1. Extract RSSMii and put it in the `apps` folder on your SD card.
1. Create a `feeds.xml` on the root of the SD card so the app can parse your feeds.

+ If you're using Windows, you can use [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat). It will automatically create a `feeds.xml` file and will copy it to your SD card.

+ If you don't have a Windows computer, use this template to make the `feeds.xml`.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <rss>
        <feed name="Example-Feed"><![CDATA[http://example.com/rss-feed]]></feed>
        <feed name="One more Example-Feed!"><![CDATA[http://example.com/another_rss-feed]]></feed>
    </rss>
    ```

    Replace the "name" portion with the title you want to put for the feed. Try to limit its length where possible. Then, replace the link portion with the link to the RSS feed. You can put as many feeds as you want. Don't delete the "CDATA" part.

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

### Removal

#### What you need

* An SD card
* [RSSMii Remover](https://oscwii.org/library/app/rssmii-remover)

#### Istruzioni

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
