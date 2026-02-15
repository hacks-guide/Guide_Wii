# Wii 낸드를 공장초기화로 복원

이 가이드에서는 Ohneschwanzenegger라는 프로그램을 사용하여 Wii 시스템용 기본 낸드를 만드는 방법을 자세히 설명합니다. Wii 설정의 `Wii 시스템 메모리 포맷` 옵션과 달리 이 옵션은 NUS 서버에서 기존 Wii 시스템 메뉴를 다운로드하여 낸드에 대한 모든 변경 사항을 완전히 삭제합니다. 올바르게 따르면 Wii에는 시스템에 홈브류가 남아 있지 않고, IOS가 기본으로 설치되어 있으며, 낸드가 플래시되면 공장 설정 화면으로 부팅됩니다.

이 프로그램을 사용하려면 기존의 (벽돌이 되어도 괜찮은!) 프로그램이 **필요합니다.** 낸드 백업이 작동하려면 낸드의 첫 8개 블록 사본, 불량 블록 목록, AES/HMAC 키가 필요합니다.

::: info

Wii U의 vWii에서 이 자습서를 시도하지 마세요.

:::

::: danger

이 가이드에 자세히 설명된 지침은 WII 시스템 메모리를 지우므로 마지막 수단으로만 고려해야 하며 다음 중 하나를 시도하는 경우에만 고려해야 합니다:

- Wii를 공장에서 출시되었을 당시의 상태로 복원합니다.
- 작동하는 낸드 백업이 없거나 홈브류 채널에 접속할 수 없어 벽돌을 고치는 방법은 있지만 BootMii를 사용하여 벽돌을 만들 수는 있습니다.
- DARKCORP를 사용하는 모든 cIOS 등 Wii 시스템 메모리의 특정 변경 사항은 되돌릴 수 없습니다.

:::

::: warning

홈브류를 사용하여 [Wii를 4.3U로 업데이트](update)하거나 오래된 홈브류/IOS를 업데이트하려는 경우 이 가이드를 따를 필요는 없습니다. 대신 [ModMii](modmii#syscheck-updater-wizard)에 내장된 SysCheck Updater Wizard와 같은 도구를 사용할 수 있습니다. 이 과정이 혼란스럽다면, 닌텐도 홈브류 디스코드 서버에 가입하여 지원을 받아보세요.

:::

## 요구 사항

- 최소 512MB의 여유 공간이 있는 SD 카드 (1GB 이상 권장)
- 플래시하려는 특정 시스템의 [낸드 백업](bootmii)
- 인터넷에 연결된 윈도우 컴퓨터
- [Ohneschwanzenegger](https://raw.githubusercontent.com/modmii/modmii.github.io/master/temp/ohneschwanzenegger.zip)
- [Nand BIN Checker](/assets/files/nandBinCheck.zip)

## 지침

### 섹션 I - 준비

1. Ohneschwanzenegger 시작합니다. 윈도우 스마트스크린 메시지가 나타날 수 있습니다. 이는 긍정 오류이며, `추가 정보`를 누르고 `실행`을 눌러 프로그램을 실행할 수 있습니다.

2. `Local Cache` 버튼을 누르고 NUS 캐시를 출력할 새 폴더를 만든 다음 확인을 누릅니다. 예시 폴더는 아래와 같습니다.

   ![](/images/factory-reset/nuscache.png)

3. 툴바에서 `Nand Dump`를 누른 후 `New nand`를 누릅니다. 이렇게 하면 새 낸드 덤프에 대한 매개변수를 조정할 수 있는 팝업 창이 열립니다. 큰 `Existing Nand...` 버튼을 눌러 Wii의 기존 낸드 덤프를 찾습니다.

   ![](/images/factory-reset/newnand.png)

4. 이렇게 하면 키, 부트 1/2, 불량 블록 등의 정보가 자동으로 입력됩니다. 대상 상자만 `./blank and.in`으로 변경하면 낸드가 `blank and.bin`이라는 이름의 프로그램 폴더에 출력됩니다. 그런 다음, 확인을 누릅니다.

   ![](/images/factory-reset/renamenand.png)

### 섹션 II - 빈 낸드 생성

1. 이제 낸드가 프로그램에 로드되었으므로 도구 모음에서 `Content`을 선택한 다음 포맷을 누릅니다. 이렇게 하면 백업 낸드가 아닌 빈 낸드가 초기화됩니다.

   ![](/images/factory-reset/formatnand.png)

2. 프로그램의 왼쪽 상단 텍스트 상자를 선택하고 낸드에 필요한 Wii 시스템 메뉴 버전을 입력합니다. 최적의 값은 4.3이어야 합니다. (예: `4.3E`, `4.3U`, `4.3J`, `4.3K`).

   ![](/images/factory-reset/sysmenu.png)

3. 원하는 메뉴 버전을 입력했는지 확인한 후 Enter 또는 `Get It!`을 누릅니다. 그러면 NUS 서버에서 메뉴가 다운로드되기 시작하며, 프로그램에 진행률이 표시됩니다.

   ![](/images/factory-reset/menudownload.png)

4. 메뉴 다운로드가 완료되면 낸드에 추가된 설정을 보여주는 팝업이 나타납니다. 일련 번호가 정확하지 않더라도 낸드에 무엇이 있는지에 따라 자동으로 채워집니다. 원하시면 이 항목을 편집할 수 있고, 그렇지 않으면 모든 내용을 비워두고 확인을 누릅니다.

   ![](/images/factory-reset/settings.png)

5. 다음으로, 작업 표시줄에서 `Content`를 누르고 `Write meta entries`를 누릅니다. 그런 다음, 메뉴로 돌아가서 `Flush`를 누릅니다. 그런 다음 창을 닫습니다.

   ![](/images/factory-reset/finalsteps.png)

### 섹션 III - 낸드 확인

1. If NAND Bin Checker is not already in the same folder as Ohneschwanzenegger, copy it there now. Then, open a terminal in that folder. 다음 명령을 실행합니다: `.\nandBinCheck.exe .\blankNand.bin`. 낸드에 다른 이름을 지정한 경우 명령도 그에 맞게 조정합니다. 그러면 프로그램이 낸드의 유효성을 검사합니다.

   ![](/images/factory-reset/nandcheck.png)

2. 모든 것이 잘 되었다면, 결과는 아래와 비슷할 것입니다. 눈에 띄는 오류가 있는 경우, 해당 낸드를 사용하지 말고 다시 시도합니다. Wii가 손상되거나 영구적으로 고장날 수 있습니다. 이후에도 이러한 오류가 계속 발생하면, 닌텐도 홈브류 디스코드 서버에 접속하여 지원을 받으세요.

   ![](/images/factory-reset/nandcheckresult.png)

3. `blankNand.bin`을 Wii SD 카드로 옮기고 `nand.bin`으로 이름을 바꾸면 BootMii에서 플래시할 수 있습니다. 기존 낸드를 덮어쓰지 않도록 주의합니다!

   ![](/images/factory-reset/nandname.png)

::: tip

[BootMii 복원 계속](bootmiirecover)

이제 빈 낸드가 있으므로 BootMii를 사용하여 Wii에 복원할 수 있습니다.

:::
