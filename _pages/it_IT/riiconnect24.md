---
title: "RiiConnect24"
---

{% include toc title="Table of Contents" %}

Per il supporto (in inglese) per RiiConnect 24, assieme a RiiTag, entra nel [server Discord di RiiConnect24](https://discord.gg/rc24).
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) ti consente di usare i servizi di WiiConnect24 interrotti, che comprendono Canale Meteo, Notizie, Vota Anche Tu, Nintendo, Concorsi Mii e Wii Mail.

Si consiglia di impostare l'ora del tuo Wii a quella attuale prima di procedere. Segui [questo tutorial](rtc) per impostarla.
{: .notice--warning}

NON INSTALLARE RIICONNECT24 SU UN WII MINI! Non funzionerà e brickerà il sistema.
{: .notice--danger}

### Requisiti

Se sei su vWii, avrai anche bisogno di [Priiloader](priiloader) installato con gli hack per WC24.
{: .notice--primary}

+ Una scheda SD o dispositivo USB
+ Una console Wii con connessione a Internet
+ Un PC con connessione a Internet
+ [RiiConnect24 Patcher (Windows, Mac e Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Istruzioni

#### Sezione I - Utilizzo di RiiConnect24 Patcher

1. Fare clic sul link qui sopra per entrare nella pagina GitHub del patcher.
1. Scarica `RiiConnect24Patcher.bat` se sei su Windows e `RiiConnect24Patcher.sh` se sei su un sistema macOS/Linux.
1. Esegui il RiiConnect24 Patcher.
    + Su Windows, esegui `RiiConnect24Patcher.bat`.
    + Su sistemi macOS/Linux, apri il Terminale e digita `bash`, quindi trascina `RiiConnect24Patcher.sh` nel Terminale e premi Invio. Dovrebbe apparire così: `bash <directory>/<directory>/RiiConnect24Patcher.sh`.
1. Premi 1 per scegliere "`Inizia`" e conferma la tua scelta premento `INVIO`.

    ![](/images/riiconnect24/patcher/1.JPG)

1. Seleziona il dispositivo che vuoi patchare.

    ![](/images/riiconnect24/patcher/2.JPG)

1. Per questa guida, scegli "`Installa RiiConnect24 sulla tua Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. Scegli "`Express (Consigliato)`". Ti scaricherà tutto ciò che hai bisogno.

    ![](/images/riiconnect24/patcher/4.JPG)

1. Seleziona la tua regione.

    ![](/images/riiconnect24/patcher/5.JPG)

1. Dato che ci sei, RiiConnect24 Patcher può anche scaricare alcuni canali facoltativi che non utilizzano RiiConnect24. `[X]` rappresenta le opzioni selezionate. Basta premere 5 e `ENTER` se non sei interessato.

    ![](/images/riiconnect24/patcher/6.JPG)

1. Inserisci la tua scheda SD o unità USB al tuo computer e seleziona "`1`".

    ![](/images/riiconnect24/patcher/7.JPG)

1. Se il tuo dispositivo è stato rilevato correttamente, premi "`1`". In caso contrario, assicurati che la tua scheda SD o unità USB contenga una cartella chiamata `apps` e riprova.

    ![](/images/riiconnect24/patcher/8.JPG)

1. Ora il patcher scaricherà le app - si prega di attendere.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Una volta raggiunta una schermata che dice `Patching finito`, puoi chiudere il patcher. Tutti i file dovrebberero già essere nella scheda SD.

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. Nel caso non abbia copiato tutto nella tua scheda SD o unità USB automaticamente, copia le cartelle `WAD` e `apps` accanto al `RiiConnect24Patcher.bat` o `RiiConnect24Patcher.sh` alla tua scheda SD o unità USB.

#### Sezione II - Installazione dei file WAD

Se stai usando Dolphin, hai concluso la guida. Installa i WAD andando su `Strumenti -> Installa WAD` nella finestra di Dolphin.
{: .notice--primary}

Ora installerai gli IOS e WAD dei canali patchati che sono richiesti per l'utilizzo di RiiConnect24.

1. Estrai il file YAWM ModMii Edition `.zip` e copia la cartella `apps` nella tua scheda SD o unità USB.
1. Inserisci la scheda SD o unità USB nel tuo Wii.
1. Avvia l'Homebrew Channel sul tuo Wii.
1. Avvia YAWM ModMii Edition.
1. Seleziona il dispositivo su cui hai messo i file di RiiConnect24.
1. Evidenzia tutti i WAD nella cartella `wad` e premi + su ciascuno di loro per selezionarli. Una volta che tutti i WAD sono selezionati, premi A due volte per installare i WAD.
1. Una volta completata la loro installazione, premi il pulsante HOME per ritornare all'Homebrew Channel.

#### Sezione III - Patching di nwc24msg.cfg

Ora patcherai il file `nwc24msg.cfg` che è richiesto per l'utilizzo di Wii Mail.

1. Avvia il RiiConnect24 Mail Patcher.
1. Dovrebbe metterci pochi secondi ad eseguire il patch del tuo nwc24msg.cfg. Una volta finito, premi il pulsante HOME per uscire.

#### Sezione IV - Connessione a RiiConnect24

A partire dall'`1 giugno 2023`, il vecchio server DNS `164.132.44.106` è stato deprecato è non è più possibile utilizzarlo.
{: .notice--warning}

Se stai ricevendo errori tipo `WiiConnect24 e il Canale Wii Shop attualmente non sono disponibili nel tuo paese`, vai su Impostazioni console Wii -> Ultima pagina -> Paese e cambialo in Regno Unito. Questo errore appare quando si utilizza un paese non supportato da RiiConnect24.
{: .notice--warning}

Se ottieni l'errore 107245, non hai installato l'IOS patchato.<br> Se ottieni l'errore 220602, apri [questa](faq#for-riiconnect24-users) pagina.<br> Se ottieni l'errore 107304, apri [questa](faq#for-riiconnect24-users-1) pagina.<br>
{: .notice--warning}

Ora imposterai i tuoi DNS ai server RiiConnect24. Questo è facoltativo ma consigliato, poiché migliora l'utilizzo di RiiConnect24 e Wiimmfi rendendo disponibili alcune altre funzionalità.

1. Vai su `Opzioni Wii`.
1. Vai sulle `Impostazioni console Wii`.
1. Vai alla `pagina 2`, quindi clicca su `Internet`.
1. Vai sulle `Impostazioni di collegamento`.
1. Seleziona la tua connessione attuale.
1. Vai su `Modifica`.
1. Vai su `Ottieni automaticamente DNS` (non indirizzo IP) e seleziona `No`, poi `Impostazioni avanzate`.
1. Inserisci `167.86.108.126` come DNS primario.
1. Inserisci `1.1.1.1` come DNS secondario.
1. Seleziona `Conferma`, poi seleziona `Salva`.
1. Seleziona `OK` per eseguire la prova di connessione.
1. Se la prova di connessione è andata a buon fine, seleziona `No` per rifiutare l'aggiornamento di sistema.
1. Vai su `WiiConnect24`e poi di nuovo `WiiConnect24` e assicurati che sia abilitato.
1. Tornando al menu di WiiConnect24, vai su `Connessione standby` e assicurati che l'opzione è attivata.
1. Su `Illuminazione slot disco`, si consiglia di impostare la luminosità su `Normale` o `Forte`, ma questo è facoltativo.
1. Infine, vai alla sezione `Internet`, `Accordi utente` o `Accordo/Contatto`, e poi `Sì`. Si prega di leggerlo attentamente.

[Ritorna a WiiConnect24](wiiconnect24)
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
