---
title: "BlueBomb"
---

{% include toc title="Table of Contents" %}

{% capture bluebomb-classic %}

## BlueBomb Classic

Anche se è l'unico exploit che funziona per il Wii mini, BlueBomb può anche essere eseguito sul Wii originale. {% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

Questo exploit permette anche di riparare alcuni brick, come i banner bricks e (alcuni) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

È **fortemente** sconsigliato usare **qualsiasi** video guida per modificare il tuo Wii mini, in quanto c'è una possibilità estremamente alta di **brickarlo**.
{: .notice--warning}

Se hai bisogno di assistenza riguardo qualunque cosa in questo tutorial, entra nel [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (consigliato)
{: .notice--info}

Se stai usando una Wii originale, dovresti probabilmente trovare [un altro exploit da usare](get-started) in quanto ci sono modi molto più facili per accedere all'installer di HackMii. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.
{: .notice--info}

Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.
{: .notice--info}

### Requisiti

* Un computer Linux
    * Una macchina virtuale potrebbe funzionare, ma non è consigliato data la complessità di far funzionare il passthrough Bluetooth. Se possibile, usa un LiveUSB come descritto di seguito.
    * Se hai un Raspberry Pi, puoi usare quello in quanto probabilmente ha Linux già installato.
    * Il sottosistema Windows per Linux o un Chromebook che esegue Linux *non funzioneranno* poiché non danno l'accesso diretto all'adattatore Bluetooth o alle porte USB.
    * Se non hai Linux, [Ubuntu](https://ubuntu.com/download/desktop) è l'opzione più user-friendly che può essere eseguita su computer che eseguono Windows o Mac.
        * I dispositivi a 32-bit richiedono [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Per i dispotivi a 64-bit è consigliato usare l'edizione LTS per la sua stabilità, ma anche la versione più recente funziona.
    * Puoi [flashare un ambiente Linux Live su un dispotivo USB](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) invece che installarlo sul tuo computer.
* Un adattatore Bluetooth.
    * Un adattatore Bluetooth interno funzionerà.
    * Se non ne hai uno, assicurati di procurartene uno compatibile con Linux.
* Un dispositivo USB formattato in FAT32.
    * Questo non può essere lo stesso dispositivo usato per Linux.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Copia `boot.elf` da hackmii_installer_v1.2 `.zip` al root del tuo dispositivo.
    + (Se stai cercando di sistemare un brick, dovresti anche copiare le app homebrew che desideri usare in /apps/)
    + (Anche per un Wii mini, bootmini.elf **non** funzionerà, il suo scopo è completamente diverso e non collegato. Usa boot.elf in ogni caso).
1. Reinserisci il tuo dispositivo flash nella tua console.
    + Per un Wii mini, la porta USB è dietro.
    + Per un Wii normale, usa la porta inferiore (o la porta a destra se è verticale).
1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Prendi nota nell'angolo in alto a destra della lettera vicino alla versione di sistema.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Spegni la console.
1. Avvia la tua distro di Linux, e assicurati di avere una connessione a internet.
1. Apri il terminale
1. Esegui i seguenti comandi:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. L'helper scaricherà i file richiesti, e chiederà informazioni sulla tua console.
    + Se hai selezionato Wii mini ti verrà chiesto di inserire la tua regione. Questo può essere determinato dall'ultima lettera della versione del Menu Wii (`U` per **USA** ed `E` per i modelli **PAL**).
    + Se hai selezionato Wii ti verrà chiesto di fornire la versione del Menu Wii (che hai determinato nel passaggio 4)
1. Accendi la console.
    + **Non** connettere alcun telecomando Wii.
1. Premi il bottone Sync ripetutamente finchè il terminale non mostra `got connection handle`.
    + Questo passaggio potrebbe richiedere vari tentativi.
1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.
    + Se non vuoi usarla successivamente, puoi spegere la tua distro di Linux.

Se stai usado un Wii: [Continua a Homebrew Channel e installazione di BootMii](hbc)<br>
{: .notice--info}

Se stai usando un Wii mini: [Continua all'installazione di Homebrew Channel](hbc-mini)
{: .notice--info}

{% endcapture %}

{% capture bluebomb-micro %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

Questo exploit permette anche di riparare alcuni brick, come i banner bricks e (alcuni) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

È **fortemente** sconsigliato usare **qualsiasi** video guida per modificare il tuo Wii mini, in quanto c'è una possibilità estremamente alta di **brickarlo**.
{: .notice--warning}

Se hai bisogno di assistenza riguardo qualunque cosa in questo tutorial, entra nel [server Discord di Wii mini Hacking](https://discord.gg/6ryxnkS) (consigliato)
{: .notice--info}

Se stai usando una Wii originale, dovresti probabilmente trovare [un altro exploit da usare](get-started) in quanto ci sono modi molto più facili per accedere all'installer di HackMii. Esistono, tuttavia, delle eccezioni in situazioni come il ripristino dai brick.
{: .notice--info}

Assicurati che la console sia vicina al computer che esegue l'exploit, idealmente dovrebbe essere meno di 1 metro.
{: .notice--info}

### Requisiti
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* Un dispositivo USB formattato in FAT32.
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Istruzioni

1. Copia `boot.elf` da hackmii_installer_v1.2 `.zip` al root del tuo dispositivo.
    + (Se stai cercando di sistemare un brick, dovresti anche copiare le app homebrew che desideri usare in /apps/)
    + (Anche per un Wii mini, bootmini.elf **non** funzionerà, il suo scopo è completamente diverso e non collegato. Usa boot.elf in ogni caso).
1. Reinserisci il tuo dispositivo flash nella tua console.
    + Per un Wii mini, la porta USB è dietro.
    + Per un Wii normale, usa la porta inferiore (o la porta a destra se è verticale).
1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Prendi nota nell'angolo in alto a destra della lettera vicino alla versione di sistema.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Spegni la console.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
1. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Accendi la console.
    + **Non** connettere alcun telecomando Wii.
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Questo passaggio potrebbe richiedere vari tentativi.
1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.

Se stai usado un Wii: [Continua a Homebrew Channel e installazione di BootMii](hbc)<br>
{: .notice--info}

Se stai usando un Wii mini: [Continua all'installazione di Homebrew Channel](hbc-mini)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'bluebomb-classic')"> BlueBomb Classic </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'bluebomb-micro')"> BlueBomb Micro </button>

<div class="tabContent tabDefualt" id="bluebomb-classic" markdown="1">

{{ bluebomb-classic }}
</div>
<div class="tabContent" id="bluebomb-micro" markdown="1">
{{ bluebomb-micro }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
