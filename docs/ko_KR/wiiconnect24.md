# WiiConnect24

<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24)는 인터넷에 연결된 Wii를 사용하는 사용자가 날씨와 뉴스를 보고, 친구에게 메시지를 보내고, Mii 콘테스트에 참여하는 등의 기능을 제공하는 서비스였습니다. WiiConnect24는 2013년 6월 27일에 중단되었습니다. Although discontinued, there is a reverse-engineered service that you can connect to which restores this functionality, described below.

## WiiLink

[WiiLink](https://www.wiilink.ca/) is a revival service for WiiConnect24 that allows you to regain and expand its functionality on your console. WiiLink는 뉴스 채널과 같은 국제 채널부터 Wii Room과 같은 지역별 독점 채널에 이르기까지 제공하는 서비스에 대한 패처를 호스팅합니다. The guide on how to install these services, as well as the patcher, can be found [on WiiLink's website.](https://www.wiilink.ca/guide/)

## RTC 시계 업데이트

In some cases, the RTC clock on your Wii may be desynced, causing errors when trying to connect to WiiConnect24 services, or other general online services on the Wii. In the event that you are receiving connection errors like FORE000006, you may use the below instructions to re-sync your Wii's internal RTC clock with the Internet.

::::: tabs

:::: tab Wii

### 요구 사항

- A Wii with an active Internet connection
- 홈브류 채널
- SD 카드 및 USB 드라이브
- [sntp](https://oscwii.org/library/app/sntp)

### 지침

1. sntp zip 파일을 다운로드하여 SD 카드나 USB 드라이브의 루트에 압축 해제합니다.

2. SD 카드나 USB 드라이브를 Wii에 연결합니다.

3. Wii에서 홈브류 채널을 실행합니다.

4. sntp를 실행합니다.

   ![](/images/wiiconnect24/sntp/sntp-hbc.png)

5. Use the left and right arrows on the +Control Pad to select the time zone that matches your current time, then press the A button to write it to your system configuration.

   ![](/images/wiiconnect24/sntp/sntp-time-select.png)

6. 홈 버튼을 눌러 종료합니다.

   ![](/images/wiiconnect24/sntp/sntp-success.png)

::::

:::: tab Wii U (vWii)

### 요구 사항

- An exploited vWii environment
- 홈브류 채널
- 일반적으로 허용되지 않는 저장 파일을 데이터 관리에서 SD 카드로 복사할 수 있습니다.
- [Priiloader](priiloader)

### 지침

1. [UTC 패치 생성기](https://garyodernichts.github.io/priiloader-patch-gen/) 웹사이트를 방문하여 정보를 입력합니다.

   ![](/images/wiiconnect24/priiloader/patch-generate.png)

2. 생성을 선택하고 정보를 복사합니다.

   ![](/images/wiiconnect24/priiloader/patch-copy.png)

3. SD 카드에서 `SD:/apps/priiloader`로 이동한 후 메모장과 같은 텍스트 편집기를 사용하여 `hacks_hash.ini`를 엽니다.

   ![](/images/wiiconnect24/priiloader/hacks-ini.png)

4. `hacks_hash.ini` 하단에 패치를 붙여넣고 변경 사항을 저장합니다.

   ![](/images/wiiconnect24/priiloader/hacks-ini-edit.png)

5. 해당 지역에서 일광 절약 시간제가 적용되는 경우 새로운 시간 오프셋을 사용하여 1~4 단계를 반복합니다.

6. Wii U에 SD 카드를 연결합니다.

7. vWii에서 [Priiloader 부팅](priiloader#section-iii---entering-priiloader)를 실행합니다.

8. Select `System Menu Hacks`, and ensure that the Fix NWC24iSetUniversalTime hack is enabled.

   ![](/images/wiiconnect24/priiloader/select-patch.png)

9. vWii 메뉴로 돌아갑니다.

::::

:::::

## Wiiconnect24 Priiloader Hacks (vWii and Wii mini)

::: info

On vWii, the [Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii) and [Always enable WiiConnect24 on boot](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii) hacks cannot be enabled at the same time. It is recommended to just enable the Permanent vWii Systems Settings hack, as you can enable WiiConnect24 there without issue. More information can be found [on the Priiloader FAQ page](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii).

:::

If you are using vWii or a Wii mini, some Priiloader hacks need to be enabled to allow proper WiiConnect24 functionality. In `System Menu Hacks`, enable the following options according to your console:

| Console Type | Priiloader Options                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vWii         | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li><br><li>[Permanent vWii System Settings](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)</li><br><li>[Fix NWC24iSetUniversalTime](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)</li></ul> |
| Wii 미니       | <ul><li>[Create message via Calendar button](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)</li></ul>                                                                                                                                                                                                                                                                                 |

## WiiVCLaunch (vWii)

If you are on the Wii U, please ensure that you install WiiVCLaunch to ensure that your system settings are not overwritten when you run Wii Virtual Console games in the Wii U menu.

### 요구 사항

- An exploited Wii U with the Aroma Environment
- 일반적으로 허용되지 않는 저장 파일을 데이터 관리에서 SD 카드로 복사할 수 있습니다.
- [WiiVCLaunch](https://github.com/Lynx64/WiiVCLaunch/releases)

### 지침

1. Power off your console, and insert your SD card into your PC.

2. Go to the GitHub link above, and download the `WiiVCLaunch.wps` file.

   ![](/images/wiiconnect24/wiivclaunch/wps-download.png)

3. Copy the `WiiVCLaunch.wps` file to your SD card in the `/wiiu/environments/aroma/plugins` directory.

   ![](/images/wiiconnect24/wiivclaunch/wps-directory.png)

4. Insert the SD card into your Wii U and boot it into the Aroma Environment.

5. Hit the `L` + `+DPAD Down` + `- Minus` combination on your Gamepad/Pro Controller/Classic Controller, or the `B` + `+Control Pad Down` + `- Minus` combination on your Wii Remote to open the Wii U Plugin System Config Menu. Find the `Wii VC Launch` menu option and press `A`.

   ![](/images/wiiconnect24/wiivclaunch/aroma-config-menu.png)

6. Find the `Other settings` menu option and press `A`.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-config-menu.png)

7. Ensure that the `Preserve SYSCONF on Wii VC title launch` option is set to `true`. Once this is finished, you may exit the config menu by pressing `B` until you are at the Wii U menu.

   ![](/images/wiiconnect24/wiivclaunch/wiivc-sysconf-config.png)

---

::: tip

[닌텐도 Wi-Fi 연결로 이동](nintendowfc)

This guide explains how to restore Nintendo Wi-Fi Connection functionality, allowing you to play games like Mario Kart Wii online again. While there are different services that might allow this, the one covered here will be Wiimmfi.

:::
