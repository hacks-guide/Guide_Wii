---
title: "str2hax"
---

{% include toc title="목차" %}

커스텀 DNS 서버를 막는 ISP (인터넷 서비스 제공자) 나 네트워크 환경인 경우, str2hax는 작동하지 않을 것이며 [다른 취약점을 이용](get-started)해야 합니다.
{: .notice--warning}

str2hax는 Wii의 최종 사용자 라이선스 동의서를 이용해서 실행되는 Wii의 취약점입니다. 아무것도 필요하지 않으나 Wii의 DNS를 변경할 수 있게 하는 인터넷 연결이 필요합니다.

CTGP Revolution 또는 Project+와 같은 모드를 설치한 경우, str2hax가 대신 해당 Mod를 로드할 수 있습니다. 이 경우 Wii를 재시동하고 SD 카드를 연결하지 않은 상태에서 다시 시도합니다.
{: .notice--warning}

### 필요한 것

* 인터넷 연결이 있는 Wii

### 진행 방법

#### 섹션 I - 연결

이 취약점 공격을 사용하려면 취약점 공격이 포함된 서버에 연결하기 위해 DNS를 설정해야 합니다.

1. 콘솔의 전원을 켜 주세요.
1. `Wii 옵션`으로 이동하세요.

    ![](/images/riiconnect24/Internet_1.png)

1. `Wii 설정`으로 이동하세요.

    ![](/images/riiconnect24/Internet_2.png)

1. `페이지 2`로 이동하고, `인터넷`을 클릭하세요.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. `연결 설정`으로 이동합니다.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. `DNS 자동 연결` (IP 주소가 아님) 으로 이동해서 `끄기`를 선택하고, `고급 설정`으로 들어갑니다.

    ![](/images/riiconnect24/Internet_7.png)

1. Set the Primary DNS to `3.143.163.250`.

    ![](/images/exploits/str2hax/dns.png)

    위와 같이 필드가 2개가 아닌 3개인 경우, 돌아가서 `자동 DNS 가져오기` 페이지에 있는지 확인합니다.
    {: .notice--warning}

1. `확인`을 선택한 다음, `저장`을 선택합니다.

    ![](/images/riiconnect24/Internet_10.png)

1. `확인`을 선택하여 연결 테스트를 수행합니다

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + 연결 테스트에 성공했다면 `아니요`를 선택하여 Wii 시스템 업데이트를 건너뜁니다.
    + 오류 코드 `521xx`으로 실패하면 DNS를 올바르게 입력했는지 확인합니다.
    + 그래도 성공하지 못하면 [다른 취약점 공격을 사용](get-started)합니다.

#### 섹션 II - 취약점 실행하기

1. `인터넷` 섹션으로 이동한 다음 `사용자 계약` 또는 `계약/연락처`로 이동한 다음 `예`로 이동합니다.
1. `다음`을 클릭합니다.
1. `설정 편집`으로 이동합니다.
    + 다음과 같은 화면이 표시됩니다:

    ![](/images/exploits/str2hax/EULA.png)

    + 일반 사용자 동의를 받으면 ISP가 커스텀 DNS 사용을 차단합니다. Try another connection, or [use another exploit](get-started).

1. 취약점 공격이 다운로드될 때까지 1~2분 정도 기다립니다 (`동의함`/`동의하지 않음`을 누르지 마세요).
1. 그런 다음 HackMii 설치 프로그램을 다운로드하고 로드합니다.

    ![](/images/hackmii/scam.png)

    + 2분 이상 지나도 HackMii Installer가 로딩되지 않거나, `멈춤`과 같은 오류가 발생하면 `오류입니다! if_config (ret = ...)`이면 Wii를 재시작하고 다시 시도합니다.

[홈브류 채널 및 BootMii 설치로 계속 진행하기](hbc)
{: .notice--info}
