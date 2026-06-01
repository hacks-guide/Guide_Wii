---
outline: false
---

# Homebrew Channel și Instalare BootMii

<br>

::::: tabs

:::: tab Wii

## Homebrew Channel and BootMii Installation for Wii

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

Dacă nu ai un card SD, nu poți instala sau folosi BootMii, indiferent că îl instalezi ca IOS sau boot2.

You can always [install it later](hackmii).

:::

:::details Disclaimer for BootMii with boot2

BootMii can be installed in two ways: via IOS, or directly to a part of the Wii bootloader called boot2. If possible, it is urged to install as boot2 as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader). If you DO have the option to install as boot2, you should install both boot2 and IOS as instructed below so that you can launch BootMii in ways other than starting the console.

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

:::

## Instructions

1. Consola ta ar trebui să fie pornită și să afișeze Instalatorul HackMii din partea trecută a ghidului.

   - Vei vedea un ecran de avertizare pentru înșelăciune.

   ![](/images/hackmii/scam.png)

2. Așteaptă 30 de secunde pentru ca mesajul "Press 1 to continue" să apară, apoi apasă 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `BootMii...`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Select `Return to the main menu`, then select `Exit`.

11. Consola ta va rula Homebrew Channel.

    ![](/images/hbc/blank.png)

### Post-Installation Info

Acum poți să folosești Homebrew Channel pentru a rula aplicații homebrew cât și BootMii pentru a crea un backup și a restaura memoria ta NAND în cazul în care ai putut să-l instalezi.

Notă: Când instalezi aplicații homebrew pe cardul tău SD sau unitatea ta USB, structura dosarului tău ar trebui să arate astfel:

```shell
💾 Card SD sau Unitate USB
| ╸📁 apps
    | ╸📁 NumeAplicație1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 NumeAplicație2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` și `AppName2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.

### Autobootare

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This will restore your console behavior to booting to the system menu instaed of to BootMii.

1. Open `SD:/bootmii/bootmii.ini` with a text editor.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Salvează fișierul, urmat de ieșire.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

---

::: tip

[Continue to making a NAND Backup](nand-backup)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::: tab Wii mini

## Homebrew Channel Installation for Wii mini

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

::: warning

Cât timp este posibil să instalezi BootMii pe un Wii mini, va trebui să sudezi un slot de carduri SD. Asta necesită dezasamblarea consolei tale Wii mini și folosirea unor unelte specializate, așa că nu este recomandat.

:::

### Instrucțiuni

1. Consola ta ar trebui să fie pornită și să afișeze Instalatorul HackMii din partea trecută a ghidului.

   - Vei vedea un ecran de avertizare pentru înșelăciune.

   ![](/images/hackmii/scam.png)

2. Așteaptă 30 de secunde pentru ca mesajul "Press 1 to continue" să apară, apoi apasă 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Consola ta va rula Homebrew Channel.

   ![](/images/hbc/blank.png)

### Citire necesară

You can now use the Homebrew Channel to launch homebrew apps.

Note: When installing homebrew applications on your USB drive, your folder structure should look like this:

```shell
💾 USB Drive
| ╸📁 apps
    | ╸📁 AppName1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 AppName2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` și `AppName2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.

---

::: tip

[Continue to making a NAND Backup](nand-backup)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::::
