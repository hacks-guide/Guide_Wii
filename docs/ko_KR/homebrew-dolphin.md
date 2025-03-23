# 돌핀 에뮬레이터에 홈브류 채널 설치

돌핀 에뮬레이터 버전 `5.0-4588` 이상에서는 돌핀 자체를 통해 Wii 메뉴를 쉽게 설치할 수 있습니다. 이 작업이 끝나면 실제 Wii와 같은 방식은 아니지만 홈브류 채널을 설치할 수 있습니다.

## 요구 사항

- 인터넷 연결이 가능한 윈도우/맥OS/리눅스 컴퓨터
- [돌핀 에뮬레이터](https://dolphin-emu.org/download/) 버전 `5.0-4588` 이상
- [오픈 홈브류 채널](https://github.com/Wii-Mini-Hacking/hbc/releases)의 최신 버전

## 지침

1. 아직 설치하지 않았다면 돒핀 에뮬레이터에서 `도구 > 시스템 업데이트 수행`으로 가서 Wii 메뉴를 설치합니다.

   ![](/images/homebrew-dolphin/system-update.png)

2. 위에 링크된 페이지에서 `Open_HBC_(version)_LULZ.wad`를 다운로드합니다.

3. 돌핀 에뮬레이터 열기

4. `도구 > WAD 설치`를 선택하고 다운로드한 `Open_HBC_(version)_LULZ.wad` 파일을 선택합니다.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. `도구 > Wii 시스템 메뉴 불러오기`를 선택합니다. 이제 채널이 나타날 것입니다.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## 설치 후, 오픈 샵 채널을 통해 홈브류 앱 설치

1. 돌핀에서 사용하려면 오픈 샵 채널을 [여기](https://oscwii.org/library/app/homebrew_browser)에서 다운로드합니다. 혹은 OSCDL을 설치하여 수동으로 이 과정을 진행할 수 있습니다.

2. 에뮬레이션을 중지하고 (실행 중인 경우) 돌핀 에뮬레이터에서 `구성 > Wii` 창을 엽니다.

3. `폴더와 자동으로 동기화`를 활성화합니다. 선택적으로 `SD 카드 파일 크기`를 더 큰 매개변수로 조정할 수도 있습니다. 그러나 대부분의 경우 `자동`으로 충분합니다.

4. `SD 동기화 폴더`를 엽니다. 윈도우에서는 폴더 경로를 시작 메뉴, 윈도우 탐색기 또는 실행에 붙여넣으면 쉽게 이 작업을 수행할 수 있습니다.

5. 홈브류 앱을 `WiiSDSync` 폴더로 추출합니다. 최종 결과는 다음과 같습니다:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Wii 메뉴를 로드하고 홈브류 채널을 엽니다. 새로 설치한 앱이 나타날 겁니다!

   ![](/images/homebrew-dolphin/hbc-apps.png)
