---
title: "RssMii 설치"
---

{% include toc title="목차" %}

Wii 메시지 보드에서 RSS 피드 업데이트를 받고 싶나요? 이 튜토리얼은 RSSMii 설정법을 알려줍니다.

Due to the nature of RSS feeds and the large amount of mail they can generate, this app has a larger than zero chance of [bricking](bricks#mail-brick) your Wii. Consider using News Channel from a WiiConnect24 revival provider instead, and request an addition to their service should you find out that your intended RSS feed isn't being provided. If you decide to use RSSMii anyway, limit the number of feeds you subscribe to.
{: .notice--danger}

며칠 뒤에도 업데이트가 없다면, RSS 피드를 재구독해야 할 수 있습니다. RSSMii를 홈브루 채널에서 다시 실행하면 새 구독이 생길겁니다.
{: .notice--info}

### 방법

* SD 카드
* [RSSMii](https://oscwii.org/library/app/rssmii)

### 진행 방법
#### 섹션 I - 다운로드/설치하기

1. RSSMii를 압축 해제하고 SD 카드 및 USB 드라이브의 `apps` 폴더에 붙여넣으세요.
1. `feeds.xml`을 SD 카드의 최상단 폴더에 만들어 앱이 어디를 구독할지 알려줘야 합니다.

+ Windows 운영체제를 사용한다면 KcrPL의 [RSS Feeds Creator](https://github.com/RiiConnect24/rssmii/releases/download/v1.4.1/RSSFeedsCreator.bat)를 사용할 수 있습니다. 이것은 자동으로 `feeds.xml`을 만들고 SD 카드에 복사할겁니다!

+ Windows 컴퓨터가 없다면, 이 템플릿을 이용해서 원하는 텍스트 에디터로 `feeds.xml`을 만드세요.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="예시 피드"><![CDATA[http://example.com/rss-feed]]></feed>
  <feed name="예시 피드 하나 더!"><![CDATA[http://example.com/another_rss-feed]]></feed>
</rss>
    ```

    "name" 부분을 피드에 넣을 제목으로 바꾸세요. 공간이 많이 없기 때문에 길지 않게 하세요. 그 다음 링크 부분을 RSS 피드의 주소로 바꾸세요. 피드를 원하는 만큼 추가할 수 있습니다. "CDATA" 부분을 지우세요.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
<rss>
  <feed name="RiiConnect24 Medium"><![CDATA[https://medium.com/feed/riiconnect24]]></feed>
  <feed name="RiiConnect24 Twitter"><![CDATA[https://nitter.net/riiconnect24/rss]]></feed>
</rss>
    ```

    SD 카드의 최상위 경로에 피드를 저장하세요.

1. 홈브루 채널에서 RSSMii를 실행하세요.
1. A를 눌러 피드 구독을 승인하세요. ES_GetTitleID 오류는 무시하셔도 됩니다.
1. 모든 것이 끝나면, HOME 버튼을 눌러 홈브루 채널로 되돌아가세요. 곧 Wii에서 RSS 피드 업데이트를 받게 될겁니다. 즐기세요!

### rssmii-remove

#### 필요한 것

* /images/rssmii.png
* [RSSMii 제거](https://oscwii.org/library/app/rssmii-remover)

#### 진행 방법

1. Extract RSSMii Remover and put it in the `apps` folder on your SD card.
1. Delete the `feeds.xml` file on the root of your SD card.
1. Launch RSSMii Remover from the Homebrew Channel. It will remove your subscriptions to the RSS feeds.

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
