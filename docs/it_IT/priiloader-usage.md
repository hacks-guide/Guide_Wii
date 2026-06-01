# Come usare Priiloader

Priiloader è un'utilità essenziale che aggiunge un livello di protezione da brick alla console Wii. Viene avviato prima del menu di sistema. Può anche applicare delle hack che possono essere utilizzate per migliorare, sbloccare e/o correggere molte delle funzionalità della console.

Inoltre, può essere usato per avviare rapidamente i giochi e gli homebrew, oppure per avviare la console in un'app diversa dal menu Wii.

Questa pagina elenca alcune delle funzioni utili di Priiloader che potrebbero interessarti.

## System Menu Hacks

Priiloader offre una vasta gamma di opzioni che, una volta attivate, modificano il comportamento della console. Per ulteriori informazioni su ogni opzione, consulta [questa lista](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). Inoltre, puoi dare un'occhiata alle [domande frequenti di Priiloader](https://dacotaco.github.io/priiloader/docs/FAQ.html), che contiene informazioni più rilevanti a riguardo.

## Opzioni aggiuntive

Queste sono alcune cose aggiuntive che puoi fare con Priiloader per migliorare la tua esperienza con gli homebrew. Ciò è facoltativo.

### Avvio automatico con Priiloader

Priiloader consente di avviare automaticamente l'Homebrew Channel, un'app homebrew a scelta o Priiloader stesso. Ciò è facoltativo.

#### Avvio automatico su un homebrew

::: warning

Se desideri avviare automaticamente su USB Loader GX, segui prima queste istruzioni:

- Scarica il WAD del forwarder di USB Loader GX ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Scarica [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Installa il WAD del forwarder con un gestore WAD come [YAWM ModMii Edition](yawmme).
- Estrai il file `UNEO Channel Booter for Priiloader.zip` in una cartella qualsiasi.
- Copia il file `uneoboot.dol` nella root della scheda SD.

Installerai `uneoboot.dol` nel passaggio 3.

:::

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scendi fino a `Load/Install file` e premi `A`.

   ![](/images/priiloader/menu_install_file.png)

4. Scorri tra i menu fino a quando l'app homebrew che vuoi installare non è selezionata, poi premi A per installarla.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Premi `B` per tornare al menu principale.

6. Scendi fino a `Settings` e premi `A`.

   ![](/images/priiloader/menu_settings.png)

7. Premi destra per scorrere le opzioni di avvio automatico finchè `Installed file` non è selezionato.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Scendi fino a `save settings` e premi `A`.

   ![](/images/priiloader/settings_save.png)

9. Premi `B` per tornare al menu principale.

10. Sali fino a `System Menu` e premi `A`.

Ora la console dovrebbe avviare automaticamente l'app homebrew installata.

#### Avvio automatico dell'Homebrew Channel o di Priiloader

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scendi fino a `Settings` e premi `A`.

   ![](/images/priiloader/menu_settings.png)

4. Premi destra per scorrere tra le opzioni di avvio automatico finché non viene selezionata quella desiderata.

   - `Disabled` avvierà il menu di Priiloader in automatico.

   ::: warning

   Non impostare l'avvio automatico su `BootMii IOS`. Rimarrai bloccato in un loop finché non tieni premuto il pulsante RESET per tornare al menu di Priiloader.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Scendi fino a `save settings` e premi `A`.

   ![](/images/priiloader/settings_save.png)

6. Premi `B` per tornare al menu principale.

7. Sali fino a `System Menu` e premi `A`.

---

::: tip

[Clicca qui per tornare alla guida principale di Priiloader.](priiloader)

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
