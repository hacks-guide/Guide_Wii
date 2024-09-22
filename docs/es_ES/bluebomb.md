---
title: "Créditos"
---

{% include toc title="Tabla de contenido" %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Te recomendamos **encarecidamente** no utilizar **ningún** video tutorial para modificar tu consola Wii mini, pues existe un gran riesgo de que esta quede **brickeada**.
{: .notice--warning}

Si tienes problemas para seguir los pasos de esta guía, por favor solicita ayuda en el [servidor de Discord](https://discord.gg/6ryxnkS) de Wii mini Hacking. Soporte disponible solo en inglés.
{: .notice--info}

Si estás usando la edición original de la Wii, probablemente te convenga buscar [otro exploit](get-started), ya que hay formas mucho más sencillas de acceder al instalador de HackMii. Sin embargo, existen excepciones en circunstancias como la recuperación de bloqueos.
{: .notice--info}

Asegúrate de que la consola se encuentre cerca de tu PC al momento de ejecutar el exploit, preferiblemente a una distancia no mayor a un metro.
{: .notice--info}

### Requisitos
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* Una unidad USB formateada como FAT32
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Instrucciones

1. Extrae el archivo `boot.elf` a la raíz de tu unidad USB.
    + Si deseas recuperar tu consola de un brick, también deberás copiar la aplicación homebrew que deseas usar para repararla a la carpeta `/apps/`.
    + - (Por favor **no copies** el archivo `bootmini.elf`, aún si estás usando una Wii mini. Su propósito es completamente diferente y no está relacionado con esta guía. Usa `boot.elf` en todos los casos).
1. Vuelve a insertar la memoria USB en la consola.
    + En la Wii mini, el puerto USB se encuentra en la parte trasera.
    + En la Wii original, deberás usar el puerto inferior (o el derecho, si tu consola está en posición vertical).
1. Enciende la consola.
1. Enciende la consola y ve a `Opciones de Wii` > `Configuración de Wii`.
1. Anota la letra que aparece en la esquina superior derecha, junto a la versión del sistema.
    + Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Apaga la consola.

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
1. Enciende la consola.
    + **No** conectes ningún mando de Wii.
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + Podría llevar varios intentos.
1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.

Si estás usando una Wii original, haz clic aquí para avanzar a la instalación del Canal Homebrew y BootMii.<br>
{: .notice--info}

Si tu consola es una Wii mini, haz clic aquí para pasar a la instalación del Canal Homebrew.
{: .notice--info}

## BlueBomb Classic

Aunque es el único exploit que funciona en la Wii mini, BlueBomb también se puede ejecutar en la Wii original. {% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Te recomendamos **encarecidamente** no utilizar **ningún** video tutorial para modificar tu consola Wii mini, pues existe un gran riesgo de que esta quede **brickeada**.
{: .notice--warning}

Si tienes problemas para seguir los pasos de esta guía, por favor solicita ayuda en el [servidor de Discord](https://discord.gg/6ryxnkS) de Wii mini Hacking. Soporte disponible solo en inglés.
{: .notice--info}

Si estás usando la edición original de la Wii, probablemente te convenga buscar [otro exploit](get-started), ya que hay formas mucho más sencillas de acceder al instalador de HackMii. Sin embargo, existen excepciones en circunstancias como la recuperación de bloqueos.
{: .notice--info}

Asegúrate de que la consola se encuentre cerca de tu PC al momento de ejecutar el exploit, preferiblemente a una distancia no mayor a un metro.
{: .notice--info}

### Requisitos

* Una PC con Linux
    * Una máquina virtual podría funcionar, pero no es recomendable debido a la dificultad para configurar la conexión Bluetooth. De ser posible, utiliza una Live USB como se describe más adelante.
    * Si tienes una Raspberry Pi, prueba a usarla, pues es probable que ya tenga Linux instalado.
    * El Subsistema de Windows para Linux o una Chromebook ejecutando el modo Linux *no funcionarán*, debido a que no tienen acceso directo al adaptador Bluetooth ni a los puertos USB del equipo.
    * Si no tienes Linux, [Ubuntu](https://ubuntu.com/download/desktop) es la opción más fácil de usar y se puede ejecutar en equipos que tengan Windows o macOS.
        * Si tu equipo es de 32 bits, deberás descargar [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Para los equipos de 64 bits se recomienda usar la edición LTS por su estabilidad, aunque la última versión también funcionará.
    * Puedes [crear una Live USB de Linux](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) y así ejecutarlo sin necesidad de instalar nada en tu equipo.
* Un adaptador Bluetooth
    * Puedes usar el adaptador interno de tu equipo, en caso de que cuente con uno.
    * Si no tienes un adaptador Bluetooth, asegúrate de conseguir uno que sea compatible con Linux.
* Una unidad USB formateada como FAT32
    * Esta no puede ser la misma unidad USB que usarás para ejecutar Linux.
* [No es recomendable utilizar BlueBomb en la Wii original para instalar el Canal Homebrew y BootMii, pues existen otros exploits más fáciles de ejecutar.](https://bootmii.org/download/)

### Instrucciones

1. Extrae el archivo `boot.elf` a la raíz de tu unidad USB.
    + Si deseas recuperar tu consola de un brick, también deberás copiar la aplicación homebrew que deseas usar para repararla a la carpeta `/apps/`.
    + - (Por favor **no copies** el archivo `bootmini.elf`, aún si estás usando una Wii mini. Su propósito es completamente diferente y no está relacionado con esta guía. Usa `boot.elf` en todos los casos).
1. Vuelve a insertar la memoria USB en la consola.
    + En la Wii mini, el puerto USB se encuentra en la parte trasera.
    + En la Wii original, deberás usar el puerto inferior (o el derecho, si tu consola está en posición vertical).
1. Enciende la consola.
1. Enciende la consola y ve a `Opciones de Wii` > `Configuración de Wii`.
1. Anota la letra que aparece en la esquina superior derecha, junto a la versión del sistema.
    + Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Apaga la consola.
1. Inicia tu distribución Linux y asegúrate de que estás conectado a Internet.
1. Abre el Terminal
1. Ejecuta los siguientes comandos:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. A continuación, el asistente descargará los archivos necesarios y hará algunas preguntas sobre tu consola.
    + Si tu consola es una Wii mini, se te pedirá que indiques la región del sistema. Esta se determina mediante la letra al final de la versión del sistema: `U` para **USA** (América) y `E` para **PAL** (Europa).
    + Si has seleccionado la Wii original, deberás indicar el número de la versión del sistema.
1. Enciende la consola.
    + **No** conectes ningún mando de Wii.
1. Presiona el botón SYNC de la consola repetidamente hasta que la Terminal muestre el mensaje `got connection handle`.
    + Podría llevar varios intentos.
1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.
    + Si no piensas utilizarla más adelante, ya puedes apagar tu distribución Linux.

Si estás usando una Wii original, haz clic aquí para avanzar a la instalación del Canal Homebrew y BootMii.<br>
{: .notice--info}

Si tu consola es una Wii mini, haz clic aquí para pasar a la instalación del Canal Homebrew.
{: .notice--info}
