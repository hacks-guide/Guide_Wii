---
outline: false
---

# BlueBomb

BlueBomb è un exploit che trae vantaggio di un difetto presente nelle librerie del Bluetooth di Wii e Wii mini. Seppur è l'unico exploit che funziona su Wii mini, BlueBomb funzionerà anche su Wii originale.

Questo exploit permette anche di recuperarsi da certi brick nel caso non ci siano altre protezioni, come brick dal banner e (alcuni) brick dal tema.

Leggi le informazioni importanti elencate sotto prima di procedere.

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Informazioni importanti

- Se stai utilizzando questa guida per modificare Wii mini e hai bisogno di aiuto, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS).
- Se stai usando la revisione originale di Wii, dovresti considerare di trovare [un altro exploit](get-started) in quanto ci sono modi più semplici per avviare l'installer di HackMii. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.
- Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.

:::

::: danger

È **fortemente** non consigliato usare una **qualsiasi** videoguida in generale, soprattutto se stai modificando una console Wii mini. Seguire istruzioni errate ha una probabilità ancora più alta di **brickare** la tua console rispetto al normale.

:::

### Requisiti

- Un computer Linux
  - Una VM (macchina virtuale) potrebbe funzionare, ma non è consigliata data la complessità nel farci passare il Bluetooth. Se possibile, usa una LiveUSB come descritto sotto.

  - Se hai un Raspberry Pi, puoi usare quello in quanto è probabile che abbia Linux già installato.

    - I Raspberry Pi ARM64 devono avere multiarch abilitato con l'architettura armhf (32bit) aggiunta. I seguenti comandi dovrebbero funzionare su qualsiasi SO basato su debian:

    ```shell
    sudo sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # dovrebbe dire ELF 32-bit
    screen
    ```

  - Il sottosistema Windows per Linux o un Chromebook in modalità Linux _non funzioneranno_ in quanto non hanno accesso diretto agli adattatori Bluetooth e le porte USB.

  - Se non hai Linux, [Ubuntu](https://ubuntu.com/download/desktop) è la versione più adatta agli inesperti e può essere girato su qualsiasi computer Mac basati su processori Intel o Windows.
    - I Mac con Apple Silicon non funzioneranno in quanto gli mancano le istruzioni ARM32 nell'hardware.
    - I dispositivi a 32 bit richiederanno [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Per quelli a 64 bit, l'edizione LTS è la più raccomandata per la sua stabilità, ma anche l'ultima versione disponibile può andare bene.

  - Puoi [flashare un embiente Linux Live su una chiavetta USB](https://www.linux.it/usb/) invece di installarlo sul tuo computer.
- Un adattatore Bluetooth.
  - Un adattatore Bluetooth interno funzionerà.
  - Se non ne hai una, assicurati di prenderne una che sia compatibile con Linux.
- Una chiavetta USB [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - Non può essere la stessa che usi per avviare la macchina Linux.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Copia il file `boot.elf` dal `.zip` di hackmii_installer_v1.2 nella root dell'unità USB.

   - (Se stai cercando di sistemare un brick, dovresti anche copiare l'app homebrew che desideri usare su /apps/)
   - (Anche per Wii mini, bootmini.elf **non** funzionerà, il suo scopo è completamente diverso e non centra. Usa boot.elf in qualsiasi caso).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinserisci l'unità USB nella console.
   - Per Wii mini, la porta è sul retro.
   - Per Wii normale, usa la porta di sotto (o quella a destra se la tieni in verticale).

3. Accendi la console.

4. Vai su `Impostazioni console Wii`.

5. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

7. Avvia la distro Linux e assicurati di essere connesso a Internet.

8. Apri il terminale ed esegui i seguenti comandi:

   ```shell
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

9. Questo helper scaricherà i file richiesti e chiederà informazioni relative alla tua console.

   ![](/images/exploits/bluebomb/console-type.png)

   - Se hai selezionato Wii mini, ti sarà chiesta la regione. Questo può essere determinato dall'ultima lettera della versione del menu Wii (`E` per **PAL** e `U` per **USA**).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - Se hai selezionato Wii, ti sarà chiesto il numero di versione del menu Wii (quello che hai determinato nel passaggio 4).

   ![](/images/exploits/bluebomb/wii-options.png)

10. Accendi la console
    - **Non** collegare alcun telecomando Wii.

11. Se non l'hai già fatto, scrivi `yes` nello script per procedere. Assicurati che `Waiting to accept` sia a schermo.

12. Sulla console, premi il pulsante Sync ripetutamente finché il terminale mostri `got connection handle`.

    - Potrebbe richiedere più tentativi.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. Se l'exploit ha avuto successo dovresti riuscire a vedere una schermata simile a quella mostrata sotto, dopo cui dovrebbe partire l'installer di HackMii.

    - Se non pianifichi di usarla dopo, puoi spegnere la distro Linux.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continua con Hackmii Installer](hbc)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Informazioni importanti

- Se stai utilizzando questa guida per modificare Wii mini e hai bisogno di aiuto, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS).
- Se stai usando la revisione originale di Wii, dovresti considerare di trovare [un altro exploit](get-started) in quanto ci sono modi più semplici per avviare l'installer di HackMii. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.
- Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.
- Se ricevi un errore `Exception 0700 occurred!` o simili, ritenta. Se continua, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) per supporto.

:::

::: danger

È **fortemente** non consigliato usare una **qualsiasi** videoguida in generale, soprattutto se stai modificando una console Wii mini. Seguire istruzioni errate ha una probabilità ancora più alta di **brickare** la tua console rispetto al normale.

:::

### Requisiti

- Un Raspberry Pi Pico W 1/2 o un ESP32 con supporto BR/EDR (classico).
- Una chiavetta USB [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- [The HackMii Installer](https://bootmii.org/download/)

::: info

Un Raspberry Pi Pico normale non funzionerà. DEVE essere il modello wireless. Inoltre, un ESP32 con un controller BLE solo non funzionerà.

:::

### Istruzioni

1. Copia il file `boot.elf` dal `.zip` di hackmii_installer_v1.2 nella root dell'unità USB.

   - (Se stai cercando di sistemare un brick, dovresti anche copiare l'app homebrew che desideri usare su /apps/)
   - (Anche per Wii mini, bootmini.elf **non** funzionerà, il suo scopo è completamente diverso e non centra. Usa boot.elf in qualsiasi caso).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinserisci l'unità USB nella console.
   - Per Wii mini, la porta è sul retro.
   - Per Wii normale, usa la porta di sotto (o quella a destra se la tieni in verticale).

3. Accendi la console.

4. Vai su `Impostazioni console Wii`.

5. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

#### Raspberry Pi Pico W

1. Scarica gli ultimi [binari precompilati](https://github.com/GaryOderNichts/bluebomb_micro/releases) dalla pagina dei rilasci, ed estraili sul tuo PC.

   - Seleziona i binari adatti al tuo dispositivo. `bluebomb_micro_pico2_w_version` è per il Pico 2 W, mentre `bluebomb_micro_pico_w_version` è per il Pico 1 W.

   ![](/images/exploits/bluebomb/pico-download.png)

2. Collega il tuo Pico W al PC mentre tieni premuto il pulsante `BOOTSEL`. Il tuo PC ora dovrebbe riconoscere il Pico come unità USB.

   ![](/images/exploits/bluebomb/pico-button.jpg)
   ![](/images/exploits/bluebomb/pico-drive.png)

3. Estrai l'archivio scaricato e copia sul dispositivo il file che corrisponde alla tua console Wii o Wii mini.

   - Se hai una console Wii europea versione 4.3, copieresti bluebomb_WII_SM4_3E.uf2, se hai una console Wii mini europea, copieresti bluebomb_MINI_SM_PAL.uf2, ecc...

   ![](/images/exploits/bluebomb/pico-files.png)

4. Il dispositivo dovrebbe disconnettersi e il LED iniziare a lampeggiare di verde. Ciò significa che il tuo Pico W è pronto - ora puoi scollegarlo dal PC.

   ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. Prepara l'ultima versione di [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Costruisci i binari [dalla sorgente](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flasha i binari](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) sul tuo ESP32.
4. Il dispositivo ora è pronto. Puoi scollegarlo dal PC.

### Esecuzione dell'exploit

1. Collega nuovamente il dispositivo al PC.
2. Accendi la console
   - **Non** collegare alcun telecomando Wii.
3. Sulla console, premi il pulsante Sync ripetutamente finché il LED del Pico W inizia a lampeggiare rapidamente, a questo punto inizierà a caricare l'exploit.
   - Potrebbe richiedere più tentativi.
4. Se l'exploit ha avuto successo dovresti riuscire a vedere una schermata simile a quella mostrata sotto, dopo cui dovrebbe partire l'installer di HackMii.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continua con Hackmii Installer](hbc)

:::

::::

:::::
