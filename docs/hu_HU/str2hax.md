# str2hax

::: warning

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).

:::

Az str2hax egy exploit a Wii-hoz amit a Wii End User License Agreement betöltése vált ki. Nincs szüksége másra csak internet kapcsolatra, ami lehetővé teszi, hogy módosítsd a DNS-t a Wii-n.

::: warning

Ha telepítettél modokat, mint a CTGP Revolution vagy Project+, az str2hax előfordulhat, hogy elindul helyettük. Ha ez előfordul, indtsd újra a Wii-t és próbáld újra behelyzett SD kártya nélkül.

:::

## Követelmények

- Egy internetkapcsolattal rendelkező Wii

## Lépések

### I. rész – Csatlakozás

Az exploitnak szüksége van arra, hogy beállítsd a DNS-ed annak érdekében, hogy ahhoz a szerverhez csatlakozzon, ami tartalmazza az exploitot.

1. Kapcsold be a konzolod.

2. Menj a `Wii Options`-höz.

   ![](/images/riiconnect24/Internet_1.png)

3. Menj a `Wii Settings`-hez.

   ![](/images/riiconnect24/Internet_2.png)

4. Navigate to `Page 2` -> `Internet` -> `Connection Settings`.

   ![](/images/riiconnect24/Internet_3.png)

   ![](/images/riiconnect24/Internet_4.png)

5. Click on your network connection slot and navigate to `Change Settings`.

   ![](/images/riiconnect24/Internet_5.png)

   ![](/images/riiconnect24/Internet_6.png)

6. Set `Auto-Obtain DNS` to `No`, then click `Advanced Settings`.

   ![](/images/riiconnect24/Internet_7.png)

7. Állítsd be a Primary DNS-t `3.143.163.250`-re.

   ![](/images/exploits/str2hax/dns.png)

   ::: warning

   Ha 3 mező van 2 helyett (mint fent), menj vissza és ellenőrizd, hogy az `Auto-Obtain DNS` oldalon vagy-e.

   :::

8. Kattints a `Confirm`-ra, majd a `Save`-re.

   ![](/images/riiconnect24/Internet_10.png)

9. Ha kérdezi, kattints az `OK`-ra, hogy végrehajtsd a csatlakozási tesztet.

   ![](/images/riiconnect24/Internet_11.png)

   ![](/images/riiconnect24/Internet_12.png)

   - If the connection test was successful, select `No` to skip the Wii System Update.
   - If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
   - If it is still unsuccessful, please [use another exploit](get-started).

### II. rész - Az exploit kiváltása

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.

2. Válaszd a `Yes`-t.

3. Kattints a `Next`-re.

   - A következő képernyővel kell üdvözöljön:

   ![](/images/exploits/str2hax/EULA.png)

   - Ha a nomrál User Agreements-et kapod, az ISP-d blokkolja az egyedi DNS-t. Próbálj meg egy másik kapcsolatot vagy használj [egy másik exploit](get-started)-ot.

4. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).

5. If the exploit was successful, your device will have loaded the HackMii Installer.

   ![](/images/hackmii/scam.png)

   - If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
