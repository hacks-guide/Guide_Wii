# BootMii 복원

이 가이드에서는 BootMii를 사용하여 낸드 백업을 복원하는 방법에 대한 지침을 제공합니다. 이것은 벽돌을 수리하는 <strong>마지막 수단</strong>으로 사용하는 방법이며, 이 방법으로 문제가 해결되지 않으면 지원을 받아야 할 수도 있습니다. 여전히 BootMii에 들어갈 수 있다면, 대신 홈브류 채널에 들어가 다른 방법을 사용해 [벽돌을 식별하고 수리](bricks)를 시도합니다.

::: info

BootMii를 boot2로 설치한 경우 콘솔을 다시 시작하여 BootMii를 실행해야 합니다. 이 경우 1 단계와 2 단계를 건너뜁니다.

:::

::: warning

화면이 검은색으로 유지되고 파란색 디스크 드라이브 표시등이 깜박이면 SD 카드에 BootMii 파일이 누락된 것입니다. [이 zip 파일](https://static.hackmii.com/bootmii_sd_files.zip)을 다운로드하고 SD 카드의 루트에 압축 해제한 다음 다시 시도하세요.

:::

::: danger

패밀리 에디션 Wii는 낸드 백업을 복구할 수 없습니다. (게임큐브 포트가 없는 Wii) 이는 boot2가 아닌 Wii에 복원 확인 코드를 입력하는 데 필요한 게임큐브 포트가 없기 때문입니다. 추가적인 도움이 필요하면 지원을 요청합니다.

:::

::: danger

검증되지 않은 낸드 백업이나 Wii에서 사용하지 않은 백업은 복원하지 마세요. 더 심각한 문제가 발생할 수 있습니다. 결함이 있는 SD 카드를 사용하는 경우도 마찬가지입니다.

:::

## 요구 사항

- [BootMii](bootmii)가 만든 초기 낸드 백업

## 낸드 백업에서 개별 데이터 복원

개인 데이터를 Wii로 가져오는 훨씬 더 안전하고 빠른 방법이 있을 가능성이 있는데, 아마도 돌핀 에뮬레이터를 사용하는 것이 포함될 것입니다.

예를 들어, Wii 메시지 보드 데이터를 복원하려면 돌핀을 사용하여 낸드 백업을 가져옵니다. 돌핀에서 `파일 -> 사용자 폴더 열기`로 가서 `Wii/title/00000001/00000002/data/cdb.vff`를 찾아 SD 카드에 복사하고 [WiiXplorer](https://oscwii.org/library/app/wiixplorer)를 사용하여 해당 위치에 복원합니다.

게임의 저장 데이터를 복원하려면 돌핀을 사용하여 낸드 백업을 가져오고, '도구 > 모든 Wii 저장 데이터 내보내기'를 사용하여 모든 저장 데이터를 SD 카드로 내보내고, 데이터 관리를 사용하여 데이터를 Wii로 옮깁니다.

## 중요한 예비 참고 사항

- 벽돌이 발생할 만한 일을 하지 않았다면 (또는 오랜 시간 만에 Wii를 켜고 있다면), 아마도 [Wi-Fi 벽돌](bricks#wi-fi-brick)일 것입니다.

- BootMii가 IOS로 설치된 경우 RestoreMii는 게임큐브 컨트롤러를 통해 코나미 코드를 입력하라는 메시지를 표시합니다.

- BootMii를 사용하려면 콘솔의 POWER (오른쪽) 및 RESET(선택) 버튼을 사용하거나 포트 1에 연결된 게임큐브 컨트롤러를 사용해야 합니다. 게임큐브 컨트롤러로 탐색하려면 게임큐브 컨트롤러의 +컨트롤 패드에서 왼쪽/오른쪽을 클릭하세요. 선택하려면 A 버튼을 누릅니다.

## 지침

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Press the HOME Button, then select "Launch BootMii".

    - 홈브류 채널에 접근할 수 없고 Priiloader가 설치된 경우 부팅 시 홈브류 채널에 접근하여 `BootMii IOS`를 선택하여 BootMii를 로드할 수 있습니다.

    ![](/images/bootmii/BootMii_HBC.png)

3. 옵션 버튼 (톱니바퀴가 있는 아이콘) 을 선택합니다.

    ![](/images/bootmii/BootMii_Gears.png)

4. RestoreMii 버튼을 선택합니다.

    ![](/images/bootmii/BootMii_Restore.png)

5. BootMii는 시뮬레이션 모드에서 실행될 것이라고 알려주며, 계속하려면 A 또는 Reset 버튼을 누르세요.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. BootMii가 IOS로 설치된 경우 게임큐브 컨트롤러에 코나미 코드를 입력하세요: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii는 복원 프로세스를 시뮬레이션으로 실행하여 무엇이 지워지고 다시 쓰여질지 자세히 설명합니다. 이 작업이 완료되면 복원 과정에서 빠져나올 수 있는 마지막 기회가 주어집니다. 그렇지 않은 경우 START 또는 Eject 버튼을 눌러 시작합니다.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

8. 복구가 끝나면 `I HAZ SUCCESS!`라는 텍스트가 표시되고, 그렇지 않으면 `I HAZ FAIL`라는 텍스트가 표시됩니다. Wii 콘솔이나 게임큐브 컨트롤러에서 아무 버튼이나 누릅니다.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. BootMii를 종료하려면 뒤로 버튼 (화살표가 있는 버튼) 을 누른 다음 Wii 메뉴 버튼 또는 홈브류 채널 버튼을 눌러 원하는 위치에서 종료할 수 있습니다.

    ![](/images/bootmii/BootMii_Return.png)

::: info

벽돌을 수리하기 위해 낸드 백업을 복원했지만 문제가 해결되지 않은 경우 이 가이드의 [벽돌 부분](bricks)을 참조합니다.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
