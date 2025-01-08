# d2x cIOS for vWii

:::details 기술 세부사항 (선택 사항)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 이제 <a href="usbloadergx">USB Loader GX</a> 및 <a href="wiiflow">WiiFlow</a>와 같은 홈브류를 사용할 수 있습니다. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

This guide is only intended for Wii U users.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- A Wii U with the Homebrew Channel installed on the vWii
- SD 카드
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## Instructions

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card.
2. Eject the SD card from your PC and insert it into the Wii U.
3. Power on your Wii U and launch vWii.
4. Launch The Homebrew Channel.
5. Launch d2x cIOS Installer.
6. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
7. Press the `A` button to install.
8. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
9. Press the `A` button to install.
10. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. Press the `A` button to install.
12. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

::: tip

Continue to [Finalizing Setup](vwii-finalizing-setup)

:::
