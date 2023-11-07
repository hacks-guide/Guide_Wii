---
title: "Installare RSSMii"
---

{% include toc title="Table of Contents" %}

Questa guida fornisce istruzioni per l'installazione di RSSMii, un'app homebrew che analizza i feed RSS dalla tua scheda SD e li invia al tuo Menu Wii.

A causa della natura dei feed RSS e della grande quantità di posta che possono generare, è più che probabile che questa app possa causare un [brick](bricks#mail-brick) del tuo Wii. Considera al suo posto di usare il Canale Notizie da un provider di revival di WiiConnect24 e richiedi un'aggiunta al loro servizio in caso il tuo feed RSS non dovesse essere presente. Se tu dovessi comunque decidere di usare RSSMii, limita il numero di feed a cui ti iscrivi.
{: .notice--danger}

Se non ricevi aggiornamenti dopo alcuni giorni, potrebbe essere necessario iscriversi nuovamente ai feed RSS. Avvia RSSMii dal Canale Homebrew di nuovo e poi dovrebbe creare nuove iscrizioni.
{: .notice--info}

### Requisiti

* Una scheda SD
* [RSSMii](https://oscwii.org/library/app/rssmii)

### Istruzioni
#### Sezione I - Download/Installazione

1. Estrai RSSMii e inseriscilo nella cartella `apps` della tua scheda SD.
1. Crea un file `feeds.xml` nella root della scheda SD in modo che l'app possa analizzare i tuoi feed.

+ Se stai usando Windows, puoi usare [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat). Creerà automaticamente un file `feeds.xml` e lo copierà nella tua scheda SD.

+ Se non hai un computer Windows, usa questo modello per creare il `feeds.xml`.

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

* Una scheda SD
* [RSSMii Remover](https://oscwii.org/library/app/rssmii-remover)

#### Istruzioni

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
