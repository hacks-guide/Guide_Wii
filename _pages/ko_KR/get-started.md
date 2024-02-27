---
title: "시작하기"
---

{% include toc title="목차" %}

SD 카드 없이도 이 가이드를 따를 수 있지만, BootMii를 사용하여 NAND 백업을 생성하거나 복원할 수 없으며 일부 홈브류를 사용할 수 없습니다.
{: .notice--info}

모든 취약점 공격은 HackMii 설치 프로그램을 실행하며, 최종 결과는 동일합니다.
{: .notice--info}

These steps will help you softmod your Wii, from stock to BootMii. Before starting this guide, please ensure that your console is on the latest version of the Wii firmware (4.3). 과거에 Wii를 이미 소프트 모드로 설정한 적이 있더라도ㅡ 다음 단계를 따르면 소프트 모드를 최신 상태로 유지할 수 있습니다.

### Identify your console revision:

{% include identify-console.html %}<br>

### Select your exploit

Select the exploit that corresponds to your console and situation the best. If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).

| Console Revision       | Recommended Exploit                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition | If you can use a Windows PC:<br> Automatic Setup: Proceed to [ModMii](modmii)<br> If you can use an SD card:<br> Manual Setup: Proceed to [Wilbrand](wilbrand) |
| Wii 미니                 | [BlueBomb](bluebomb) - 블루투스를 사용하는 취약점 공격                                                                                                                                         |
| Wii U (vWii)           | Wii U (vWii) 에서 사용하지 마십시오! Wii U에 홈브류를 설치하려면, [이 가이드를 따르세요](https://wiiu.hacks.guide).                                                                                           |
| Dolphin Emulator       | Proceed to [Homebrew Channel on Dolphin](homebrew-dolphin)                                                                                                                       |
