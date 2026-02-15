---
outline: false
---

# cIOS

::::: tabs

:::: Wii/패밀리 에디션용 cIOS 탭

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

::: warning

Wii에 vWii/Wii 미니 IOS 또는 시스템 메뉴를 설치하려고 시도하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## 요구 사항

- 홈브류 채널이 설치된 Wii
- SD 카드 및 USB 드라이브
- [d2x cIOS 설치 프로그램](https://oscwii.org/library/app/d2x-cios-installer)

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## 지침

### 섹션 I - 다운로드

::: warning

Your browser or antivirus software may flag NUSGet as malware - this is a false positive. NUSGet does NOT contain any malware.

:::

::: info

Wii를 인터넷에 연결할 수 있다면 [섹션 II](cios#section-ii---installing)로 건너뛸 수 있습니다.

:::

1. Power off your console, and insert your SD card or USB drive into your computer.
2. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
3. Unzip the archive and run the NUSGet executable.
4. Navigate to `IOS` > `IOS 38` > `World` and select `v4123`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-4123.png)
5. Repeat the above step for `IOS 56 (v5661)`, `IOS 57 (v5918)` and `IOS 58 (v6175)`.
6. When you have finished downloading the above IOS, navigate to the folder where your NUSGet executable is stored. This should now contain four different folders with the title IDs for the above IOS.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)
7. Enter the four directories, locating a `IOS-XX-vXXXX-Wii.wad` file in each.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)
8. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 d2x cIOS 설치 프로그램을 실행합니다.
   - 이 장치는 d2x cIOS 설치 프로그램이 포함된 동일한 장치여야 합니다.
9. Ensure that each WAD file is named as listed below for compatibility purposes with d2x-cios-installer:

   |   IOS  |              File Name             |
   | :----: | :--------------------------------: |
   | IOS 38 | IOS38-64-v4123.wad |
   | IOS 56 | IOS56-64-v5661.wad |
   | IOS 57 | IOS57-64-v5918.wad |
   | IOS 58 | IOS58-64-v6175.wad |

::: info

WAD 파일은 다음과 같이 SD 카드에 있어야 합니다:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### 섹션 II - 설치하기

1. d2x-cios-installer `.zip` 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.

2. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

3. 콘솔의 전원을 켭니다.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. d2x cIOS 설치 프로그램

6. 다음 사항에 맞게 모든 것을 설정합니다:

   ```
   cIOS <d2x-v11-beta3> 선택
   cIOS 베이스 <38> 선택
   cIOS 슬롯 <248> 선택
   cIOS 리비전 <65535> 선택
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   `d2x-v11-beta3`이 보이지 않으면 B 버튼을 눌러 설치 프로그램을 종료하고 SD 카드가 잠금 해제되어 있는지 확인하세요.

   :::

   ::: info

   "`(c)IOS detected in slot ### will be overwritten`"라는 경고는 안전하게 무시할 수 있습니다.

   :::

   ::: info

   "`Slot ### already used in batch settings`" 또는 "`cIOS already added in batch with revision ##### and slot ###`"이라는 메시지가 표시되면 `-` 버튼을 눌러 일괄 모드를 비활성화합니다.

   (설치 프로그램을 종료하려는 경우 버튼은 홈 버튼이 아니라 B 버튼입니다.)

   :::

7. `A` 버튼을 누릅니다. 이렇게 하면 슬롯 맵으로 이동합니다:

   ![](/images/cios/d2x_summary.png)

8. `A` 버튼을 다시 누릅니다.

   ![](/images/cios/d2x_installation.png)

9. 설치가 완료되면 슬롯 맵으로 돌아가게 됩니다. 방금 설치된 슬롯이 녹색으로 강조 표시되었는지 확인합니다.

   ![](/images/cios/d2x_log.png)

   ::: info

   슬롯이 빨간색으로 표시되면 cIOS를 다시 설치해 보세요.

   다운로드 단계 전/중에 오류가 발생하는 경우 (예: `tcp_connect timeout`, `net_gethostbyname failed: ...`), B 버튼을 눌러 종료하고 [섹션 I](#section-i---downloading)부터 계속합니다.

   :::

10. `A` 버튼을 누릅니다. 구성 화면으로 돌아갑니다.

11. 다음 구성으로 이전 5 단계를 반복합니다:

    - cIOS 249 설치

      ```
      cIOS <d2x-v11-beta3> 선택
      cIOS 베이스 <57> 선택
      cIOS 슬롯 <250> 선택
      cIOS 리비전 <65535> 선택
      ```

      ![](/images/cios/d2x_v11_249.png)

    - cIOS 250 설치

      ```
      cIOS <d2x-v11-beta3> 선택
      cIOS 베이스 <57> 선택
      cIOS 슬롯 <250> 선택
      cIOS 리비전 <65535> 선택
      ```

      ![](/images/cios/d2x_v11_250.png)

    - cIOS 251 설치

      ```
      cIOS <d2x-v11-beta3> 선택
      cIOS 베이스 <58> 선택
      cIOS 슬롯 <251> 선택
      cIOS 리비전 <65535> 선택
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

섹션 I에서 WAD 파일 4 개를 다운로드한 경우 이제 SD 카드/USB 드라이브에서 해당 파일을 삭제할 수 있습니다.

:::

::: tip

[오픈샵 채널 설치를 계속 진행](osc)

이제 Wii가 적절한 벽돌 방지 기능을 갖추었으므로 Wii에서나 외부에서 모두 접속할 수 있는 홈브류의 신뢰할 수 있는 저장소인 오픈 샵 채널을 설치할 수 있습니다.

:::

::::

:::: vWii (Wii U)용 cIOS 탭

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

::: warning

vWii에 Wii/Wii 미니 IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- vWii에 홈브류 채널이 설치된 Wii U
- SD 카드 및 USB 드라이브
- [vWii용 d2x cIOS 설치 프로그램](https://oscwii.org/library/app/d2x-cios-installer-vwii)

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## 지침

### 섹션 I - 설치

1. D2x-cios-installer-vwii `.zip` 파일의 `apps` 폴더를 SD 카드 또는 USB 드라이브의 루트 폴더에 복사하세요.

2. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

3. 콘솔의 전원을 켭니다.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. d2x cIOS 설치 프로그램

6. 다음 사항에 맞게 모든 것을 설정합니다:

   ```
   cIOS <d2x-v11-beta3-vWii> 선택
   cIOS 베이스 <38> 선택
   cIOS 슬롯 <248> 선택
   ```

   ![](/images/cios/d2x_v11_248_vwii.png)

   ::: info

   `d2x-v11-beta3-vWii`가 보이지 않으면 B 버튼을 눌러 설치 프로그램을 종료하고 SD 카드가 잠금 해제되어 있는지 확인하세요.

   :::

7. 'A' 버튼을 눌러 설치하세요.

   ![](/images/cios/d2x_installation.png)

8. 다음 설정을 사용하여 이전 2단계를 반복하세요:

   - cIOS 249 설치

     ```
     cIOS <d2x-v11-beta3-vWii> 선택
     cIOS 베이스 <56> 선택
     cIOS 슬롯 <249> 선택
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - cIOS 250 설치

     ```
     cIOS <d2x-v11-beta3-vWii> 선택
     cIOS 베이스 <57> 선택
     cIOS 슬롯 <250> 선택
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - cIOS 251 설치

     ```
     cIOS <d2x-v11-beta3-vWii> 선택
     cIOS 베이스 <58> 선택
     cIOS 슬롯 <251> 선택
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to Finalizing Setup](vwii-finalizing-setup)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, you can proceed to restore functionality that is normally missing from a standard vWii menu.

:::

::::

:::: Wii 미니용 cIOS 탭

::: info

이 자습서와 관련하여 도움이 필요하면 [Wii 미니 해킹 디스코드 서버](https://discord.gg/6ryxnkS)에 가입하세요 (추천)

:::

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

이 d2x cIOS 설치 프로그램은 원래 DaveBaol이 Wii U의 vWii용으로 개발했으며, 커스텀 cIOS는 Leseratte가 Wii 미니용으로 만들었습니다. 원본 다운로드 페이지는 [여기](https://wii.leseratte10.de/d2xl-cIOS/)에서 찾을 수 있습니다. Leseratte의 깃허브 페이지는 [여기](https://github.com/Leseratte10/d2xl-cios)에서 찾을 수 있습니다. 이 cIOS는 아직 실험 단계이지만 기능에 대한 문제는 보고되지 않았습니다.

:::

::: warning

Wii 미니에 Wii/vWii IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- 홈브류 채널이 설치된 Wii 미니
- USB 드라이브
- [d2xl cIOS 설치 프로그램](/assets/files/d2xl-cios-installer-mini.zip)

## 지침

### 섹션 I - 다운로드

1. 콘솔의 전원을 끕니다.
2. USB 드라이브를 컴퓨터에 연결하세요.
3. d2xl-cios-installer-mini `.zip` 파일에서 `apps` 폴더를 USB 드라이브의 루트 폴더에 복사하세요.
4. USB 드라이브를 콘솔에 다시 연결합니다.
5. 콘솔의 전원을 켭니다.
6. Launch the Homebrew Channel, and launch the Load Priiloader app.
7. 홈브류 목록에서 d2xl cIOS Installer를 실행합니다.

### 섹션 II - 설치하기

1. `계속`을 선택합니다.
2. 계속을 누르고, 다음 옵션을 다음과 같이 설정합니다:

   ```
   cIOS 선택 <d2xl-v1-beta2>
   cIOS 기반 선택 <57>
   cIOS 슬롯 선택 <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - 메모란을 보시면 iOS 버전 번호가 `v31775` 또는 `v31776`으로 끝나는 것을 확인할 수 있습니다. `IOS57-64-v31775`는 NTSC (북미) 콘솔용이고, `IOS57-64-v31776`은 PAL (유럽) 콘솔용입니다. 사용하시는 콘솔에 맞는 버전 번호를 선택했는지 확인하세요.
3. 설정이 완료되면 A 버튼을 눌러 설치합니다.
   - 설치가 `TMD 버전 불일치` 오류로 실패할 경우, `cIOS 기반 선택` 옵션 위에서 +제어판의 왼쪽 또는 오른쪽을 눌러 버전 번호가 이전에 시도한 것과 다를 때까지 기다립니다. 숫자 57은 변경되지 않습니다.
4. 성공적으로 완료되면 설치 프로그램을 종료합니다.

::: tip

[Continue to Finalizing Setup](mini-finalizing-setup)

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::

::::

:::::
