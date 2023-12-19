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
        <feed name="Feed di esempio"><![CDATA[http://example.com/rss-feed]]></feed>
        <feed name="Un altro feed di esempio!"><![CDATA[http://example.com/another_rss-feed]]></feed>
    </rss>
    ```

    Sostituisci la porzione "name" con il titolo desiderato da inserire per il feed. Cerca di limitarne la lunghezza se puoi. Quindi, sostituisci la porzione del link con il link del feel RSS. Puoi inserire tanti feed quanto ne vuoi. Non eliminare la porzione "CDATA".

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <rss>
        <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
        <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
    </rss>
    ```

    Sala il feed che hai creato nella root della tua scheda SD.

1. Avvia RSSMii dal Canale Homebrew.
1. Premi A per confermare che vuoi iscriverti ai feed. Ignora l'errore riguardante ES_GetTitleID, è tutto a posto.
1. Una volta terminato, premi HOME per tornare al Canale Homebrew. Presto dovresti ottenere gli aggiornamenti dei feed RSS sul tuo Wii, divertiti!

### Rimozione

#### Di cosa hai bisogno

* Una scheda SD
* [RSSMii Remover](https://oscwii.org/library/app/rssmii-remover)

#### Istruzioni

1. Estrai RSSMii Remover e inseriscilo nella cartella `apps` della tua scheda SD.
1. Elimina il file `feeds.xml` dalla root della tua scheda SD.
1. Avvia RSSMii Remover dal Canale Homebrew. Rimuoverà le tue iscrizioni ai feed RSS.

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
