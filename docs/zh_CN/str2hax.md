# Wiimmfi

::: warning

Though str2hax allows you to install the Homebrew Channel on a Wii without an SD card, other vital steps later on (such as installing BootMii) still require an SD card.

::: warning

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).

:::

str2hax 是一种通过加载 Wii 最终用户许可协议触发的 Wii 漏洞。 它只需要一个可以在 Wii 上更改 DNS 的互联网连接。

::: warning

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.

:::

## 需要

- 一台有互联网连接的Wii

## 步骤

### 第一部分 - 连接

此漏洞需要您设置 DNS，以便连接到包含漏洞的服务器。

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

### 第二部分 - 触发漏洞

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.

2. Select `Yes`.

3. Click on `Next`.

    - 您将会看到以下屏幕：

    ![](/images/exploits/str2hax/EULA.png)

    - 如果您看到了正常的用户协议，这意味着您的 ISP 阻止了使用自定义 DNS。 Try another connection, or [use another exploit](get-started).

4. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).

5. If the exploit was successful, your device will have loaded the HackMii Installer.

    ![](/images/hackmii/scam.png)

    - If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
