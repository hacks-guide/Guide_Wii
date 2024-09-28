# 게임큐브 저장

게임큐브 저장을 관리하는 방법에 대한 전체 가이드입니다.

::: info

패밀리 에디션 Wii 또는 Wii 미니와 함께 게임큐브 주변기기를 사용하려면 게임큐브 포트 및/또는 메모리 카드 슬롯에 납땜을 해야 합니다.

:::

## 개별 저장 (.gci 파일) 을 물리적 메모리 카드에 업로드하기

### 메뉴

- 게임큐브 포트가 있는 Wii
- SD 카드 또는 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### 진행 방법

#### 다운로드 하기

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 GCMM을 실행합니다.

#### 복원

1. 실제 메모리 카드를 슬롯 A 또는 슬롯 B에 연결합니다.

2. 복원하려는 장치를 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. GCMM에서 게임큐브 컨트롤러의 X 버튼을 누르거나 Wii 리모컨의 + 버튼을 누릅니다.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. 메모리 카드가 있는 슬롯을 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. 복원하려는 저장을 선택합니다. 복원할 저장이 여러 개 있는 경우, 게임큐브 컨트롤러에서 R 버튼을 누르거나 Wii 리모컨에서 1 버튼을 눌러 모든 저장을 복원할 수 있습니다.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. 복원이 완료되면 아무 버튼이나 눌러 계속합니다.

## 물리적 메모리 카드에서 저장 (.gci 파일) 을 SD 또는 USB에 백업하기

### 메뉴

- 게임큐브 포트가 있는 Wii
- SD 카드 또는 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 진행 방법

#### 다운로드 하기

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 GCMM을 실행합니다.

#### 백업

1. 실제 메모리 카드를 슬롯 A 또는 슬롯 B에 연결합니다.

2. 백업할 장치를 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. GCMM에서 게임큐브 컨트롤러의 Y 버튼을 누르거나 Wii 리모컨의 - 버튼을 누릅니다.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. 메모리 카드가 있는 슬롯을 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. 백업하려는 저장을 선택합니다. 백업할 저장 파일이 여러 개 있는 경우, 게임큐브 컨트롤러의 R 버튼 또는 Wii 리모컨의 1 버튼을 눌러 모든 저장 파일을 백업할 수 있습니다.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. 백업이 완료되면 아무 버튼이나 눌러 계속합니다.

## 실제 메모리 카드를 에뮬레이트된 메모리 카드 (.raw 파일) 로 백업하기

### 메뉴

- 게임큐브 포트가 있는 Wii
- SD 카드 또는 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 진행 방법

#### 다운로드 하기

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Wii에 SD 카드 또는 USB 드라이브를 연결하고 홈브류 채널에서 GCMM을 실행합니다.

#### Dumping the .raw

1. 메모리 카드를 슬롯 A 또는 슬롯 B에 연결합니다.

2. 덤프할 장치를 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. 게임큐브 컨트롤러에서 L과 Y 버튼을 동시에 누르거나 Wii 리모컨에서 B와 - 버튼을 동시에 눌러 .raw 파일로 백업하고 메모리 카드가 있는 슬롯을 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. 덤프가 완료되면 아무 버튼이나 눌러 계속합니다. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## 에뮬레이트된 메모리 저장을 실제 메모리 카드로 복원하기

### 메뉴

- 게임큐브 포트가 있는 Wii
- SD 카드 또는 USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### 진행 방법

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. 메모리 카드를 슬롯 A 또는 슬롯 B에 연결합니다.

4. 복원하려는 장치를 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. 게임큐브 컨트롤러에서 L과 X 버튼을 동시에 누르거나 Wii 리모컨에서 B와 + 버튼을 동시에 누릅니다.

6. 메모리 카드가 있는 슬롯을 선택합니다.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. .raw 파일을 메모리 카드에 복원합니다. 복원이 완료되면 아무 버튼이나 눌러 계속합니다.

## 2개의 물리적 메모리 카드 간에 저장 내용 전송

### 메뉴

- 게임큐브 포트가 있는 Wii
- 최소 2개의 물리적 메모리 카드

### 진행 방법

1. 두 메모리 카드를 Wii에 연결합니다.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

   ![](/images/homebrew/gcsaves/sysmenu.jpg)

   ![](/images/homebrew/gcsaves/settings.jpg)

   ![](/images/homebrew/gcsaves/data-management.jpg)

   ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[여기를 눌러 사이트 탐색으로 돌아갑니다](site-navigation)

:::
