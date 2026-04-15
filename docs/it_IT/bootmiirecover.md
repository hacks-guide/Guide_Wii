# Recupero da BootMii

Questa guida fornirà istruzioni su come ripristinare un backup della NAND con BootMii.

Leggi la nota sotto prima di procedere oltre.

:::details Informazioni importanti

- Wii Family Edition e Wii mini **NON POSSONO** ripristinare backup della NAND. Questo è dovuto alla mancanza di porte GameCube che servono su Wii non-boot2 per inserire il codice di conferma per il ripristino. Per cercare aiuto, cerca supporto nel server discord di [Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese).

- Se hai BootMii installato come boot2, dovrai riavviare la console per eseguirlo. Salta i passaggi 1 e 2 se è questo il caso.

- Se non hai fatto nulla per provocare un brick (oppure stai avviando la console Wii dopo molto tempo), è probabilmente un [brick Wi-Fi](bricks#wi-fi-brick).

- Se stavi ripristinando un backup della NAND per riparare da un brick e ciò non ha risolto il tuo problema, consulta la [parte sui brick](bricks) della guida per localizzare il problema.

- Dovrai usare i pulsanti sulla tua console o un controller GameCube collegato alla porta 1 per navigare in BootMii. Per navigare con un controller GameCube, clicca sinistra/destra sulla pulsantiera + per spostarti e premi A per selezionare. Per navigare coi pulsanti della console, premi `POWER` per spostarti a destra e `RESET` per selezionare.

- Se hai BootMii installato come IOS, RestoreMii ti chiedere il codice Konami attraverso un controller GameCube. Ciò è spiegato nella fase 6.

:::

::: danger

**Avvertenze**

- Questa dev'essere la tua **ultima risorsa** per riparare un problema alla tua console Wii. Verifica che puoi avviare l'Homebrew Channel prima di ripristinare un backup, perché molti dei problemi possono essere risolti da lì. Inoltre, entra nel [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese) per una mano a diagnosticare e risolvere il tuo problema in combinazione con la [guida sui brick](bricks).

- Se lo schermo rimane nero e l'unità del disco blu lampeggia mentre provi ad avviare BootMii, ti mandano i file di BootMii sulla scheda SD. Scarica [questo file zip](https://static.hackmii.com/bootmii_sd_files.zip) ed estrailo nella root della tua scheda SD, poi riprova.

- NON ripristinare un backup della NAND non verificato, o uno che non sia della tua console Wii. Questo può portare a un BRICK PEGGIORE. Lo stesso vale per il ripristino del backup da SD difettose.

:::

## Ripristinare dati individuali da un backup della NAND

Se desideri ripristinare dati individuali dal tuo backup della NAND, un modo più veloce e sicuro per farlo è usando l'emulatore Dolphin.

Per esempio, se vuoi ripristinare i dati della Bacheca Wii, usa Dolphin per importare il tuo backup della NAND. Su Dolphin, vai su `File` > `Apri cartella utente`, e trova `Wii/title/00000001/00000002/data/cdb.vff`, copialo nella tua scheda SD, e usa [WiiXplorer](https://oscwii.org/library/app/wiixplorer) per ripristinarlo nella posizione corrispondente.

Se vuoi ripristinare i dati di salvataggio di un gioco, usa Dolphin per importare il tuo backup della NAND, usa `Strumenti` > `Esporta tutti i salvataggi Wii` per esportare tutti i salvataggi sulla tua scheda SD, e usa la Gestione dati per spostarli nella tua Wii.

## Requisiti

- Una console Wii con BootMii installato come IOS o boot2
- Un backup della NAND per la tua Wii specifica creata da [BootMii](bootmii)

## Istruzioni

1. Avvia l'Homebrew Channel.

2. Premi il pulsante HOME, poi seleziona "Launch BootMii".

   - Se l'Homebrew Channel è inaccessibile e hai Priiloader installato, dovresti potere avviare quest'ultimo e selezionare `BootMii IOS` per caricare BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Seleziona il pulsante delle opzioni (con l'icona delle rotelle).

   ![](/images/bootmii/BootMii_Gears.png)

4. Seleziona il pulsante RestoreMii.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii ti informerà che farà una scan in "SIMULATION mode", puoi premere A o Reset per continuare.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Se BootMii è installato come IOS, inserisci il codice Konami sul tuo controller GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii percorrerà il processo di restore attraverso una simulazione, esponendo cosa verrà cancellato e riscritto. Una volta finita la simulazione, hai un'ultima possibilità per annullare il processo di ripristino. Se vuoi continuare, premi START o il pulsante Eject per iniziare.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. Dopo la fine del ripristino, dovresti vedere un testo che dice `I HAZ SUCCESS!`, altrimenti `I HAZ FAIL`. Premi un pulsante sulla console Wii o sul controller GCN.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Premi il pulsante Back (quello con la freccia), poi premi il bottone del Menu Wii o dell'Homebrew Channel per uscire da BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
