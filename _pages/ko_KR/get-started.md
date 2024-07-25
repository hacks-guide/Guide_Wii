---
title: "시작하기"
---

{% include toc title="목차" %}

If your Wii is already softmodded and you would like to update the softmods, follow [this](hackmii) guide to upgrade your setup.

모든 취약점 공격은 HackMii 설치 프로그램을 실행하며, 최종 결과는 동일합니다.

SD 카드 없이도 이 가이드를 따를 수 있지만, BootMii를 사용하여 NAND 백업을 생성하거나 복원할 수 없으며 일부 홈브류를 사용할 수 없습니다.
{: .notice--info}

### Identify your console revision:

{% include identify-console.html %}<br>

### Select your exploit

Select the exploit that corresponds to your console and situation the best.

| Console Revision       | Recommended Exploit                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition | If you can use a Windows PC:<br> Automatic Setup: Proceed to [ModMii](modmii)<br> If you can use an SD card:<br> Manual Setup: Proceed to [Wilbrand](wilbrand)<br> If you cannot use an SD card:<br> Manual Setup: Proceed to [str2hax](str2hax)<br>                                                                    |
| Wii 미니                 | [BlueBomb](bluebomb) - 블루투스를 사용하는 취약점 공격                                                                                                                                                                                                                                                                                                                    |
| Wii U (vWii)           | If you have already modded your Wii U:<br> Proceed to [Modding the vWii](vwii-homebrew-channel)<br> If you haven't modded the Wii U but want to:<br> Proceed to [Modding the Wii U](https://wiiu.hacks.guide)<br> If you do not want to mod the Wii U:<br> Proceed to [Modding the vWii Without Wii U Mods](wiiu-nand-dumper) |
| Dolphin Emulator       | Proceed to [Homebrew Channel on Dolphin](homebrew-dolphin)                                                                                                                                                                                                                                                                                                  |

### Alternate methods

If possible, you should follow the method given above.

If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).
