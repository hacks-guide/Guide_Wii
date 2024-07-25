---
title: "Installazione dell'Homebrew Channel e di BootMii"
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}
<summary><em>Dettagli Tecnici (opzionale)</em></summary>
Il Canale Homebrew è dove andrai per avviare applicazioni homebrew. BootMii è un software che può effettuare il backup e ripristino della memoria NAND del tuo Wii, e se installato su boot2, aggiungere la protezione ai brick.

BootMii può essere installato in due modi: direttamente in una parte del bootloader del Wii chiamata boot2 e tramite un IOS. Nella maggior parte dei casi, l'installazione di BootMii come IOS dovrebbe andare bene purché venga anche installato [Priiloader](priiloader). BootMii come boot2 è preferibile in quanto fornisce una protezione migliore ai brick, ma Wii con un boot1 vulnerabile stanno diventando più rari poiché sono stati prodotti prima del 2009.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Se non hai una scheda SD, non potrai né installare né utilizzare BootMii, indipendentemente da che sia installato come IOS o boot2. Puoi sempre [installarlo in seguito](hackmii).
{: .notice--warning}

### Istruzioni

1. La console dovrebbe essere accesa e dovrebbe mostrare l'HackMii Installer dalla parte precedente della guida.
    + Vedrai una schermata di avvertimento truffa.

    ![](/images/hackmii/scam.png)

1. Attendere 30 secondi affinché il testo "Press 1 to continue" appaia, poi premi 1.
1. Seleziona `Continue`.

    ![](/images/hackmii/test_results.png)

1. Seleziona `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Una volta completato, seleziona `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Seleziona `Back`, poi seleziona `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Seleziona `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Una volta completato, seleziona `Continue`.
1. Se hai l'opzione di installare `BootMii as boot2`, si prega di eseguire anche questa.

    ![](/images/hackmii/bootmii_install4.png)

1. Seleziona `Exit`.
1. La tua console avvierà l'Homebrew Channel.

    ![](/images/hbc/blank.png)

### Leggere attentamente

Ora puoi usare l'Homebrew Channel per avviare app homebrew e BootMii per fare il backup e ripristino della tua NAND se sei stato in grado di installarlo.

Nota: Quando installi applicazioni homebrew nella tua scheda SD o unità USB, la struttura delle cartelle dovrebbe essere così:

```
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

`NomeApp1` e `NomeApp2` sono nomi temporanei. Non mettere più cartelle `apps` nella cartella `apps` stessa.

[Continua su come fare un backup della NAND utilizzando BootMii](bootmii)<br> Fare un backup della NAND a questo punto è altamente consigliato, poiché ti consentono di recuperare da brick.
{: .notice--info}

Suggerimento: Se un Wii ha BootMii installato come boot2, il lettore dei dischi lampeggia molto brevemente dopo il flash immediato quando premi il pulsante POWER.
{: .notice--info}
