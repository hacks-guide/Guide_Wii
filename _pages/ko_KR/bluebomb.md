---
title: "BlueBomb"
---

{% include toc title="목차" %}

이 취약점 공격은 Wii 미니에서 작동하는 유일한 취약점 공격이지만, BlueBomb은 오리지널 Wii에서도 실행할 수 있습니다. {% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Wii 미니 콘솔을 해킹하기 위해 **아무** 비디오 가이드를 사용하는 것은 **벽돌**이 될 가능성이 매우 커서 사용하지 않는 것을 **강력히** 권장합니다.
{: .notice--warning}

튜토리얼에 관한 질문이 있다면, [Wii Mini 해킹 디스코드 서버](https://discord.gg/6ryxnkS) 에 가입해 주세요.(권장)
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

콘솔이 취약점 공격을 실행하는 컴퓨터와 가까운지 확인하고, 이상적으로는 약 1미터 이내여야 합니다.
{: .notice--info}

### 준비물

* 리눅스 기기
    * 가상 머신을 사용할 수도 있지만 블루투스 패스스루를 작동시키는 데 복잡하므로 권장하지 않습니다. 가능하면 아래 설명된 대로 LiveUSB를 사용하세요.
    * 라즈베리 파이가 있다면 이미 리눅스가 설치되어 있을 가능성이 높으므로 이를 대신 사용할 수 있습니다.
    * 리눅스용 윈도우즈 하위 시스템 또는 리눅스 모드를 실행하는 크롬북은 블루투스 어댑터 또는 USB 포트에 직접 접속할 수 없으므로 *작동하지 않습니다.*
    * 리눅스가 없는 경우, [우분투](https://ubuntu.com/download/desktop)가 가장 사용자 친화적인 옵션이며 윈도우즈 또는 맥을 실행하는 컴퓨터에서 실행할 수 있습니다.
        * 32비트 장치에는 [우분투 16.04](http://releases.ubuntu.com/16.04/)가 필요합니다.
        * 64비트 장치의 경우 안정성을 위해 LTS 버전을 사용하는 것이 좋지만 최신 릴리스도 작동합니다.
    * 컴퓨터에 설치하는 대신 [리눅스 라이브 환경을 USB 플래시 드라이브로 플래시](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) 할 수 있습니다.
* 블루투스 어댑터
    * 내장 블루투스 어댑터도 작동합니다.
    * 만약 없다면, 리눅스와 호환되는 것으로 구매하세요.
* FAT32로 포맷된 USB 플래시 드라이브
    * 리눅스 기기에 사용되는 플래시 드라이브와는 달라야 합니다.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### 진행 방법

1. 압축을 해제하고 플래시 드라이브에 `boot.elf`를 넣으세요.
    + (벽돌을 고치려 한다면, /apps/에서 사용할 홈브루 앱도 복사해야 합니다)
    + - (Wii 미니의 경우에도 bootmini.elf는 작동하지 **않으며**, 그 목적은 완전히 다르고 관련이 없습니다. 모든 경우에 boot.elf 사용).
1. Reinsert your flash drive into your console.
    + Wii 미니의 경우 USB 포트는 뒷면에 있습니다.
    + 일반 Wii의 경우 하단 포트를 사용합니다. (또는 똑바로 세워진 경우 오른쪽 포트).
1. 콘솔의 전원을 켜 주세요.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. 콘솔의 전원을 꺼 주세요.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. 그 다음 도우미는 필요한 파일을 받고 콘솔의 정보에 관해 물을겁니다.
    + Wii 미니를 선택했다면, 지역을 물어볼 겁니다. Wii 메뉴 버전으로 판단이 가능합니다. (`U`는 **USA** 이며 `E`는 **PAL** 모델입니다).
    + Wii를 선택했다면 Wii 메뉴 버전을 선택하라고 물어볼 겁니다 (4단계에서 선택한 것)
1. 콘솔의 전원을 켜 주세요.
    + 콘솔을 켜고 어떤 리모컨도 연결하지 **마세요**.
1. 터미널에서 `got connection handle`이 나타날 때 까지 SYNC 버튼을 계속 누르세요.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + 이제 나중에 사용할 계획이 없는 경우 리눅스 컴퓨터를 종료할 수 있습니다.

Wii를 사용하는 경우, 홈브류 채널 및 BootMii 설치를 진행합니다.<br>
{: .notice--info}

Wii 미니를 사용하는 경우, 홈브류 채널 설치를 진행합니다.
{: .notice--info}
