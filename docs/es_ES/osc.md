# Open Shop Channel

::: info

For support (in English) with the Open Shop Channel, join [Open Shop Channel on Discord](https://discord.gg/osc).

:::

The [Open Shop Channel](https://oscwii.org/) is a homebrew app repository created by dhtdht020, and is currently the preferred way to download homebrew.

There are two methods to use the Open Shop Channel: on your Wii through Homebrew Browser, or outside of your Wii through OSCDL.

## Method I - Homebrew Browser

### Requirements

- A homebrewed Wii with an active Internet connection
- Una tarjeta SD o unidad USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

### Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

   ![](/images/osc/zip-download-HBB.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive. Optionally, the archive also comes with a guide on how to use the Homebrew Browser.

3. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Homebrew Browser should now display.

## Method II - OSCDL

### Requirements

- A Windows/macOS/Linux computer with an internet connection
- Una tarjeta SD o unidad USB
- The latest version of [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

### Instructions for Windows

::: info

You may get a Microsoft SmartScreen window. This is a false positive, ignore and run anyway.

:::

::: info

If you get a User Account Control pop-up that asks whether or not you would like the program to make changes to your PC, select Yes. Open Shop Channel is a safe application.

:::

1. Download `oscdl-installer.exe` and run the installer. Optionally, you may instead download `oscdl-standalone.exe`, which does not have to be installed and instead runs as a portable executable.

   ![](/images/osc/exe-download-OSCDL.png)

2. Let the installer run, and then launch OSCDL once the process is finished.

   ![](/images/osc/install-finished-OSCDL.png)

3. Find an application that you would like to get, and press the Download button. Alternatively, you can send the app directly to your Wii (this requires that your computer and Wii be on the same network).

   ![](/images/osc/app-download-OSCDL.png)

4. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL.png)

5. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Your downloaded piece of homebrew should now display.

### Instructions for macOS/Linux

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

5. Find an application that you would like to get, and press the Download button. Alternatively, you can send the app directly to your Wii (this requires that your computer and Wii be on the same network).

   ![](/images/osc/app-download-OSCDL-linux.png)

6. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

7. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Your downloaded piece of homebrew should now display.

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.

:::

::: tip

[Return to site index](site-navigation)

:::
