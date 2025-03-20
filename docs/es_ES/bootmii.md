# Crear respaldo de NAND con BootMii

Una de las funciones más importantes de BootMii es la capacidad de copiar y restaurar los contenidos de la memoria interna (NAND) de tu consola.
Esta página te guiará para hacer una copia de seguridad de la NAND de tu Wii a una tarjeta SD, que luego podrás usar de cualquier manera.

::: warning

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Puedes saltar esta guía en caso de que no cuentes con una, aunque es muy recomendable seguir este proceso antes de continuar modificando tu consola.

:::

## Requirements

- Una tarjeta SD con al menos 512 MB de espacio libre

## Instructions

::: info

Si has instalado BootMii como boot2, apaga y vuelve a encender la consola para iniciarlo, y luego salta al paso 3. 3.

:::

1. Power on your console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Presiona el botón HOME y selecciona <code>Lanzar BootMii</code>.

    ![](/images/bootmii/BootMii_HBC.png)

    ::: warning

    If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

    :::

    ::: warning

    Si después de seguir los pasos anteriores, la pantalla se queda en negro y la luz de la ranura para discos comienza a parpadear, significa que faltan los archivos de BootMii que van en la tarjeta SD, o están dañados. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

    :::

4. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    ::: info

    BootMii no es compatible con el Wii Remote.
    Para controlar la interfaz, deberás usar los botones POWER y RESET de la consola, o un control de GameCube conectado en el puerto del jugador 1.
    To navigate between options, press POWER. Para seleccionar una opción, presiona el botón RESET.

    :::

5. Selecciona el botón de opciones (el que tiene dos engranajes).

    ![](/images/bootmii/BootMii_Gears.png)

6. Selecciona el primer botón de la izquierda.

    ![](/images/bootmii/BootMii_Backup.png)

7. A continuación se empezará a crear el respaldo de la NAND. Puedes ver el progreso en pantalla.

    - Los "Bad Blocks" son normales, y en su mayoría vienen de fábrica debido al binning de la NAND. No te preocupes si ves algo en una copia de seguridad de la NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After the previous step completes, BootMii will verify the backup. Lo ideal sería que todos los bloques aparezcan en verde tras finalizar la verificación.

    - If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long as all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Para salir de BootMii, oprime el botón con la flecha negra, y después elige el que tiene el icono del menú de Wii o el Canal Homebrew para salir a donde desees.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Note: **restoring a NAND backup is usually a last resort**. There are often better ways to unbrick your console.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Save the file and exit.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. De no ser así, solo podrás instalarlo como un IOS.

:::
