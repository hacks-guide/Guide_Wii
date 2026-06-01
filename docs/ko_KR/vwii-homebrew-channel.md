# Installing the Homebrew Channel on vWii

This page will guide you through the process of installing the Homebrew Channel onto the vWii menu.

::: info

You can use the same SD Card that you initially used to mod your Wii U for this process.

:::

::: warning

If you haven't already, make sure you created a [NAND backup](https://wiiu.hacks.guide/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

If you do not have Aroma installed, proceed to [Installing Aroma](https://wiiu.hacks.guide/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper).

:::

## 요구 사항

- A Wii U
- The [Aroma Environment](https://aroma.foryour.cafe/) (should be installed from previous step)
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`) (should be installed from previous step)
- The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`) (optional)

::: danger

If the evWii Aroma plugin is not installed and a homebrew app crashes/hangs, the only way to shut off the Wii U is by pulling the power cord. In some cases, pulling the power cord can cause memory corruption; therefore, it is highly recommended to have the plugin installed.

:::

## 지침

### 섹션 I - 파일

1. Wii U의 SD 카드를 PC에 연결합니다.
2. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
3. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
4. SD 카드를 Wii U에 다시 연결하세요.

### Section II - Booting into Aroma

Next steps will differ based on whether or not your Wii U is configured to [autoboot into Aroma](https://wiiu.hacks.guide/aroma/autobooting). If you can see the vWii Compat Installer upon booting your Wii U, you are in the Aroma environment and should [proceed to Section III](#section-iii---installing-the-homebrew-channel). Otherwise, use the below two methods to boot into Aroma.

#### Procedure for Wii Us with PayloadLoader

If you have previously modded your Wii U and have [PayloadLoader installed](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), you should be able to launch the Health and Safety Information App to load into the Aroma environment.

#### Procedure for Wii Us without PayloadLoader

::: warning

If you get any errors like FSOpenfile failed, FSGetMountSource failed, or SD Mount failed, refer to the browser errors in [Common Issues and Fixes](https://wiiu.hacks.guide/common-issues-fixes.html).

:::

If you DO NOT have [PayloadLoader installed](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), you will need to utilize the browser exploit to launch into the Aroma environment. For users that would like to forego fully modding their Wii U, follow these steps.

1. 인터넷 브라우저를 실행하고 `wiiuexploit.xyz` 웹사이트로 이동합니다.

   ![](/images/vwii/exploit/browser-exploit.png)

2. Click on `Run Exploit!` and hold the X button until you see the EnvironmentLoader. Once you are inside the EnvironmentLoader, select `aroma` to launch the Aroma environment.

   - Wii U의 화면이 흰색이나 멈춘 상태로 멈춘 경우, 몇 초간 기다려 봅니다. 아무 일도 일어나지 않으면 콘솔을 재부팅하고 [브라우저 저장 데이터를 재설정](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history)한 다음 다시 시도합니다.
   - If you see a `Please choose your payload` screen, you should try again and ensure that you are holding `X` long enough. Do not hold the `B` button.

   ![](/images/vwii/exploit/environment-loader.png)

3. If you get a warning message about the update folder existing, press the `X` button to block updates and proceed.

   ![](/images/vwii/exploit/update-warning.png)

4. In the Boot Selector, press `A` to launch the Wii U Menu.

   ![](/images/vwii/exploit/boot-selector.png)

### Section III - Installing the Homebrew Channel

::: tip

On Step 3, if the HOME button doesn't work, or causes you to freeze on a solid color screen, you can safely power off the console by holding down the power button on your console. Then, turn the console back on and proceed as normal.

:::

1. Launch the vWii Compat Installer app from the Wii U Menu.

   ![](/images/vwii/exploit/compat-install-launch.png)

2. Press `A` to install the Homebrew Channel.

   ![](/images/vwii/exploit/compat-install-pending.png)

3. Allow the Homebrew Channel to install, until you see `Install succeeded!`. Once installation has finished, press the HOME button to return to the Wii U Menu.

   ![](/images/vwii/exploit/compat-install-success.png)

4. vWii (Wii 메뉴 아이콘)를 실행합니다.

   ![](/images/vwii/launch-vwii.png)

5. If the installation has succeeded, you should now see the Homebrew Channel in your Wii Menu.

   ![](/images/vwii/exploit/vwii-hbc-installed.png)

## Required Reading for Homebrew Management

이제 홈브류 채널을 사용하여 Wii 홈브류 앱을 실행할 수 있습니다.

참고: SD 카드나 USB 드라이브에 Wii 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```shell
💾 SD Card
 ┗ 📁 apps
   ┣ 📁 AppName1
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 AppName2
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1`과 `AppName2`는 플레이스홀더 이름입니다. `apps` 폴더 자체 내에 여러 개의 `apps` 폴더를 중첩하지 마세요.

Please note that the `apps` folder inside of the `wiiu` folder (for Wii U homebrew apps) and the `apps` folder on the root of the SD card (for Wii homebrew apps) are distinct.

---

::: tip

[Priiloader 설치](priiloader)를 계속합니다.

Although BootMii cannot be installed on vWii, Priiloader adds a crucial level of brick protection, and is highly recommended to install.

:::
