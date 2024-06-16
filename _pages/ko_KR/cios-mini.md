---
title: "Wii 미니를 위한 d2xl cIOS (실험 단계)"
---

{% include toc title="목차" %}

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS) (추천) 에 가입하세요.
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 이제 [USB Loader GX](usbloadergx) 및 [WiiFlow](wiiflow)와 같은 홈브류를 사용할 수 있습니다. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

이 d2x cIOS 설치 프로그램은 원래 DaveBaol이 Wii U의 vWii용으로 개발했으며, 커스텀 cIOS는 Leseratte가 Wii 미니용으로 만들었습니다. 원본 다운로드 페이지는 [여기](https://wii.leseratte10.de/d2xl-cIOS/)에서 확인할 수 있습니다. Leseratte의 Github 페이지는 [여기](https://github.com/Leseratte10/d2xl-cios)에서 확인할 수 있습니다. 이 cIOS는 아직 실험 단계이지만 기능에 대한 문제는 보고되지 않았습니다.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

이 가이드는 Wii 미니 사용자만 대상으로 합니다. Wii를 사용하는 경우, [이 가이드](cios)를 따르세요. If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. 그렇게 하면 콘솔이 망가질 가능성이 높습니다.
{: .notice--warning}

### 필요한 것

* 홈브류 채널이 설치된 Wii 미니
* USB 드라이브
* Leseratte의 [d2xl cIOS 설치 프로그램](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

### 진행 방법

#### 섹션 I - 다운로드

1. 콘솔의 전원을 꺼 주세요.
1. Insert your USB drive into your computer.
1. Create a folder named `apps` on the root of your USB drive if it does not already exist.
1. USB 드라이브의 `apps` 폴더에 d2xl cIOS 설치 프로그램을 압축 해제합니다.
1. Reinsert your USB drive into your console.
1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. d2x cIOS 설치 프로그램

#### 섹션 II - 설치하기

1. Select `Continue`.
1. 계속을 누르고, 다음 옵션을 다음과 같이 설정합니다:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + 메모 아래에 버전 번호를 기록합니다(`IOS57-64-`로 끝나는 `v31776` 또는 `v31775`).
1. 설정이 완료되면 A 버튼을 눌러 설치합니다.
    + `TMD 버전 불일치` 오류와 함께 설치에 실패하면 이전에 시도한 버전 번호와 다른 버전 번호가 나타날 때까지 `소스코드 선택` 옵션 위에 있는 +컨트롤 패드의 왼쪽 또는 오른쪽을 누릅니다. 숫자 57은 변경되지 않습니다.
1. 성공적으로 완료되면 설치 프로그램을 종료합니다.

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

#### 이더넷 활성화

Wii 미니에서 이더넷과 함께 Wiimfi를 사용하려면, Fullmetal5가 만든 [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) 앱을 실행해야 합니다. 실행하려면 USB 드라이브의 `apps` 폴더에 압축을 풀고 홈브류 채널에서 실행하면 됩니다.

Wii 및 Wii 미니 콘솔은 AX88772 칩을 사용하는 이더넷 어댑터에서만 작동하는 것으로 알려져 있습니다. 구매하기 전에 제품이 호환되는지 확인하세요. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[여기를 눌러 사이트 탐색으로 돌아갑니다.](site-navigation)
{: .notice--info}
