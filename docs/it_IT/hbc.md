---
outline: false
---

# Installazione di Homebrew Channel e di BootMii

<br>

::::: tabs

:::: tab Wii

## Installazione di Homebrew Channel e di BootMii per Wii

Questa guida ti istruirà su come installare l'Homebrew Channel e BootMii. L'Homebrew Channel è dove andrai a eseguire applicazioni homebrew, mentre BootMii ti permetterà di creare e ripristinare i backup della NAND della tua console Wii.

::: warning

Se non hai una scheda SD, non potrai né installare né utilizzare BootMii, indipendentemente da che sia installato come IOS o boot2.

Potrai sempre [installarlo in seguito](hackmii).

:::

:::details Avvertenza per quanto riguarda BootMii con boot2

BootMii può essere installato in due modi: tramite IOS o direttamente in una parte del bootloader della console Wii chiamata boot2. Se possibile, è consigliato installarlo come boot2 in quanto fornisce una protezione estesa dai brick e può essere caricato prima della maggior parte degli errori causati da essi, ma le console Wii con un boot1 vulnerabile che permettono questa installazione sono molto più rari; essendo stati prodotti tutti prima del 2009.

Nella maggior parte dei casi, non sarà possibile installare BootMii su boot2. Di solito installarlo come IOS è sufficiente, a patto che installi anche [Priiloader](priiloader). Se però HAI l'opzione di installarlo come boot2, installa entrambe le versioni come indicato qui sotto in modo tale da avere più opzioni di poterci accedere anche senza accendere la console.

Nota che, una volta installato BootMII come boot2, il lettore dischi lampeggerà brevemente dopo il flash immediato quando premi il pulsante POWER.

:::

## Istruzioni

1. La console dovrebbe essere accesa e mostrare l'HackMii Installer dalla parte precedente della guida.

   - Vedrai una schermata di avvertimento truffa.

   ![](/images/hackmii/scam.png)

2. Attendi 30 secondi affinché il testo "Press 1 to continue" appaia, poi premi 1.

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

10. Seleziona `Return to the main menu`, poi seleziona `Exit`.

11. La tua console avvierà l'Homebrew Channel.

    ![](/images/hbc/blank.png)

### Leggere attentamente

Ora puoi usare l'Homebrew Channel per avviare app homebrew e BootMii per fare il backup e ripristino della tua NAND se sei stato in grado di installarlo.

Nota: quando installi applicazioni homebrew sulla scheda SD o unità USB, la struttura delle cartelle dovrebbe essere così:

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

---

::: tip

[Continua con fare un backup della NAND usando BootMii](bootmii)

Fare un backup della NAND a questo punto è altamente consigliato, in quanto possono essere usati per recuperarsi da un brick.

:::

::::

:::: tab Wii mini

## Installazione di Homebrew Channel per Wii mini

Questa guida ti istruirà su come installare l'Homebrew Channel, che è dove andrai a eseguire applicazioni homebrew.

::: warning

Anche se è possibile installare BootMii su Wii mini, è necessaria la saldatura di uno slot scheda SD. Ciò richiederà smontare la tua console Wii mini e utilizzare strumenti specializzati, quindi non è raccomandato.

:::

### Istruzioni

1. La console dovrebbe essere accesa e mostrare l'HackMii Installer dalla parte precedente della guida.

   - Vedrai una schermata di avvertimento truffa.

   ![](/images/hackmii/scam.png)

2. Attendi 30 secondi affinché il testo "Press 1 to continue" appaia, poi premi 1.

3. Seleziona `Continue`.

   ![](/images/hackmii/test_results.png)

4. Seleziona `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Una volta completato, seleziona `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Seleziona `Exit`.

7. La tua console avvierà l'Homebrew Channel.

   ![](/images/hbc/blank.png)

### Leggere attentamente

Ora puoi usare l'Homebrew Channel per avviare app homebrew.

Nota: quando installi applicazioni homebrew sulla unità USB, la struttura delle cartelle dovrebbe essere così:

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

[Continua con fare un backup della NAND usando RealWind](wnd-mini)

Fare un backup della NAND a questo punto è altamente consigliato, in quanto possono essere usati per recuperarsi da un brick.

:::

::::
