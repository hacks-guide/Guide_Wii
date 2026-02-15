# Open Shop Channel

::: info

For support (in English) with the Open Shop Channel, join [Open Shop Channel on Discord](https://discord.gg/osc).

:::

The [Open Shop Channel](https://oscwii.org/) is a homebrew app repository created by dhtdht020, and is currently the preferred way to download homebrew.

There are two methods to use the Open Shop Channel: on your Wii through Homebrew Browser, or outside of your Wii through OSCDL.

## Metodo I - Homebrew Browser

### Requirements

- Un Wii modificato con una connessione Internet attiva
- Una scheda SD o dispositivo USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

### Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

   ![](/images/osc/zip-download-HBB.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive. Facoltativamente, l'archivio fornisce una guida su come utilizzare l'Homebrew Browser.

3. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia l'Homebrew Channel. Homebrew Browser should now display.

## Metodo II - OSCDL

### Requirements

- Un computer Windows/macOS/Linux con una connessione a internet
- Una scheda SD o dispositivo USB
- The latest version of [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

### Istruzioni per Windows

::: info

You may get a Microsoft SmartScreen window. This is a false positive, ignore and run anyway.

:::

::: info

Se vedi un pop-up per il Controllo account utente che ti chiede se vuoi che il programma esegua cambiamenti o meno sul tuo PC, seleziona Sì. L'Open Shop Channel, è un'applicazione sicura.

:::

1. Download `oscdl-installer.exe` and run the installer. Optionally, you may instead download `oscdl-standalone.exe`, which does not have to be installed and instead runs as a portable executable.

   ![](/images/osc/exe-download-OSCDL.png)

2. Lasciate che l'installazione prosegua e poi avvia OSCDL una volta che il processo è terminato.

   ![](/images/osc/install-finished-OSCDL.png)

3. Trova un'applicazione che desideri ottenere e premi il pulsante Download. In alternativa, è possibile inviare l'app direttamente al Wii (questo richiede che sia il computer che il Wii siano sulla stessa rete).

   ![](/images/osc/app-download-OSCDL.png)

4. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL.png)

5. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia l'Homebrew Channel. Ora dovresti vedere il tuo homebrew appena scaricato.

### Istruzioni per macOS/Linux

::: warning

You will need Python 3 installed in order to use OSCDL on these platforms. Please note that on certain distros, Python 3 may use either `python` or `python3` as an alias, please be aware of this for Step 6. You will also create a virtual environment to isolate OSCDL and its dependencies from your base Python installation.

:::

1. Download the source code for OSCDL, either the `.zip` or the `.tar.gz`. Optionally, you can instead run `git clone https://github.com/dhtdht020/osc-dl.git` in the directory you would like to use OSCDL in.

   ![](/images/osc/source-code-download-OSCDL.png)

2. If you chose to download the source code, extract the archive to a location on your computer that you would like to use OSCDL in.

3. Open the location of the extracted files in a terminal and run the command `python3 -m venv venv` to create a virtual environment. Note that, if you receive a message that `ensurepip` is not available, you must install the `python3-venv` package for your distribution. Python may provide a command for you to use to accomplish this.

   ![](/images/osc/create-virtual-environment.png)

4. Run the command `source venv/bin/activate` to activate the virtual environment.

   ![](/images/osc/activate-virtual-environment.png)

5. Run the command `pip install -r requirements.txt`. This will download Python packages needed to run OSCDL.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

6. Run the command `python3 oscdl.py`. This will open the program. If you choose to keep the terminal open, you can use `deactivate` to exit the virtual environment. Additionally note that you must run `source venv/bin/activate` in the directory where OSCDL was extracted every time you open a new terminal. This is in order to load the dependencies needed to run OSCDL.

   ![](/images/osc/run-OSCDL-terminal.png)

7. Once OSCDL is open, find an application that you would like to get, and press the Download button. In alternativa, è possibile inviare l'app direttamente al Wii (questo richiede che sia il computer che il Wii siano sulla stessa rete).

   ![](/images/osc/app-download-OSCDL-linux.png)

8. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

9. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia l'Homebrew Channel. Ora dovresti vedere il tuo homebrew appena scaricato.

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.

:::

::: tip

[Return to site index](site-navigation)

:::
