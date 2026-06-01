# Recovery Mode

La Recovery Mode è un'ultima risorsa per ripristinare la console Wii da un brick prima di passare all'hard-modding e alla programmazione manuale della NAND. Questa modalità veniva utilizzata in fabbrica dai dipendenti di Nintendo tramite un dongle speciale, ma l'input necessario per accedervi può essere facilmente replicato con un controller GameCube. In pratica, la Recovery Mode mette il menu Wii in uno stato in cui i programmi possono essere eseguiti dal disco.

## Come funziona la Recovery Mode

Sui menu di sistema dalla versione 2.1 in poi, l'avvio in Recovery Mode riporterà un numero di versione nell'angolo in basso a destra dello schermo e rimarrà in quella schermata finché non viene inserito un disco. Di norma, la Recovery Mode può avviare solo due tipi di dischi:

- Un disco il cui ID inizia con un numero come 0 o 1: un disco di avvio automatico. Tutti i dischi dei giochi in vendita **non** sono un disco di avvio automatico e iniziano invece con una lettera.
- Un gioco con una partizione di aggiornamento valido, la cui versione è superiore a quella della NAND.

Questo controllo può essere saltato tramite Priiloader, che consente alla Recovery Mode di avviare un qualsiasi tipo di disco inserito nella console. Purtroppo, se puoi già accedere a Priiloader, non c'è bisogno di usare la Recovery Mode, in quanto puoi risolvere il brick avviando degli homebrew. Detto questo, se ti trovi in una situazione in cui è accessibile solo la Recovery Mode, devi avere a disposizione di un drivechip per aggirare il controllo del disco. Se riesci ad aggirare il controllo in qualche modo, puoi seguire le istruzioni qui sotto per avviare la Recovery Mode e arrivare all'HackMii Installer.

## Accesso e utilizzo della Recovery Mode

### Requisiti

- Un controller GameCube
- Se `Diagnostic Disc Check` è stato precedentemente rimosso da Priiloader o se hai un drivechip a portata di mano:
  - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OPPURE
  - Un qualsiasi altro gioco con un salvataggio modificato (vedi [Exploit legacy](legacy-exploits)) OPPURE
  - Un qualsiasi altro gioco e l'accesso all'exploit [Bluebomb](bluebomb)
- Una revisione di Wii originale (i modelli Family Edition non sono utilizzabili a causa della mancanza delle porte GameCube, altrimenti dovresti saldarle)
- Un PC con Windows/macOS/Linux connesso a Internet
- Una scheda SD formattata in FAT32

### Preparazione

::: warning

Per premere tutti e quattro i pulsanti della pulsantiera + di un controller GameCube, potrebbe essere necessario smontarlo.

:::

Per cominciare, verifica che la console _possa_ avviarsi in Recovery Mode. Ciò significa collegare un controller GameCube alla porta del giocatore 4 e premere simultaneamente tutti e quattro i pulsanti della pulsantiera + durante l'avvio. Se tutto va bene, dovresti vedere una schermata simile a quella in alto. Come detto in precedenza, se hai una versione del menu di sistema 2.0 o precedente, non vedrai il numero di versione e non riuscirai ad avviare i dischi.

### Metodo I - Recovery tramite Smash Stack

1. Se possiedi un disco di Super Smash Bros. Brawl, puoi usare [Smash Stack](legacy-exploits#smash-stack) per caricare l'HackMii installer dalla scheda SD.
2. Avvia in Recovery Mode e inserisci il disco di Super Smash Bros. Brawl. Ora dovrebbe avviarsi.
3. Segui le istruzioni dell'exploit su Wiibrew.

### Metodo II - Recovery tramite exploit dei dati di salvataggio

1. Se hai già un salvataggio sulla console per un gioco elencato nei [Exploit legacy](legacy-exploits), potresti utilizzarlo per caricare l'HackMii installer.
2. Avvia in Recovery Mode e inserisci il disco del gioco in questione. Ora dovrebbe avviarsi.
3. Segui le istruzioni dell'exploit su Wiibrew.

### Metodo III - Recovery tramite Bluebomb

Puoi anche usare Bluebomb per recuperare la console. Al momento stiamo ancora preparando le istruzioni per questa sezione.

::: info

A questo punto, dovresti essere in grado di installare l'Homebrew Channel e accedere agli homebrew sulla scheda SD, che può essere utilizzata per ripristinare dal brick.

:::

---

::: tip

[Ritorna a I brick](bricks)

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
