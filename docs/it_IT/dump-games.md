# Dump dei giochi Wii/GameCube

Questa guida spiega come eseguire il dump dei dischi di gioco GameCube o Wii su una scheda SD locale o su un'unità USB.

## Dump di un disco su SD/USB (CleanRip)

### Requisiti

- Una scheda SD o un'unità USB con almeno 4,7 GB di spazio libero (8,5 GB per il dump di un disco a doppio strato).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparazione

1. Spegni la console.

2. Inserisci la scheda SD o l'unità USB nel computer.

3. Copia la cartella `apps` dal `.zip` di CleanRip nella root della scheda SD o dell'unità USB.

4. Reinserisci la scheda SD o l'unità USB nella console.

5. Accendi la console.

6. Avvia l'Homebrew Channel.

7. Avvia CleanRip dalla lista degli homebrew.

8. Quando richiesto, seleziona `Yes` per calcolare i checksum del disco.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Seleziona il dispositivo su cui eseguire il dump del gioco: un'unità USB o una scheda SD.

   ![](/images/homebrew/CleanRip/device.png)

10. Seleziona il tipo di filesystem del dispositivo: nella maggior parte dei casi sarà FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Assicurati che il dispositivo sia connesso al sistema e premi A per procedere.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. Quando richiesto, seleziona `Yes` per scaricare i file DAT da redump.org.

    - Ciò è necessario per assicurarsi che i dump siano puliti e accurati.

    ::: warning

    Potresti ricevere un errore se lo fai. In tal caso, riavvia la console e riprova. Se gli errori persistono, effettua il dump del disco e verifica il checksum con Dolphin, se necessario.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Inserisci il disco di gioco da cui effettuare il dump e premi A per continuare.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Dump di un disco Wii

::: warning

Se ricevi un errore di lettura non recuperabile, assicurati che il disco su cui esegui il dump sia pulito e che la console riesca a leggerlo correttamente. Potresti comunque ricevere questo errore anche se entrambi i casi sono veri. Se l'errore persiste, prova a eseguire il dump su un'altra unità e controlla se ricevi lo stesso errore.

:::

1. Quando richiesto, seleziona se il tuo disco è un Datel senza licenza. Se non sei sicuro, seleziona `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Imposta le impostazioni come mostrate nella schermata sotto.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. Premi A per iniziare il dump del disco.

   - Questo processo può richiedere un bel po' di tempo, siccome farà il dump di tutti i 4,7 GB del DVD (o 8,5GB per quelli a doppio strato).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Una volta terminato il dump, dovresti vedere una schermata con il checksum MD5 del disco, a confronto con il DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Procedi a [gestire i backup Wii e GameCube](backups#joining-part-files-from-a-wii-disc-on-a-fat32-device) per unire i file PART ottenuti e gestire i dump.

:::

## Dump di un disco GameCube

::: info

Wii Family Edition, Wii mini e la vWii di Wii U non possono effettuare dump di giochi GameCube. La Family Edition può effettuare dump di giochi GameCube se il lettore dischi è sostituito con uno Wii originale.

:::

1. Quando richiesto, seleziona se il tuo disco è un Datel senza licenza. Se non sei sicuro, seleziona `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Premi A per iniziare il dump del disco.

   - Questo processo può richiedere un po' di tempo, siccome farà il dump di tutti i 1,3 GB del Mini DVD.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Una volta terminato il dump, dovresti vedere una schermata con il checksum MD5 del disco, a confronto con il DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

---

::: tip

Procedi a [gestire i backup Wii e GameCube](backups#using-tinywiibackupmanager) per ridurre le dimensioni del file ottenuto e gestire i dump.

:::
