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
- Um Wii pelo menos na versão 3.0

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

5. Anote seu endereço MAC INTEIRO.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. executar Wilbrand no Linux

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Corte qualquer "wire".

   ![](/images/exploits/wilbrand/web.png)

10. Click on "Download your .zip".

11. 1 Insira seu cartão SD no seu computador.

12. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.

13. 1 Pegue seu cartão SD e insira-o no seu Wii.
    - - O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.

14. Menu do Wii do LetterBomb

15. Open the Wii Message Board.

16. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

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

- Um PC executando Windows, MacOS ou Linux
- An SD card [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Um Wii pelo menos na versão 3.0
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

5. Anote seu endereço MAC INTEIRO.

   ![](/images/wii/MacAddress.png)

6. Copy all files from the Wilbrand `.zip` to a folder on your computer

7. 1 Insira seu cartão SD no seu computador.

8. Abra um terminal dentro da pasta que Wilbrand foi extraído para.

9. Usando a versão do seu Wii e MAC address, execute o seguinte comando:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` is the drive letter of your SD card.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` is the folder your SD card is mounted in. Isso talvez mude de acordo com a sua distro do Linux.

     ![](/images/exploits/wilbrand/linux.png)

10. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.

11. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.

12. 1 Pegue seu cartão SD e insira-o no seu Wii.
    - - O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.

13. Menu do Wii do LetterBomb

14. Open the Wii Message Board.

15. Open the green letter with a bomb.

    - Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    - If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::::

:::::
