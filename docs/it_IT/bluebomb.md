# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb è un exploit che sfrutta un difetto nelle librerie Bluetooth del Wii e del Wii mini. {% capture technical_info %}<summary line-breaks-before="1" mark="crwd-mark"><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

Questo exploit permette anche di riparare alcuni brick, come i banner bricks e (alcuni) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.

:::

::: info

Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.

:::

### Requisiti

- Un computer Linux
  - Una macchina virtuale potrebbe funzionare, ma non è consigliato data la complessità di far funzionare il passthrough Bluetooth. Se possibile, usa un LiveUSB come descritto di seguito.
  - Se hai un Raspberry Pi, puoi usare quello in quanto probabilmente ha Linux già installato.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Per i dispotivi a 64-bit è consigliato usare l'edizione LTS per la sua stabilità, ma anche la versione più recente funziona.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Un adattatore Bluetooth.
  - Un adattatore Bluetooth interno funzionerà.
  - Se non ne hai uno, assicurati di procurartene uno compatibile con Linux.
- Un dispositivo USB formattato in FAT32.
  - Questo non può essere lo stesso dispositivo usato per Linux.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Se stai cercando di sistemare un brick, dovresti anche copiare le app homebrew che desideri usare in /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Usa boot.elf in ogni caso).

2. Reinserisci il tuo dispositivo flash nella tua console.
   - Per un Wii mini, la porta USB è dietro.
   - Per un Wii normale, usa la porta inferiore (o la porta a destra se è verticale).

3. Accendi la console.

4. Go to `Wii Settings`.

5. Prendi nota nell'angolo in alto a destra della lettera vicino alla versione di sistema.

   - Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

7. Avvia la tua distro di Linux, e assicurati di avere una connessione a internet.

8. Apri il terminale

9. Esegui i seguenti comandi:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. L'helper scaricherà i file richiesti, e chiederà informazioni sulla tua console.
    - Se hai selezionato Wii mini ti verrà chiesto di inserire la tua regione. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Se hai selezionato Wii ti verrà chiesto di fornire la versione del Menu Wii (che hai determinato nel passaggio 4)

11. Accendi la console.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Questo passaggio potrebbe richiedere vari tentativi.

13. Se l'exploit è andato a buon fine, ti ritroverai dentro l'HackMii Installer.
    - Se non vuoi usarla successivamente, puoi spegere la tua distro di Linux.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

Questo exploit permette anche di riparare alcuni brick, come i banner bricks e (alcuni) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.

:::

::: info

Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.

:::

### Requisiti

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Un dispositivo USB formattato in FAT32.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Istruzioni

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Se stai cercando di sistemare un brick, dovresti anche copiare le app homebrew che desideri usare in /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Usa boot.elf in ogni caso).

2. Reinserisci il tuo dispositivo flash nella tua console.
   - Per un Wii mini, la porta USB è dietro.
   - Per un Wii normale, usa la porta inferiore (o la porta a destra se è verticale).

3. Accendi la console.

4. Go to `Wii Settings`.

5. Prendi nota nell'angolo in alto a destra della lettera vicino alla versione di sistema.

   - Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

   ![](/images/wii/SystemMenuVersion.png)

6. Spegni la console.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Accendi la console.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Questo passaggio potrebbe richiedere vari tentativi.
4. Se l'exploit è andato a buon fine, ti ritroverai dentro l'HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
