# 중요 정보

이 페이지에는 개조 과정을 시작하기 전에 알아야 할 중요한 면책 조항과 정보가 포함되어 있습니다.

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

한국어 Wii는 완벽히 지원되며 지역 변경도 가능합니다.
지역 데이터를 수정할 때는 주의하고 지침을 주의 깊게 따르면 문제가 발생하지 않습니다.

::::

:::: details Wii U (vWii)를 가지고 있다면?

Wii U의 Wii 모드 (홈브류 커뮤니티에서는 vWii라고 함)는 완벽히 지원되지만 아로마 환경을 설정하는 것이 좋습니다.
누락된 Wii 기능을 복구할 수 있습니다. 현재 거의 모든 홈브류가 지원됩니다. (게임큐브 홈브류 제외)
Wii U의 USB 포트만으로는 충분한 전력을 공급할 수 없으므로 저장 장치에는 추가 전원 (Y형 케이블이나 외부 전원 공급 장치 사용)이 필요합니다.
홈브류에 여러 버전이 있는 경우, vWii용으로 설계된 버전을 사용하고 있는지 확인합니다.
특히 iOS는 vWii용으로 특별히 설계되었으므로, 벽돌 현상이 발생하지 않도록 주의합니다.

::::

:::: details Wii 미니를 가지고 있다면?

Wii Mini is supported and has compatibility with most existing homebrew.
누락된 Wii 기능을 복구할 수 있습니다. LAN 어댑터와 USB 허브를 권장합니다.
홈브류에 여러 버전이 있는 경우, Wii 미니용으로 설계된 버전을 사용해야 합니다.
Wii 미니용으로 특별히 설계된 iOS의 경우, 벽돌을 피하기 위해 특히 조심해야 합니다.

::::

## 저장소 호환성

SD 카드의 경우, 익스플로잇을 실행하려면 최소 128MB가 필요합니다. 하지만, 평균적으로 2GB 이상 크기의 카드가 필요합니다. The Wii can read SD cards of any capacity (even those larger than 32GB), but the card must be formatted as FAT32 (**not** exFAT or NTFS). For instructions on properly formatting your SD card, [see here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).

USB 장치의 경우 FAT32로 포맷된 USB 하드 드라이브나 솔리드 스테이트 (SSD) 드라이브를 사용해야 합니다. 플래시 드라이브는 Wii에서 고장이 나거나 의도한 대로 작동하지 않을 수 있으므로 사용하지 않는 것이 좋습니다.

2.5 inch drives should work fine in most cases running off of USB power alone on a Wii, but 3.5 inch drives consume more power and will always need an external power adapter. For Wii U and Wii mini users, you will probably want to use an externally powered USB hub or a Y-cable for drives that operate off of USB power alone, due to power draw.

자세한 내용은 [저장소 자주 묻는 질문](faq#storage-device-faq)를 참조합니다.

## 네트워크 호환성

Wii는 오래된 콘솔이기 때문에 최신 무선 네트워크에 연결하는 데 어려움이 있을 수 있습니다.

Its network hardware is based on 802.11g (retroactively named Wi-Fi 3), which operates on the 2.4 GHz band. 또한 최대 WPA2-PSK (AES) 개인 네트워크 암호화도 지원합니다. You must make sure your network supports these standards if you would like to use Wi-Fi with your Wii.

Wii U의 경우 vWii는 Wii U 기본 설정에서 설정한 인터넷 설정을 그대로 사용하지만, [Wii VC 실행](https://hb-app.store/wiiu/WiiVCLaunch) 아로마 플러그인을 이용해 선택적으로 분리할 수 있습니다.

자세한 내용은 [네트워크 자주 묻는 질문](faq#networking-faq)를 참조합니다.

## 도움 받기

가이드를 따라가는 동안 문제가 생겼나요? 이미 개조된 Wii에서 문제가 생겼나요? 아니면 그냥 답변이 필요하세요?

- 이 페이지에 질문에 대한 답변이 없는 경우 가이드의 [자주 묻는 질문](faq) 섹션에서 답변을 찾아볼 수 있습니다.
- If your question still isn't answered and you need support, join the [WiiLink Discord](https://discord.gg/wiilink) and go to the `#support-text` channel.

::: tip

[시작하기](get-started)로 계속하기

:::



