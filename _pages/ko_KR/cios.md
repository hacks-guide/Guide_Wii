---
title: "cIOS"
---

{% include toc title="목차" %}

While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 이제 [USB Loader GX](usbloadergx) 및 [WiiFlow](wiiflow)와 같은 홈브류를 사용할 수 있습니다. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

Wii 미니가 있다면, [이 cIOS](cios-mini)를 대신 설치합니다. Wii 미니에 다른 cIOS를 설치하려고 시도하면 작동하지 않습니다.
{: .notice--warning}

### 필요한 것

* Wii
* SD 카드 또는 USB 드라이브
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.
{: .notice--warning}

### 진행 방법

#### 섹션 I - 다운로드

If your Wii has an Internet connection, you may skip this section.
{: .notice--warning}

If you are not on Windows, you may download & run [this script](/assets/files/d2x_offline_ios.sh), and it will download the WAD files for you.
{: .notice--info}

1. 콘솔의 전원을 꺼 주세요.
1. Insert your SD card or USB drive into your computer.
1. [NUS 다운로더](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)를 다운로드하여 압축 해제하고 실행합니다.
1. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
1. Run `NUS Downloader.exe`.
1. "데이터베이스", "IOS", "IOS38"을 차례로 선택한 다음 "v4123"을 선택합니다.
    + "Pack WAD"가 선택되어 있는지 확인합니다.
    + "IOS 패치"를 체크하지 *마세요*. 이것이 바로 cIOS 설치 프로그램의 역할입니다.
1. Click `Start NUS Download!`.
1. Repeat the step 2 & 3 for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
1. Once you have downloaded all four IOS, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. <br/> Open the folder and navigate through them until you locate the four WAD files you downloaded.
1. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 d2x cIOS 설치 프로그램을 실행합니다.
    + 이 장치는 d2x cIOS 설치 프로그램이 포함된 동일한 장치여야 합니다.

The WAD files should be on your SD card like this: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### 섹션 II - 설치하기


1. d2x cIOS 설치 프로그램을 다운로드하고 압축 파일을 SD 카드 또는 USB 드라이브의 루트에 압축 해제합니다.
1. Reinsert your SD card or USB drive into your console.
1. 콘솔의 전원을 켜 주세요.
1. Homebrew Channel을 실행해 주세요.
1. d2x cIOS 설치 프로그램
1. Set everything to match the following:

    ```
    cIOS 선택: d2x-v11-beta1
cIOS 베이스 선택: 38
cIOS 슬롯 선택: 248
cIOS 버전 선택: 65535
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + Install cIOS 249

        ```
        cIOS 선택: d2x-v11-beta1
cIOS 베이스 선택: 56
cIOS 슬롯 선택: 249
cIOS 버전 선택: 65535
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Install cIOS 250

        ```
        cIOS 선택: d2x-v11-beta1
cIOS 베이스 선택: 57
cIOS 슬롯 선택: 250
cIOS 버전 선택: 65535
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Install cIOS 251

        ```
        cIOS 선택: d2x-v11-beta1
cIOS 베이스 선택: 58
cIOS 슬롯 선택: 251
cIOS 버전 선택: 65535
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

[Continue to the Homebrew Browser](hbb)<br> The Homebrew Browser is a good place to get homebrew on your Wii. 설치는 선택 사항입니다.
{: .notice--info}
