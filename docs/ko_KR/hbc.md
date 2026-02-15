::::: tabs

:::: tab Wii

# 홈브류 채널과 BootMii 설치

:::details 기술 세부사항 (선택 사항)

BootMii는 두 가지 방법으로 설치할 수 있습니다: boot2라고 불리는 Wii 부트로더에 직접 설치하거나, ​​IOS를 통해서 설치하는 방법입니다. boot2에 속하는 BootMii는 확장된 벽돌 방지 기능을 제공하므로 선호되지만, 이 설치가 가능한 취약한 boot1이 있는 Wii는 2009년 이전에 제조되어 훨씬 드뭅니다. 대부분의 경우, [Priiloader](priiloader)도 설치한다면 BootMii를 IOS로 설치하는 것만으로 문제가 없습니다.

:::

::: warning

SD 카드가 없으면 BootMii를 설치하거나 사용할 수 없습니다. 이는 IOS나 boot2로 설치하더라도 마찬가지입니다.

[나중에 언제든지 설치](hackmii)할 수 있습니다.

:::

## 지침

1. 콘솔의 전원이 켜져 있어야 하며 가이드의 이전 부분에서 설명한 HackMii 설치 프로그램이 표시되어야 합니다.

   - 사기 경고 화면이 나타납니다.

   ![](/images/hackmii/scam.png)

2. "계속하려면 1 버튼을 누르세요"라는 텍스트가 나타날 때까지 30초간 기다린 다음, 1 버튼을 누릅니다.

3. `계속`을 선택합니다.

   ![](/images/hackmii/test_results.png)

4. `홈브류 채널 설치`를 선택합니다.

   ![](/images/hackmii/hbc_install.png)

5. 완료되면 `계속`을 선택합니다.

   ![](/images/hackmii/hbc_install_ok.png)

6. `BootMii...` 선택합니다.

   ![](/images/hackmii/bootmii_install.png)

7. `BootMii를 IOS로 설치`를 선택합니다.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. 완료되면 `계속`을 선택합니다.

9. `BootMii를 boot2로 설치` 옵션이 있는 경우 해당 옵션도 선택합니다.

   ![](/images/hackmii/bootmii_install4.png)

10. '메인 메뉴로 돌아가기'를 선택한 다음 '나가기'를 선택하세요.

11. 콘솔이 홈브류 채널로 부팅됩니다.

    ![](/images/hbc/blank.png)

## 필수 읽기

이제 홈브류 채널을 사용하여 홈브류 앱을 실행할 수 있고, BootMii를 설치한 경우 낸드를 백업하고 복원할 수도 있습니다.

참고: SD 카드나 USB 드라이브에 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```
💾 SD 카드 또는 USB 드라이브
| ╸📁 apps
	| ╸📁 AppName1
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
	| ╸📁 AppName2
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
```

`AppName1`과 `AppName2`는 플레이스홀더 이름입니다. `apps` 폴더 자체 내에 여러 개의 `apps` 폴더를 중첩하지 않습니다.

### Wii: 다음 단계

::: tip

[BootMii를 사용하여 NAND 백업을 계속 진행하기](bootmii)

이 시점에서 낸드 백업을 하는 것이 좋습니다. 이는 벽돌에서 복구하는 데 사용할 수 있기 때문입니다.

:::

::: tip

팁: Wii에 BootMii가 boot2로 설치되어 있으면, POWER 버튼을 눌렀을 때 발생하는 즉각적인 깜빡임 후 디스크 드라이브가 매우 짧게 깜빡입니다.

:::
::::

:::: tab Wii mini

# 홈브류 채널

:::details 기술 세부사항 (선택 사항)

홈브류 채널은 홈브류 응용 프로그램을 실행할 수 있는 곳입니다.

:::

::: warning

Wii 미니에 BootMii를 설치하는 것은 가능하지만, SD 카드 슬롯을 납땜해야 합니다. 이를 위해서는 Wii 미니를 열고 특수 도구를 사용해야 하므로 추천하지 않습니다.

:::

## 지침

1. 콘솔의 전원이 켜져 있어야 하며 가이드의 이전 부분에서 설명한 HackMii 설치 프로그램이 표시되어야 합니다.

   - 사기 경고 화면이 나타납니다.

   ![](/images/hackmii/scam.png)

2. "계속하려면 1 버튼을 누르세요"라는 텍스트가 나타날 때까지 30초간 기다린 다음, 1 버튼을 누릅니다.

3. `계속`을 선택합니다.

   ![](/images/hackmii/test_results.png)

4. `홈브류 채널 설치`를 선택합니다.

   ![](/images/hackmii/hbc_install.png)

5. 완료되면 '계속' 선택

   ![](/images/hackmii/hbc_install_ok.png)

6. `나가기`를 선택합니다.

7. 콘솔이 홈브류 채널로 부팅됩니다.

   ![](/images/hbc/blank.png)

## 필수 읽기

이제 홈브류 채널을 사용하여 홈브류 앱을 실행할 수 있습니다.

참고: USB 드라이브에 홈브류 애플리케이션을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```
💾 USB 드라이브
| ╸📁 apps
	| ╸📁 App이름1
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
	| ╸📁 App이름2
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
```

`AppName1`과 `AppName2`는 플레이스홀더 이름입니다. `apps` 폴더 자체 내에 여러 개의 `apps` 폴더를 중첩하지 않습니다.

::: tip

### Wii 미니: 다음 단계

::: tip

[RealWnd를 이용한 NAND 백업 제작 계속하기](wnd-mini)

이 시점에서 낸드 백업을 하는 것이 좋습니다. 이는 벽돌에서 복구하는 데 사용할 수 있기 때문입니다.

:::
::::
