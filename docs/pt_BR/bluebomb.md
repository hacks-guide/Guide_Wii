# Créditos

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb é um exploit que tira proveito de uma falha nas libraries do Bluetooth do Wii e do Wii Mini. Embora seja o único exploit que funciona no Wii Mini, BlueBomb também pode ser utilizado no Wii original.

Esse exploit também permite a recuperação de certos bricks, como bricks de banner e (alguns) bricks de temas.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. No entanto, existem exceções em circunstâncias como a recuperação de brick.

:::

::: info

Certifique-se que o console está perto do computador executando o exploit, idealmente deve estar menos de 1 metro de distância.

:::

### Requisitos

- Um computador Linux
  - Uma Máquina Virtual pode funcionar, mas não é recomendado devido à sua complexidade em obter o funcionamento da passagem Bluetooth. Se possível, use LiveUSB como descrito abaixo.
  - Se você tem um Raspberry Pi, ele poderá ser usado, já que a maioria possui Linux pré-instalado.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Para dispositivos 64-bits, é recomendado utilizar a edição LTS devido à sua estabilidade, porém a versão mais recente também funciona.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Um adaptador Bluetooth.
  - Um adaptador Bluetooth interno funcionará.
  - Se você não tiver um, lembre-se de escolher um compatível com Linux.
- Uma unidade de armazenamento USB formatada como FAT32.
  - Isto não pode ser a mesma unidade de armazenamento utilizada na sua máquina Linux.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instruções

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Se estiver tentando consertar um brick, você deve também copiar o aplicativo homebrew que deseja utilizar no caminho /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use o boot.elf em todos os casos).

2. Reinsira seu Pen Drive no seu console.
   - Em um Wii Mini, as portas USB ficam atrás.
   - Em um Wii original, use a porta inferior. (ou a porta da direita se ele estiver em pé).

3. Ligue o seu console.

4. Go to `Wii Settings`.

5. Perceba no canto superior direito a letra próxima da versão do sistema.

   - Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

   ![](/images/wii/SystemMenuVersion.png)

6. Desligue seu console.

7. Inicie sua distribuição Linux e verifique se você está conectado à internet.

8. Abra o Terminal

9. Execute os seguintes comandos:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. O terminal irá baixar os arquivos necessários, e pedirá as informações sobre o seu console.
    - Se você selecionou um Wii Mini, sua região será solicitada. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Se você selecionou um Wii, a versão do sistema será solicitada (a que você anotou na etapa 4)

11. Ligue o seu console.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Isto pode levar inúmeras tentativas.

13. Ele fará o download do HackMii Installer e depois será iniciado.
    - Você pode desligar seu computador Linux se não estiver planejando utilizá-lo depois.

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

Esse exploit também permite a recuperação de certos bricks, como bricks de banner e (alguns) bricks de temas.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. No entanto, existem exceções em circunstâncias como a recuperação de brick.

:::

::: info

Certifique-se que o console está perto do computador executando o exploit, idealmente deve estar menos de 1 metro de distância.

:::

### Requisitos

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Uma unidade de armazenamento USB formatada como FAT32.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instruções

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Se estiver tentando consertar um brick, você deve também copiar o aplicativo homebrew que deseja utilizar no caminho /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use o boot.elf em todos os casos).

2. Reinsira seu Pen Drive no seu console.
   - Em um Wii Mini, as portas USB ficam atrás.
   - Em um Wii original, use a porta inferior. (ou a porta da direita se ele estiver em pé).

3. Ligue o seu console.

4. Go to `Wii Settings`.

5. Perceba no canto superior direito a letra próxima da versão do sistema.

   - Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

   ![](/images/wii/SystemMenuVersion.png)

6. Desligue seu console.

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
2. Ligue o seu console.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Isto pode levar inúmeras tentativas.
4. Ele fará o download do HackMii Installer e depois será iniciado.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
