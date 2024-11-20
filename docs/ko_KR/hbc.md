# 홈브류 채널과 BootMii 설치

:::details Technical Details (optional)

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. In most cases, installing BootMii as IOS should be fine, as long as you also install <a href="priiloader">Priiloader</a>. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

SD 카드가 없는 경우 BootMii를 설치하거나 사용할 수 없으므로 언급된 혜택을 이용할 수 없습니다.
You can always [install it later](hackmii).

:::

## Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - 스캠 경고 화면이 표시됩니다.

   ![](/images/hackmii/scam.png)

2. "계속하려면 1 버튼을 누르세요"라는 텍스트가 나타날 때까지 30초간 기다린 다음 1버튼을 누릅니다.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Back`, then select `BootMii`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Select `Exit`.

11. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

## 필수 읽기

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

한 가지 팁을 알려드리자면, SD 카드나 USB 드라이브에 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```
💾 SD Card or USB Drive
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

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

팁: 디스크 드라이브가 매우 짧게 깜박이고 전원 버튼을 눌렀을 때 즉시 깜박이면 Wii에 BootMii가 boot2로 설치되어 있는지 알 수 있습니다.

:::
