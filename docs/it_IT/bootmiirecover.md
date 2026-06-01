# Ripristino della NAND tramite BootMii

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii.

Leggi la nota sotto prima di procedere oltre.

::: info

**Informazioni importanti**

- Wii Family Edition e Wii mini **NON POSSONO** ripristinare i backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. Per aiuto, cerca supporto nel [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese).

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- Se non hai fatto nulla per provocare un brick (oppure stai avviando la console dopo molto tempo), probabilmente hai un [brick dal Wi-Fi](bricks#wi-fi-brick).

- Se stavi ripristinando un backup della NAND per risolvere un brick e ciò non ha risolto il tuo problema, consulta la [parte dedicata ai brick](bricks) della guida per trovare la soluzione.

- Per navigare in BootMii, dovrai usare i pulsanti sulla console o un controller GameCube collegato alla porta 1. Con un controller GameCube, premi sinistra/destra sulla pulsantiera + per spostarti e A per selezionare. Con i pulsanti della console, premi `POWER` per spostarti a destra e `RESET` per selezionare.

- Se hai installato BootMii come IOS, RestoreMii ti chiederà il codice Konami tramite un controller GameCube. Ciò è spiegato nella fase 6.

:::

::: danger

**Leggere attentamente**

- Questa deve essere la tua **ultima risorsa** per risolvere un problema alla tua console. Verifica di poter avviare l'Homebrew Channel prima di ripristinare un backup, perché molti dei problemi possono essere risolti da lì. Inoltre, entra nel [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese) per ricevere assistenza nella diagnosi e nella risoluzione del problema, in combinazione con la [guida sui brick](bricks).

- Se lo schermo rimane nero e l'unità del disco lampeggia di blu quando avvii BootMii, significa che mancano i suoi file sulla scheda SD. Scarica [questo file zip](https://static.hackmii.com/bootmii_sd_files.zip) ed estrailo nella root della scheda SD, poi riprova.

- NON ripristinare un backup della NAND non verificato, o uno non appartenente alla tua console. Ciò può portare a un BRICK PEGGIORE. Lo stesso vale per il ripristino del backup da schede SD difettose.

:::

## Ripristinare dati individuali da un backup della NAND

Se desideri ripristinare dati individuali dal backup della NAND, il modo più veloce e sicuro per farlo è utilizzando l'emulatore Dolphin.

Per esempio, se vuoi ripristinare i dati della Bacheca Wii, usa Dolphin per importare il backup della tua NAND. Su Dolphin, vai su `File` -> `Apri cartella utente` e trova `Wii/title/00000001/00000002/data/cdb.vff`, copialo nella scheda SD, poi usa [WiiXplorer](https://oscwii.org/library/app/wiixplorer) per ripristinarlo nella posizione corrispondente.

Se vuoi ripristinare i dati di salvataggio di un gioco, usa Dolphin per importare il backup della tua NAND, usa `Strumenti` -> `Esporta tutti i salvataggi Wii` per esportare tutti i salvataggi sulla scheda SD, infine usa la Gestione dati per spostarli nella console.

## Requisiti

- Una console Wii con BootMii installato come IOS o come boot2
- Un backup della tua NAND di Wii creata da [BootMii O nanddumper@ios](nand-backup)

## Istruzioni

1. Avvia l'Homebrew Channel.

2. Premi il pulsante HOME, poi seleziona "Launch BootMii".

   - Se l'Homebrew Channel non è accessibile e hai Priiloader installato, dovresti poter avviare quest'ultimo e selezionare `BootMii IOS` per caricare BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Seleziona il pulsante delle opzioni (l'icona con le rotelle).

   ![](/images/bootmii/BootMii_Gears.png)

4. Seleziona il pulsante RestoreMii.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii ti informerà che si avvierà in "SIMULATION mode", puoi premere A o Reset per continuare.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Se BootMii è installato come IOS, inserisci il codice Konami sul controller GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii eseguirà il processo di ripristino in modalità simulata, indicando quali dati verranno cancellati o riscritti. Una volta terminata la simulazione, hai un'ultima possibilità di annullare l'operazione. Altrimenti, premi START o il pulsante Eject per procedere.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. Al termine del ripristino, dovresti vedere un messaggio `I HAZ SUCCESS!`, altrimenti `I HAZ FAIL`. Premi un pulsante sulla console o sul controller GameCube.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Premi il pulsante Back (quello con la freccia) e poi Wii Menu o Homebrew Channel per uscire da BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
