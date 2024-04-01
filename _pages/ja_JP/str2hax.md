---
title: "Wiimmfi"
---

{% include toc title="Table of Contents" %}

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).
{: .notice--warning}

str2hax is an exploit for the Wii that is triggered by loading the Wii's End User License Agreement. It requires nothing but an Internet connection that lets you change the DNS on your Wii.

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.
{: .notice--warning}

### 必要なもの

* A Wii with an Internet connection

### 実行方法

#### Section I - Connecting

This exploit requires you to set your DNS in order to connect to a server that contains the exploit.

1. Wiiの電源を入れます。
1. Go to `Wii Options`.

    ![](/images/riiconnect24/Internet_1.png)

1. `Wii設定`に進みます。

    ![](/images/riiconnect24/Internet_2.png)

1. Go to `Connection Settings`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Go to `Change Settings`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Go to `Auto-Obtain DNS` (Not IP Address), then select `No`, then `Advanced Settings`.

    ![](/images/riiconnect24/Internet_7.png)

1. Type in `18.188.135.9` as the Primary DNS.

    ![](/images/exploits/str2hax/dns.png)

    If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.
    {: .notice--warning}

1. Select `Confirm`, then select `Save`.

    ![](/images/riiconnect24/Internet_10.png)

1. Select `OK` to perform a connection test.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + If the connection test was successful, select `No` to skip the Wii System Update.
    + If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
    + If it is still unsuccessful, please [use another exploit](get-started).

#### Section II - Triggering the Exploit

1. Go to the `Internet` section, then `User Agreements` or `Agreement/Contact`, then `Yes`.
1. Go to `Change Settings`.
1. Go to `Page 2`, then click on `Internet`.
    + You should be greeted with the following screen:

    ![](/images/exploits/str2hax/EULA.png)

    + If you get the normal User Agreements, your ISP blocks the use of custom DNS. Try another connection, or [use another exploit](get-started).

1. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).
1. 成功すると、WiiはHackMiiインストーラーをロードします。

    ![](/images/hackmii/scam.png)

    + If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}
