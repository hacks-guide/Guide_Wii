---
title: "BlueBomb"
---

{% include toc title="Sumário" %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

Esse exploit também permite a recuperação de certos bricks, como bricks de banner e (alguns) bricks de temas.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

É **fortemente** aconselhado não utilizar **qualquer** vídeo como guia para desbloquear o seu Wii Mini, por ter uma grande chance de **brickar** ele.
{: .notice--warning}

Caso precise de ajuda com algo relacionado a este tutorial, entre no servidor do Discord [Wii mini Hacking](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

Se você está usando o Wii original, você provavelmente deveria encontrar [outro exploit para usar](get-started) pois existem maneiras mais fáceis de chegar ao Instalador do HackMii. No entanto, existem exceções em circunstâncias como a recuperação de brick.
{: .notice--info}

Certifique-se que o console está perto do computador executando o exploit, idealmente deve estar menos de 1 metro de distância.
{: .notice--info}

### Requisitos
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* Uma unidade de armazenamento USB formatada como FAT32.
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Instruções

1. Extraia e coloque o arquivo `boot.elf` na sua unidade flash.
    + (Se estiver tentando consertar um brick, você deve também copiar o aplicativo homebrew que deseja utilizar no caminho /apps/)
    + - (Mesmo para um Wii Mini, bootmini.elf **não irá** funcionar, seu propósito é completamente diferente e não relacionado. Use o boot.elf em todos os casos).
1. Reinsira seu Pen Drive no seu console.
    + Em um Wii Mini, as portas USB ficam atrás.
    + Em um Wii original, use a porta inferior. (ou a porta da direita se ele estiver em pé).
1. Ligue o seu console.
1. Ligue seu console e navegue até o menu de configurações. No canto superior direito você irá encontrar um código de 4 caracteres como o da imagem abaixo. Esse código é a versão do seu menu do Wii, anote essa informação, pois irá precisar disto mais tarde.
1. Perceba no canto superior direito a letra próxima da versão do sistema.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Desligue seu console.

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
1. Ligue o seu console.
    + Ligue o console e **não** conecte nenhum Wii Remote.
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Isto pode levar inúmeras tentativas.
1. O console deverá iniciar o instalador do HackMii.

Se estiver usando um Wii, prossiga para a instalação do Homebrew Channel e do BootMii<br>
{: .notice--info}

Se estiver usando um Wii Mini, prossiga para a instalação do Homebrew Channel
{: .notice--info}

## BlueBomb Classic

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary> BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Embora seja o único exploit que funciona no Wii Mini, BlueBomb também pode ser utilizado no Wii original.

Esse exploit também permite a recuperação de certos bricks, como bricks de banner e (alguns) bricks de temas.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

É **fortemente** aconselhado não utilizar **qualquer** vídeo como guia para desbloquear o seu Wii Mini, por ter uma grande chance de **brickar** ele.
{: .notice--warning}

Caso precise de ajuda com algo relacionado a este tutorial, entre no servidor do Discord [Wii mini Hacking](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

Se você está usando o Wii original, você provavelmente deveria encontrar [outro exploit para usar](get-started) pois existem maneiras mais fáceis de chegar ao Instalador do HackMii. No entanto, existem exceções em circunstâncias como a recuperação de brick.
{: .notice--info}

Certifique-se que o console está perto do computador executando o exploit, idealmente deve estar menos de 1 metro de distância.
{: .notice--info}

### Requisitos

* Um computador Linux
    * Uma Máquina Virtual pode funcionar, mas não é recomendado devido à sua complexidade em obter o funcionamento da passagem Bluetooth. Se possível, use LiveUSB como descrito abaixo.
    * Se você tem um Raspberry Pi, ele poderá ser usado, já que a maioria possui Linux pré-instalado.
    * O Subsistema Windows para Linux ou Chromebook não irá *funcionar* já que ele não possui acesso direto para o adaptador Bluetooth ou portas USB.
    * Se você não tem Linux, o [Ubuntu](https://ubuntu.com/download/desktop) é a opção mais fácil de usar e pode ser executado em computadores que rodam Windows ou Mac.
        * Dispositivos 32-bit irão precisar do [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Para dispositivos 64-bits, é recomendado utilizar a edição LTS devido à sua estabilidade, porém a versão mais recente também funciona.
    * Você pode [utilizar um instalador Linux Live em uma unidade USB](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) ao invés de instalar no seu computador.
* Um adaptador Bluetooth.
    * Um adaptador Bluetooth interno funcionará.
    * Se você não tiver um, lembre-se de escolher um compatível com Linux.
* Uma unidade de armazenamento USB formatada como FAT32.
    * Isto não pode ser a mesma unidade de armazenamento utilizada na sua máquina Linux.
* [Para o Wii original, nós não recomendamos utilizar BlueBomb se você pretende instalar o Homebrew Channel e BootMii, já que existem exploits mais convenientes disponíveis.](https://bootmii.org/download/)

### Instruções

1. Extraia e coloque o arquivo `boot.elf` na sua unidade flash.
    + (Se estiver tentando consertar um brick, você deve também copiar o aplicativo homebrew que deseja utilizar no caminho /apps/)
    + - (Mesmo para um Wii Mini, bootmini.elf **não irá** funcionar, seu propósito é completamente diferente e não relacionado. Use o boot.elf em todos os casos).
1. Reinsira seu Pen Drive no seu console.
    + Em um Wii Mini, as portas USB ficam atrás.
    + Em um Wii original, use a porta inferior. (ou a porta da direita se ele estiver em pé).
1. Ligue o seu console.
1. Ligue seu console e navegue até o menu de configurações. No canto superior direito você irá encontrar um código de 4 caracteres como o da imagem abaixo. Esse código é a versão do seu menu do Wii, anote essa informação, pois irá precisar disto mais tarde.
1. Perceba no canto superior direito a letra próxima da versão do sistema.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Desligue seu console.
1. Inicie sua distribuição Linux e verifique se você está conectado à internet.
1. Abra o Terminal
1. Execute os seguintes comandos:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. O terminal irá baixar os arquivos necessários, e pedirá as informações sobre o seu console.
    + Se você selecionou um Wii Mini, sua região será solicitada. Isso pode ser determinado pela última letra da versão do seu sistema (`U` para **USA** e `E` para modelos **PAL**).
    + Se você selecionou um Wii, a versão do sistema será solicitada (a que você anotou na etapa 4)
1. Ligue o seu console.
    + Ligue o console e **não** conecte nenhum Wii Remote.
1. Pressione o botão Sync repetitivamente até que o terminal mostre `got connection handle`.
    + Isto pode levar inúmeras tentativas.
1. O console deverá iniciar o instalador do HackMii.
    + Você pode desligar seu computador Linux se não estiver planejando utilizá-lo depois.

Se estiver usando um Wii, prossiga para a instalação do Homebrew Channel e do BootMii<br>
{: .notice--info}

Se estiver usando um Wii Mini, prossiga para a instalação do Homebrew Channel
{: .notice--info}
