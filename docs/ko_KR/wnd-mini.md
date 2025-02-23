# Wii 미니 낸드 덤프

이 자습서에서는 SD 카드 슬롯을 납땜하지 않고도 Wii 미니의 낸드를 제거하는 방법을 보여줍니다. 이는 [nitr8](https://gbatemp.net/members/nitr8.72581/) 덕분에 가능해졌습니다.

::: info

Wii 미니 해킹에 대한 (영어) 지원을 받으려면 디스코드의 [Wii 미니 해킹](https://discord.gg/6ryxnkS)에 참여하세요.

:::

::: info

SD 카드 슬롯이 납땜된 Wii 또는 Wii 미니가 있는 경우 [이 자습서](bootmii)에 따라 낸드를 덤프하세요.

:::

::: info

하드개조 없이는 이 방법으로 낸드 백업을 복원할 수 있는 방법이 없습니다.

:::

## 요구사항

- Wii
- USB 드라이브
- [Wii 미니용 Simple IOS Patcher](http://www.mediafire.com/file/7k141mu1whqzwdp/SimpleIOSPatcher_Mini.zip/file)
- [Wii 미니용 RealWnD](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy 개조](https://oscwii.org/library/app/xyzzy-mod)

## 소개

### 섹션 I - IOS 36 덤프 및 패치

1. Wii 미니용 Simple IOS Patcher와 Wii 미니용 RealWnD를 모두 다운로드하고, 두 zip 파일을 모두 USB 드라이브의 루트에 압축 해제합니다.

2. USB 드라이브를 Wii 미니에 연결하고 홈브류 채널에서 Wii 미니용 Simple IOS Patcher를 실행합니다.

3. 자동으로 IOS 36 버전을 감지하고 슬롯 236에 패치를 진행합니다. 또한 USB에 IOS 236 wad 파일도 제공됩니다.

### 섹션 II - 낸드 덤프

1. 홈브류 채널에서 Wii 미니용 RealWnD를 실행합니다.
2. Wii 미니에서 IOS 236을 자동으로 감지하고 일부 런타임 패치를 적용하여 낸드 덤프를 시작합니다.
3. 완료되면 USB에 3 개의 새 파일이 생성됩니다:

```
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

`WiiFlash_n_ECC.img`는 낸드 이미지입니다. 나머지 두 파일은 "오류" 데이터이며 쓸모가 없습니다.

### 섹션 III - Wii 미니 키 덤프

1. 홈브류 채널에서 xyzzy 개조를 실행하세요.
2. `USB 장치` 선택
   - 콘솔 정보를 검색하기 시작할 것입니다.
3. 완료되면 아무 버튼이나 눌러 종료합니다.

   - USB에 5 개의 새 파일이 생성됩니다:

   ```
   bootmii_keys.bin
   device.cert
   keys.txt
   otp.bin
   seeprom.bin
   ```

지금은 `bootmii_keys.bin` 파일만 필요합니다.

### 섹션 IV - 선택 사항: 낸드를 돌핀 에뮬레이터에 업로드

1. USB를 PC에 연결합니다.
2. USB에서 `bootmii_keys.bin`을 찾아 `keys.bin`으로 이름을 바꿉니다.
3. PC에서 돌핀 에뮬레이터를 엽니다.
4. 도구 탭을 선택하고 드롭다운 메뉴에서 "낸드 관리"로 이동한 다음 "BootMii 낸드 백업 가져오기"를 선택합니다.
5. 파일 이름 표시줄 바로 옆에 있는 드롭다운을 선택한 다음 "모든 파일" 옵션을 선택합니다.
6. `WiiFlash_n_ECC.img` 파일을 찾아 "열기"를 선택합니다.
7. 키를 요구하는 또 다른 창이 나타납니다. `keys.bin`을 찾아 "열기"를 선택합니다.

::: info

Wii 미니 낸드를 사용하여 돌핀에서 Wii 게임을 온라인으로 플레이하려면 최신 베타 또는 돌핀 에뮬레이터 개발 버전을 사용 중이더라도 [이 자습서](https://dolphin-emu.org/docs/guides/wii-network-guide/)에 따라 온라인에 필요한 파일을 검색합니다.

:::

::: tip

[오픈 샵 채널 설치](osc)를 계속 진행합니다.

이제 Wii가 적절한 벽돌 보호 기능을 갖추었으므로 Wii에서나 외부에서 모두 접속할 수 있는 홈브류의 신뢰할 수 있는 저장소인 오픈 샵 채널을 설치할 수 있습니다.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
