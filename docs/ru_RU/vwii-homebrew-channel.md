# Installing the Homebrew Channel on vWii

This page will guide you through the process of installing the Homebrew Channel onto the vWii menu.

::: info

You can use the same SD Card that you initially used to mod your Wii U for this process.

:::

::: warning

If you haven't already, make sure you created a [NAND backup](https://wiiu.hacks.guide/aroma/nand-backup) and have the [Aroma Environment](https://aroma.foryour.cafe/) installed on your Wii U.

If you do not have Aroma installed, proceed to [Installing Aroma](https://wiiu.hacks.guide/aroma/getting-started) or [Modding the vWii without modding the Wii U side](wiiu-nand-dumper).

:::

## Требования

- A Wii U
- The [Aroma Environment](https://aroma.foryour.cafe/) (should be installed from previous step)
- The latest release of the [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`) (should be installed from preivious step)
- The [Enhanced vWii Aroma Plugin](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`) (optional)

::: danger

If the evWii Aroma plugin is not installed and a homebrew app crashes/hangs, the only way to shut off the Wii U is by pulling the power cord. In some cases, pulling the power cord can cause memory corruption; therefore, it is highly recommended to have the plugin installed.

:::

## Инструкции

### Section I - Files

1. Insert your Wii U's SD Card into your PC.
2. Copy `compat_installer.wuhb` file from `compat_installer-Aroma.zip` to `wiiu` -> `apps` of your SD Card.
3. Copy `evwii.wps` file to `wiiu` -> `environments` -> `aroma` -> `plugins` of your SD Card.
4. Re-insert your SD card into the Wii U.

### Section II - Booting into Aroma

Next steps will differ based on whether or not your Wii U is configured to [autoboot into Aroma](https://wiiu.hacks.guide/aroma/autobooting). If you can see the vWii Compat Installer upon booting your Wii U, you are in the Aroma environment and should [proceed to Section III](#section-iii---installing-the-homebrew-channel). Otherwise, use the below two methods to boot into Aroma.

#### Procedure for Wii Us with PayloadLoader

If you have previously modded your Wii U and have [PayloadLoader installed](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), you should be able to launch the Health and Safety Information App to load into the Aroma environment.

#### Procedure for Wii Us without PayloadLoader

::: warning

If you get any errors like FSOpenfile failed, FSGetMountSource failed, or SD Mount failed, refer to the browser errors in [Common Issues and Fixes](https://wiiu.hacks.guide/common-issues-fixes.html).

:::

If you DO NOT have [PayloadLoader installed](https://wiiu.hacks.guide/aroma/installing-payloadloader.html), you will need to utilize the browser exploit to launch into the Aroma environment. For users that would like to forego fully modding their Wii U, follow these steps.

1. Launch the Internet Browser and navigate to the website `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

2. Click on `Run Exploit!` and hold the X button until you see the EnvironmentLoader. Once you are inside the EnvironmentLoader, select `aroma` to launch the Aroma environment.

   - If your Wii U gets stuck on a white or otherwise frozen screen, wait a few seconds. If nothing happens, reboot the console, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again.
   - If you see a `Please choose your payload` screen, you should try again and ensure that you are holding `X` long enough. Do not hold the `B` button.

   ![](/images/vwii/exploit/environment-loader.png)

3. If you get a warning message about the update folder existing, press the `X` button to block updates and proceed.

   ![](/images/vwii/exploit/update-warning.png)

4. In the Boot Selector, press `A` to launch the Wii U Menu.

   ![](/images/vwii/exploit/boot-selector.png)

### Section III - Installing the Homebrew Channel

::: tip

On Step 3, if the HOME button doesn't work, or causes you to freeze on a solid color screen, you can safely power off the console by holding down the power button on your console. Then, turn the console back on and proceed as normal.

:::

1. Launch the vWii Compat Installer app from the Wii U Menu.

   ![](/images/vwii/exploit/compat-install-launch.png)

2. Press `A` to install the Homebrew Channel.

   ![](/images/vwii/exploit/compat-install-pending.png)

3. Allow the Homebrew Channel to install, until you see `Install succeeded!`. Once installation has finished, press the HOME button to return to the Wii U Menu.

   ![](/images/vwii/exploit/compat-install-success.png)

4. Launch vWii (the Wii Menu icon).

   ![](/images/vwii/launch-vwii.png)

5. If the installation has succeeded, you should now see the Homebrew Channel in your Wii Menu.

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
