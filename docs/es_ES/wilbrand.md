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

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. Input your Wii MAC, version and region.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Cut either wire.

    ![](/images/exploits/wilbrand/web.png)

10. Click on "Download your .zip".

11. Inserta tu tarjeta SD en tu ordenador.

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. Expulsa la tarjeta SD e insértala en tu Wii.
    - La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.

14. En tu consola, ingresa al tablón de Wii.

15. Open the Wii Message Board.

16. Load the green letter with the Bob-omb icon.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

17. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

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

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. Inserta tu tarjeta SD en tu ordenador.

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

12. Expulsa la tarjeta SD e insértala en tu Wii.
    - La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.

13. En tu consola, ingresa al tablón de Wii.

14. Open the Wii Message Board.

15. Load the green letter with the Bob-omb icon.

    - Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
