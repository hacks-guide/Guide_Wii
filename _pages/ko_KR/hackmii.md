---
title: "HackMii 설치 프로그램 다시 시작하기"
---

{% include toc title="목차" %}

이 가이드는 홈브류 채널 또는 BootMii를 업데이트/재설치하기 위해 HackMii 설치 프로그램을 다시 실행해야 하는 상황을 위한 것입니다.

또한 취약점 공격을 [재실행](get-started)하여 HackMii 설치 프로그램으로 돌아가는 것이 안전합니다.
{: .notice--info}

### 홈브류 채널을 통해 다시 시작하기

#### 필요한 것

* 홈브류 채널
* FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
* [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

#### 진행 방법

1. SD/USB를 PC에 연결합니다.
1. HackMii 설치 프로그램 v1.2를 SD/USB의 `apps` 폴더에 압축 해제합나다.
    + 이 폴더가 없는 경우 생성합니다.
1. Wii에 SD/USB를 연결하고 홈브류 채널에서 `hackmii_installer_v1.2` 앱을 실행합니다.
    + 앱에 아이콘이 표시되지 않습니다.

[홈브류 채널 및 BootMii 설치로 계속 진행하기](hbc)
{: .notice--info}

### Priiloader를 통한 재실행

#### 필요한 것
* Priiloader (또는 Priiloader) 가 설치된 Wii
* FAT32/MS-DOS로 포맷된 SD 카드 또는 USB 드라이브
* [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

Wii에 Priiloader가 있는지 확인하려면 전원을 켠 상태에서 RESET 버튼을 길게 누릅니다.
{: .notice--info}

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.
{: .notice--warning}

#### 진행 방법

1. SD/USB를 PC에 연결합니다.
1. HackMii 설치 프로그램 v1.2를 SD/USB의 `apps` 폴더에 압축 해제합니다.
1. Wii에 SD/USB를 연결합니다.
1. Wii를 켜는 동안 RESET 버튼을 길게 눌러 Priiloader로 들어갑니다.
1. `Load/Install File`로 이동합니다.
1. `hackmii_installer_v1.2`로 이동한 후 `1`을 눌러 로드합니다.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[홈브류 채널 및 BootMii 설치로 계속 진행하기](hbc)
{: .notice--info}
