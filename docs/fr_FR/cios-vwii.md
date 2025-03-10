# d2x cIOS for vWii

:::details Technical Details (optional)

<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Par exemple, cela active les fonctionnalités des lanceurs USB comme USB Loader GX et WiiFlow, ainsi que d'autres homebrew comme SaveGame Manager GX. Vous pouvez sauter ce processus si vous le souhaitez, mais généralement il étend votre Wii avec peu à aucun inconvénient.

:::

::: warning

This guide is only intended for Wii U users.

<br/>
If you have a Wii, follow [this guide](cios) instead.

<br/>
If you have a Wii mini, follow [this guide](cios-mini) instead.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely brick your console.

:::

## Prérequis

- A Wii U with the Homebrew Channel installed on the vWii
- An SD card
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

Assurez-vous que, si vous utilisez une carte SD, le verrou est en position déverrouillée, sinon vous ne serez pas en mesure de sélectionner les bonnes options dans l'installeur.

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
{: .notice--info}

:::
