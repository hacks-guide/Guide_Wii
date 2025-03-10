# d2x cIOS per vWii

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

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
- Una scheda SD
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

Assicurati che, se stai usando la scheda SD, l'interruttore della proteziona scrittura sia in posizione disattivata, altrimenti non potrai selezionare le opzioni corrette nell'installer.

:::

## Instructions

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card.
2. Eject the SD card from your PC and insert it into the Wii U.
3. Power on your Wii U and launch vWii.
4. Launch The Homebrew Channel.
5. Launch d2x cIOS Installer.
6. Imposta le opzioni in modo che corrispondano a quanto segue:
   - Select cIOS: `d2x-v11-beta2-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
7. Press the `A` button to install.
8. Imposta le opzioni in modo che corrispondano a quanto segue:
   - Select cIOS: `d2x-v11-beta2-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
9. Press the `A` button to install.
10. Imposta le opzioni in modo che corrispondano a quanto segue:
    - Select cIOS: `d2x-v11-beta2-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. Press the `A` button to install.
12. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

::: tip

Continue to [Finalizing Setup](vwii-finalizing-setup)

:::
