# Wii 백업 관리

이 가이드에서는 CleanRip을 통해 출력된 .PART 파일을 결합하는 방법부터 FAT32 장치에 복사할 수 있는 게임 파일을 축소하는 방법까지 Wii 백업을 ​​관리하는 방법에 대한 지침을 제공합니다. Two programs that can be used to manage your Wii backups are Wii Backup Manager (for Windows) and Wii Backup Fusion (for Linux and macOS) and are covered below.

::: info

여러 게임을 저장하려면 Wii용 외장 하드 드라이브를 권장합니다. 시중에 판매되는 대부분의 제품은 잘 작동할 것입니다.

:::

::: info

플래시 드라이브는 크기가 작고 동일 제품이라도 작동 방식이 다를 수 있으므로 권장하지 않습니다.

또는 간단히 SD 카드를 사용할 수도 있지만, Wii의 SD 카드 슬롯은 느릴 것입니다.

:::

::: info

USB 드라이브의 포맷이 FAT32로 되어 있는지 확인합니다. exFAT 또는 extFS 등 다른 유형으로 포맷하지 마세요.

NTFS로 포맷할 수 있지만 대부분의 앱 (예: 홈브류 채널, 닌텐돈트)에서는 작동하지 않습니다.

:::

## FAT32 장치에서 PART 파일 결합

::: info

디스크를 FAT32 장치에 덤프한 경우 파일 시스템 제한으로 인해 `.partX.iso`로 끝나는 파일이 최소 두 개는 생성됩니다. 파일을 올바르게 읽을 수 있도록 하려면 지원되는 파일 시스템에 결합해야 합니다. (예: NTFS)

:::

### 윈도우

1. `.partX.iso`로 끝나는 같은 이름을 공유하는 파일을 컴퓨터의 빈 폴더에 복사합니다.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. 이 폴더에서 윈도우 탐색기의 주소창을 클릭하고 `cmd`를 입력하면 명령 프롬프트 창이 열립니다.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. `copy /b *.part?.iso game.iso`를 입력하고 Enter를 누릅니다. 명령이 완료될 때까지 기다립니다. 터미널 출력은 아래와 비슷해야 합니다.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. 복사 과정이 올바르게 실행되면 게임 덤프 정보 파일 (디스크를 덤프한 위치에 있음)의 체크섬이 결합된 결과 파일과 일치해야 합니다.

   ![](/images/desktop-apps/WBM/filemd5.png)

### 맥OS/리눅스

1. `.partX.iso`로 끝나는 같은 이름을 공유하는 파일을 컴퓨터의 빈 폴더에 복사합니다.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Open a terminal in the folder where your files are located, or `cd [PATH]` to it.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. 다음 명령어를 그대로 사용하십시오: \`\`\`\`cat `ls *.part?.iso | sort` > game.iso\`\`\`. 그런 다음 병합 프로세스가 완료될 때까지 기다립니다. 윈도우에서와 마찬가지로 결과 체크섬은 덤프와 일치해야 합니다.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

## Wii 백업 매니저 사용

### 요구 사항

- 윈도우를 실행하는 PC
- USB 드라이브 또는 SD 카드
- Wii 게임 디스크에서 덤프된 ISO
- [Wii 백업 매니저](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

### 지침

#### 섹션 I - 설치

1. Wii 백업 관리자의 압축을 풀고 프로그램을 실행하세요.
2. USB 드라이브 또는 SD 카드를 컴퓨터에 연결하세요.

#### 섹션 II - 게임 복사

1. `드라이브 1` 탭으로 이동한 다음, 백업된 Wii 게임을 보관할 드라이브를 선택합니다.

   ![](/images/desktop-apps/WBM/select_drive.png)

2. `파일` 탭으로 이동한 다음 `추가`를 선택합니다.

   - 프로그램에 여러 게임을 추가하려면 '파일'을 선택하고, 게임 폴더 전체를 추가하려면 '폴더'를 선택합니다.

   ![](/images/desktop-apps/WBM/select_games.png)

3. '선택'으로 가서, '드라이브 1에 없는 게임'을 클릭합니다.

   ![](/images/desktop-apps/WBM/select_games2.png)

4. `전송`을 선택한 다음 `드라이브 1`을 선택하여 게임을 전송합니다. 진행률은 창의 오른쪽에 표시됩니다.

   ![](/images/desktop-apps/WBM/transfer_todrive.png)

## Wii 백업 퓨전 사용

### 요구 사항

- A PC running macOS or Linux
- USB 드라이브 또는 SD 카드
- Wii 게임 디스크에서 덤프된 ISO
- [Wii 백업 퓨전](https://github.com/larsenv/Wii-Backup-Fusion/releases)
- [Wiimm's ISO 도구](https://wit.wiimm.de/download.html)

### 지침

#### 섹션 I - 설치

1. OS에 맞는 Wiimm ISO 도구를 다운로드하고 터미널에서 접속할 수 있는 폴더에 .tar.gz를 추출합니다. 추출된 폴더에는 다음 파일이 들어 있어야 합니다:

   ![](/images/desktop-apps/WBM/witinstallfolder.png)

2. 방금 압축 해제한 폴더에서 터미널을 열고 `sudo ./install.sh`를 실행합니다.

3. OS에 맞는 Wii 백업 퓨전을 다운로드하여 설치합니다. 리눅스를 사용하는 경우, `chmod +x [파일]` 실행하여 appimage를 실행 가능한 파일로 만들어야 합니다.

#### 섹션 II - 게임 복사

1. Wii 백업 퓨전을 열고 `로드`를 누릅니다.

   ![](/images/desktop-apps/WBM/loadwbf.png)

2. Select the folder where your game ISO is located.

   ![](/images/desktop-apps/WBM/opendirectorywbf.png)

3. 드라이브로 전송할 게임을 마우스 오른쪽 버튼으로 클릭하고 `이미지로 전송`을 누릅니다. 다음 설정을 사용합니다:

   ![](/images/desktop-apps/WBM/settingswbf.png)

4. If there is not already a `wbfs` folder on your game drive, make one.

5. Make another folder inside of the `wbfs` folder for the game backup. 게임 폴더에 필요하므로 Wii 백업 퓨전의 게임 ID를 기록해 둡니다.

6. `게임 이름 [게임ID]` 형식의 게임 폴더를 만듭니다. 이 가이드에서 예시로 덤프한 게임의 이름은 `New Super Mario Bros. Wii [SMNE01]`입니다.

   ![](/images/desktop-apps/WBM/wbfsname.png)

7. 3 단계에서 만든 game.wbfs 파일을 이 새 폴더로 복사합니다. 드라이브는 Wii에서 사용할 준비가 되었습니다.

::: tip

[cIOS로 계속](cios)

Wii에서 USB 로더를 사용하려면 cIOS가 필요합니다. 이 작업이 완료되면 [USB Loader GX 또는 WiiFlow](wii-loaders)를 사용하여 USB 드라이브나 SD 카드에서 게임을 플레이할 수 있습니다.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
