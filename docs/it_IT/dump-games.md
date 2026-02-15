# Dumping Wii/GameCube Games

Questa guida tratta il dumping dei dischi di gioco GameCube o Wii su una scheda SD locale o unità USB sul tuo Wii.

## Dump di un Disco su SD/USB (CleanRip)

### Requirements

- Una scheda SD o unità USB con almeno 4.7 GB di spazio disponibile (8.5 GB per il dump di un disco a doppio strato).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparazione

1. Power off your console.

2. Inserisci la scheda SD o dispositivo USB nel tuo computer.

3. Copy the `apps` folder from the CleanRip `.zip` to the root of your SD card or USB drive.

4. Reinserisci la tua scheda SD o dispositivo USB nella tua console.

5. Power on your console.

6. Avvia l'Homebrew Channel.

7. Avvia CleanRip dalla lista degli homebrew.

8. When prompted, select `Yes` to calculate disc checksums.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Seleziona il dispositivo su cui eseguirai il dump del gioco - unità USB o scheda SD.

   ![](/images/homebrew/CleanRip/device.png)

10. Selezionare il tipo di filesystem del dispositivo - nella maggior parte dei casi sarà FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Assicurati che il tuo dispositivo sia connesso al sistema e premi A per procedere.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. When prompted, select `Yes` to download the redump.org DAT files.

    - Questo è richiesto per assicurarsi che i dump siano puliti/accurati.

    ::: warning

    Potresti ottenere un errore se lo fai. In tal caso, riavvia il Wii e riprova - ma se gli errori di errore di eccezzione persistono, effettua il dump del disco e verifica il checksum su Dolphin se necessario.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Inserisci il disco di gioco da cui effettuare il dump e premi A per continuare.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Dump di un Disco Wii

::: warning

Se ottieni un errore di lettura non recuperato, assicurati che il disco su cui si esegue il dumping sia pulito e più essere propriamente letto dalla console. Anche se potresti avviare il disco normalmente, potresti sempre ottenere questo errore. Se l'errore persiste, prova ad eseguire il dumping su un altro disco e controlla se si ottiene lo stesso errore.

:::

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Set the settings as shown on the screen below.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. Premi A per iniziare il dump del disco.

   - Questo processo può metterci un bel po' di tempo, siccome farà il dump di tutti i 4.7 GB del disco (8.5 GB per i dischi a doppio strato).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Proceed to [Managing Wii and GameCube Backups](backups#joining-part-files-from-a-wii-disc-on-a-fat32-device) to join the PART files that are output, and manage your dumped games.

:::

## Dump di un Disco GameCube

::: info

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.

:::

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. If unsure, select `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Premi A per iniziare il dump del disco.

   - Questo processo può richiedere un po' di tempo, siccome farà il dump di tutti i 1.3 GB del Mini DVD.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

Proceed to [Managing Wii and GameCube Backups](backups#using-tinywiibackupmanager) to shrink the size of your output file, and manage your dumped games.

:::
