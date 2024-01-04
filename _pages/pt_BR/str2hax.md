---
title: "str2hax"
---

{% include toc title="Sumário" %}

Observe que se o seu provedor de internet ou ambiente de rede impede o uso de servidores DNS personalizados, str2hax não funcionará e você deve [escolher outro exploit para usar](get-started).
{: .notice--warning}

str2hax é um exploit para o Wii que é acionado ao carregar o End User License Agreement do Wii. Isso requer nada além de uma conexão de Internet que permite alterar o DNS no seu Wii.

### Requisitos

* Um Wii com conexão à Internet

### Instruções

#### Problemas Comuns

Se você receber o User Agreement normal, seu provedor de acesso à internet bloqueia o uso de um DNS customizado. Por favor escolha [outro exploit](get-started).
{: .notice--warning}

Se o HackMii Installer não carregar após mais de 2 minutos, ou você receber um erro como `Hanging.` ou `ERROR! if_config (ret = ...)`, por favor reinicie o seu Wii e tente novamente.
{: .notice--warning}

Se você instalou um mod como CTGP Revolution ou Project+, str2hax vai carregar ao invés disso. Caso positivo, reinicie o seu Wii e tente novamente sem seu cartão SD inserido.
{: .notice--warning}

#### Seção I - Conectando

Este exploit exige que você configure seu DNS para se conectar a um servidor que contém o exploit.

1. Ligue o seu console.
1. Vá para `Wii Options`.

    ![](/images/riiconnect24/Internet_1.png)

1. Vá para `Wii Settings`.

    ![](/images/riiconnect24/Internet_2.png)

1. Vá para `Connection Settings`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Configurações de conexão

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Vá para `Auto-Obtain DNS` (não Endereço IP), então selecione `No`, e então `Advanced Settings`.

    ![](/images/riiconnect24/Internet_7.png)

1. Digite `18.188.135.9` como Primary DNS.

    ![](/images/exploits/str2hax/dns.png)

    Se há 3 campos ao invés de 2 (assim como acima), volte e certifique-se de que você está na página `Auto-Obtain DNS`.
    {: .notice--warning}

1. Selecione `Confirm`, depois selecione `Save`.

    ![](/images/riiconnect24/Internet_10.png)

1. Selecione `OK` para executar um teste de conexão.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + Se o teste de conexão foi bem-sucedido, selecione `No` para ignorar a Atualização do Sistema Wii.
    + Se falhar com o código de erro `521xx`, por favor verifique se o DNS foi inserido corretamente.
    + Se ainda não foi bem sucedido, use [outro exploit](get-started).

#### Seção II - Executando o Exploit

1. Vá para a seção `Internet`, então `User Agreements` ou `Agreement/Contact`, então `Yes`.
1. Vá em `Change Settings`.
1. Vá para a `Página 2` e clique em `Internet`.
    + Você deve ser recebido com a seguinte tela:

    ![](/images/exploits/str2hax/EULA.png)

1. Dê ao exploit 1-2 minutos para baixar (e não pressione `I ACCEPT`/`I DO NOT ACCEPT`).
1. Se o exploit foi bem sucedido, seu console irá carregar o Instalador HackMii.

    ![](/images/hackmii/scam.png)

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}
