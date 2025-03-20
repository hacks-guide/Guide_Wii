# Usare Priiloader

Priiloader è un'utilità essenziale che aggiunge un livello di protezione da brick sul tuo Wii. Si carica prime se si carichi il Menu di Sistema Wii. Può anche applicare hack che possono essere utilizzate per migliorare, sbloccare e/o correggere molte funzioni del Menu di sistema.

Inoltre, può essere usato per avviare rapidamente titoli e homebrew, oppure per cambiare l'ordine di autoboot del Wii.

Questa pagina elenca alcune funzioni utili di Priiloader che potrebbero interessarti.

## Hack Menu di Sistema

Priiloader ha una vasta selezione di opzioni che, una volta attivate, cambiano il comportamento del Wii con uno a tuo piacimento. You can find more information on each hack [here](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). Additionally, you can visit the [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) which has more relevant information regarding System Menu hacks.

## Opzioni aggiuntive

Queste sono alcune cose extra che puoi fare con Priiloader per migliorare la tua esperienza homebrew. Questo è facoltativo.

### Autoboot con Priiloader

Priiloader ti permette l'avvio automatico dell'Homebrew Channel, un'individuale app homebrew, o Priiloader stesso. Questo è facoltativo.

#### Autoboot a un applicazione homebrew

::: warning

Se si desidera fare l'autoboot a USB Loader GX, inizia con quanto segue:

- Download the USB Loader GX forwarder WAD ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Install the forwarder WAD with a WAD manager like [YAWM ModMii Edition](yawmme).
- Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
- Copy `uneoboot.dol` to the root of your SD card.

You will be installing `uneoboot.dol` in step 3.

:::

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scroll down to `Load/Install file` and press A.

  ![](/images/priiloader/menu_install_file.png)

4. Scorri tra i menu fino a quando l'app homebrew che vuoi installare è selezionata, quindi premi A per installarla.

  ![](/images/priiloader/installing_file.png)

  ![](/images/priiloader/installing_file_ok.png)

5. Press `B` to return to the main menu.

6. Scroll down to `Settings` and press A.

  ![](/images/priiloader/menu_settings.png)

7. Press Right to cycle through the Autoboot options until the `Installed file` option is selected.

  ![](/images/priiloader/autoboot_installed_file.png)

8. Scroll down to `save settings` and press A.

  ![](/images/priiloader/settings_save.png)

9. Press `B` to return to the main menu.

10. Scroll back up to `System Menu` and press A.

Ora il tuo Wii dovrebbe avviare la tua app homebrew installata in automatico.

#### Autoboot all'Homebrew Channel o Priiloader

1. Avvia l'Homebrew Channel

2. Avvia Load Priiloader dalla lista degli homebrew.

3. Scroll down to `Settings` and press A.

  ![](/images/priiloader/menu_settings.png)

4. Premi a Destra per scorrere tra le opzioni di autoboot finché non viene selezionata l'opzione desiderata.

  - Disabled' avvierà il menu di Priiloader in automatico.

  ::: warning

  Please don't set Autoboot to `BootMii IOS`. Sarai bloccato in un loop finché non tieni premuto il pulsante RESET per tornare nel menu di Priiloader.

  :::

  ![](/images/priiloader/autoboot_disabled.png)

5. Scroll down to `save settings` and press A.

  ![](/images/priiloader/settings_save.png)

6. Press `B` to return to the main menu.

7. Scroll back up to `System Menu` and press A.
