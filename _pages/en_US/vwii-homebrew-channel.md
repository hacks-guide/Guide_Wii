---
title: "vWii Modding Guide"
---

{% include toc title="Table of Contents" %}

This page will guide you through the process of modding your vWii.

## SD Preparations

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.
{: .notice--info}
    
If you have hacked your Wii U in the past, you can use the same SD Card for this process.
{: .notice--info}

If you haven't already, make sure you did a [nand backup](https://wiiu.hacks.guide/#/tiramisu/nand-backup) and have the [Aroma Enviorment](https://aroma.foryour.cafe/) installed on your Wii U. Otherwise, proceed to [Installing Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper)
{: .notice--info}

### Requirements

- A modded Wii U
- The Aroma Enviornment
- The latest release of the [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller).
- (Optional) The [Enhanced vWii Aroma Plugin](https://hb-app.store/wiiu/evWii)

### Instructions

#### Section I - Files

1. Insert your Wii U's SD Card into your PC.
2. Copy the contents of the `CompatTitleInstaller.zip` file to the root of your SD Card.
3. Copy the contents of the `evWii.zip` file to the root of your SD Card.

#### Section II - Installing the Homebrew Channel

1. Boot into [Aroma](https://wiiu.hacks.guide/#/aroma/finalizing-setup).
2. Launch the vWii Compat Installer on the Wii U menu.
3. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
4. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

### Required Reading

You can now use the Homebrew Channel to launch Wii homebrew apps.

Note: When installing Wii homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card
 ┗ 📁 apps
   ┣ 📁 AppName1
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 AppName2
	 ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.
Do not Get confused with the `apps` folder inside of the `wiiu` folder and the `apps` folder on the root of the SD card.

[Continue to installing Priiloader](priiloader)<br>