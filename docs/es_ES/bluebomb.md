# Créditos

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb es un exploit que aprovecha una falla en las librerías Bluetooth de la Wii y la Wii mini. {% capture technical_info %}<summary line-breaks-before="1" mark="crwd-mark"><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Sin embargo, existen excepciones en circunstancias como la recuperación de bloqueos.

:::

::: info

Asegúrate de que la consola se encuentre cerca de tu PC al momento de ejecutar el exploit, preferiblemente a una distancia no mayor a un metro.

:::

### Requisitos

- Una PC con Linux
  - Una máquina virtual podría funcionar, pero no es recomendable debido a la dificultad para configurar la conexión Bluetooth. De ser posible, utiliza una Live USB como se describe más adelante.
  - Si tienes una Raspberry Pi, prueba a usarla, pues es probable que ya tenga Linux instalado.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Para los equipos de 64 bits se recomienda usar la edición LTS por su estabilidad, aunque la última versión también funcionará.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Un adaptador Bluetooth
  - Puedes usar el adaptador interno de tu equipo, en caso de que cuente con uno.
  - Si no tienes un adaptador Bluetooth, asegúrate de conseguir uno que sea compatible con Linux.
- Una unidad USB formateada como FAT32
  - Esta no puede ser la misma unidad USB que usarás para ejecutar Linux.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instrucciones

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - Si deseas recuperar tu consola de un brick, también deberás copiar la aplicación homebrew que deseas usar para repararla a la carpeta <code>/apps/</code>.
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Usa <code>boot.elf</code> en todos los casos).

2. Vuelve a insertar la memoria USB en la consola.
   - En la Wii mini, el puerto USB se encuentra en la parte trasera.
   - En la Wii original, deberás usar el puerto inferior (o el derecho, si tu consola está en posición vertical).

3. Enciende la consola.

4. Go to `Wii Settings`.

5. Anota la letra que aparece en la esquina superior derecha, junto a la versión del sistema.

   - Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

   ![](/images/wii/SystemMenuVersion.png)

6. Apaga la consola.

7. Inicia tu distribución Linux y asegúrate de que estás conectado a Internet.

8. Abre el Terminal

9. Ejecuta los siguientes comandos:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. A continuación, el asistente descargará los archivos necesarios y hará algunas preguntas sobre tu consola.
    - Si tu consola es una Wii mini, se te pedirá que indiques la región del sistema. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Si has seleccionado la Wii original, deberás indicar el número de la versión del sistema.

11. Enciende la consola.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Podría llevar varios intentos.

13. Después de unos segundos, la consola debería de iniciar el HackMii Installer.
    - Si no piensas utilizarla más adelante, ya puedes apagar tu distribución Linux.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Sin embargo, existen excepciones en circunstancias como la recuperación de bloqueos.

:::

::: info

Asegúrate de que la consola se encuentre cerca de tu PC al momento de ejecutar el exploit, preferiblemente a una distancia no mayor a un metro.

:::

### Requisitos

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Una unidad USB formateada como FAT32
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instrucciones

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - Si deseas recuperar tu consola de un brick, también deberás copiar la aplicación homebrew que deseas usar para repararla a la carpeta <code>/apps/</code>.
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Usa <code>boot.elf</code> en todos los casos).

2. Vuelve a insertar la memoria USB en la consola.
   - En la Wii mini, el puerto USB se encuentra en la parte trasera.
   - En la Wii original, deberás usar el puerto inferior (o el derecho, si tu consola está en posición vertical).

3. Enciende la consola.

4. Go to `Wii Settings`.

5. Anota la letra que aparece en la esquina superior derecha, junto a la versión del sistema.

   - Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

   ![](/images/wii/SystemMenuVersion.png)

6. Apaga la consola.

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
2. Enciende la consola.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Podría llevar varios intentos.
4. Después de unos segundos, la consola debería de iniciar el HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
