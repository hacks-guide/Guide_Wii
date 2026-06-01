# Creare collegamenti di giochi Wii

Questa guida fornirà di istruzioni su come creare collegamenti per i giochi Wii dai backup che hai sull'archivio esterno, usando un programma chiamato WiiGSC (Wii Game Shortcut Creator). Poi, potrai avviarli direttamente dal menu Wii come se ne avessi inserito il disco di gioco.

::: info

**Informazioni importanti**

- Il tuo browser o antivirus potrebbe segnalare WiiGSC come malware, ma è un falso positivo. WiiGSC NON contiene malware.
- Il menu Wii è limitato a 48 canali, escludendo i canali di sistema già esistenti.

:::

::: danger

**Leggere attentamente**

- NON proseguire con questa guida se non hai installato ENTRAMBI [Priiloader](priiloader) E [BootMii](hbc), in quanto c'è il rischio di causare un [brick dal banner](bricks#banner-brick) che impedirà l'avvio del menu Wii.
- NON creare e installare i collegamenti per i giochi "Mario Party 9" e "A Boy and His Blob". Causeranno un [brick dal banner](bricks#banner-brick) a causa della complessità dei loro canali, facendo andare in crash il menu Wii.
- Se ricevi un errore del tipo `I file di sistema sono danneggiati`, probabilmente ti stai vedendo con un [brick dal banner](bricks#banner-brick). Per sistemarlo, spegni la console e [avvia Priiloader](priiloader#section-iii---entering-priiloader) con uno dei metodi disponibili. Entra nell'Homebrew Channel e avvia un gestore di WAD o [YAWM ModMii Edition](yawmme) per disinstallare il WAD che ha causato questo errore. Se Priiloader non è installato, procedi con [BlueBomb](bluebomb) per risolvere.

:::

## Requisiti

- Una console Wii
- Una scheda SD o un'unità USB
- Un PC con Windows
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Istruzioni

### Sezione I - Creare un canale

1. Estrai il file `.zip` di WiiGSC, trova `WiiGSC.exe` e avvialo. Al primo avvio, ti verrà chiesto di creare una chiave comune e ti verrà fornito un avviso; procedi normalmente.

   ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. Con WiiGSC aperto, clicca `Open WBFS Drive` e seleziona la lettera dell'unità contenente i file WBFS. In alternativa, puoi selezionare un file ISO/WBFS singolo.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Seleziona il gioco di cui vuoi creare il canale, poi premi `Use for Channel Creation`. Seleziona l'USB loader che userai per avviare il gioco, poi premi `Create Channel` in basso a sinistra.

   ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. Copia il WAD appena creato nella scheda SD o nell'unità USB.

### Sezione II - Installare il canale

1. Apri un gestore di WAD e trova il file messo in precedenza, poi installalo.

   ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. Se ha avuto successo, ora dovresti vedere il gioco sul menu Wii!

   ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
