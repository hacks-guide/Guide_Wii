---
title: d2x cIOS for vWii
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii U (vWii) users. If you have a Wii, follow [this guide](cios) instead. If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Követelmények

- A Wii U with the Homebrew channel installed on the vWii
- An SD card
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

Ensure that if you are using an SD card, the lock switch is in the unlocked position, otherwise you will not be able to select the correct options in the installer.
{: .notice--warning}

### Útmutató

#### I. rész - Telepítés

1. Insert the SD into the Wii U.
2. Power on your Wii U and launch vWii.
3. Launch The Homebrew Channel.
4. Indítsd el a d2x cIOS Installer-t.
5. Állítsd be minden a következők szerint:
   - cIOS: `d2x-v11-beta1-vWii`
   - cIOS base: `56`
   - cIOS slot: `249`
6. Nyomj `A` gombot a telepítéshez.
7. Set everything to match the following:
   - cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
8. Nyomj `A` gombot a telepítéshez.
9. Set everything to match the following:
   - cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `58`
   - Select cIOS slot: `251`
10. Nyomj `A` gombot a telepítéshez.
11. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

Continue to [Finalizing Setup](vwii-finalizing-setup)
{: .notice--info}
