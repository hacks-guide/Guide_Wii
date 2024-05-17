---
title: Usare Priiloader
---

{% include toc title="Table of Contents" %}

Priiloader è un'utilità essenziale che aggiunge un livello di protezione da brick sul tuo Wii. Si carica prime se si carichi il Menu di Sistema Wii. Può anche applicare hack che possono essere utilizzate per migliorare, sbloccare e/o correggere molte funzioni del Menu di sistema.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di autoboot del Wii.

Questa pagina elenca alcune funzioni utili di Priiloader che potrebbero interessarti.

### Hack Menu di Sistema

Priiloader ha una vasta selezione di opzioni che, una volta attivate, cambiano il comportamento del Wii con uno a tuo piacimento. You can find more information on each hack [here](https://dacotaco.github.io/priiloader/docs/HACKS.html#currently-supported-hacks). Addditionally, you can visit the [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) which has more relevant information regarding System Menu hacks.

### Opzioni aggiuntive

Queste sono alcune cose extra che puoi fare con Priiloader per migliorare la tua esperienza homebrew. Questo è facoltativo.

#### Autoboot con Priiloader

Priiloader ti permette l'avvio automatico dell'Homebrew Channel, un'individuale app homebrew, o Priiloader stesso. Questo è facoltativo.

##### Autoboot a un applicazione homebrew

<div id="autobooting-usbloadergx" class="notice--warning" markdown="1">
Se si desidera fare l'autoboot a USB Loader GX, inizia con quanto segue:
  + Scarica il forwarder WAD per USB Loader GX ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
  + Scarica l'[UNEO Channel Booter per Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
  + Installa il forwarder WAD con un WAD manager tipo [WAWM ModMii Edition](yawmme).
  + Estrai il file `UNEO Channel Booter for Priiloader.zip` dove desideri.
  + Copia il file `uneoboot.dol` al root della scheda SD.
Installerai l'`uneoboot.dol` nel passaggio 3.
</div>

1. Avvia l'Homebrew Channel
1. Avvia Load Priiloader dalla lista degli homebrew.
1. Scorri in basso fino a `Load/Install File` e premi A.

    ![](/images/priiloader/menu_install_file.png)

1. Scorri tra i menu fino a quando l'app homebrew che vuoi installare è selezionata, quindi premi A per installarla.

    ![](/images/priiloader/installing_file.png)

    ![](/images/priiloader/installing_file_ok.png)

1. Premi `B` per tornare al menu principale.
1. Scorri in basso fino a `Settings` e premi A.

    ![](/images/priiloader/menu_settings.png)

1. Premi a Destra per scorrere tra le opzioni di autoboot finché non viene selezionato `Installed file`.

    ![](/images/priiloader/autoboot_installed_file.png)

1. Scorri in basso fino a `save settings` e premi A.

    ![](/images/priiloader/settings_save.png)

1. Premi `B` per tornare al menu principale.
1. Torna in alto fino a `System Menu` e premi A.

Ora il tuo Wii dovrebbe avviare la tua app homebrew installata in automatico.

##### Autoboot all'Homebrew Channel o Priiloader

1. Avvia l'Homebrew Channel
1. Avvia Load Priiloader dalla lista degli homebrew.
1. Scorri in basso fino a `Settings` e premi A.

    ![](/images/priiloader/menu_settings.png)

1. Premi a Destra per scorrere tra le opzioni di autoboot finché non viene selezionata l'opzione desiderata.
    + Disabled' avvierà il menu di Priiloader in automatico.

    Si prega di non impostare l'autoboot su `BootMii IOS`. Sarai bloccato in un loop finché non tieni premuto il pulsante RESET per tornare nel menu di Priiloader.
    {: .notice--warning}

    ![](/images/priiloader/autoboot_disabled.png)

1. Scorri in basso fino a `save settings` e premi A.

    ![](/images/priiloader/settings_save.png)

1. Premi `B` per tornare al menu principale.
1. Torna in alto fino a `System Menu` e premi A.
