# Open Shop Channel

::: info

For support (in English) with the Open Shop Channel, join [Open Shop Channel on Discord](https://discord.gg/osc).

:::

The [Open Shop Channel](https://oscwii.org/) is a homebrew app repository created by dhtdht020, and is currently the preferred way to download homebrew.

There are two methods to use the Open Shop Channel: on your Wii through Homebrew Browser, or outside of your Wii through OSCDL.

## Método I - Homebrew Browser

### Requirements

- Um Wii desbloqueado com conexão de Internet ativa
- Um cartão SD ou armazenamento USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

### Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

    ![](/images/osc/zip-download-HBB.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive. Opcionalmente, o arquivo também vem com um guia sobre como usar o Homebrew Browser.

3. Insira seu cartão SD ou drive USB no seu Wii, e vá para o Homebrew Channel. Homebrew Browser should now display.

## Método II - OSCDL

### Requirements

- Um computador Windows/macOS/Linux com conexão à internet
- Um cartão SD ou armazenamento USB
- The latest version of [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

### Instruções para Windows

::: info

You may get a Microsoft SmartScreen window. This is a false positive, ignore and run anyway.

:::

::: info

Se você receber um pop-up de controle de conta de usuário que pergunta se você gostaria ou não que o programa fizesse alterações em seu PC, selecione Sim. O Open Shop Channel é um aplicativo seguro.

:::

1. Download `oscdl-installer.exe` and run the installer. Optionally, you may instead download `oscdl-standalone.exe`, which does not have to be installed and instead runs as a portable executable.

    ![](/images/osc/exe-download-OSCDL.png)

2. Deixe o instalador executar, e então inicie o OSCDL assim que o processo terminar.

    ![](/images/osc/install-finished-OSCDL.png)

3. Encontre um aplicativo que você gostaria de obter, e pressione o botão Download. Como alternativa, você pode enviar o aplicativo diretamente para o seu Wii (requer que seu computador e Wii estejam na mesma rede).

    ![](/images/osc/app-download-OSCDL.png)

4. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

    ![](/images/osc/download-prompt-OSCDL.png)

5. Insira seu cartão SD ou drive USB no seu Wii, e vá para o Homebrew Channel. Seus homebrews baixados agora devem ser exibidos.

### Instruções para macOS/Linux

::: warning

You will need Python 3 installed in order to use OSCDL on these platforms.

:::

1. Download the source code for OSCDL, either the `.zip` or the `.tar.gz`.

    ![](/images/osc/source-code-download-OSCDL.png)

2. Extract the archive to a location on your computer that you would like to use OSCDL in.

3. Open the location of the extracted files in a terminal and run the command `pip install -r requirements.txt`. This will download Python packages needed to run OSCDL.

    ![](/images/osc/satisfy-requirements-OSCDL.png)

4. Run the command `python3 oscdl.py`. This will open the program. Optionally, you can also create a desktop shortcut that runs this command for easier access.

    ![](/images/osc/run-OSCDL-terminal.png)

5. Encontre um aplicativo que você gostaria de obter, e pressione o botão Download. Como alternativa, você pode enviar o aplicativo diretamente para o seu Wii (requer que seu computador e Wii estejam na mesma rede).

    ![](/images/osc/app-download-OSCDL-linux.png)

6. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

    ![](/images/osc/download-prompt-OSCDL-linux.png)

7. Insira seu cartão SD ou drive USB no seu Wii, e vá para o Homebrew Channel. Seus homebrews baixados agora devem ser exibidos.

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.

:::

::: tip

[Return to site index](site-navigation)

:::
