---
title: d2x cIOS for vWii
---

{% include toc title="Tabla de contenido" %}

{% capture technical_info %}

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Ahora puedes usar aplicaciones homebrew como <a href="usbloadergx">USB Loader GX</a> y <a href="wiiflow">WiiFlow</a>. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Esta guía solo aplica para usuarios de Wii mini. If you have a Wii, follow [this guide](cios) instead. If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Requisitos

- A Wii U with the Homebrew channel installed on the vWii
- Una tarjeta SD
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

Si vas a usar una tarjeta SD, asegúrate de que no esté protegida contra escritura, pues de lo contrario no podrás elegir las opciones correctas en el instalador.
{: .notice--warning}

### Instrucciones

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
