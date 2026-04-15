# Creare Collegamenti per Giochi Wii

Questa guida provvede di istruzioni su come creare collegamenti per giochi Wii dai backup che hai sull'archivio esterno, usando un programma chiamato WiiGSC (Wii Game Shortcut Creator). Creando un collegamento per un gioco, puoi avviarlo direttamente dal menu Wii come se ne avessi inserito il disco.

:::details Informazioni importanti

- Il tuo browser o antivirus potrebbero segnalare WiiGSC come malware - questo è un falso positivo. WiiGSC non contiene ALCUN malware.
- Il menu Wii è limitato a 48 canali, non includendo i canali già esistendi di sistema.

:::

::: danger

**Avvertenze**

- NON continuare con questa guida se non hai installato [Priiloader](priiloader) o [BootMii](bootmii), in quanto c'è il pericolo di causare un [brick dal banner](bricks#banner-brick) che impedirà al menu Wii di avviarsi.
- NON creare o installare collegamenti dei giochi "Mario Party 9" o "A Boy and His Blob". Causeranno [brick dal banner](bricks#banner-brick) data la complessità dei loro canali, facendo andare in crash il menu Wii.
- Se ricevi un errore del tipo `The system files are corrupted` (I file di sistema sono corroti), probabilmente ti stai vedendo con un [brick dal banner](bricks#banner-brick). Per sistemarlo, spegni la console, poi [avvia in Priiloader](priiloader#section-iii---entering-priiloader) con uno dei metodi disponibili per la tua console. Entra nell'Homebrew Channel e avvia il tuo gestore WAD o [YAWM ModMii Edition](yawmme) per disinstallare il WAD che ha causato questo errore. Se Priiloader non è stato installato, procedi con [BlueBomb](bluebomb) per risolvere.

:::

## Requisiti

- Una console Wii
- Una scheda SD o unità USB
- Un computer Windows
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Istruzioni

### Section I - Creare un canale

1. Estrai il file `.zip` di WiiGSC, trova `WiiGSC.exe` e avvialo. Il primo avvio ti chiederà di creare la tua chiave comune e fornirà un avviso - procedi normalmente.

   ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. Con WiiGSC aperto, clicca `Open WBFS Drive` e seleziona la lettera dell'unità contenente i tuoi file WBFS. In alternativa, puoi selezionare un file ISO/WBFS singolo.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Seleziona il gioco di cui vuoi creare un canale, poi premi `Use for Channel Creation`. Seleziona l'USB loader che userai per avviare il gioco, poi premi `Create Channel` situato in basso a sinistra.

   ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. Copia il WAD appena creato nella tua scheda SD o unità USB.

### Section II - Installare il canale

1. Apri il tuo gestore WAD e trova il WAD messo in precedenza, poi installalo.

   ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. Se ha avuto successo, ora dovresti vedere il tuo gioco sul menu Wii!!

   ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
