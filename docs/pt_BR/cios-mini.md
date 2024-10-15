# d2xl cIOS para Wii mini (experimental)

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technical Details (optional)

O d2x cIOS installer foi originalmente desenvolvido para o vWii do Wii U por DaveBaol, e cIOS customizadas no Wii mini foram criadas por Leseratte. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Note que esta cIOS ainda se encontra em estado experimental, embora não foram reportados problemas com a funcionalidade.

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

- Um Wii Mini com Homebrew Channel instalado
- Um armazenamento USB
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## Instructions

### Seção I - Baixando

1. Power off your console.
2. Insira seu armazenamento USB no seu computador.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reinsira seu armazenamento USB no seu console.
6. Power on your console.
7. Launch the Homebrew Channel, and launch the Load Priiloader app.
8. Abra o d2xl cIOS Installer da lista de homebrew.

### Parte II - Instalando

1. Select `Continue`.
2. Defina as opções para o seguinte:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. Quando feito, pressione A para instalar.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. O número 57 não irá mudar.
4. Assim que terminar, saia do instalador.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### Ativando Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Os consoles Wii e Wii Mini só funcionam com adaptadores de Ethernet que usam o chip AX88772. Por favor, verifique se o produto é compatível antes de comprar. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
