---
title: "Instalando RSSMii"
---

{% include toc title="Sumário" %}

Deseja receber atualizações de feed do RSS no seu Wii Message Board? Este tutorial lhe dirá como configurar o RSSMii.

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

Se você não estiver recebendo atualizações depois de alguns dias, talvez você precise se inscrever nos feeds RSS novamente. Abra o RSSMii novamente do Homebrew Channel e ele criará novas assinaturas.
{: .notice--info}

### Requisitos

* Um cartão SD
* [RSSMii](https://oscwii.org/library/app/rssmii)

### /images/rssmii.png
#### Seção I - Baixando/Instalando

1. Extraia o RSSMii e coloque-o na pasta `apps` no seu cartão SD.
1. Precisamos criar `feeds.xml` na raiz do cartão SD para que o aplicativo saiba quais feeds você vai se inscrever.

+ Se você estiver usando o Sistema Operacional do Windows, poderá utilizar o [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat) criado por KcrPL. Será criado automaticamente o arquivo `feeds.xml` e ele irá o copiar para seu cartão SD!

+ Se você não tiver um computador Windows, use este modelo e use o seu editor de texto favorito para criar o `feeds.xml`.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="Example-Feed"><![CDATA[http://example.com/rss-feed]]></feed>
  <feed name="One more Example-Feed!"><![CDATA[http://example.com/another_rss-feed]]></feed>
</rss>
    ```

    Substitua a parte "name" com o título que você deseja colocar para o feed. Certifique-se de que não é muito longo, já que não há muito espaço. Em seguida, substitua a parte do link com o link para o feed RSS. Você pode colocar quantos feeds quiser. Não apague a parte "CDATA".

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
  <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
</rss>
    ```

    Salve o feed que você fez na raiz do seu cartão SD.

1. Abra o RSSMii através do Homebrew Channel.
1. Pressione A para confirmar que você deseja assinar os feeds. Ignore o erro sobre ES_GetTitleID, está tudo bem.
1. Quando tudo estiver pronto, pressione HOME para voltar para o Homebrew Channel. Em breve, você receberá atualizações de feeds RSS no seu Wii, aproveite!

### rssmii-remove

#### Você precisará de

* Recomendamos que você use apenas alguns feeds, porque se você se inscrever para um monte de feeds, você receberá uma tonelada de mensagens no seu Wii.
* [Removendo o RSSMii](https://oscwii.org/library/app/rssmii-remover)

#### Instruções

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
