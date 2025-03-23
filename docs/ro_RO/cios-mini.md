# cIOS d2xl pentru Wii mini (experimental)

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technical Details (optional)

Acest instalator de cIOS d2x a fost dezvoltat original pentru vWii-ul consolei Wii U de către DaveBaol iar cIOS-ul modificat a fost creat de către Leseratte pentru Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Reține că acest cIOS încă este experimental, însă nicio problemă nu a fost raportată legată de funcționalitate încă.

:::

::: warning

This guide is only intended for Wii Mini users.

Dacă ai un Wii, urmărește în schimb [acest ghid](cios).

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Nu încerca să instalezi un IOS Wii/vWii sau System Menu pe un Wii mini. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.

:::

## Requirements

- Un Wii mini cu Homebrew Channel instalat
- O unitate USB
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## Instructions

### Secțiunea I - Descărcare

1. Power off your console.
2. Introdu unitatea ta USB în calculatorul tău.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reintrodu unitatea USB în consola ta.
6. Power on your console.
7. Launch the Priiloader installer.
8. Rulează d2xl cIOS Installer din lista de aplicații homebrew.

### Secțiunea II – Instalare

1. Select `Continue`.
2. Setează opțiunile la următoarele:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. Apasă a pentru a instala.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. Numărul 57 nu se va schimba.
4. Odată ce procesul este complet, ieși din aplicație.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### Activarea Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Consolele Wii și Wii mini sunt știute să meargă numai cu adaptoarele de Ethernet care folosesc chipul AX88772. Te rugăm să verifici dacă produsul este compatibil înainte să-l cumperi. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
