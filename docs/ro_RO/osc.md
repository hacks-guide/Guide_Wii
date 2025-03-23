# Redirecting...

::: info

For support (in English) with the Open Shop Channel, join [Open Shop Channel on Discord](https://discord.gg/osc).

:::

The [Open Shop Channel](https://oscwii.org/) is a homebrew app repository created by dhtdht020, and is currently the preferred way to download homebrew.

Există două metode de a folosi Open Shop Channel: pe consola ta Wii prin Homebrew Browser sau în afară consolei Wii folosind OSCDL.

## Metoda I - Homebrew Browser

### Requirements

- Un Wii cu homebrew instalat și cu o conexiune activă la Internet
- Un card SD sau o unitate USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

### Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

   ![](/images/osc/zip-download-HBB.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive. Opțional, arhiva conține de asemenea un ghid despre cum să folosești Homebrew Browser.

3. Introdu cardul SD sau unitatea USB în Wii și intră în Homebrew Channel. Homebrew Browser ar trebui să apară.

## Metoda II - OSCDL

### Requirements

- Un calculator Windows/macOS/Linux cu o conexiune la Internet
- Un card SD sau o unitate USB
- The latest version of [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

### Instrucțiuni pentru Windows

::: info

You may get a Microsoft SmartScreen window. This is a false positive, ignore and run anyway.

:::

::: info

Dacă primești o fereastră User Account Control care te întreabă dacă vrei sau nu ca programul să facă schimbări în calculatorul tău, alege Da. Open Shop Channel este o aplicație sigură.

:::

1. Download `oscdl-installer.exe` and run the installer. Optionally, you may instead download `oscdl-standalone.exe`, which does not have to be installed and instead runs as a portable executable.

   ![](/images/osc/exe-download-OSCDL.png)

2. Lasă instalatorul să ruleze iar apoi deschide OSCDL odată ce procesul este finalizat.

   ![](/images/osc/install-finished-OSCDL.png)

3. Găsește o aplicație pe care ai vrea să o primești și apasă pe butonul Download. Altfel poți trimite aplicația direct către consola ta Wii (acest lucru necesită calculatorul și consola să fie conectate pe aceeași rețea).

   ![](/images/osc/app-download-OSCDL.png)

4. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL.png)

5. Introdu cardul SD sau unitatea USB în Wii și intră în Homebrew Channel. Aplicația homebrew descărcata ar trebui să fie afișată acum.

### Instrucţiuni pentru macOS/Linux

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

5. Găsește o aplicație pe care ai vrea să o primești și apasă pe butonul Download. Altfel poți trimite aplicația direct către consola ta Wii (acest lucru necesită calculatorul și consola să fie conectate pe aceeași rețea).

   ![](/images/osc/app-download-OSCDL-linux.png)

6. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

7. Introdu cardul SD sau unitatea USB în Wii și intră în Homebrew Channel. Aplicația homebrew descărcata ar trebui să fie afișată acum.

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.

:::

::: tip

[Return to site index](site-navigation)

:::
