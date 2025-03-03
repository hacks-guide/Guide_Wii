# str2hax

::: warning

Though str2hax allows you to install the Homebrew Channel on a Wii without an SD card, other vital steps later on (such as installing BootMii) still require an SD card.

::: warning

ISP나 네트워크 환경이 커스컴 DNS 서버를 사용하는 것을 방해하는 경우 str2hax는 작동하지 않으며 [다른 익스플로잇을 선택](get-started)해야 합니다.

:::

str2hax는 Wii의 최종 사용자 라이선스 동의서를 이용해서 실행되는 Wii의 익스플로잇입니다. 아무것도 필요하지 않으나 Wii의 DNS를 변경할 수 있게 하는 인터넷 연결이 필요합니다.

::: warning

CTGP Revolution 또는 Project+와 같은 모드를 설치한 경우, str2hax가 대신 해당 Mod를 로드할 수 있습니다. 이 경우 Wii를 재시동하고 SD 카드를 연결하지 않은 상태에서 다시 시도합니다.

:::

## 요구 사항

- 인터넷 연결이 있는 Wii

## 지침

### 섹션 I - 연결

이 취약점 공격을 사용하려면 취약점 공격이 포함된 서버에 연결하기 위해 DNS를 설정해야 합니다.

1. 콘솔의 전원을 켭니다.

2. `Wii 옵션`으로 갑니다.

   ![](/images/riiconnect24/Internet_1.png)

3. `Wii 설정`으로 갑니다.

   ![](/images/riiconnect24/Internet_2.png)

4. `페이지 2` -> `인터넷` -> `연결 설정`으로 이동합니다.

   ![](/images/riiconnect24/Internet_3.png)

   ![](/images/riiconnect24/Internet_4.png)

5. 네트워크 연결 슬롯을 클릭하고 `설정 변경`으로 이동합니다.

   ![](/images/riiconnect24/Internet_5.png)

   ![](/images/riiconnect24/Internet_6.png)

6. '자동으로 DNS 받기'를 '아니요'로 설정한 후, '고급 설정'을 클릭합니다.

   ![](/images/riiconnect24/Internet_7.png)

7. 기본 DNS를 `3.143.163.250`으로 설정합니다.

   ![](/images/exploits/str2hax/dns.png)

   ::: warning

   위와 같이 2 개가 아닌 3 개의 필드가 있는 경우, 뒤로 돌아가서 `자동으로 DNS 얻기` 페이지에 있는지 확인합니다.

   :::

8. `확인`을 클릭한 다음 `저장`을 클릭합니다.

   ![](/images/riiconnect24/Internet_10.png)

9. 메시지가 표시되면 `확인`을 클릭하여 연결 테스트를 수행합니다.

   ![](/images/riiconnect24/Internet_11.png)

   ![](/images/riiconnect24/Internet_12.png)

   - 연결 테스트가 성공하면 `아니요`를 선택하여 Wii 시스템 업데이트를 건너뜁니다.
   - `521xx` 오류 코드로 실패하는 경우 DNS를 올바르게 입력했는지 확인합니다.
   - 여전히 실패하면 [다른 익스플로잇을 사용합니다](get-started).

### 섹션 II - 취약점 실행하기

1. `인터넷` -> `이용자 계약` 또는 `계약/연락처`로 이동합니다.

2. `예`를 선택합니다.

3. `다음`을 클릭합니다.

   - 다음과 같은 화면이 표시됩니다:

   ![](/images/exploits/str2hax/EULA.png)

   - 일반 사용자 동의를 받으면 ISP가 커스텀 DNS 사용을 차단합니다. 다른 연결을 시도하거나 [다른 익스플로잇을 사용합니다](get-started).

4. 익스플로잇을 다운로드하는 데 1~2분이 걸립니다. (`동의함`/`동의하지 않음` 클릭 금지)

5. If the exploit was successful, your device will have loaded the HackMii Installer.

   ![](/images/hackmii/scam.png)

   - 2 분이 지나도 HackMii 설치 프로그램이 로드되지 않거나 `Hanging.` 또는 `ERROR! if_config (ret = ...)`와 같은 오류가 표시되면 Wii를 재시작하고 다시 시도합니다.

::: tip

[홈브류 채널 및 BootMii 설치 계속](hbc)

:::
