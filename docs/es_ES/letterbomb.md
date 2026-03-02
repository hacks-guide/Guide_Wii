# Donaciones

LetterBomb es un exploit para la Wii que se activa mediante el tablón de Wii.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.

:::

::: warning

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!

:::

## Requirements

- An SD card formatted as FAT32 that is 32GB or less
- Una Wii con la versión del sistema 4.3
- A Windows/macOS/Linux computer with an Internet connection

## Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Also, ensure that you are on System Menu version 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Expulsa la tarjeta SD e insértala en tu Wii.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Cut either wire.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Inserta tu tarjeta SD en tu ordenador.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. Expulsa la tarjeta SD e insértala en tu Wii.
    - La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.

13. En tu consola, ingresa al tablón de Wii.

14. Launch the Wii Message Board.

15. Open the red letter with a bomb.
    - Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. En caso de recibir un error, es posible que haya un problema con el formato de la tarjeta SD o el lector de tarjetas SD de la consola.
    - Si el sistema se congela después de seleccionar la carta, es probable que hayas elegido la región incorrecta al momento de descargar los archivos del exploit. Repite el paso 2 al comienzo de la guía y selecciona la región correcta, luego continúa con el resto de pasos.
    - If all is correct and there is freezing, keep on trying until it works.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
