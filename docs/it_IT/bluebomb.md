---
outline: false
---

# BlueBomb

BlueBomb è un exploit che sfrutta una vulnerabilità presente nelle librerie Bluetooth di Wii e Wii mini. Seppur sia l'unico exploit funzionante su Wii mini, funziona anche su Wii originale.

Questo exploit permette anche di recuperarsi da certi brick nel caso in cui non ci siano altre protezioni, come i brick dal banner e (alcuni) brick dal tema.

Leggi le informazioni importanti elencate di seguito prima di procedere.

::: info

**Informazioni importanti**

- Se stai usando questa guida per modificare Wii mini e hai bisogno di aiuto, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (in inglese).
- Se stai usando la revisione originale di Wii, dovresti considerare [un altro exploit](get-started) in quanto ci sono modi più semplici per avviare l'HackMii Installer. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.
- Assicurati che la console sia vicina al computer che esegue l'exploit; idealmente dovrebbero essere a meno di 1 metro di distanza.

:::

::: danger

**Leggere attentamente**

È **fortemente** sconsigliato usare una **qualsiasi** videoguida in generale, soprattutto se stai modificando Wii mini. Seguire istruzioni errate ha una probabilità ancora più elevata di **brickare** la console rispetto al normale.

:::

::::: tabs

:::: tab BlueBomb Classic (Linux)

## BlueBomb Classic

BlueBomb Classic usa un dispositivo Linux o una macchina virtuale per caricare un exploit su Wii tramite Bluetooth.

### Requisiti

- Un PC Linux
  - Una VM (macchina virtuale) potrebbe funzionare, ma non è consigliata data la complessità nel farci passare il Bluetooth. Se possibile, usa una LiveUSB come descritto sotto.

  - Se possiedi un Raspberry Pi, puoi utilizzarlo, in quanto è probabile che abbia Linux già installato.

    - I Raspberry Pi ARM64 devono avere multiarch abilitato con l'architettura armhf (32bit) aggiunta. I seguenti comandi dovrebbero funzionare su qualsiasi SO basato su debian:

    ```shell
    sudo sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # dovrebbe dire ELF 32-bit
    screen
    ```

  - Il sottosistema Windows per Linux o un Chromebook in modalità Linux _non funzioneranno_, in quanto non hanno accesso diretto agli adattatori Bluetooth e alle porte USB.

  - Se non hai Linux, [Ubuntu](https://www.ubuntu-it.org/download) è la versione più adatta agli inesperti e può essere installato su qualsiasi computer Windows o Mac con processore Intel.
    - I Mac con Apple Silicon non funzioneranno in quanto gli mancano le istruzioni ARM32 nell'hardware.
    - I sistemi a 32 bit richiederanno [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Per quelli a 64 bit, l'edizione LTS è la più raccomandata per la sua stabilità, ma anche l'ultima versione disponibile può andare bene.

  - Puoi [flashare un ambiente Linux Live su una chiavetta USB](https://www.linux.it/usb/) invece di installarlo sul tuo computer.
- Un adattatore Bluetooth.
  - Un adattatore Bluetooth integrato funzionerà.
  - Se non ne possiedi, assicurati di acquistarne uno compatibile con Linux.
- Un'unità USB [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - Non può essere la stessa che usi per avviare la macchina Linux.
- [HackMii Installer](https://bootmii.org/download/)

### Istruzioni

#### Sezione I - Preparazione iniziale

1. Copia il file `boot.elf` da `hackmii_installer_v1.2.zip` nella root dell'unità USB.

   - (Se stai cercando di risolvere un brick, dovresti anche copiare l'app homebrew che desideri utilizzare in /apps/)
   - (Anche su Wii mini, bootmini.elf **non** funzionerà: il suo scopo è totalmente diverso e irrilevante. Usa boot.elf in ogni caso).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinserisci l'unità USB nella console.
   - Per Wii mini, la porta è sul retro.
   - Per Wii normale, usa la porta di sotto (o quella di destra se la tieni in verticale).

3. Accendi la console.

4. Vai su `Impostazioni console Wii`.

5. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

#### Sezione III - Configurazione dell'exploit

1. Avvia la distro Linux e assicurati che sia connessa a Internet.

2. Apri il terminale ed esegui i seguenti comandi:

   ```shell
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

3. Questo helper scaricherà i file richiesti e chiederà informazioni relative alla tua console.

   ![](/images/exploits/bluebomb/console-type.png)

   - Se hai selezionato Wii mini, ti sarà chiesta la regione. Questo può essere determinato dall'ultima lettera della versione del menu Wii (`E` per **PAL** e `U` per **USA**).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - Se hai selezionato Wii, ti sarà chiesto il numero di versione del menu Wii (quello che hai determinato nel passaggio 4).

   ![](/images/exploits/bluebomb/wii-options.png)

#### Sezione III - Eseguire l'exploit

1. Accendi la console.
   - **Non** collegare alcun telecomando Wii.

2. Se non l'hai già fatto, scrivi `yes` nello script per procedere. Assicurati che `Waiting to accept` sia a schermo.

3. Sulla console, premi il pulsante Sync ripetutamente finché il terminale non mostra `got connection handle`. Attendi che l'exploit finisca di caricare.

   - Potrebbero volerci più tentativi.

   ![](/images/exploits/bluebomb/got-connection-handle.png)

4. Se l'exploit ha avuto successo, dovresti vedere una schermata simile a quella di seguito. A questo punto dovrebbe partire l'HackMii Installer.

   - Se non hai intenzione di usarla dopo, puoi spegnere la distro Linux.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::

::::

:::: tab BlueBomb Micro (RPi/ESP32)

## BlueBomb Micro

BlueBomb Micro utilizza un Raspberry Pi Pico o un ESP32 per caricare l'exploit su Wii tramite Bluetooth.

::: warning

Se ricevi l'errore `Exception 0700 occurred!` o simili, ritenta. Se continua, unisciti al [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (in inglese) per ricevere supporto.

:::

### Requisiti

- Un Raspberry Pi Pico W 1/2 o un ESP32 con supporto BR/EDR (Classic).
- Un'unità USB [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- [HackMii Installer](https://bootmii.org/download/)

::: info

Un Raspberry Pi Pico normale non funzionerà. DEVE essere il modello wireless. Inoltre, un ESP32 dotato di un controller solo BLE non funzionerà.

:::

### Istruzioni

#### Sezione I - Preparazione iniziale

1. Copia il file `boot.elf` da `hackmii_installer_v1.2.zip` nella root dell'unità USB.

   - (Se stai cercando di risolvere un brick, dovresti anche copiare l'app homebrew che desideri utilizzare in /apps/)
   - (Anche su Wii mini, bootmini.elf **non** funzionerà: il suo scopo è totalmente diverso e irrilevante. Usa boot.elf in ogni caso).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinserisci l'unità USB nella console.
   - Per Wii mini, la porta è sul retro.
   - Per Wii normale, usa la porta di sotto (o quella di destra se la tieni in verticale).

3. Accendi la console.

4. Vai su `Impostazioni console Wii`.

5. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

#### Sezione II.a - Raspberry Pi Pico W

:::details Istruzioni sulla preparazione

1. Scarica gli ultimi [binari precompilati](https://github.com/GaryOderNichts/bluebomb_micro/releases) dalla pagina dei rilasci, poi estraili sul tuo PC.

   - Seleziona i binari adatti al tuo dispositivo. `bluebomb_micro_pico2_w_version` è per il Pico 2 W, mentre `bluebomb_micro_pico_w_version` è per il Pico 1 W.

   ![](/images/exploits/bluebomb/pico-download.png)

2. Collega il Pico W al PC mentre tieni premuto il pulsante `BOOTSEL`. Il PC ora dovrebbe riconoscerlo come un'unità USB.

   ![](/images/exploits/bluebomb/pico-button.jpg)
   ![](/images/exploits/bluebomb/pico-drive.png)

3. Estrai l'archivio scaricato e copia sul dispositivo il file corrispondente alla tua console Wii o Wii mini.

   - Se hai una console Wii europea versione 4.3, copia `bluebomb_WII_SM4_3E.uf2`, se hai una console Wii mini europea, copia `bluebomb_MINI_SM_PAL.uf2`, ecc...

   ![](/images/exploits/bluebomb/pico-files.png)

4. Il dispositivo dovrebbe disconnettersi e il LED dovrebbe iniziare a lampeggiare di verde. Ciò significa che il Pico W è pronto: ora puoi scollegarlo dal PC.

   ![](/images/exploits/bluebomb/pico-ready.jpg)

:::

#### Sezione II.b - ESP32

:::details Istruzioni sulla preparazione

1. Prepara l'ultima versione di [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Compila i binari [dalla sorgente](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flasha i binari](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) sul tuo ESP32.
4. Il dispositivo ora è pronto. Puoi scollegarlo dal PC.

:::

#### Sezione III - Eseguire l'exploit

1. Collega nuovamente il dispositivo al PC.
2. Accendi la console.
   - **Non** collegare alcun telecomando Wii.
3. Premi ripetutamente il pulsante Sync finché il LED del Pico W non inizia a lampeggiare rapidamente; a questo punto inizierà a caricare l'exploit.
   - Potrebbero volerci più tentativi.
4. Se l'exploit ha avuto successo, dovresti vedere una schermata simile a quella di seguito. A questo punto dovrebbe partire l'HackMii Installer.

   - Ora puoi scollegare il microcontroller.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::

::::

:::: tab BlueMii (Wii a Wii)

## BlueMii

BlueMii utilizza un'altra console Wii per caricare l'exploit su Wii tramite Bluetooth.

### Requisiti

- Una console Wii, Wii U (vWii) o Wii mini secondaria, da usare per caricare l'exploit sulla console di destinazione
- Un'unità USB O una scheda SD per metterci sopra HackMii Installer, [formattata in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Una seconda unità USB O scheda SD per caricarci BlueMii sulla console che effettuerà l'exploit
- [BlueMii](https://github.com/Zarithya/BlueMii/releases/tag/v1.1)
- [HackMii Installer](https://bootmii.org/download/)

### Istruzioni

#### Sezione I - Preparazione della console di destinazione

1. Copia il file `boot.elf` da `hackmii_installer_v1.2.zip` nella root dell'unità USB o della scheda SD che verrà utilizzata sulla console di destinazione.

   - (Se stai cercando di risolvere un brick, dovresti anche copiare l'app homebrew che desideri utilizzare in /apps/)
   - (Anche su Wii mini, bootmini.elf **non** funzionerà: il suo scopo è totalmente diverso e irrilevante. Usa boot.elf in ogni caso).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinserisci l'unità USB o la scheda SD nella console.
   - Per Wii mini, la porta è sul retro.
   - Per Wii normale, usa la porta di sotto (o quella di destra se la tieni in verticale).

3. Accendi la console di destinazione.

4. Vai su `Impostazioni console Wii`.

5. Prendi nota della lettera a destra del numero di versione di sistema.

   - Questa lettera corrisponde alla regione del menu di sistema, che dovrai sapere per i passaggi successivi.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console di destinazione.

#### Sezione III - Configurazione dell'exploit

1. Copia la cartella `apps` da `BlueMii.vX.X.zip` nella root della scheda SD o dell'unità USB utilizzata sulla console dell'exploit.

2. Reinserisci l'unità USB o la scheda SD nella console.

3. Accendi la console dell'exploit.

4. Sulla stessa console, apri l'Homebrew Channel e carica l'app BlueMii.

   ![](/images/exploits/bluebomb/load-bluemii.png)

5. Nell'app, seleziona la regione che corrisponde a quella della console che vuoi modificare.

   ![](/images/exploits/bluebomb/bluemii-region.png)

#### Sezione III - Eseguire l'exploit

1. Accendi la console di destinazione.
   - **Non** collegare alcun telecomando Wii.

2. Sulla console dell'exploit, premi il pulsante `A` per inizializzare il caricamento dell'exploit sulla console di destinazione.

   ![](/images/exploits/bluebomb/bluemii-ready.png)

3. Premi ripetutamente il pulsante Sync finché la console dell'exploit non mostra `got connection handle`. Attendi che l'exploit finisca di caricare.

   - Potrebbero volerci più tentativi.

   ![](/images/exploits/bluebomb/bluemii-handle.png)

4. Se l'exploit ha avuto successo, dovresti vedere una schermata simile a quella di seguito. A questo punto dovrebbe partire l'HackMii Installer.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

5. Sulla console dell'exploit, puoi cliccare `A` per riprovare l'exploit, o `HOME/START` per tornare all'Homebrew Channel.

   ![](/images/exploits/bluebomb/bluemii-success.png)

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::

:::::
