# Installazione dell'Homebrew Channel e di BootMii

:::details Technical Details (optional)

BootMii può essere installato in due modi: direttamente in una parte del bootloader del Wii chiamata boot2 e tramite un IOS. Nella maggior parte dei casi, l'installazione di BootMii come IOS dovrebbe andare bene purché venga anche installato <a href="priiloader">Priiloader</a>. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

Se non hai una scheda SD, non potrai né installare né utilizzare BootMii, indipendentemente da che sia installato come IOS o boot2.
You can always [install it later](hackmii).

:::

## Instructions

1. La console dovrebbe essere accesa e dovrebbe mostrare l'HackMii Installer dalla parte precedente della guida.

    - Vedrai una schermata di avvertimento truffa.

    ![](/images/hackmii/scam.png)

2. Attendi 30 secondi affinché il testo "Press 1 to continue" appaia, poi premi 1.

3. Select `Continue`.

    ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

6. Select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

10. Select `Exit`.

11. La tua console avvierà l'Homebrew Channel.

    ![](/images/hbc/blank.png)

## Leggere attentamente

Ora puoi usare l'Homebrew Channel per avviare app homebrew e BootMii per fare il backup e ripristino della tua NAND se sei stato in grado di installarlo.

Nota: Quando installi applicazioni homebrew nella tua scheda SD o unità USB, la struttura delle cartelle dovrebbe essere così:

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

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Suggerimento: Se un Wii ha BootMii installato come boot2, il lettore dei dischi lampeggia molto brevemente dopo il flash immediato quando premi il pulsante POWER.

:::
