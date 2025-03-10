# d2x cIOS for vWii

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

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
- Um cartão SD
- The [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

Certifique-se de que se você estiver usando um cartão SD, a trava de bloqueio está na posição desbloqueada, caso contrário, você não será capaz de selecionar as opções corretas no instalador.

:::

## Instructions

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card.
2. Eject the SD card from your PC and insert it into the Wii U.
3. Power on your Wii U and launch vWii.
4. Launch The Homebrew Channel.
5. Launch d2x cIOS Installer.
6. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta2-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
7. Press the `A` button to install.
8. Set everything to match the following:
   - Select cIOS: `d2x-v11-beta2-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
9. Press the `A` button to install.
10. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta2-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. Press the `A` button to install.
12. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

::: tip

Continue to [Finalizing Setup](vwii-finalizing-setup)

:::
