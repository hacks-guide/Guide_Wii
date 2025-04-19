# BootMii 백업

BootMii를 사용하면 Wii의 낸드 저장소를 백업하고 복원할 수 있습니다.
이 페이지에서는 Wii의 낸드를 SD 카드에 백업하는 방법을 안내합니다. 이후 원하는 대로 사용할 수 있습니다.

::: warning

BootMii를 사용하려면 **SD ​​카드**가 필요하지만, 특히 낸드 백업을 만들려면 더욱 그렇습니다. 지금 당장 SD 카드가 없다면, 이 페이지를 건너뛸 수 있지만, 나중에 이 페이지로 돌아와서 낸드를 백업하는 것을 꼭 권장합니다.

:::

## 요구 사항

- 최소 512MB의 여유 공간이 있는 SD 카드 (1GB 이상 권장)

## 지침

::: info

BootMii를 boot2로 설치한 경우 콘솔을 다시 시작하여 BootMii를 실행해야 합니다. 이 경우 1 단계와 2 단계를 건너뜁니다.

:::

1. 콘솔의 전원을 켭니다.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    ::: warning

    홈브류 채널에 `BootMii 실행` 버튼이 나타나지 않으면 [HackMii 설치 프로그램을 다시 실행](hackmii)하고 BootMii를 설치합니다.

    :::

    ::: warning

    화면이 검은색으로 유지되고 파란색 디스크 드라이브 표시등이 깜박이면 SD 카드에 BootMii 파일이 누락된 것입니다. [이 zip 파일](/assets/files/bootmii_sd_files.zip)을 다운로드하고 SD 카드의 루트에 압축을 푼 다음 다시 시도합니다.

    :::

4. 이제 화면에 아래와 비슷한 이미지가 표시되어야 합니다:

    ![](/images/bootmii/BootMii_Main.png)

    ::: info

    Wii 리모컨으로는 BootMii를 탐색할 수 없습니다.
    콘솔의 전원 및 재설정 버튼 또는 포트 1에 연결된 게임큐브 컨트롤러를 사용해야 합니다.
    옵션 사이를 이동하려면 POWER 버튼을 누릅니다. 옵션을 선택하려면 RESET 버튼을 누릅니다.

    :::

5. 옵션 버튼 (톱니바퀴가 있는 아이콘) 을 선택합니다.

    ![](/images/bootmii/BootMii_Gears.png)

6. 왼쪽의 첫 번째 버튼을 선택합니다.

    ![](/images/bootmii/BootMii_Backup.png)

7. NAND 백업이 시작됩니다. 화면에서 진행 상황을 확인할 수 있습니다.

    - "배드 블록"은 정상적입니다. NAND 백업 중 일부가 보이더라도 걱정하지 마세요.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. 이 단계가 끝나면, 백업을 확인합니다. 이상적으로는 검증 과정 이후 모든 블록이 녹색이 ​​되어야 합니다.

    - 수정할 수 없는 페이지가 포함된 공장 불량 블록이 있는 경우 이러한 블록은 검증에 실패할 수 있습니다. 모든 불량이 아닌 블록이 성공적으로 검증된다면 문제가 없을 것입니다.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. BootMii를 종료하려면 뒤로 버튼 (화살표가 있는 버튼) 을 누른 다음 Wii 메뉴 버튼 또는 홈브류 채널 버튼을 눌러 원하는 위치에서 종료할 수 있습니다.

    ![](/images/bootmii/BootMii_Return.png)

::: info

참고: **낸드 백업을 복원하는 것은 보통 마지막 수단입니다.** 콘솔의 벽돌을 해결하는 더 나은 방법이 종종 있습니다.

최선을 다해 [벽돌 상태를 식별](bricks)하고 처음에 그 상태를 일으킨 작업을 되돌립니다.

SD 카드의 낸드 백업에서 복원하려면 [RestoreMii](bootmiirecover)에 대한 지침을 따릅니다.
**패밀리 에디션 Wii (게임큐브 포트가 없는 Wii)는 하드웨어를 수정하지 않고는 낸드 백업을 복원할 수 없습니다.**

:::

::: info

SD 카드의 루트에 `nand.bin`과 `keys.bin`이라는 두 개의 파일이 생성됩니다. `nand.bin`은 콘솔의 내부 메모리의 백업이고, `keys.bin`은 콘솔의 키입니다.

:::

## 자동 부팅

BootMii를 boot2로 설치할 수 있었지만 Wii를 켤 때마다 BootMii 화면을 불러오고 싶지 않다면 시스템 메뉴로 자동 부팅하도록 설정할 수 있습니다. 이렇게 하면 BootMii가 boot2로 설치되어 있다는 것을 알아차리지 못할 것입니다.

1. 메모장 등의 텍스트 편집기로 `SD:/bootmii/bootmii.ini`를 엽니다.
2. `#`을 삭제하여 `#AUTOBOOT=SYSMENU`를 `AUTOBOOT=SYSMENU`로 변경합니다.
3. 그런 다음 `#`을 삭제하고 `5`를 `1`로 바꿔서 `#BOOTDELAY=5`를 `BOOTDELAY=1`로 변경합니다.
4. 파일을 저장하고 종료합니다.

::: info

Wii에서 [BootMii 구성 편집기](https://oscwii.org/library/app/BootMiiConfigurationEditor) 앱을 사용하여 이러한 설정을 변경할 수도 있습니다.

:::

## 돌핀 에뮬레이터에 낸드 백업 업로드

여러분의 낸드 백업은 돌핀 에뮬레이터에서 활용될 수 있습니다.

1. [돌핀 웹사이트](https://dolphin-emu.org/)에서 돌핀 에뮬레이터의 최신 베타 또는 개발 릴리스를 받아서 기기에 설치합니다.
2. 돌핀 에뮬레이터 열기
3. `도구` 탭을 클릭하고 `낸드 관리`까지 아래로 스크롤한 다음 `BootMii 낸드 백업 가져오기...`를 선택합니다.
4. SD 카드의 루트에 있는 `nand.bin`을 찾아 열기를 선택합니다.
5. `keys.bin`을 요청하는 경우 SD 카드의 루트에서 이를 찾아 열기를 선택합니다.

::: tip

[Priiloader 설치 계속하기](priiloader)

Priiloader는 2차 수준의 벽돌 방지 기능을 추가하며, BootMii가 boot2로 설치된 경우에도 적극 권장됩니다. 이 기능은 특히 IOS에서 BootMii를 사용하는 사용자에게 중요합니다.

:::
