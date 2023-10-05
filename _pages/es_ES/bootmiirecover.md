---
title: "Restauración de BootMii"
---

{% include toc title="Índice" %}

Esta guía te proporcionará instrucciones sobre cómo restaurar una copia de seguridad de tu NAND con BootMii. Ten en cuenta que este suele ser un <strong>último recurso</strong> para reparar un bloqueo, y que si no se soluciona el problema, puede que tengas que buscar asistencia. Si todavía puedes acceder a BootMii, intenta entrar en el Canal Homebrew para intentar [identificar y reparar el bloqueo](bricks) utilizando otros métodos.

Si tienes BootMii instalado como boot2, tendrás que iniciar BootMii reiniciando la consola. Si es así, sáltate los pasos 1 y 2.
{: .notice--info}

Si la pantalla se queda en negro y la luz azul del lector de discos parpadea al iniciar BootMii, significa que faltan los archivos de BootMii en la tarjeta SD. Descarga [este archivo zip](https://static.hackmii.com/bootmii_sd_files.zip) y extráelo a la raíz de la tarjeta SD, luego inténtalo de nuevo.
{: .notice--warning}


Las consolas Wii Family Edition (sin puertos de GameCube) NO PUEDEN restaurar las copias de la NAND. Esto se debe a la falta de puertos de GameCube que son necesarios en las consolas Wii sin compatibilidad Boot2 para introducir el código de confirmación. Si necesitas más ayuda, busca asistencia.
{: .notice--danger}

NO restaures una copia de seguridad de la NAND sin verificar, o una que no sea de tu Wii: esto puede causar un BLOQUEO PEOR. Lo mismo se aplica si usas una tarjeta SD defectuosa.
{: .notice--danger}

### Requisitos

* Una copia de seguridad de la NAND anterior realizada por [BootMii](bootmii)

### Restauración de datos individuales a partir de una copia de seguridad de la NAND

Seguramente exista una forma mucho más segura y rápida de recuperar datos individuales de tu Wii, probablemente utilizando el emulador Dolphin.

Por ejemplo, si quieres restaurar los datos del tablón de Wii, utiliza Dolphin para importar la copia de seguridad de la NAND. En Dolphin, ve a `Archivo -> Abrir carpeta de usuario`, busca `Wii/title/00000001/00000002/data/cdb.vff`, cópialo a la tarjeta SD y usa [WiiXplorer](https://oscwii.org/library/app/wiixplorer) para restaurarla en la ubicación correspondiente.

Si quieres restaurar los datos de guardado de un juego, utiliza Dolphin para importar tu copia de seguridad de la NAND, utiliza `Herramientas > Exportar todos los datos de guardado de Wii` para exportar todos los datos de guardado a la tarjeta SD y utiliza Gestión de datos para moverlos a tu Wii.

### Notas preliminares importantes

+ Si no has hecho nada para provocar un bloqueo (o estás encendiendo la Wii después de mucho tiempo), probablemente se trate de un [bloqueo de Wi-Fi](bricks#wi-fi-brick).

+ Si tienes BootMii instalado como IOS, RestoreMii te pedirá el código Konami a través de un mando de GameCube.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Instrucciones

1. Inicia el Canal Homebrew.
1. Pulsa el botón HOME y selecciona "Abrir BootMii".
1. Selecciona el botón de opciones (el icono con los engranajes).

    ![BootMii_Gears_Icon](/images/BootMii/BootMii_Gears_Icon.png)

1. Select the RestoreMii button.

    ![BootMii_Red_Arrow](/images/BootMii/BootMii_Red_Arrow.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START
1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
