# 자주 묻는 질문 및 문제 해결

## Primary FAQ

### 콘솔 해킹은 얼마나 위험한가요?

콘솔에 따라 크게 위험하지는 않습니다. Wii는 다른 콘솔에 비해 진입 장벽이 훨씬 낮으며, 일부 게임을 플레이하는 데는 Wii와 인터넷 연결만 있으면 됩니다. As long as you follow the general advice laid on the [brick overview page](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### 자녀 보호는 어떻게 해제하나요?

[mkey 생성기](https://mkey.nintendohomebrew.com/)를 사용하면 보호자 통제 기능을 제거하는 데 필요한 코드를 생성할 수 있습니다.

### 내 Wii가 고장난 것 같거나 심각한 문제가 있는 경우 어떻게 해야 하나요?

[이](bricks) 페이지를 참조합니다.

## Error Code FAQ

### I got error code XXXXXX, how to fix it?

오류의 의미를 확인하려면 [Wiimmfi 오류 페이지](https://wiimmfi.de/error)를 방문합니다. 더 일반적인 오류에 대한 해결책은 아래와 같습니다:

#### 오류 051330/51330

Run an Internet connection test by going to `Wii Settings` > `Internet` > `Connection settings` > `Connection` > `Test this connection`

#### 오류 220602

<br>

##### RiiConnect24 사용자용

RiiConnect24의 이전 DNS 서버를 사용하고 있습니다. 변경 방법에 대한 지침은 [이](riiconnect24#section-iv---connecting) 가이드를 따릅니다.

##### 비 RiiConnect24 사용자용

기본 DNS 서버가 잘못되었거나 작동하지 않습니다.

프록시 서버를 사용하고 해당 서버가 다운된 경우에도 이런 일이 발생할 수 있습니다.

#### 오류 107304

<br>

##### RiiConnect24 사용자용

이러한 오류가 발생하거나 RiiConnect24 로고 없이 닌텐도 사용자 계약이 표시되는 경우, 여러분의 ISP (인터넷 서비스 제공업체) 또는 네트워크가 RC24 DNS 사용을 차단하고 있다는 의미입니다. 이 문제를 해결하려면 '자동으로 DNS 가져오기'를 '켜기'로 설정하면 됩니다. RiiConnect24는 이것 없이도 작동합니다. 또는 [RiiConnect24 DNS 서버](https://github.com/RiiConnect24/DNS-Server/releases/latest) 프로그램을 사용할 수 있습니다.

##### 비 RiiConnect24 사용자용

이 오류가 발생하면 선택한 DNS 서버나 인터넷 전체에 문제가 있는 것입니다. 나중에 다시 시도합니다.

#### FORE000006

오류 FORE000006이 발생하면 Wii의 시계가 잘못 설정되었을 가능성이 큽니다. 올바르게 재설정하는 방법에 대한 지침은 [이것](wiiconnect24#updating-rtc-clock)을 참조합니다. 그래도 문제가 해결되지 않으면 Wii 시계 배터리(시스템 하단의 나사 뒤에 있음)를 한 시간 동안 제거한 다음 다시 넣습니다. 그런 다음 Wii의 시계를 재설정합니다.

## 저장 장치 자주 묻는 질문

::: danger

Flash drives are NOT recommended to be used on a Wii if possible because of their unpredicability and potential to become corrupt on the console. Using a USB flash drive may result in the following behavior:

- Game backups failing to load
- UI glitches in homebrew apps
- Data randomly becoming corrupted

If you experience the issues above, or other inexplicable issues with your flash drive, use a USB hard drive or an SD card instead.

:::

::: warning

Wii 메뉴 버전이 4.0 미만인 경우, Wii 시스템 소프트웨어의 제한으로 인해 2GB가 넘는 SD 카드를 사용할 수 없습니다.

Wii 메뉴 버전 4.0 이상에서는 이러한 제한이 없어지며 용량에 상관없이 SD 카드를 사용할 수 있습니다.

:::

::: info

Wii는 용량에 상관없이 모든 SD 카드 (32GB보다 큰 카드 포함)를 읽을 수 있지만, 카드는 [FAT32/MS-DOS 형식으로 포맷](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)(exFAT 또는 NTFS 형식은 **안 됨**)되어 있어야 합니다.

USB 장치의 경우 FAT32/MS-DOS 형식을 권장하지만, FAT32는 볼륨 크기를 최대 2TB, 파일 크기를 최대 4GB로 제한한다는 점에 유의해야 합니다. WBFS는 이전에 Wii 게임 백업에 사용된 파일 시스템이었습니다 (WBFS 파일과 혼동하지 마세요) - 오늘날에는 오래되어서 사용해서는 안 됩니다.

:::

::: info

[BlueBomb](bluebomb), [str2hax](str2hax), 또는 [FlashHax](flashhax) 익스플로잇의 경우 Wii 해킹에 SD 카드가 필요하지 않습니다. 홈브류 및 기타 작업을 위해 SD 카드를 하나 구입하는 것이 좋습니다.

:::

### Storage Space Recommendations

When considering buying or using an SD card or USB device, it is worth considering what you will be using either storage medium for. Based on your planned usage, sizing recommendations are outlined below:

|   Device Usage   |                      Recommended Storage Space                      |
| :--------------: | :-----------------------------------------------------------------: |
|   Exploit-only   |                                128MB                                |
|   NAND backups   | Minimum: 512MB<br>Recommended: 1GB+ |
|  Homebrew usage  |                                 2GB+                                |
|  Emulation usage |                                32GB+                                |
| GameCube backups |                                64GB+                                |
|    Wii backups   |                                128GB+                               |

### SD 카드 구매

::: danger

현재 2TB보다 큰 SD 카드는 존재하지 않습니다. 이 카드를 판매하려는 사람은 당신을 속이려는 것입니다.

:::

SD 카드를 구매할 때는 일반적으로 가격이 비싸고 용량이 클수록 잘 알려진 브랜드를 고수하는 것이 좋습니다. 일반적인 2GB SD 카드를 사면 안전할 가능성이 높지만 512GB SD 카드 등은 그렇지 않습니다. General current pricing for SD cards is around 10-35 USD for 256GB and below, whereas 512GB is around 60 USD. 아마존에서 구매할 경우, 카드가 `아마존에서 판매/아마존에서 배송` 또는 `[브랜드]에서 판매, 아마존에서 배송` 중 하나인지 확인합니다. 이베이에서 저장 장치를 구매할 때는 주의합니다.

Our recommended brands:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, etc)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, etc)
- [INLAND by Micro Center](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### USB 장치 구매 - 하드 드라이브

USB 하드 드라이브를 구매할 때 현재 판매되는 HDD 제조업체는 Western Digital, Seagate, Toshiba의 세 곳 뿐입니다. Any and all other hard drive companies are defunct and have either went bankrupt, or were absorbed by the three aforementioned companies. 즉, 다른 회사에서 만든 추가 하드 드라이브가 있다면 여전히 작동할 것입니다! 하드 드라이브 기술은 지난 10여 년간 크게 변하지 않았습니다. 모든 데이터를 드라이브에 넣기 전에 S.M.A.R.T 데이터를 확인하여 드라이브에 오류가 없는지 확인합니다.

하드 드라이브 크기의 경우, 2.5인치 드라이브는 Wii에서 USB 전원만으로 작동할 경우 대부분 잘 작동하지만, 3.5인치는 더 많은 전력을 소모하므로 항상 외부 전원 어댑터가 필요합니다. 외장 드라이브로 무엇을 할지 결정할 때 이 점도 꼭 고려합니다.

Wii U 사용자의 경우, 외부 전원을 사용하는 하드 드라이브를 사용하거나 2.5인치 드라이브의 경우 전원이 공급되는 USB 허브 및/또는 Y 케이블을 사용하는 것이 좋습니다.

Wii 미니 사용자의 경우 외부 저장장치, 인터넷 어댑터 및 기타 주변 장치를 동시에 연결할 수 있도록 외부 전원 공급 USB 허브를 사용하는 것이 좋습니다. 구동 전원을 위해 Y 케이블을 사용할 수도 있습니다.

쇼핑할 때 선택할 수 있는 것은 크게 세 가지 시나리오로 나뉩니다:

- 새 외장 하드 드라이브를 처음부터 구매하는 경우: 새 외장 드라이브는 2TB의 경우 60 달러, 1TB의 경우 50 달러, 1TB보다 작은 크기의 경우 30 달러 정도에 새 제품으로 출시됩니다. 무엇을 하든 위에 나열된 현재 제조 중인 3 개의 브랜드를 고수하도록 노력하세요. 하지만 1TB보다 작은 드라이브 크기의 경우 제공되는 제품이 드물다는 점을 명심합니다.
- 새 하드 드라이브와 새 케이스를 구입합니다. 새 하드 드라이브는 기성품 하드 드라이브를 구입하는 것보다 상당히 저렴하며, 이 새 하드 드라이브를 넣을 케이스를 구입할 수 있습니다. 2.5인치 인클로저는 일반적으로 USB로만 전원을 공급받지만, 3.5인치 인클로저는 거의 항상 외부 전원 어댑터가 함께 제공됩니다. 예를 들어 아마존에서 500GB Western Digital 드라이브와 2.5인치 드라이브 인클로저를 구입하는 경우의 가격은 모두 30 달러 정도입니다.
- 기존 하드 드라이브용 케이스 구매: 이미 하드 드라이브가 있다면 케이스에 넣어 Wii에 사용할 수 있습니다. 아마존에서 10~20 달러 사이의 가격으로 인클로저를 구입할 수 있지만, 이를 공급할 드라이브가 있어야 합니다.

### USB 장치 구매 - 솔리드 스테이트 드라이브 (SSD)

::: warning

Wii에서 드라이브를 사용하려면 외장형 SSD가 기존 하드 드라이브보다 가격이 비싼 편이며, Wii에서는 눈에 띄는 속도 향상이 없습니다. (콘솔은 최대 USB 2.0 데이터 속도만 지원) 구입하고 싶거나 이미 가지고 있다면 선택 사항이지만, 일반적으로 하드 드라이브가 없다면 그냥 구매하는 것이 좋습니다.

:::

## 네트워킹 자주 묻는 질문

The Wii's wireless networking hardware supports the maximum standard of 802.11g on the 2.4 GHz band (retroactively named Wi-Fi 3), with a maximum security level of WPA2-PSK (AES). 따라서 Wii는 다음 액세스 포인트 (AP)에 연결할 수 없습니다.

- WPA 엔터프라이즈 암호화 또는 WPA3만 적용하는 AP
- WiFi 3와 이전 버전과 호환되지 않거나 5GHz 대역에서만 브로드캐스팅하는 AP
- 기존 802.11b 또는 802.11g 속도를 지원하지 않는 AP (즉, 802.11n만 지원하는 AP)

다음 설정과 호환되지 않는 라우터를 제공하는 것으로 알려진 ISP:

- Xfinity
- Spectrum
- Cox

ISP에서 이러한 설정을 변경하지 못하게 하거나 현재 네트워크 하드웨어가 지원되지 않는 경우 몇 가지 옵션이 있습니다:

- 셀룰러 핫스팟을 사용해 봅니다. 이 방법은 일반적으로 연결이 불안정해지므로 권장하지 않습니다.
- LAN 어댑터를 사용할 수 있습니다. `ASIX AX88772` 칩셋이 있어야 하거나 "Wii와 호환"되어야 합니다. 다음은 [Plugable에서 추천하는 LAN 어댑터](https://a.co/d/g8XvMDp)입니다.
  - 참고로, 칩셋의 변형 모델 (예: `ASIX AX88772E`)은 Wii와 호환되지 않습니다.
- 혹은 보조 라우터를 구매해서 메시처럼 이미 가지고 있는 네트워크를 계속 사용할 수도 있습니다. 위의 기준을 충족하는 저렴한 라우터 (예: Linksys WRT54G)라면 모두 작동합니다.

Wii U의 경우, vWii는 Wii U의 기본 설정에서 설정된 인터넷 설정을 사용하지만, `Wii VC 실행` 아로마 플러그인을 사용하여 선택적으로 분리할 수 있습니다.

---

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
