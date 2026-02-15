# Open Shop Channel

::: info

오픈 샵 채널에 대한 지원 (영어)을 원하시면 [디스코드의 오픈 샵 채널](https://discord.gg/osc)에 가입합니다.

:::

[오픈 샵 채널](https://oscwii.org/)은 dhtdht020이 만든 홈브류 앱 저장소이며 현재 홈브류를 다운로드하는 가장 선호되는 방법입니다.

오픈 샵 채널을 이용하는 방법에는 두 가지가 있습니다. 홈브류 브라우저를 통해 Wii에서 이용하는 방법, OSCDL을 통해 Wii 외부에서 이용하는 방법입니다.

## 방법 I - 홈브류 브라우저

### 요구 사항

- 활성 인터넷 연결이 있는 홈브류 Wii
- SD 카드 및 USB 드라이브
- [홈브류 브라우저](https://oscwii.org/library/app/homebrew_browser)

### 지침

1. 오픈 샵 채널 웹사이트에서 추천하는 `.zip` 파일을 다운로드합니다.

   ![](/images/osc/zip-download-HBB.png)

2. 보관 파일의 `apps` 폴더를 SD 카드나 USB 드라이브의 루트에 압축 해제합니다. 선택적으로, 보관소에는 홈브류 브라우저를 사용하는 방법에 대한 가이드도 제공됩니다.

3. SD 카드나 USB 드라이브를 Wii에 연결하고 홈브류 채널로 이동합니다. 이제 홈브류 브라우저로가 표시될 것입니다.

## 방법 II - OSCDL

### 요구 사항

- 인터넷 연결이 가능한 윈도우/맥OS/리눅스 컴퓨터
- SD 카드 및 USB 드라이브
- [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)의 최신 버전

### 윈도우용 지침

::: info

마이크로소프트 스마트스크린 창이 나타날 수 있습니다. 이는 긍정 오류이므로, 무시하고 실행합니다.

:::

::: info

프로그램이 PC에 변경 사항을 적용할지 여부를 묻는 사용자 계정 컨트롤 팝업이 나타나면 예를 선택합니다. 오픈 샵 채널은 안전한 응용 프로그램입니다.

:::

1. `oscdl-installer.exe`를 다운로드하고 설치 프로그램을 실행합니다. 선택적으로, 설치할 필요가 없고 휴대용 실행 파일로 실행되는 `oscdl-standalone.exe`를 다운로드할 수 있습니다.

   ![](/images/osc/exe-download-OSCDL.png)

2. 설치 프로그램을 실행한 후, 프로세스가 완료되면 OSCDL을 시작합니다.

   ![](/images/osc/install-finished-OSCDL.png)

3. 원하는 응용 프로그램을 찾은 후 다운로드 버튼을 누릅니다. 혹은, 앱을 Wii로 직접 보낼 수도 있습니다. (이렇게 하려면 컴퓨터와 Wii가 동일한 네트워크에 있어야 함)

   ![](/images/osc/app-download-OSCDL.png)

4. 직접 다운로드하는 경우 다운로드 위치를 묻는 대화 상자가 나타납니다. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. 그렇지 않은 경우, 수동 다운로드 위치를 지정하여 직접 압축 해제 할 수도 있습니다.

   ![](/images/osc/download-prompt-OSCDL.png)

5. SD 카드나 USB 드라이브를 Wii에 연결하고 홈브류 채널로 이동합니다. 이제 다운로드한 홈브류가 표시될 것입니다.

### 맥OS/리눅스용 지침

::: warning

이러한 플랫폼에서 OSCDL을 사용하려면 파이선 3을 설치해야 합니다. Please note that on certain distros, Python 3 may use either `python` or `python3` as an alias, please be aware of this for Step 6. You will also create a virtual environment to isolate OSCDL and its dependencies from your base Python installation.

:::

1. 이러한 플랫폼에서 OSCDL을 사용하려면 파이선 3을 설치해야 합니다. Optionally, you can instead run `git clone https://github.com/dhtdht020/osc-dl.git` in the directory you would like to use OSCDL in.

   `.zip` 또는 `.tar.gz` 형식의 OSCDL 소스 코드를 다운로드합니다.

2. If you chose to download the source code, extract the archive to a location on your computer that you would like to use OSCDL in.

3. Open the location of the extracted files in a terminal and run the command `python3 -m venv venv` to create a virtual environment. Note that, if you receive a message that `ensurepip` is not available, you must install the `python3-venv` package for your distribution. Python may provide a command for you to use to accomplish this.

   ![](/images/osc/create-virtual-environment.png)

4. Run the command `source venv/bin/activate` to activate the virtual environment.

   ![](/images/osc/activate-virtual-environment.png)

5. Run the command `pip install -r requirements.txt`. 이렇게 하면 OSCDL을 실행하는 데 필요한 Python 패키지가 다운로드됩니다.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

6. `python3 oscdl.py` 명령을 실행합니다. 그러면 프로그램이 열립니다. If you choose to keep the terminal open, you can use `deactivate` to exit the virtual environment. Additionally note that you must run `source venv/bin/activate` in the directory where OSCDL was extracted every time you open a new terminal. This is in order to load the dependencies needed to run OSCDL.

   ![](/images/osc/run-OSCDL-terminal.png)

7. Once OSCDL is open, find an application that you would like to get, and press the Download button. 혹은, 앱을 Wii로 직접 보낼 수도 있습니다. (이렇게 하려면 컴퓨터와 Wii가 동일한 네트워크에 있어야 함)

   ![](/images/osc/app-download-OSCDL-linux.png)

8. 직접 다운로드하는 경우 다운로드 위치를 묻는 대화 상자가 나타납니다. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. 그렇지 않은 경우, 수동 다운로드 위치를 지정하여 직접 압축 해제 할 수도 있습니다.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

9. SD 카드나 USB 드라이브를 Wii에 연결하고 홈브류 채널로 이동합니다. 이제 다운로드한 홈브류가 표시될 것입니다.

::: tip

[추천 홈브류](recommended-homebrew)로 계속하기

이 가이드에서는 유용하다고 생각되는 홈브류의 선택을 개략적으로 설명합니다. 여기에는 유틸리티부터 에뮬레이터까지 다양한 항목이 포함됩니다.

:::

::: tip

[사이트 색인으로 돌아가기](site-navigation)

:::
