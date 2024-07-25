---
title: "Wii 게임 바로가기 만들기"
---

{% include toc title="목차" %}

Do you use a Wii backup loader and want to create game shortcuts to launch them on your Wii Menu? 그렇다면 기존에 Crap이라고 알려진 WiiGSC (Wii 게임 바로가기 생성기) 를 시도하세요.

벽돌을 방지하기 위해 [Priiloader 설치는 필수입니다](/priiloader). 또한, BootMii를 설치합니다 (초기 Wii를 사용하는 경우 Boot2). 벽돌 보호 장치를 설치하고 가이드를 올바르게 따르면 벽돌로부터 안전하게 보호할 수 있습니다. BOOTMII와 PRIILOADER를 설치하지 않고 계속하지 마십시오!!
{: .notice--warning}

"마리오 파티 9" 또는 "A Boy and His Blob" 게임에 대한 바로 가기를 만들지 마세요. Wii가 벽돌이 됩니다.
{: .notice--warning}

The Wii Menu is limited to 48 channels, not including existing system channels.
{: .notice--info}

### 필요한 것

* Wii
* An SD or USB drive
* [YAWM ModMii Edition](yawmme)
* 윈도우즈 컴퓨터
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### 진행 방법

1. Install WiiGSC, then right click on it and choose **Run as administrator**. If you do not do this, WiiGSC will throw an error when you open it.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your SD or USB drive, and select the loader you use. The other options should be fine the way they are.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Install the generated WAD with your [WAD manager](yawmme).

<div class="notice--info">
If you get an error saying "The system files are corrupted", don't panic as long as you installed Priiloader. Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).
</div>

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
