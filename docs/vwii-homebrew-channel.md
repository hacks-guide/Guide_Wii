# vWii Modding Guide

This page will guide you through the process of modding your vWii on an already modded Wii U.

## SD Preparations

::: info

You can use the same SD Card that you initially used to mod your Wii U for this process.

:::

::: warning

If you haven't already, make sure you created a [NAND backup](https://wiiu.hacks.guide/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

If you do not have Aroma installed, proceed to [Installing Aroma](https://wiiu.hacks.guide/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper).

:::

## Requirements

* A modded Wii U
* The [Aroma Environment](https://aroma.foryour.cafe/)
* The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)
* The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`) (optional)

::: danger

If the evWii Aroma plugin is not installed and a homebrew app crashes/hangs, the only way to shut off the Wii U is by pulling the power cord. In some cases, pulling the power cord can cause memory corruption; therefore, it is highly recomended to have the plugin installed.

:::

## Instructions

### Section I - Files

1. Insert your Wii U's SD Card into your PC.
1. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
1. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
1. Re-insert your SD card into the Wii U.

### Section II - Installing the Homebrew Channel

::: tip

On Step 3, if the HOME button doesn't work, or causes you to freeze on a solid color screen, you can safely power off the console by holding down the power button on your console. Then, turn the console back on and proceed as normal.

:::

1. Boot into [Aroma](https://wiiu.hacks.guide/aroma/finalizing-setup). If you previously set up [Aroma autobooting](https://wiiu.hacks.guide/aroma/autobooting), Aroma will already be running when you turn on your console. Once booted, launch the vWii Compat Installer app from the Wii U menu. 

    ![](/images/vwii/exploit/compat-install-launch.png)

1. Press `A` to install the Homebrew Channel.

    ![](/images/vwii/exploit/compat-install-pending.png)
1. Allow the Homebrew Channel to install, until you see `Install succeeded!`. Once installation has finished, press the HOME button to return to the Wii U menu.

    ![](/images/vwii/exploit/compat-install-success.png)
1. Launch vWii (the Wii Menu icon).

    ![](/images/vwii/launch-vwii.png)
1. If the installation has succeeded, you should now see the Homebrew Channel in your Wii Menu.

    ![](/images/vwii/exploit/vwii-hbc-installed.png)

## Required Reading for Homebrew Management

You can now use the Homebrew Channel to launch Wii homebrew apps.

Note: When installing Wii homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card
 ┗ 📁 apps
   ┣ 📁 <AppName1>
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 <AppName2>
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

Please note that the `apps` folder inside of the `wiiu` folder (for Wii U homebrew apps) and the `apps` folder on the root of the SD card (for Wii homebrew apps) are distinct.

::: tip

Continue to [Installing Priiloader](priiloader)

Although BootMii cannot be installed on vWii, Priiloader adds a crucial level of brick protection, and is highly recommended to install.

:::
