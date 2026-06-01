---
outline: false
---

# Installazione di Homebrew Channel e di BootMii

<br>

::::: tabs

:::: tab Wii

## Installazione dell'Homebrew Channel e di BootMii su Wii

Questa guida ti mostrerà come installare l'Homebrew Channel e BootMii. L'Homebrew Channel è dove esegui le applicazioni homebrew, mentre BootMii ti permette di creare e di ripristinare i backup della NAND della console.

::: warning

Se non hai una scheda SD, non potrai né installare né utilizzare BootMii, indipendentemente da che sia installato come IOS o come boot2.

Potrai sempre [installarlo in seguito](hackmii).

:::

:::details Avvertenza per quanto riguarda BootMii come boot2

BootMii può essere installato in due modi: tramite IOS o direttamente in una parte del bootloader della console Wii, chiamato boot2. Se possibile, è consigliato installarlo come boot2 in quanto fornisce una protezione estesa dai brick e può essere caricato prima della maggior parte degli errori causati da essi. Le console Wii con un boot1 vulnerabile che permettono questa installazione sono molto rare; in quanto sono state prodotte tutte prima del 2009.

Nella maggior parte dei casi, non sarà possibile installare BootMii su boot2. Di solito è sufficiente installarlo come IOS, a patto che installi anche [Priiloader](priiloader). Se HAI l'opzione di installarlo come boot2, installa entrambe le versioni come indicato qui sotto, in modo tale da avere più opzioni per accedervi anche senza accendere la console.

Nota che, una volta installato BootMii come boot2, il lettore dischi lampeggerà brevemente dopo il lampeggio immediato quando premi il pulsante POWER.

:::

## Istruzioni

1. La console dovrebbe essere accesa e mostrare l'HackMii Installer, dalla parte precedente della guida.

   - Vedrai una schermata di avviso contro le truffe.

   ![](/images/hackmii/scam.png)

2. Attendi 30 secondi affinché appaia il testo "Press 1 to continue", poi premi 1.

3. Seleziona `Continue`.

   ![](/images/hackmii/test_results.png)

4. Seleziona `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Una volta completato, seleziona `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Seleziona `BootMii...`.

   ![](/images/hackmii/bootmii_install.png)

7. Seleziona `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Una volta completato, seleziona `Continue`.

9. Se hai l'opzione `Install BootMii as boot2`, prosegui anche con quella.

   ![](/images/hackmii/bootmii_install4.png)

10. Seleziona `Return to the main menu`, poi `Exit`.

11. La console avvierà l'Homebrew Channel.

    ![](/images/hbc/blank.png)

### Informazioni post-installazione

Ora puoi usare l'Homebrew Channel per avviare app homebrew e BootMii per eseguire il backup e il ripristino della NAND (se sei riuscito a installarlo).

Nota: quando installi applicazioni homebrew sulla scheda SD o sull'unità USB, la struttura delle cartelle dovrebbe essere così:

```shell
💾 Scheda SD o unità USB
| ╸📁 apps
    | ╸📁 NomeApp1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 NomeApp2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`NomeApp1` e `NomeApp2` sono nomi provvisori. Non inserire più cartelle `apps` dentro la cartella `apps` stessa.

### Avvio automatico

Se sei riuscito a installare BootMii come boot2, ma non vuoi che appaia la schermata di BootMii ogni volta che accendi la console, puoi impostare l' avvio automatico del menu di sistema. Questo ripristinerà il funzionamento della console ad avviarsi nel menu Wii invece che da BootMii.

1. Apri `SD:/bootmii/bootmii.ini` in un editor di testo.
2. Cambia `#AUTOBOOT=SYSMENU` in `AUTOBOOT=SYSMENU`, cancellando `#`.
3. Poi cambia `#BOOTDELAY=5` in `BOOTDELAY=1`, cancellando `#` e trasformando il `5` in un `1`.
4. Salva il file ed esci.

::: info

Puoi anche usare l'app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) su Wii per cambiare queste impostazioni.

:::

---

::: tip

[Continua col fare un backup della NAND](nand-backup)

Fare un backup della NAND a questo punto è altamente consigliato, in quanto possono essere usati per recuperarsi da un brick.

:::

::::

:::: tab Wii mini

## Installazione dell'Homebrew Channel su Wii mini

Questa guida ti mostrerà come installare l'Homebrew Channel, che è dove esegui le applicazioni homebrew.

::: warning

Anche se è possibile installare BootMii su Wii mini, è necessaria la saldatura di uno slot scheda SD. Ciò richiede lo smontaggio della console e l'uso di strumenti specializzati, pertanto non è consigliato.

:::

### Istruzioni

1. La console dovrebbe essere accesa e mostrare l'HackMii Installer, dalla parte precedente della guida.

   - Vedrai una schermata di avviso contro le truffe.

   ![](/images/hackmii/scam.png)

2. Attendi 30 secondi affinché appaia il testo "Press 1 to continue", poi premi 1.

3. Seleziona `Continue`.

   ![](/images/hackmii/test_results.png)

4. Seleziona `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Una volta completato, seleziona `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Seleziona `Exit`.

7. La console avvierà l'Homebrew Channel.

   ![](/images/hbc/blank.png)

### Leggere attentamente

Ora puoi usare l'Homebrew Channel per avviare le app homebrew.

Nota: quando installi applicazioni homebrew sull'unità USB, la struttura delle cartelle dovrebbe essere così:

```shell
💾 Unità USB
| ╸📁 apps
    | ╸📁 NomeApp1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 NomeApp2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`NomeApp1` e `NomeApp2` sono nomi provvisori. Non inserire più cartelle `apps` dentro la cartella `apps` stessa.

---

::: tip

[Continua col fare un backup della NAND](nand-backup)

Fare un backup della NAND a questo punto è altamente consigliato, in quanto possono essere usati per recuperarsi da un brick.

:::

::::

:::::
