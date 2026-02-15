# Wii mini NAND Dumper

Questo tutorial ti mostrerà come effettuare il dump della NAND del tuo Wii mini senza saldare uno slot scheda SD. This was made possible by [nitr8](https://gbatemp.net/members/nitr8.72581/).

::: info

For support (in English) with Wii mini hacking, join [Wii mini Hacking](https://discord.gg/6ryxnkS) on Discord.

:::

::: info

If you have a Wii or a Wii mini with an SD card slot soldered, follow [this tutorial](bootmii) to dump your NAND.

:::

::: info

Non c'è modo di ripristinare il backup della NAND con questo metodo senza un'hardmod.

:::

## Requirements

- Un Wii
- Un dispositivo USB
- [Simple IOS Patcher for Wii mini](http://www.mediafire.com/file/7k141mu1whqzwdp/SimpleIOSPatcher_Mini.zip/file)
- [RealWnD for Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

## Instructions

### Sezione I - Dumping e Patching di IOS 36

1. Scarica sia il Simple IOS Patcher per Wii mini che RealWnD per Wii mini ed estrai entrambi i file zip nel root della tua unità USB.

2. Inserisci l'unità USB nel tuo Wii mini ed avvia il Simple IOS Patcher per Wii mini dall'Homebrew Channel.

3. Dovrebbe iniziare a rilevare automaticamente la versione di IOS 36 e procedere con la sua patch nello slot 236. Ti creerà anche un file WAD di IOS 236 nell'USB.

### Sezione II - Dumping della NAND

1. Avvia RealWnD per Wii mini dall'Homebrew Channel.
2. Dovrebbe rilevare IOS 236 automaticamente sul tuo Wii mini e applicare alcune patch di runtime per iniziare il dumping della NAND.
3. Una volta fatto, avrai tre nuovi file nella tua unità USB:

```
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

The `WiiFlash_n_ECC.img` is your NAND image. Gli altri due file sono dati "errati" e sono inutili.

### Sezione III - Dumping delle chiavi del Wii mini

1. Avvia xyzzy mod dall'Homebrew Channel.
2. Select `USB device`
   - It should start retrieving your console information.
3. Una volta finito, premi un pulsante qualsiasi per uscire.

   - Avrai cinque nuovi file nella tua unità USB:

   ```
   bootmii_keys.bin
   device.cert
   keys.txt
   otp.bin
   seeprom.bin
   ```

For now, only the `bootmii_keys.bin` file is required.

### Sezione IV - Facoltativo: Carica la tua NAND nell'Emulatore Dolphin

1. Collega l'USB al tuo PC.
2. Find the `bootmii_keys.bin` on your USB and rename it to `keys.bin`
3. Apri l'Emulatore Dolphin sul tuo PC.
4. Seleziona la scheda Strumenti, e nel menu a discesa, vai su Gestisci NAND e seleziona "Importa Backup NAND BootMii".
5. Seleziona il menu a discesa a destr accanto alla barra del nome file e quindi scegli l'opzione "Tutti i file".
6. Locate your `WiiFlash_n_ECC.img` file and select "open".
7. Un'altra finestra che chiedera le chiavi si aprirà. Locate `keys.bin` and select "open".

::: info

If you would like to play Wii games online inside of dolphin with your Wii mini NAND, follow [this tutorial](https://dolphin-emu.org/docs/guides/wii-network-guide/) to retrieve the files needed for online, even if you are already using the latest beta or development version of dolphin emulator.

:::

::: tip

[Continue to Priiloader Installation](priiloader)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
