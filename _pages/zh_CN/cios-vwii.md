---
title: d2x cIOS for vWii
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 <a href="usbloadergx">USB Loader GX</a> 和 <a href="wiiflow">WiiFlow</a>。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii U (vWii) users. If you have a Wii, follow [this guide](cios) instead. If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### 需要

- A Wii U with the Homebrew channel installed on the vWii
- 一张SD卡
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

如果您使用的是 SD 卡，确保锁定开关位于解锁，否则您将无法在安装程序中选择正确的选项。
{: .notice--warning}

### 步骤

#### Section I - Installing

1. Insert the SD into the Wii U.
2. Power on your Wii U and launch vWii.
3. Launch The Homebrew Channel.
4. Launch d2x cIOS Installer.
5. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
6. Press the `A` button to install.
7. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
8. Press the `A` button to install.
9. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `58`
   - Select cIOS slot: `251`
10. Press the `A` button to install.
11. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

Continue to [Finalizing Setup](vwii-finalizing-setup)
{: .notice--info}
