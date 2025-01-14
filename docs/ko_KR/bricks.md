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
- Wii starts, you see the health/warning screen, but upon pressing A to start, you see a black screen.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- Wii starts, and you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. See [mail brick](bricks#mail-brick).
- Wii starts, BUT you INSTANTLY see an error that resembles the Opera web browser. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Error 003. See [Korean Kii/Error 003 brick](bricks#koreankii-error-003-brick).
- 아무 일도 일어나지 않고 검은색 화면만 나오지만 BootMii는 boot2로 접속 가능합니다. [IOS 벽돌](bricks#ios-brick)을 참조합니다.
- 아무 일도 일어나지 않고 검은색 화면만 나오지만 Wii 리모컨으로 Wii를 켤 수 있고 복구 모드에 접근할 수 있습니다. [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다.
- 아무 일도 일어나지 않고 검은색 화면만 나옵니다. Wii 리모컨으로 Wii를 켤 수 없고, 복구 모드를 시작할 수 없으며, BootMii를 boot2에 접근할 수 없습니다. [저수준 벽돌](bricks#low-level-brick)을 참조합니다.

# 벽돌 유형

여기에서는 다양한 Wii 벽돌에 대해 심각도 순으로 논의하며, 증상, 원인, 해결책을 설명하겠습니다.

## 반벽돌

### 증상

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### 원인

A semibrick occurs when a different region Wii Menu or a different region custom theme is installed. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### 해결책

Verify in AnyRegion Changer that your console region is the same as the theme or Wii Menu that you have installed.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

Be cautious when downloading the Wii Menu WAD. Make sure to pick the same version with the corrected region.

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Banner brick

### 증상

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a WAD and rebooting, or returning to the Wii Menu. Alternatively, the Wii Menu can still be accessed, but opening the corrupt channel results in the console freezing. In some cases, you may see the "System files are corrupted" screen.

![](/images/bricks/sysfiles-corrupted.jpg)

### 원인

Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

### 해결책

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick

### 증상

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. This happened after installing a theme.

### 원인

A theme brick occurs when a wrongly formatted theme is installed.

### 해결책

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

### 증상

Attempt to start the Wii - warning/press A screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. Maintenance mode is still accessible.

### 원인

A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

### Solution

By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii Menu/Opera brick

### 증상

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### 원인

This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![](/images/bricks/sysmenu-brick.png)

### 해결책

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

### 증상

Screen shows up as listed below on normal boot.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### 원인

When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

### 해결책

Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Note that you must have a drivechip in order for this method to work.

## IOS brick

### 증상

This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

### 원인

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### 해결책

You must have BootMii as boot2 to fix this.

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Wi-Fi brick

### 증상

This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

### 원인

This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

### 해결책

To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

### 증상

Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

### 원인

This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

### 해결책

First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

- Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
- At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

::: tip

[여기를 눌러 사이트 탐색으로 돌아갑니다](site-navigation)

:::
