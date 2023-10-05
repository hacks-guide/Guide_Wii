---
title: "str2hax"
---

{% include toc title="Table of Contents" %}

Nota che se il tuo ISP, o il tuo Ambiente di Rete, bloccano l'utilizzo di server DNS personalizzati, str2hax non funzionerà e dovresti [ scegliere un altro exploit da utilizzare](get-started).
{: .notice--warning}

Str2hax è un exploit che viene eseguito caricando l'EULA (Accordo di Licenza con l'Utente Finale) della console Wii. Richiede solamente una connessione a Internet che permette di cambiare i DNS sulla tua Wii.

### Requisiti

* Console Wii con connessione a Internet

### Istruzioni

#### Problemi comuni

Se ottieni l'EULA normale, il tuo ISP blocca l'uso di DNS personalizzati. Per favore [utilizza un altro exploit](get-started).
{: .notice--warning}

Se l'Hackmii Installer non viene caricato dopo più di 2 minuti, o ricevi un errore come `Hanging.` oppure `ERROR! if_config (ret = ...)`, riavvia la console Wii e riprova.
{: .notice--warning}

Se hai installato una mod come CTGP Revolution o Project+, str2hax potrebbe caricare quella al posto dell'exploit. Se succede, riavvia la console Wii, rimuovi la scheda SD e riprova.
{: .notice--warning}

#### Sezione I - Connessione

This exploit requires you to set your DNS in order to connect to a server that contains the exploit.

1. Power on your console.
1. Go to `Wii Options`.

    ![Wii Options](/images/riiconnect24/Internet_1.png)

1. Go to `Wii Settings`.

    ![Wii Settings](/images/riiconnect24/Internet_2.png)

1. Navigate to `Page 2` -> `Internet` -> `Connection Settings`.

    ![Internet](/images/riiconnect24/Internet_3.png)

    ![Connection Settings](/images/riiconnect24/Internet_4.png)

1. Click on your network connection slot and navigate to `Change Settings`.

    ![Current Connection](/images/riiconnect24/Internet_5.png)

    ![Change Settings](/images/riiconnect24/Internet_6.png)

1. Set `Auto-Obtain DNS` to `No`, then click `Advanced Settings`.

    ![Auto-Obtain DNS](/images/riiconnect24/Internet_7.png)

1. Set the Primary DNS to `18.188.135.9`.

    ![str2hax DNS](/images/exploits/str2hax/dns.png)

    If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.
    {: .notice--warning}

1. Click `Confirm`, then click `Save`.

    ![Save DNS](/images/riiconnect24/Internet_10.png)

1. When prompted, click `OK` to perform the connection test.

    ![Connection Test](/images/riiconnect24/Internet_11.png)

    ![Connection Test Successful](/images/riiconnect24/Internet_12.png)

    + If the connection test was successful, select `No` to skip the Wii System Update.
    + If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
    + If it is still unsuccessful, please [use another exploit](get-started).

#### Section II - Triggering the Exploit

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.
1. Select `Yes`.
1. Click on `Next`.
    + You should be greeted with the following screen:

    ![str2hax EULA page](/images/exploits/str2hax/EULA.png)

1. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).
1. If the exploit was successful, your device will have loaded the HackMii Installer.

    ![HackMii Installer scam screen](/images/hackmii/scam.png)

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}
