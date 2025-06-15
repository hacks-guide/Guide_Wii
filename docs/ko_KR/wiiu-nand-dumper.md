# vWii 개조 가이드

이 페이지에서는 Wii U 측면을 개조하지 않고 vWii를 개조하는 과정을 안내합니다. 이 가이드에서는 Wii U 커스텀 펌웨어를 사용하지만, 실제로 Wii U 쪽에는 아무것도 설치되지 않습니다. vWii에서 작동하는 더 많은 익스플로잇을 보려면 [레거시 익스플로잇](legacy-exploits) 페이지를 방문하세요.

::: info

Wii U 쪽이 이미 모드가 적용된 경우 [홈브류 채널 설치](vwii-homebrew-channel)로 진행합니다.

:::

::: info

SD 카드는 FAT32로 포맷해야 합니다. If your SD Card is not formatted to FAT32, follow [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) to format it. SD 카드에 `wiiu`라는 **라벨을 붙이지 마세요.** 그렇지 않으면 홈브류에서 문제가 발생할 수 있습니다.

## 요구 사항

- [카페를 위한 아로마](https://aroma.foryour.cafe/)의 최신 파일입니다.
   - 예비 단계를 검토한 다음 4 개의 확인란을 모두 선택합니다.
   - nanddumper가 선택되었는지 다시 한번 확인합니다.
   - `페이로드 다운로드`를 클릭합니다.
   - `베이스 아로마 다운로드`를 클릭합니다.
- [Compat Title 설치 프로그램](https://hb-app.store/wiiu/CompatTitleInstaller)의 최신 릴리스입니다.

## 지침

### 섹션 I - SD 준비

1. Wii U의 SD 카드를 PC에 연결합니다.
2. 다운로드한 아로마 _`.zip`_ 파일의 내용을 SD 카드의 루트에 복사합니다.
3. `CompatTitleInstaller.zip` 파일의 내용을 SD 카드의 루트에 복사합니다.

SD 카드 레이아웃

::: details 여기를 클릭하면 최종 SD 카드 레이아웃을 볼 수 있습니다.

```
💾sd:
 ┗ 📁 wiiu
   ┣ 📁 apps
   ┃ ┣ 📄 AromaUpdater.wuhb
   ┃ ┗ 📄 PayloadLoaderInstaller.wuhb
   ┣ 📁 environments
   ┃ ┗ 📁 aroma
   ┃   ┣ 📁 modules
   ┃   ┃ ┗ 📁 setup
   ┃   ┃   ┣ 📄 00_mocha.rpx
   ┃   ┃   ┣ 📄 10_wums_loader.rpx
   ┃   ┃   ┗ 📄 99_autoboot.rpx
   ┃   ┣ 📁 plugins
   ┃   ┃ ┣ 📄 AromaBasePlugin.wps
   ┃   ┃ ┣ 📄 drc_region_free.wps
   ┃   ┃ ┣ 📄 homebrew_on_menu.wps
   ┃   ┃ ┗ 📄 regionfree.wps
   ┃   ┗ 📄 root.rpx
   ┣ 📁 payloads
   ┃ ┣ 📁 default
   ┃ ┃ ┗ 📁 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

:::

### 섹션 II - 익스플로잇 시작

::: info

이 단계에서는 Wii U가 인터넷에 접속할 수 있는지 확인합니다.

:::

1. 컴퓨터에서 SD 카드를 꺼내서 Wii U 콘솔에 연결합니다.
2. 인터넷 브라우저를 실행하고 `wiiuexploit.xyz` 웹사이트로 이동합니다.
3. `Run Exploit!`을 클릭하고 `Please choose your payload:`라는 화면이 나올 때까지 B 버튼을 누릅니다. 이는 다음 단계에 필요합니다.
   - Wii U의 화면이 흰색이나 멈춘 상태로 멈춘 경우, 몇 초간 기다려 봅니다. 아무 일도 일어나지 않으면 콘솔을 재부팅하고 [브라우저 저장 데이터를 재설정](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history)한 다음 다시 시도합니다.
   - EnvironmentLoader가 보인다면 B 버튼을 충분히 오랫동안 누르지 않은 것입니다. 다시 시도해 봅니다.

### 섹션 III - 낸드 백업

이후 과정에서 문제가 발생하여 vWii가 작동하지 않게 되면, 이전에 만든 낸드 백업을 복원하면 문제를 해결할 수 있습니다.

1. Wii U 게임패드의 십자 패드를 사용하여 다음 구성을 입력합니다.
   - SLC 덤프: **선택 사항**
   - SLCCMPT 덤프: **예**
   - MLC 덤프: **선택 사항**
   - OTP 덤프: **예**
   - SEEPROM 덤프: **선택 사항**
2. A 버튼을 눌러 덤프 과정을 시작합니다.
3. 과정이 완료되면 Wii U의 전원을 끄고 Wii ​​U에서 SD 카드를 꺼내 PC에 연결합니다.
4. 파일을 잃어버리지 않으려면 `slccmpt.bin` 및 `otp.bin` 파일을 컴퓨터에 복사합니다. (전체 백업을 선택한 경우에는 `seeprom.bin`, `slc.bin`, `모든 mlc.bin.part` 파일도 복사)
5. SD 카드에서 파일을 삭제하여 공간을 확보합니다.
6. 컴퓨터에서 SD 카드를 꺼내서 Wii U 콘솔에 연결합니다.

::: tip

[홈브류 채널 설치 계속](vwii-homebrew-channel-no-wiiu-mods)

:::
