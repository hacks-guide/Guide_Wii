# vWii Modding Guide

This page will guide you through the process of modding your vWii.

## SD Preparations

::: info

If you have hacked your Wii U in the past, you can use the same SD Card for this process.

:::

::: info

If you haven't already, make sure you did a [NAND backup](https://wiiu.hacks.guide/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)

:::

## 需要

- A modded Wii U
- The [Aroma Environment](https://aroma.foryour.cafe/)
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)
- (Optional) The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`)

::: warning

If the evWii Aroma plugin is not installed, and a homebrew app hangs, the only way to shut off the Wii U is by pulling the power cord. Pulling the power cord in some cases can cause a memory corruption so it is highly recomended to have the plugin installed.

:::

## 步骤

### Section I - Files

1. Insert your Wii U's SD Card into your PC.
2. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
3. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
4. Re-insert your SD card into the Wii U.

### Section II - Installing the Homebrew Channel

1. Boot into [Aroma](https://wiiu.hacks.guide/aroma/finalizing-setup).
   - If you set up [Aroma autobooting](https://wiiu.hacks.guide/aroma/autobooting), Aroma will already be running when you turn on your console.
2. Launch the vWii Compat Installer app from the Wii U menu.
3. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
   - If the HOME button doesn't work, you can safely power off by holding down the power button on your console, and then turn it back on.
4. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

## 必读

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
Note that the `apps` folder inside of the `wiiu` folder (for Wii U homebrew apps) and the `apps` folder on the root of the SD card (for Wii homebrew apps) are distinct.

::: tip

Continue to [Installing Priiloader](priiloader)

:::
