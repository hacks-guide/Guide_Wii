# 벽돌

A "Brick" usually means your Wii has reached a state where its next purpose in existence is likely that of a doorstop, or a display figure.

벽돌 현상은 다양한 이유로 발생할 수 있지만 일반적으로는 소프트웨어가 손상되거나 홈브류에서 부적절하게 수정한 경우 발생합니다.

# 벽돌 방지

문제가 발생하는 것을 방지하려면 상식적인 측면에서 안전한 백업에 이르기까지 다양한 규칙이 필요합니다. 하지 말아야 할 일에 대한 일반적인 권장 사항은 다음과 같습니다:

- **홈브류 개발자가 명확히 권장하지 않는 한 오래된 개조 자습서를 따르거나 오래된 홈브류를 사용하거나 인터넷의 비디오 가이드를 사용하지 마세요.**
- **어떤 경우에도 홈브류 앱인 `Pimp My Wii`를 사용하지 마세요. 이 프로그램은 위험하며 콘솔을 벽돌로 만들 수 있는 능력을 가지고 있습니다!**
- \*\* cIOS로 IOS의 대부분을 덮어쓰는 DARKCORP 등의 IOS 팩을 설치하지 마세요. 위험하고 매우 오래되었습니다.\*\*
- **다른 콘솔에서 낸드 백업을 복원하지 마세요!**
- **시스템에 맞지 않는 IOS는 설치하지 마세요** (예: Wii 미니에 설치된 Wii IOS)
- **vWii 또는 Wii 미니에서 Wii용 지역 변경 방법을 시도하지 마세요.**
- **RCE 패치가 적용된 것으로 알려진 경우(예: [Wiimmfi](nintendowfc))를 제외하고는 닌텐도 Wi-Fi 연결 서비스를 사용하지 마십시오. 그렇지 않으면 악의적인 공격자가 여러분의 콘솔을 파괴할 수 있습니다!**
- **여러분의 지역에 대한 업데이트만 설치하세요!**
    - 다른 지역에서 업데이트를 설치해도 아무런 효과가 없을 수 있으며, 최악의 경우 [Korean Kii/오류 003](bricks#koreankii-error-003-brick) 오류가 발생할 수 있습니다. 중고 Wii를 구매한 경우 이런 일이 발생하지 않도록 하려면 [SysCheck](syscheck)를 실행하여 콘솔의 원래 지역을 확인합니다. 한국어 버전이라면 콘솔에 시스템 업데이트를 적용할 때 각별히 주의하고, 추가 지원이 필요하면 지원팀에 문의하시기 바랍니다.
- **시스템 파일을 삭제하거나 수정하지 말고, Wii 메뉴나 IOS의 이전 버전을 설치하지 말고, 무엇을 해야 할지 모르는 경우 시스템 파일 모드를 설치하지 마세요!**
    - 파일 수정이 잘못된 예로는 Wii 미니에서 IOS80을 교체하는 것이 있는데, 이로 인해 [Wi-Fi 벽돌](bricks#wi-fi-brick)이 발생할 수 있습니다.
- **신뢰할 수 없는 출처에서 홈브류를 설치하지 마세요. 혹은 소스코드를 사용할 수 없는 경우에는 설치하지 마세요.**
    - [오픈 샵 채널](osc)의 소프트웨어는 안전합니다.
    - 과거에도 Wii용으로 악성 소프트웨어가 개발된 사례가 있었지만, 그저 형편없이 개발된 앱도 있습니다. 무엇을 설치하는지 확인하고, 필요한 것만 설치합니다.
    - 홈브류의 손상되거나 불안정한 포워더로 인해 [배너 벽돌](#banner-brick)이 발생할 수 있으므로, 포워더가 꼭 필요한 경우가 아니면 홈브류 채널에서 홈브류를 로딩하도록 합니다.
- \*\* 홈브류 앱을 실행할 때는 무엇을 하는지 알고 있어야 합니다. 특히 시스템 파일을 수정할 수 있는 앱의 경우 더욱 그렇습니다. 다음과 같은 애플리케이션을 사용할 때는 특히 주의합니다:\*\*
    - AnyTitle Deleter
    - AnyRegion Changer
    - KoreanKii ([Korean Kii/오류 003](bricks#koreankii-error-003-brick) 벽돌의 2차 원인)
    - 펌웨어 다운그레이더
    - 중요한 낸드 파일을 수정하는 다른 앱
- **중요한 시스템 콘텐츠를 설치하거나 수정할 때 WII의 전원이나 전원 버튼을 만지지 마세요.**
    - 전기가 불안정한 경우 (예: 폭풍, 정전), 안정적인 전력 공급이 이루어질 때까지 하던 일을 연기합니다.
    - 이는 BootMii 낸드 복구와 같은 위험한 프로세스에 적용되며, 문제가 발생하면 [완전 벽돌](#low-level-brick)이 발생할 수 있습니다.

어떤 경우에도 반드시 다음을 수행해야 합니다:

- 가능하다면 BootMii를 boot2로 설치하고, 그렇지 않으면 IOS로 설치합니다.
- BootMii 설치 방법에 관계없이 Priiloader를 설치합니다.
- BootMii로 낸드를 백업하고 항상 유효한 예비 사본을 준비해 둡니다. 특히 위험한 작업을 시도하기 전에 그렇게 합니다. 일부 벽돌 시나리오에서는 BootMii에 접속할 수 없으므로 미리 계획합니다.

# 진단

이 섹션은 벽돌 심각도가 가장 낮은 것부터 가장 높은 것까지 순서대로 나열되어 잠재적인 벽돌을 진단하는 데 도움을 주기 위해 마련되었습니다. 이 섹션이나 가이드에 포함되지 않은 문제가 있는 경우, 닌텐도 홈브류 디스코드 서버에 가입하여 지원을 받으세요.

- Wii starts, and progresses to the Wii Menu. No app is malfunctioning, Wii settings is error free, everything is seemingly fine. 벽돌은 없습니다.
- Wii starts, and progresses to the Wii Menu.
    - 특정 채널에 접속한 후 `The system files are corrupted.`라는 메시지가 나타나면 [배너 벽돌](bricks#banner-brick)을 참조합니다.
    - Wii 설정에 접속한 후 오페라 웹 브라우저와 유사한 오류가 표시되면 [반벽돌](bricks#semibrick)을 참조합니다.
- Wii를 시작하면 건강/경고 화면이 나타나지만, A 버튼을 눌러 시작하면 검은색 화면이 나타납니다.
    - 테마를 설치한 후 이런 일이 발생한 경우 [테마 벽돌](bricks#theme-brick)을 참조합니다.
    - WAD를 설치한 후 이런 일이 발생한 경우 [배너 벽돌](bricks#banner-brick)을 참조합니다.
    - 이런 일이 무작위로 발생하기 시작한 경우, 건강/경고 화면에서 +/- 버튼을 길게 눌러 유지 관리 모드에 접속할 수 있습니다. [메일 벽돌](bricks#mail-brick)을 참조합니다.
- Wii를 시작하면 건강/경고 화면이 나타나지만, A 버튼을 눌러 시작하면 화면이 검게 변하거나 멈췄다가 더 이상 진행되지 않습니다. 유지 관리 모드에 접근할 수 있습니다. [메일 벽돌](bricks#mail-brick)을 참조합니다.
- Wii를 시작하자마자 오페라 웹 브라우저와 비슷한 오류가 표시됩니다. [Wii 메뉴/오페라 벽돌](bricks#wii-menuopera-brick)을 참조합니다.
- Error 003. [Korean Kii/오류 003 벽돌](bricks#koreankii-error-003-brick)을 참조합니다.
- 아무 일도 일어나지 않고 검은색 화면만 나오지만 BootMii는 boot2로 접속 가능합니다. [IOS 벽돌](bricks#ios-brick)을 참조합니다.
- 아무 일도 일어나지 않고 검은색 화면만 나오지만 Wii 리모컨으로 Wii를 켤 수 있고 복구 모드에 접근할 수 있습니다. [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다.
- 아무 일도 일어나지 않고 검은색 화면만 나옵니다. Wii 리모컨으로 Wii를 켤 수 없고, 복구 모드를 시작할 수 없으며, BootMii를 boot2에 접근할 수 없습니다. [저수준 벽돌](bricks#low-level-brick)을 참조합니다.

# 벽돌 유형

여기에서는 다양한 Wii 벽돌에 대해 심각도 순으로 논의하며, 증상, 원인, 해결책을 설명하겠습니다.

## 반벽돌

### 증상

Wii 설정으로 이동하려고 하면 대신 오페라 웹 브라우저에서 `You tried to access the address (URL), which is currently unavailable.`라는 오류가 표시됩니다. 어떤 경우 Wii 설정 메뉴의 일부 부분은 계속 접속할 수 있지만 다른 부분 (예: 국가 메뉴)은 접속할 수 없을 수 있습니다.

### 원인

반벽돌은 다른 지역의 Wii 메뉴나 다른 지역의 커스텀 테마가 설치되면 발생합니다. Wii 설정 메뉴는 오페라에서 HTML 페이지를 사용하여 렌더링되므로 테마가 이러한 페이지를 대체하여 다른 디렉터리에 넣는 경우가 많습니다. 기본적으로 `404 Not Found` 오류가 발생하지만 콘솔 벽돌 형태입니다.

![](/images/bricks/semibrick.png)

### 해결책

AnyRegion Changer에서 콘솔 지역이 설치한 테마나 Wii 메뉴와 동일한지 확인합니다.

설치한 테마로 인해 문제가 발생한 경우 csm-installer를 사용하여 원래 테마를 다시 설치합니다.

이 문제가 설치한 Wii 메뉴 WAD로 인해 발생한 경우 [NUS 다운로더](https://wiibrew.org/wiki/NUSD)를 사용하여 원래 Wii 메뉴를 다시 얻습니다.

::: danger

Wii 메뉴 WAD를 다운로드할 때는 주의합니다. 수정된 지역이 포함된 동일한 버전을 선택해야 합니다.

:::

실제로 지역 변경 중이라면 [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)를 사용하면 모든 지역 설정이 Wii 메뉴와 일치하도록 자동으로 수정됩니다.

## 배너 벽돌

### 증상

Wii를 시작하려고 하면 경고/A 버튼을 누르라는 화면이 나타나고, A 버튼을 누르면 화면이 정상적으로 넘어갑니다. 그러나 이 지점을 넘어서면 아무 일도 일어나지 않고 Wii는 검은색 화면만 출력합니다. 이 문제는 WAD를 설치하고 재부팅하거나 Wii 메뉴로 돌아온 후에 발생했습니다. 그렇지 않으면, Wii 메뉴에는 여전히 접근할 수 있지만 손상된 채널을 열면 콘솔이 정지됩니다. 어떤 경우에는 "System files are corrupted"라는 화면이 나타날 수 있습니다.

![](/images/bricks/sysfiles-corrupted.jpg)

### 원인

잘못된 Wii 메뉴 배너나 아이콘이 있는 WAD 파일을 설치하면 배너 벽돌이 발생합니다.

### 해결책

어떻게든 Wii 메뉴에 접근할 수 있다면 홈브류 채널로 가서 [YAWM ModMii Edition](yawmme) 또는 현재 WAD 매니저를 사용하여 손상된 채널을 제거합니다.

Wii 메뉴에 접근할 수 없고 [Priiloader](priiloader)가 설치되어 있는 경우, Wii를 켜는 동안 RESET 버튼을 눌러서 진입합니다. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. 건강과 안전 화면에서 `+`와 `-` 버튼을 누릅니다. (`A`를 누르지 마세요!)

## 테마 벽돌

### 증상

Wii를 시작하려고 하면 경고/A 버튼을 누르라는 화면이 나타나고, A 버튼을 누르면 화면이 정상적으로 넘어갑니다. 그러나 이 지점을 넘어서면 아무 일도 일어나지 않고 Wii는 검은색 화면만 출력합니다. 이 문제는 테마를 설치한 후에 발생했습니다.

### 원인

잘못된 형식의 테마가 설치되면 테마 벽돌이 발생합니다.

### 해결책

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. 또는 [YAWM ModMii Edition](yawmme)으로 가서 해당 지역 및 버전에 맞는 기본 Wii 메뉴 WAD를 설치합니다.

## 메일 벽돌

### 증상

Wii를 시작하려고 하면 경고/A 버튼을 누르라는 화면이 나타나고, A 버튼을 누르면 화면이 정상적으로 넘어갑니다. 그러나 이 지점을 넘어서면 아무 일도 일어나지 않고 Wii는 검은색 화면만 출력합니다. 유지 관리 모드에 여전히 접속할 수 있습니다.

### 원인

A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

### 해결책

경고 화면에서 +와 - 버튼을 누르고 있으면 유지 관리 모드로 전환되고, 이 모드에서는 Wii 메시지 보드가 전혀 로드되지 않습니다. 홈브류 채널이 설치되지 않은 경우 [Bluebomb](bluebomb)를 따릅니다.

여기에서 홈브류 채널을 로드하고 [cdbackup](https://oscwii.org/library/app/cdbackup)을 사용하여 Wii 메시지 보드 데이터를 삭제하면 문제가 해결됩니다.

## Wii Menu/Opera brick

### 증상

Wii를 시작하면 대신 오페라 웹 브라우저에서 `You tried to access the address (URL), which is currently unavailable.`라는 오류가 발생합니다. 이 오류는 Wii를 시작할 때마다 발생하며 다른 방법으로는 우회할 수 없습니다.

### 원인

이 벽돌은 [반벽돌](#semibrick)의 더 치명적인 버전입니다. SYSCONF (시스템 구성 파일)가 손상되거나 손상되면 Wii는 해당 파일을 다시 생성하고 설정 단계를 시작합니다.

하지만, 설정 페이지의 위치는 Wii 설정 페이지와 비슷합니다. 잘못된 지역 Wii 메뉴나 테마가 있으면 Wii에서 해당 메뉴를 찾을 수 없습니다.

![](/images/bricks/sysmenu-brick.png)

### 해결책

아직 [Priiloader](priiloader)가 있다면 이를 사용해 홈브류 채널에 들어가서 원래 테마 파일/원래 Wii 메뉴를 다시 설치합니다.

Priiloader가 없거나 Wii에 개조가 적용되지 않은 경우 [BlueBomb](bluebomb)를 사용합니다.

또는 [복원 모드](recovery-mode)를 사용하여 수정을 시도할 수 있습니다.

## KoreanKii/오류 003 벽돌

### 증상

정상적으로 부팅하면 아래 나열된 화면이 나타납니다.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### 원인

닌텐도는 한국어 Wii를 출시할 때 홈브류를 막기 위한 마지막 수단으로 이들 장치의 암호화 키를 변경했습니다. 이것이 의도한 목표에는 실패했지만, 닌텐도는 시스템 메뉴 버전 4.2/4.3에 한국어 키가 한국어가 아닌 **시스템 소프트웨어 지역에 있는지 여부를 판별하는 검사를 남겨 두었습니다.** If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

### 해결책

이 벽돌은 Wii 메뉴 업데이트 이후에 자주 발생하므로 Priiloader는 존재하지 않습니다. Priiloader가 존재하는 경우 이전 Wii 시스템 메뉴를 설치하거나 KoreanKii 홈브류 앱으로 키를 제거하면 간단히 해결할 수 있습니다.

한국어 Wii도 Wii 메뉴 3.3과 함께 출시되었는데, 이는 닌텐도가 [boot1에서 Trucha 버그를 수정한](https://wiibrew.org/wiki/3.3#Changes) 무렵이었습니다. 따라서 BootMii를 Boot2로 사용하는 것은 더 이상 한국어 Wii에 설치하거나 사용할 수 없습니다.

이로 인해 Wii는 특히 위험한 상황에 처하게 되지만 **여전히 고칠 수는 있습니다.** 여기에는 [복원 모드](recovery-mode)로 전환하는 것이 포함되며, 이 모드에서는 홈브류 채널에 접속하여 벽돌을 발생시킨 조건을 되돌리기 위한 익스플로잇이 트리거될 수 있습니다. 이 방법을 사용하려면 드라이브칩이 필요합니다.

## IOS 벽돌

### 증상

이 벽돌은 IOS를 통한 Wii 메뉴 오류로 인해 낮은 수준 벽돌과 동일하게 보입니다. 그러나 전체적인 낮은 수준 낸드 손상이나 낮은 수준 하드웨어 오류는 없습니다.

### 원인

이 문제는 Wii 메뉴의 IOS가 [스텁](http://wiibrew.org/wiki/Stub_IOS)이거나 콘솔에 잘못된 종류의 IOS가 설치된 경우 가장 자주 발생합니다. 스텁된 시스템 메뉴 IOS는 일반적으로 Wii 메뉴를 다운그레이드하려고 시도한 결과입니다. Wii 미니에 일반 IOS80을 설치한 후에 이 오류가 발생하면 [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다.

### 해결책

이 문제를 해결하려면 BootMii를 boot2로 설정해야 합니다.

낸드 백업을 복원하거나 다음 작업을 수행할 수 있습니다:

1. [NUS 다운로더](https://wiibrew.org/wiki/NUSD)를 사용하여 원래 Wii 메뉴의 WAD를 압축합니다.
2. BootMii를 사용하여 홈브류 채널에 들어가고, WAD 매니저를 사용하여 Wii 메뉴 WAD를 설치합니다.

vWii의 경우 [vWii IOS/채널 복원](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)를 참조합니다.

## Wi-Fi 벽돌

### 증상

This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

### 원인

이 문제는 Wii의 Wi-Fi (또는 블루투스) 모듈이 손상되었거나 제대로 연결되지 않았을 때 발생합니다. 이런 경우, Wii는 IOS에서 응답을 기다리는 동안 검은색 화면만 출력합니다.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

### 해결책

이 문제를 해결하려면 Wi-Fi/블루투스모듈을 다시 장착하거나 교체합니다.

If you are on a Wii mini, you must install a Wi-Fi module.

두 가지 모두 실패하면 [낮은 수준 벽돌](bricks#low-level-brick)을 참조합니다.

## 낮은 수준 벽돌

### 증상

완전히 검은색 화면이며 사용자 입력에 대한 응답이 없습니다. 복원 모드는 부팅할 수 없고, BootMii도 boot2로 부팅할 수 없습니다. (아니면 처음부터 존재하지 않았을 수도 있음) 모든 의도와 목적상 콘솔이 죽은 것으로 보입니다.

### 원인

This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

### 해결책

먼저, 하드웨어에 문제가 있는지 확인하기 위해 문제 해결을 수행해야 합니다. 나열된 순서대로 다음을 수행하세요:

- 다음 단계를 시도하기 전에 Wii가 실제로 여전히 작동하는지(디스크를 정상적으로 받아들이고, 올바르게 회전하고, 윈모트가 연결되는지) 테스트합니다. 이 경우 비디오만 표시되지 않으면 비디오 케이블이 불량이거나 비디오 포트 또는 GPU에 매우 드물게 오류가 발생했을 수 있습니다.
- Wii 미니에 일반 IOS80이 설치되어 있는 경우 [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다. Wi-Fi 벽돌 문제 해결 단계가 실패하면 계속 진행합니다.
- [복원 모드](recovery-mode)로 부팅을 시도합니다. (일반 Wii에만 해당) Wii가 복원 모드로 부팅되면 [Wi-Fi 벽돌](bricks#wi-fi-brick) 또는 [IOS 벽돌](bricks#ios-brick)을 참조합니다. Wi-Fi 또는 IOS 벽돌이 발생하는 문제를 해결하는 단계가 실패하면 계속 진행합니다.
- 디스크 드라이브를 다시 연결하고 정상적으로 부팅을 시도합니다. 여전히 실패하면 디스크 드라이브를 교체합니다. 여전히 실패하면 계속 진행합니다.
- 이 시점에서는 낮은 수준 boot0/boot1 손상, 낸드 칩 오류 또는 더 광범위한 알려지지 않은 하드웨어 오류가 발생한 것입니다. 온라인 도움말을 참조하거나 다른 Wii를 구입하는 것을 고려합니다.

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
