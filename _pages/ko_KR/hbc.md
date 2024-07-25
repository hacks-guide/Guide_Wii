---
title: "홈브류 채널과 BootMii 설치"
---

{% include toc title="목차" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications. BootMii는 Wii의 NAND 저장소를 백업 및 복원할 수 있는 소프트웨어로, boot2에 설치하면 벽돌 보호 기능을 제공합니다.

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader). BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

SD 카드가 없는 경우 BootMii를 설치하거나 사용할 수 없으므로 언급된 혜택을 이용할 수 없습니다. <br> 언제든지 [나중에 설치할 수 있습니다](hackmii).
{: .notice--warning}

### 진행 방법

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + 스캠 경고 화면이 표시됩니다.

    ![](/images/hackmii/scam.png)

1. "계속하려면 1 버튼을 누르세요"라는 텍스트가 나타날 때까지 30초간 기다린 다음 1버튼을 누릅니다.
1. `종료`를 선택하면 홈브류 채널이 최종적으로 열립니다.

    ![](/images/hackmii/test_results.png)

1. `홈브류 채널 설치`를 선택합니다.

    ![](/images/hackmii/hbc_install.png)

1. 완료되면 `계속`을 선택합니다.

    ![](/images/hackmii/hbc_install_ok.png)

1. 설치가 완료되면 `뒤로 가기`를 선택한 다음 `BootMii`을 선택합니다.

    ![](/images/hackmii/bootmii_install.png)

1. BootMii가 `IOS로만 설치할 수 있음`이라고 표시하면, 정상입니다.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. 완료되면 `계속`을 선택합니다.
1. `IOS`로 BootMii 설치를 선택합니다.

    ![](/images/hackmii/bootmii_install4.png)

1. `IOS`로 BootMii 설치를 선택합니다.
1. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

### 필수 읽기

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

한 가지 팁을 알려드리자면, SD 카드나 USB 드라이브에 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```
💾 SD Card or USB Drive
| ╸📁 apps
    | ╸📁 AppName1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 AppName2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` 및 `AppName2`는 자리 표시자 이름입니다. `apps` 폴더 자체 안에 여러 `apps` 폴더를 중첩하지 않습니다.

[BootMii를 사용하여 NAND 백업 계속 만들기](bootmii)<br> 이 시점에서 BootMii로 NAND 백업을 만드는 것을 적극 권장합니다.
{: .notice--info}

팁: 디스크 드라이브가 매우 짧게 깜박이고 전원 버튼을 눌렀을 때 즉시 깜박이면 Wii에 BootMii가 boot2로 설치되어 있는지 알 수 있습니다.
{: .notice--info}
