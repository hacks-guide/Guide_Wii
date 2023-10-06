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

1. Quando concluído, selecione `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Selecione `Back`, e então selecione `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Selecione `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Quando concluído, selecione `Continue`.
1. Se você tem a opção para `Instalar BootMii como boot2`, por favor também faça.

    ![](/images/hackmii/bootmii_install4.png)

1. Selecione `Exit`.
1. Seu console terá iniciado o Homebrew Channel.

### Leitura obrigatória

Agora você pode usar o Homebrew Channel para iniciar homebrews, bem como o BootMii para o backup e restauração da sua NAND se você conseguir instalá-lo.

Nota: Ao instalar aplicativos homebrew em seu cartão SD ou no armazenamento USB, a estrutura da pasta deve ficar assim:

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

`NomeDoApp1` e `NomeDoApp2` são nomes variáveis, ou seja, não são fixos. Não bagunce múltiplas pastas `apps` dentro da própria pasta `apps`.

[Continue fazendo um Backup da NAND usando o BootMii](bootmii)<br> Fazer um backup da NAND neste momento é altamente recomendável, como eles podem ser usados para se recuperar de tijolos.
{: .notice--info}

Dica: se um Wii tiver o BootMii instalado como boot2, seu drive de disco irá piscar brevemente após o flash imediato que acontece quando você pressiona o botão POWER
{: .notice--info}
