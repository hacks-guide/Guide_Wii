---
title: "Crear respaldo de NAND con BootMii"
---

{% include toc title="Tabla de contenido" %}

Una de las funciones más importantes de BootMii es la capacidad de copiar y restaurar los contenidos de la memoria interna (NAND) de tu consola. Esta página te guiará para hacer una copia de seguridad de la NAND de tu Wii a una tarjeta SD, que luego podrás usar de cualquier manera.

Las consolas Wii Family Edition (sin puertos de GameCube) NO PUEDEN restaurar las copias de la NAND. Esto se debe a la falta de puertos de GameCube que son necesarios en las consolas Wii sin compatibilidad Boot2 para introducir el código de confirmación. En cualquier caso, sigue siendo recomendable hacer una en estas consolas.
{: .notice--danger}

Necesitarás una **tarjeta SD** para crear un respaldo de la NAND usando BootMii. Puedes saltar esta guía en caso de que no cuentes con una, aunque es muy recomendable seguir este proceso antes de continuar modificando tu consola.
{: .notice--warning}

BootMii no es compatible con el Wii Remote. Para controlar la interfaz, deberás usar los botones POWER y RESET de la consola, o un control de GameCube conectado en el puerto del jugador 1. Para navegar entre las opciones, oprime POWER en tu Wii, o lzquierda/derecha en el botón cruz de un control de GameCube. Para elegir una opción, pulsa RESET en la Wii, o el botón A en el control de GameCube. Necesitarás usar un mando de GameCube para restaurar una copia de seguridad de NAND en el futuro si BootMii está instalado como IOS.
{: .notice--info}

Si la opción `Lanzar BootMii` no aparece, por favor [vuelve a iniciar el HackMii Installer](hackmii) e instala BootMii.
{: .notice--warning}

Si después de seguir los pasos anteriores, la pantalla se queda en negro y la luz de la ranura para discos comienza a parpadear, significa que faltan los archivos de BootMii que van en la tarjeta SD, o están dañados. Para solucionar este problema, descarga [este archivo ZIP](https://static.hackmii.com/bootmii_sd_files.zip), extrae su contenido a la raíz de la tarjeta SD, y luego vuelve a intentarlo.
{: .notice--warning}

### Requisitos

* Una tarjeta SD con al menos 512 MB de espacio libre

### Instrucciones

Si has instalado BootMii como boot2, apaga y vuelve a encender la consola para iniciarlo, y luego salta al paso 3. Si es así, sáltate los pasos 1 y 2.
{: .notice--info}

1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Presiona el botón HOME y selecciona `Lanzar BootMii`.

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. Selecciona el botón de opciones (el que tiene dos engranajes).

    ![](/images/bootmii/BootMii_Gears.png)

1. Selecciona el primer botón de la izquierda.

    ![](/images/bootmii/BootMii_Backup.png)

1. A continuación se empezará a crear el respaldo de la NAND. Puedes ver el progreso en pantalla.
    + Los "Bad Blocks" son normales, y en su mayoría vienen de fábrica debido al binning de la NAND. No te preocupes si ves algo en una copia de seguridad de la NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. Lo ideal sería que todos los bloques aparezcan en verde tras finalizar la verificación.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Para salir de BootMii, oprime el botón con la flecha negra, y después elige el que tiene el icono del menú de Wii o el Canal Homebrew para salir a donde desees.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Nota: **restaurar una copia de seguridad de la NAND suele ser una solución extrema**. Normalmente hay mejores formas de desbloquear la consola.
Puedes intentar [identificar la causa del brick](bricks) y revertir la acción que lo haya provocado.
Para restaurar un respaldo de la NAND desde la tarjeta SD, puedes seguir [esta guía](bootmiirecover).
</div>

As stated earlier, if you have BootMii installed as boot2, it will launch every time you start your console. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

Se habrán creado dos archivos en la raíz de la tarjeta SD: `nand.bin` y `keys.bin`. `nand.bin` es la memoria interna de tu Wii, mientras que `keys.bin` son las claves de la consola.
{: .notice--info}

Se recomienda instalar BootMii como boot2 en caso de estar disponible para tu consola. De no ser así, solo podrás instalarlo como un IOS.
{: .notice--info}
