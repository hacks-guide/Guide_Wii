---
title: "str2hax"
---

{% include toc title="Table of Contents" %}

Nota che se il tuo ISP, o il tuo Ambiente di Rete, bloccano l'utilizzo di server DNS personalizzati, str2hax non funzionerà e dovresti [ scegliere un altro exploit da utilizzare](get-started).
{: .notice--warning}

Str2hax è un exploit che viene eseguito caricando l'EULA (Accordo di Licenza con l'Utente Finale) della console Wii. Richiede solamente una connessione a Internet che permette di cambiare i DNS sulla tua Wii.

Se hai installato una mod come CTGP Revolution o Project+, str2hax potrebbe caricare quella al posto dell'exploit. Se succede, riavvia la console Wii, rimuovi la scheda SD e riprova.
{: .notice--warning}

### Requisiti

* Console Wii con connessione a Internet

### Istruzioni

#### Sezione I - Connessione

Questo exploit richiede di reimpostare il tuo DNS in modo da connettersi a un server che contiene i dati dell'exploit.

1. Accendi la console.
1. Vai su `Opzioni Wii`.

    ![](/images/riiconnect24/Internet_1.png)

1. Vai su `Impostazioni Console Wii`.

    ![](/images/riiconnect24/Internet_2.png)

1. Naviga su `Pagina 2`-> `Internet` -> `Impostazioni di Connessione`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Clicca sul tuo slot connessione corrente, e vai su `Modifica Impostazioni`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Imposta `Ottieni DNS Automaticamente` su `No`, poi clicca su `Impostazioni Avanzate`.

    ![](/images/riiconnect24/Internet_7.png)

1. Imposta il DNS Primario a `18.188.135.9`.

    ![](/images/exploits/str2hax/dns.png)

    Se ci sono 3 campi invece di 2 (come sopra), torna indietro e assicurati di essere nella pagina `Ottieni DNS Automaticamente`.
    {: .notice--warning}

1. Seleziona `Conferma`, poi seleziona `Salva`.

    ![](/images/riiconnect24/Internet_10.png)

1. Nella schermata che segue, clicca su `OK` per eseguire la prova di connessione.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + Se la prova di connessione è andata a buon fine, seleziona `No` per rifiutare l'aggiornamento di sistema.
    + Se la prova di connessione fallisce con un codice di errore nella forma `521xx`, torna indietro e verifica di avere inserito il DNS corretto.
    + Se il DNS è corretto e la prova continua a fallire, per favore [utilizza un altro exploit](get-started).

#### Sezione II - Attivazione dell'Exploit

1. Naviga su `Internet` -> `Accordi Utente` oppure `Accordi/Contratto`.
1. Seleziona `Si`.
1. Clicca su `Continua`.
    + Dovrebbe apparire la seguente schermata:

    ![](/images/exploits/str2hax/EULA.png)

    + Se ottieni l'EULA normale, il tuo ISP blocca l'uso di DNS personalizzati. Try another connection, or [use another exploit](get-started).

1. Dai all'exploit 1-2 minuti per scaricare i file necessari (e non premere `ACCETTO`/`NON ACCETTO`).
1. Se l'exploit è andato a buon fine, ti ritroverai dentro l'HackMii Installer.

    ![](/images/hackmii/scam.png)

    + Se l'Hackmii Installer non viene caricato dopo più di 2 minuti, o ricevi un errore come `Hanging.` oppure `ERROR! if_config (ret = ...)`, riavvia la console Wii e riprova.

[Prosegui all'Installazione del Canale Homebrew e di Bootmii](hbc)
{: .notice--info}
