# str2hax

::: warning

Though str2hax allows you to install the Homebrew Channel on a Wii without an SD card, other vital steps later on (such as installing BootMii) still require an SD card.

::: warning

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).

:::

Str2hax è un exploit che viene eseguito caricando l'EULA (Accordo di Licenza con l'Utente Finale) della console Wii. Richiede solamente una connessione a Internet che permette di cambiare i DNS sulla tua Wii.

::: warning

Se hai installato una mod come CTGP Revolution o Project+, str2hax potrebbe caricare quella al posto dell'exploit. Se succede, riavvia la console Wii, rimuovi la scheda SD e riprova.

:::

## Requirements

- Una console Wii con connessione a Internet

## Instructions

### Sezione I - Connessione

Questo exploit richiede di reimpostare il tuo DNS in modo da connettersi a un server che contiene i dati dell'exploit.

1. Power on your console.

2. Go to `Wii Options`.

    ![](/images/riiconnect24/Internet_1.png)

3. Go to `Wii Settings`.

    ![](/images/riiconnect24/Internet_2.png)

4. Navigate to `Page 2` -> `Internet` -> `Connection Settings`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

5. Click on your network connection slot and navigate to `Change Settings`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

6. Set `Auto-Obtain DNS` to `No`, then click `Advanced Settings`.

    ![](/images/riiconnect24/Internet_7.png)

7. Set the Primary DNS to `3.143.163.250`.

    ![](/images/exploits/str2hax/dns.png)

    ::: warning

    If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.

    :::

8. Click `Confirm`, then click `Save`.

    ![](/images/riiconnect24/Internet_10.png)

9. When prompted, click `OK` to perform the connection test.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    - If the connection test was successful, select `No` to skip the Wii System Update.
    - If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
    - If it is still unsuccessful, please [use another exploit](get-started).

### Sezione II - Attivazione dell'Exploit

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.

2. Select `Yes`.

3. Click on `Next`.

    - Dovrebbe apparire la seguente schermata:

    ![](/images/exploits/str2hax/EULA.png)

    - Se ottieni l'EULA normale, il tuo ISP blocca l'uso di DNS personalizzati. Try another connection, or [use another exploit](get-started).

4. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).

5. If the exploit was successful, your device will have loaded the HackMii Installer.

    ![](/images/hackmii/scam.png)

    - If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
