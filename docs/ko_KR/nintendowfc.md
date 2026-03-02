# 닌텐도 DS Wi-Fi 설정으로 이동합니 온라인에서 플레이하려는 게임 내에서 접속할 수 있습니다.

<a href="https://wiimmfi.de">Wiimmfi</a>는 현재 사용되지 않는 닌텐도 Wi-Fi 연결을 대체하는 서비스입니다. Wiimm과 Leseratte가 개발했습니다. This service was discontinued in 2013, but there are reverse-engineered servers that you can connect to which restore this functionality. This guide provides details on two trusted services, WiiLink WFC and Wiimmfi - for most users, we recommend Wiimmfi for their larger userbase (especially with Mario Kart Wii).

## WiiLink WFC

WiiLink WFC is an open-source service created by the WiiLink team that restores online play, with less support and less players than Wiimmfi (listed below). In some cases, WiiLink WFC server code may already be utilized in a game mod - such as with Mario Kart Retro Rewind. Instructions on how to use WiiLink WFC are listed below, or can alternatively be found [on the WiiLink WFC setup page](https://wfc.wiilink.ca/setup).

### Automatic Disc Patching via Homebrew Channel

::: details

A method for WiiLink WFC patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### 요구 사항

- 인터넷 연결이 있는 Wii
- [WiiLink WFC Patcher](https://oscwii.org/library/app/WiiLink-WFC-Patcher)

#### 지침

1. 이 보관 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 추출하기만 하면 됩니다.
2. Insert your SD Card into your Wii, and launch WiiLink WFC Patcher from the Homebrew Channel.
3. 게임 디스크를 삽입합니다 (실행 전이나 후에 삽입해도 상관없습니다).

:::

## Wiimmfi

::: warning

If you get error `23904` while connecting to Wiimmfi, then you are using an outdated patch and must update to continue playing online. Wiimmfi에 다시 연결하는 데 사용하는 방법에 대한 아래 단계를 따릅니다.

See [the Wiimmfi patcher update page](https://wiimmfi.de/update) for an explanation on why an update is needed.

:::

Wiimmfi is a closed-source service created and maintained by Wiimm and Leseratte, which restores online play to a significant amount of games that support this functionality on the Wii. A list of games with currently online players can be found on the [Wiimmfi status page](https://wiimmfi.de/stat?m=8). In some cases, Wiimmfi support may already be built into a game mod - such as with CTGP-R. Instructions on how to use Wiimmfi are listed below, or can alternatively be found [on the Wiimmfi patcher page](https://wiimmfi.de/patcher/).

### Priiloader를 사용하여 디스크 채널에서 자동 패치 적용

::: details

디스크 채널을 통해 자동으로 판매용 디스크 게임에서 실행되는 Wiimmfi 패치 방법입니다.

#### 요구 사항

- A Wii with an Internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 이상

#### 지침

1. Wii를 켜는 동안 RESET 버튼을 누릅니다. Wii 미니를 사용하는 경우 USB 키보드를 연결하고 Esc 키를 누른 채로 전원을 켭니다.

2. Priiloader 메뉴가 보일 것입니다.

   ![](/images/priiloader/mainmenu.png)

3. `System Menu Hacks`으로 갑니다.

   ::: info

   USB 드라이브를 사용하여 Priiloader를 설치하는 경우, SD 카드가 동시에 연결되어 있지 않은지 확인합니다.
   이로 인해 Priiloader가 hacks_hash.ini 파일을 찾을 수 없게 됩니다.

   :::

4. `Wiimmfi patch v4` 해킹이 활성화되어 있는지 확인합니다.

   ![](/images/priiloader/hacks.png)

5. `설정 저장`으로 스크롤하여 변경 사항을 저장합니다.

6. 메인 메뉴로 돌아가서 \`System Menu'를 눌러 Wii 메뉴로 돌아갑니다.

7. 디스크 채널을 통해 게임을 실행하세요. 이제 Wiimmfi 패치가 적용되었을 것입니다.

::: warning

`Wiimmfi Patch`가 v4가 아닌 다른 것으로 표시되면 hacks_hash.ini 파일의 최신 버전이 없으므로 패치가 작동하지 않습니다. Priiloader를 다시 설치해야 합니다. 이에 대한 가이드는 요구 사항 섹션에서 확인할 수 있습니다.

:::

### USB 로더를 통한 자동 백업 패치

::: details

USB Loader GX 또는 WiiFlow Lite의 최신 버전에서 게임 백업을 자동으로 패치하는 Wiimmfi 패치 방법입니다.

#### 요구 사항

- 인터넷 연결이 가능한 Wii
- [USB Loader GX 또는 WiiFlow Lite](wii-loaders)

#### 지침

1. 특정 USB 로더에 대한 게임이나 글로벌 설정을 열고 `사설 서버` 옵션을 검색합니다. 기본적으로는 `끔`으로 설정됩니다.
2. 옵션을 `Wiimmfi`로 설정하고 설정을 저장합니다. 기본적으로 게임은 이제 Wiimmfi에 대해 자동으로 패치됩니다.

:::

### 커스텀 DNS를 통한 자동 디스크 패치

::: details

커스텀 DNS 서버를 사용하여 판매용 게임 디스크에서 자동으로 실행되는 Wiimmfi 패치 방법입니다. 편리하긴 하지만, 마리오 카트 Wii와 SSBB를 포함한 일부 게임에서만 작동합니다. 이 프로세스의 특성상 홈브류 없이도 Wii에서 실행할 수 있습니다.

#### 요구 사항

- 인터넷 연결이 가능한 Wii

#### 지침

1. Go to `Wii Settings` > `Internet` > `Connection Settings` and select whatever connection you are using. Then, `Change Settings` > `Auto-Obtain DNS NO` > `Advanced Settings`. 기본 DNS를 `95.217.77.181`로 설정하고 보조 DNS를 `1.1.1.1`로 설정합니다.
2. 연결 테스트가 완료될 때까지 Wii 시스템 업데이트를 실행하지 않습니다.
3. 디스크 채널을 통해 게임을 실행합니다. 이제 Wiimmfi 패치가 적용되었을 것입니다.

::: warning

If you get error `20100` or `20110`, the game you are trying to play is not supported by this method.

If you get error `23400`, your ISP or network is blocking the use of a custom DNS. To resolve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [on the Wiimmfi website](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### 홈브류 채널을 통한 수동 디스크 패치

::: details

판매용 디스크 게임에서 실행되는 Wiimmfi 패치 방법이지만, 홈브류 채널을 통해 수동으로 실행해야 합니다.

#### 요구 사항

- SD 카드 및 USB 드라이브
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### 지침

1. 이 보관 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 추출하기만 하면 됩니다.
2. Wii에 SD 카드를 연결하고 홈브류 채널에서 자동 Wiimmfi 패치 관리자를 실행합니다.
3. 게임 디스크를 삽입합니다 (실행 전이나 후에 삽입해도 상관없습니다).

:::

### EULA 사용자 계약을 통한 수동 디스크 패치

::: details

판매용 게임 디스크에서 실행되는 Wiimmfi 패치 방법이지만 EULA 사용자 계약을 통해 수동으로 실행해야 합니다([str2hax](str2hax)에서 파생). 이 프로세스의 특성상 홈브류 없이도 Wii에서 실행할 수 있습니다.

#### 요구 사항

- 인터넷 연결이 가능한 Wii

#### 지침

1. 게임 디스크를 넣습니다.

2. `Wii 설정 > 인터넷 > 연결 설정`으로 가서 현재 사용하고 있는 연결을 선택합니다. 그런 다음 `설정 변경 > 자동 획득 DNS 없음 > 고급 설정`을 선택합니다. 기본 DNS를 `95.217.77.151`로 설정하고 보조 DNS를 `1.1.1.1`로 설정합니다.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. 연결 테스트가 완료될 때까지 Wii 시스템 업데이트를 실행하지 않습니다.

4. `인터넷`으로 두 번 돌아가서 `사용자 계약`을 누릅니다. WC24 및 쇼핑 채널을 사용할 것인지 확인합니다.

5. Wiimmfi 패치 관리자 페이지가 표시되어야 합니다. 그렇지 않은데도 기본 사용권 계약이 계속 표시된다면 라우터가 이 방법과 호환되지 않는 것일 수 있습니다.

6. 패처가 로드될 때까지 잠시 기다리세요. (보통 1.5분 정도 소요) 그러면 삽입한 게임이 Wiimmfi 패치로 부팅될 것입니다.

:::

### 인터넷 채널을 통한 수동 디스크 패치

::: details

판매용 게임 디스크에서 실행되는 Wiimmfi 패치 방법이지만 인터넷 채널을 통해 수동으로 실행해야 합니다([Flashhax](flashhax)에서 파생). 이 프로세스의 특성상 홈브류 없이도 Wii에서 실행할 수 있습니다. [이](nintendowfc#manual-disc-patching-via-eula-user-agreement) 방법은 일반적으로 더 안정적이므로 대신 권장됩니다.

#### 요구 사항

- 인터넷에 연결되어 60Hz 모드로 실행되는 Wii
- 인터넷 채널

#### 지침

1. 인터넷 채널에서 다음 웹페이지를 엽니다: `http://chadsoft.co.uk/wiimmfi`
2. 별표 아이콘을 클릭한 다음 `즐겨찾기 추가` 버튼을 클릭하여 해당 페이지를 브라우저 즐겨찾기에 추가합니다.
3. Wii 메뉴로 돌아갑니다.
4. 인터넷 채널을 다시 열어서 방금 만든 즐겨찾기에 접속합니다.
5. Wiimmfi Patcher가 시작됩니다. 인내심을 가지세요. Flashhax는 매우 신뢰할 수 없습니다. 제대로 작동하려면 여러 번 시도해야 할 수도 있습니다.

::: warning

UPnP 관련 문제 (예: 패처가 "네트워크 초기화..." 또는 "UPnP 포트 포워딩 추가" 단계에서 10초 이상 멈추는 경우)가 발생하면 패처가 로드되는 즉시 Wii 리모컨 - 버튼이나 게임큐브 컨트롤러의 Y 버튼을 눌러 문제를 해결할 수 있습니다.

:::

### PC를 통한 수동 WiiWare 패치

::: details

WiiWare 게임에서 실행되는 Wiimmfi 패치 방법이지만, 스크립트를 통해 PC에서 수동으로 실행해야 합니다.

#### 요구 사항

- 일반적으로 허용되지 않는 저장 파일을 데이터 관리에서 SD 카드로 복사할 수 있습니다.
- 게임 복사본 (WAD 형식)
- UPnP 관련 문제 (패처가 "네트워크 초기화..." 또는 "UPnP 포트 전달 추가" 단계에서 10초 이상 멈추는 경우)가 발생하는 경우, 패처가 로드되자마자 Wii 리모컨의 - 버튼이나 게임큐브 컨트롤러의 Y 버튼을 눌러 이를 해결할 수 있습니다.
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### 지침

1. WiiWare 패처 최신 버전의 .zip 파일을 추출한 후, WAD를 넣습니다.
2. 사용하는 OS에 맞는 패치 스크립트를 실행합니다: 일반적으로 윈도우의 경우 `.bat`로 끝나고, 맥/리눅스의 경우 `.sh`로 끝납니다. RiiConnect24 패처를 사용하는 경우 장치 (Wii, vWii 또는 Dolphin)를 선택하고 WiiWare 패처를 선택하세요.
3. 성공적으로 완료되면 [YAWM ModMii Edition](yawmme)을 사용하여 `wiiware-wads`에서 만들어진 WAD를 설치합니다.

:::

### PC를 통한 수동 디스크 이미지 패치

::: details

게임 디스크 이미지에서 실행되는 Wiimmfi 패치 방법이지만, 스크립트를 통해 PC에서 수동으로 실행해야 합니다.

#### 요구 사항

- 인터넷 연결이 가능한 리눅스/맥OS/윈도우 PC
- 패치하려는 게임의 사본 - 지원되는 형식은 `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, `FST`입니다. `NKIT`는 지원되지 않습니다.
- [Wiimmfi ISO 패처](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### 지침

1. 패처를 다운로드하고 `.zip` 파일을 압축 해제합니다.
2. 압축 해제된 폴더를 열고 Wii ​​게임 이미지를 복사합니다.
   - 윈도우를 사용하는 경우 `patch-images.bat` 파일을 두 번 클릭합니다. (이 파일은 "patch-images" 배치 파일로 표시될 수도 있음) Cygwin 관련 문제가 발생하면 대신 `patch-images-32.bat` 파일을 사용해 봅니다.
   - If you're on macOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - 리눅스를 사용하는 경우 `patch-images.desktop` 파일을 두 번 클릭합니다. (이 파일은 "패치 이미지"로 표시될 수도 있음) 또는 `chmod +x *.sh` 명령으로 실행 가능하게 만든 후 터미널에서 `./patch-images.sh` 파일을 실행합니다.
3. 위의 과정이 성공적이라면 패치 과정을 표시하는 창 팝업이 나타날 것입니다. 이 과정이 완료되면 `wiimmfi-images`라는 폴더에서 패치된 이미지를 찾을 수 있습니다.

:::

---

::: tip

[추천 홈브류](recommended-homebrew)로 계속하기

This guide provides a selection of homebrew that highlights some of the things you can now do with your Wii. These include emulators, game hacks, and more.

:::
