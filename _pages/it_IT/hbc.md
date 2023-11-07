---
title: "Installazione dell'Homebrew Channel e di BootMii"
---

{% include toc title="Table of Contents" %}

L'Homebrew Channel è dove andrai ad avviare applicazioni homebrew. BootMii è un software che può effettuare il backup e ripristino della memoria NAND del tuo Wii, e se installato su boot2, aggiungere la protezione ai brick.

BootMii può essere installato in due modi: direttamente in una parte del bootloader del Wii chiamata boot2 e tramite un IOS. BootMii come boot2 è preferibile in quanto fornisce una protezione migliore ai brick, ma Wii con un boot2 vulnerabile stanno diventando più rari poiché sono stati prodotti prima del 2009. Nella maggior parte dei casi, l'installazione di BootMii come IOS dovrebbe andare bene purché venga anche installato [Priiloader](priiloader).
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

1. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Once it is completed, select `Continue`.
1. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

1. Select `Exit`.
1. Your console will have booted into the Homebrew Channel.

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

Note: When installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card or USB Drive
| ╸📁 apps
    | ╸📁 AppName1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 AppName2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

[Continue to making a NAND Backup using BootMii](bootmii)<br> Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.
{: .notice--info}

Tip: If a Wii has BootMii installed as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
