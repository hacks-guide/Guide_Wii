---
outline: false
---

# 홈브류 채널과 BootMii 설치

<br>

::::: tabs

:::: tab Wii

## Homebrew Channel and BootMii Installation for Wii

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

SD 카드가 없으면 BootMii를 설치하거나 사용할 수 없습니다. 이는 IOS나 boot2로 설치하더라도 마찬가지입니다.

[나중에 언제든지 설치](hackmii)할 수 있습니다.

:::

:::details Disclaimer for BootMii with boot2

BootMii can be installed in two ways: via IOS, or directly to a part of the Wii bootloader called boot2. If possible, it is urged to install as boot2 as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader). If you DO have the option to install as boot2, you should install both boot2 and IOS as instructed below so that you can launch BootMii in ways other than starting the console.

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

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

### Post-Installation Info

이제 홈브류 채널을 사용하여 홈브류 앱을 실행할 수 있고, BootMii를 설치한 경우 낸드를 백업하고 복원할 수도 있습니다.

참고: SD 카드나 USB 드라이브에 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```shell
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

`AppName1`과 `AppName2`는 플레이스홀더 이름입니다. `apps` 폴더 자체 내에 여러 개의 `apps` 폴더를 중첩하지 않습니다.

### 자동 부팅

BootMii를 boot2로 설치할 수 있었지만 Wii를 켤 때마다 BootMii 화면을 불러오고 싶지 않다면 시스템 메뉴로 자동 부팅하도록 설정할 수 있습니다. This will restore your console behavior to booting to the system menu instaed of to BootMii.

1. Open `SD:/bootmii/bootmii.ini` with a text editor.
2. `#`을 삭제하여 `#AUTOBOOT=SYSMENU`를 `AUTOBOOT=SYSMENU`로 변경합니다.
3. 그런 다음 `#`을 삭제하고 `5`를 `1`로 바꿔서 `#BOOTDELAY=5`를 `BOOTDELAY=1`로 변경합니다.
4. 파일을 저장하고 종료합니다.

::: info

Wii에서 [BootMii 구성 편집기](https://oscwii.org/library/app/BootMiiConfigurationEditor) 앱을 사용하여 이러한 설정을 변경할 수도 있습니다.

:::

---

::: tip

[Continue to making a NAND Backup](nand-backup)

이 시점에서 낸드 백업을 하는 것이 좋습니다. 이는 벽돌에서 복구하는 데 사용할 수 있기 때문입니다.

:::

::::

:::: tab Wii mini

## Homebrew Channel Installation for Wii mini

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

::: warning

Wii 미니에 BootMii를 설치하는 것은 가능하지만, SD 카드 슬롯을 납땜해야 합니다. 이를 위해서는 Wii 미니를 열고 특수 도구를 사용해야 하므로 추천하지 않습니다.

:::

### 지침

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

### 필수 읽기

이제 홈브류 채널을 사용하여 홈브류 앱을 실행할 수 있습니다.

참고: USB 드라이브에 홈브류 애플리케이션을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```shell
💾 USB Drive
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

---

::: tip

[Continue to making a NAND Backup](nand-backup)

이 시점에서 낸드 백업을 하는 것이 좋습니다. 이는 벽돌에서 복구하는 데 사용할 수 있기 때문입니다.

:::

::::

:::::
