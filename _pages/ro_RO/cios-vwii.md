---
title: d2x cIOS for vWii
---

{% include toc title="Tabel de Conținut" %}

{% capture technical_info %}

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii U (vWii) users. If you have a Wii, follow [this guide](cios) instead. If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Instrumente necesare

- A Wii U with the Homebrew channel installed on the vWii
- An SD card
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

Asigură-te că dacă folosești un card SD, comutatorul de blocare este în poziția deblocată, altfel nu vei putea alege opțiunile corecte în instalator.
{: .notice--warning}

### Instrucțiuni

#### Section I - Installing

1. Insert the SD into the Wii U.
2. Power on your Wii U and launch vWii.
3. Launch The Homebrew Channel.
4. Launch d2x cIOS Installer.
5. Setează opțiunile astfel:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
6. Press the `A` button to install.
7. Setează opțiunile astfel:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
8. Press the `A` button to install.
9. Setează opțiunile astfel:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `58`
   - Select cIOS slot: `251`
10. Press the `A` button to install.
11. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

Continue to [Finalizing Setup](vwii-finalizing-setup)
{: .notice--info}
