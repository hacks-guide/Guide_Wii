---
title: "str2hax"
---

{% include toc title="Tartalomjegyzék" %}

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).
{: .notice--warning}

str2hax is an exploit for the Wii that is triggered by loading the Wii's End User License Agreement. It requires nothing but an Internet connection that lets you change the DNS on your Wii.

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.
{: .notice--warning}

### Követelmények

* Egy internetkapcsolattal rendelkező Wii

### Útmutató

#### I. rész – Csatlakozás

Az exploitnak szüksége van arra, hogy beállítsd a DNS-ed annak érdekében, hogy ahhoz a szerverhez csatlakozzon, ami tartalmazza az exploitot.

1. Kapcsold be a konzolt!
1. Menj a `Wii Options`-höz.

    ![](/images/riiconnect24/Internet_1.png)

1. Nyisd meg a konzol beállításait (`Wii Settings`)!

    ![](/images/riiconnect24/Internet_2.png)

1. Navigálj a `Page 2` -> `Internet` -> `Connection Settings` opcióig.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Kattints a hálózati kapcsolatod slot-jára és navigálj a `Change Settings` opcióhoz.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Állítsd be az `Auto-Obtain DNS`-t `No`-ra, majd kattints az `Advanced Settings`-re.

    ![](/images/riiconnect24/Internet_7.png)

1. Állítsd be a Primary DNS-t `18.188.135.9`-re.

    ![](/images/exploits/str2hax/dns.png)

    If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.
    {: .notice--warning}

1. Kattints a `Confirm`-ra, majd a `Save`-re.

    ![](/images/riiconnect24/Internet_10.png)

1. Ha kérdezi, kattints az `OK`-ra, hogy végrehajtsd a csatlakozási tesztet.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + If the connection test was successful, select `No` to skip the Wii System Update.
    + If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
    + If it is still unsuccessful, please [use another exploit](get-started).

#### II. rész - Az exploit kiváltása

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.
1. Válaszd a `Yes`-t.
1. Kattints a `Next`-re.
    + A következő képpel kell üdvözöljön:

    ![](/images/exploits/str2hax/EULA.png)

    + If you get the normal User Agreements, your ISP blocks the use of custom DNS. Try another connection, or [use another exploit](get-started).

1. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).
1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.

    ![](/images/hackmii/scam.png)

    + If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}
