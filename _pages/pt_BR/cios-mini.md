---
title: "d2xl cIOS para Wii mini (experimental)"
---

{% include toc title="Sumário" %}

Caso precise de ajuda com algo relacionado a este tutorial, entre no servidor do Discord [Wii mini Hacking](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Embora as [cIOS](https://wiibrew.org/wiki/Custom_IOS) tenham sido amplamente suplantadas pela AHBPROT, que oferece acesso completo ao hardware, ele ainda tem aplicativos úteis. Você agora poderá usar homebrew como o [USB Loader GX](usbloadergx) e [WiiFlow](wiiflow). Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

O d2x cIOS installer foi originalmente desenvolvido para o vWii do Wii U por DaveBaol, e cIOS customizadas no Wii mini foram criadas por Leseratte. A página de download original pode ser encontrada [aqui](https://wii.leseratte10.de/d2xl-cIOS/). A página do Github do Leseratte pode ser encontrada [aqui](https://github.com/Leseratte10/d2xl-cios). Note que esta cIOS ainda se encontra em estado experimental, embora não foram reportados problemas com a funcionalidade.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii Mini users. <br/> If you have a Wii, follow [this guide](cios) instead. <br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Se fizer isso irá provavelmente brickar seu console.
{: .notice--warning}

### Requisitos

* Um Wii Mini com Homebrew Channel instalado
* Um armazenamento USB
* [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) por Leseratte

### Instruções

#### Seção I - Baixando

1. Desligue seu console.
1. Insira seu armazenamento USB no seu computador.
1. Crie uma pasta chamada `apps` na raiz da sua unidade USB se ela ainda não existir.
1. Extraia o d2xl cIOS Installer para a pasta `apps` no seu armazenamento USB.
1. Reinsira seu armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Abra o d2xl cIOS Installer da lista de homebrew.

#### Parte II - Instalando

1. Selecione `Continue`.
1. Defina as opções para o seguinte:
    ```
    Select cIOS <d2xl-v1-beta2>
Select cIOS base <57>
Select cIOS slot <249>
    ```
    + Tome nota do número da versão (`IOS57-64-` finalizando em ambos `v31776` ou `v31775`)
1. Quando feito, pressione A para instalar.
    + Se a instalação falhar com um erro `TMD version mismatch`, pressione esquerda ou direita no +Control Pad em cima da opção `Select cIOS base` até que o número da versão seja diferente do que você tentou antes. O número 57 não irá mudar.
1. Assim que terminar, saia do instalador.

[Continue a fazer um Backup da NAND usando RealWnd](wnd-mini)
{: .notice--info}

#### Ativando Ethernet

Se você deseja usar o Wiimmfi com cabo Ethernet em um Wii mini, execute o aplicativo [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) por Fullmetal5. Para executar, basta extrair o arquivo na pasta `apps` do seu armazenamento USB e executá-lo pelo Homebrew Channel.

Os consoles Wii e Wii Mini só funcionam com adaptadores de Ethernet que usam o chip AX88772. Por favor, verifique se o produto é compatível antes de comprar. Este da UGREEN é conhecido por ser compatível: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
