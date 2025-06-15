# Wii 게임 바로가기 만들기

This guide provides instructions on how to create Wii game shortcuts for game backups that you have on external storage devices, using a piece of software called WiiGSC (Wii Game Shortcut Creator). By creating game shortcuts, you can launch a game backup directly from the Wii Menu as if you had inserted the game as a regular disc.

::: warning

Installing [Priiloader](priiloader) and [BootMii](bootmii) are advised due to brick risk in this guide, and should keep you safe along with following the guide correctly. Do NOT continue the guide unless you have installed Priiloader or BootMii!

:::

::: warning

"마리오 파티 9" 또는 "A Boy and His Blob" 게임에 대한 바로 가기를 만들지 마세요. Wii가 벽돌이 됩니다.

:::

::: warning

Your browser or antivirus software may flag WiiGSC as malware - this is a false positive. WiiGSC does NOT contain any malware.

:::

::: info

Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

:::

## Wii 메뉴는 기존 시스템 채널을 제외하고, 48개 채널로 제한됩니다.

- Wii
- SD 또는 USB 드라이브
- A Windows computer
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## 지침

### Section I - Creating a Channel

1. Extract the WiiGSC `.zip`, find `WiiGSC.exe`, and launch it. The first launch will prompt you about common key creation and provide a disclaimer - simply click through these windows.

    ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. With WiiGSC open, select `Open WBFS Drive` and select the drive letter for the device containing your WBFS files. Alternatively, you may select an individual ISO/WBFS file.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Select the game you would like to create a channel for, and then press `Use for Channel Creation`. Select the USB loader that you will use to launch the game, and then press `Create Channel` located in the bottom left corner.

    ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. Copy the output WAD to your SD card or other device used to load homebrew.

### Section II - Installing Channel

1. Open your WAD manager and locate the output WAD, then install it.

    ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. If successful, you should now see your game shortcut on the Wii Menu!

    ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

::: info

"The system files are corrupted"라는 오류가 표시되더라도 Priiloader를 설치했다면 당황하지 않습니다. Wii를 끄고, 콘솔에 사용 가능한 방법 중 하나를 사용하여 [Priiloader로 부팅](priiloader#section-iii---entering-priiloader)하세요. 홈브류 채널에 들어가서 WAD manager를 실행하여 WAD를 제거합니다. priiloader가 설치되지 않았다면 [BlueBomb](bluebomb)로 진행하세요.

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
