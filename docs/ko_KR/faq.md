# 자주 묻는 질문 및 문제 해결

## 주요 자주 묻는 질문

### 콘솔 해킹은 얼마나 위험한가요?

콘솔에 따라 크게 위험하지는 않습니다. Wii는 다른 콘솔에 비해 진입 장벽이 훨씬 낮으며, 일부 게임을 플레이하는 데는 Wii와 인터넷 연결만 있으면 됩니다. [여기](bricks#brick-prevention)에 나와 있는 일반적인 조언을 따르고 [BootMii](bootmii)와 [Priiloader](priiloader)를 설치하고 상식에 따라 행동한다면 아무런 문제가 없을 겁니다!

### I got error code XXXXXX, how to fix it?

오류의 의미를 확인하려면 [Wiimmfi 오류 페이지](https://wiimmfi.de/error)를 방문합니다. 더 일반적인 오류에 대한 해결책은 아래와 같습니다:

#### 오류 051330/51330

`Wii 설정 > 인터넷 > 연결 설정 > 연결 > 이 연결 테스트`로 이동하여 인터넷 연결 테스트를 실행합니다.

#### 오류 220602

##### RiiConnect24 사용자용

RiiConnect24의 이전 DNS 서버를 사용하고 있습니다. 변경 방법에 대한 지침은 [이](riiconnect24#section-iv---connecting) 가이드를 따릅니다.

##### 비 RiiConnect24 사용자용

기본 DNS 서버가 잘못되었거나 작동하지 않습니다.

프록시 서버를 사용하고 해당 서버가 다운된 경우에도 이런 일이 발생할 수 있습니다.

#### 오류 107304

##### RiiConnect24 사용자용

이러한 오류가 발생하거나 RiiConnect24 로고 없이 닌텐도 사용자 계약이 표시되는 경우, 여러분의 ISP (인터넷 서비스 제공업체) 또는 네트워크가 RC24 DNS 사용을 차단하고 있다는 의미입니다. 이 문제를 해결하려면 '자동으로 DNS 가져오기'를 '켜기'로 설정하면 됩니다. RiiConnect24는 이것 없이도 작동합니다. 또는 [RiiConnect24 DNS 서버](https://github.com/RiiConnect24/DNS-Server/releases/latest) 프로그램을 사용할 수 있습니다.

##### 비 RiiConnect24 사용자용

이 오류가 발생하면 선택한 DNS 서버나 인터넷 전체에 문제가 있는 것입니다. 나중에 다시 시도합니다.

#### FORE000006

오류 FORE000006이 발생하면 Wii의 시계가 잘못 설정되었을 가능성이 큽니다. 올바르게 재설정하는 방법에 대한 지침은 [이것](wiiconnect24#updating-rtc-clock)을 참조합니다. 그래도 문제가 해결되지 않으면 Wii 시계 배터리(시스템 하단의 나사 뒤에 있음)를 한 시간 동안 제거한 다음 다시 넣습니다. 그런 다음 Wii의 시계를 재설정합니다.

### 자녀 보호는 어떻게 해제하나요?

[mkey 생성기](https://mkey.nintendohomebrew.com/)를 사용하면 보호자 통제 기능을 제거하는 데 필요한 코드를 생성할 수 있습니다.

### 내 Wii가 고장난 것 같거나 심각한 문제가 있는 경우 어떻게 해야 하나요?

[이](bricks) 페이지를 참조합니다.

## 저장 장치 자주 묻는 질문

::: info

[BlueBomb](bluebomb), [str2hax](str2hax), 또는 [FlashHax](flashhax) 익스플로잇의 경우 Wii 해킹에 SD 카드가 필요하지 않습니다. 홈브류 및 기타 작업을 위해 SD 카드를 하나 구입하는 것이 좋습니다.

:::

::: info

SD 카드에는 FAT32가 권장되는 파일 시스템이고, 포맷 지침은 [이 가이드](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)를 참조합니다.

USB 장치의 경우 FAT32도 권장되지만, 사용자는 최대 2TB 크기의 볼륨만 허용하는 FAT32 제한 사항을 알고 있어야 합니다. WBFS는 이전에 Wii 게임 백업에 사용된 파일 시스템이었습니다 (WBFS 파일과 혼동하지 마세요) - 오늘날에는 오래되어서 사용해서는 안 됩니다.

:::

::: warning

Wii 메뉴 버전이 4.0 미만인 경우, Wii 시스템 소프트웨어의 제한으로 인해 2GB가 넘는 SD 카드를 사용할 수 없습니다.

기존 Wii 메뉴 버전 4.0 이상의 경우 이러한 제한이 제거되어 다양한 크기의 SD 카드를 사용할 수 있습니다.

Wii에서 작동하는 SD 카드를 얻을 수 있는 가장 큰 가능성은 크기가 32GB 이하일 때이지만, 최대 256GB 범위의 카드에서도 성공한 사례가 여러 번 보고되었습니다.

:::

::: warning

USB 장치의 경우, 플래시 드라이브는 Wii 콘솔에서 작동하지 않을 확률이 높습니다. 대신 USB 하드 드라이브나 솔리드 스테이트 드라이브(SSD)를 사용하는 것이 좋습니다.

:::

### 일반 저장 지침

SD 카드나 USB 장치를 구매하거나 사용할 때, 각 저장 매체를 어떤 용도로 사용할 것인지 고려해 보는 것이 좋습니다. 다양한 용도로 인해 차지하는 공간의 양이 달라지는데, 아래에 몇 가지 일반적인 예를 보여드립니다:

- The average user for a Wii backup device would probably want 128GB or more of space. Wii Backups: The largest Wii games (dual-layer DVD) are up to sizes of 8.5GB, more normal games are closer to sizes of 4.7GB or lower.
- 게임큐브 백업: 가장 큰 게임큐브 게임의 크기는 최대 1.3GB에 이릅니다. ISO 크기는 일반적으로 게임에 관계없이 이 크기이지만, 대신 NKIT를 형식으로 사용하면 상당히 작아질 수 있습니다. 게임큐브 백업 장치를 사용하는 일반 사용자는 아마도 64GB 이상의 공간을 원할 것입니다.
- 일반 에뮬레이션: Wii에는 다양한 종류의 에뮬레이터가 있습니다. 다양한 게임 롬의 크기는 상당히 다르므로, 게임을 에뮬레이션하려는 일반 사용자는 아마도 32GB 이상의 공간이 필요할 것입니다.
- 일반 홈브류: 홈브류의 경우 일반 사용자는 2GB 이상의 공간이 필요합니다.
- 낸드 백업: BootMii로 낸드를 백업하려면 일반 사용자에게 최소 512MB의 여유 공간이 필요하지만, 1GB 이상의 공간이 권장됩니다.
- 취약점 공격을 실행하려면 최소 128MB의 SD 카드가 필요합니다.

### SD 카드 구매

::: danger

현재 2TB보다 큰 SD 카드는 존재하지 않습니다. 이 카드를 판매하려는 사람은 당신을 속이려는 것입니다.

:::

SD 카드를 구매할 때는 일반적으로 가격이 비싸고 용량이 클수록 잘 알려진 브랜드를 고수하는 것이 좋습니다. 일반적인 2GB SD 카드를 사면 안전할 가능성이 높지만 512GB SD 카드 등은 그렇지 않습니다. 일반적으로 SD 카드의 현재 가격은 256GB 이하일 경우 10~20 달러 정도이고, 512GB일 경우 40 달러 정도입니다. 아마존에서 구매할 경우, 카드가 `아마존에서 판매/아마존에서 배송` 또는 `[브랜드]에서 판매, 아마존에서 배송` 중 하나인지 확인합니다. 이베이에서 저장 장치를 구매할 때는 주의합니다.

추천 브랜드:

- Samsung (EVO 선택, EVO 플러스, 프로 플러스)
- SanDisk (익스트림, 울트라 등)
- Lexar (E-시리즈, 프로페셔널)
- Silicon Power ("3D 낸드" 카드, 일반적으로 용량이 클수록 가치가 더 좋음)
- PNY (엘리트, 엘리트-X, 등)

### USB 장치 구매 - 하드 드라이브

USB 하드 드라이브를 구매할 때 현재 판매되는 HDD 제조업체는 Western Digital, Seagate, Toshiba의 세 곳 뿐입니다. 다른 모든 하드 드라이브 회사는 더 이상 존재하지 않거나 파산했거나 앞서 언급한 세 회사에 흡수되었습니다. 즉, 다른 회사에서 만든 추가 하드 드라이브가 있다면 여전히 작동할 것입니다! 하드 드라이브 기술은 지난 10여 년간 크게 변하지 않았습니다. 모든 데이터를 드라이브에 넣기 전에 S.M.A.R.T 데이터를 확인하여 드라이브에 오류가 없는지 확인합니다.

하드 드라이브 크기의 경우, 2.5인치 드라이브는 Wii에서 USB 전원만으로 작동할 경우 대부분 잘 작동하지만, 3.5인치는 더 많은 전력을 소모하므로 항상 외부 전원 어댑터가 필요합니다. Make sure to plan for this when determining what you want to do with an external drive.

Wii U 사용자의 경우, 외부 전원을 사용하는 하드 드라이브를 사용하거나 2.5인치 드라이브의 경우 전원이 공급되는 USB 허브 및/또는 Y 케이블을 사용하는 것이 좋습니다.

Wii 미니 사용자의 경우 외부 저장장치, 인터넷 어댑터 및 기타 주변 장치를 동시에 연결할 수 있도록 외부 전원 공급 USB 허브를 사용하는 것이 좋습니다. 구동 전원을 위해 Y 케이블을 사용할 수도 있습니다.

As for your choices in shopping, this largely comes down to three different scenarios:

- Buying a new external hard drive from scratch: New external drives come brand new around 60 USD for 2TB, 50 USD for 1TB, around 30 USD for sizes lower than 1TB. Whatever you do, try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
- Buying a new hard drive, and a new enclosure: New hard drives are decently cheaper than buying a pre-made hard drive, and you can buy an enclosure to house this new hard drive. 2.5 inch enclosures are normally powerable off of USB alone, while 3.5 inch enclosures almost always come with an external adapter for power. An example price is buying a 500GB Western Digital drive and a 2.5 inch drive enclosure off of Amazon - all in all, about 30 USD.
- Buying an enclosure for an already existing hard drive: If you already have a hard drive laying around, you can put it in an enclosure and use it for your Wii. Enclosures can be found for prices ranging between 10 to 20 USD off of Amazon, as long as you have a drive to supply it with.

### Buying USB Devices - Solid State Drives

::: warning

For the purpose of using a drive with a Wii, external SSDs are often more expensive than conventional hard drives for no visible gain in speed on a Wii (the console only supports up to USB 2.0 data speeds). If you would like to buy one or already have one lying around, it's an option, but generally it's recommended to just go for a hard drive if you don't already have one.

:::

## Networking FAQ

The Wii's wireless networking hardware supports the maximum standard of 802.11g on the 2.4 GHz band (retroactively named WiFi 3), with a maximum security level of WPA2-PSK (AES). Therefore, the Wii will NOT be able to connect to the following access points (APs):

- APs enforcing WPA enterprise encryption, or WPA3 only
- APs not backwards compatible with WiFi 3, or broadcasting only on the 5 GHz band

ISPs known to provide routers incompatible with these settings:

- Xfinity
- Spectrum
- Cox

If your ISP will not let you change these settings, or your current networking hardware is not supported, you have a few options:

- You can try to use a cellular hotspot. This is not recommended as it usually results in an unstable connection.
- LAN 어댑터를 사용할 수 있습니다. `ASIX AX88772` 칩셋이 있어야 하거나 "Wii와 호환"되어야 합니다. [uGreen이 추천하는 LAN 어댑터](https://a.co/d/3OcSJDS)는 다음과 같습니다.
- 혹은 보조 라우터를 구매해서 메시처럼 이미 가지고 있는 네트워크를 계속 사용할 수도 있습니다. 위의 기준을 충족하는 저렴한 라우터 (예: Linksys WRT54G)라면 모두 작동합니다.

Wii U의 경우, vWii는 Wii U의 기본 설정에서 설정된 인터넷 설정을 사용하지만, `Wii VC 실행` 아로마 플러그인을 사용하여 선택적으로 분리할 수 있습니다.
