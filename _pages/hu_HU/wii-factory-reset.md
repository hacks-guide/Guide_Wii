---
title: A Wii NAND visszaállítása gyárira
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató részletesen bemutatja, hogyan hozhatsz létre egy alap NAND-ot a Wii rendszeredhez az Ohneschwanzenegger nevű program segítségével. A Wii beállításaiban található `Format Wii System Memory` opcióval ellentétben ez teljesen törli a NAND minden módosítását a NUS szerverekről letöltött alap Wii System Menu segítségével. Ha helyesen követed, a Wii-n nem marad homebrew a rendszeren, stock IOS-eket tartalmaz és egy gyári beállítási képernyőre kell bootolnia, ha a NAND flashelve lett.

Please note that this program **needs** an existing (even bricked!) NAND backup to function, as it needs to have a copy of the first 8 blocks of NAND, a bad blocks list, and AES/HMAC keys.

Ne próbáld meg ezt az útmutatót a Wii U vWii rendszerénél.
{: .notice--info}

{% capture here-be-dragons %}

The instructions detailed in this guide WILL ERASE YOUR WII SYSTEM MEMORY and should only be considered as a LAST RESORT or if you are trying to do any of the following:

- Restore the Wii to a state comparable to when it left the factory.
- Fix a brick where you do not have a functional NAND backup or access to the Homebrew Channel but can still make one using BootMii.
- You are unable to revert certain changes to the Wii System Memory such as all cIOS with DARKCORP.

{% endcapture %}

<div class="notice--danger">{{ here-be-dragons | markdownify }}</div>

If you are trying to [update your Wii to 4.3U](update) with homebrew or update outdated homebrew/IOS, you most likely do not need to follow this guide. Instead, you can use a tool like the SysCheck Updater Wizard built into [ModMii](modmii#syscheck-updater-wizard). If you are confused about this process, consider joining the Nintendo Homebrew discord server for support.
{: .notice--warning}

### Követelmények

- Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)
- A [NAND backup](bootmii) from the specific system you are trying to flash
- A Windows computer with an Internet connection
- [Ohneschwanzenegger](https://raw.githubusercontent.com/modmii/modmii.github.io/master/temp/ohneschwanzenegger.zip)
- [Nand BIN Checker](/assets/files/nandBinCheck.zip)

### Útmutató

#### I. rész - Előkészületek

1. Start Ohneschwanzenegger. You may get a Windows SmartScreen prompt, this is a false positive and you can run the program anyway by pressing `More info` and `Run anyway`.

2. Press the `Local Cache` button, create a new folder for the NUS cache to be output in, and then press OK. An example folder is given below.

   ![](/images/factory-reset/nuscache.png)

3. Press `Nand Dump` on the toolbar, and then press `New nand`. This should open a pop-up window where you can adjust parameters for a new NAND dump. Press the large `Existing Nand...` button and find your existing NAND dump from your Wii.

   ![](/images/factory-reset/newnand.png)

4. This will fill in information such as the keys, Boot 1/2, and your bad blocks automatically. ONLY change the Destination box to `./blankNand.bin`, which will output the NAND to the program folder with the name `blankNand.bin`. Aztán nyomj OK-t.

   ![](/images/factory-reset/renamenand.png)

#### II. rész - Üres NAND készítése

1. Now that the NAND is loaded into the program, select `Content` on the toolbar and then press Format. This will initialize your BLANK NAND, not your backup NAND.

   ![](/images/factory-reset/formatnand.png)

2. Select the top left text box in the program and type in the Wii System Menu version that you need the NAND to have. Note that this should optimally be the version that your NAND was previously using. This NAND was using `4.3U`. Other valid examples are `3.2U`, `4.3E`, or `3.4J`.

   ![](/images/factory-reset/sysmenu.png)

3. Once you have confirmed you have entered the version of the menu that you want, press enter or `Get It!`. This will begin downloading the menu from NUS servers, with the progress displayed in the program.

   ![](/images/factory-reset/menudownload.png)

4. Once the menu has finished downloading, a pop-up will display showing the settings appended to the NAND. It will be autofilled depending on what was in your NAND, although the serial number may be incorrect. You can edit this if you would like, otherwise keep everything blank and press OK.

   ![](/images/factory-reset/settings.png)

5. Next, press `Content` on the taskbar and press `Write meta entries`. Then, go back to the menu and press `Flush`. You may then close the window.

   ![](/images/factory-reset/finalsteps.png)

#### III. rész - A NAND ellenőrzése

1. If NAND Bin Checker is not already in the same directory as Ohneschwanzenegger, copy it there now. Then, open a terminal in that directory. Run the following command: `.\nandBinCheck.exe .\blankNand.bin`. If you named the NAND something else, adjust the command accordingly. The program will then check the validity of the NAND.

   ![](/images/factory-reset/nandcheck.png)

2. If all is well, the result should look similar to the below. If there are ANY errors that stand out, DO NOT use this NAND and try again as it may damage or permanantly brick your Wii. If you continue to get these errors on further attempts, go to the Nintendo Homebrew discord server for support.

   ![](/images/factory-reset/nandcheckresult.png)

3. Move the `blankNand.bin` to your Wii SD card and rename it to `nand.bin` so that it can be flashed by BootMii. Remember not to overwrite your existing NAND!

   ![](/images/factory-reset/nandname.png)

[Continue to BootMii Recovery](bootmiirecover)
Now that you have a blank NAND, you can restore it on your Wii using BootMii.
{: .notice--info}
