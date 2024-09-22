---
title: "Instalação do Homebrew Channel e do BootMii"
---

{% include toc title="Sumário" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary> The Homebrew Channel is where you will go to launch homebrew applications. O BootMii é um software que pode fazer backup e restaurar o armazenamento NAND do seu Wii e, se for instalado no boot2, oferece proteção contra bricks.

BootMii pode ser instalado de duas maneiras: diretamente em uma parte do bootloader do Wii, chamado boot2, ou através de uma IOS. Na maioria dos casos, instalar o BootMii como IOS não deve ter problemas, contanto que você também instale o [Priiloader](priiloader). BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Se você não tem um cartão SD, você não pode instalar nem usar o BootMii, e assim não poderá utilizar nenhum dos benefícios mencionados. Você pode sempre [instalar em outro momento](hackmii).
{: .notice--warning}

### Instruções

1. Seu console deve estar ligado e mostrando o HackMii Installer da parte anterior do guia.
    + Você verá uma tela de aviso de golpe.

    ![](/images/hackmii/scam.png)

1. Espere 30 segundos para o texto "Press 1 to continue" aparecer, depois aperte 1.
1. Selecione `Exit` para finalmente abrir o Homebrew Channel.

    ![](/images/hackmii/test_results.png)

1. Selecione `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Pressione `Continue` quando terminado.

    ![](/images/hackmii/hbc_install_ok.png)

1. Assim que instalado, selecione `Back`, então selecione `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Se o BootMii dizer `can only be installed as an IOS`, isso é normal.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Assim que concluído, selecione `Continue`.
1. Selecione `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install4.png)

1. Selecione `Install BootMii as IOS`.
1. Seu console terá iniciado o Homebrew Channel.

    ![](/images/hbc/blank.png)

### Leitura Obrigatória

Agora você pode usar o Homebrew Channel para iniciar aplicativos homebrew.

Aqui está uma dica - ao instalar aplicativos homebrew em seu cartão SD ou pendrive/armazenamento USB, a estrutura da pasta deve ficar assim:

```
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

`AppName1` e `AppName2` são nomes temporários. Não aninhe múltiplas pastas `apps` dentro da própria pasta `apps`.

[Continue para fazer um backup da NAND usando BootMii](bootmii)<br> Fazer um backup da NAND com o BootMii neste ponto é altamente recomendado.
{: .notice--info}

Dica: Você pode perceber se um Wii tem o BootMii instalado como boot2 se seu slot de disco piscar muito rapidamente, só depois do flash imediato que acontece quando você pressiona o botão POWER.
{: .notice--info}
