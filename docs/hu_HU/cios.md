# cIOS-ek telepítése

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

:::

## Követelmények

::: warning

Az útmutató ezen része csak Wii-felhasználóknak szól.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd!

:::

- Egy Wii
- Egy SD kártya vagy pendrive
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

## Lépések

### I. rész - Letöltés

::: info

If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), and it will download the WAD files for you.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. Power off your console.
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
3. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
4. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
5. Run `NUS Downloader.exe`.
6. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
   - Pipáld ki a „Pack WAD” („WAD becsomagolása”)-lehetőséget!
   - _Don't_ check "Patch IOS". Ezt majd a cIOS-telepítő megteszi.
7. Click `Start NUS Download!`.
8. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
11. Helyezd az összes WAD-fájlt az SD kártya vagy pendrive gyökerére!
    - Ezen az eszközön legyen a d2x cIOS-telepítő is!

::: info

The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)

:::

### II. rész – Telepítés

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Power on your console.

4. Indítsd el a Homebrew Channelt!

5. Indítsd el a listáról a „d2x cIOS Installer”-t!

6. Állíts be mindent az alábbiak szerint:

   ```
   Select cIOS <d2x-v11-beta1>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   If you do not see `d2x-v11-beta1`, exit the installer with B, and make sure your SD card is unlocked.

   :::

   ::: info

   The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

   :::

   ::: info

   If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

   (If you are trying to exit the installer, the button is B, not Home.)

   :::

7. Press `A`. Erre a program meg fogja mutatni a helykiosztást:

   ![](/images/cios/d2x_summary.png)

8. Press `A` again.

   ![](/images/cios/d2x_installation.png)

9. A telepítés befejezése után ismét a helykiosztást fogod látni. Ellenőrizd, hogy az imént telepített IOS helye zölden van kiemelve!

   ![](/images/cios/d2x_log.png)

   ::: info

   Ha pirossal van kiemelve, próbáld újra a telepítést!

   If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

   :::

10. Press `A`. Ezzel visszajutsz a konfigurációs képernyőre.

11. Ismételd meg az előző 5 lépést az alábbi beállításokkal:

    - A cIOS 249 telepítéséhez

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - A cIOS 250 telepítéséhez

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - A cIOS 251 telepítéséhez

      ```
      Select cIOS <d2x-v11-beta1>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B-gombot a Homebrew Channelbe való visszatéréshez!

::: info

Ha letöltötted a 4 WAD fájlt az I. részben, most törölheted őket az SD kártyádról/USB drive-odról.

:::

::: tip

Folytatás az [Open Shop Channel telepítés](osc)-ével

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::
