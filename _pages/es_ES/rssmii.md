---
title: "Instalar RSSMii"
---

{% include toc title="Tabla de contenido" %}

Con esta guía aprenderás a instalar RSSMii, una herramienta que te permite recibir actualizaciones de fuentes RSS en el tablón de Wii.

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

En caso de no comenzar a recibir actualizaciones al cabo de unos días, intenta volver a suscribirte a las fuentes RSS. Para ello, solo debes ejecutar RSSMii nuevamente desde el Canal Homebrew.
{: .notice--info}

### Requisitos

* Una tarjeta SD
* [RSSMii](https://oscwii.org/library/app/rssmii)

### /images/rssmii.png
#### Sección I - Descarga/instalación

1. Extrae el archivo de RSSMii a la carpeta `apps` en tu tarjeta SD.
1. Crea un archivo llamado `feeds.xml` en la raíz de la tarjeta SD, para que de esta forma RSSMii pueda saber a qué fuentes deseas suscribirte.

+ If you're using Windows, you can use [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat). It will automatically create a `feeds.xml` file and will copy it to your SD card.

+ Si no tienes una PC con Windows, puedes copiar el siguiente ejemplo y usar un editor de texto para crear el archivo `feeds.xml`:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="Example-Feed"><![CDATA[http://example.com/rss-feed]]></feed>
  <feed name="One more Example-Feed!"><![CDATA[http://example.com/another_rss-feed]]></feed>
</rss>
    ```

    Reemplaza el nombre con el título que quieras poner a la fuente. Asegúrate de que no sea muy largo, ya que el límite de caracteres es reducido. Después, reemplaza el enlace de ejemplo con el enlace de la fuente RSS. Puedes añadir tantas fuentes como desees. No borres la parte que dice `CDATA`.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
  <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
</rss>
    ```

    Save the feed you made to the root of your SD Card.

1. Inicia RSSMii desde el Canal Homebrew.
1. Oprime A para confirmar tu suscripción a las fuentes. Ignora el error que dice `ES_GetTitleID`.
1. Cuando el proceso haya finalizado, oprime HOME para volver al Canal Homebrew. ¡Pronto deberías comenzar a recibir actualizaciones RSS en tu tablón de Wii!

### rssmii-remove

#### What you need

* Si tu PC ejecuta Windows, puedes usar [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat), un programa creado por KcrPL que se encargará de generar el archivo `feeds.xml` y copiarlo a la tarjeta SD automáticamente.
* [Desinstalar RSSMii](https://oscwii.org/library/app/rssmii-remover)

#### Instrucciones

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
