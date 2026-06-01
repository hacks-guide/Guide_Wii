---
outline: false
---

# Creating a NAND Backup (Wii)

In order to protect your Wii from permanant bricks, this guide will instruct you on how to create a NAND backup. Most users will want to select **nanddumper@ios**, with **BootMii** as a backup option for users that can use an SD card.

:::details Importing NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Abra o emulador Dolphin.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

Note that you will need to rename your NAND dump to the files above if you used **nanddumper@ios**, as described in the below section.

:::

::::: tabs

::::tab nanddumper@ios (dump to USB drive or SD card)

On Wii consoles with a usable USB port or SD card slot, nanddumper@ios allows for backing up your Wii's NAND storage. nanddumper@ios is recommended over BootMii due to its quicker speed in creating a NAND backup. This section will guide you through the process to back up your Wii's NAND, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, four files will have been created in the directory `/wii/backups` on your USB drive. `DATE_SERIAL_nand_XX.bin` is your NAND backup, and `SERIAL_keys.bin` is the file containing your console keys. `DATE_SERIAL_nand_XX.bin.sha1` and `sha1sums.txt` respectively are files containing checksums to verify the integrity of your backups, and will not be used in an actual NAND restoration.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives. You can ONLY use BootMii to restore a NAND backup if you have a usable SD card slot, as described below.

- If you are a Wii mini user or DO NOT have a usable SD card slot, you will be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires an SD card slot to read the NAND from.

- If you DO NOT have a usable GameCube controller port, you will also be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires a GameCube controller port to enter the Konami code with for consoles that do not have BootMii as boot2.

:::

## Requisitos

- A USB drive or SD card formatted as FAT32, with a minimum 512MB of free space (1GB or more recommended)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Passos:

1. Download the recommended `.zip` file from the Open Shop Channel website.

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive.

3. Insert the SD card or USB drive into your Wii, and start the Homebrew Channel. Press `1` and ensure that the device you are using is selected, and then open nanddumper@ios.

   - If you get an **Exception IOS occurred!** error, simply restart your Wii and try again.

   ![](/images/nanddumper@ios/select-hbc.png)

4. nanddumper@ios will start and dump your console keys upon opening, if they are not already on your drive. Press any button that is NOT the `HOME`, `START`, or `EJECT` buttons to begin dumping your console's NAND storage.
   - If you get a **No storage devices are attached** error, ensure that your SD card or USB drive is directly connected to your Wii. If using a USB drive, it should NOT be connected to a USB hub.
   ![](/images/nanddumper@ios/dump-startup.png)

5. Your console's NAND will now begin dumping. Please wait for the NAND dump to finish before proceeding.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Once the NAND backup has concluded, press any button to exit nanddumper@ios. Your NAND backup and console keys will be output to your USB drive in directory `/wii/backups/`.

   ![](/images/nanddumper@ios/dump-complete.png)

7. On your computer, ensure that you rename `DATE_SERIAL_nand_XX.bin` to `nand.bin`, and `SERIAL_keys.bin` to `keys.bin`. This ensures that BootMii can properly parse your NAND backup in the event that it needs to be restored.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. É especialmente importante para os usuários do BootMii na IOS.

If you are on Wii mini, this is your primary means of brick protection.

:::

::::

::::tab BootMii (backup method)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis CANNOT restore NAND backups without hardware modification. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração.

:::

::: danger

**Important Warnings**

- This is intended to be a backup option, as BootMii is slower than nanddumper@ios. You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the nanddumper@ios guide instead.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- BootMii cannot be used on the Wii mini without hardware modification. Use **nanddumper@ios** if you are a Wii mini user.

:::

## Requisitos

- Um cartão SD com pelo menos 512MB de espaço livre
- [BootMii](hbc)

## Passos:

1. Ligue o seu console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Pressione o botão HOME, depois selecione "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Você deve ver uma imagem semelhante ao abaixo agora na sua tela:

   ![](/images/bootmii/BootMii_Main.png)

5. Selecione o botão Options (o ícone com as engrenagens).

   ![](/images/bootmii/BootMii_Gears.png)

6. Selecione o primeiro botão à esquerda.

   ![](/images/bootmii/BootMii_Backup.png)

7. Um backup da NAND será iniciado. Você pode acompanhar o progresso na tela.

   - "Bad Blocks" são normais. Não se preocupe quando você ver um em uma backup da NAND.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Depois desta etapa, o backup irá ser verificado. Idealmente, todos os blocos devem ser verdes após o processo de verificação.

   - Se você tem bad blocks de fábrica com páginas incorretas, esses blocks podem não ser verificados. Desde que todos os blocos não-ruins sejam verificados com êxito, isso deverá ficar bem.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Pressione o botão Voltar (o botão com uma seta), então pressione o botão de Menu do Wii ou o botão do Homebrew Channel para sair do BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. É especialmente importante para os usuários do BootMii na IOS.

:::

::::

:::::
