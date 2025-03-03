# Wilbrand

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

::: info

There are two methods listed on this page used to create the proper Wilbrand exploit.

Wilbrand Web is recommended for its ease of use.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requirements

- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- A Wii on version 3.0 or newer

::: warning

SD cards larger than 2GB will not work on Wii menu versions before 4.0.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note of the letter next to the system version, in the top-right corner of the screen.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviguez vers `Internet` > `Informations générales`.

5. Prenez note de votre adresse MAC COMPLET.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Wilbrand in its natural habitat

8. HackMii Screen

9. Cliquez sur un des deux boutons.

   ![](/images/exploits/wilbrand/web.png)

10. Click on "Download your .zip".

11. Insérez votre carte SD dans votre ordinateur.

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. Extract the contents of the downloaded ZIP to the root of your SD card.
    - La carte SD doit être insérée dans le port carte SD située devant la Wii. Using a USB adapter plugged into the Wii's USB port will not work.

14. Take out your SD card and insert it in your Wii.

15. Open the Wii Message Board.

16. Load the green letter with the Bob-omb icon.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

17. It'll then proceed to download and load the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continuer vers la chaîne Homebrew et l'installation de BootMii](hbc)
{: .notice--info}

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requirements

- A PC running Windows, MacOS or Linux
- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- A Wii on version 3.0 or newer
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

SD cards larger than 2GB will not work on Wii menu versions before 4.0.

:::

### Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note of the letter next to the system version, in the top-right corner of the screen.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviguez vers `Internet` > `Informations générales`.

5. Prenez note de votre adresse MAC COMPLET.

   ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. Insérez votre carte SD dans votre ordinateur.

8. Open a terminal inside the folder Wilbrand was extracted to.

9. Using your Wii's version and MAC address, run the following command:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` is the drive letter of your SD card.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` is the folder your SD card is mounted in. This may vary depending on your Linux distro.

     ![](/images/exploits/wilbrand/linux.png)

10. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.

11. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.

12. Extract the contents of the downloaded ZIP to the root of your SD card.
    - La carte SD doit être insérée dans le port carte SD située devant la Wii. Using a USB adapter plugged into the Wii's USB port will not work.

13. Take out your SD card and insert it in your Wii.

14. Open the Wii Message Board.

15. Load the green letter with the Bob-omb icon.

    - Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

16. It'll then proceed to download and load the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continuer vers la chaîne Homebrew et l'installation de BootMii](hbc)
{: .notice--info}

:::

::::

:::::
