# 중요 정보

This page outlines important information and disclaimers that you should be aware of before starting with the modding process.

## 벽돌과 일반적인 위험

가이드를 따르거나 특정 종류의 홈브류를 사용할 경우 콘솔이 망가지거나 일부 또는 전부 사용할 수 없는 상태가 될 위험이 있습니다. 이를 방지하려면 가이드에 적힌 대로 **정확히** 따르고, 명시된 예방 조치를 따릅니다. 벽돌 쌓기에 따른 일반적인 위험은 다음과 같습니다:

- 오래되었거나 잘못된 정보로 인해 명시적으로 권장되지 않는 한 오래된 개조 자습서나 비디오 가이드를 따르지 마십시오.
- 다른 콘솔에서 낸드 백업 복원
- DARKCORP와 같은 cIOS 팩 설치
- 다른 지역을 위한 업데이트 설치 또는 콘솔 지역 변경
- 시스템 파일 수정

자세한 내용은 [벽돌 가이드](bricks)를 참조합니다.

## 콘솔 호환성

이 가이드는 Wii 미니와 Wii U의 Wii 모드를 포함한 모든 시중 판매용 Wii에 적용됩니다.
개발용 Wii (모델 포함)에서는 **작동하지 않습니다.**

- RVT-001 (NDEV)
- RVT-002 (초록색 전면판)
- RVT-005 (빨간색 전면판)

특정 Wii와 관련된 중요 참고 사항은 아래와 같습니다.

:::: details 한국어 Wii를 가지고 있다면?

Korean Wiis are fully supported by the guide and can be modded using normal procedures. They can also be region changed.
Exercise caution when modifying region data and follow the guide carefully to avoid a brick.

::::

:::: details What if I own a Wii U and want to exploit Wii mode?

Wii mode on Wii U (called vWii in the homebrew community) is fully supported by the guide, however it is recommended to setup an Aroma environment before starting.
누락된 Wii 기능을 복구할 수 있습니다. 현재 거의 모든 홈브류가 지원됩니다. (게임큐브 홈브류 제외)
Wii U의 USB 포트만으로는 충분한 전력을 공급할 수 없으므로 저장 장치에는 추가 전원 (Y형 케이블이나 외부 전원 공급 장치 사용)이 필요합니다.
Make sure to use IOS and homebrew that are designed specifically for vWii in order to avoid bricking the console.

::::

:::: details Wii 미니를 가지고 있다면?

Wii Mini is fully supported by the guide and has compatibility with most existing homebrew.
누락된 Wii 기능을 복구할 수 있습니다. LAN 어댑터와 USB 허브를 권장합니다.
Make sure to use IOS and homebrew that are designed specifically for the Wii mini in order to avoid bricking the console.

::::

## 저장소 호환성

SD 카드의 경우, 익스플로잇을 실행하려면 최소 128MB가 필요합니다. 하지만, 평균적으로 2GB 이상 크기의 카드가 필요합니다. The Wii can read SD cards of most capacities (even those larger than 32GB), but the card must be [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**not** exFAT or NTFS).

USB 장치의 경우 [FAT32/MS-DOS 형식으로 포맷된](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) USB 하드 드라이브 또는 솔리드 스테이트 드라이브를 사용하는 것이 좋습니다. 플래시 드라이브는 Wii에서 고장이 나거나 의도한 대로 작동하지 않을 수 있으므로 사용하지 않는 것이 좋습니다.

대부분의 경우 2.5인치 드라이브는 Wii에서 USB 전원만으로 문제없이 작동하지만, 3.5인치 드라이브는 전력 소모가 더 많으므로 항상 외부 전원 어댑터가 필요합니다. Wii U 및 Wii 미니 사용자의 경우, 전력 소모 때문에 USB 전원만으로 작동하는 드라이브에는 외부 전원 공급 USB 허브 또는 Y 케이블을 사용하는 것이 좋습니다.

자세한 내용은 [저장소 자주 묻는 질문](faq#storage-device-faq)를 참조합니다.

## 네트워크 호환성

Wii는 오래된 콘솔이기 때문에 최신 무선 네트워크에 연결하는 데 어려움이 있을 수 있습니다.

이 제품의 네트워크 하드웨어는 2.4 GHz 대역에서 작동하는 802.11g (이후 Wi-Fi 3으로 명칭 변경)를 기반으로 합니다. 또한 최대 WPA2-PSK (AES) 개인 네트워크 암호화도 지원합니다. Wii에서 Wi-Fi를 사용하려면 네트워크가 이러한 표준을 지원하는지 확인해야 합니다.

Wii U의 경우 vWii는 Wii U 기본 설정에서 설정한 인터넷 설정을 그대로 사용하지만, [Wii VC 실행](https://hb-app.store/wiiu/WiiVCLaunch) 아로마 플러그인을 이용해 선택적으로 분리할 수 있습니다.

자세한 내용은 [네트워크 자주 묻는 질문](faq#networking-faq)를 참조합니다.

## 도움 받기

Ran into an issue while following the guide, already have an issue on your modded Wii, or just have a question?

- 이 페이지에 질문에 대한 답변이 없는 경우 가이드의 [자주 묻는 질문](faq) 섹션에서 답변을 찾아볼 수 있습니다.
- 여전히 질문에 대한 답변을 받지 못하고 지원이 필요한 경우 [닌텐도 홈브류 디스코드](https://discord.gg/C29hYvh)에 가입하여 `#wii-vwii-assistance` 채널로 이동합니다.

::: tip

[시작하기](get-started)로 계속하기

Once you have finished reading the above disclaimers, proceed to Get Started to select your console and initial exploit method.

:::
