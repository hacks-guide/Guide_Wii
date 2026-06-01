---
outline: false
---

# Creare un backup della NAND (Wii)

Per proteggere la console Wii da brick permanenti, questa guida istruirà su come creare un backup della NAND. Si consiglia di usare **nanddumper@ios** o **BootMii** come alternativa per chi può usare una scheda SD.

:::details Inserire un backup della NAND nell'emulatore Dolphin

Il backup della NAND può essere usato nell'emulatore Dolphin, se scegli di farlo.

1. Prendi l'ultima versione dell'emulatore Dolphin dal [loro sito](https://dolphin-emu.org/) e installalo sul dispositivo.
2. Avvia l'emulatore Dolphin.
3. Clicca sulla scheda `Strumenti`, scendi fino a `Gestisci NAND`, poi seleziona `Importa backup NAND BootMii...`.
4. Seleziona e apri il file `nand.bin` che si trova nella root della scheda SD.
5. Se chiede per un `keys.bin`, segui lo stesso procedimento di prima con questo file.

Nota che dovrai rinominare il dump della NAND nei file qui sopra se hai usato **nanddumper@ios**, come descritto nella sezione seguente.

:::

::::: tabs

::::tab nanddumper@ios (dump su unità USB o scheda SD)

Per le console dotate di una porta USB o uno slot SD funzionante, nanddumper@ios consente di eseguire il backup della NAND della console. nanddumper@ios è consigliato in quanto è più veloce rispetto a BootMii. Questa sezione guiderà attraverso il processo di creazione di un backup della NAND, che potrai poi utilizzare come preferisci.

Leggi la nota sotto prima di procedere oltre.

::: info

**Informazioni importanti**

- Al termine di questa guida, verranno creati quattro file nella cartella `/wii/backups` dell'unità USB. `DATA_SERIALE_nand_XX.bin` è il backup della NAND, mentre `SERIALE_keys.bin` sono le chiavi della console. `DATA_SERIALE_nand_XX.bin.sha1` e `sha1sums.txt` sono file contenenti i checksum per verificare l'integrità dei backup, ma che non verranno usati per il ripristino.

- Ricorda che **il ripristino di un backup della NAND deve essere la tua ultima risorsa**. Detto questo, puoi usare la [guida di ripristino da BootMii](bootmiirecover) per ripristinare il tuo backup, dove sono fornite ulteriori informazioni a proposito sui rischi e sulle alternative. Puoi usare BootMii per ripristinare un backup della NAND SOLO se hai uno slot SD funzionante, come descritto di seguito.

- Se hai Wii mini o NON HAI uno slot SD su Wii, NON POTRAI ripristinare il backup della NAND senza apportare una modifica hardware. Questo perché [BootMii Restore](bootmiirecover) richiede di una scheda SD per leggerci il backup.

- Se NON HAI una porta per controller GameCube, NON POTRAI ripristinare il backup della NAND senza apportare una modifica hardware. Questo perché [BootMii Restore](bootmiirecover) richiede di un controller GameCube fisico per inserire il codice Konami sulle console senza BootMii come boot2.

:::

## Requisiti

- Un'unità USB o una scheda SD formattata in FAT32, con almeno 512MB di spazio libero (si consiglia 1GB o più)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Istruzioni

1. Scarica il file `.zip` consigliato dal sito Open Shop Channel.

2. Estrai la cartella `apps` dall'archivio nella root della scheda SD o dell'unità USB.

3. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel. Premi `1` e assicurati che l'unità in uso sia selezionata, poi apri nanddumper@ios.

   - Se ricevi l'errore **Exception IOS occurred!**, riavvia la console e riprova.

   ![](/images/nanddumper@ios/select-hbc.png)

4. nanddumper@ios inizierà a eseguire il dump delle chiavi della console all'avvio, se non sono già presenti nell'archivio. Premi un pulsante che NON sia `HOME`, `START` o `EJECT` per iniziare il dump della NAND della console.
   - Se ricevi l'errore **No storage devices are attached**, assicurati che la scheda SD o l'unità USB siano connessi direttamente alla console. Se stai utilizzando un'unità USB, collegala direttamente alla console e NON in un hub.
   ![](/images/nanddumper@ios/dump-startup.png)

5. Ora inizierà il processo di dump della NAND. Attendi che finisca prima di procedere.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Una volta terminato, premi un pulsante qualsiasi per uscire da nanddumper@ios. Troverai il backup e le chiavi della console nella cartella `/wii/backups/` dell'unità che hai usato.

   ![](/images/nanddumper@ios/dump-complete.png)

7. Sul computer, rinomina `DATA_SERIALE_nand_XX.bin` in `nand.bin` e `SERIALE_keys.bin` in `keys.bin`. In questo modo, BootMii riconoscerà il backup della NAND nel caso in cui dovessi ripristinarla.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Continua con l'installazione di Priiloader](priiloader)

Priiloader aggiunge un secondo livello di protezione dai brick ed è vivamente consigliato, anche se BootMii è stato installato come boot2. È particolarmente importante per chi usa BootMii come IOS.

Se hai Wii mini, questo è il principale strumento di protezione dai brick.

:::

::::

::::tab BootMii (metodo di backup)

Su Wii con uno slot SD, BootMii consente di eseguire il backup e il ripristino della NAND della console. Questa sezione guiderà attraverso il processo di creazione di un backup della NAND sulla scheda SD, che potrai poi utilizzare come preferisci.

Leggi la nota sotto prima di procedere oltre.

::: info

**Informazioni importanti**

- Al termine della guida, verranno creato due file nella root della scheda SD: `nand.bin` e `keys.bin`. `nand.bin` è il backup della NAND, mentre `keys.bin` sono le chiavi della console.

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- Per navigare in BootMii, dovrai usare i pulsanti sulla console o un controller GameCube collegato alla porta 1. Con un controller GameCube, premi sinistra/destra sulla pulsantiera + per spostarti e A per selezionare. Con i pulsanti della console, premi `POWER` per spostarti a destra e `RESET` per selezionare.

- Ricorda che **il ripristino di un backup della NAND deve essere la tua ultima risorsa**. Detto questo, puoi usare la [guida di ripristino da BootMii](bootmiirecover) per ripristinare il tuo backup, dove sono fornite ulteriori informazioni a proposito sui rischi e sulle alternative.

- Le console Wii Family Edition NON POSSONO ripristinare un backup della NAND senza una modifica hardware. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino.

:::

::: danger

**Leggere attentamente**

- Usalo come alternativa, in quanto BootMii è più lento di nanddumper@ios. Hai bisogno di una **scheda SD** per usare BootMii. Se non hai una scheda SD, ma un'unità USB, puoi usare la guida su come usare nanddumper@ios.

- Se il pulsante `Launch BootMii` non appare nell'Homebrew Channel, [riavvia l'HackMii Installer](hackmii) e installa BootMii.

- Se lo schermo rimane nero e l'unità del disco lampeggia di blu quando avvii BootMii, significa che mancano i suoi file sulla scheda SD. Scarica [questo file zip](/assets/files/bootmii_sd_files.zip) ed estrailo nella root della scheda SD, poi riprova.

- BootMii non può essere usato su Wii mini senza una modifica hardware. Se hai questa console, usa **nanddumper@ios**.

:::

## Requisiti

- Una scheda SD con almeno 512MB di spazio libero (si consiglia 1GB o più)
- [BootMii](hbc)

## Istruzioni

1. Accendi la console.

2. Avvia l'Homebrew Channel.

3. Premi il pulsante HOME, poi seleziona "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Dovresti vedere una schermata simile a questa qui sotto:

   ![](/images/bootmii/BootMii_Main.png)

5. Seleziona il pulsante delle opzioni (l'icona con le rotelle).

   ![](/images/bootmii/BootMii_Gears.png)

6. Seleziona il primo pulsante a sinistra.

   ![](/images/bootmii/BootMii_Backup.png)

7. Ora inizierà il processo di dump della NAND. Puoi guardare l'andamento sullo schermo.

   - I "Bad Blocks" (blocchi difettosi) sono normali, e probabilmente derivano dal binning della NAND in fabbrica. Non preoccuparti se ne vedi alcuni.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Una volta terminato, inizierà la verifica del backup. Idealmente, tutti i blocchi dovrebbero essere verdi dopo il processo di verifica.

   - Se ci sono dei blocchi neri con pagine non recuperabili, questi potrebbero fallire il processo di verifica. Finché tutti i blocchi non neri sono stati verificati correttamente, dovrebbe andare tutto bene.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Premi il pulsante Back (quello con la freccia) e poi Wii Menu o Homebrew Channel per uscire da BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Continua con l'installazione di Priiloader](priiloader)

Priiloader aggiunge un secondo livello di protezione dai brick ed è vivamente consigliato, anche se BootMii è stato installato come boot2. È particolarmente importante per chi usa BootMii come IOS.

:::

::::

:::::
