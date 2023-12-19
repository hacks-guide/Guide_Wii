---
title: "Riivolution"
---

{% include toc title="Table of Contents" %}

Questa è una guida rapida per iniziare a usare Riivolution, un patcher di dischi al volo per Wii che viene utilizzato per giocare alle mod di giochi Wii.

Se vuoi utilizzare Riivolution su un Wii mini, è necessario saldare una scheda Wi-Fi e installare gli IOS di Wii.
{: .notice--warning}

Riivolution richiede un lettore disco funzionante e una copia fisica pulita del disco con cui eseguire le mod. I dischi graffiati possono o non possono funzionare.
{: .notice--info}


### Requisiti

* Un Wii
* Un'unità USB o una scheda SD
* I file della mod desiderata
* Una copia fisica pulita alla quale la mod è destinata
* Un lettore disco funzionante
* [Riivolution](https://oscwii.org/library/app/riivolution)

### Preparazione dei file

1. Estrai Riivolution e inseriscilo nella cartella `apps` della tua scheda SD o unità USB.
1. Estrai i file della mod sulla SD o USB secondo il diagramma riportato in basso. A seconda della mod che hai scaricato, la struttura dei file può o non può essere già corretta.
1. Inserisci la tua scheda SD o unità USB nel tuo Wii e avvia Riivolution dall'Homebrew Channel.
1. Inserisci il disco di gioco nel tuo Wii.
    + Passaggio facoltativo: è possibile installare il canale forwarder ufficiale di Riivolution al Menu Wii selezionando l'opzione Install a destra. Questo toglierà il bisogno di dover entrare nell'Homebrew Channel ogni volta che tu vuoi avviare Riivolution.
1. Attiva la mod e seleziona Launch. A seconda della mod, potresti avere diverse opzioni.

Presta attenzione alla regione per la quale la mod è destinata. NTSC è per gli USA e Giappone, mentre PAL è per l'Europa e la Corea.
{: .notice--info}

### Struttura dei file

Ogni mod per Riivolution è diversa, e in base a quale mod scegli, può includere più o meno i file riportati in questo diagramma.
{: .notice--info}

Non confonderti con la vera e propria app Riivolution e con la cartella Riivolution che va sul root.
{: .notice--info}

<details id="Riivolution-Files" class="notice--info" markdown="1">
<summary><a>Clicca qui per una struttura di file di esempio.</a></summary>

```
💾sd:
 ┣ 📂apps
 ┃ ┗ 📂Riivolution
 ┃      ┣ 📜boot.dol
 ┃      ┣ 📜icon.png
 ┃      ┗ 📜meta.xml
 ┣ 📂Riivolution
 ┃  ┣ 📂config
 ┃  ┃  ┗ 📜name.xml
 ┃  ┗ 📜name.xml
 ┗ 📂FileGioco
```
</details>

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
