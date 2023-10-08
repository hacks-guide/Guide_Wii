---
title: "d2xl cIOS para Wii mini (experimental)"
---

{% include toc title="Sumário" %}

Se você precisar de ajuda com qualquer coisa relacionada a este tutorial, junte-se ao [servidor do Wii Mini Hacking do Discord](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

Embora as [cIOS](https://wiibrew.org/wiki/Custom_IOS) tenham sido amplamente suplantadas pela AHBPROT, que oferece acesso completo ao hardware, ele ainda tem aplicativos úteis. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

Este guia destina-se apenas a usuários do Wii mini. Caso você tenha um Wii normal, siga [este guia](cios).
{: .notice--warning}

Não tente instalar um IOS ou Menu do Sistema do Wii no Wii mini. Fazer isso irá [brickar](bricks#ios-brick) seu console.
{: .notice--warning}

Este instalador d2x cIOS foi desenvolvido originalmente para o vWii do Wii U por DaveBaol e cIOS personalizados foram criados por Leseratte para o Wii mini. A página original de download pode ser encontrada [aqui](https://wii.leseratte10.de/d2xl-cIOS/). A página do GitHub do Leseratte pode ser encontrada [aqui](https://github.com/Leseratte10/d2xl-cios). Por favor, note que esta cIOS ainda é experimental, embora nenhum problema com a funcionalidade tenha sido reportado.
{: .notice--info}

### Requisitos

* Um Wii mini com o Homebrew Channel instalado
* Um armazenamento USB
* [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) de Leseratte

### Instruções

#### Seção I - Baixando

1. Desligue seu console.
1. Insira seu armazenamento USB no seu computador.
1. Crie uma pasta chamada `apps` na raiz da sua unidade USB se ela ainda não existir.
1. Copie a pasta `d2x-cios-installer` do d2xl cIOS Installer `.zip` para a pasta `apps` na unidade USB.
1. Reinsira seu armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra o d2xl cIOS Installer da lista de homebrew.

#### Seção II - Instalando

1. Selecione `Continue`.
1. Defina as opções para o seguinte:
    ```
    Select cIOS <d2xl-v1-beta2>
Select cIOS base <57>
Select cIOS slot <249>
    ```
    + Anote o número da versão (`IOS57-64-` terminando em `v31776` ou `v31775`)
1. Pressione A para instalar.
    + Se a instalação falhar com o erro `TMD version mismatch`, pressione esquerda ou direita no controle sobre a opção `Select cIOS base` ate que o número da versão seja diferente da que você tentou antes. O número 57 não vai mudar.
1. Quando o processo for concluído, saia do instalador.

[Continue a fazer um Backup da NAND usando RealWnd](wnd-mini)
{: .notice--info}

#### Habilitando Ethernet

Se você deseja usar Wiimmfi com Ethernet em um Wii mini, você precisa executar o aplicativo [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) feito por Fullmetal5. Para executar, basta descompactá-lo na pasta `apps` do seu armazenamento USB e executá-lo do Homebrew Channel.

O Wii e Wii Mini só funcionam com adaptadores Ethernet usando o chip AX88772. Por favor, verifique se o produto é compatível antes de comprar. Este da UGREEN é conhecido por ser compatível: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
