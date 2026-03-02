# Priiloader 사용법

Priiloader는 Wii에 벽돌 방지 수준을 추가하는 필수 도구입니다. It loads before the Wii Menu does (hence the name). The tool can also enable hacks for your Wii Menu, and be used to quickly launch the Homebrew Channel, BootMii, or whatever homebrew you want!

또한, 이를 사용하면 타이틀이나 홈브류를 빠르게 실행하거나 Wii의 자동 부팅 방식을 변경할 수 있습니다.

이 페이지에서는 Priiloader의 유용한 기능 중 일부를 소개합니다.

## 시스템 메뉴 핵

Priiloader에는 다양한 옵션이 있으며, 이를 활성화하면 Wii의 동작을 사용자가 원하는 대로 변경할 수 있습니다. You can find more information on each hack on the [Priiloader hacks list](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). 또한, 시스템 메뉴 해킹에 관한 더 자세한 정보는 [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html)를 참조하세요.

## 추가 옵션

Priiloader를 사용하여 홈브류 경험을 개선할 수 있는 몇 가지 추가 기능을 소개합니다. 이는 선택 사항입니다.

### Priiloader로 자동 부팅

Priiloader를 사용하면 홈브류 채널, 개별 홈브류 응용 프로그램 또는 Priiloader 자체로 자동 부팅할 수 있습니다. 이는 선택 사항입니다.

#### 홈브류 응용 프로그램 자동 부팅

::: warning

USB loader GX를 자동 부팅하려면 먼저 다음을 수행합니다.

- USB Loader GX 포워더 WAD([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad))를 다운로드합니다.
- [Priiloader용 UNEO 채널 부팅 프로그램](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download)을 다운로드합니다.
- [YAWM ModMii Edition](yawmme)과 같은 WAD 매니저를 사용하여 포워더 WAD를 설치합니다.
- `UNEO Channel Booter for Priiloader.zip` 파일을 아무 곳에나 압축 해제합니다.
- `uneoboot.dol`을 SD 카드의 루트에 복사합니다.

3 단계에서는 `uneoboot.dol`을 설치합니다.

:::

1. 홈브류 채널 시작

2. 홈브류 목록에서 Load Priiloader를 실행합니다.

3. 아래로 스크롤하여 `파일 로드/설치`를 선택하고 A 버튼을 누릅니다.

   ![](/images/priiloader/menu_install_file.png)

4. 원하는 홈브류 앱이 강조 표시될 때까지 메뉴를 스크롤한 후 A 버튼을 눌러 설치합니다.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. 메인 메뉴로 돌아가려면 `B` 버튼을 누릅니다.

6. 아래로 스크롤하여 `설정`을 선택한 후 A 버튼을 누릅니다.

   ![](/images/priiloader/menu_settings.png)

7. 오른쪽 버튼을 눌러 자동 부팅 옵션을 순환하면서 '설치된 파일' 옵션이 선택될 때까지 이동합니다.

   ![](/images/priiloader/autoboot_installed_file.png)

8. 아래로 스크롤하여 `설정 저장`을 클릭하고 A 버튼을 누릅니다.

   ![](/images/priiloader/settings_save.png)

9. 메인 메뉴로 돌아가려면 `B` 버튼을 누릅니다.

10. 다시 '시스템 메뉴'로 스크롤하여 A 버튼을 누릅니다.

이제 Wii가 설치한 홈브류 앱으로 자동 부팅될 것입니다.

#### 홈브류 채널 또는 Priiloader 자동 부팅

1. 홈브류 채널 시작

2. 홈브류 목록에서 Load Priiloader를 실행합니다.

3. 아래로 스크롤하여 `설정`을 선택한 후 A 버튼을 누릅니다.

   ![](/images/priiloader/menu_settings.png)

4. 원하는 옵션이 선택될 때까지 자동 부팅 옵션을 순환하려면 오른쪽을 누릅니다.

   - `비활성화`를 선택하면 Priiloader 메뉴로 자동 부팅됩니다.

   ::: warning

   Autoboot를 `BootMii IOS`로 설정하지 마세요. RESET 버튼을 계속 눌러 Priiloader 메뉴로 들어가기 전까지는 루프에 빠지게 됩니다.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. 아래로 스크롤하여 `설정 저장`을 클릭하고 A 버튼을 누릅니다.

   ![](/images/priiloader/settings_save.png)

6. 메인 메뉴로 돌아가려면 `B` 버튼을 누릅니다.

7. 다시 '시스템 메뉴'로 스크롤하여 A 버튼을 누릅니다.

---

::: tip

[Click here to return to the main Priiloader guide.](priiloader)

:::

---

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
