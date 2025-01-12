# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24)는 인터넷에 연결된 Wii를 사용하는 사용자가 날씨와 뉴스를 보고, 친구에게 메시지를 보내고, Mii 콘테스트에 참여하는 등의 기능을 제공하는 서비스였습니다. WiiConnect24는 2013년 6월 27일에 중단되었습니다.

## WiiLink

[WiiLink](https://www.wiilink24.com/)는 콘솔에서 WiiConnect24 기능을 되찾고 확장할 수 있는 부활 서비스입니다.
2023년 말 현재 이 서비스는 부활 프로젝트인 RiiConnect24와 합병되었으며, 현재는 WiiLink라는 이름으로만 운영되고 있습니다.

WiiLink는 뉴스 채널과 같은 국제 채널부터 Wii Room과 같은 지역별 독점 채널에 이르기까지 제공하는 서비스에 대한 패처를 호스팅합니다.
이러한 서비스를 설치하는 방법에 대한 가이드와 패처는 [WiiLink 웹사이트](https://www.wiilink24.com/guide/)에서 찾을 수 있습니다.

<!-- move this back to another page? or no -->

## RTC 시계 업데이트

### Wii

#### 필요한 것

- Wii에서 작동하는 인터넷 연결
- 홈브류 채널
- SD 카드 및 USB 드라이브
- [sntp](https://oscwii.org/library/app/sntp)

#### 지침

1. sntp zip 파일을 다운로드하여 SD 카드나 USB 드라이브의 루트에 압축 해제합니다.
2. SD 카드나 USB 드라이브를 Wii에 연결합니다.
3. Wii에서 홈브류 채널을 실행합니다.
4. sntp를 실행합니다.
5. +컨트롤 패드를 사용하여 현재 시간을 선택합니다.
6. 홈 버튼을 눌러 종료합니다.

### vWii

#### 필요한 것

- 홈브류 채널
- SD 카드
- [Priiloader](priiloader)

#### 지침

1. [UTC 패치 생성기](https://garyodernichts.github.io/priiloader-patch-gen/) 웹사이트를 방문하여 정보를 입력합니다.
2. 생성을 선택하고 정보를 복사합니다.
3. SD 카드에서 `SD:/apps/priiloader`로 이동한 후 메모장과 같은 텍스트 편집기를 사용하여 `hacks_hash.ini`를 엽니다.
4. `hacks_hash.ini` 하단에 패치를 붙여넣고 변경 사항을 저장합니다.
5. 해당 지역에서 일광 절약 시간제가 적용되는 경우 새로운 시간 오프셋을 사용하여 1~4 단계를 반복합니다.
6. Wii U에 SD 카드를 연결합니다.
7. vWii에서 [Priiloader 부팅](priiloader#section-iii---entering-priiloader)를 실행합니다.
8. 핵을 선택하고 아래로 스크롤하여 Fix NWC24iSetUniversalTime 핵을 활성화합니다.
9. vWii 메뉴로 돌아갑니다.

## Wiiconnect24 Priiloader 핵

WiiConnect24 기능이 제대로 작동하려면 일부 Priiloader 핵을 vWii와 Wii 미니에서 활성화해야 합니다:

- [캘린더 버튼을 통해 메시지 생성 (vWii, Mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
- [영구 vWii 시스템 설정 (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
- [부팅 시 항상 WiiConnect24 활성화 (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
- [NWC24iSetUniversalTime수정 (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

::: info

[영구 vWii 시스템 설정 (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) 및 [부팅 시 항상 WiiConnect24 활성화 (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)는 동시에 활성화할 수 없습니다. 영구 vWii 시스템 설정을 사용하는 방법에 대한 자세한 내용은 [여기](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii)에서 확인할 수 있습니다.

:::

::: tip

[닌텐도 Wi-Fi 연결로 이동](nintendowfc)

이 가이드에서는 Wii의 온라인 기능을 다시 얻는 과정을 한 단계 더 발전시켜, 마리오카트 Wii와 같은 특정 게임에서 닌텐도 Wi-Fi 연결 서비스를 다시 작동시킬 수 있도록 합니다. 이를 허용하는 개인 서버와 서비스는 다양하지만, 여기서 다룰 것은 Wiimmfi입니다.

:::
