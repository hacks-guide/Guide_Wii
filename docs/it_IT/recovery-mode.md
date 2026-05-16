# Modalità di Recupero

La modalità di recupero è l'ultima risorsa per recuperare la tua console Wii da un brick prima di passare all'hard-modding e alla programmazione manuale della NAND. Questa modalità veniva usata in fabbrica dai dipendenti di Nintendo  attraverso l'uso di un dongle speciale, ma l'input richiesto per accederci può facilmente essere replicato con un controller GameCube. Essenzialmente, la modalità di recupero mette il menu Wii in uno stato dove i programmi possono essere eseguiti dal disco.

## Come funziona la modalità di recupero

Sui menu di sistema versione 2.1 e successive, avviare in modalità di recupero riporterà un numero di versione nella parte in basso a destra dello schermo, e aspetterà in quella schermata finché un disco viene inserito. Normalmente, la modalità di recupero può avviare solo due tipi di dischi:

- Un disco in cui ID inizia con un numero come 0 o 1 - un disco di avvio automatico. Tutti i giochi sul mercato **non** sono un disco di avvio automatico e invece iniziano con una lettera.
- Un gioco in possesso di una partizione di aggiornamento valido di cui versione è superiore a quella della NAND.

Questo controllo può essere saltato con Priiloader, che permetterà alla modalità di recupero di avviare un qualsiasi tipo di disco inserito nella console Wii. Sfortunatamente, se puoi già accedere a Priiloader, non c'è bisogno di utilizzare la modalità di recupero in primo luogo in quanto puoi sistemare il tuo brick avviandoci homebrew. Detto questo, se sei in una situazione dove solo la modalità di recupero è accessibile, devi essere a disposizione di un modchip per saltare il controllo del disco. Se sei in grado di saltare il controllo in un modo o nell'altro, puoi iniziare a seguire le istruzioni sotto per iniziare con la modalità di recupero e arrivare all'installer di HackMii.

## Accedere e usare la modalità di recupero

### Requisiti

- Un controller GameCube
- Se `Diagnostic Disc Check` è stato precedentemente rimosso con Priiloader o se hai un modchip a portata di mano:
  - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OPPURE
  - Qualsiasi altro gioco Wii exploitato, col salvataggio dell'exploit sulla console (vedi [Exploit legacy](legacy-exploits)) O
  - Qualsiasi altro gioco e l'accesso all'exploit [Bluebomb](bluebomb)
- Una revisione di Wii originale (i modelli Family Edition di Wii non si possono usare a causa della mancanza delle porte GameCube - altrimenti le devi saldare)
- Un PC Windows/macOS/Linux con una connessione a Internet
- Una scheda SD formattata in FAT32

### Preparazione

::: warning

Per far in modo che vengano premuti tutti e quattro i pulsanti della pulsantiera + di un controller GameCube, potrebbe essere necessario smontarlo.

:::

Per cominciare, verifica che la tua console Wii possa avviarsi in modalità di recupero _affatto_. Questo significa prendere un controller GameCube, collegarlo alla porta del giocatore 4 su Wii e premere simultaneamente tutti e quattro i pulsanti della pulsantiera + in fase di avvio. Se tutto va bene, dovresti vedere una schermata simile a quella in alto. Come detto in precedenza, se hai una versione del menu di sistema 2.0 o precedente, non vedrai un numero di versione e non riuscirai ad avviare i dischi.

### Metodo I - Menu di recupero tramite Smash Stack

1. Se hai un disco di Super Smash Bros. Brawl, puoi usare [Smash Stack](legacy-exploits#smash-stack) per caricare l'HackMii installer dalla scheda SD.
2. Avvia in modalità di recupero e inserisci il disco di Super Smash Bros. Brawl. Ora dovrebbe avviarsi.
3. Segui le istruzioni dell'exploit su Wiibrew.

### Metodo II - Menu di recupero tramite exploit dei dati di salvataggio

1. Se hai già un salvataggio sulla console per un gioco listato nei [exploit legacy](legacy-exploits), potresti usarli per caricare l'HackMii installer.
2. Avvia in modalità di recupero e inserisci il disco di Super Smash Bros. Brawl. Ora dovrebbe avviarsi.
3. Segui le istruzioni dell'exploit su Wiibrew.

### Metodo III - Menu di recupero tramite Bluebomb

Puoi anche usare Bluebomb per recuperare la console. In questo momento, stiamo ancora preparando le istruzioni per questa sezione.

::: info

A questo punto, dovresti essere in grado di installare l'Homebrew Channel e accedere agli homebrew sulla tua scheda SD che può essere utilizzata per ripristinare il tuo brick.

:::

---

::: tip

[Ritorna ai brick](bricks)

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
