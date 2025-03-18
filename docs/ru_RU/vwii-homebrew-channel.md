# vWii Modding Guide

This page will guide you through the process of modding your vWii.

## SD Preparations

::: info

If you have hacked your Wii U in the past, you can use the same SD Card for this process.

:::

::: info

If you haven't already, make sure you did a [NAND backup](https://wiiu.hacks.guide/#/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)

:::

## Требования

- A modded Wii U
- The [Aroma Environment](https://aroma.foryour.cafe/)
- The latest release of the [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller).
- (Optional) The [Enhanced vWii Aroma Plugin](https://hb-app.store/wiiu/evWii)

::: warning

If the evWii Aroma plugin is not installed, and a homebrew app hangs, the only way to shut off the Wii U is by pulling the power cord. Pulling the power cord in some cases can cause a memory corruption so it is highly recomended to have the plugin installed.

:::

## Инструкции

### Section I - Files

1. Insert your Wii U's SD Card into your PC.
2. Copy the contents of the `CompatTitleInstaller.zip` file to the root of your SD Card.
3. Copy the contents of the `evWii.zip` file to the root of your SD Card.

### Section II - Installing the Homebrew Channel

1. Boot into [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup).
2. Launch the vWii Compat Installer on the Wii U menu.
3. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
4. Launch vWii (the Wii Menu icon).
 - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

## Required Reading

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
Do not Get confused with the `apps` folder inside of the `wiiu` folder and the `apps` folder on the root of the SD card.

::: tip

Continue to [Installing Priiloader](priiloader)

:::
