# cIOS

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

## 요구 사항

::: warning

이 가이드는 Wii 사용자를 대상으로 합니다.

Wii U (vWii)가 있는 경우 대신 [이 가이드](cios-vwii)를 따릅니다.

Wii 미니가 있다면 대신 [이 가이드](cios-mini)를 따릅니다.

:::

- Wii
- SD 카드 및 USB 드라이브
- [d2x cIOS 설치 프로그램](/assets/files/d2x-cios-installer.zip)

## 지침

### 섹션 I - 다운로드

::: info

맥OS 또는 리눅스를 사용 중이라면 [이 스크립트](/assets/files/d2x_offline_ios.zip)를 다운로드하여 실행하면 WAD 파일이 다운로드됩니다.

:::

::: info

Wii를 인터넷에 연결할 수 있다면 [섹션 II](cios#section-ii---installing)로 건너뛸 수 있습니다.

:::

1. 콘솔의 전원을 끕니다.
2. Extract both apps to the root of your SD card or USB drive.
3. 컴퓨터에서 [NUS 다운로더](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)를 다운로드합니다.
4. NUS 다운로더 `.zip`에 있는 모든 파일을 컴퓨터의 폴더로 복사합니다.
5. `NUS Downloader.exe`를 실행합니다.
6. `데이터베이스` > `IOS` > `IOS38`로 이동한 다음 `v4123`을 선택합니다.
   - "Pack WAD"가 선택되어 있는지 확인합니다.
   - "IOS 패치"를 _체크하지 마세요._ 이것이 바로 cIOS 설치 프로그램의 역할입니다.
7. `NUS 다운로드 시작!`을 클릭합니다.
8. `IOS56 v5661`, `IOS57 v5918`, `IOS58 v6175`에 대해 위의 단계를 반복합니다.
9. 프로세스가 완료되면 NUS 다운로더와 같은 폴더에 `titles`라는 폴더가 생성됩니다.
10. `titles` 폴더를 열고 다운로드한 4개의 WAD 파일을 찾을 때까지 탐색합니다.
11. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 d2x cIOS 설치 프로그램을 실행합니다.
    - 이 장치는 d2x cIOS 설치 프로그램이 포함된 동일한 장치여야 합니다.

::: info

WAD 파일은 다음과 같이 SD 카드에 있어야 합니다:

![](/images/cios/d2x_offline_ios.png)

:::

### 섹션 II - 설치하기

1. d2x-cios-installer `.zip` 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.

2. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

3. 콘솔의 전원을 켭니다.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. d2x cIOS 설치 프로그램

6. 다음 사항에 맞게 모든 것을 설정합니다:

   ```
   cIOS 선택 <d2x-v11-beta2>
   cIOS 기반 선택 <38>
   cIOS 슬롯 선택 <248>
   cIOS 리비전 선택 <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   `d2x-v11-beta2`이 보이지 않으면 B 버튼을 눌러 설치 프로그램을 종료하고 SD 카드가 잠금 해제되었는지 확인합니다.

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

   슬롯이 빨간색으로 강조 표시되면 cIOS를 다시 설치합니다.

   다운로드 단계 전/중에 오류가 발생하는 경우 (예: `tcp_connect timeout`, `net_gethostbyname failed: ...`), B 버튼을 눌러 종료하고 [섹션 I](#section-i---downloading)부터 계속합니다.

   :::

10. `A` 버튼을 누릅니다. 구성 화면으로 돌아갑니다.

11. 다음 구성으로 이전 5 단계를 반복합니다:

    - cIOS 249 설치

      ```
      cIOS 선택 <d2x-v11-beta2>
      cIOS 기반 선택 <56>
      cIOS 슬롯 선택 <249>
      cIOS 리비전 선택 <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - cIOS 250 설치

      ```
      cIOS 선택 <d2x-v11-beta2>
      cIOS 기반 선택 <57>
      cIOS 슬롯 선택 <250>
      cIOS 리비전 선택 <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - cIOS 251 설치

      ```
      cIOS 선택 <d2x-v11-beta2>
      cIOS 기반 선택 <58>
      cIOS 슬롯 선택 <251>
      cIOS 리비전 선택 <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. 4 개의 cIOS를 모두 완료한 후 B 버튼을 눌러 홈브류 채널로 돌아갑니다.

::: info

섹션 I에서 WAD 파일 4 개를 다운로드한 경우 이제 SD 카드/USB 드라이브에서 해당 파일을 삭제할 수 있습니다.

:::

::: tip

[오픈 샵 채널 설치](osc)를 계속하기

이제 Wii가 적절한 벽돌 방지 기능을 갖추었으므로 Wii에서나 외부에서 모두 접속할 수 있는 홈브류의 신뢰할 수 있는 저장소인 오픈 샵 채널을 설치할 수 있습니다.

:::
