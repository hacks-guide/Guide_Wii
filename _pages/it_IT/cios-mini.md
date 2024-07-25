---
title: "d2xl cIOS per Wii mini (sperimentale)"
---

{% include toc title="Table of Contents" %}

Se hai bisogno di assistenza riguardo qualunque cosa in questo tutorial, entra nel [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (consigliato)
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Nonostante i [cIOS](https://wiibrew.org/wiki/Custom_IOS) siano stati per la maggior parte soppiantati da AHBPROT, che dà l'accesso completo all'hardware, essi hanno comunque delle applicazioni utili. Per esempio, questo permette la funzionalità di USB loader come USB Loader GX e WiiFlow, insieme ad altre applicazioni homebrew come SaveGame Manager GX. Puoi saltare questo processo se vuoi, ma normalmente migliore il tuo Wii con quasi nessun lato negativo.

Questo d2x cIOS installer era stato originariamente sviluppato per il vWii del Wii U da DaveBaol e il cIOS personalizzato era stato creato da Leseratte per il Wii mini. La pagina originale di download può essere trovata [qui](https://wii.leseratte10.de/d2xl-cIOS/). La pagina GitHub di Leseratte può essere trovata [qui](https://github.com/Leseratte10/d2xl-cios). Per favore nota che questo cIOS è sempre sperimentale, anche se non sono stati segnalati problemi di funzionalità.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Questa guida è solo per gli utenti Wii Mini. <br/> If you have a Wii, follow [this guide](cios) instead. <br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Farlo [brickerà](bricks#ios-brick) probabilmente la tua console.
{: .notice--warning}

### Requisiti

* Un Wii mini con l'Homebrew Channel installato
* Un dispositivo USB
* Il [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) di Leseratte

### Istruzioni

#### Sezione I - Download

1. Spegni la console.
1. Inserisci il tuo dispositivo USB nel tuo computer.
1. Crea una cartella chiamata `apps` sul root del tuo dispositivo USB se non esiste già.
1. Copia la cartella `d2x-cios-installer` dal `.zip` di dx2l cIOS Installer alla cartella `apps` sul tuo dispositivo USB.
1. Reinserisci il tuo dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia dx2l cIOS Installer dalla lista di homebrew.

#### Sezione II - Installazione

1. Seleziona `Continue`.
1. Imposta le opzioni come segue:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Prendi nota della versione sotto notes (`IOS57-64-` che finisce con `v31776` o `v31775`)
1. Premi A per installare.
    + Se l'installazione fallisce con un errore `TMD version mismatch`, premi sinistra o destra sul +Control Pad sull'opzione `Select cIOS base` finchè il numero della versione non è diverso da quello che hai provato prima. Il numero 57 non cambierà.
1. Quando il processo è completato, esci dall'installer.

[Continua con fare un backup della NAND usando RealWnd](wnd-mini)
{: .notice--info}

#### Attivazione Ethernet

Se desideri usare Wiimmfi con Ethernet su un Wii mini, devi eseguire l'[Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) creato da Fullmetal5. Per eseguirlo, unzippalo nella cartella `apps` del tuo dispositivo USB ed eseguilo dall'Homebrew Channel.

Le console Wii e Wii mini sono note per funzionare solo con adattatori Ethernet che usano il chip AX88772. Per favore controlla che il prodotto sia compatibile prima di comprarlo. Questo da UGREEN è noto per essere compatibile: [Amazon EU](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
