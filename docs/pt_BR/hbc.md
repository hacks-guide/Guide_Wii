---
outline: false
---

# Instalação do Homebrew Channel e do BootMii

<br>

::::: tabs

:::: tab Wii

## Homebrew Channel and BootMii Installation for Wii

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

Se você não tem um cartão SD, você não pode instalar nem usar o BootMii, e assim não poderá utilizar nenhum dos benefícios mencionados.

You can always [install it later](hackmii).

:::

:::details Disclaimer for BootMii with boot2

BootMii can be installed in two ways: via IOS, or directly to a part of the Wii bootloader called boot2. If possible, it is urged to install as boot2 as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader). If you DO have the option to install as boot2, you should install both boot2 and IOS as instructed below so that you can launch BootMii in ways other than starting the console.

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

:::

## Instructions

1. Seu console deve estar ligado e mostrando o HackMii Installer da parte anterior do guia.

   - Você verá uma tela de aviso de golpe.

   ![](/images/hackmii/scam.png)

2. Espere 30 segundos para o texto "Press 1 to continue" aparecer, depois aperte 1.

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

11. Seu console terá iniciado o Homebrew Channel.

    ![](/images/hbc/blank.png)

### Leitura Obrigatória

Agora você pode usar o Homebrew Channel para iniciar aplicativos homebrew.

Aqui está uma dica - ao instalar aplicativos homebrew em seu cartão SD ou pendrive/armazenamento USB, a estrutura da pasta deve ficar assim:

```shell
💾 Cartão SD ou Armazenamento USB
➲ 📁 apps
    ├📁 NomeDoApp1
        ├📄 boot.dol
        ├📄 meta.xml
        ├📄 icon.png
    ├📁 NomeDoApp2
        ├📄 boot.dol
        ├📄 meta.xml
        ├📄 icon.png
```

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

---

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::

:::: tab Wii mini

## Homebrew Channel Installation for Wii mini

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

::: warning

Embora seja possível instalar o BootMii em um Wii mini, você precisará soldar um slot de cartão SD. Isso requer a abertura do seu Wii mini e o uso de ferramentas especiais, por isso não é recomendado.

:::

### Passos:

1. Seu console deve estar ligado e mostrando o HackMii Installer da parte anterior do guia.

   - Você verá uma tela de aviso de golpe.

   ![](/images/hackmii/scam.png)

2. Espere 30 segundos para o texto "Press 1 to continue" aparecer, depois aperte 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Seu console terá iniciado o Homebrew Channel.

   ![](/images/hbc/blank.png)

### Leitura Obrigatória

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

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

---

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::::
