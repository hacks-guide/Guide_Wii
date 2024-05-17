---
title: "Crear accesos directos para juegos de Wii"
---

{% include toc title="Tabla de contenido" %}

En esta guía aprenderás a crear accesos directos para juegos de Wii almacenados en una unidad USB, usando el programa WiiGSC (anteriormente conocido como Crap). Esto es de utilidad si usas un USB loader y deseas ahorrar tiempo al momento de cargar tus juegos. Then try WiiGSC (Wii Game Shortcut Creator), previously known as Crap.

En caso de un brick, es fundamental tener instalado [Priiloader](/priiloader) para poder repararlo. También es recomendable instalar BootMii (si es posible, como boot2). Si cuentas con dichos requisitos y sigues los pasos de forma correcta, tu consola estará a salvo de un brick. ¡NO CONTINÚES SI NO TIENES PRIILOADER Y BOOTMII INSTALADOS!
{: .notice--warning}

NO intentes crear un atajo para los juegos Mario Party 9, o A Boy and His Blob. Si instalas alguno de estos atajos, tu consola sufrirá un brick.
{: .notice--warning}

### Requisitos

* Una Wii
* Una unidad USB
* [Instalar WADs con YAWM ModMii Edition](yawmme)
* Una PC con Windows
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Instrucciones

1. Descarga WiiGSC desde el enlace de arriba y extrae el archivo, luego ejecuta el instalador. Una vez que el programa se haya instalado, haz clic derecho sobre su icono en el escritorio y selecciona **Ejecutar como administrador**. Si no haces esto, WiiGSC dará un error cuando se inicie.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Haz clic en el botón `...` que está a la derecha de `ISO/WBFS File` y selecciona el archivo ISO o WBFS ubicado en tu unidad USB. Después haz clic en el botón a la derecha de `Loader` y elige el USB loader que utilizas. The other options should be fine the way they are.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Instala los WADs recién creados usando tu gestor de WADs.

<div class="notice--info">
Si tras instalar el WAD y volver al menú de Wii aparece el mensaje <code>Los archivos del sistema están dañados</code>, no tienes nada de que preocuparte, siempre y cuando hayas instalado Priiloader, o BootMii como boot2.

Para solucionar esto, apaga la consola, luego oprime el botón POWER mientras mantienes pulsado RESET. Debería aparecer el menú principal de Priiloader. <br>
Simplemente ingresa al Canal Homebrew y utiliza un gestor de WADs para desinstalar el atajo causante del brick.
</div>

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
