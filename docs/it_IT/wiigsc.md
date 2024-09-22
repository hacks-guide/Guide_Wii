---
title: "Come creare collegamenti per Giochi Wii"
---

{% include toc title="Table of Contents" %}

Do you use a Wii backup loader and want to create game shortcuts to launch them on your Wii Menu? Allora prova WiiGSC (Wii Game Shortcut Creator), precedentemente noto come Crap.

Nel caso di un brick, [avere Priiloader installato è fondamentale](/priiloader). Inoltre, installa anche BootMii (specialmente in Boot2 se la tua Wii è pre-2008). Installando i programmi che proteggono dai brick, seguendo correttamente la guida, dovresti non imbatterti in uno di questi ultimi. NON CONTINUARE FINO A CHE NON HAI INSTALLATO PRIILOADER E BOOTMII!
{: .notice--warning}

NON creare un collegamento per i giochi "Mario Party 9" o "A Boy and His Blob". Causerà un brick.
{: .notice--warning}

The Wii Menu is limited to 48 channels, not including existing system channels.
{: .notice--info}

### Requisiti

* Una console Wii
* An SD or USB drive
* [YAWM ModMii Edition](yawmme)
* Un computer Windows.
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Istruzioni

1. Installa WiiGSC, poi cliccaci sopra con il tasto destro e seleziona **Esegui come Amministratore**. Se non fai questo passaggio, WiiGSC darà errore quando tenterai di aprirlo.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your SD or USB drive, and select the loader you use. Le altre opzioni possono essere lasciate così come sono.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Install the generated WAD with your [WAD manager](yawmme).

<div class="notice--info" markdown="1">
Se ottieni l'errore "The system files are corrupted", non ci sono problemi se Priiloader è già stato installato. Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).
</div>

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
