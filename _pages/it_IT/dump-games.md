---
title: "Dump di Giochi Wii/GameCube"
---

{% include toc title="Table of Contents" %}

Questa guida tratta il dumping dei dischi di gioco GameCube o Wii su una scheda SD locale o unità USB sul tuo Wii.

### Dump di un Disco su SD/USB (CleanRip)

#### Requisiti

+ Una scheda SD o unità USB con almeno 4.7 GB di spazio disponibile (8.5 GB per il dump di un disco a doppio strato).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Preparazione

1. Spegni la console.
1. Inserisci la scheda SD o dispositivo USB nel tuo computer.
1. Copia la cartella `apps` dal `.zip` di CleanRip al root della tua scheda SD o unità USB.
1. Reinserisci la tua scheda SD o dispositivo USB nella tua console.
1. Accendi la console.
1. Avvia l'Homebrew Channel.
1. Avvia CleanRip dalla lista degli homebrew.
1. Quando richiesto, seleziona `Yes` per calcolare i checksum del disco.

    ![](/images/homebrew/CleanRip/checksum.png)

1. Seleziona il dispositivo su cui eseguirai il dump del gioco - unità USB o scheda SD.

    ![](/images/homebrew/CleanRip/device.png)

1. Selezionare il tipo di filesystem del dispositivo - nella maggior parte dei casi sarà FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Assicurati che il tuo dispositivo sia connesso al sistema e premi A per procedere.

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. Quando richiesto, seleziona `Yes` per scaricare i file DAT di redump.org.
    + Questo è richiesto per assicurarsi che i dump siano puliti/accurati.

    Potresti ottenere un errore se lo fai. In tal caso, riavvia il Wii e riprova - ma se gli errori di errore di eccezzione persistono, effettua il dump del disco e verifica il checksum su Dolphin se necessario.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Inserisci il disco di gioco da cui effettuare il dump e premi A per continuare.

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Dump di un Disco Wii

A partire dalla v2.1.2 di CleanRip, c'è un'opzione che rileva automaticamente se il disco è a doppio strato o meno. Se si è su una versione precedente, o semplicemente desider verificare che l'opzione selezionata sia corretta, puoi controllare [questa lista](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) per vedere se il tuo gioco è un disco a doppio strato.
{: .notice--info}

Se ottieni un errore di lettura non recuperato, assicurati che il disco su cui si esegue il dumping sia pulito e più essere propriamente letto dalla console. Anche se potresti avviare il disco normalmente, potresti sempre ottenere questo errore. Se l'errore persiste, prova ad eseguire il dumping su un altro disco e controlla se si ottiene lo stesso errore.
{: .notice--warning}

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. Se si è incerti, seleziona `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Regola le impostazioni come mostrato sotto, nel frattempo verifica se il disco è a doppio strato o no.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Premi A per iniziare il dump del disco.
    + Questo processo può metterci un bel po' di tempo, siccome farà il dump di tutti i 4.7 GB del disco (8.5 GB per i dischi a doppio strato).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

Procedere a [Gestire i backup Wii](wii-backups) per unire i file PART che sono in uscita e gestire i tuoi giochi eseguiti con il dump.
{: .notice--info}

### Dump di un Disco GameCube

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.
{: .notice--info}

1. Quando richiesto, seleziona se il tuo disco è un disco Datel senza licenza. Se si è incerti, seleziona `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Premi A per iniziare il dump del disco.
    + Questo processo può richiedere un po' di tempo, siccome farà il dump di tutti i 1.3 GB del Mini DVD.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. Una volta finito il dump, dovresti vedere una schermata con il checksum MD5 del disco, in confronto al DAT di Redump se è stato attivato.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

Procedi a [Gestire i backup GameCube](gc-backups) per ridurre le dimensioni del tuo file di output e gestire i tuoi giochi eseguiti con il dump.
{: .notice--info}
