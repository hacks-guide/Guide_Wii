# Priiloader

[Priiloader](https://github.com/DacoTaco/priiloader)는 [DacoTaco](https://github.com/DacoTaco)가 작성한 필수 도구로 Wii에 벽돌 보호 수준을 추가합니다. It loads before the Wii Menu does (hence the name). 이 도구는 시스템 메뉴의 많은 기능을 향상, 잠금 해제, 수정하는 데 사용되는 해킹을 적용할 수도 있습니다.

또한, 이를 사용하면 타이틀이나 홈브류를 빠르게 실행하거나 Wii의 자동 부팅 방식을 변경할 수 있습니다.

## 요구 사항

- SD 카드 및 USB 드라이브
- [Priiloader 설치 프로그램](https://oscwii.org/library/app/priiloader) (`.zip` 파일)
- [Priiloader 로드](https://oscwii.org/library/app/loadpriiloader) (`.zip` 파일)

### vWii에 대한 선택 사항 요구 사항 (강력 추천)

- SD 카드
- [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (직접 다운로드)
  - Priiloader Wii U 포워더를 사용하려면 콘솔에 [아로마](https://wiiu.hacks.guide/aroma/getting-started)가 설치되어 있어야 합니다.

## 지침

### 섹션 I - 준비 작업

1. 콘솔의 전원을 끕니다.
2. Extract both apps to the root of your SD card or USB drive.
3. LoadPriiloader `.zip`에서 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.
4. priiloader `.zip`에서 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.
5. (vWii 전용) PriiloaderWiiUForwarder `.zip`에서 `wiiu` 폴더를 SD 카드의 루트에 복사합니다.
6. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

### 섹션 II - Priiloader 설치하기

1. 콘솔의 전원을 켭니다.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. 홈브류 목록에서 Priiloader 설치 프로그램을 실행합니다.

   ![](/images/hbc/priiloader-and-loadpriiloader.png)

4. Press the + Button on Wii Remote or the A Button on a GameCube controller.

   ![](/images/priiloader/installer.png)

   ![](/images/priiloader/installing.png)

5. 홈브류 채널로 돌아가려면 A 버튼을 누릅니다.

### 섹션 III - Priiloader 진입

1. 홈 버튼을 누른 다음 시스템 메뉴로 나가기를 선택하여 홈브류 채널을 종료합니다.
2. 여러분의 기기는 Priiloader 메뉴를 로드했을 것입니다.

   ![](/images/priiloader/menu.png)

나중에 입력하려면 다음을 수행할 수 있습니다:

- Holding RESET on a Wii while turning it on.
  - Wii 전용
- Holding the ESC key on a USB keyboard while turning on the console.
  - Wii, vWii, 미니
- 홈브류 채널에서 "Load Priiloader" 도구를 실행합니다.
  - Wii, vWii, 미니
- Wii에서 홈브류 채널을 실행합니다.
  - vWii 전용

### Priiloader 구성

1. `System Menu Hacks`으로 스크롤하여 `A` 버튼을 누릅니다.

   ![](/images/priiloader/menu_hacks.png)

   ::: warning

   USB 드라이브에 Priiloader 설치 프로그램을 넣었다면 동시에 SD 카드를 연결하지 않았는지 확인합니다.

   그렇게 하면 Priiloader가 `hacks_hash.ini` 파일을 찾지 못하게 됩니다.

   :::

2. 다음 옵션의 경우 콘솔에 따라 옵션을 활성화합니다:
   - Wii:
     - 480p 모드를 사용하는 경우: `시스템 메뉴에서 480p 그래픽 수정`
     - 블록 디스크 업데이트
     - 온라인 업데이트 차단
     - CRT 디스플레이를 사용하지 않는 경우: `깜박임 제거`
   - vWii:
     - 온라인 업데이트 차단
     - 옵션 버튼을 통한 Wii 시스템 설정
     - CRT 디스플레이를 사용하지 않는 경우: `깜박임 제거`
   - Wii 미니:
     - 블록 디스크 업데이트
     - CRT 디스플레이를 사용하지 않는 경우: `깜박임 제거`

3. 아래로 스크롤하여 `설정 저장`을 클릭하고 A 버튼을 누릅니다.

4. 메인 메뉴로 돌아가려면 `B` 버튼을 누릅니다.

::: info

Priiloader의 추가 옵션과 시스템 메뉴 해킹에 대한 자세한 내용은 [Priiloader 사용법](priiloader-usage) 페이지를 참조합니다.

:::

::: info

[벽돌 방지 지침 보기](bricks#brick-prevention)

이 가이드라인은 BootMii와 Priiloader를 설치하는 것 외에도 Wii가 벽돌되는 것을 방지하는 데 도움이 되는 방법을 나열합니다.

:::

## 다음 단계

::: tip

[cIOS](cios)로 계속하기

이 가이드는 콘솔에 cIOS 기본 구성 요소를 설치하여 USB 로더와 같은 앱의 기능을 활성화하는 방법을 단계별로 설명합니다.

:::
