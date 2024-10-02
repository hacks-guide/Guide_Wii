# BootMii Recovery (RestoreMii)

Esta guía te proporcionará instrucciones sobre cómo restaurar una copia de seguridad de tu NAND con BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

Si has instalado BootMii como boot2, apaga y vuelve a encender la consola para iniciarlo, y luego salta al paso 3. 3.

:::

::: warning

Si después de seguir los pasos anteriores, la pantalla se queda en negro y la luz de la ranura para discos comienza a parpadear, significa que faltan los archivos de BootMii que van en la tarjeta SD, o están dañados. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

Family edition Wiis do not have ports for GameCube controllers. Esto se debe a la falta de puertos de GameCube que son necesarios en las consolas Wii sin compatibilidad Boot2 para introducir el código de confirmación. Si necesitas más ayuda, busca asistencia.

:::

::: danger

Restoring an unverified NAND backup may lead to a WORSE BRICK. The same also goes for faulty SD cards.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Want to restore individual data from your NAND backup?

There is likely a much safer and faster way to bring it back to your Wii, likely involving the use of Dolphin Emulator.

Por ejemplo, si quieres restaurar los datos del tablón de Wii, utiliza Dolphin para importar la copia de seguridad de la NAND. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Important notes

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you do not have BootMii as boot2, RestoreMii will prompt you for the Konami code via a GameCube Controller.

- You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1. Para navegar con un mando de GameCube, pulsa izquierda/derecha en la cruz de control de un mando de GameCube. Para seleccionar, pulsa A.

## Instructions

1. Launch the Homebrew Channel, and launch the Load Priiloader app.

2. Presiona el botón HOME y selecciona <code>Lanzar BootMii</code>.

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Selecciona el botón de opciones (el que tiene dos engranajes).

   ![](/images/bootmii/BootMii_Gears.png)

4. Select the RestoreMii button.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. On your GameCube controller, input the Konami code: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Pulsa cualquier botón de la consola Wii o del mando de GameCube.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Para salir de BootMii, oprime el botón con la flecha negra, y después elige el que tiene el icono del menú de Wii o el Canal Homebrew para salir a donde desees.

   ![](/images/bootmii/BootMii_Return.png)

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
