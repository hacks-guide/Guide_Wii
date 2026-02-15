# Wii 메뉴 테마 설치하기

이 가이드는 csm-installer를 통한 Wii 메뉴에 대한 지침뿐만 아니라 WiiFlow Lite, USB Loader GX, 홈브류 채널에 대한 테마도 제공하는, Wii 테마에 관한 마지막 가이드가 될 것입니다. 또한, 포워더도 포함됩니다.

## Wii 메뉴 테마

::: danger

적절한 벽돌 보호 장치, 특히 [BOOTMII](bootmii) (Wii용) 및 [PRIILOADER](priiloader)가 없다면 이 가이드를 계속 진행하지 마세요!

:::

::: warning

csm-installer에는 잘못된 테마나 손상된 Wii 메뉴 테마가 설치되는 것을 방지하는 안전 기능이 내장되어 있으므로 다른 테마 설치 홈브류 대신 이 테마를 사용하시기 바랍니다.

:::

::: warning

여기에 링크된 것 외의 다른 ThemeMii 버전을 사용하지 마세요. ThemeMii Mod를 사용하면 Wii 메뉴 버전 4.3에 맞는 테마를 만들 수 있지만 다른 버전은 그렇지 않을 수 있습니다.

:::

::: danger

Wii에 해당 버전과 현재 지역에 맞게 특별히 포맷된 테마만 설치합니다. Wii에 잘못된 버전이나 지역의 테마를 설치하면 [벽돌](bricks#theme-brick)이 발생합니다. 이 자습서에서는 설치하기 안전한 .csm 파일을 만드는 방법을 알려드립니다.

:::

::: info

계속하기 전에 Wii 메뉴 테마에 사용될 때 .MYM과 .CSM 파일 형식의 차이점을 아는 것이 도움이 됩니다. MYM은 테마 제작자가 만들어서 공유할 수 있는 반면, CSM은 MYM을 시스템 메뉴로 빌드한 결과입니다. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes separate.

:::

### 테마 소스

- [Wii 테마 팀 크리에이션](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym 파일 배포)
- [Wii 테마 구글 드라이브](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym 파일 배포)
- [Wii용 GBAtemp 기타 파일](https://gbatemp.net/download/categories/other-files.166/) (.mym 파일 배포)
- [Wii 테마](http://www.wiithemer.org/) (이 사이트에서는 Wii 및 vWii에만 설치할 수 있는 .csm 파일을 빌드할 수 있지만 Wii 미니의 경우 [테마 데이터베이스](http://wiithemer.org/mym/)에서 .mym 파일을 다운로드할 수 있습니다.)

### 요구 사항

- SD 카드 또는 USB 장치
- 인터넷에 연결된 윈도우 PC
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### 기본 테마 다운로드

::::: tabs

:::: tab (모두) csm-installer 통해

1. csm-installer `.zip` 파일을 SD 카드나 USB 장치의 루트에 압축 해제합니다.
2. 콘솔에 SD 카드나 USB 장치를 연결하고 홈브류 채널을 실행합니다.
3. csm-installer를 실행한 다음 `원래 Wii 테마 다운로드 (기본 테마)`를 선택합니다.
4. 기본 테마 저장이 완료되면 홈 버튼을 눌러 앱을 종료합니다.
5. SD 카드/USB 장치를 다시 PC에 연결합니다. 기본 앱은 `themes`라는 폴더에 저장됩니다.

::::

:::: tab (Wii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
2. Unzip the archive and run the NUSGet executable.
3. Navigate to `System` > `System Menu` > `Your Region` and then select the Wii menu version you are running. Check the `Create decrypted contents (*.app)` option. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl.png)
4. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000100000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu.png)
5. Find the **largest .app file** (usually ~6-7MB) inside the folder.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-output.png)
6. SD 카드/USB 장치의 루트에 `themes` 폴더를 만듭니다.
7. .app 파일을 새로 만든 `themes` 폴더에 복사합니다. 이는 커스텀 테마를 구축하는 데 사용할 기본 테마입니다.

::::

:::: tab (vWii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.

2. Unzip the archive and run the NUSGet executable.

3. Select the `vWii` tab and navigate to `System` > `System Menu` > `Your Region`.

4. 아래 표에서 여러분의 Wii U 지역에 해당하는 버전을 선택합니다.

   |  지역 |                                           vWii 메뉴 버전                                           |
   | :-: | :--------------------------------------------------------------------------------------------: |
   |  일본 | v608 (4.3J - Wii U v5.2.0J) |
   |  미국 | v609 (4.3U - Wii U v5.2.0U) |
   |  유럽 | v610 (4.3E - Wii U v5.2.0E) |

5. `복호화된 콘텐츠 (*.app) 만들기` 상자를 체크합니다. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-vwiimenu-dl.png)

6. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000700000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-vwiimenu.png)

7. 아래 표에서 여러분의 Wii U 지역에 해당하는 .app 파일을 찾습니다:

   |  지역 |    .app 파일   |
   | :-: | :--------------------------: |
   |  일본 | 0000001C.app |
   |  미국 | 0000001F.app |
   |  유럽 | 00000022.app |

8. SD 카드/USB 장치의 루트에 `themes` 폴더를 만듭니다.

9. .app 파일을 새로 만든 `themes` 폴더에 복사합니다. 이는 커스텀 테마를 구축하는 데 사용할 기본 테마입니다.

::::

:::: tab (Wii) ThemeMi를 통해

1. SD 카드/USB 장치의 루트에 `themes` 폴더를 만듭니다.
2. ThemeMii MOD `.zip` 파일을 PC의 원하는 위치에 압축 해제합니다.
3. ThemeMii 응용 프로그램을 실행합니다.
4. `도구` -> `기본 앱 다운로드` -> `Wii 메뉴 버전` -> `Wii 메뉴 지역`으로 갑니다.
5. 키를 생성하기 위해 값을 입력하라는 대화 상자가 나타납니다. 여기에 적힌 내용을 입력하면 닌텐도 서버에서 Wii 메뉴 콘텐츠를 해독하는 데 사용되는 키가 생성됩니다.
6. 파일 선택 상자가 나타나 .app 파일을 저장할 위치를 묻습니다. SD 카드/USB 장치의 `themes` 폴더에 저장합니다.

::::

:::::

### 섹션 II - 테마 빌드

1. ThemeMii MOD `.zip` 파일을 PC의 원하는 위치에 압축 해제합니다.
2. ThemeMii 응용 프로그램을 실행합니다.
3. `파일` -> `열기`로 가서 빌드하려는 테마의 `.mym` 파일을 선택합니다.
4. `csm 만들기`를 누릅니다.
5. `.app` 파일을 선택하라는 메시지가 표시되면 SD 카드나 USB 장치의 `themes`에서 새로 다운로드한 기본 테마를 선택합니다.
6. `.csm` 파일을 저장하라는 메시지가 표시되면 `themes` 폴더에 저장합니다.
7. 테마 빌드가 완료되면 .mym을 저장하라는 메시지가 표시됩니다. `아니요`를 누릅니다.

### 섹션 III - 테마 설치

1. 콘솔에 SD 카드나 USB 장치를 연결하고 홈브류 채널을 실행합니다.
2. csm-installer를 실행하고, 로드될 때까지 기다립니다.
3. `A` 머튼을 눌러 설치하고 싶은 테마를 선택합니다. 이 시점에서 시스템 메뉴 버전 및 지역에 맞는 올바른 테마를 다운로드했는지 꼭 확인합니다.
4. `+` 버튼을 눌러 테마를 설치합니다.
5. Wii 메뉴로 재부팅하고 테마가 성공적으로 설치되었는지 확인합니다. 모든 것이 잘된다면, 아래와 비슷한 결과를 얻을 수 있습니다!

   ![](/images/themes/themed-wii-menu.png)

## WiiFlow Lite 테마

유갑스럽게도, 원래 WiiFlow와 새로운 WiiFlow Lite의 코드베이스 차이로 인해 테마가 부족합니다. 사실, 새로운 버전에서 확실하게 작동하는 테마는 단 하나뿐입니다. 해당 테마를 설치하는 방법은 아래와 같습니다.

### 요구 사항

- 개조된 Wii
- SD 카드 또는 USB 장치
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- 인터넷 연결이 가능한 리눅스/맥OS/윈도우 PC
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### 지침

1. WiiFlow Lite가 저장된 저장 장치를 PC에 연결합니다.
2. Rhapsodii Shima 아카이브를 다운로드하면 두 버전의 테마가 모두 작동하며 문제없이 나란히 설치할 수 있습니다.
3. `wiiflow` 폴더를 압축 해제하여 저장 장치의 루트에 복사한 다음, 모든 폴더를 병합하고 요청 시 모든 파일을 덮어씁니다.
4. `installation.txt`에 있는 테마 설정 및 테마 구성 지침을 따릅니다. 테마를 즐기세요!

## USB 로더 GX 테마

### 요구 사항

- 개조된 Wii
- SD 카드 또는 USB 장치
- [USB Loader GX](wii-loaders#usb-loader-gx)
- 인터넷 연결이 가능한 리눅스/맥OS/윈도우 PC
- [테마](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/) 이 링크에는 다양한 어두운 테마가 포함되어 있습니다.

### 지침

1. 위에 링크된 웹사이트에서 테마 `.zip` 파일을 다운로드하거나, 적절한 테마를 구할 수 있는 다른 곳에서 다운로드합니다.
2. USB Loader GX를 설치한 저장 장치의 `apps\usbloader_gx` 디렉토리에 `.zip` 파일의 내용을 압축 해제합니다.
3. 저장 매체를 Wii에 넣고 부팅합니다.
4. USB Loader GX를 시작하고 `설정` 메뉴로 이동한 다음 `테마 메뉴`로 이동합니다.
5. 테마를 열고 설치합니다.

## 홈브류 채널 테마

### 요구 사항

- 개조된 Wii
- SD 카드 또는 USB 장치
- 인터넷 연결이 가능한 리눅스/맥OS/윈도우 PC
- WiiBrew의 [테마](https://wiibrew.org/wiki/Homebrew_Channel/Themes)

### 지침

1. 위에 링크된 웹사이트에서 테마 `.zip` 파일을 다운로드합니다.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. `.zip` 파일을 홈브류를 로드한 저장 장치의 `apps` 폴더에 붙여넣습니다.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. `.zip` 파일의 내용을 `apps` 폴더로 압축 해제하고 보관 파일을 삭제합니다.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. 저장 장치를 Wii에 다시 연결하고 홈브류 채널에 들어갑니다.

5. 방금 설치한 테마는 표준 앱에 접근하는 것과 같은 방식으로 로드할 수 있습니다.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. 이제 테마가 로드되었습니다. 즐기세요!

   ![](/images/themes/homebrew-channel-theme-done.png)

## 앱 포워더

앱 포워더는 Wii 메뉴에 특별한 멋을 더해줄 수 있지만, 잘못된 포워더를 사용하면 [배너 벽돌](bricks#banner-brick)이 발생할 수 있으므로 주의합니다. 일반적으로 에뮬레이터 등 인기 있는 앱의 경우 [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/)와 같은 곳에서 포워더를 찾을 수 있습니다. 포워더는 .WAD 형식으로 제공되므로 포워더를 설치하는 과정은 [YAWM ModMii Edition](yawmme)을 사용하는 일반적인 사용과 마찬가지로 간단합니다.

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
