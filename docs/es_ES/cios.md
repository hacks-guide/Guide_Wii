---
outline: false
---

# rtc

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details Detalles técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Ahora puedes usar aplicaciones homebrew como <a href="usbloadergx">USB Loader GX</a> y <a href="wiiflow">WiiFlow</a>. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- A Wii with the Homebrew Channel installed
- Una tarjeta SD o unidad USB
- The [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

::: warning

Si vas a usar una tarjeta SD, asegúrate de que no esté protegida contra escritura, pues de lo contrario no podrás elegir las opciones correctas en el instalador.

:::

## Instructions

### Sección I - Descarga

::: warning

Your browser or antivirus software may flag NUSGet as malware - this is a false positive. NUSGet does NOT contain any malware.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. Power off your console, and insert your SD card or USB drive into your computer.
2. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
3. Unzip the archive and run the NUSGet executable.
4. Navigate to `IOS` > `IOS 38` > `World` and select `v4123`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-4123.png)
5. Repeat the above step for `IOS 56 (v5661)`, `IOS 57 (v5918)` and `IOS 58 (v6175)`.
6. When you have finished downloading the above IOS, navigate to the folder where your NUSGet executable is stored. This should now contain four different folders with the title IDs for the above IOS.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)
7. Enter the four directories, locating a `IOS-XX-vXXXX-Wii.wad` file in each.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)
8. Archivos WAD para instalar cIOS sin conexión
   - Este deber ser el mismo dispositivo donde vayas a copiar la aplicación d2x cIOS Installer.
9. Ensure that each WAD file is named as listed below for compatability purposes with d2x-cios-installer:

   |   IOS  |              File Name             |
   | :----: | :--------------------------------: |
   | IOS 38 | IOS38-64-v4123.wad |
   | IOS 56 | IOS56-64-v5661.wad |
   | IOS 57 | IOS57-64-v5918.wad |
   | IOS 58 | IOS58-64-v6175.wad |

::: info

The WAD files should be on your SD card like this:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### Sección II - Instalación

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Elige el dispositivo de almacenamiento adonde deseas copiar el juego: unidad USB o tarjeta SD.

3. Power on your console.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Inserta la tarjeta SD o unidad USB en tu Wii, e inicia d2x cIOS Installer desde el Canal Homebrew.

6. Set everything to match the following:

   ```
   Select cIOS <d2x-v11-beta3>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   If you do not see `d2x-v11-beta3`, exit the installer with B, and make sure your SD card is unlocked.

   :::

   ::: info

   The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

   :::

   ::: info

   If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

   (If you are trying to exit the installer, the button is B, not Home.)

   :::

7. Press `A`. This will bring you to the slot map:

   ![](/images/cios/d2x_summary.png)

8. Press `A` again.

   ![](/images/cios/d2x_installation.png)

9. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

   ![](/images/cios/d2x_log.png)

   ::: info

   If the slot is highlighted red, try to install the cIOS again.

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. This will return you to the configuration screen.

11. Repeat the previous 5 steps with the following configurations:

    - Instalando cIOS 249

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Instalando cIOS 250

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Instalando cIOS 251

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details Detalles técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Ahora puedes usar aplicaciones homebrew como <a href="usbloadergx">USB Loader GX</a> y <a href="wiiflow">WiiFlow</a>. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Otras cosas

- A Wii U with the Homebrew Channel installed on the vWii
- Una tarjeta SD o unidad USB
- The [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

::: warning

Si vas a usar una tarjeta SD, asegúrate de que no esté protegida contra escritura, pues de lo contrario no podrás elegir las opciones correctas en el instalador.

:::

## Instrucciones (para Wii)

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Elige el dispositivo de almacenamiento adonde deseas copiar el juego: unidad USB o tarjeta SD.

3. Enciende la consola.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Inserta la tarjeta SD o unidad USB en tu Wii, e inicia d2x cIOS Installer desde el Canal Homebrew.

6. Set everything to match the following:

   ```
   Select cIOS <d2x-v11-beta3-vWii>
   Select cIOS base <38>
   Select cIOS slot <248>
   ```

   ![](/images/cios/d2x_v11_248_vwii.png)

   ::: info

   If you do not see `d2x-v11-beta3-vWii`, exit the installer with B, and make sure your SD card is unlocked.

   :::

7. Press `A` to install.

   ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

   - Instalando cIOS 249

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <56>
     Select cIOS slot <249>
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - Instalando cIOS 250

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <57>
     Select cIOS slot <250>
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - Instalando cIOS 251

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <58>
     Select cIOS slot <251>
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to finalizing setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Detalles técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Ahora puedes usar aplicaciones homebrew como <a href="usbloadergx">USB Loader GX</a> y <a href="wiiflow">WiiFlow</a>. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

El instalador de este cIOS originalmente fue desarrollado para la vWii de Wii U por DaveBaol, mientras que el cIOS fue diseñado por Leseratte específicamente para la Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). No se han reportado problemas en el funcionamiento de este cIOS, sin embargo, ten en cuenta que aún se encuentra en fase experimental.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Otras cosas

- Una Wii mini con el Canal Homebrew instalado
- Una unidad USB
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Instrucciones (para Wii)

### Sección I - Descarga

1. Power off your console.
2. Inserta la unidad USB o tarjeta SD en tu PC.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Reinsert your USB drive into your console.
5. Enciende la consola.
6. Launch the Homebrew Channel, and launch the Load Priiloader app.
7. Launch d2xl cIOS Installer from the list of homebrew.

### Sección II - Instalación

1. Select `Continue`.
2. Presiona continuar y después ajusta las opciones de la siguiente manera:

   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. Press A to install.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. El número 57 no cambiará.
4. Si el proceso ha sido exitoso, ahora puedes salir del instalador.

::: tip

[Continue to finalizing setup](mini-finalizing-setup)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::

::::

:::::
