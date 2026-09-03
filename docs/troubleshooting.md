# Troubleshooting

This page contains various troubleshooting guides for issues that may arise during the modding process.

::: info

**Getting Assistance**

If you have attempted the solutions suggested by this page and your issue is still occouring, join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask for help in English on the `#wii-vwii-assistance` channel. Please provide this information:

1. The exact error message, or what you see on the screen (include a photo if possible)
1. Your specific console model (Original Wii, Family Edition Wii, Wii mini, vWii on Wii U)

If you do not speak English well, please use a translator like [Google Translate](https://translate.google.com/) to write your question. We are happy to help you. Please explain your problem clearly!

:::

## Wilbrand or Letterbomb

::: details The hacked letter does not appear in the Wii Message Board.
* Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.

* In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.

* If you are still experiencing this issue, reformat your SD card by following [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).
:::

::: details After opening the hacked letter, I get sent back to the Wii Menu.
Ensure that your SD card's write lock switch is disabled. The switch should be pushed up so it matches the image below.
![](/images/troubleshooting/sdlock.png)
:::

::: details My Wii freezes after opening the hacked letter.
* If your Wii freezes after clicking on the letter, you most likely chose the wrong system menu region for Wilbrand/Letterbomb. Recreate the exploit files, ensuring you select the correct version.

* If all is correct and there is freezing, keep on trying until it works.
:::

::: details The screen goes black and the disc drive light begins to flash when I opened the hacked letter.
Ensure you also copied over `boot.elf` from the Wilbrand/Letterbomb `.zip` file. 
:::

## str2hax
::: details Connection test fails with an error code.
* Please verify that you have entered the DNS correctly.
* If it is still unsuccessful, try another connection, or use [another exploit](get-started#select-your-exploit).
:::

::: details The normal User Agreements appears instead of the exploit page.
Your ISP blocks the use of custom DNS. Try another connection, or use [another exploit](get-started#select-your-exploit).
:::

::: details The HackMii installer never loads, or an error like `Hanging.` or `ERROR! if_config (ret = ...)` appears
* Please restart your Wii and try again.
* If it is still unsuccessful, try another connection, or use [another exploit](get-started#select-your-exploit).
:::

## Homebrew Channel and BootMii installation
::: details The installed boot1 version prevents a boot2 install. (-2)
This is normal as BootMii can only be installed into boot2 on early Wiis. You may proceed with the guide as normal. 
:::


::: details FAILED (-1) when installing BootMii.
Ensure your SD card is inserted into the front SD slot. 
:::

::: details FAILED (-2) when installing BootMii.
Ensure that your SD card's write lock switch is disabled. The switch should be pushed up so it matches the image below. If this does not fix your issue, ensure that your SD card has at least 400 KB of space available on your SD card.
![](/images/troubleshooting/sdlock.png) 
:::

## NAND backup (nanddumper@ios)
placeholder

## NAND backup (BootMii)
::: details Backup failed: -1 or wtf wrote 0 bytes, ret = 2
This error indicates that your SD card may potentially be out of storage space.
* Try deleting some unnesecary files to regain storage space. Keep in mind you need at least 560 MB available to perform a NAND backup.
* If that does not work, your SD card may be illegitimate and lying about it's capacity.

## Priiloader
::: details Installer crashes with an error stating "cIOS Infected".
Your Wii was modified in the past and the installed softmod is outdated, follow [ModMii SysCheck Updater Wizard](https://wii.hacks.guide/modmii#syscheck-updater-wizard) to resolve this.
:::

## cIOS
::: details `d2x-v11-beta3` doesn't show up as an install option.
Ensure that your SD card's write lock switch is disabled. The switch should be pushed up so it matches the image below.
![](/images/troubleshooting/sdlock.png)
:::

::: details Install failed during the download stage.
Ensure that you followed Section I on the cIOS guide and you renamed the four `.wad` files to match **EXACTLY** what is stated by Section I as any deviation will cause an error.
:::