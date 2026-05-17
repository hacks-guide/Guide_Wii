# Wiimmfi

::: warning

Though str2hax allows you to install the Homebrew Channel on a Wii without an SD card, other vital steps later on (such as installing BootMii) still require an SD card.

::: warning

Note that if your ISP or networking environment prevents using custom DNS servers, str2hax will not work and you should [choose another exploit to use](get-started).

:::

str2hax es un exploit para la Wii que se activa mediante el Contrato de Uso de los Servicios de Red de Wii. Lo único que se requiere es una conexión a internet que te permita cambiar el servidor DNS en los ajustes de la consola.

::: warning

If you have installed a mod like CTGP Revolution or Project+, str2hax may load that instead. If it does, restart your Wii and try again without your SD card inserted.

:::

## Requirements

- Una Wii con conexión a internet

## Instructions

### Section I - Connecting

Este exploit requiere que cambies tu configuración de DNS para poder conectarte al servidor que contiene el exploit.

1. Power on your console.

2. Go to `Wii Options`.

   ![](/images/riiconnect24/Internet_1.png)

3. Go to `Wii Settings`.

   ![](/images/riiconnect24/Internet_2.png)

4. Navigate to `Page 2` > `Internet` > `Connection Settings`.

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

### Sección II - Activando el exploit

1. Navigate to `Internet` -> `User Agreements` or `Agreement/Contact`.

2. Select `Yes`.

3. Click on `Next`.

   - A continuación debería aparecer esto en pantalla:

   ![](/images/exploits/str2hax/EULA.png)

   - Si en lugar de la página del exploit se muestra el Contrato de Uso de los Servicios de Red de Wii, es probable que tu ISP no permita usar DNS alternativos. Try another connection, or [use another exploit](get-started).

4. Give the exploit 1-2 minutes to download (and don't press `I ACCEPT`/`I DO NOT ACCEPT`).

5. If the exploit was successful, your device will have loaded the HackMii Installer.

   ![](/images/hackmii/scam.png)

   - If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
