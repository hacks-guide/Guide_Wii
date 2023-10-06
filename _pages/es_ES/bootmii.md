---
title: "Copia de seguridad de BootMii"
---

{% include toc title="Índice" %}

BootMii te permite copiar y restaurar la memoria NAND de tu Wii. Esta página te guiará para hacer una copia de seguridad de la NAND de tu Wii a una tarjeta SD, que luego podrás usar de cualquier manera.

Las consolas Wii Family Edition (sin puertos de GameCube) NO PUEDEN restaurar las copias de la NAND. Esto se debe a la falta de puertos de GameCube que son necesarios en las consolas Wii sin compatibilidad Boot2 para introducir el código de confirmación. En cualquier caso, sigue siendo recomendable hacer una en estas consolas.
{: .notice--danger}

Necesitas una **tarjeta SD** para usar BootMii, pero sobre todo para crear una copia de seguridad de la NAND. Si no tienes una tarjeta SD a mano en este momento, puedes saltarte esta página, pero es ALTAMENTE RECOMENDABLE que vuelvas a ella más tarde para hacer una copia de seguridad de tu NAND.
{: .notice--warning}

No es posible navegar por BootMii con un mando de Wii. Deberás utilizar los botones POWER y RESET de tu consola, o un mando de GameCube conectado al puerto 1. Para navegar entre las opciones, pulsa POWER en la Wii (o izquierda/derecha en la cruz de control de un mando de GameCube). Para seleccionar una opción, pulsa RESET en la Wii o A en el mando de GameCube. Necesitarás usar un mando de GameCube para restaurar una copia de seguridad de NAND en el futuro si BootMii está instalado como IOS.
{: .notice--info}

Si el botón `Abrir BootMii` no aparece en el Canal Homebrew, [vuelve a ejecutar el instalador de HackMii](hackmii) e instala BootMii.
{: .notice--warning}

Si la pantalla se queda en negro y la luz azul del lector de discos parpadea al iniciar BootMii, significa que faltan los archivos de BootMii en la tarjeta SD. Descarga [este archivo zip](https://static.hackmii.com/bootmii_sd_files.zip) y extráelo a la raíz de la tarjeta SD, luego inténtalo de nuevo.
{: .notice--warning}

### Requisitos

* Una tarjeta SD con un mínimo de 512 MB de espacio libre (se recomienda 1 GB o más)

### Instrucciones

Si tienes BootMii instalado como boot2, tendrás que iniciar BootMii reiniciando la consola. Si es así, sáltate los pasos 1 y 2.
{: .notice--info}

1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Pulsa el botón HOME y selecciona "Abrir BootMii".

    ![](/images/bootmii/BootMii_Main.png)

1. Selecciona el botón de opciones (el icono con los engranajes).

    ![](/images/bootmii/BootMii_Gears_Icon.png)

1. Selecciona el primer botón de la izquierda.
    + Se iniciará una copia de seguridad de la NAND. Puedes ver el progreso en la pantalla.
    + Los "Bad Blocks" son normales, y en su mayoría vienen de fábrica debido al binning de la NAND. No te preocupes si ves algo en una copia de seguridad de la NAND.
    + Después de este paso, se verificará la copia de seguridad. Lo ideal es que todos los bloques queden en verde tras el proceso de verificación.

    ![](/images/bootmii/BootMii_Green_Arrow.png)

1. Una vez finalizado el proceso, sal de la pantalla de copia de seguridad de la NAND pulsando cualquier botón.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Pulsa el botón de atrás (el de la flecha) y, a continuación, pulsa el botón Menú Wii o el botón Canal Homebrew para salir de BootMii.

    ![](/images/bootmii/BootMii_Return_Arrow.png)

<div id="restore-notice" class="notice" markdown="1">
Nota: **restaurar una copia de seguridad de la NAND suele ser una solución extrema**. Normalmente hay mejores formas de desbloquear la consola.
Intenta [identificar la condición de tu bloqueo](bricks) e invierte la acción que lo ha causado.
Para restaurar desde una copia de seguridad de la NAND que tengas en tu tarjeta SD, puedes seguir las instrucciones de [RestoreMii](bootmiirecover) (solo Wii original).
</div>

Se habrán creado dos archivos en la raíz de la tarjeta SD: `nand.bin` y `keys.bin`. `nand.bin` es la memoria interna de tu Wii, mientras que `keys.bin` son las claves de la consola.
{: .notice--info}

[Continúa con la instalación de Priiloader](priiloader)<br> Priiloader añade un nivel secundario de protección contra bloqueos, y es muy recomendable aunque BootMii esté instalado como boot2. Es especialmente importante para los usuarios con BootMii como IOS.
{: .notice--info}