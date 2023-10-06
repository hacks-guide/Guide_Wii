---
title: "Instalação do Homebrew Channel e BootMii"
---

{% include toc title="Sumário" %}

O Homebrew Channel é onde você irá para executar homebrews. BootMii é um software capaz de fazer backup e restauração da NAND do seu Wii e, se instalado em boot2, fornece proteção contra bricks.

BootMii pode ser instalado de duas maneiras: diretamente em uma parte do bootloader do Wii, chamado boot2, ou através de uma IOS. BootMii sob boot2 é preferido, uma vez que fornece proteção estendida contra brick, mas os Wiis com boot2 vulnerável são consideravelmente mais raros, tendo sido fabricado antes de 2009. Na maioria dos casos, instalar o BootMii como IOS não deve ter problemas, contanto que você também instale o [Priiloader](priiloader).
{: .notice--info}

Se você não tem um cartão SD, você não pode instalar nem usar o BootMii, independente se você o instalar como IOS ou boot2. Você sempre pode [instalá-lo depois](hackmii).
{: .notice--warning}

### Instruções

1. Seu console deve estar ligado e mostrando o HackMii Installer da parte anterior do guia.
    + Você verá uma tela de aviso de golpe financeiro.

    ![](/images/hackmii/scam.png)

1. Aguarde 30 segundos para que o texto "Press 1 to continue" apareça, então pressione 1.
1. Selecione `Continue`.

    ![](/images/hackmii/test_results.png)

1. Selecione `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Once it is completed, select `Continue`.
1. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

1. Select `Exit`.
1. Your console will have booted into the Homebrew Channel.

### Required Reading

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

Note: When installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card or USB Drive
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

[Continue to making a NAND Backup using BootMii](bootmii)<br> Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.
{: .notice--info}

Tip: If a Wii has BootMii installed as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
