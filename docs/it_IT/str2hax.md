# str2hax

::: warning

Anche se str2hax consente di installare l'Homebrew Channel su Wii senza una scheda SD, altri passaggi vitali in seguito (come l'installazione di BootMii) ne richiedono.

::: warning

Nota che se il tuo ISP o l'ambiente di rete bloccano l'utilizzo di server DNS personalizzati, str2hax non funzionerà e dovresti [scegliere un altro exploit](get-started).

:::

str2hax è un exploit che viene eseguito caricando l'EULA (Accordo di Licenza con l'Utente Finale) della console Wii. Richiede semplicemente una connessione a Internet che permette di cambiare i DNS su Wii.

::: warning

Se hai installato una mod come CTGP Revolution o Project+, str2hax potrebbe caricare quella al posto dell'exploit. Se succede, riavvia la console Wii e riprova con la scheda SD rimossa.

:::

## Requisiti

- Una console Wii con connessione a Internet

## Istruzioni

### Sezione I - Connessione

Questo exploit richiede di reimpostare il tuo DNS in modo da connettersi a un server che contiene i dati dell'exploit.

1. Accendi la console.

2. Vai su `Opzioni Wii`.

   ![](/images/riiconnect24/Internet_1.png)

3. Vai su `Impostazioni console Wii`.

   ![](/images/riiconnect24/Internet_2.png)

4. Naviga su `Impostazioni console Wii 2` > `Internet` > `Impostazioni di collegamento`.

   ![](/images/riiconnect24/Internet_3.png)

   ![](/images/riiconnect24/Internet_4.png)

5. Clicca sulla connessione che usi, poi `Modifica`.

   ![](/images/riiconnect24/Internet_5.png)

   ![](/images/riiconnect24/Internet_6.png)

6. Imposta `Ottieni automaticamente DNS` su `No`, poi clicca `Impostazioni avanzate`.

   ![](/images/riiconnect24/Internet_7.png)

7. Imposta il DNS primario a `3.143.163.250`.

   ![](/images/exploits/str2hax/dns.png)

   ::: warning

   Se ci sono 3 campi invece di 2 (come sopra), torna indietro e assicurati di essere nella pagina `Ottieni automaticamente DNS`.

   :::

8. Clicca `Conferma`, poi `Salva`.

   ![](/images/riiconnect24/Internet_10.png)

9. Nella schermata che segue, clicca su `OK` per eseguire la prova di connessione.

   ![](/images/riiconnect24/Internet_11.png)

   ![](/images/riiconnect24/Internet_12.png)

   - Se la prova di connessione è andata a buon fine, seleziona `No` per rifiutare l'aggiornamento di sistema.
   - Se fallisce con un codice di errore `521xx`, verifica di avere inserito il DNS correttamente.
   - Se continua a fallire, [usa un altro exploit](get-started).

### Sezione II - Attivazione dell'exploit

1. Naviga su `Internet` -> `Accordo/Contatto`.

2. Seleziona `Sì`.

3. Clicca `Avanti`.

   - Dovrebbe apparire la seguente schermata:

   ![](/images/exploits/str2hax/EULA.png)

   - Se ottieni l'EULA normale, il tuo ISP blocca l'uso di DNS personalizzati. Prova un'altra connessione o [usa un altro exploit](get-started).

4. Dai all'exploit 1 o 2 minuti per scaricare i file necessari (e non premere `ACCETTO`/`NON ACCETTO`).

5. Se l'exploit è avvenuto con successo, il tuo dispositivo avrà caricato l'installer di HackMii.

   ![](/images/hackmii/scam.png)

   - Se l'Hackmii Installer non viene caricato dopo più di 2 minuti, o ricevi un errore come `Hanging.` oppure `ERROR! if_config (ret = ...)`, riavvia la console Wii e riprova.

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::
