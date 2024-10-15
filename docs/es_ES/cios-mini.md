# Instalar cIOS d2xl para Wii mini

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technical Details (optional)

El instalador de este cIOS originalmente fue desarrollado para la vWii de Wii U por DaveBaol, mientras que el cIOS fue diseñado por Leseratte específicamente para la Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). No se han reportado problemas en el funcionamiento de este cIOS, sin embargo, ten en cuenta que aún se encuentra en fase experimental.

:::

::: warning

This guide is only intended for Wii Mini users.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- Una Wii mini con el Canal Homebrew instalado
- Una unidad USB
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## Instructions

### Sección I - Descarga

1. Power off your console.
2. Inserta la unidad USB o tarjeta SD en tu PC.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reinsert your USB drive into your console.
6. Power on your console.
7. Launch the Homebrew Channel, and launch the Load Priiloader app.
8. Launch d2xl cIOS Installer from the list of homebrew.

### Sección II - Instalación

1. Select `Continue`.
2. Presiona continuar y después ajusta las opciones de la siguiente manera:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. Press A to install.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. El número 57 no cambiará.
4. Si el proceso ha sido exitoso, ahora puedes salir del instalador.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### Activar Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Las consolas Wii y Wii mini solo pueden utilizar adaptadores Ethernet con el chip AX88772. Por favor asegúrate de que el adaptador sea compatible antes de comprarlo. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
