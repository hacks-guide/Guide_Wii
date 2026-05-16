# Usare Priiloader

Priiloader è un'utilità essenziale che aggiunge un livello di protezione da brick sulla tua console Wii. Si carica prima del menu di sistema. Può anche applicare hack che possono essere utilizzate per migliorare, sbloccare e/o correggere molte funzioni della console.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di avvio di Wii.

Questa pagina elenca alcune funzioni utili di Priiloader che potrebbero interessarti.

## Menu Hack di sistema

Priiloader ha una vasta selezione di opzioni che, una volta attivate, cambiano il comportamento di Wii con uno a tuo piacimento. Inoltre, puoi visitare le [domande frequenti su Priiloader](https://dacotaco.github.io/priiloader/docs/FAQ.html), che ha informazioni più rilevanti che riguardano queste hack. Puoi trovare più informazioni su ogni opzione [in questa lista](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html).

## Opzioni aggiuntive

Queste sono alcune cose extra che puoi fare con Priiloader per migliorare la tua esperienza homebrew. Ciò è facoltativo.

### Avvio automatico con Priiloader

Priiloader ti permette l'avvio automatico dell'Homebrew Channel, un'app homebrew a piacimento, o Priiloader stesso. Ciò è facoltativo.

#### Avvio automatico su un homebrew

::: warning

Se desideri avviare automaticamente su USB Loader GX, inizia con quanto segue:

- Scarica il WAD del forwarder di USB Loader GX([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Scarica [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Installa il WAD del forwarder con un gestore WAD come [YAWM ModMii Edition](yawmme).
- Estrai il file `UNEO Channel Booter for Priiloader.zip` dove vuoi.
- Copia il file `uneoboot.dol` nella root della tua scheda SD.

Installerai il `uneoboot.dol` nel passaggio 3.

:::

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scendi fino `Load/Install file` e premi A.

   ![](/images/priiloader/menu_install_file.png)

4. Scorri tra i menu fino a quando l'app homebrew che vuoi installare è selezionata, quindi premi A per installarla.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Premi `B` per tornare al menu principale.

6. Scendi fino `Settings` e premi A.

   ![](/images/priiloader/menu_settings.png)

7. Premi a Destra per scorrere le opzioni di avvio automatico finchè `Installed file` è selezionato.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Scendi fino `save settings` e premi A.

   ![](/images/priiloader/settings_save.png)

9. Premi `B` per tornare al menu principale.

10. Sali fino `System Menu` e premi A.

Ora la tua console Wii dovrebbe automaticamente avviare l'app homebrew installata.

#### Avvio automatico dell'Homebrew Channel o Priiloader

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scendi fino `Settings` e premi A.

   ![](/images/priiloader/menu_settings.png)

4. Premi a Destra per scorrere tra le opzioni di avvio automatico finché non viene selezionata l'opzione desiderata.

   - `Disabled` avvierà il menu di Priiloader in automatico.

   ::: warning

   Non impostare l'avvio automatico su `BootMii IOS`. Sarai bloccato in un loop finché non tieni premuto il pulsante RESET per tornare nel menu di Priiloader.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Scendi fino `save settings` e premi A.

   ![](/images/priiloader/settings_save.png)

6. Premi `B` per tornare al menu principale.

7. Sali fino `System Menu` e premi A.

---

::: tip

[Clicca qui per tornare alla guida principale di Priiloader.](priiloader)

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
