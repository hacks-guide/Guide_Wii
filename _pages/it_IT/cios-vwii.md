---
title: d2x cIOS per vWii
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii U users. <br/>
If you have a Wii, follow [this guide](cios) instead. <br/>
If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Requisiti

- A Wii U with the Homebrew Channel installed on the vWii
- Una scheda SD
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

Assicurati che, se stai usando la scheda SD, l'interruttore della proteziona scrittura sia in posizione disattivata, altrimenti non potrai selezionare le opzioni corrette nell'installer.
{: .notice--warning}

### Istruzioni

#### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card.
2. Eject the SD card from your PC and insert it into the Wii U.
3. Power on your Wii U and launch vWii.
4. Launch The Homebrew Channel.
5. Launch d2x cIOS Installer.
6. Imposta le opzioni in modo che corrispondano a quanto segue:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
7. Press the `A` button to install.
8. Imposta le opzioni in modo che corrispondano a quanto segue:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
9. Press the `A` button to install.
10. Imposta le opzioni in modo che corrispondano a quanto segue:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. Press the `A` button to install.
12. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

Continue to [Finalizing Setup](vwii-finalizing-setup)
{: .notice--info}
