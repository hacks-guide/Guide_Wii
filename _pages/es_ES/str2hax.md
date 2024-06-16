---
title: "Wiimmfi"
---

{% include toc title="Tabla de contenido" %}

Ten en cuenta que si tu ISP (proveedor de servicios de internet) o entorno de red evitan el uso de DNS alternativos, str2hax no funcionará y deberás [elegir otro exploit](get-started).
{: .notice--warning}

str2hax es un exploit para la Wii que se activa mediante el Contrato de Uso de los Servicios de Red de Wii. Lo único que se requiere es una conexión a internet que te permita cambiar el servidor DNS en los ajustes de la consola.

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.
{: .notice--warning}

### Requisitos

* Una Wii con conexión a internet

### Instrucciones

#### Section I - Connecting

Este exploit requiere que cambies tu configuración de DNS para poder conectarte al servidor que contiene el exploit.

1. Enciende la consola.
1. Dirígete a `Opciones de Wii` en el menú de Wii.

    ![](/images/riiconnect24/Internet_1.png)

1. Selecciona `Configuración de Wii`.

    ![](/images/riiconnect24/Internet_2.png)

1. En la sección `Internet`, elige `Documentos legales/Contacto` y después `Sí`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Selecciona `Ajustes de conexión`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Pasa hasta la cuarta página, donde está la opción `Obtener DNS automáticamente` (no es en Obtener drección IP automáticamente), elige `No` y después selecciona `Configuración avanzada`.

    ![](/images/riiconnect24/Internet_7.png)

1. Ingresa `18.188.135.9` en `DNS primario`.

    ![](/images/exploits/str2hax/dns.png)

    Si hay tres campos de texto en lugar de dos, regresa al menú anterior y dirígete a la pestaña `Obtener DNS automáticamente`.
    {: .notice--warning}

1. Selecciona `Confirmar` y después `Guardar`.

    ![](/images/riiconnect24/Internet_10.png)

1. Elige `Aceptar` para realizar una prueba de conexión.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + Si la prueba de conexión ha sido exitosa, selecciona `No` para saltar la actualización de la consola Wii.
    + Si recibes el error `521xx`, verifica que hayas ingresado correctamente el DNS.
    + En caso de que siga apareciendo el error, por favor [elige otro exploit](get-started).

#### Sección II - Activando el exploit

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.
1. Selecciona `Modificar`.
1. Pasa a la segunda página y después elige `Internet`.
    + A continuación debería aparecer esto en pantalla:

    ![](/images/exploits/str2hax/EULA.png)

    + Si en lugar de la página del exploit se muestra el Contrato de Uso de los Servicios de Red de Wii, es probable que tu ISP no permita usar DNS alternativos. Try another connection, or [use another exploit](get-started).

1. Espera de uno a dos minutos mientras el exploit se descarga. Por favor no elijas `ACEPTO` o `NO ACEPTO`.
1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.

    ![](/images/hackmii/scam.png)

    + En caso de que hayas instalado alguna modificación, como CTGP Revolution o Project+, str2hax podría intentar cargar eso en lugar de HackMii Installer. Si esto sucede, reinicia tu Wii y expulsa la tarjeta SD, luego ejecuta el exploit nuevamente.

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}
