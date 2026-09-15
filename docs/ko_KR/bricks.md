# 벽돌

A brick is a damaged device that can no longer function; in other words, something that becomes "as useful as a brick".

벽돌 현상은 다양한 이유로 발생할 수 있지만 일반적으로는 소프트웨어가 손상되거나 홈브류에서 부적절하게 수정한 경우 발생합니다.

## 벽돌 방지

Bricks can best be prevented by educating yourself on the common risks that lead to them. Here are the general recommendations of the most common risks, and why you should avoid them:

|                          Brick Risk                         |                                                                                                                                                                                                                                                                                       Explanation                                                                                                                                                                                                                                                                                       |
| :---------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|           Following video guides or old tutorials           |                                                                                     As stated on the home page of this website, this is risky because video guides are most often not updated once uploaded and can be several months or years out of date with contemporary recommendations. Old tutorials have the same issue to a lesser extent; they are usually out of date. Do not follow either unless explicitly recommended by a developer.                                                                                    |
|     Use convenience modding software like `Pimp My Wii`     |                                                                     Modding software like `Pimp My Wii` is intended to make console modification easy, but they are ultimately a **dangerous black box**. They often make breaking, unnecessary changes to your console to accomplish a simple objective, and can render your console unusable. We hold that ModMii is an **exception** to this as it is open source, tested, and ultimately vetted by guide staff.                                                                     |
|              Install IOS packs like `DARKCORP`              |                                                                                IOS packs are a concept that have been outdated for years, as they overwrite crucial IOS on your console with cIOS. They are wholly unsupported and incompatible with this guide as can cause several unexplainable issues, such as the Homebrew Channel being upside down. If you need to fix a console with an IOS pack, see [ModMii](modmii#hackmii-solutions-wizard).                                                                                |
|         Restoring NAND backups from another console         |                This will immediately and likely **irreversibly** brick your Wii. Your NAND has unique AES/HMAC keys that are hardcoded to your console. By installing another console's NAND backup, the Wii's hardware will be unable to verify the authenticity of your NAND. As a result, it will halt and refuse to start up. If you have a NAND backup for your console that is nonfunctional, use the [factory reset](wii-factory-reset) guide to create a functional, blank NAND.                |
|          Installing IOS designed for another system         |                                                                      This will result in a brick in the worst case scenario and is best avoided. The best example is installing a Wii IOS on a Wii mini; the Wii mini was designed without a Wi-Fi card. If you install a Wii IOS on the console, it will check for the presence of a Wi-Fi card and find none. As a result, it will hang and create the aformentioned [Wi-Fi brick](#wi-fi-brick).                                                                     |
|             Changing console region erroneously             |                                                                                   Region locks can be easily bypassed via software like [Priiloader](priiloader), as such, there is often no reason to region change your console. If you choose to, you must exercise **extreme caution** as the process can render your Wii unusable if you do not know what you are doing; especially if you use region changers for the Wii on a vWii or Wii mini, or vice versa.                                                                                   |
|            Installing updates for another region            | Going in-hand with console region changes, there is often no reason to do this. In the worst case, it can result in a [Korean Kii/Error 003](bricks#koreankiierror-003-brick) brick, which will likely render your console unusable. You are highly advised to run [SysCheck](syscheck) on your console if you plan to make any version changes, such that you can determine its original region. Seek support using instructions at the bottom of the page if you are attempting to apply updates to a Korean console. |
|         Using non-RCE patched Nintendo WFC services         |                                                                                                                   We only recommend using the WFC services provided in the [Nintendo WFC](nintendowfc) guide as they are known to be patched against RCE (remote code execution) exploits for the Wii. Other services are not patched against RCE, which could allow bad actors on their servers to brick your Wii.                                                                                                                  |
| Modifying system files, or installing old Wii Menu versions |                                                                                                                      This is almost always unnecessary. We highly recommend doing these tasks in Dolphin if you are curious, instead of attempting it on a real console. Attempting to do this will likely render your console unusable via an [IOS brick](#ios-brick) if you are not aware of what you are doing.                                                                                                                      |
|                 Installing unknown homebrew                 |                                                                                  Homebrew is created by real people for many different reasons. There have been previous incidents of malicious homebrew created for the Wii, although it is highly unlikely you would find this software. We advise that you source homebrew from the [Open Shop Channel](osc) as submitted homebrew is vetted for safety and held to a baseline standard of quality.                                                                                  |
|               Running dangerous homebrew apps               |                                                                                                                                  Homebrew can be dangerous not just because it is made maliciously, but because it makes dangerous changes to your Wii; this type of software should only be used by informed users. This includes homebrew like **AnyTitle Deleter**, **AnyRegion Changer**, **KoreanKii**, and more.                                                                                                                                  |
|                Install forwarders erroneously               |                                                                                                                                                                        Forwarders can cause a [banner brick](#banner-brick) if produced incorrectly. Be wary of what you install and always have [Priiloader](priiloader) installed to properly fix a banner brick if necessary.                                                                                                                                                                        |
|               Turning off console erroneously               |                                                                 Do not turn off your console during certain processes, such as restoring a BootMii NAND backup. We advise that you postpone plans to make dangerous changes to your Wii in the event of unstable electricity (e.g. through a storm, or during rolling blackouts). Power interruptions can lead to a [full brick](#low-level-brick) in the worst case.                                                                |

어떤 경우에도 반드시 다음을 수행해야 합니다:

- 가능하다면 BootMii를 boot2로 설치하고, 그렇지 않으면 IOS로 설치합니다.
- BootMii 설치 방법에 관계없이 Priiloader를 설치합니다.
- Backup your NAND with BootMii or nanddumper@ios and always have a valid spare copy on hand, but **especially** before attempting anything risky. Note that in some brick scenarios, and on some consoles, BootMii is not accessible; plan ahead accordingly.

## 진단

This is a section intended to help you diagnose a potential brick, in order by least to highest console functionality. If you seem to have a brick that isn't covered in this section or in the guide, please scroll to the bottom of the page for support instructions.

### Wii Boot Process

```ini
[   POWERON   ] 
       │
       │
       ▼
[    boot0    ]  ──► Reads, decrypts, and verifies boot1 hash. Rejects
       │             boot1 and does not boot if data does not match.
       │             (Stage 1 bootloader)
       ▼
[    boot1    ]  ──► Initializes memory. Reads, decrypts, and verifies
       │             boot2 hash. Rejects boot2 and does not boot if
       │             data does not match. Exploitable on early Wiis.
       │             (Stage 2 bootloader)
       ▼
[    boot2    ]  ──► Loads System Menu and IOS data, also loads
       │             GameCube (MIOS) mode. Can hold BootMii if
       │             boot1 has an exploitable hash algorithm.
       │             (Stage 3 bootloader)
       ▼
[ IOS/SysMenu ]
```

### Bricking Triage

The below table uses the following color coding for possible solutions:

🟩 - indicates fixable with no brick prevention software<br>
🟦 - indicates fixable with Priiloader and/or BootMii as IOS<br>
🟨 - indicates fixable with BootMii as boot2<br>
🟥 - indicates fixable with hardware modification

|                                       Brick Type                                      |                                                                                                                                           Functionality                                                                                                                                          |
| :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                     ⬛<br>No brick                                     |                                                                          Wii가 켜지고 Wii ​​메뉴로 이동합니다. No app is malfunctioning and Wii Settings is error free; there are no visible issues.                                                                         |
|                             🟩<br>[Semibrick](#semibrick)                             |                                                                                              You get an error that resembles the Opera web browser when accessing the Wii settings.                                                                                              |
|     🟩<br> [Banner brick (can access Wii menu)](#banner-brick)     |                                                                                             You get the message `The system files are corrupted` after accessing a specific channel.                                                                                             |
| 🟩 OR 🟦<br>[Banner brick (cannot access Wii menu)](#banner-brick) |                                                                     You see a black screen after pressing `A` to start on the Health and Safety screen. This happened after installing a WAD.                                                                    |
|                         🟩 OR 🟦<br>[Mail brick](#mail-brick)                         |        You see a black screen after pressing `A` to start on the Health and Safety screen. This happened at random, BUT you can access Maintenance Mode by holding `+` and `-` on the Health and Safety screen, after which it should start automatically.       |
|                           🟦<br>[Theme brick](#theme-brick)                           |                                                                           You see a black screen after pressing `A` to start on the Health and Safety screen. 이 문제는 테마를 설치한 후에 발생했습니다.                                                                           |
|                   🟦<br>[Wii Menu/Opera brick](#wii-menuopera-brick)                  |                                                                                                 Wii starts, but you instantly see an error that resembles the Opera web browser.                                                                                                 |
|                      🟨<br>[Error 003](#koreankiierror-003-brick)                     |                                                                                                      Wii starts, and you see the message `Error:003 unauthorized device has been detected.`                                                                                                      |
|                             🟨<br>[IOS brick](#ios-brick)                             |                                                                                Wii starts, and nothing happens; console remains on a black screen. BootMii as boot2 is accessible.                                                                               |
|                           🟥<br>[Wi-Fi brick](#wi-fi-brick)                           | Wii starts, and nothing happens; console remains on a black screen. Wii can be powered on with a Wiimote and Recovery Mode can be accessed. BootMii as boot2 is inaccessible. **Common on Wii mini after installing wrong IOS**. |
|                       🟥<br>[Low-level brick](#low-level-brick)                       |                     Wii starts, and nothing happens; console remains on a black screen. The console cannot be powered on with a Wiimote. Recovery mode cannot be accessed. BootMii as boot2 is inaccessible.                     |

## 벽돌 유형

여기에서는 다양한 Wii 벽돌에 대해 심각도 순으로 논의하며, 증상, 원인, 해결책을 설명하겠습니다.

### 반벽돌

::: details

#### 증상

Wii 설정으로 이동하려고 할 때 오페라 웹 브라우저에서 '현재 사용할 수 없는 주소(URL)에 접속하려고 했습니다.'와 같은 오류 메시지가 표시됩니다. 경우에 따라 Wii 설정 메뉴의 일부는 여전히 접속할 수 있지만 다른 부분 (예: 국가 설정 메뉴)은 접속할 수 없을 수도 있습니다.

#### 원인

반벽돌은 다른 지역의 Wii 메뉴나 다른 지역의 커스텀 테마가 설치되면 발생합니다. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a con**Description**

<!--What does this pull request do? Why is it needed?-->

sole brick.

![](/images/bricks/semibrick.png)

#### 해결책

AnyRegion Changer에서 콘솔 지역이 설치한 테마나 Wii 메뉴와 동일한지 확인합니다.

이 문제가 설치한 테마로 인해 발생한 경우, [csm-installer](themes)를 사용하여 원래 테마를 다시 설치하세요.

If this was caused by a Wii Menu WAD you installed, use [NUSGet](https://github.com/NinjaCheetah/NUSGet) to re-obtain your original Wii Menu. **Be cautious when downloading the Wii Menu WAD**. 지역에 맞는 동일한 버전을 선택했는지 확인하세요.

실제로 지역 변경 중이라면 [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases)를 사용하면 모든 지역 설정이 Wii 메뉴와 일치하도록 자동으로 수정됩니다.

:::

### 배너 벽돌

::: details

#### 증상

You attempt to start the Wii, the Health and Safety screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. 이 문제는 WAD를 설치하고 재부팅하거나 Wii 메뉴로 돌아온 후에 발생했습니다. 또는 Wii 메뉴에는 여전히 접근할 수 있지만, 특정 채널을 열려고 하면 콘솔이 멈춰버립니다. 어떤 경우에는 "System files are corrupted"라는 화면이 나타날 수 있습니다.

![](/images/bricks/sysfiles-corrupted.jpg)

#### 원인

잘못된 Wii 메뉴 배너나 아이콘이 있는 WAD 파일을 설치하면 배너 벽돌이 발생합니다.

#### 해결책

Wii 메뉴에 여전히 접근할 수 있다면, 홈브류 채널로 이동하여 [YAWM ModMii Edition](yawmme) 또는 현재 사용 중인 WAD 관리자를 사용하여 손상된 채널을 제거하세요.

Wii 메뉴에 접근할 수 없고 [Priiloader](priiloader)가 설치되어 있는 경우, Wii를 켜는 동안 RESET 버튼을 눌러서 진입합니다. 홈브류 채널을 선택하고 [YAWM ModMii Edition](yawmme) 또는 현재 사용 중인 WAD 관리자를 사용하여 손상된 채널을 제거하세요.

Priiloader가 없거나 접근할 수 없는 경우, 유지보수 모드를 시도해 보는 것도 좋습니다. 건강과 안전 화면에서 `+`와 `-` 버튼을 누릅니다. (`A`를 누르지 마세요!)

As a last resort, you may use [BlueBomb](bluebomb) to boot into the Homebrew Channel while idling at the Health and Safety screen.

:::

### 메일 벽돌

::: details

#### 증상

You attempt to start the Wii, the Health and Safety screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. 유지보수 모드는 여전히 이용 가능합니다.

#### 원인

메일 오류는 Wii에 처리할 수 있는 메일이 너무 많거나 Wii 메시지 게시판에 잘못된 형식의 메일이 있을 때 발생하며, 정상적인 부팅 과정에서 충돌을 일으킵니다. Wii 메시지 보드가 항상 Wii 채널 아래에 표시되기 때문에 Wii 메뉴가 완전히 로드되기 전에 오류가 발생합니다.

#### 해결책

경고 화면에서 +와 - 버튼을 동시에 누르면 Wii 메시지 보드가 전혀 표시되지 않는 유지보수 모드로 진입할 수 있습니다. 홈브류 채널이 설치되지 않은 경우 [Bluebomb](bluebomb)를 따릅니다.

여기에서 홈브류 채널을 로드하고 [cdbackup](https://oscwii.org/library/app/cdbackup)을 사용하여 Wii 메시지 보드 데이터를 삭제하면 문제가 해결됩니다.

:::

### 테마 벽돌

::: details

#### 증상

You attempt to start the Wii, the Health and Safety screen shows up, and when A is pressed, the screen passes normally; however, beyond this point, nothing happens and the Wii remains on a black screen. 이 문제는 테마를 설치한 후에 발생했습니다.

#### 원인

잘못된 형식의 테마가 설치되면 테마 벽돌이 발생합니다.

#### 해결책

이 문제를 해결하려면 Priiloader 또는 BootMii를 통해 홈브류 채널을 boot2로 실행하고 csm-installer에 접근하여 기본 Wii 메뉴 테마와 같은 기본 테마를 설치하세요. 또는 [YAWM ModMii Edition](yawmme)으로 가서 해당 지역 및 버전에 맞는 기본 Wii 메뉴 WAD를 설치합니다.

:::

### Wii 메뉴/오페라 벽돌

::: details

#### 증상

Wii를 켤 때마다 오페라 웹 브라우저에서 '현재 접속할 수 없는 주소(URL)에 접속하려고 했습니다.'와 같은 오류 메시지가 나타납니다. 이 오류는 Wii를 켤 때마다 발생하며, 다른 방법으로는 해결할 수 없습니다.

#### 원인

이 벽돌은 [반벽돌](#semibrick)의 더 치명적인 버전입니다. SYSCONF (시스템 구성 파일)가 손상되거나 손상되면 Wii는 해당 파일을 다시 생성하고 설정 단계를 시작합니다.

하지만 설정 페이지는 Wii 설정 페이지와 비슷한 위치에 있습니다. 잘못된 지역 Wii 메뉴나 테마가 있으면 Wii에서 해당 메뉴를 찾을 수 없습니다.

![](/images/bricks/sysmenu-brick.png)

#### 해결책

[Priiloader](priiloader)가 있다면, 이를 사용하여 홈브류 채널에 접속하고 원래 테마 파일/원래 Wii 메뉴를 다시 설치하세요.

Priiloader가 없거나 Wii에 개조가 적용되지 않은 경우 [BlueBomb](bluebomb)를 사용합니다.

또는 [복원 모드](recovery-mode)를 사용하여 수정을 시도할 수 있습니다.

:::

### KoreanKii/오류 003 벽돌

::: details

#### 증상

정상적으로 부팅하면 아래 나열된 화면이 나타납니다.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

#### 원인

닌텐도는 한국어 Wii를 출시할 때 홈브류를 막기 위한 마지막 수단으로 이들 장치의 암호화 키를 변경했습니다. 이것이 의도한 목표에는 실패했지만, 닌텐도는 시스템 메뉴 버전 4.2/4.3에 한국어 키가 한국어가 아닌 **시스템 소프트웨어 지역에 있는지 여부를 판별하는 검사를 남겨 두었습니다.** 이 검사가 성공하면 오류가 발생하고 Wii는 사실상 먹통이 됩니다.

이는 대개 지역 설정이 변경된 한국 Wii에서 Wii 시스템 업데이트 직후에 발생하는 문제입니다.

#### 해결책

이 벽돌은 Wii 메뉴 업데이트 이후에 자주 발생하므로 Priiloader는 존재하지 않습니다. Priiloader가 존재하는 경우 이전 Wii 시스템 메뉴를 설치하거나 KoreanKii 홈브류 앱으로 키를 제거하면 간단히 해결할 수 있습니다.

한국에서 출시된 Wii는 Wii 메뉴 3.3 버전과 함께 제공되었는데, 이는 닌텐도가 [boot1의 Trucha 버그를 수정](https://wiibrew.org/wiki/3.3#Changes)했던 시기와 거의 일치합니다. 따라서 BootMii as boot2는 어떤 한국 Wii에도 설치하거나 사용할 수 없습니다.

이로 인해 Wii는 특히 위험한 상황에 처하게 되지만 **여전히 고칠 수는 있습니다.** 여기에는 [복원 모드](recovery-mode)로 전환하는 것이 포함되며, 이 모드에서는 홈브류 채널에 접속하여 벽돌을 발생시킨 조건을 되돌리기 위한 익스플로잇이 트리거될 수 있습니다. 이 방법을 사용하려면 드라이브칩이 필요합니다.

:::

### IOS 벽돌

::: details

#### 증상

이 벽돌은 IOS를 통한 Wii 메뉴 오류로 인해 낮은 수준 벽돌과 동일하게 보입니다. 그러나 전체적인 낮은 수준 낸드 손상이나 낮은 수준 하드웨어 오류는 없습니다.

#### 원인

이 문제는 Wii 메뉴의 IOS가 [스텁](http://wiibrew.org/wiki/Stub_IOS)이거나 콘솔에 잘못된 종류의 IOS가 설치된 경우 가장 자주 발생합니다. 시스템 메뉴 IOS가 제대로 표시되지 않는 문제는 대개 Wii 메뉴를 다운그레이드하려고 시도한 결과입니다. Wii 미니에 일반 IOS80을 설치한 후에 이 오류가 발생하면 [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다.

#### 해결책

이 문제를 해결하려면 BootMii를 boot2로 설정해야 합니다.

낸드 백업을 복원하거나 다음 작업을 수행할 수 있습니다:

1. Use [NUSGet](https://github.com/NinjaCheetah/NUSGet) to pack a WAD of your original Wii Menu.
2. BootMii를 사용하여 홈브류 채널에 들어가고, WAD 매니저를 사용하여 Wii 메뉴 WAD를 설치합니다.

vWii의 경우, [vWii IOS/채널 복구](https://wiiu.hacks.guide/recover-vwii-ioses-channels)를 참조하세요.

:::

### Wi-Fi 벽돌

::: details

#### 증상

이 고장난 기기는 일반 고장난 기기와 외관상 동일해 보이지만, Wii 리모컨으로 Wii 전원을 켤 수 있고, 초기형 Wii에서는 [복구 모드](Recovery Mode)로 부팅할 수도 있습니다.

#### 원인

이 문제는 Wii의 Wi-Fi (또는 블루투스) 모듈이 손상되었거나 제대로 연결되지 않았을 때 발생합니다. 이런 경우, Wii는 IOS에서 응답을 기다리는 동안 검은색 화면만 출력합니다.

Wii 미니에는 Wi-Fi 모듈이 없기 때문에 일반 Wii iOS를 설치하면 동일한 문제가 발생합니다.

#### 해결책

이 문제를 해결하려면 Wi-Fi/블루투스모듈을 다시 장착하거나 교체합니다.

Wii 미니를 사용 중이라면 Wi-Fi 모듈을 설치해야 합니다.

두 가지 모두 실패하면 [낮은 수준 벽돌](bricks#low-level-brick)을 참조합니다.

:::

### 낮은 수준 벽돌

::: details

#### 증상

완전히 검은색 화면이며 사용자 입력에 대한 응답이 없습니다. [복구 모드](recovery-mode)로 부팅할 수 없으며, BootMii도 boot2로 부팅할 수 없습니다 (혹은 애초에 존재하지 않았습니다). 콘솔이 사실상 작동하지 않는 것으로 보입니다.

#### 원인

이 오류는 boot1/boot2가 손상되었거나 하드웨어 오류가 발생했을 때 나타납니다.

#### 해결책

먼저, 하드웨어에 문제가 있는지 확인하기 위해 문제 해결을 수행해야 합니다. 나열된 순서대로 다음을 수행하세요:

- 다음 단계를 시도하기 전에 Wii가 실제로 여전히 작동하는지(디스크를 정상적으로 받아들이고, 올바르게 회전하고, 윈모트가 연결되는지) 테스트합니다. 이 경우 비디오만 표시되지 않으면 비디오 케이블이 불량이거나 비디오 포트 또는 GPU에 매우 드물게 오류가 발생했을 수 있습니다.
- Wii 미니에 일반 IOS80이 설치되어 있는 경우 [Wi-Fi 벽돌](bricks#wi-fi-brick)을 참조합니다. Wi-Fi 벽돌 문제 해결 단계가 실패하면 계속 진행합니다.
- [복원 모드](recovery-mode)로 부팅을 시도합니다. (일반 Wii에만 해당) Wii가 복원 모드로 부팅되면 [Wi-Fi 벽돌](bricks#wi-fi-brick) 또는 [IOS 벽돌](bricks#ios-brick)을 참조합니다. Wi-Fi 또는 IOS 벽돌이 발생하는 문제를 해결하는 단계가 실패하면 계속 진행합니다.
- 디스크 드라이브를 다시 연결하고 정상적으로 부팅을 시도합니다. 여전히 실패하면 디스크 드라이브를 교체합니다. 여전히 실패하면 계속 진행합니다.
- 이 시점에서는 boot0/boot1의 하위 수준 손상, NAND 칩 오류 또는 더 광범위한 알 수 없는 하드웨어 오류가 발생했을 가능성이 있습니다. 온라인 도움말을 참조하거나 다른 Wii를 구입하는 것을 고려합니다.

:::

---

::: info

**Further Assistance**

Need more assistance? Join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask for help in English on the `#wii-vwii-assistance` channel, while noting that you came from this page and are trying to resolve a brick or other issue. Please provide the following information:

1. The exact error message or console state that you see, with a photo if applicable
2. The exact steps you took prior to the issue, as far as you remember
3. A [SysCheck](syscheck) log if possible to obtain
4. Whether or not you have a NAND backup available
5. Whether or not you installed Priiloader, BootMii as IOS, or BootMii as boot2
6. The specific model of console you are working with (Original Wii, Family Edition Wii, Wii mini, vWii on Wii U)

If your English isn't the best, use a translator such as [Google Translate](https://translate.google.com/) to submit your questions so that we can assist.

:::

---

[← Return to Site Navigation](site-navigation){.btn .btn-solid}
