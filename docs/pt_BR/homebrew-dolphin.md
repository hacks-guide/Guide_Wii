# Instalando Homebrew Channel no Emulador Dolphin

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Uma vez que isso for feito, o Homebrew Channel pode ser instalado, embora não da mesma maneira que um Wii físico.

## Requirements

- Um computador Windows/macOS/Linux com conexão à internet
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` or later
- The latest version of [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Download `Open_HBC_(version)_LULZ.wad` from the page linked above.

3. Abra o emulador Dolphin.

4. Select `Tools > Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools > Load Wii System Menu`. O canal deve agora aparecer.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Pós-instalação, instalando Homebrews através do Open Shop Channel

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Como alternativa, você pode obter OSCDL e fazer esse processo manualmente.

2. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.

3. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.

4. Open the `SD Sync Folder`. No Windows, isso pode ser feito colando o caminho da pasta no Menu Iniciar, no Windows Explorer ou Executar.

5. Extract any homebrew apps to the `WiiSDSync` folder. O resultado final deve ser algo como isto:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Carregue o Menu do Wii e abra o Homebrew Channel. Seus aplicativos recém-instalados devem aparecer!

   ![](/images/homebrew-dolphin/hbc-apps.png)
