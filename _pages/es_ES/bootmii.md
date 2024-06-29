---
title: "Crear respaldo de NAND con BootMii"
---

{% include toc title="Tabla de contenido" %}

Una de las funciones más importantes de BootMii es la capacidad de copiar y restaurar los contenidos de la memoria interna (NAND) de tu consola. Esta página te guiará para hacer una copia de seguridad de la NAND de tu Wii a una tarjeta SD, que luego podrás usar de cualquier manera.

Necesitarás una **tarjeta SD** para crear un respaldo de la NAND usando BootMii. Puedes saltar esta guía en caso de que no cuentes con una, aunque es muy recomendable seguir este proceso antes de continuar modificando tu consola.
{: .notice--warning}

### Requisitos

* Una tarjeta SD con al menos 512 MB de espacio libre

### Instrucciones

Si has instalado BootMii como boot2, apaga y vuelve a encender la consola para iniciarlo, y luego salta al paso 3. Si es así, sáltate los pasos 1 y 2.
{: .notice--info}

1. Enciende la consola.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Presiona el botón HOME y selecciona `Lanzar BootMii`.

    ![](/images/bootmii/BootMii_HBC.png)

    Si la opción `Lanzar BootMii` no aparece, por favor [vuelve a iniciar el HackMii Installer](hackmii) e instala BootMii.
    {: .notice--warning}

    Si después de seguir los pasos anteriores, la pantalla se queda en negro y la luz de la ranura para discos comienza a parpadear, significa que faltan los archivos de BootMii que van en la tarjeta SD, o están dañados. Para solucionar este problema, descarga [este archivo ZIP](https://static.hackmii.com/bootmii_sd_files.zip), extrae su contenido a la raíz de la tarjeta SD, y luego vuelve a intentarlo.
    {: .notice--warning}

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    BootMii no es compatible con el Wii Remote. Para controlar la interfaz, deberás usar los botones POWER y RESET de la consola, o un control de GameCube conectado en el puerto del jugador 1. To navigate between options, press POWER. Para seleccionar una opción, presiona el botón RESET.
    {: .notice--info}

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
Nota: **restaurar una copia de seguridad de la NAND suele ser una solución extrema**. There are often better ways to unbrick your console.
Puedes intentar [identificar la causa del brick](bricks) y revertir la acción que lo haya provocado.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

Se habrán creado dos archivos en la raíz de la tarjeta SD: `nand.bin` y `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

### Autobooting

If you were able to install BootMii as boot2, but dont want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.
{: .notice--info}

### Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or developement release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open dolphin emulator
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select open.

Se recomienda instalar BootMii como boot2 en caso de estar disponible para tu consola. De no ser así, solo podrás instalarlo como un IOS.
{: .notice--info}
