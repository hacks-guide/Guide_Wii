---
title: "str2hax"
---

{% include toc title="Table of Contents" %}

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).
{: .notice--warning}

str2hax is an exploit for the Wii that is triggered by loading the Wii's End User License Agreement. It requires nothing but an Internet connection that lets you change the DNS on your Wii.

#### What you need

* A Wii with an Internet connection

#### Instructions

##### Section I - Connecting

This exploit requires you to set your DNS in order to connect to a server that contains the exploit.

1. Go to `Wii Options`.
    ![Wii Options](/images/RiiConnect24/Internet_1.png)
1. Go to `Wii Settings`.
    ![Wii Settings](/images/RiiConnect24/Internet_2.png)
1. Go to `Page 2`, then click on `Internet`.
    ![Internet](/images/RiiConnect24/Internet_3.png)
1. Go to `Connection Settings`.
    ![Connection Settings](/images/RiiConnect24/Internet_4.png)
1. Select your current connection.
    ![Current Connection](/images/RiiConnect24/Internet_5.png)
1. Go to `Change Settings`.
    ![Change Settings](/images/RiiConnect24/Internet_6.png)
1. Go to `Auto-Obtain DNS` (Not IP Address), then select `No`, then `Advanced Settings`.
    ![Auto-Obtain DNS](/images/RiiConnect24/Internet_7.png)
1. Type in `18.188.135.9` as the Primary DNS.
    ![str2hax DNS](/images/str2hax/dns.png)

    If there are 3 fields instead of 2 (like above), go back and make sure you are on the `Auto-Obtain DNS` page.
    {: .notice--warning}

1. Select `Confirm`, then select `Save`.
    ![Save DNS](/images/RiiConnect24/Internet_10.png)
1. Select `OK` to perform a connection test.
    ![Connection Test](/images/RiiConnect24/Internet_11.png)
    ![Connection Test Successful](/images/RiiConnect24/Internet_12.png)
        - If the connection test was successful, select `No` to skip the Wii System Update.
        - If it fails with error code `521xx`, please verify that you have entered the DNS correctly.
        - If it is still unsuccessful, please [use another exploit](get-started).

##### Section II - Triggering the Exploit

1. Go to the `Internet` section, then `User Agreements` or `Agreement/Contact`, then `Yes`.
1. Click on `Next`. You should be greeted with the following screen:
    ![str2hax EULA page](/images/str2hax/EULA.png)
1. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).
1. Once the exploit downloads, you will see a few text screens, then a mess of colors, then finally, the HackMii Installer.
    ![HackMii Installer scam screen](/images/hackmii/scam.png)

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}

##### Common issues

If you get the normal User Agreements, your ISP blocks the use of custom DNS. Please [use another exploit](get-started).
{: .notice--warning}

If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.
{: .notice--warning}

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.
{: .notice--warning}
