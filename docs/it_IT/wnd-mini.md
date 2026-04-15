# Wii mini NAND Dumper

Questo tutorial ti mostrerà come effettuare il dump della NAND della tua console Wii mini senza saldare uno slot scheda SD. Questo è stato reso possibile da [nitr8](https://gbatemp.net/members/nitr8.72581/).

::: info

Per supporto (in inglese) con l'hacking di Wii mini, entra nel server discord di [Wii mini Hacking](https://discord.gg/6ryxnkS).

:::

::: info

Se hai una console Wii, o Wii mini con slot SD saldato, segui [questo tutorial](bootmii) per dumpare la tua NAND.

:::

::: info

Non c'è modo di ripristinare il backup della NAND con questo metodo senza un'hardmod.

:::

## Requisiti

- Una console Wii
- Un'unità USB
- [Simple IOS Patcher for Wii mini](http://www.mediafire.com/file/7k141mu1whqzwdp/SimpleIOSPatcher_Mini.zip/file)
- [RealWnD for Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
- [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

## Istruzioni

### Sezione I - Dumping e Patching di IOS 36

1. Scarica Simple IOS Patcher for Wii mini e RealWnD per Wii mini ed estrai entrambi i file zip nella root della tua unità USB.

2. Inserisci l'unità USB nel tuo Wii mini ed avvia il Simple IOS Patcher per Wii mini dall'Homebrew Channel.

3. Dovrebbe iniziare a rilevare automaticamente la versione di IOS 36 e procedere con la sua patch nello slot 236. Ti creerà anche un file WAD di IOS 236 nell'USB.

### Sezione II - Dumping della NAND

1. Avvia RealWnD per Wii mini dall'Homebrew Channel.
2. Dovrebbe rilevare IOS 236 automaticamente sulla console e applicare alcune patch di runtime per iniziare il dumping della NAND.
3. Una volta fatto, avrai tre nuovi file nella tua unità USB:

```shell
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

Il file `WiiFlash_n_ECC.img` è la tua immagine NAND. Gli altri due file sono dati "errati" e sono inutili.

### Sezione III - Dumping delle chiavi del Wii mini

1. Avvia xyzzy mod dall'Homebrew Channel.
2. Seleziona `USB device`
   - Dovrebbe iniziare a recuperare le informazioni della tua console.
3. Una volta finito, premi un pulsante qualsiasi per uscire.

   - Avrai cinque nuovi file nella tua unità USB:

   ```shell
   bootmii_keys.bin
   device.cert
   keys.txt
   otp.bin
   seeprom.bin
   ```

Per ora, solo il file `bootmii_keys.bin` è richiesto.

### Sezione IV - Facoltativo: carica la NAND nell'emulatore Dolphin

1. Collega l'USB al tuo PC.
2. Trova il file `bootmii_keys.bin` sulla tua USB e rinominalo in `keys.bin`
3. Apri l'emulatore Dolphin sul tuo PC.
4. Seleziona la scheda Strumenti, e nel menu a discesa, vai su Gestisci NAND e seleziona "Importa Backup NAND BootMii".
5. Seleziona il menu a discesa a destr accanto alla barra del nome file e quindi scegli l'opzione "Tutti i file".
6. Trova il file `WiiFlash_n_ECC.img` e seleziona "apri".
7. Un'altra finestra che chiedera le chiavi si aprirà. Trova il file `keys.bin` e seleziona "apri".

::: info

Se vuoi giocare giochi Wii online su Dolphin con la NAND di Wii mini, segui [questo tutorial](https://dolphin-emu.org/docs/guides/wii-network-guide/) per estrarre i file richiesti per l'online, anche se stai già usando l'ultima versione beta o di rilascio dell'emulatore.

:::

---

::: tip

[Continua con l'installazione di Priiloader](priiloader)

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
