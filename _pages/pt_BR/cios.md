---
title: "cIOS"
---

{% include toc title="Sumário" %}

Embora as [cIOS](https://wiibrew.org/wiki/Custom_IOS) tenham sido amplamente suplantadas pela AHBPROT, que oferece acesso completo ao hardware, ele ainda tem aplicativos úteis. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

Se você tem um Wii mini, use [este guia](cios-mini) para cIOS. A tentativa de instalar outro cIOS em um Wii mini não funcionará.
{: .notice--warning}

### Requisitos

* Um Wii
* Um cartão SD ou um armazenamento USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Certifique-se de que se você estiver usando um cartão SD, o switch de bloqueio estar na posição desbloqueada, caso contrário, você não será capaz de selecionar as opções corretas no instalador.
{: .notice--warning}

### Instruções

#### Seção I - Baixando (somente necessário se seu Wii não tiver Internet)

Se o seu Wii tiver uma conexão com a internet, você pode pular esta seção.<br> No entanto, se você encontrar erros como `tcp_read timeout` e `net_gethostbyname failed:`Isso permitirá que o Wii pule a etapa de download.
{: .notice--warning}

Se você não estiver no Windows, pode baixar & rodar [este script](/assets/files/d2x_offline_ios.sh)e ele vai baixar os arquivos WAD para você.
{: .notice--info}

1. Desligue seu console.
1. Insira seu cartão SD ou armazenamento USB no seu computador.
1. No seu computador, baixe [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copie todos os arquivos de NUS Downloader `.zip` para uma pasta em seu computador.
1. Execute `NUS Downloader.exe`.
1. Navegue para `Database` > `IOS` > `IOS38`e selecione `v4123`.
    + Certifique-se de que "Pack WAD" está marcado.
    + *Não* marque "Patch IOS". Essa é a tarefa do instalador do cIOS.
1. Clique em `Start NUS Download!`.
1. Repita os passos acima para `IOS56 v5661`, `IOS57 v5918` e `IOS58 v6175`.
1. Quando o processo for concluído, haverá uma pasta chamada `titles` na mesma pasta que o NUS Downloader.
1. Abra a pasta `titles` e navegue por ela até você localizar os quatro arquivos WAD que você baixou.
1. Coloque cada arquivo WAD na raiz do seu cartão SD ou armazenamento USB.
    + Este deve ser o mesmo dispositivo que contém o d2x cIOS Installer.

Os arquivos WAD devem estar no seu cartão SD assim: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Seção II - Instalando

Se `d2x-v11-beta1` não estiver aparecendo, tente selecionar a base cIOS primeiro e depois verifique novamente. Isso também pode acontecer se o seu cartão SD estiver bloqueado.
{: .notice--info}

Em cada cIOS que você tenta instalar, você primeiro verá uma grade de IOS ativo no Wii. Basta pressionar A novamente, e ela será instalada. Então, você verá uma tela de resultados, pressione A também e vá para a próxima cIOS.
{: .notice--info}

1. Copie a pasta `apps` do d2x-cios-installer `.zip` para a raiz do seu cartão SD ou da unidade USB.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra o d2x cIOS Installer da lista de homebrews.
1. Quando perguntar qual IOS você gostaria de usar, selecione IOS 58.
    + Isso deveria funcionar em quase todos os casos.
1. Agora, você irá instalar as cIOS individualmente de 248-251. As configurações exatas necessárias estão listadas abaixo.
    + Instalação do cIOS 248

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <38>
        Select cIOS slot <248>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_248.png)

    + Instalação do cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Instalação do cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Instalação do cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

Continuar para a  [Instalação do Open Shop Channel](osc) Agora que seu Wii tem proteção adequada de bricks, você pode instalar o Open Shop Channel, um repositório confiável para homebrews que pode ser acessado dentro e fora do Wii.
{: .notice--info}
