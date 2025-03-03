# Wii/게임큐브 게임 덤프하기

이 가이드에서는 게임큐브 또는 Wii 게임 디스크를 Wii의 로컬 SD 카드나 USB 드라이브에 저장하는 방법을 설명합니다.

## 디스크를 SD/USB로 덤프하기 (CleanRip)

### 요구 사항

- 최소 4.7GB의 여유 공간 (듀얼 레이어 디스크를 덤프하는 경우 8.5GB) 이 있는 SD 카드 또는 USB 드라이브
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### 준비

1. 콘솔의 전원을 끕니다.

2. Extract both apps to the root of your SD card or USB drive.

3. CleanRip `.zip`에서 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 복사합니다.

4. Wii에 SD 카드를 연결하고, 홈브류 채널에서 CleanRip을 실행합니다.

5. 콘솔의 전원을 켭니다.

6. Launch the Homebrew Channel, and launch the Load Priiloader app.

7. 홈브류 목록에서 CleanRip을 실행합니다.

8. 메시지가 나타나면, `예`를 선택하여 디스크 체크섬을 계산합니다.

   ![](/images/homebrew/CleanRip/checksum.png)

9. 게임을 덤프할 장치 (USB 드라이브 또는 SD 카드) 를 선택합니다.

   ![](/images/homebrew/CleanRip/device.png)

10. 장치의 파일 시스템 유형을 선택하세요. 대부분의 경우 FAT (FAT32)입니다.

    ![](/images/homebrew/CleanRip/filesystem.png)

11. 장치가 시스템에 연결되어 있는지 확인하고 A 버튼을 눌러 계속합니다.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. 메시지가 나타나면 `예`를 선택하여 redump.org DAT 파일을 다운로드합니다.

    - 이는 결과 덤프가 깨끗하고 정확한지 확인하기 위해 필요합니다.

    ::: warning

    이렇게 하면 예외 오류가 발생할 수 있습니다. 그렇다면 Wii를 재시작하고 다시 시도합니다. 하지만 계속해서 예외 오류가 발생하면 디스크를 덤프하고 필요한 경우 돌핀에서 체크섬을 확인합니다.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. 덤프하려는 게임 디스크를 넣고 A 버튼을 눌러 계속합니다.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Wii 디스크 덤프하기

::: info

CleanRip v2.1.2부터 디스크가 듀얼 레이어인지 아닌지를 자동으로 감지하는 옵션이 생겼습니다. 이전 버전을 사용하고 있거나 올바른 옵션이 선택되었는지 확인하고 싶다면 [이 목록](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games)에서 게임이 듀얼 레이어 디스크인지 확인할 수 있습니다.

:::

::: warning

복구할 수 없는 읽기 오류가 발생하면 덤프하려는 디스크가 깨끗하고 콘솔에서 제대로 읽을 수 있는지 확인합니다. 게임 디스크를 정상적으로 재생할 수 있더라도 여전히 이 오류가 발생할 수 있습니다. 오류가 지속되면 다른 디스크를 덤프하여 같은 오류가 발생하는지 확인합니다.

:::

1. 메시지가 나타나면 디스크가 라이선스가 없는 Datel 디스크인지 선택합니다. 확실하지 않으면, `아니요`를 선택합니다.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. 게임 디스크가 듀얼 레이어인지 확인하면서 아래 화면에 표시된 대로 설정을 지정합니다.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. A 버튼을 눌러 디스크 덤프를 시작합니다.

   - 이 프로세스는 DVD의 4.7 GB (듀얼 레이어 디스크의 경우 8.5 GB)를 모두 덤프하므로 상당한 시간이 걸릴 수 있습니다.

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. 덤프가 완료되면 디스크의 MD5 체크섬이 표시된 화면이 나타나고, 활성화한 경우 이를 Redump DAT와 비교한 결과가 표시됩니다.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

[Wii 백업 관리](wii-backups)로 진행하여 출력된 PART 파일을 결합하고 덤프된 게임을 관리합니다.

:::

## 게임큐브 디스크 덤프하기

::: info

Wii 패밀리 에디션, Wii 미니, Wii U의 vWii는 게임큐브 게임을 덤프할 수 없습니다. Wii 패밀리 에디션에서는 디스크 드라이브를 원래 Wii 모델용 드라이브와 바꾸면 게임큐브 게임을 덤프할 수 있습니다.

:::

1. 메시지가 나타나면 디스크가 라이선스가 없는 Datel 디스크인지 선택합니다. 확실하지 않으면, `아니요`를 선택합니다.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. A 버튼을 눌러 디스크 덤프를 시작합니다.

   - 이 프로세스는 미니 DVD의 1.3 GB 전체를 덤프하므로 시간이 다소 걸릴 수 있습니다.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. 덤프가 완료되면 디스크의 MD5 체크섬이 표시된 화면이 나타나고, 활성화한 경우 이를 Redump DAT와 비교한 결과가 표시됩니다.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

[게임큐브 백업 관리](gc-backups)로 진행하여 출력 파일의 크기를 줄이고 덤프된 게임을 관리합니다.

:::
