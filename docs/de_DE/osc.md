# Open Shop Channel

::: info

For support (in English) with the Open Shop Channel, join [Open Shop Channel on Discord](https://discord.gg/osc).

:::

The [Open Shop Channel](https://oscwii.org/) is a homebrew app repository created by dhtdht020, and is currently the preferred way to download homebrew.

There are two methods to use the Open Shop Channel:

- On the Wii itself, utilizing one of the following homebrew apps:
  - LibreShop (preferred)
  - Homebrew Browser (fallback)
- On your computer, utilizing one of the following applications:
  - TinyWiiBackupManager (preferred)
  - OSCDL (fallback)

## Method I - Open Shop Channel on Wii

### LibreShop

LibreShop is a text-based app repository coded from the ground up by the LibreShop team, serving as a modern and more reliable method to download homebrew on a Wii.

#### Requirements

- A Wii with an active Internet connection
- Eine SD-Karte oder ein USB-Laufwerk
- [LibreShop](https://oscwii.org/library/app/libreshop)

#### Usage Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

   ![](/images/osc/zip-download-LS.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive.

3. Insert your SD card or USB drive into your Wii, and go to LibreShop. LibreShop should now display.

   ![](/images/osc/libreshop.png)

### Homebrew Browser

The Homebrew Browser is a graphical-based app repository for the Wii originally released in June 2008, but patched by the Open Shop Channel team to support its servers. It can be unstable, but serves as an alternative to LibreShop should the former not be usable.

#### Requirements

- A Wii with an active Internet connection
- Eine SD-Karte oder ein USB-Laufwerk
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

#### Usage Instructions

1. Download the recommended `.zip` file from the Open Shop Channel website.

   ![](/images/osc/zip-download-HBB.png)

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive. Optionally, the archive also comes with a guide on how to use the Homebrew Browser.

3. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Homebrew Browser should now display.

   ![](/images/osc/homebrew-browser.png)

## Method II - Open Shop Channel on PC

### TinyWiiBackupManager

TinyWiiBackupManager comes with a built-in app downloader for Open Shop Channel homebrew applications, and is the preferred method to download OSC apps on PC for most users due to its simplicity.

#### Anforderungen

- A Windows/macOS/Linux computer with an Internet connection
- Eine SD-Karte oder ein USB-Laufwerk
- The latest version of [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Section I - Installation

Detailed installation instructions for TinyWiiBackupManager specific to your operating system can be found on the [Managing Backups](backups#using-tinywiibackupmanager) page. Once finished, proceed for instructions on using the application for the Open Shop Channel.

#### Section II - Usage

1. Insert your USB drive or SD card into your computer.

2. Click the hard drive icon on the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:\`), not the "wbfs" or "games" folder. If you have not already done so, click the shop icon to open the Open Shop Channel frontend.

   ![](/images/desktop-apps/TWBM/twbm-osc-home.png)

3. Find an application that you would like to obtain, and press the `Install app` button. Alternatively, you can send the app directly to your Wii (this requires that your computer and Wii be on the same network).

   ![](/images/desktop-apps/TWBM/twbm-osc-search.png)

4. A dialog box will pop-up asking you if you would like to install the application. Press `Yes`. Once the installation has finished, a message will appear in the bottom right of the application indicating that the app was installed.

   ![](/images/desktop-apps/TWBM/twbm-osc-dialog.png)

5. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Your downloaded piece of homebrew should now display.

### OSCDL

OSCDL is the application officially developed by the Open Shop Channel team for usage on PC, and may appeal to power users due to its additional features. It can be used as an alternative to TinyWiiBackupManager in cases where the former will not function.

#### Anforderungen

- A Windows/macOS/Linux computer with an Internet connection
- Eine SD-Karte oder ein USB-Laufwerk
- The latest version of [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

#### Windows

<br>

##### Section I - Installation

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

##### Section II - Usage

1. Find an application that you would like to obtain, and press the Download button. Alternatively, you can send the app directly to your Wii (this requires that your computer and Wii be on the same network).

   ![](/images/osc/app-download-OSCDL.png)

2. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL.png)

3. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Your downloaded piece of homebrew should now display.

#### macOS and Linux

<br>

##### Section I - Installation

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

##### Section II - Usage

1. Once OSCDL is open, find an application that you would like to obtain, and press the Download button. Alternatively, you can send the app directly to your Wii (this requires that your computer and Wii be on the same network).

   ![](/images/osc/app-download-OSCDL-linux.png)

2. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps folder, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

3. Insert your SD card or USB drive into your Wii, and go to the Homebrew Channel. Your downloaded piece of homebrew should now display.

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide outlines selections of homebrew that we think are useful to have; these range from utilities to emulators and more.

:::

::: tip

[Return to site index](site-navigation)

:::