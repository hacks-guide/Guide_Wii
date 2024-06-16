---
title: "Wii mini NAND Dumper"
---

{% include toc title="Table of Contents" %}

Questo tutorial ti mostrerà come effettuare il dump della NAND del tuo Wii mini senza saldare uno slot scheda SD. Questo è stato reso possibile da [nitr8](https://gbatemp.net/members/nitr8.72581/).


Per il supporto (in inglese) sull'hacking di Wii mini, unisciti a [Wii mini Hacking](https://discord.gg/6ryxnkS) su Discord.
{: .notice--info}

Se hai un Wii o un Wii mini con uno slot scheda SD saldato, segui [questo tutorial](bootmii) per effettuare il dump della NAND.
{: .notice--info}

Non c'è modo di ripristinare il backup della NAND con questo metodo senza un'hardmod.
{: .notice--info}

### Requisiti

* Un Wii
* Un dispositivo USB
* [Simple IOS Patcher per Wii mini](https://oscwii.org/library/app/SimpleIOSPatcher_Mini)
* [RealWnD per Wii mini](https://oscwii.org/library/app/RealWnD_Mini)
* [Xyzzy Mod](https://oscwii.org/library/app/xyzzy-mod)

### Istruzioni

#### Sezione I - Dumping e Patching di IOS 36

1. Scarica sia il Simple IOS Patcher per Wii mini che RealWnD per Wii mini ed estrai entrambi i file zip nel root della tua unità USB.

1. Inserisci l'unità USB nel tuo Wii mini ed avvia il Simple IOS Patcher per Wii mini dall'Homebrew Channel.
1. Dovrebbe iniziare a rilevare automaticamente la versione di IOS 36 e procedere con la sua patch nello slot 236. Ti creerà anche un file WAD di IOS 236 nell'USB.

#### Sezione II - Dumping della NAND

1. Avvia RealWnD per Wii mini dall'Homebrew Channel.
1. Dovrebbe rilevare IOS 236 automaticamente sul tuo Wii mini e applicare alcune patch di runtime per iniziare il dumping della NAND.
1. Una volta fatto, avrai tre nuovi file nella tua unità USB:

```
WiiFlash_n_ECC.img
WFD_XXX_YY.img
WiiFlash.log
```

Il `WiiFlash_n_ECC.img` e l'immagine della NAND. Gli altri due file sono dati "errati" e sono inutili.

#### Sezione III - Dumping delle chiavi del Wii mini

1. Avvia xyzzy mod dall'Homebrew Channel.
1. Seleziona `USB device`
    + Dovrebbe iniziare a recuperare le informazioni della tua console.
1. Una volta finito, premi un pulsante qualsiasi per uscire.
    + Avrai cinque nuovi file nella tua unità USB:

    ```
    bootmii_keys.bin
    device.cert
    keys.txt
    otp.bin
    seeprom.bin
    ```

Per ora, solo il file `bootmii_keys.bin` è richiesto.


#### Sezione IV - Facoltativo: Carica la tua NAND nell'Emulatore Dolphin

1. Collega l'USB al tuo PC.
1. Find the `bootmii_keys.bin` on your USB and rename it to `keys.bin`
1. Apri l'Emulatore Dolphin sul tuo PC.
1. Seleziona la scheda Strumenti, e nel menu a discesa, vai su Gestisci NAND e seleziona "Importa Backup NAND BootMii".
1. Seleziona il menu a discesa a destr accanto alla barra del nome file e quindi scegli l'opzione "Tutti i file".
1. Trova il tuo file `WiiFlash_n_ECC.img` e seleziona "Apri".
1. Un'altra finestra che chiedera le chiavi si aprirà. Locate `keys.bin` and select "open".

If you would like to play Wii games online inside of dolphin with your Wii mini NAND, follow [this tutorial](https://dolphin-emu.org/docs/guides/wii-network-guide/) to retrive the files needed for online, even if you are already using the latest beta or development version of dolphin emulator.
{: .notice--info}

Continua all'[Installazione dell'Open Shop Channel](osc) Ora che il tuo Wii ha una protezione dai brick adeguata, puoi installare l'Open Shop Channel, una repository affidabile per applicazioni homebrew che possono di cui si può usufruire sia con che senza il Wii.
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
