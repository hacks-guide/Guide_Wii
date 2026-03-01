# ModMii

::: warning

이 프로그램에는 보증이 제공되지 않으므로 콘솔에 발생할 수 있는 모든 손상에 대한 책임은 사용자에게 있습니다.

:::

::: warning

ModMii를 사용하는 Wii 미니에서는 일부 기능이 제한될 수 있습니다.

:::

ModMii는 XFlak이 개발한 윈도우용 올인원 Wii 및 Wii U 해킹 도구로, 다양한 유용한 모딩 도구를 제공합니다. 이를 통해 다음을 달성할 수 있습니다:

- 처음으로 콘솔 해킹하기 또는 다시 해킹하기
- 오래된 소프트개조를 확인하고 업데이트
- 거꾸로 된 홈브류 채널 문제 해결
- Wii의 낸드를 변경하지 않고 홈브류를 실행
- 홈브류 다운로드
- 그리고 더 많은 것들!

## ModMii 개요

ModMii를 사용하는 방법에는 두 가지가 있습니다. 명령줄 인터페이스를 사용하지만 프로그램에서 사용할 수 있는 모든 기능을 갖춘 ModMii 클래식이 있습니다. 반면에 ModMii 스킨은 그래픽 사용자 인터페이스를 가지고 있지만, 사용자에게 제공되는 옵션이 적습니다. 콘솔을 처음으로 간단하게 개조해보고 싶다면 ModMii Skin이면 충분할 겁니다. 그렇지 않은 경우에는 가능한 한 ModMii 클래식을 사용하는 것을 권장합니다.

아래 표는 두 인터페이스에서 무엇을 할 수 있는지 파악하는 데 도움이 됩니다.

| 도구                                 | ModMii 클래식 | ModMii 스킨 |
| ---------------------------------- | ---------- | --------- |
| ModMii 마법사                         | ✅          | ✅         |
| SysCheck 업데이터 마법사                  | ✅          | ⛔         |
| USB 로더 설치 마법사                      | ✅          | ✅         |
| HackMii 해결 마법사                     | ✅          | ✅         |
| 절제 마법사                             | ✅          | ✅         |
| 지역 변경 마법사                          | ✅          | ✅         |
| SNEEK/에뮤낸드 설치                      | ✅          | ✅         |
| 파일 열기 기능                           | ✅          | ⛔         |
| 다운로드 대기열 로드                        | ✅          | ✅         |
| 다운로드 페이지 1/2/3/4/5                 | ✅          | ⛔         |
| 고급 다운로드                            | ✅          | ⛔         |
| 다운로드 대기열 로드                        | ✅          | ⛔         |
| 구성 파일 빌드                           | ✅          | ⛔         |
| 파일 정리 & 앱 업데이터 | ✅          | ⛔         |

:::details 각 도구에 대한 자세한 설명을 보려면 여기를 클릭합니다.

| 도구                                                                              | 설명                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii 마법사 <-- Wii, vWii 또는 WiiU를 개조하려면 여기서 시작하세요! | 이 옵션은 처음으로 Wii를 해킹하는 데 사용할 수 있습니다.                                                                                                                                                    |
| SU = SysCheck 업데이터 마법사 (오래된 Wii/vWii 소프트웨어 모드만 업데이트)         | 이 옵션은 콘솔에 설치된 기존 수정 사항을 확인하고 업데이트합니다. Wii에서는 DarkCorp/CIOSSPAGHETTI와 같이 최신 홈브류에 문제를 일으킬 수 있는 것들을 수정할 수 있습니다.                                                          |
| U = USB 로더 설정 마법사 (Wii, vWii, Wii 미니)                        | 이 옵션을 선택하면 SD 또는 USB 하드 드라이브에서 디스크 백업을 로드할 수 있도록 USB 로더가 올바르게 설정됩니다. ModMii 마법사를 사용하는 경우에는 이 옵션이 필요하지 않습니다.                                                           |
| H = HackMii 해결 마법사 (Wii) 거꾸로 된 홈브류 채널/취약한 IOS 없음 수정          | 이 옵션은 HackMii 설치 프로그램을 사용하는 데 문제가 있거나 홈브류 채널이 거꾸로 되어 있는 사용자에게 유용합니다.                                                                                                                  |
| AW = 절제 마법사 (비영구적 Wii 해킹)                                    | 이 옵션을 사용하면 시스템 낸드를 영구적으로 수정하지 않고도 Wii에서 홈브류를 실행할 수 있습니다.                                                                                                                              |
| RC = 지역 변경 마법사 (Wii)                                         | 이 옵션을 사용하면 Wii가 벽돌되지 않고도 지역 설정을 변경할 수 있으며, 인터넷 상에서 가장 뛰어난 지역 설정 마법사로 평가받고 있습니다.                                                                                                       |
| S = SNEEK 설치, EmuNAND 빌더/수정 도구, 게임 대량 추출기                                       | 이 옵션은 에뮤낸드 (일명 neek2o)를 SD 또는 USB에 올바르게 설정하는 데 도움이 됩니다. 에뉴낸드의 장점으로는 게임이나 채널을 저장할 수 있는 추가 저장 공간이 있고, 시스템 낸드를 영구적으로 수정하지 않고도 홈브류를 실행할 수 있다는 점이 있습니다. |
| F = ModMii로 파일이나 폴더를 열어 더 많은 기능을 사용합니다!                                         | 이 옵션은 특히 개발자에게 유용한 고급 도구입니다.                                                                                                                                                          |
| # = 다운로드 페이지: 1=NUS, 2=Wii 홈브류, 3=테마, 4=cIOS, 5=WiiU+PC 앱       | 이 링크를 클릭하면 홈브루 앱, PC 앱, iOS, cIOS, Wii 메뉴 테마 등 다양한 다운로드 페이지로 이동합니다.                                                                                                                   |
| A = 고급 다운로드 및 포워더 빌더                                                            | 이 옵션을 사용하면 모든 IOS 및 cIOS를 다운로드하고 사용자 정의 DOL/ISO 포워더를 구축할 수 있습니다. 고급 사용자만을 대상으로 합니다.                                                                                   |
| L = 다운로드 대기열 로드                                                                 | 이 옵션은 묶음으로 저장되었거나 이전에 저장된 다운로드 대기열을 불러옵니다.                                                                                                                                            |
| C = Bootmii, Wad 관리자 또는 Multi-Mod 관리자용 커스텀 구성 파일                                | 이 옵션을 사용하면 BootMii, Wad Manager, Multi-Mod Manager에 대한 커스터 구성 파일을 빌드할 수 있습니다.                                                                                                         |
| FC = 파일 정리 & 앱 업데이터: 앱 업데이트 및 불필요한 파일 제거    | This option removes unnecessary files from your SD Card or Hard Drive after finishing softmodding your Wii.                                                                           |

:::

ModMii를 사용할 때, 선택한 옵션에 따라 커스텀 가이드가 생성된다는 점을 알아두는 것이 중요합니다. 따라서 이 가이드에서는 콘솔 개조 방법에 대해서는 다루지 않을 것입니다. ModMii가 해당 기능을 담당하기 때문입니다. 대신, 가장 일반적인 옵션을 사용하여 효과적으로 사용하는 방법을 보여주는 빠른 시작 가이드를 제공하겠습니다.

## ModMii 설치

### 요구 사항

- Wii 또는 Wii U
- USB 드라이브 또는 SD 카드
- 윈도우 PC (가상 머신이 작동함)
- [ModMii](https://modmii.github.io/)

### 설치

::: warning

브라우저나 바이러스 백신 소프트웨어가 ModMii를 맬웨어로 표시할 수 있습니다. 이는 긍정 오류입니다. ModMii에는 맬웨어가 없습니다.

:::

1. [ModMii 웹사이트](https://modmii.github.io)로 가서 다운로드 섹션까지 아래로 스크롤합니다. 여기에서 `설치 프로그램` 옵션을 선택합니다. 브라우저가 설치 프로그램을 맬웨어로 표시할 수 있지만 이는 **긍정 오류**입니다.

   ![](/images/modmii/modmii-download.png)

2. `ModMiiInstaller.exe` 파일을 열고 설치 과정을 진행합니다.

   ![](/images/modmii/modmii-install.png)

## ModMii 마법사 사용

ModMii 마법사는 콘솔을 처음부터 끝까지 소프트모드할 수 있는 도구로, 필요한 모든 파일을 다운로드하고 소프트모드를 구현하는 데 사용할 수 있는 가이드를 생성합니다. 이 도구는 이미 소프트모드가 적용된 콘솔의 기존 소프트모드를 덮어쓰는 데에도 사용할 수 있습니다.

1. ModMii 스킨 또는 ModMii 클래식을 열고 목록 맨 위에 있는 ModMii 마법사 옵션을 선택합니다.

   ![](/images/modmii/modmii-wizard-1.png)

2. 개조할 플랫폼을 선택하세요. Wii U를 가지고 있다면 Wii U와 vWii 모두를 개조하는 것을 권장합니다. Wii U와 vWii 모두를 개조할 계획이라면 9단계로 건너뛰세요. vWii만 개조할 계획이라면 5단계로 건너뛰세요. Wii U만 개조할 계획이라면 13단계로 건너뛰세요.

   ![](/images/modmii/modmii-wizard-2.png)

3. 콘솔에서 하고 싶은 작업이나 업데이트에 대한 구체적인 계획이 없는 한, 첫 번째 질문에는 '예'라고 답하세요.

   ![](/images/modmii/modmii-wizard-3.png)

4. 프로그램의 지시에 따라 현재 시스템 메뉴 버전을 선택한 다음 시스템 메뉴 영역을 선택합니다. 여전히 헷갈리다면, 각 화면 하단 옵션에서 교육 영상을 확인해보세요.

   ![](/images/modmii/modmii-wizard-4.png)

5. 콘솔을 개조하는 데 사용할 익스플로잇을 선택하세요. If you are on a Wii, we would recommend using Wilbrand if you have an SD card on hand. For modding just the vWii, we would recommend using the browser.

   ![](/images/modmii/modmii-wizard-5.png)

6. 이전 단계에서 Wilbrand 옵션을 선택한 경우 Wii의 MAC 주소를 입력합니다. Wii의 MAC 주소를 확인하는 방법을 모르는 경우, 텍스트 상자에 `Help`을 입력하면 지침 비디오가 나옵니다.

   ![](/images/modmii/modmii-wizard-6.png)

7. 목록에서 원하는 시스템 메뉴 버전을 선택합니다.

   ![](/images/modmii/modmii-wizard-7.png)

8. 나열된 채널을 설치할지 여부를 선택합니다. 이는 선택 사항입니다.

   ![](/images/modmii/modmii-wizard-8.png)

9. Select whether or not you would like to install a custom Wii Menu theme, with the choice of three theme effects. 각 효과는 Wii 채널 위에 마우스를 올렸을 때 윤곽선이 얼마나 회전하는지에 대한 내용을 다룹니다.

   ![](/images/modmii/modmii-wizard-9.png)

10. 콘솔에서 사용할 USB 로더를 설정할지 여부를 선택하십시오.

    ![](/images/modmii/modmii-wizard-10.png)

11. USB 로더 메뉴에서 `예`를 선택한 경우, 사용할 USB 로더를 선택합니다. If you choose an individual one, we recommend either USB Loader GX or WiiFlow as both are covered on this website, or you may optionally download each option.

    ![](/images/modmii/modmii-wizard-11.png)

12. USB 로더 메뉴에서 `예`를 선택한 경우, USB 로더 파일을 저장할 위치를 선택합니다.

    ![](/images/modmii/modmii-wizard-12.png)

13. SD 카드 및/또는 USB 드라이브에 파일을 저장할 위치를 확인합니다.

    ![](/images/modmii/modmii-wizard-13.png)

14. 설정이 올바른지 확인한 후 `마침`을 누릅니다. 버튼을 누르면 ModMii가 백그라운드에서 파일을 처리하고 다운로드하기 시작하고, 자동으로 가이드를 생성하여 열어줍니다.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow the below sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

## SysCheck 업데이터 마법사

SysCheck 업데이터 마법사는 홈브류 앱 [SysCheck](syscheck)를 활용해 Wii, 특히 IOS 및 cIOS의 모든 수정 사항을 분석하는 도구입니다. It accepts a `syscheck.csv` file generated by the app, and then provides any necessary updates as needed.

1. ModMii 클래식을 열고 `SU`를 입력하여 SysCheck 업데이타 마법사를 엽니다.

   ![](/images/modmii/syscheck-wizard-1.png)

2. 아직 SysCheck 로그가 없으면 창에 나오는 지시를 따른 다음, 윈도우 탐색기에서 `syscheck.csv` 파일을 창으로 끌어다 놓습니다. 이렇게 하면 Enter 키를 누를 수 있는 파일 위치가 붙여넣어집니다.

   ![](/images/modmii/syscheck-wizard-2.png)

3. 시스템 검사에서 priiloader가 감지되면 업데이트할지 여부를 묻는 메시지가 표시됩니다. `Y`를 입력하고 Enter 키를 눌러 최신 Priiloader 버전으로 업데이트하세요.

   ![](/images/modmii/syscheck-wizard-3.png)

4. 이 프로그램은 SysCheck 파일을 분석하고, 분석 결과에 따라 옵션을 제공합니다. 이 예시에서 Wii의 개조는 최신 상태였지만, 스텁이 가능한 불필요한 IOS가 여러 개 있었습니다. Wii에 이러한 변경 사항을 적용하려면 `Y`를 입력하고 Enter를 누릅니다.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow other sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

## HackMii 해결 마법사

HackMii 해결 마법사는 깨끗한 IOS를 설치하여 Darkcorp/CIOSSPAGHETTI와 같은 문제에서 발생할 수 있는 문제를 해결하는 도구입니다. 이로 인해 발생할 수 있는 문제의 예는 다음과 같습니다:

- HackMii 설치 프로그램이 "계속하려면 (1) 버튼을 누르세요"라는 메시지를 표시하지 않습니다.
- HackMii 설치 프로그램에서 "취약한 IOS를 찾을 수 없습니다!"라는 메시지가 표시됩니다.
- 홈브류 채널이 거꾸로 표시됨

1. ModMii 스킨 또는 ModMii 클래식을 열고 HackMii 해결 옵션을 선택합니다.

   ![](/images/modmii/hackmii-wizard-1.png)

2. 프로그램의 지시에 따라 현재 시스템 메뉴 버전을 선택한 다음 시스템 메뉴 영역을 선택합니다. 여전히 헷갈리다면, 각 화면 하단 옵션에서 교육 영상을 확인해합니다.

   ![](/images/modmii/hackmii-wizard-2.png)

3. Wii를 개조하는 데 사용할 익스플로잇을 선택합니다. The exploits below are outlined throughout this website, but in most cases we would recommend using Wilbrand if you have an SD card on hand.

   ![](/images/modmii/hackmii-wizard-3.png)

4. 이전 단계에서 Wilbrand 옵션을 선택한 경우 Wii의 MAC 주소를 입력합니다. Wii의 MAC 주소를 확인하는 방법을 모르는 경우, 텍스트 상자에 `Help`을 입력하면 지침 비디오가 나옵니다.

   ![](/images/modmii/hackmii-wizard-4.png)

5. SD 카드 및/또는 USB 드라이브에 파일을 저장할 위치를 확인합니다.

   ![](/images/modmii/modmii-wizard-12.png)

6. 설정이 올바른지 확인한 후 `마침`을 누릅니다. 버튼을 누르면 ModMii가 백그라운드에서 파일을 처리하고 다운로드하기 시작하고, 자동으로 가이드를 생성하여 열어줍니다. After following the generated guide, it is recommended that you use the [SysCheck Updater Wizard](#syscheck-updater-wizard) to undo any other problematic modifications on your Wii.

   ![](/images/modmii/hackmii-wizard-5.png)

::: warning

여기에서는 ModMii가 생성한 가이드를 따릅니다. You do not need to follow other sections of this guide -- they are provided as supplemental information for people using ModMii for other purposes.

:::

---

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
