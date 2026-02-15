---
outline: false
---

# cIOS

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details Detalhes técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requirements

- A Wii with the Homebrew Channel installed
- Um cartão SD ou armazenamento USB
- The [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

::: warning

Certifique-se de que se você estiver usando um cartão SD, a trava de bloqueio está na posição desbloqueada, caso contrário, você não será capaz de selecionar as opções corretas no instalador.

:::

## Instructions

### Seção I - Baixando

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
8. Você agora poderá usar homebrew como o <a href="usbloadergx">USB Loader GX</a> e <a href="wiiflow">WiiFlow</a>.
   - Esse deve ser o mesmo dispositivo contendo o d2x cIOS Installer.
9. Ensure that each WAD file is named as listed below for compatibility purposes with d2x-cios-installer:

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

### Parte II - Instalando

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Reinsira seu cartão SD ou armazenamento USB no seu console.

3. Power on your console.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Insira o cartão SD ou armazenamento USB no seu Wii, então inicie o d2x cIOS Installer através do Homebrew Channel

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

    - Install cIOS 248

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - Install cIOS 250

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - Install cIOS 251

      ```
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details Detalhes técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requisitos

- A Wii U with the Homebrew Channel installed on the vWii
- Um cartão SD ou armazenamento USB
- The [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

::: warning

Certifique-se de que se você estiver usando um cartão SD, a trava de bloqueio está na posição desbloqueada, caso contrário, você não será capaz de selecionar as opções corretas no instalador.

:::

## Passos:

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Reinsira seu cartão SD ou armazenamento USB no seu console.

3. Ligue o seu console.

4. Launch the Homebrew Channel, and launch the Load Priiloader app.

5. Insira o cartão SD ou armazenamento USB no seu Wii, então inicie o d2x cIOS Installer através do Homebrew Channel

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

   - Install cIOS 248

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <56>
     Select cIOS slot <249>
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - Install cIOS 250

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <57>
     Select cIOS slot <250>
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - Install cIOS 251

     ```
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <58>
     Select cIOS slot <251>
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished installing all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to Finalizing Setup](vwii-finalizing-setup)

Now that the Homebrew Channel, Priiloader, and cIOS are installed, you can proceed to restore functionality that is normally missing from a standard vWii menu.

:::

::::

:::: tab cIOS for Wii mini

::: info

Se você precisar de ajuda com qualquer coisa sobre este tutorial, junte-se [ao servidor de Discord do Wii mini Hacking ](https://discord.gg/6ryxnkS) (recomendado)

:::

:::details Detalhes técnicos (opcional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

O d2x cIOS installer foi originalmente desenvolvido para o vWii do Wii U por DaveBaol, e cIOS customizadas no Wii mini foram criadas por Leseratte. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Note que esta cIOS ainda se encontra em estado experimental, embora não foram reportados problemas com a funcionalidade.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## Requisitos

- Um Wii Mini com Homebrew Channel instalado
- Um armazenamento USB
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Passos:

### Seção I - Baixando

1. Power off your console.
2. Insira seu armazenamento USB no seu computador.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Reinsira seu armazenamento USB no seu console.
5. Ligue o seu console.
6. Launch the Homebrew Channel, and launch the Load Priiloader app.
7. Abra o d2xl cIOS Installer da lista de homebrew.

### Parte II - Instalando

1. Select `Continue`.
2. Defina as opções para o seguinte:

   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. Quando feito, pressione A para instalar.
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. O número 57 não irá mudar.
4. Assim que terminar, saia do instalador.

::: tip

[Continue to Finalizing Setup](mini-finalizing-setup)

:::

::: tip

[Clique aqui para voltar para o índice do site.](site-navigation)

:::

::::

:::::
