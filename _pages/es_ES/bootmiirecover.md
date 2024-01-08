---
title: "BootMii Recovery (RestoreMii)"
---

{% include toc title="Tabla de contenido" %}

Esta guía te proporcionará instrucciones sobre cómo restaurar una copia de seguridad de tu NAND con BootMii. Ten en cuenta que este suele ser un <strong>último recurso</strong> para reparar un bloqueo, y que si no se soluciona el problema, puede que tengas que buscar asistencia. Si todavía puedes acceder a BootMii, intenta entrar en el Canal Homebrew para intentar [identificar y reparar el bloqueo](bricks) utilizando otros métodos.

Si has instalado BootMii como boot2, apaga y vuelve a encender la consola para iniciarlo, y luego salta al paso 3. 3.
{: .notice--info}

Si después de seguir los pasos anteriores, la pantalla se queda en negro y la luz de la ranura para discos comienza a parpadear, significa que faltan los archivos de BootMii que van en la tarjeta SD, o están dañados. Descarga [este archivo zip](https://static.hackmii.com/bootmii_sd_files.zip) y extráelo a la raíz de la tarjeta SD, luego inténtalo de nuevo.
{: .notice--warning}

Family edition Wiis do not have ports for GameCube controllers. Esto se debe a la falta de puertos de GameCube que son necesarios en las consolas Wii sin compatibilidad Boot2 para introducir el código de confirmación. Si necesitas más ayuda, busca asistencia.
{: .notice--danger}

Restoring an unverified NAND backup may lead to a WORSE BRICK. The same also goes for faulty SD cards.
{: .notice--danger}

### Requisitos

* An earlier NAND Backup made by [BootMii](https://wii.guide/bootmii)

### Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

Por ejemplo, si quieres restaurar los datos del tablón de Wii, utiliza Dolphin para importar la copia de seguridad de la NAND. En Dolphin, ve a `Archivo -> Abrir carpeta de usuario`, busca `Wii/title/00000001/00000002/data/cdb.vff`, cópialo a la tarjeta SD y usa [WiiXplorer](https://oscwii.org/library/app/wiixplorer) para restaurarla en la ubicación correspondiente.

Si quieres restaurar los datos de guardado de un juego, utiliza Dolphin para importar tu copia de seguridad de la NAND, utiliza `Herramientas > Exportar todos los datos de guardado de Wii` para exportar todos los datos de guardado a la tarjeta SD y utiliza Gestión de datos para moverlos a tu Wii.

### Important notes

+ Si no has hecho nada para provocar un bloqueo (o estás encendiendo la Wii después de mucho tiempo), probablemente se trate de un [bloqueo de Wi-Fi](bricks#wi-fi-brick).

+ If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. Para navegar con un mando de GameCube, pulsa izquierda/derecha en la cruz de control de un mando de GameCube. Para seleccionar, pulsa A.

### Instrucciones

1. Inicia el Canal Homebrew.
1. Presiona el botón HOME y selecciona `Lanzar BootMii`.
    + If you are even able to enter BootMii, enter the Homebrew Channel instead, and try your best to [identify what caused the brick](bricks) and reverse it.

    ![](/images/bootmii/BootMii_HBC.png)

1. Selecciona el botón de opciones (el que tiene dos engranajes).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. Una vez finalizada la recuperación, deberías ver un texto que diga `I HAZ SUCCESS!`, o de lo contrario, `I HAZ FAIL`. Pulsa cualquier botón de la consola Wii o del mando de GameCube.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Para salir de BootMii, oprime el botón con la flecha negra, y después elige el que tiene el icono del menú de Wii o el Canal Homebrew para salir a donde desees.

    ![](/images/bootmii/BootMii_Return.png)

Si has restaurado una copia de seguridad de la NAND para reparar un bloqueo y esto no ha solucionado el problema, consulta [la sección de bloqueos](bricks) de la guía.
{: .notice--info}

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
