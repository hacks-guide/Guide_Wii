# Wilbrand

Wilbrand는 Wii 메시지 보드를 사용해 작동하는 Wii용 익스플로잇입니다. 모든 지역의 Wii 메뉴 버전 3.0~4.3과 호환됩니다.

::: info

이 페이지에는 적절한 Wilbrand 익스플로잇을 만드는 데 사용되는 두 가지 방법이 나열되어 있습니다.

Wilbrand Web은 사용하기 편리해서 추천됩니다.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### 요구 사항

- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- 버전 3.0 이상의 Wii

::: warning

2GB보다 큰 SD 카드는 Wii 메뉴 버전 4.0 이전에서는 작동하지 않습니다.

:::

### 지침

1. 콘솔의 전원을 켭니다.

2. `Wii 설정`으로 갑니다.

3. 화면 오른쪽 상단에 있는 시스템 버전 옆에 있는 글자를 기록합니다.

    - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

    ![](/images/wii/SystemMenuVersion.png)

4. `인터넷` > `콘솔 정보`로 이동합니다.

5. 전체 MAC 주소를 기록합니다.

    ![](/images/wii/MacAddress.png)

6. 컴퓨터에서 브라우저를 열고 [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/)로 이동합니다.

7. Wii MAC, 버전, 지역을 입력합니다.

8. `Bundle the HackMii Installer for me!`이 체크되어 있는지 확인합니다.

9. 두 개의 전선 중 하나를 자르세요.

    ![](/images/exploits/wilbrand/web.png)

10. ".zip 다운로드"를 클릭하세요.

11. Extract the contents of the downloaded ZIP to the root of your SD card.

12. 다운로드한 `.zip` 파일에서 `private` 폴더와 `boot.elf` 파일을 SD 카드의 루트에 복사합니다.

13. SD 카드를 콘솔에 다시 연결합니다.
    - SD 카드는 Wii 전면에 있는 SD 카드 슬롯에 연결해야 합니다. Wii의 USB 포트에 USB 어댑터를 연결해도 작동하지 않습니다.

14. SD 카드를 꺼내서 Wii에 연결합니다.

15. Wii 메시지 보드를 엽니다.

16. 폭탄 아이콘이 있는 녹색 편지 봉투를 엽니다.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Wii에 표시된 날짜가 정확한지 확인하세요. 그렇지 않으면 편지를 찾을 수 없을 수도 있습니다.
    - 어떤 경우에는 편지가 도착하려면 내일이나 어제의 메시지를 확인해야 할 수도 있습니다.
    - 녹색 글자가 보이지 않으면 `데이터 관리`의 SD 카드 섹션에 오류가 표시되었는지 확인합니다. 이 경우 SD 카드 형식 또는 Wii의 SD 카드 리더기에 문제가 있는 것일 수 있습니다.

17. 익스플로잇이 성공하면 장치에 HackMii 설치 프로그램이 로드됩니다.
    - Wii가 검은색 화면에서 멈춘 경우, POWER 버튼을 길게 눌러 전원을 끄고 다시 시도합니다.
    - 편지를 연 후 Wii 메뉴로 돌아가는 경우 SD 카드의 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다.

::: tip

[홈브류 채널 및 BootMii 설치 계속](hbc)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### 요구 사항

- 윈도우즈, 맥OS, 리눅스를 실행하는 PC
- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- 버전 3.0 이상의 Wii
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

::: warning

2GB보다 큰 SD 카드는 Wii 메뉴 버전 4.0 이전에서는 작동하지 않습니다.

:::

### 지침

1. 콘솔의 전원을 켭니다.

2. `Wii 설정`으로 갑니다.

3. 화면 오른쪽 상단에 있는 시스템 버전 옆에 있는 글자를 기록합니다.

    - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.

    ![](/images/wii/SystemMenuVersion.png)

4. `인터넷` > `콘솔 정보`로 이동합니다.

5. 전체 MAC 주소를 기록합니다.

    ![](/images/wii/MacAddress.png)

6. Wilbrand `.zip`의 모든 파일을 컴퓨터의 폴더로 복사하세요.

7. Extract the contents of the downloaded ZIP to the root of your SD card.

8. Wilbrand가 압축이 풀린 폴더에서 터미널을 엽니다.

9. Wii의 버전과 MAC 주소를 사용하여 다음 명령을 실행합니다:

    - 윈도우: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

        - `X:`는 SD 카드의 드라이브 문자입니다.

        ![](/images/exploits/wilbrand/windows.png)

    - 리눅스/맥OS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

        - Wilbrand가 압축 해제된 폴더에서 직접 터미널을 열지 않았다면, 먼저 `cd`를 사용하여 해당 폴더로 들어갑니다. 예: `cd ~/Desktop/Wilbrand`
        - `/media/mount_dir`은 SD 카드가 마운트된 폴더입니다. 이는 리눅스 배포판에 따라 다를 수 있습니다.

        ![](/images/exploits/wilbrand/linux.png)

10. hackmii_installer_v1.2 `.zip`의 모든 파일을 컴퓨터의 폴더로 복사합니다.

11. hackmii_installer_v1.2 `.zip`에서 `boot.elf`를 SD 카드의 루트로 복사합니다.

12. SD 카드를 콘솔에 다시 연결합니다.
    - SD 카드는 Wii 전면에 있는 SD 카드 슬롯에 연결해야 합니다. Wii의 USB 포트에 USB-SD 어댑터를 연결해도 작동하지 않습니다.

13. Wii에서 Wii 메뉴로 돌아갑니다.

14. Wii 메시지 보드를 엽니다.

15. 폭탄 아이콘이 있는 녹색 편지 봉투를 엽니다.

    - Wii에 표시된 날짜가 정확한지 확인하세요. 그렇지 않으면 편지를 찾을 수 없을 수도 있습니다.
    - 어떤 경우에는 편지가 도착하려면 내일이나 어제의 메시지를 확인해야 할 수도 있습니다.
    - 녹색 글자가 보이지 않으면 `데이터 관리`의 SD 카드 섹션에 오류가 표시되었는지 확인합니다. 이 경우 SD 카드 형식 또는 Wii의 SD 카드 리더기에 문제가 있는 것일 수 있습니다.

    ![](/images/exploits/wilbrand/msgboard.png)

16. 익스플로잇이 성공하면 장치에 HackMii 설치 프로그램이 로드됩니다.
    - Wii가 검은색 화면에서 멈춘 경우, POWER 버튼을 길게 눌러 전원을 끄고 다시 시도합니다.
    - 편지를 연 후 Wii 메뉴로 돌아가는 경우 SD 카드의 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다.

::: tip

[홈브류 채널 및 BootMii 설치 계속](hbc)

:::

::::

:::::
