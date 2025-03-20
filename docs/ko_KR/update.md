# Wii 메뉴 v4.3으로 업데이트

이 자습서는 이미 Wii를 홈브류 한 경우 Wii 메뉴를 버전 4.3으로 업데이트하는 방법을 설명합니다.

::: warning

Wii를 4.3으로 업데이트하려면 [ModMii](modmii) (윈도우용)를 사용하는 것이 훨씬 더 안전합니다.

:::

## 요구 사항

- 홈브류 채널 1.0.8 이상이 있는 Wii
    - 홈브류 채널이 없거나 오래된 경우 먼저 [여기서 시작](get-started)하여 (다시) 설치하세요.
- SD 카드 및 USB 드라이브
- 윈도우가 설치된 컴퓨
- [NUS 다운로더](https://github.com/WiiDatabase/nusdownloader/releases/latest)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## 지침

### 섹션 I - 다운로드

1. NUS 다운로더 Wii용 .zip 파일을 압축 해제하고 응용 프로그램을 엽니다.
2. `데이터베이스...` > `시스템` > `0000000100000002 - 시스템 메뉴`로 가서 아래 표에 표시된 대로 해당 지역에 해당하는 버전을 선택합니다.
3. `WAD 포장`이 체크되어 있는지 확인합니다.
4. `NUS 다운로드 시작!`을 누릅니다.
5. `titles` -> `0000000100000002` -> (Wii 메뉴 버전)을 열고 .wad 파일을 SD 카드나 USB 드라이브의 `wad`라는 폴더에 복사합니다.
6. `IOS` -> `000000010000003A` -> `최신 버전` 및 `IOS` -> `0000000100000050` -> `최신 버전`으로 2~5 단계를 반복합니다.
7. 3 개의 `.wad` 파일을 모두 복사한 후, PC에서 SD 카드/USB 드라이브를 꺼내서 Wii에 다시 연결합니다.

| 지역 | Wii 메뉴 버전                                      |
| -- | ---------------------------------------------- |
| 일본 | v512 (4.3J) |
| 미국 | v513 (4.3U) |
| 유럽 | v514 (4.3E) |
| 한국 | v518 (4.3K) |

### 섹션 II - 설치

1. 콘솔의 전원을 끕니다. RESET 버튼을 누른 후, 다시 켭니다.
2. Priiloader 메뉴에서 `Homebrew Channel`을 선택합니다.
    - Priiloader 메뉴가 나오지 않을 경우, [즉시 설치](priiloader)를 합니다. 이 가이드에는 Priiloader가 필요합니다.
3. YAWM ModMii Edition을 실행합니다.
4. SD 카드나 USB 드라이브를 선택합니다.
5. Press + on the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
6. Wii 메뉴 WAD로 이동한 후 A 버튼을 두 번 눌러 설치합니다.
7. Priiloader를 유지할지 묻는 메시지가 나타나면, A 버튼을 눌러 확인합니다.
8. 설치가 완료되면, 홈 버튼을 눌러 홈브류 채널로 돌아갑니다.

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
