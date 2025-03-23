# d2xl cIOS per Wii mini (sperimentale)

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technical Details (optional)

Questo d2x cIOS installer era stato originariamente sviluppato per il vWii del Wii U da DaveBaol e il cIOS personalizzato era stato creato da Leseratte per il Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Per favore nota che questo cIOS è sempre sperimentale, anche se non sono stati segnalati problemi di funzionalità.

:::

::: warning

Questa guida è solo per gli utenti Wii Mini.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- Un Wii mini con l'Homebrew Channel installato
- Un dispositivo USB
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## Instructions

### Sezione I - Download

1. Power off your console.
2. Inserisci il tuo dispositivo USB nel tuo computer.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reinserisci il tuo dispositivo USB nella tua console.
6. Power on your console.
7. Avvia l'Homebrew Channel.
8. Avvia dx2l cIOS Installer dalla lista di homebrew.

### Sezione II - Installazione

1. Select `Continue`.
2. Imposta le opzioni come segue:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. Premi A per installare.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. Il numero 57 non cambierà.
4. Quando il processo è completato, esci dall'installer.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### Attivazione Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Le console Wii e Wii mini sono note per funzionare solo con adattatori Ethernet che usano il chip AX88772. Per favore controlla che il prodotto sia compatibile prima di comprarlo. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
