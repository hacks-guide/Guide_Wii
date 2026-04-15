# Dumpare giochi Wii/GameCube

Questa guida tratta il dumping dei dischi di gioco GameCube o Wii su una scheda SD locale o unità USB sul tuo Wii.

## Dump di un Disco su SD/USB (CleanRip)

### Requisiti

- Una scheda SD o unità USB con almeno 4.7 GB di spazio disponibile (8.5 GB per il dump di un disco a doppio strato).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparazione

1. Spegni la console.

2. Inserisci la scheda SD o unità USB nel tuo computer.

3. Copia la cartella `apps` dal `.zip` di CleanRip nella root della tua scheda SD o unità USB.

4. Reinserisci la scheda SD o unità USB nella console.

5. Accendi la console.

6. Avvia l'Homebrew Channel.

7. Avvia CleanRip dalla lista degli homebrew.

8. Quando richiesto, seleziona `Yes` per calcolare i checksum del disco.

   ![](/images/homebrew/CleanRip/checksum.png)

9. Seleziona il dispositivo su cui eseguirai il dump del gioco - un'unità USB o scheda SD.

   ![](/images/homebrew/CleanRip/device.png)

10. Selezionare il tipo di filesystem del dispositivo - nella maggior parte dei casi sarà FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

11. Assicurati che il tuo dispositivo sia connesso al sistema e premi A per procedere.

    ![](/images/homebrew/CleanRip/insertdevice.png)

12. Quando richiesto, seleziona `Yes` per scaricare i file DAT da redump.org.

    - Questo è richiesto per assicurarsi che i dump siano puliti/accurati.

    ::: warning

    Potresti ottenere un errore se lo fai. In tal caso, riavvia la console Wii e riprova - ma se gli errori persistono, effettua il dump del disco e verifica il checksum su Dolphin se necessario.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

13. Inserisci il disco di gioco da cui effettuare il dump e premi A per continuare.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Dump di un disco Wii

::: warning

Se ottieni un errore di lettura non recuperato, assicurati che il disco su cui si esegue il dump sia pulito e più essere propriamente letto dalla console. Anche se potresti avviare il disco normalmente, potresti sempre ottenere questo errore. Se l'errore persiste, prova a eseguire il dump su un altro disco e controlla se ottieni lo stesso errore.

:::

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. Se non sei sicuro, seleziona `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Imposta le impostazioni come mostrate nella schermata sotto.

   ![](/images/homebrew/CleanRip/wiisettings.png)

3. Premi A per iniziare il dump del disco.

   - Questo processo può metterci un bel po' di tempo, siccome farà il dump di tutti i 4.7 GB del disco (8.5 GB per i dischi a doppio strato).

   ![](/images/homebrew/CleanRip/wiiprogress.png)

4. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Procedi a [gestire i backup di Wii e GameCube](backups#joining-part-files-from-a-wii-disc-on-a-fat32-device) per unire i file PART ottenuti e gestire i tuoi giochi dumpati.

:::

## Dump di un disco GameCube

::: info

Wii Family Edition, Wii mini e vWii di Wii U sono incapaci di dumpare giochi GameCube. La versione Family Edition può dumpare giochi GameCube se il lettore dischi è sostituito con uno di una console Wii originale.

:::

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. Se non sei sicuro, seleziona `No`.

   ![](/images/homebrew/CleanRip/dateldisc.png)

2. Premi A per iniziare il dump del disco.

   - Questo processo può richiedere un po' di tempo, siccome farà il dump di tutti i 1.3 GB del Mini DVD.

   ![](/images/homebrew/CleanRip/gcprogress.png)

3. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

   ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

---

::: tip

Procedi a [gestire i backup di Wii e GameCube](backups#using-tinywiibackupmanager) per ridurre le dimensioni del file ottenuto e gestire i tuoi giochi dumpati.

:::
