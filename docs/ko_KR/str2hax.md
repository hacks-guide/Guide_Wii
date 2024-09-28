# str2hax

::: warning

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).

:::

str2hax는 Wii의 최종 사용자 라이선스 동의서를 이용해서 실행되는 Wii의 취약점입니다. 아무것도 필요하지 않으나 Wii의 DNS를 변경할 수 있게 하는 인터넷 연결이 필요합니다.

::: warning

CTGP Revolution 또는 Project+와 같은 모드를 설치한 경우, str2hax가 대신 해당 Mod를 로드할 수 있습니다. 이 경우 Wii를 재시동하고 SD 카드를 연결하지 않은 상태에서 다시 시도합니다.

:::

## 메뉴

- 인터넷 연결이 있는 Wii

## 진행 방법

### 섹션 I - 연결

이 취약점 공격을 사용하려면 취약점 공격이 포함된 서버에 연결하기 위해 DNS를 설정해야 합니다.

1. 콘솔의 전원을 켜 주세요.

2. Go to `Wii Options`.

   ![](/images/riiconnect24/Internet_1.png)

3. Go to `Wii Settings`.

   ![](/images/riiconnect24/Internet_2.png)

4. Navigate to `Page 2` -> `Internet` -> `Connection Settings`.

   ![](/images/riiconnect24/Internet_3.png)

   ![](/images/riiconnect24/Internet_4.png)

5. Click on your network connection slot and navigate to `Change Settings`.

   ![](/images/riiconnect24/Internet_5.png)

   ![](/images/riiconnect24/Internet_6.png)

6. Set `Auto-Obtain DNS` to `No`, then click `Advanced Settings`.

   ![](/images/riiconnect24/Internet_7.png)

7. Set the Primary DNS to `3.143.163.250`.

   ![](/images/exploits/str2hax/dns.png)

   ::: warning

   If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.

   :::

8. Click `Confirm`, then click `Save`.

   ![](/images/riiconnect24/Internet_10.png)

9. When prompted, click `OK` to perform the connection test.

   ![](/images/riiconnect24/Internet_11.png)

   ![](/images/riiconnect24/Internet_12.png)

   - If the connection test was successful, select `No` to skip the Wii System Update.
   - If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
   - If it is still unsuccessful, please [use another exploit](get-started).

### 섹션 II - 취약점 실행하기

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.

2. Select `Yes`.

3. Click on `Next`.

   - 다음과 같은 화면이 표시됩니다:

   ![](/images/exploits/str2hax/EULA.png)

   - 일반 사용자 동의를 받으면 ISP가 커스텀 DNS 사용을 차단합니다. Try another connection, or [use another exploit](get-started).

4. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).

5. 그런 다음 HackMii 설치 프로그램을 다운로드하고 로드합니다.

   ![](/images/hackmii/scam.png)

   - If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
