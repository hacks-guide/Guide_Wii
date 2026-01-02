# Extrair jogos do Wii/GameCube

This guide covers dumping GameCube or Wii game discs to a local SD card or USB drive on your Wii.

## Fazendo o backup do disco para SD/USB (CleanRip)

### Requirements

- Um cartão SD ou armazenamento USB com pelo menos 4.7 GB de espaço livre.
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparation

1. Power off your console.

2. Extract both apps to the root of your SD card or USB drive.

3. Copy the `apps` folder from the CleanRip `.zip` to the root of your SD card or USB drive.

4. Reinsira seu cartão SD ou armazenamento USB no seu console.

5. Power on your console.

6. Launch the Homebrew Channel, and launch the Load Priiloader app.

7. Abra CleanRip na lista de homebrews.

8. When prompted, select `Yes` to calculate disc checksums.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Selecione o dispositivo que você irá colocar o jogo - seu armazenamento USB ou cartão SD.

   ![](/images/homebrew/CleanRip/device.png)

10. Select the filesystem type of the device - in most cases it will be FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Ensure that your device is connected to the system and press A to proceed.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. When prompted, select `Yes` to download the redump.org DAT files.

    - Isto é necessário para garantir que os resultados do backup sejam limpos e precisos.

    ::: warning

    Você pode receber um "exception error" se você fizer isso. If so, restart your Wii and try again - but if you continue to get exception errors, dump the disc and verify the checksum in Dolphin instead if needed.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Insert the game disc you would like to dump, and press A to continue.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Dumping a Wii Disc

::: warning

If you get an unrecovered read error, ensure that the disc you are attempting to dump is clean and can be properly read by the console. Even though you may be able to play the game disc normally, you may still get this error. If the error persists, try to dump another disc and see if the same error happens.

:::

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Set the settings as shown on the screen below.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. Pressione A para começar o backup do disco.

   - This process can take quite some time, since it will dump all 4.7 GB of the DVD (8.5 GB for dual layer discs).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.

:::

## Dumping a GameCube Disc

::: info

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.

:::

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Pressione A para começar o backup do disco.

   - This process can take some time, since it will dump all 1.3 GB of the Mini DVD.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.

:::
