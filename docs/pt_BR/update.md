# Atualizando o Menu do Wii para v4.3

Este tutorial vai lhe explicar como atualizar a versão do seu Menu do Wii para 4.3, se você já tem homebrew no seu Wii.

::: warning

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.

:::

## Requirements

- a Wii with The Homebrew Channel 1.0.8 or later
  - If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
- Um cartão SD ou armazenamento USB
- A Windows/macOS/Linux computer
- [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Instructions

### Seção I - Baixando

1. On your computer, download NUSGet using the link above, choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
2. Unzip the archive and run the NUSGet executable.
3. Go to `System` > `0000000100000002 - System Menu` > `Your Region` and then select the latest 4.3 version of the menu (e.g. `v513 4.3U` for USA). Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl-alt.png)
4. Go to `IOS` > `000000010000003A - IOS 58` > `World` > `Latest Version`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-ios58-dl.png)
5. Go to `IOS` > `0000000100000050 - IOS 80` > `World` > `Latest Version`. Uncheck `Keep encrypted contents`. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-ios80-dl.png)
6. When you have finished the above steps, navigate to the folder where your NUSGet executable is stored. This should now contain three different folders with the title IDs for the downloaded IOS and Wii menu files.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu-alt.png)
7. Go into the folders corresponding to the title numbers for the above, and locate the singular WAD file in each. You will need to copy these to a folder called `wad` on your SD card or USB drive. The end result should include the files below in the folder:

   ![](/images/desktop-apps/nusget/nusget-copy-wiimenu-sd.png)
8. After you have copied all 3 WAD files, eject your SD card/USB drive from your PC and insert it back into your Wii.

### Parte II - Instalando

1. Power off your console. Start holding RESET, then turn it back on.
2. In the Priiloader menu, select `Homebrew Channel`.
   - If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
3. Execute o YAWM ModMii Edition.
4. Select your SD card or USB drive.
5. Press + on the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
6. Navigate to the Wii Menu WAD and press A twice to install it.
7. When prompted to retain Priiloader, press A to confirm.
8. Depois que eles forem instalados com sucesso, pressione o botão HOME para sair para o Homebrew Channel.

::: tip

[Clique aqui para voltar para o índice do site.](site-navigation)

:::
