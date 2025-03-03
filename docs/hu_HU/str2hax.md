# str2hax

::: warning

Habár az str2hax lehetővé teszi, hogy telepítsd a Homebrew Channel egy Wii-on SD kártya nélkül, más lényeges lépések később (mint például a BootMii telepítése) továbbra is igényelnek SD kártyát.

::: warning

Fontos tudnod, hogyha az ISP-d vagy a hálózati környezeted nem engedi, hogy egyéni DNS szervert használj, az str2hax nem fog működni és [egy másik exploitot kell választanod](get-started).

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

4. Navigálj a Page 2`->`Internet`->`Connection Settings\\` opcióig.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

5. Kattints a hálózati kapcsolatod slot-jára és navigálj a `Change Settings` opcióhoz.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

6. Állítsd be az `Auto-Obtain DNS`-t `No`-ra, majd kattints az `Advanced Settings`-re.

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

    - Ha a csatlakozási teszt sikeres volt, válaszd a `No`-t, hogy átugord a Wii System Update-et.
    - Ha hibára fut `521xx` hibakóddal, kérjük ellenőrizd, hogy pontosan adtad-e meg a DNS-t.
    - Ha továbbra is sikertelen, kérjük [használj egy másik exploitot](get-started).

### II. rész - Az exploit kiváltása

1. Navigálj az `Internet` -> `User Agreements` or `Agreement/Contact`opcióhoz.

2. Válaszd a `Yes`-t.

3. Kattints a `Next`-re.

    - A következő képernyővel kell üdvözöljön:

    ![](/images/exploits/str2hax/EULA.png)

    - Ha a nomrál User Agreements-et kapod, az ISP-d blokkolja az egyedi DNS-t. Próbálj meg egy másik kapcsolatot vagy használj [egy másik exploit](get-started)-ot.

4. Adj az exploitnak 1-2 percet a letöltésre (és ne nyomd meg az `I ACCEPT`/`I DO NOT ACCEPT`-et).

5. Ha az exploit sikeres volt, az eszközöd betöltötte a HackMii Installer-t.

    ![](/images/hackmii/scam.png)

    - Ha a HackMii Installer nem tölt be 2 perc után vagy hibát kapsz, mint `Hanging.` vagy `ERROR!` if_config (ret = ...)\`, kérjük indítsd újra a Wii-od és próbáld újra.

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
