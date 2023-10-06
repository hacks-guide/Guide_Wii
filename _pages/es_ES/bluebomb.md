---
title: "BlueBomb"
---

{% include toc title="Índice" %}

Se desaconseja **rotundamente** utilizar guías de vídeo para hackear la consola Wii mini, ya que existe una gran probabilidad de **bloquearla**.
{: .notice--warning}

Si necesitas ayuda con cualquier cosa relacionada con este tutorial, únete [al servidor de Discord de hacks de Wii mini](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

BlueBomb es un exploit que aprovecha un fallo en las bibliotecas de Bluetooth de la Wii y la Wii mini. Aunque es el único exploit que funciona para la Wii mini, BlueBomb también puede utilizarse en la Wii original. Este exploit también permite recuperarse de ciertos bloqueos, como Korean Kii/Error 003.

Si estás usando la edición original de la Wii, probablemente te convenga buscar [otro exploit](get-started), ya que hay formas mucho más sencillas de acceder al instalador de HackMii. Sin embargo, existen excepciones en circunstancias como la recuperación de bloqueos.
{: .notice--info}

Asegúrate de que la consola está cerca del ordenador que ejecutará el exploit, lo ideal es que esté a menos de 1 metro.
{: .notice--info}

### Requisitos

* Un equipo con Linux
    * Una máquina virtual podría funcionar, pero no se recomienda debido a lo complejo que resulta conseguir que funcione el paso de Bluetooth. Si es posible, utiliza un LiveUSB como se describe a continuación.
    * Si tienes una Raspberry Pi, puedes usarla en su lugar, puesto que lo más probable es que ya tenga Linux instalado.
    * Ni Windows Subsystem for Linux ni un Chromebook ejecutando Linux funcionarán, ya que no tienen acceso directo al adaptador Bluetooth ni a los puertos USB.
    * Si no tienes Linux, [Ubuntu](https://ubuntu.com/download/desktop) es la opción más cómoda y puede ejecutarse en ordenadores que utilicen Windows o Mac.
        * Los dispositivos de 32 bits necesitarán [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Para los dispositivos de 64 bits se recomienda utilizar la edición LTS debido a su estabilidad, pero la última versión también sirve.
    * Puedes [flashear un entorno Linux Live en una memoria USB](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) en lugar de instalarlo en tu ordenador.
* Un adaptador de Bluetooth.
    * Un adaptador Bluetooth interno también sirve.
    * Si no tienes uno, asegúrate de adquirir uno compatible con Linux.
* Una memoria USB formateada como FAT32.
    * No puede ser la misma memoria que la que utiliza el equipo Linux.
* [Instalador de HackMii v1.2](https://bootmii.org/download/)

### Instrucciones

1. Copia el archivo `boot.elf` de `hackmii_installer_v1.2.zip` a la raíz de tu memoria USB.
    + (Si tratas de arreglar un bloqueo, también deberías copiar la aplicación homebrew que quieres usar en /apps/)
    + (Incluso en una Wii mini, bootmini.elf **no** funcionará, su propósito es totalmente diferente y no tiene que ver. Utiliza boot.elf en todos los casos).
1. Vuelve a insertar la memoria USB en la consola.
    + En la Wii mini, el puerto USB está en la parte de atrás.
    + En una Wii normal, usa el puerto de abajo (o el de la derecha si está en posición vertical).
1. Enciende la consola.
1. Ve a la `Configuración de Wii`.
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

1. A continuación, el asistente descargará los archivos necesarios y te pedirá información sobre la consola.
    + Si has seleccionado una Wii mini, se te pedirá que indiques la región. Si has seleccionado una Wii mini, se te pedirá que indiques tu región. Puedes saberla por la última letra de la versión del menú Wii (`U` para **América** y `E` para los modelos **PAL**).
    + Si has seleccionado una Wii, se te pedirá que indiques la versión del menú de Wii (la que has especificado en el paso 4)
1. Enciende la consola.
    + **No** conectes ningún mando de Wii.
1. Pulsa el botón Sync repetidamente hasta que el terminal muestre `got connection handle`.
    + Podría llevar varios intentos.
1. Si el exploit ha tenido éxito, tu dispositivo habrá ejecutado el instalador de HackMii.
    + Si no piensas utilizarla más adelante, ya puedes apagar tu distribución Linux.

Si estás usando una Wii: [Continúa con la instalación del Canal Homebrew y BootMii](hbc)<br>
{: .notice--info}

Si estás usando una Wii mini: [Continúa con la instalación del Canal Homebrew](hbc-mini)
{: .notice--info}